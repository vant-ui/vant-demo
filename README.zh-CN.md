# Vant Demo

[English](./README.md) | 简体中文

当前仓库是 Vant 官方的示例仓库，包含 Vant、Vant Weapp 和 Vant Cli 相关的示例。

## 如何使用

1. 首先，克隆当前仓库到你的本地：

```bash
git clone git@github.com:vant-ui/vant-demo.git
```

2. 然后选择你需要的示例，比如 [Rsbuild](https://github.com/web-infra-dev/rsbuild) 项目示例：

```bash
cd vant/rsbuild
```

3. 通过 `npm` 或其他包管理器安装依赖，即可启动项目：

```bash
npm i
npm run dev
```

4. 你可以 Fork 一份当前项目，也可以直接从当前项目拷贝代码来使用。

## 目录结构

```bash
├── vant                # Vant 相关示例
│   ├── rsbuild         使用 Vue 3、Vant 4、Rsbuild 搭建应用
│   ├── vite            使用 Vue 3、Vant 4、Vite 搭建应用
│   ├── nuxt3           使用 Nuxt 3、Vant 4 搭建应用
│   ├── vue3-ts         使用 Vue 3、Vant 4、TS、Vite 搭建应用
│   ├── cdn             通过 CDN 引入 Vant
│   ├── rem             配置 rem 适配
│   └── viewport        配置 viewport 配置
│
├── vant-weapp          # Vant Weapp 相关示例
│   └── base            使用 Vant Weapp 搭建小程序
│
├── react-vant          # React Vant 相关示例
│   └── rsbuild         使用 React Vant 和 Rsbuild 搭建应用
│
└── vant-cli            # Vant Cli 相关示例
    └── base            使用 Vant Cli 搭建组件库
```
