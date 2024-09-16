# Vant Demo

English | [简体中文](./README.zh-CN.md)

The current repository is the official example repository for Vant, which includes examples related to Vant, Vant Weapp, and Vant Cli.

## How to Use

1. First, clone the current repository to your local:

```bash
git clone git@github.com:vant-ui/vant-demo.git
```

2. Then, choose the example you need, such as the [Rsbuild](https://github.com/web-infra-dev/rsbuild) project example:

```bash
cd vant/rsbuild
```

3. Install the dependencies using `npm` or other package managers, and start the project:

```bash
npm i
npm run dev
```

4. You can fork the current project or directly copy the code from the current project to use.

## Directory Structure

```bash
├── vant                # Examples related to Vant
│   ├── rsbuild         Building applications using Vue 3, Vant 4, and Rsbuild
│   ├── vite            Building applications using Vue 3, Vant 4, and Vite
│   ├── nuxt3           Building applications using Nuxt 3 and Vant 4
│   ├── vue3-ts         Building applications using Vue 3, Vant 4, TypeScript, Vite
│   ├── cdn             Importing Vant through CDN
│   ├── rem             Configuring rem adaptation
│   ├── viewport        Configuring viewport settings
│   └── typescript      Configuring TypeScript and importing on demand
│
├── vant-weapp          # Examples related to Vant Weapp
│   └── base            Building mini-programs using Vant Weapp
│
├── react-vant          # Examples related to React Vant
│   └── rsbuild         Building applications using React Vant and Rsbuild
│
└── vant-cli            # Examples related to Vant Cli
    └── base            Building component libraries using Vant Cli
```
