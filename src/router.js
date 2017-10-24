import Vue from 'vue';
import Router from 'vue-router';

const User = r => require.ensure([], () => r(require('./view/user')), 'user');
const Cart = r => require.ensure([], () => r(require('./view/cart')), 'cart');
const Goods = r => require.ensure([], () => r(require('./view/goods')), 'goods');

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/user'
  },
  {
    name: 'user',
    component: User,
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: Goods,
    meta: {
      title: '商品详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
