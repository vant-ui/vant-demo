# Vant 示例

本目录下包含基于 Vue Cli 搭建 Vant 的相关示例，其中 cdn、vue2、vue3 目录为基础用法示例，其余目录为进阶配置的示例。

## 目录

### cdn

`cdn` 目录下包含了通过 CDN 引入 Vant 的示例，在浏览器内打开 `cdn/index.html` 文件即可查看效果。

> 技术栈：Vue 3、Vant 3

### rsbuild (推荐)

`rsbuild` 目录示范了如何用 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 搭建工程。

> 技术栈：Vue 3、Vant 4、Rsbuild

### vite

`vite` 目录示范了如何用 `Vite` 搭建工程。

> 技术栈：Vue 3、Vant 4、Vite

### nuxt3

基于 `nuxt 3` 的示例工程。

> 技术栈：Vue 3、Vant 4、Nuxt 3

### vue3

`vue3` 目录示范了如何用 Vue 3 和 Vant 4 搭建工程。

> 技术栈：Vue 3、Vant 4、Vue Cli

### vue3-ts

`vue3-ts` 目录示范了如何用 Vue 3 + ts 和 Vant 4 搭建工程。

> 技术栈：Vue 3、Vant 4、vite、ts、pnpm

## 废弃

下面是一些基于 Vue 2 的旧版 demo，仅供参考。

### vue2

`vue2` 目录示范了如何用 Vue 2 和 Vant 2 搭建几个简单的电商页面，包含如下功能：

- 基于 Vant 搭建
- 基于 vue-router 的单页面应用
- 组件按需引入
- 视图异步加载

> 技术栈：Vue 2、Vant 2、Vue Cli、Vue Router

### rem

`rem` 工程在 `vue2` 工程的基础上增加了移动端 rem 适配的配置。

> 技术栈：Vue 2、Vant 2、Vue Cli、Vue Router

### viewport

`viewport` 工程在 `vue2` 工程的基础上增加了移动端 vw/vh 适配的配置。

> 技术栈：Vue 2、Vant 2、Vue Cli、Vue Router

## 预览

<img src="https://img.yzcdn.cn/public_files/2017/11/16/4b7eb956ba7d30d374a2310124bdb5fe.png" alt="demos" width="600" />

## 开发命令

```bash
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
