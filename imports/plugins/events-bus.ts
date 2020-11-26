import Vue from 'vue';

const bus = new Vue();

Vue.use(function install(_Vue: typeof Vue) {
  _Vue.prototype.$bus = bus;
});

export default bus;
