<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { Row, Col, Icon, Cell, CellGroup } from 'vant';

Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Icon.name, Icon);
Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
</script>

<style>
body {
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
</style>
