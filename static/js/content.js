!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = '/'),
    r((r.s = 173));
})({
  17: function (t, e, r) {
    t.exports = r(48);
  },
  173: function (t, e, r) {
    'use strict';
    r.r(e);
    var n,
      o = r(27),
      i = r(17),
      a = r.n(i);
      console.log(n);
    chrome.runtime.onMessage.addListener(function (t, e, r) {
      if ('getVideoData' === t.type) {
        console.log('receive message getVideoData',n);
        var i = n || {},
          c = i.bvid,
          u = i.cid;
        fetch(
          'https://api.bilibili.com/x/player/playurl?bvid='
            .concat(c, '&cid=')
            .concat(u, '&platform=html5&high_quality=1'),
          { credentials: 'same-origin' }
        ).then(
          (function () {
            var t = Object(o.a)(
              a.a.mark(function t(e) {
                var r;
                return a.a.wrap(function (t) {
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.json();
                      case 2:
                        (r = t.sent),
                          chrome.runtime.sendMessage(
                            { type: 'sendVideoDataFromContent', videoData: n, result: r },
                            function (t) {}
                          );
                      case 4:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })()
        );
      }
    }),
      window.addEventListener('message', function (t) {
        var e, r, o;
        'sendVideoDataFromInsert' === (null === (e = t.data) || void 0 === e ? void 0 : e.type) &&
          (console.log('receive message sendVideoDataFromInsert', t.data),
          (n = null === (r = t.data) || void 0 === r ? void 0 : r.videoData),
          null === (o = t.data) || void 0 === o ? void 0 : o.cookie);
      }),
      (function (t, e) {
        var r = document.getElementsByTagName(e)[0],
          n = document.createElement('script');
        n.setAttribute('type', 'text/javascript'), n.setAttribute('src', t), r.appendChild(n);
      })(chrome.extension.getURL('insert.js'), 'body');
  },
  27: function (t, e, r) {
    'use strict';
    function n(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (s) {
        return void r(s);
      }
      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    function o(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);
          function c(t) {
            n(a, o, i, c, u, 'next', t);
          }
          function u(t) {
            n(a, o, i, c, u, 'throw', t);
          }
          c(void 0);
        });
      };
    }
    r.d(e, 'a', function () {
      return o;
    });
  },
  48: function (t, e, r) {
    var n = (function (t) {
      'use strict';
      var e,
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = 'function' === typeof Symbol ? Symbol : {},
        i = o.iterator || '@@iterator',
        a = o.asyncIterator || '@@asyncIterator',
        c = o.toStringTag || '@@toStringTag';
      function u(t, e, r) {
        return (
          Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
          t[e]
        );
      }
      try {
        u({}, '');
      } catch (T) {
        u = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function s(t, e, r, n) {
        var o = e && e.prototype instanceof y ? e : y,
          i = Object.create(o.prototype),
          a = new S(n || []);
        return (
          (i._invoke = (function (t, e, r) {
            var n = f;
            return function (o, i) {
              if (n === p) throw new Error('Generator is already running');
              if (n === d) {
                if ('throw' === o) throw i;
                return N();
              }
              for (r.method = o, r.arg = i; ; ) {
                var a = r.delegate;
                if (a) {
                  var c = _(a, r);
                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg;
                else if ('throw' === r.method) {
                  if (n === f) throw ((n = d), r.arg);
                  r.dispatchException(r.arg);
                } else 'return' === r.method && r.abrupt('return', r.arg);
                n = p;
                var u = l(t, e, r);
                if ('normal' === u.type) {
                  if (((n = r.done ? d : h), u.arg === v)) continue;
                  return { value: u.arg, done: r.done };
                }
                'throw' === u.type && ((n = d), (r.method = 'throw'), (r.arg = u.arg));
              }
            };
          })(t, r, a)),
          i
        );
      }
      function l(t, e, r) {
        try {
          return { type: 'normal', arg: t.call(e, r) };
        } catch (T) {
          return { type: 'throw', arg: T };
        }
      }
      t.wrap = s;
      var f = 'suspendedStart',
        h = 'suspendedYield',
        p = 'executing',
        d = 'completed',
        v = {};
      function y() {}
      function g() {}
      function m() {}
      var w = {};
      u(w, i, function () {
        return this;
      });
      var b = Object.getPrototypeOf,
        x = b && b(b(k([])));
      x && x !== r && n.call(x, i) && (w = x);
      var L = (m.prototype = y.prototype = Object.create(w));
      function E(t) {
        ['next', 'throw', 'return'].forEach(function (e) {
          u(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function j(t, e) {
        function r(o, i, a, c) {
          var u = l(t[o], t, i);
          if ('throw' !== u.type) {
            var s = u.arg,
              f = s.value;
            return f && 'object' === typeof f && n.call(f, '__await')
              ? e.resolve(f.__await).then(
                  function (t) {
                    r('next', t, a, c);
                  },
                  function (t) {
                    r('throw', t, a, c);
                  }
                )
              : e.resolve(f).then(
                  function (t) {
                    (s.value = t), a(s);
                  },
                  function (t) {
                    return r('throw', t, a, c);
                  }
                );
          }
          c(u.arg);
        }
        var o;
        this._invoke = function (t, n) {
          function i() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        };
      }
      function _(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
          if (((r.delegate = null), 'throw' === r.method)) {
            if (
              t.iterator.return &&
              ((r.method = 'return'), (r.arg = e), _(t, r), 'throw' === r.method)
            )
              return v;
            (r.method = 'throw'),
              (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
          }
          return v;
        }
        var o = l(n, t.iterator, r.arg);
        if ('throw' === o.type)
          return (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), v;
        var i = o.arg;
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
              (r.next = t.nextLoc),
              'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
              (r.delegate = null),
              v)
            : i
          : ((r.method = 'throw'),
            (r.arg = new TypeError('iterator result is not an object')),
            (r.delegate = null),
            v);
      }
      function O(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function P(t) {
        var e = t.completion || {};
        (e.type = 'normal'), delete e.arg, (t.completion = e);
      }
      function S(t) {
        (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(O, this), this.reset(!0);
      }
      function k(t) {
        if (t) {
          var r = t[i];
          if (r) return r.call(t);
          if ('function' === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              a = function r() {
                for (; ++o < t.length; )
                  if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                return (r.value = e), (r.done = !0), r;
              };
            return (a.next = a);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: e, done: !0 };
      }
      return (
        (g.prototype = m),
        u(L, 'constructor', m),
        u(m, 'constructor', g),
        (g.displayName = u(m, c, 'GeneratorFunction')),
        (t.isGeneratorFunction = function (t) {
          var e = 'function' === typeof t && t.constructor;
          return !!e && (e === g || 'GeneratorFunction' === (e.displayName || e.name));
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, m)
              : ((t.__proto__ = m), u(t, c, 'GeneratorFunction')),
            (t.prototype = Object.create(L)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        E(j.prototype),
        u(j.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = j),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new j(s(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        E(L),
        u(L, c, 'Generator'),
        u(L, i, function () {
          return this;
        }),
        u(L, 'toString', function () {
          return '[object Generator]';
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = k),
        (S.prototype = {
          constructor: S,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = e),
              this.tryEntries.forEach(P),
              !t)
            )
              for (var r in this)
                't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ('throw' === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var r = this;
            function o(n, o) {
              return (
                (c.type = 'throw'),
                (c.arg = t),
                (r.next = n),
                o && ((r.method = 'next'), (r.arg = e)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                c = a.completion;
              if ('root' === a.tryLoc) return o('end');
              if (a.tryLoc <= this.prev) {
                var u = n.call(a, 'catchLoc'),
                  s = n.call(a, 'finallyLoc');
                if (u && s) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!s) throw new Error('try statement without catch or finally');
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i ? ((this.method = 'next'), (this.next = i.finallyLoc), v) : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ('throw' === t.type) throw t.arg;
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
                : 'normal' === t.type && e && (this.next = e),
              v
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), P(r), v;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ('throw' === n.type) {
                  var o = n.arg;
                  P(r);
                }
                return o;
              }
            }
            throw new Error('illegal catch attempt');
          },
          delegateYield: function (t, r, n) {
            return (
              (this.delegate = { iterator: k(t), resultName: r, nextLoc: n }),
              'next' === this.method && (this.arg = e),
              v
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (o) {
      'object' === typeof globalThis
        ? (globalThis.regeneratorRuntime = n)
        : Function('r', 'regeneratorRuntime = r')(n);
    }
  },
});
