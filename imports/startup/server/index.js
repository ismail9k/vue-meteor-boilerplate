import { VueSSR } from 'meteor/akryum:vue-ssr';
import CreateApp from '/imports/app';

VueSSR.createApp = function (context) {
  const { app, router } = CreateApp();
  // Set the url in the router
  router.push(context.url);

  // Called when Vue app has finished rendering
  context.rendered = () => {
    // Inject some arbitrary JS
    context.js = `console.log('hello')`;
  };

  return app;
};
