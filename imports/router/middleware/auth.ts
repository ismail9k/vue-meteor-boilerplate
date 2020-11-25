import router from '../router';
import { NavigationGuardNext, Route } from 'vue-router';
import { Meteor } from 'meteor/meteor';

// router gard
router.beforeEach((_to: Route, _from: Route, next: NavigationGuardNext) => {
  const user = Meteor.user();
  // TODO: Check for user auth
  next();
});
