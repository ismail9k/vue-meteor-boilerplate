import Vue from 'vue';

import router from '/imports/router';
import store from '/imports/store';

import App from '/imports/ui/App.vue';

// plugins
import '/imports/plugins/vue-meteor-tracker';
import '/imports/plugins/events-bus';
import '/imports/plugins/vue-meta';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
}

/**
 * Create App instance
 */
function CreateApp(): {
  app: Vue,
  router: VueRouter,
  store: Store<any>,
} {
  return {
    app: new Vue({
      router,
      store,
      ...App,
    }),
    router,
    store,
  };
}

export default CreateApp;
