import Home from '/imports/ui/views/Home.vue';

export default [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: Home,
    meta: { public: true },
  },
];
