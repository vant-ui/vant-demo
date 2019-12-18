# Vant-demo

Vant 示例工程，基于 Vue Cli 4 搭建。

## 目录

### cdn

cdn 目录下包含了通过 CDN 引入 Vant 的示例，在浏览器内打开 cdn/index.html 即可查看效果。

> 技术栈：Vue、Vant

### base

base 工程示范了如何用 Vant 搭建几个简单的电商页面，包含如下功能：

- 基于 Vant 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- 视图异步加载

> 技术栈：Vue、Vue Cli、Vue Router、Vant

### rem

rem 工程在 base 工程的基础上增加了移动端 rem 适配的配置。

> 技术栈：Vue、Vue Cli、Vue Router、Vant

### viewport

viewport 工程在 base 工程的基础上增加了移动端 vw/vh 适配的配置。

> 技术栈：Vue、Vue Cli、Vue Router、Vant

### theme

theme 工程在 base 工程的基础上增加了自定义主题色的配置。

> 技术栈：Vue、Vue Cli、Vue Router、Vant

### typescript

基于 typescript 的工程，使用 ts-import-plugin 实现组件按需引入。

> 技术栈：Vue、Vue Cli、Vue Router、Vant、TypeScript

### vant-cli

Vant Cli 的基础示例工程，示范通过 Vant Cli 快速搭建一套组件库。

> 技术栈：Vue、Vant Cli


## 预览

<img src="https://img.yzcdn.cn/public_files/2017/11/16/4b7eb956ba7d30d374a2310124bdb5fe.png" alt="demos" width="600" />

## 开发命令

``` bash
# 安装依赖
# 注意：请切换到对应的子目录下安装
cd base
npm install

# 本地开发
# 通过 localhost:8080 访问页面
npm run serve

# 生产环境构建
npm run build

# 代码格式校验
npm run lint
```
