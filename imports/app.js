import Vue from 'vue';

import router from '/imports/router';
import store from '/imports/store';

import App from '/imports/ui/App.vue';

// plugins
import '/imports/plugins/vue-meteor-tracker';
import '/imports/plugins/events-bus';
import '/imports/plugins/vue-meta';

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
}

/**
 * Create App instance
 */
function CreateApp() {
  return {
    app: new Vue({
      el: '#app',
      router,
      store,
      ...App,
    }),
    router,
    store,
  };
}

export default CreateApp;
