#!/bin/bash

# SSL证书设置脚本

# 服务器信息
SERVER_IP="117.50.173.193"
USERNAME="ubuntu"
PASSWORD="yanbaobao0613@"
PORT="22"
DOMAIN="7zi.top"
EMAIL="admin@7zi.top"  # 请替换为您的真实邮箱

echo "SSL证书设置脚本"
echo "请确保域名 $DOMAIN 和 www.$DOMAIN 已解析到您的服务器IP $SERVER_IP"
echo "如果尚未解析，请先更新DNS记录，然后再运行此脚本"

# 等待用户确认
read -p "域名是否已正确解析到服务器IP？(y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "请先更新DNS记录，然后重新运行此脚本"
    exit 1
fi

# 安装 sshpass（如果尚未安装）
if ! command -v sshpass &> /dev/null; then
    echo "正在安装 sshpass..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew install hudochenkov/sshpass/sshpass
        else
            echo "请先安装 Homebrew，然后运行: brew install hudochenkov/sshpass/sshpass"
            exit 1
        fi
    else
        # Ubuntu/Debian
        sudo apt-get update && sudo apt-get install -y sshpass
    fi
fi

# 方法1：尝试使用nginx插件申请证书
echo "尝试使用nginx插件申请SSL证书..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m $EMAIL"

if [ $? -eq 0 ]; then
    echo "SSL证书申请成功！"
    echo "您的网站现在可以通过HTTPS访问：https://$DOMAIN/changlangba"
    exit 0
fi

echo "Nginx插件申请失败，尝试使用手动模式..."

# 方法2：使用手动模式申请证书
echo "使用手动模式申请SSL证书..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo certbot certonly --manual --preferred-challenges http -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m $EMAIL --manual-public-ip-logging-ok"

if [ $? -eq 0 ]; then
    echo "SSL证书申请成功！"
    echo "现在更新Nginx配置以使用SSL证书..."
    
    # 更新Nginx配置以支持HTTPS
    NGINX_SSL_CONFIG="
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    # 重定向所有HTTP请求到HTTPS
    location / {
        return 301 https://\$server_name\$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name $DOMAIN www.$DOMAIN;
    
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    location /changlangba/ {
        alias /var/www/wanxing-report/;
        try_files \$uri \$uri/ /changlangba/index.html;
        
        # 处理SPA路由
        location /changlangba/assets/ {
            alias /var/www/wanxing-report/assets/;
        }
    }
    
    # 根路径可以重定向到子路径（可选）
    location = / {
        return 301 /changlangba/;
    }
    
    # 其他所有请求重定向到子路径
    location / {
        return 301 /changlangba\$request_uri;
    }
    
    # 配置 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
"
    
    # 上传新的SSL配置
    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "echo '$NGINX_SSL_CONFIG' | sudo tee /etc/nginx/sites-available/wanxing-report"
    
    # 重新加载Nginx
    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo nginx -t && sudo systemctl reload nginx"
    
    echo "SSL配置已完成！"
    echo "您的网站现在可以通过HTTPS访问：https://$DOMAIN/changlangba"
else
    echo "SSL证书申请失败。"
    echo "请确保："
    echo "1. 域名 $DOMAIN 和 www.$DOMAIN 已正确解析到服务器IP $SERVER_IP"
    echo "2. 服务器的80端口已开放"
    echo "3. 暂时停止可能占用80端口的其他服务"
fi