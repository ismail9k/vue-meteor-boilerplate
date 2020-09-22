import { VueSSR } from 'meteor/akryum:vue-ssr';
import CreateApp from '/imports/app';

VueSSR.createApp = function (context) {
  return new Promise(resolve => {
    const { app, router } = CreateApp();

    router.push(context.url);
    context.meta = app.$meta();

    context.appendHtml = () => {
      const { title, link, style, script, noscript, meta } = context.meta.inject();

      const body = script?.text({ body: true });
      const head = [meta, title, link, style, noscript].reduce(
        (acc, crr) => (acc += crr ? crr.text() : ''),
        ''
      );

      return { head, body };
    };

    resolve(app);
  });
};
