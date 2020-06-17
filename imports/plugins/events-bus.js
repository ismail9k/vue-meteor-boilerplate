import Vue from 'vue';

const bus = new Vue();

Vue.use(function install(Vue) {
  Vue.prototype.$bus = bus;
});

export default bus;
