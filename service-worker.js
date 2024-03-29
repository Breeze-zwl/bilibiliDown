if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const r = document.createElement('script');
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, t) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case 'exports':
                return r;
              case 'module':
                return n;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = t(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define('./service-worker.js', ['./workbox-8a532145'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/index.html', revision: '02eb045ccc6c3d23cb11c3ad03840d04' },
        { url: '/static/css/main.css', revision: 'f92daa00bf69d3207bea74fd41857b14' },
        { url: '/static/js/background.js', revision: 'd857482c82edaa25f905a445e542b59d' },
        { url: '/static/js/content.js', revision: '421b9d21fdae69ab7c650441e298e00a' },
        { url: '/static/js/main.js', revision: '102b9c824dd307dd2c63b1aa22ae9dff' },
      ],
      {}
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('/index.html'), {
        denylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
      })
    );
});
