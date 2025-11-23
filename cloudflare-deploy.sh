#!/bin/bash

# Cloudflare Pages 部署脚本

echo "开始构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "项目构建失败，退出部署。"
    exit 1
fi

echo "项目构建完成。"

echo "请按照以下步骤将项目部署到 Cloudflare Pages:"
echo "1. 将代码推送到 GitHub 仓库"
echo "2. 登录 Cloudflare 控制台"
echo "3. 进入 Pages 设置并连接 GitHub 账户"
echo "4. 选择对应的仓库"
echo "5. 设置构建配置:"
echo "   - 构建命令: npm run build"
echo "   - 发布目录: dist"
echo "6. 点击部署"
echo ""
echo "如果你已经有域名，请在部署后进行以下操作:"
echo "1. 在 Cloudflare Pages 项目设置中添加自定义域"
echo "2. 按照提示更新 DNS 记录"
echo "3. 等待 SSL 证书自动颁发"