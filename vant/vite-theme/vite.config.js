import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

export default {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "font-size-sm": "13px",
          "font-size-md": "15px",
          "font-size-lg": "17px",
          "action-bar-button-danger-color": "#7232dd",
          "action-bar-button-warning-color": "#3eaf7c",
        },
      },
    },
  },
  resolve: {
    alias: [{ find: /^~/, replacement: "" }],
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/less`,
        },
      ],
    }),
  ],
};
