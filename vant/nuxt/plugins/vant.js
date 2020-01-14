import Vue from 'vue';
import { Row, Col, Icon, Cell, CellGroup } from 'vant';

// 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
import 'vant/lib/index.css';

Vue.use(Row)
  .use(Col)
  .use(Icon)
  .use(Cell)
  .use(CellGroup);
