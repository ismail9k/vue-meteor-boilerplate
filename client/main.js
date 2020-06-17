import Vue from 'vue';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import router from '/imports/router';
import store from '/imports/store';

// plugins
import '/imports/plugins/vue-meteor-tracker';
import '/imports/plugins/events-bus';

import App from '/imports/ui/App.vue';

if (process.env.NODE_ENV === 'production') {
  Vue.config.devtools = false;
  Vue.config.productionTip = false;
}

/**
 * init vue
 */
function initApp() {
  new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App),
  });
}

Meteor.startup(() => {
  // Update vuex with the current store data
  Tracker.autorun(() => {
    const user = Meteor.user();
    store.commit('updateUser', user);
  });

  Tracker.autorun((computation) => {
    // wait until accounts is configured
    if (!Accounts.loginServicesConfigured()) return;

    // init the app
    setTimeout(initApp, 1);

    // terminate the tracker to prevent side-effects
    computation.stop();
  });
});
