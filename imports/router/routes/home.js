import Home from '/imports/ui/views/Home.vue';

export default [
  {
    path: '/',
    alias: '/home',
    redirect: '/products',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
  },
];
