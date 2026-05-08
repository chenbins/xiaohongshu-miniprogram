import { createSSRApp } from "vue";
import App from "./App.vue";
// 1. 引入 uview-plus
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App);
  // 2. 使用 uview-plus
  app.use(uviewPlus)
  return {
    app,
  };
}