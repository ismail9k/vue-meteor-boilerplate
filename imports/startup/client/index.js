import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import store from '/imports/store';
import CreateApp from '/imports/app';

Meteor.startup(() => {
  // Update vuex with the current store data
  Tracker.autorun(() => {
    const user = Meteor.user();
    store.commit('updateUser', user);
  });

  Tracker.autorun(computation => {
    // wait until accounts is configured
    if (!Accounts.loginServicesConfigured()) return;

    // init the app
    setTimeout(() => CreateApp().app.$mount('#app'));

    // terminate the tracker to prevent side-effects
    computation.stop();
  });
});
