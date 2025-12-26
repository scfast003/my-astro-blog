Markdown

# 🚀 Tiger's Personal Portfolio (基于 Astro)

这是一个极简、高性能的个人主页/博客系统，基于 **Astro**、**React** 和 **Tailwind CSS** 构建。

项目注重性能优化、SEO 友好，并且采用了**数据驱动**的开发模式，绝大部分个人信息都可以通过修改配置文件完成更新。

**演示界面**: [https://silver-custard-fe3385.netlify.app/](https://silver-custard-fe3385.netlify.app/)

## ✨ 主要特性

* **⚡️ 极致性能**: 基于 Astro 的静态生成 (SSG)，加载速度极快。
* **🎨 响应式设计**: 使用 Tailwind CSS，完美适配手机、平板和桌面端。
* **🛠 数据驱动**: 个人信息、社交链接、技能栈等均在独立的数据文件中管理。
* **🧩 组件化**: 使用 React 组件构建 UI，逻辑清晰。
* **🌗 暗黑模式**: 内置明亮/暗黑模式切换。
* **🔍 SEO 优化**: 内置 SEO Meta 标签管理。

## 🛠️ 技术栈

* **核心框架**: [Astro](https://astro.build/)
* **UI 库**: [React](https://reactjs.org/)
* **样式**: [Tailwind CSS](https://tailwindcss.com/)
* **图标库**: [Lucide React](https://lucide.dev/)
* **开发语言**: TypeScript

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone [https://github.com/scfast003/my-astro-blog.git](https://github.com/scfast003/my-astro-blog.git)
cd my-astro-blog
2. 安装依赖
推荐使用 npm 或 pnpm：

Bash

npm install
# 或者
pnpm install
3. 启动本地开发服务器
Bash

npm run dev
启动后，在浏览器访问 http://localhost:4321 即可看到效果。

4. 构建生产版本
Bash

npm run build
⚙️ 个性化配置 (如何修改内容)
本项目采用了数据与逻辑分离的设计，修改内容非常简单。

1. 修改个人基本信息
核心配置文件位于：src/content/profileData.ts

在这里你可以修改：

基本信息: 姓名、Slogan、个人简介。

头像路径: 修改 avatarUrl (默认指向 public/avatar.png)。

社交链接: 修改 links 对象内的 URL。

TypeScript

// src/content/profileData.ts 示例
export const PROFILE = {
  firstName: "Tiger",
  avatarUrl: "/avatar.png", 
  // ...
};
2. 更换头像与网站图标
请将你的图片文件放入项目根目录下的 public/ 文件夹：

个人头像: 命名为 avatar.png (建议 1:1 正方形)。

网站图标: 命名为 favicon.png。

3. 自定义简介图标 (高级功能)
为了实现特定的图标映射（例如“羽毛球”显示为“哑铃”），我们在组件层做了特殊处理。

步骤 A: 在 src/content/profileData.ts 的 shortIntros 数组中定义 icon 关键字（如 badminton, dota）。

步骤 B: 在 src/components/sections/IntroCard.astro 中修改 iconMap 对象，引入并绑定新的 Lucide 图标。

JavaScript

// src/components/sections/IntroCard.astro 示例
const iconMap = {
  laptop: Laptop,
  badminton: Dumbbell, // 🏸 映射为哑铃图标
  dota: Gamepad2,      // 🎮 映射为手柄图标
  // ...在此处添加更多映射
};
📦 部署指南
Vercel (推荐)
本项目已针对 Vercel 进行了优化，支持一键部署。

将代码推送到 GitHub。

登录 Vercel 并点击 "Add New Project"。

导入你的 GitHub 仓库。

Framework Preset 选择 Astro。

点击 Deploy。

Netlify / Cloudflare Pages
同样支持，构建命令均为 npm run build，输出目录为 dist。

如果是 Netlify，初次绑定域名可能需要添加 TXT 记录以验证所有权。

📂 项目结构概览
Plaintext

/
├── public/             # 静态资源 (avatar.png, favicon.png, robots.txt)
├── src/
│   ├── components/     # UI 组件 (IntroCard, Header, etc.)
│   ├── content/        # 核心数据文件 (profileData.ts)
│   ├── layouts/        # 页面布局 (BaseLayout.astro)
│   └── pages/          # 路由页面 (index.astro, projects.astro)
├── astro.config.mjs    # Astro 配置文件
└── tailwind.config.mjs # Tailwind 配置文件
📄 许可证
MIT License © 2025 Tiger
