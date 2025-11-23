#!/bin/bash

# 更新Nginx配置以更好地支持SSL证书申请

# 服务器信息
SERVER_IP="117.50.173.193"
USERNAME="ubuntu"
PASSWORD="yanbaobao0613@"
PORT="22"

# 新的Nginx配置内容（为SSL证书申请优化）
NGINX_CONFIG="
server {
    listen 80;
    server_name 7zi.top www.7zi.top;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
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

echo "正在更新服务器上的Nginx配置以支持SSL证书申请..."

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

# 在服务器上创建certbot目录
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo mkdir -p /var/www/certbot && sudo chown -R www-data:www-data /var/www/certbot"

# 将新配置上传到服务器
echo "上传新的Nginx配置..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "echo '$NGINX_CONFIG' | sudo tee /etc/nginx/sites-available/wanxing-report"

# 重新加载Nginx配置
echo "重新加载Nginx配置..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo nginx -t && sudo systemctl reload nginx"

echo "Nginx配置已更新！"
echo "请确保域名 7zi.top 和 www.7zi.top 已解析到您的服务器IP $SERVER_IP"
echo "然后再次尝试申请SSL证书"