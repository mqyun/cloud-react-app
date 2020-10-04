import routerTree from './router-tree';

export default [
  {
    path: routerTree.login,
    title: '登录',
    exact: true,
    component: () => import(/* webpackChunkName: "login" */ '@src/views/Login'),
    model: () =>
      import(/* webpackChunkName: "login-model" */ '@src/store/login'),
  },
  {
    path: routerTree.home,
    title: '首页',
    exact: true,
    component: () => import(/* webpackChunkName: "home" */ '@src/views/Home'),
  },
  {
    path: routerTree.notfound,
    exact: true,
    component: () =>
      import(/* webpackChunkName: "notfound" */ '@src/views/NotFound'),
  },
  {
    redirect: true,
    props: {
      from: '/',
      to: routerTree.login,
      exact: true,
    },
  },
  {
    redirect: true,
    props: {
      to: routerTree.notfound,
    },
  },
];
