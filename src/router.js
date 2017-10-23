import Vue from 'vue';
import Router from 'vue-router';

const User = r => require.ensure([], () => r(require('./view/user')), 'user');

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/index'
  },
  {
    name: 'user',
    path: '/',
    component: User,
    meta: {
      title: '会员中心'
    }
  }
];

// auto add route path
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
