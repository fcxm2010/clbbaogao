#!/bin/bash

# 部署脚本 - 将网站部署到云服务器

# 服务器信息
SERVER_IP="117.50.173.193"
USERNAME="ubuntu"
PASSWORD="yanbaobao0613@"
PORT="22"

echo "开始部署网站到云服务器..."

# 1. 构建项目
echo "正在构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "项目构建失败，退出部署。"
    exit 1
fi

echo "项目构建完成。"

# 2. 创建部署包
echo "准备部署文件..."
tar -czf deploy.tar.gz -C dist .

# 3. 安装 sshpass（如果尚未安装）
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

# 4. 上传部署包到服务器
echo "正在上传文件到服务器..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo rm -rf /var/www/wanxing-report"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo mkdir -p /var/www/wanxing-report"
sshpass -p "$PASSWORD" scp -P "$PORT" -o StrictHostKeyChecking=no deploy.tar.gz "$USERNAME@$SERVER_IP:/tmp/deploy.tar.gz"

# 5. 在服务器上解压文件并设置权限
echo "正在服务器上解压文件..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo tar -xzf /tmp/deploy.tar.gz -C /var/www/wanxing-report"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo chown -R www-data:www-data /var/www/wanxing-report"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo chmod -R 755 /var/www/wanxing-report"

# 6. 在服务器上安装和配置 Nginx
echo "正在服务器上安装和配置 Nginx..."
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo apt-get update && sudo apt-get install -y nginx"

# 创建 Nginx 配置文件
NGINX_CONFIG="
server {
    listen 80;
    server_name $SERVER_IP;
    
    root /var/www/wanxing-report;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # 配置 gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
"

sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "echo '$NGINX_CONFIG' | sudo tee /etc/nginx/sites-available/wanxing-report"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo ln -sf /etc/nginx/sites-available/wanxing-report /etc/nginx/sites-enabled/"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo rm -f /etc/nginx/sites-enabled/default"
sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no "$USERNAME@$SERVER_IP" -p "$PORT" "sudo nginx -t && sudo systemctl restart nginx"

# 7. 清理本地文件
rm -f deploy.tar.gz

echo "部署完成！"
echo "您可以通过访问 http://$SERVER_IP 来查看您的网站"