/*! For license information please see redoc.lib.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.Redoc = t())
    : (e.Redoc = t());
})(this, function () {
  return (function () {
    var e = {
        260: function (e, t, r) {
          'use strict';
          var n = r(15),
            o = r.n(n),
            i = r(645),
            s = r.n(i)()(o());
          s.push([
            e.id,
            '.ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y,.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y{opacity:.6}.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:hover>.ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x.ps--clicking .ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:hover>.ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style: none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.ps{overflow:auto!important}}\n',
            '',
            {
              version: 3,
              sources: ['webpack://./node_modules/perfect-scrollbar/css/perfect-scrollbar.css'],
              names: [],
              mappings:
                'AAGA,IACE,yBAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,qBAAA,CAMF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,WAAA,CAEA,QAAA,CAEA,iBAAA,CAGF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,UAAA,CAEA,OAAA,CAEA,iBAAA,CAGF,oDAEE,aAAA,CACA,4BAAA,CAGF,oJAME,UAAA,CAGF,kJAME,qBAAA,CACA,UAAA,CAMF,aACE,qBAAA,CAnEF,iBAAA,CAqEE,6DAAA,CACA,qEAAA,CACA,UAAA,CAEA,UAAA,CAEA,iBAAA,CAGF,aACE,qBAAA,CA/EF,iBAAA,CAiFE,4DAAA,CACA,oEAAA,CACA,SAAA,CAEA,SAAA,CAEA,iBAAA,CAGF,oGAGE,qBAAA,CACA,WAAA,CAGF,oGAGE,qBAAA,CACA,UAAA,CAIF,qCACE,IACE,uBAAA,CAAA,CAIJ,wEACE,IACE,uBAAA,CAAA',
              sourcesContent: [
                "/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n",
              ],
              sourceRoot: '',
            },
          ]),
            (t.Z = s);
        },
        645: function (e) {
          'use strict';
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var r = e(t);
                  return t[2] ? '@media '.concat(t[2], ' {').concat(r, '}') : r;
                }).join('');
              }),
              (t.i = function (e, r, n) {
                'string' == typeof e && (e = [[null, e, '']]);
                var o = {};
                if (n)
                  for (var i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    null != s && (o[s] = !0);
                  }
                for (var a = 0; a < e.length; a++) {
                  var l = [].concat(e[a]);
                  (n && o[l[0]]) ||
                    (r && (l[2] ? (l[2] = ''.concat(r, ' and ').concat(l[2])) : (l[2] = r)),
                    t.push(l));
                }
              }),
              t
            );
          };
        },
        15: function (e) {
          'use strict';
          function t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
          }
          e.exports = function (e) {
            var r,
              n,
              o =
                ((n = 4),
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((r = e)) ||
                  (function (e, t) {
                    var r =
                      e &&
                      (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']);
                    if (null != r) {
                      var n,
                        o,
                        i = [],
                        s = !0,
                        a = !1;
                      try {
                        for (
                          r = r.call(e);
                          !(s = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t);
                          s = !0
                        );
                      } catch (e) {
                        (a = !0), (o = e);
                      } finally {
                        try {
                          s || null == r.return || r.return();
                        } finally {
                          if (a) throw o;
                        }
                      }
                      return i;
                    }
                  })(r, n) ||
                  (function (e, r) {
                    if (e) {
                      if ('string' == typeof e) return t(e, r);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? t(e, r)
                          : void 0
                      );
                    }
                  })(r, n) ||
                  (function () {
                    throw new TypeError(
                      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                    );
                  })()),
              i = o[1],
              s = o[3];
            if ('function' == typeof btoa) {
              var a = btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                l = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(a),
                c = '/*# '.concat(l, ' */'),
                p = s.sources.map(function (e) {
                  return '/*# sourceURL='.concat(s.sourceRoot || '').concat(e, ' */');
                });
              return [i].concat(p).concat([c]).join('\n');
            }
            return [i].join('\n');
          };
        },
        388: function (e, t, r) {
          'use strict';
          r.d(t, {
            ZP: function () {
              return i;
            },
          });
          var n = require('lunr'),
            o = (e, t, r) =>
              new Promise((n, o) => {
                var i = e => {
                    try {
                      a(r.next(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  s = e => {
                    try {
                      a(r.throw(e));
                    } catch (e) {
                      o(e);
                    }
                  },
                  a = e => (e.done ? n(e.value) : Promise.resolve(e.value).then(i, s));
                a((r = r.apply(e, t)).next());
              });
          class i {
            constructor() {
              (this.add = d),
                (this.done = h),
                (this.search = b),
                (this.toJS = m),
                (this.load = y),
                (this.dispose = g),
                (this.fromExternalJS = f);
            }
          }
          let s,
            a,
            l,
            c = [];
          function p() {
            (s = new n.Builder()),
              s.field('title'),
              s.field('description'),
              s.ref('ref'),
              s.pipeline.add(n.trimmer, n.stopWordFilter, n.stemmer),
              (l = new Promise(e => {
                a = e;
              }));
          }
          (n.tokenizer.separator = /\s+/), p();
          const u = e => {
            const t = n.trimmer(new n.Token(e, {}));
            return '*' + n.stemmer(t) + '*';
          };
          function d(e, t, r) {
            const n = c.push(r) - 1,
              o = { title: e.toLowerCase(), description: t.toLowerCase(), ref: n };
            s.add(o);
          }
          function h() {
            return o(this, null, function* () {
              a(s.build());
            });
          }
          function m() {
            return o(this, null, function* () {
              return { store: c, index: (yield l).toJSON() };
            });
          }
          function f(e, t) {
            return o(this, null, function* () {
              try {
                if ((importScripts(e), !self[t])) throw new Error('Broken index file format');
                y(self[t]);
              } catch (e) {
                console.error('Failed to load search index: ' + e.message);
              }
            });
          }
          function y(e) {
            return o(this, null, function* () {
              (c = e.store), a(n.Index.load(e.index));
            });
          }
          function g() {
            return o(this, null, function* () {
              (c = []), p();
            });
          }
          function b(e, t = 0) {
            return o(this, null, function* () {
              if (0 === e.trim().length) return [];
              let r = (yield l).query(t => {
                e.trim()
                  .toLowerCase()
                  .split(/\s+/)
                  .forEach(e => {
                    if (1 === e.length) return;
                    const r = u(e);
                    t.term(r, {});
                  });
              });
              return t > 0 && (r = r.slice(0, t)), r.map(e => ({ meta: c[e.ref], score: e.score }));
            });
          }
        },
        342: function (e, t, r) {
          'use strict';
          const n = r(376),
            o = {}.NODE_DISABLE_COLORS
              ? { red: '', yellow: '', green: '', normal: '' }
              : { red: '[31m', yellow: '[33;1m', green: '[32m', normal: '[0m' };
          function i(e, t) {
            function r(e, t) {
              return n.stringify(e) === n.stringify(Object.assign({}, e, t));
            }
            return r(e, t) && r(t, e);
          }
          function s(e) {
            let t = (e = e.replace('[]', 'Array')).split('/');
            return (t[0] = t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm, '_')), t.join('/');
          }
          (String.prototype.toCamelCase = function () {
            return this.toLowerCase().replace(/[-_ \/\.](.)/g, function (e, t) {
              return t.toUpperCase();
            });
          }),
            (e.exports = {
              colour: o,
              uniqueOnly: function (e, t, r) {
                return r.indexOf(e) === t;
              },
              hasDuplicates: function (e) {
                return new Set(e).size !== e.length;
              },
              allSame: function (e) {
                return new Set(e).size <= 1;
              },
              distinctArray: function (e) {
                return (
                  e.length ===
                  (function (e) {
                    let t = [];
                    for (let r of e)
                      t.find(function (e, t, n) {
                        return i(e, r);
                      }) || t.push(r);
                    return t;
                  })(e).length
                );
              },
              firstDupe: function (e) {
                return e.find(function (t, r, n) {
                  return e.indexOf(t) < r;
                });
              },
              hash: function (e) {
                let t,
                  r = 0;
                if (0 === e.length) return r;
                for (let n = 0; n < e.length; n++)
                  (t = e.charCodeAt(n)), (r = (r << 5) - r + t), (r |= 0);
                return r;
              },
              parameterTypeProperties: [
                'format',
                'minimum',
                'maximum',
                'exclusiveMinimum',
                'exclusiveMaximum',
                'minLength',
                'maxLength',
                'multipleOf',
                'minItems',
                'maxItems',
                'uniqueItems',
                'minProperties',
                'maxProperties',
                'additionalProperties',
                'pattern',
                'enum',
                'default',
              ],
              arrayProperties: ['items', 'minItems', 'maxItems', 'uniqueItems'],
              httpMethods: ['get', 'post', 'put', 'delete', 'patch', 'head', 'options', 'trace'],
              sanitise: s,
              sanitiseAll: function (e) {
                return s(e.split('/').join('_'));
              },
            });
        },
        856: function (e, t, r) {
          'use strict';
          const n = r(147),
            o = r(17),
            i = r(416),
            s = r(416),
            a = r(66),
            l = r(53).jptr,
            c = r(401).recurse,
            p = r(683).clone,
            u = r(593).dereference,
            d = r(592).isRef,
            h = r(342);
          function m(e, t, r, n, o, s) {
            let a = s.externalRefs[r + n].paths[0],
              u = i.parse(o),
              m = {},
              f = 1;
            for (; f; )
              (f = 0),
                c(e, { identityDetection: !0 }, function (e, r, n) {
                  if (d(e, r))
                    if (e[r].startsWith('#'))
                      if (m[e[r]] || e.$fixed) {
                        if (!e.$fixed) {
                          let t = (a + '/' + m[e[r]]).split('/#/').join('/');
                          (n.parent[n.pkey] = { $ref: t, 'x-miro': e[r], $fixed: !0 }),
                            s.verbose > 1 && console.warn('Replacing with', t),
                            f++;
                        }
                      } else {
                        let o = p(l(t, e[r]));
                        if (
                          (s.verbose > 1 &&
                            console.warn(
                              (!1 === o ? h.colour.red : h.colour.green) + 'Fragment resolution',
                              e[r],
                              h.colour.normal,
                            ),
                          !1 === o)
                        ) {
                          if (((n.parent[n.pkey] = {}), s.fatal)) {
                            let t = new Error('Fragment $ref resolution failed ' + e[r]);
                            if (!s.promise) throw t;
                            s.promise.reject(t);
                          }
                        } else
                          f++, (n.parent[n.pkey] = o), (m[e[r]] = n.path.replace('/%24ref', ''));
                      }
                    else if (u.protocol) {
                      let t = i.resolve(o, e[r]).toString();
                      s.verbose > 1 &&
                        console.warn(
                          h.colour.yellow + 'Rewriting external url ref',
                          e[r],
                          'as',
                          t,
                          h.colour.normal,
                        ),
                        (e['x-miro'] = e[r]),
                        s.externalRefs[e[r]] &&
                          (s.externalRefs[t] || (s.externalRefs[t] = s.externalRefs[e[r]]),
                          (s.externalRefs[t].failed = s.externalRefs[e[r]].failed)),
                        (e[r] = t);
                    } else if (!e['x-miro']) {
                      let t = i.resolve(o, e[r]).toString(),
                        n = !1;
                      s.externalRefs[e[r]] && (n = s.externalRefs[e[r]].failed),
                        n ||
                          (s.verbose > 1 &&
                            console.warn(
                              h.colour.yellow + 'Rewriting external ref',
                              e[r],
                              'as',
                              t,
                              h.colour.normal,
                            ),
                          (e['x-miro'] = e[r]),
                          (e[r] = t));
                    }
                });
            return (
              c(e, {}, function (e, t, r) {
                d(e, t) && void 0 !== e.$fixed && delete e.$fixed;
              }),
              s.verbose > 1 && console.warn('Finished fragment resolution'),
              e
            );
          }
          function f(e, t) {
            if (!t.filters || !t.filters.length) return e;
            for (let r of t.filters) e = r(e, t);
            return e;
          }
          function y(e, t, r, s) {
            var c = i.parse(r.source),
              u = r.source.split('\\').join('/').split('/');
            u.pop() || u.pop();
            let d = '',
              h = t.split('#');
            h.length > 1 && ((d = '#' + h[1]), (t = h[0])), (u = u.join('/'));
            let y =
              ((g = i.parse(t).protocol),
              (b = c.protocol),
              g && g.length > 2 ? g : b && b.length > 2 ? b : 'file:');
            var g, b;
            let x;
            if (
              ((x =
                'file:' === y ? o.resolve(u ? u + '/' : '', t) : i.resolve(u ? u + '/' : '', t)),
              r.cache[x])
            ) {
              r.verbose && console.warn('CACHED', x, d);
              let e = p(r.cache[x]),
                n = (r.externalRef = e);
              if (d && ((n = l(n, d)), !1 === n && ((n = {}), r.fatal))) {
                let e = new Error('Cached $ref resolution failed ' + x + d);
                if (!r.promise) throw e;
                r.promise.reject(e);
              }
              return (n = m(n, e, t, d, x, r)), (n = f(n, r)), s(p(n), x, r), Promise.resolve(n);
            }
            if ((r.verbose && console.warn('GET', x, d), r.handlers && r.handlers[y]))
              return r.handlers[y](u, t, d, r)
                .then(function (e) {
                  return (r.externalRef = e), (e = f(e, r)), (r.cache[x] = e), s(e, x, r), e;
                })
                .catch(function (e) {
                  throw (r.verbose && console.warn(e), e);
                });
            if (y && y.startsWith('http')) {
              const e = Object.assign({}, r.fetchOptions, { agent: r.agent });
              return r
                .fetch(x, e)
                .then(function (e) {
                  if (200 !== e.status) {
                    if (r.ignoreIOErrors)
                      return (
                        r.verbose && console.warn('FAILED', t),
                        (r.externalRefs[t].failed = !0),
                        '{"$ref":"' + t + '"}'
                      );
                    throw new Error(`Received status code ${e.status}: ${x}`);
                  }
                  return e.text();
                })
                .then(function (e) {
                  try {
                    let n = a.parse(e, { schema: 'core', prettyErrors: !0 });
                    if (
                      ((e = r.externalRef = n),
                      (r.cache[x] = p(e)),
                      d && !1 === (e = l(e, d)) && ((e = {}), r.fatal))
                    ) {
                      let e = new Error('Remote $ref resolution failed ' + x + d);
                      if (!r.promise) throw e;
                      r.promise.reject(e);
                    }
                    e = f((e = m(e, n, t, d, x, r)), r);
                  } catch (e) {
                    if ((r.verbose && console.warn(e), !r.promise || !r.fatal)) throw e;
                    r.promise.reject(e);
                  }
                  return s(e, x, r), e;
                })
                .catch(function (e) {
                  if ((r.verbose && console.warn(e), (r.cache[x] = {}), !r.promise || !r.fatal))
                    throw e;
                  r.promise.reject(e);
                });
            }
            {
              const e = '{"$ref":"' + t + '"}';
              return (function (e, t, r, o, i) {
                return new Promise(function (s, a) {
                  n.readFile(e, t, function (e, t) {
                    e
                      ? r.ignoreIOErrors && i
                        ? (r.verbose && console.warn('FAILED', o),
                          (r.externalRefs[o].failed = !0),
                          s(i))
                        : a(e)
                      : s(t);
                  });
                });
              })(x, r.encoding || 'utf8', r, t, e)
                .then(function (e) {
                  try {
                    let n = a.parse(e, { schema: 'core', prettyErrors: !0 });
                    if (
                      ((e = r.externalRef = n),
                      (r.cache[x] = p(e)),
                      d && !1 === (e = l(e, d)) && ((e = {}), r.fatal))
                    ) {
                      let e = new Error('File $ref resolution failed ' + x + d);
                      if (!r.promise) throw e;
                      r.promise.reject(e);
                    }
                    e = f((e = m(e, n, t, d, x, r)), r);
                  } catch (e) {
                    if ((r.verbose && console.warn(e), !r.promise || !r.fatal)) throw e;
                    r.promise.reject(e);
                  }
                  return s(e, x, r), e;
                })
                .catch(function (e) {
                  if ((r.verbose && console.warn(e), !r.promise || !r.fatal)) throw e;
                  r.promise.reject(e);
                });
            }
          }
          function g(e) {
            return new Promise(function (t, r) {
              (function (e) {
                return new Promise(function (t, r) {
                  function n(t, r, n) {
                    if (t[r] && d(t[r], '$ref')) {
                      let i = t[r].$ref;
                      if (!i.startsWith('#')) {
                        let s = '';
                        if (!o[i]) {
                          let t = Object.keys(o).find(function (e, t, r) {
                            return i.startsWith(e + '/');
                          });
                          t &&
                            (e.verbose && console.warn('Found potential subschema at', t),
                            (s = '/' + (i.split('#')[1] || '').replace(t.split('#')[1] || '')),
                            (s = s.split('/undefined').join('')),
                            (i = t));
                        }
                        if (
                          (o[i] ||
                            (o[i] = {
                              resolved: !1,
                              paths: [],
                              extras: {},
                              description: t[r].description,
                            }),
                          o[i].resolved)
                        )
                          if (o[i].failed);
                          else if (e.rewriteRefs) {
                            let n = o[i].resolvedAt;
                            e.verbose > 1 && console.warn('Rewriting ref', i, n),
                              (t[r]['x-miro'] = i),
                              (t[r].$ref = n + s);
                          } else t[r] = p(o[i].data);
                        else o[i].paths.push(n.path), (o[i].extras[n.path] = s);
                      }
                    }
                  }
                  let o = e.externalRefs;
                  if (e.resolver.depth > 0 && e.source === e.resolver.base) return t(o);
                  c(e.openapi.definitions, { identityDetection: !0, path: '#/definitions' }, n),
                    c(e.openapi.components, { identityDetection: !0, path: '#/components' }, n),
                    c(e.openapi, { identityDetection: !0 }, n),
                    t(o);
                });
              })(e)
                .then(function (t) {
                  for (let r in t)
                    if (!t[r].resolved) {
                      let n = e.resolver.depth;
                      n > 0 && n++,
                        e.resolver.actions[n].push(function () {
                          return y(e.openapi, r, e, function (e, n, o) {
                            if (!t[r].resolved) {
                              let i = {};
                              (i.context = t[r]),
                                (i.$ref = r),
                                (i.original = p(e)),
                                (i.updated = e),
                                (i.source = n),
                                o.externals.push(i),
                                (t[r].resolved = !0);
                            }
                            let i = Object.assign({}, o, {
                              source: '',
                              resolver: {
                                actions: o.resolver.actions,
                                depth: o.resolver.actions.length - 1,
                                base: o.resolver.base,
                              },
                            });
                            o.patch &&
                              t[r].description &&
                              !e.description &&
                              'object' == typeof e &&
                              (e.description = t[r].description),
                              (t[r].data = e);
                            let s = ((a = t[r].paths), [...new Set(a)]);
                            var a;
                            s = s.sort(function (e, t) {
                              const r =
                                  e.startsWith('#/components/') || e.startsWith('#/definitions/'),
                                n = t.startsWith('#/components/') || t.startsWith('#/definitions/');
                              return r && !n ? -1 : n && !r ? 1 : 0;
                            });
                            for (let n of s)
                              if (
                                t[r].resolvedAt &&
                                n !== t[r].resolvedAt &&
                                n.indexOf('x-ms-examples/') < 0
                              )
                                o.verbose > 1 && console.warn('Creating pointer to data at', n),
                                  l(o.openapi, n, {
                                    $ref: t[r].resolvedAt + t[r].extras[n],
                                    'x-miro': r + t[r].extras[n],
                                  });
                              else {
                                t[r].resolvedAt
                                  ? o.verbose > 1 && console.warn('Avoiding circular reference')
                                  : ((t[r].resolvedAt = n),
                                    o.verbose > 1 &&
                                      console.warn('Creating initial clone of data at', n));
                                let i = p(e);
                                l(o.openapi, n, i);
                              }
                            0 === o.resolver.actions[i.resolver.depth].length &&
                              o.resolver.actions[i.resolver.depth].push(function () {
                                return g(i);
                              });
                          });
                        });
                    }
                })
                .catch(function (t) {
                  e.verbose && console.warn(t), r(t);
                });
              let n = { options: e };
              (n.actions = e.resolver.actions[e.resolver.depth]), t(n);
            });
          }
          function b(e, t, r) {
            e.resolver.actions.push([]),
              g(e)
                .then(function (n) {
                  var o;
                  ((o = n.actions),
                  o.reduce(
                    (e, t) => e.then(e => t().then(Array.prototype.concat.bind(e))),
                    Promise.resolve([]),
                  ))
                    .then(function () {
                      if (e.resolver.depth >= e.resolver.actions.length)
                        return console.warn('Ran off the end of resolver actions'), t(!0);
                      e.resolver.depth++,
                        e.resolver.actions[e.resolver.depth].length
                          ? setTimeout(function () {
                              b(n.options, t, r);
                            }, 0)
                          : (e.verbose > 1 &&
                              console.warn(
                                h.colour.yellow + 'Finished external resolution!',
                                h.colour.normal,
                              ),
                            e.resolveInternal &&
                              (e.verbose > 1 &&
                                console.warn(
                                  h.colour.yellow + 'Starting internal resolution!',
                                  h.colour.normal,
                                ),
                              (e.openapi = u(e.openapi, e.original, { verbose: e.verbose - 1 })),
                              e.verbose > 1 &&
                                console.warn(
                                  h.colour.yellow + 'Finished internal resolution!',
                                  h.colour.normal,
                                )),
                            c(e.openapi, {}, function (t, r, n) {
                              d(t, r) && (e.preserveMiro || delete t['x-miro']);
                            }),
                            t(e));
                    })
                    .catch(function (t) {
                      e.verbose && console.warn(t), r(t);
                    });
                })
                .catch(function (t) {
                  e.verbose && console.warn(t), r(t);
                });
          }
          function x(e) {
            if ((e.cache || (e.cache = {}), e.fetch || (e.fetch = s), e.source)) {
              let t = i.parse(e.source);
              (!t.protocol || t.protocol.length <= 2) && (e.source = o.resolve(e.source));
            }
            (e.externals = []),
              (e.externalRefs = {}),
              (e.rewriteRefs = !0),
              (e.resolver = {}),
              (e.resolver.depth = 0),
              (e.resolver.base = e.source),
              (e.resolver.actions = [[]]);
          }
          e.exports = {
            optionalResolve: function (e) {
              return (
                x(e),
                new Promise(function (t, r) {
                  e.resolve ? b(e, t, r) : t(e);
                })
              );
            },
            resolve: function (e, t, r) {
              return (
                r || (r = {}),
                (r.openapi = e),
                (r.source = t),
                (r.resolve = !0),
                x(r),
                new Promise(function (e, t) {
                  b(r, e, t);
                })
              );
            },
          };
        },
        804: function (e) {
          'use strict';
          function t() {
            return { depth: 0, seen: new WeakMap(), top: !0, combine: !1, allowRefSiblings: !1 };
          }
          e.exports = {
            getDefaultState: t,
            walkSchema: function e(r, n, o, i) {
              if ((void 0 === o.depth && (o = t()), null == r)) return r;
              if (void 0 !== r.$ref) {
                let e = { $ref: r.$ref };
                return (
                  o.allowRefSiblings && r.description && (e.description = r.description),
                  i(e, n, o),
                  e
                );
              }
              if (
                (o.combine &&
                  (r.allOf &&
                    Array.isArray(r.allOf) &&
                    1 === r.allOf.length &&
                    delete (r = Object.assign({}, r.allOf[0], r)).allOf,
                  r.anyOf &&
                    Array.isArray(r.anyOf) &&
                    1 === r.anyOf.length &&
                    delete (r = Object.assign({}, r.anyOf[0], r)).anyOf,
                  r.oneOf &&
                    Array.isArray(r.oneOf) &&
                    1 === r.oneOf.length &&
                    delete (r = Object.assign({}, r.oneOf[0], r)).oneOf),
                i(r, n, o),
                o.seen.has(r))
              )
                return r;
              if (
                ('object' == typeof r && null !== r && o.seen.set(r, !0),
                (o.top = !1),
                o.depth++,
                void 0 !== r.items && ((o.property = 'items'), e(r.items, r, o, i)),
                r.additionalItems &&
                  'object' == typeof r.additionalItems &&
                  ((o.property = 'additionalItems'), e(r.additionalItems, r, o, i)),
                r.additionalProperties &&
                  'object' == typeof r.additionalProperties &&
                  ((o.property = 'additionalProperties'), e(r.additionalProperties, r, o, i)),
                r.properties)
              )
                for (let t in r.properties) {
                  let n = r.properties[t];
                  (o.property = 'properties/' + t), e(n, r, o, i);
                }
              if (r.patternProperties)
                for (let t in r.patternProperties) {
                  let n = r.patternProperties[t];
                  (o.property = 'patternProperties/' + t), e(n, r, o, i);
                }
              if (r.allOf)
                for (let t in r.allOf) {
                  let n = r.allOf[t];
                  (o.property = 'allOf/' + t), e(n, r, o, i);
                }
              if (r.anyOf)
                for (let t in r.anyOf) {
                  let n = r.anyOf[t];
                  (o.property = 'anyOf/' + t), e(n, r, o, i);
                }
              if (r.oneOf)
                for (let t in r.oneOf) {
                  let n = r.oneOf[t];
                  (o.property = 'oneOf/' + t), e(n, r, o, i);
                }
              return r.not && ((o.property = 'not'), e(r.not, r, o, i)), o.depth--, r;
            },
          };
        },
        683: function (e) {
          'use strict';
          e.exports = {
            nop: function (e) {
              return e;
            },
            clone: function (e) {
              return JSON.parse(JSON.stringify(e));
            },
            shallowClone: function (e) {
              let t = {};
              for (let r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              return t;
            },
            deepClone: function e(t) {
              let r = Array.isArray(t) ? [] : {};
              for (let n in t)
                (t.hasOwnProperty(n) || Array.isArray(t)) &&
                  (r[n] = 'object' == typeof t[n] ? e(t[n]) : t[n]);
              return r;
            },
            fastClone: function (e) {
              return Object.assign({}, e);
            },
            circularClone: function e(t, r) {
              if ((r || (r = new WeakMap()), Object(t) !== t || t instanceof Function)) return t;
              if (r.has(t)) return r.get(t);
              try {
                var n = new t.constructor();
              } catch (e) {
                n = Object.create(Object.getPrototypeOf(t));
              }
              return (
                r.set(t, n), Object.assign(n, ...Object.keys(t).map(n => ({ [n]: e(t[n], r) })))
              );
            },
          };
        },
        593: function (e, t, r) {
          'use strict';
          const n = r(401).recurse,
            o = r(683).shallowClone,
            i = r(53).jptr,
            s = r(592).isRef;
          e.exports = {
            dereference: function e(t, r, a) {
              a || (a = {}),
                a.cache || (a.cache = {}),
                a.state || (a.state = {}),
                (a.state.identityDetection = !0),
                (a.depth = a.depth ? a.depth + 1 : 1);
              let l = a.depth > 1 ? t : o(t),
                c = { data: l },
                p = a.depth > 1 ? r : o(r);
              a.master || (a.master = l);
              let u = (function (e) {
                  return e && e.verbose
                    ? {
                        warn: function () {
                          var e = Array.prototype.slice.call(arguments);
                          console.warn.apply(console, e);
                        },
                      }
                    : { warn: function () {} };
                })(a),
                d = 1;
              for (; d > 0; )
                (d = 0),
                  n(c, a.state, function (t, r, n) {
                    if (s(t, r)) {
                      let o = t[r];
                      if ((d++, a.cache[o])) {
                        let e = a.cache[o];
                        if (e.resolved)
                          u.warn('Patching %s for %s', o, e.path),
                            (n.parent[n.pkey] = e.data),
                            a.$ref &&
                              'object' == typeof n.parent[n.pkey] &&
                              (n.parent[n.pkey][a.$ref] = o);
                        else {
                          if (o === e.path) throw new Error(`Tight circle at ${e.path}`);
                          u.warn('Unresolved ref'),
                            (n.parent[n.pkey] = i(e.source, e.path)),
                            !1 === n.parent[n.pkey] && (n.parent[n.pkey] = i(e.source, e.key)),
                            a.$ref && 'object' == typeof n.parent[n.pkey] && (n.parent[a.$ref] = o);
                        }
                      } else {
                        let t = {};
                        (t.path = n.path.split('/$ref')[0]),
                          (t.key = o),
                          u.warn('Dereffing %s at %s', o, t.path),
                          (t.source = p),
                          (t.data = i(t.source, t.key)),
                          !1 === t.data && ((t.data = i(a.master, t.key)), (t.source = a.master)),
                          !1 === t.data && u.warn('Missing $ref target', t.key),
                          (a.cache[o] = t),
                          (t.data = n.parent[n.pkey] = e(i(t.source, t.key), t.source, a)),
                          a.$ref &&
                            'object' == typeof n.parent[n.pkey] &&
                            (n.parent[n.pkey][a.$ref] = o),
                          (t.resolved = !0);
                      }
                    }
                  });
              return c.data;
            },
          };
        },
        592: function (e) {
          'use strict';
          e.exports = {
            isRef: function (e, t) {
              return '$ref' === t && !!e && 'string' == typeof e[t];
            },
          };
        },
        53: function (e) {
          'use strict';
          function t(e) {
            return e.replace(/\~1/g, '/').replace(/~0/g, '~');
          }
          e.exports = {
            jptr: function (e, r, n) {
              if (void 0 === e) return !1;
              if (!r || 'string' != typeof r || '#' === r) return void 0 !== n ? n : e;
              if (r.indexOf('#') >= 0) {
                let e = r.split('#');
                if (e[0]) return !1;
                (r = e[1]), (r = decodeURIComponent(r.slice(1).split('+').join(' ')));
              }
              r.startsWith('/') && (r = r.slice(1));
              let o = r.split('/');
              for (let r = 0; r < o.length; r++) {
                o[r] = t(o[r]);
                let i = void 0 !== n && r == o.length - 1,
                  s = parseInt(o[r], 10);
                if (
                  (!Array.isArray(e) || isNaN(s) || s.toString() !== o[r]
                    ? (s = Array.isArray(e) && '-' === o[r] ? -2 : -1)
                    : (o[r] = r > 0 ? o[r - 1] : ''),
                  -1 != s || (e && e.hasOwnProperty(o[r])))
                )
                  if (s >= 0) i && (e[s] = n), (e = e[s]);
                  else {
                    if (-2 === s) return i ? (Array.isArray(e) && e.push(n), n) : void 0;
                    i && (e[o[r]] = n), (e = e[o[r]]);
                  }
                else {
                  if (void 0 === n || 'object' != typeof e || Array.isArray(e)) return !1;
                  (e[o[r]] = i ? n : '0' === o[r + 1] || '-' === o[r + 1] ? [] : {}), (e = e[o[r]]);
                }
              }
              return e;
            },
            jpescape: function (e) {
              return e.replace(/\~/g, '~0').replace(/\//g, '~1');
            },
            jpunescape: t,
          };
        },
        401: function (e, t, r) {
          'use strict';
          const n = r(53).jpescape;
          e.exports = {
            recurse: function e(t, r, o) {
              if (
                (r || (r = { depth: 0 }),
                r.depth ||
                  (r = Object.assign(
                    {},
                    {
                      path: '#',
                      depth: 0,
                      pkey: '',
                      parent: {},
                      payload: {},
                      seen: new WeakMap(),
                      identity: !1,
                      identityDetection: !1,
                    },
                    r,
                  )),
                'object' != typeof t)
              )
                return;
              let i = r.path;
              for (let s in t) {
                if (
                  ((r.key = s),
                  (r.path = r.path + '/' + encodeURIComponent(n(s))),
                  (r.identityPath = r.seen.get(t[s])),
                  (r.identity = void 0 !== r.identityPath),
                  t.hasOwnProperty(s) && o(t, s, r),
                  'object' == typeof t[s] && !r.identity)
                ) {
                  r.identityDetection &&
                    !Array.isArray(t[s]) &&
                    null !== t[s] &&
                    r.seen.set(t[s], r.path);
                  let n = {};
                  (n.parent = t),
                    (n.path = r.path),
                    (n.depth = r.depth ? r.depth + 1 : 1),
                    (n.pkey = s),
                    (n.payload = r.payload),
                    (n.seen = r.seen),
                    (n.identity = !1),
                    (n.identityDetection = r.identityDetection),
                    e(t[s], n, o);
                }
                r.path = i;
              }
            },
          };
        },
        232: function (e, t, r) {
          'use strict';
          r.r(t);
          var n = r(379),
            o = r.n(n),
            i = r(795),
            s = r.n(i),
            a = r(569),
            l = r.n(a),
            c = r(565),
            p = r.n(c),
            u = r(216),
            d = r.n(u),
            h = r(589),
            m = r.n(h),
            f = r(260),
            y = {};
          (y.styleTagTransform = m()),
            (y.setAttributes = p()),
            (y.insert = l().bind(null, 'head')),
            (y.domAPI = s()),
            (y.insertStyleElement = d()),
            o()(f.Z, y),
            (t.default = f.Z && f.Z.locals ? f.Z.locals : void 0);
        },
        379: function (e) {
          'use strict';
          var t = [];
          function r(e) {
            for (var r = -1, n = 0; n < t.length; n++)
              if (t[n].identifier === e) {
                r = n;
                break;
              }
            return r;
          }
          function n(e, n) {
            for (var i = {}, s = [], a = 0; a < e.length; a++) {
              var l = e[a],
                c = n.base ? l[0] + n.base : l[0],
                p = i[c] || 0,
                u = ''.concat(c, ' ').concat(p);
              i[c] = p + 1;
              var d = r(u),
                h = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
              if (-1 !== d) t[d].references++, t[d].updater(h);
              else {
                var m = o(h, n);
                (n.byIndex = a), t.splice(a, 0, { identifier: u, updater: m, references: 1 });
              }
              s.push(u);
            }
            return s;
          }
          function o(e, t) {
            var r = t.domAPI(t);
            return (
              r.update(e),
              function (t) {
                if (t) {
                  if (
                    t.css === e.css &&
                    t.media === e.media &&
                    t.sourceMap === e.sourceMap &&
                    t.supports === e.supports &&
                    t.layer === e.layer
                  )
                    return;
                  r.update((e = t));
                } else r.remove();
              }
            );
          }
          e.exports = function (e, o) {
            var i = n((e = e || []), (o = o || {}));
            return function (e) {
              e = e || [];
              for (var s = 0; s < i.length; s++) {
                var a = r(i[s]);
                t[a].references--;
              }
              for (var l = n(e, o), c = 0; c < i.length; c++) {
                var p = r(i[c]);
                0 === t[p].references && (t[p].updater(), t.splice(p, 1));
              }
              i = l;
            };
          };
        },
        569: function (e) {
          'use strict';
          var t = {};
          e.exports = function (e, r) {
            var n = (function (e) {
              if (void 0 === t[e]) {
                var r = document.querySelector(e);
                if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                  try {
                    r = r.contentDocument.head;
                  } catch (e) {
                    r = null;
                  }
                t[e] = r;
              }
              return t[e];
            })(e);
            if (!n)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            n.appendChild(r);
          };
        },
        216: function (e) {
          'use strict';
          e.exports = function (e) {
            var t = document.createElement('style');
            return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
          };
        },
        565: function (e, t, r) {
          'use strict';
          e.exports = function (e) {
            var t = r.nc;
            t && e.setAttribute('nonce', t);
          };
        },
        795: function (e) {
          'use strict';
          e.exports = function (e) {
            var t = e.insertStyleElement(e);
            return {
              update: function (r) {
                !(function (e, t, r) {
                  var n = '';
                  r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                    r.media && (n += '@media '.concat(r.media, ' {'));
                  var o = void 0 !== r.layer;
                  o && (n += '@layer'.concat(r.layer.length > 0 ? ' '.concat(r.layer) : '', ' {')),
                    (n += r.css),
                    o && (n += '}'),
                    r.media && (n += '}'),
                    r.supports && (n += '}');
                  var i = r.sourceMap;
                  i &&
                    'undefined' != typeof btoa &&
                    (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */',
                    )),
                    t.styleTagTransform(n, e, t.options);
                })(t, e, r);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        589: function (e) {
          'use strict';
          e.exports = function (e, t) {
            if (t.styleSheet) t.styleSheet.cssText = e;
            else {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              t.appendChild(document.createTextNode(e));
            }
          };
        },
        925: function (e, t, r) {
          'use strict';
          const n = r(147),
            o = r(416),
            i = (r(17), r(766)),
            s = r(416),
            a = r(66),
            l = r(53),
            c = l.jptr,
            p = r(592).isRef,
            u = r(683).clone,
            d = r(683).circularClone,
            h = r(401).recurse,
            m = r(856),
            f = r(804),
            y = r(342),
            g = r(711).statusCodes,
            b = r(109).i8,
            x = '3.0.0';
          let v;
          class w extends Error {
            constructor(e) {
              super(e), (this.name = 'S2OError');
            }
          }
          function k(e, t) {
            let r = new w(e);
            if (((r.options = t), !t.promise)) throw r;
            t.promise.reject(r);
          }
          function O(e, t, r) {
            r.warnOnly ? (t[r.warnProperty || 'x-s2o-warning'] = e) : k(e, r);
          }
          function E(e, t) {
            f.walkSchema(e, {}, {}, function (e, r, n) {
              !(function (e, t) {
                if (
                  (e['x-required'] &&
                    Array.isArray(e['x-required']) &&
                    (e.required || (e.required = []),
                    (e.required = e.required.concat(e['x-required'])),
                    delete e['x-required']),
                  e['x-anyOf'] && ((e.anyOf = e['x-anyOf']), delete e['x-anyOf']),
                  e['x-oneOf'] && ((e.oneOf = e['x-oneOf']), delete e['x-oneOf']),
                  e['x-not'] && ((e.not = e['x-not']), delete e['x-not']),
                  'boolean' == typeof e['x-nullable'] &&
                    ((e.nullable = e['x-nullable']), delete e['x-nullable']),
                  'object' == typeof e['x-discriminator'] &&
                    'string' == typeof e['x-discriminator'].propertyName)
                ) {
                  (e.discriminator = e['x-discriminator']), delete e['x-discriminator'];
                  for (let t in e.discriminator.mapping) {
                    let r = e.discriminator.mapping[t];
                    r.startsWith('#/definitions/') &&
                      (e.discriminator.mapping[t] = r.replace(
                        '#/definitions/',
                        '#/components/schemas/',
                      ));
                  }
                }
              })(e),
                (function (e, t, r) {
                  if (
                    (e.nullable && r.patches++,
                    e.discriminator &&
                      'string' == typeof e.discriminator &&
                      (e.discriminator = { propertyName: e.discriminator }),
                    e.items &&
                      Array.isArray(e.items) &&
                      (0 === e.items.length
                        ? (e.items = {})
                        : 1 === e.items.length
                        ? (e.items = e.items[0])
                        : (e.items = { anyOf: e.items })),
                    e.type && Array.isArray(e.type))
                  )
                    if (r.patch) {
                      if ((r.patches++, 0 === e.type.length)) delete e.type;
                      else {
                        e.oneOf || (e.oneOf = []);
                        for (let t of e.type) {
                          let r = {};
                          if ('null' === t) e.nullable = !0;
                          else {
                            r.type = t;
                            for (let t of y.arrayProperties)
                              void 0 !== e.prop && ((r[t] = e[t]), delete e[t]);
                          }
                          r.type && e.oneOf.push(r);
                        }
                        delete e.type,
                          0 === e.oneOf.length
                            ? delete e.oneOf
                            : e.oneOf.length < 2 &&
                              ((e.type = e.oneOf[0].type),
                              Object.keys(e.oneOf[0]).length > 1 &&
                                O('Lost properties from oneOf', e, r),
                              delete e.oneOf);
                      }
                      e.type &&
                        Array.isArray(e.type) &&
                        1 === e.type.length &&
                        (e.type = e.type[0]);
                    } else k('(Patchable) schema type must not be an array', r);
                  e.type && 'null' === e.type && (delete e.type, (e.nullable = !0)),
                    'array' !== e.type || e.items || (e.items = {}),
                    'file' === e.type && ((e.type = 'string'), (e.format = 'binary')),
                    'boolean' == typeof e.required &&
                      (e.required &&
                        e.name &&
                        (void 0 === t.required && (t.required = []),
                        Array.isArray(t.required) && t.required.push(e.name)),
                      delete e.required),
                    e.xml &&
                      'string' == typeof e.xml.namespace &&
                      (e.xml.namespace || delete e.xml.namespace),
                    void 0 !== e.allowEmptyValue && (r.patches++, delete e.allowEmptyValue);
                })(e, r, t);
            });
          }
          function j(e, t, r) {
            let n = r.payload.options;
            if (p(e, t)) {
              if (e[t].startsWith('#/components/'));
              else if ('#/consumes' === e[t])
                delete e[t], (r.parent[r.pkey] = u(n.openapi.consumes));
              else if ('#/produces' === e[t])
                delete e[t], (r.parent[r.pkey] = u(n.openapi.produces));
              else if (e[t].startsWith('#/definitions/')) {
                let r = e[t].replace('#/definitions/', '').split('/');
                const o = l.jpunescape(r[0]);
                let i = v.schemas[decodeURIComponent(o)];
                i ? (r[0] = i) : O('Could not resolve reference ' + e[t], e, n),
                  (e[t] = '#/components/schemas/' + r.join('/'));
              } else if (e[t].startsWith('#/parameters/'))
                e[t] = '#/components/parameters/' + y.sanitise(e[t].replace('#/parameters/', ''));
              else if (e[t].startsWith('#/responses/'))
                e[t] = '#/components/responses/' + y.sanitise(e[t].replace('#/responses/', ''));
              else if (e[t].startsWith('#')) {
                let r = u(l.jptr(n.openapi, e[t]));
                if (!1 === r) O('direct $ref not found ' + e[t], e, n);
                else if (n.refmap[e[t]]) e[t] = n.refmap[e[t]];
                else {
                  let i = e[t];
                  (i = i.replace('/properties/headers/', '')),
                    (i = i.replace('/properties/responses/', '')),
                    (i = i.replace('/properties/parameters/', '')),
                    (i = i.replace('/properties/schemas/', ''));
                  let s = 'schemas',
                    a = i.lastIndexOf('/schema');
                  if (
                    ((s =
                      i.indexOf('/headers/') > a
                        ? 'headers'
                        : i.indexOf('/responses/') > a
                        ? 'responses'
                        : i.indexOf('/example') > a
                        ? 'examples'
                        : i.indexOf('/x-') > a
                        ? 'extensions'
                        : i.indexOf('/parameters/') > a
                        ? 'parameters'
                        : 'schemas'),
                    'schemas' === s && E(r, n),
                    'responses' !== s && 'extensions' !== s)
                  ) {
                    let i = s.substr(0, s.length - 1);
                    'parameter' === i &&
                      r.name &&
                      r.name === y.sanitise(r.name) &&
                      (i = encodeURIComponent(r.name));
                    let a = 1;
                    for (
                      e['x-miro'] &&
                      ((o =
                        (o = e['x-miro']).indexOf('#') >= 0
                          ? o.split('#')[1].split('/').pop()
                          : o.split('/').pop().split('.')[0]),
                      (i = encodeURIComponent(y.sanitise(o))),
                      (a = ''));
                      l.jptr(n.openapi, '#/components/' + s + '/' + i + a);

                    )
                      a = '' === a ? 2 : ++a;
                    let c = '#/components/' + s + '/' + i + a,
                      p = '';
                    'examples' === s && ((r = { value: r }), (p = '/value')),
                      l.jptr(n.openapi, c, r),
                      (n.refmap[e[t]] = c + p),
                      (e[t] = c + p);
                  }
                }
              }
              if ((delete e['x-miro'], Object.keys(e).length > 1)) {
                const o = e[t],
                  i = r.path.indexOf('/schema') >= 0;
                'preserve' === n.refSiblings ||
                  (i && 'allOf' === n.refSiblings
                    ? (delete e.$ref, (r.parent[r.pkey] = { allOf: [{ $ref: o }, e] }))
                    : (r.parent[r.pkey] = { $ref: o }));
              }
            }
            var o;
            if ('x-ms-odata' === t && 'string' == typeof e[t] && e[t].startsWith('#/')) {
              let r = e[t]
                  .replace('#/definitions/', '')
                  .replace('#/components/schemas/', '')
                  .split('/'),
                o = v.schemas[decodeURIComponent(r[0])];
              o ? (r[0] = o) : O('Could not resolve reference ' + e[t], e, n),
                (e[t] = '#/components/schemas/' + r.join('/'));
            }
          }
          function S(e) {
            for (let t in e)
              for (let r in e[t]) {
                let n = y.sanitise(r);
                r !== n && ((e[t][n] = e[t][r]), delete e[t][r]);
              }
          }
          function $(e, t) {
            if (
              ('basic' === e.type && ((e.type = 'http'), (e.scheme = 'basic')), 'oauth2' === e.type)
            ) {
              let r = {},
                n = e.flow;
              'application' === e.flow && (n = 'clientCredentials'),
                'accessCode' === e.flow && (n = 'authorizationCode'),
                void 0 !== e.authorizationUrl &&
                  (r.authorizationUrl = e.authorizationUrl.split('?')[0].trim() || '/'),
                'string' == typeof e.tokenUrl &&
                  (r.tokenUrl = e.tokenUrl.split('?')[0].trim() || '/'),
                (r.scopes = e.scopes || {}),
                (e.flows = {}),
                (e.flows[n] = r),
                delete e.flow,
                delete e.authorizationUrl,
                delete e.tokenUrl,
                delete e.scopes,
                void 0 !== e.name &&
                  (t.patch
                    ? (t.patches++, delete e.name)
                    : k('(Patchable) oauth2 securitySchemes should not have name property', t));
            }
          }
          function P(e) {
            return e && !e['x-s2o-delete'];
          }
          function C(e, t) {
            if (e.$ref) e.$ref = e.$ref.replace('#/responses/', '#/components/responses/');
            else {
              e.type && !e.schema && (e.schema = {}),
                e.type && (e.schema.type = e.type),
                e.items &&
                  'array' !== e.items.type &&
                  (e.items.collectionFormat !== e.collectionFormat &&
                    O('Nested collectionFormats are not supported', e, t),
                  delete e.items.collectionFormat),
                'array' === e.type
                  ? ('ssv' === e.collectionFormat
                      ? O('collectionFormat:ssv is no longer supported for headers', e, t)
                      : 'pipes' === e.collectionFormat
                      ? O('collectionFormat:pipes is no longer supported for headers', e, t)
                      : 'multi' === e.collectionFormat
                      ? (e.explode = !0)
                      : 'tsv' === e.collectionFormat
                      ? (O('collectionFormat:tsv is no longer supported', e, t),
                        (e['x-collectionFormat'] = 'tsv'))
                      : (e.style = 'simple'),
                    delete e.collectionFormat)
                  : e.collectionFormat &&
                    (t.patch
                      ? (t.patches++, delete e.collectionFormat)
                      : k(
                          '(Patchable) collectionFormat is only applicable to header.type array',
                          t,
                        )),
                delete e.type;
              for (let t of y.parameterTypeProperties)
                void 0 !== e[t] && ((e.schema[t] = e[t]), delete e[t]);
              for (let t of y.arrayProperties)
                void 0 !== e[t] && ((e.schema[t] = e[t]), delete e[t]);
            }
          }
          function A(e, t) {
            if (e.$ref.indexOf('#/parameters/') >= 0) {
              let t = e.$ref.split('#/parameters/');
              e.$ref = t[0] + '#/components/parameters/' + y.sanitise(t[1]);
            }
            e.$ref.indexOf('#/definitions/') >= 0 && O('Definition used as parameter', e, t);
          }
          function I(e, t, r, n, o, i, s) {
            let a,
              l = {},
              p = !0;
            if (t && t.consumes && 'string' == typeof t.consumes) {
              if (!s.patch) return k('(Patchable) operation.consumes must be an array', s);
              s.patches++, (t.consumes = [t.consumes]);
            }
            Array.isArray(i.consumes) || delete i.consumes;
            let d = ((t ? t.consumes : null) || i.consumes || []).filter(y.uniqueOnly);
            if (e && e.$ref && 'string' == typeof e.$ref) {
              A(e, s);
              let t = decodeURIComponent(e.$ref.replace('#/components/parameters/', '')),
                r = !1,
                n = i.components.parameters[t];
              if (
                ((n && !n['x-s2o-delete']) ||
                  !e.$ref.startsWith('#/') ||
                  ((e['x-s2o-delete'] = !0), (r = !0)),
                r)
              ) {
                let t = e.$ref,
                  r = c(i, e.$ref);
                !r && t.startsWith('#/')
                  ? O('Could not resolve reference ' + t, e, s)
                  : r && (e = r);
              }
            }
            if (e && (e.name || e.in)) {
              'boolean' == typeof e['x-deprecated'] &&
                ((e.deprecated = e['x-deprecated']), delete e['x-deprecated']),
                void 0 !== e['x-example'] && ((e.example = e['x-example']), delete e['x-example']),
                'body' === e.in ||
                  e.type ||
                  (s.patch
                    ? (s.patches++, (e.type = 'string'))
                    : k('(Patchable) parameter.type is mandatory for non-body parameters', s)),
                e.type && 'object' == typeof e.type && e.type.$ref && (e.type = c(i, e.type.$ref)),
                'file' === e.type && ((e['x-s2o-originalType'] = e.type), (a = e.type)),
                e.description &&
                  'object' == typeof e.description &&
                  e.description.$ref &&
                  (e.description = c(i, e.description.$ref)),
                null === e.description && delete e.description;
              let t = e.collectionFormat;
              if (
                ('array' !== e.type || t || (t = 'csv'),
                t &&
                  ('array' !== e.type &&
                    (s.patch
                      ? (s.patches++, delete e.collectionFormat)
                      : k(
                          '(Patchable) collectionFormat is only applicable to param.type array',
                          s,
                        )),
                  'csv' !== t ||
                    ('query' !== e.in && 'cookie' !== e.in) ||
                    ((e.style = 'form'), (e.explode = !1)),
                  'csv' !== t || ('path' !== e.in && 'header' !== e.in) || (e.style = 'simple'),
                  'ssv' === t &&
                    ('query' === e.in
                      ? (e.style = 'spaceDelimited')
                      : O(
                          'collectionFormat:ssv is no longer supported except for in:query parameters',
                          e,
                          s,
                        )),
                  'pipes' === t &&
                    ('query' === e.in
                      ? (e.style = 'pipeDelimited')
                      : O(
                          'collectionFormat:pipes is no longer supported except for in:query parameters',
                          e,
                          s,
                        )),
                  'multi' === t && (e.explode = !0),
                  'tsv' === t &&
                    (O('collectionFormat:tsv is no longer supported', e, s),
                    (e['x-collectionFormat'] = 'tsv')),
                  delete e.collectionFormat),
                e.type && 'body' !== e.type && 'formData' !== e.in)
              )
                if (e.items && e.schema) O('parameter has array,items and schema', e, s);
                else {
                  e.schema && s.patches++,
                    (e.schema && 'object' == typeof e.schema) || (e.schema = {}),
                    (e.schema.type = e.type),
                    e.items &&
                      ((e.schema.items = e.items),
                      delete e.items,
                      h(e.schema.items, null, function (r, n, o) {
                        'collectionFormat' === n &&
                          'string' == typeof r[n] &&
                          (t && r[n] !== t && O('Nested collectionFormats are not supported', e, s),
                          delete r[n]);
                      }));
                  for (let t of y.parameterTypeProperties)
                    void 0 !== e[t] && (e.schema[t] = e[t]), delete e[t];
                }
              e.schema && E(e.schema, s),
                e['x-ms-skip-url-encoding'] &&
                  'query' === e.in &&
                  ((e.allowReserved = !0), delete e['x-ms-skip-url-encoding']);
            }
            if (e && 'formData' === e.in) {
              (p = !1), (l.content = {});
              let t = 'application/x-www-form-urlencoded';
              if (
                (d.length && d.indexOf('multipart/form-data') >= 0 && (t = 'multipart/form-data'),
                (l.content[t] = {}),
                e.schema)
              )
                (l.content[t].schema = e.schema),
                  e.schema.$ref &&
                    (l['x-s2o-name'] = decodeURIComponent(
                      e.schema.$ref.replace('#/components/schemas/', ''),
                    ));
              else {
                (l.content[t].schema = {}),
                  (l.content[t].schema.type = 'object'),
                  (l.content[t].schema.properties = {}),
                  (l.content[t].schema.properties[e.name] = {});
                let r = l.content[t].schema,
                  n = l.content[t].schema.properties[e.name];
                e.description && (n.description = e.description),
                  e.example && (n.example = e.example),
                  e.type && (n.type = e.type);
                for (let t of y.parameterTypeProperties) void 0 !== e[t] && (n[t] = e[t]);
                !0 === e.required &&
                  (r.required || (r.required = []), r.required.push(e.name), (l.required = !0)),
                  void 0 !== e.default && (n.default = e.default),
                  n.properties && (n.properties = e.properties),
                  e.allOf && (n.allOf = e.allOf),
                  'array' === e.type &&
                    e.items &&
                    ((n.items = e.items),
                    n.items.collectionFormat && delete n.items.collectionFormat),
                  ('file' !== a && 'file' !== e['x-s2o-originalType']) ||
                    ((n.type = 'string'), (n.format = 'binary')),
                  T(e, n);
              }
            } else
              e &&
                'file' === e.type &&
                (e.required && (l.required = e.required),
                (l.content = {}),
                (l.content['application/octet-stream'] = {}),
                (l.content['application/octet-stream'].schema = {}),
                (l.content['application/octet-stream'].schema.type = 'string'),
                (l.content['application/octet-stream'].schema.format = 'binary'),
                T(e, l));
            if (e && 'body' === e.in) {
              (l.content = {}),
                e.name &&
                  (l['x-s2o-name'] =
                    (t && t.operationId ? y.sanitiseAll(t.operationId) : '') +
                    ('_' + e.name).toCamelCase()),
                e.description && (l.description = e.description),
                e.required && (l.required = e.required),
                t && s.rbname && e.name && (t[s.rbname] = e.name),
                e.schema && e.schema.$ref
                  ? (l['x-s2o-name'] = decodeURIComponent(
                      e.schema.$ref.replace('#/components/schemas/', ''),
                    ))
                  : e.schema &&
                    'array' === e.schema.type &&
                    e.schema.items &&
                    e.schema.items.$ref &&
                    (l['x-s2o-name'] =
                      decodeURIComponent(e.schema.items.$ref.replace('#/components/schemas/', '')) +
                      'Array'),
                d.length || d.push('application/json');
              for (let t of d)
                (l.content[t] = {}),
                  (l.content[t].schema = u(e.schema || {})),
                  E(l.content[t].schema, s);
              T(e, l);
            }
            if (
              (Object.keys(l).length > 0 &&
                ((e['x-s2o-delete'] = !0), t) &&
                (t.requestBody && p
                  ? ((t.requestBody['x-s2o-overloaded'] = !0),
                    O('Operation ' + (t.operationId || o) + ' has multiple requestBodies', t, s))
                  : (t.requestBody ||
                      (t = r[n] =
                        (function (e, t) {
                          let r = {};
                          for (let n of Object.keys(e))
                            (r[n] = e[n]),
                              'parameters' === n &&
                                ((r.requestBody = {}), t.rbname && (r[t.rbname] = ''));
                          return (r.requestBody = {}), r;
                        })(t, s)),
                    t.requestBody.content &&
                    t.requestBody.content['multipart/form-data'] &&
                    t.requestBody.content['multipart/form-data'].schema &&
                    t.requestBody.content['multipart/form-data'].schema.properties &&
                    l.content['multipart/form-data'] &&
                    l.content['multipart/form-data'].schema &&
                    l.content['multipart/form-data'].schema.properties
                      ? ((t.requestBody.content['multipart/form-data'].schema.properties =
                          Object.assign(
                            t.requestBody.content['multipart/form-data'].schema.properties,
                            l.content['multipart/form-data'].schema.properties,
                          )),
                        (t.requestBody.content['multipart/form-data'].schema.required = (
                          t.requestBody.content['multipart/form-data'].schema.required || []
                        ).concat(l.content['multipart/form-data'].schema.required || [])),
                        t.requestBody.content['multipart/form-data'].schema.required.length ||
                          delete t.requestBody.content['multipart/form-data'].schema.required)
                      : t.requestBody.content &&
                        t.requestBody.content['application/x-www-form-urlencoded'] &&
                        t.requestBody.content['application/x-www-form-urlencoded'].schema &&
                        t.requestBody.content['application/x-www-form-urlencoded'].schema
                          .properties &&
                        l.content['application/x-www-form-urlencoded'] &&
                        l.content['application/x-www-form-urlencoded'].schema &&
                        l.content['application/x-www-form-urlencoded'].schema.properties
                      ? ((t.requestBody.content[
                          'application/x-www-form-urlencoded'
                        ].schema.properties = Object.assign(
                          t.requestBody.content['application/x-www-form-urlencoded'].schema
                            .properties,
                          l.content['application/x-www-form-urlencoded'].schema.properties,
                        )),
                        (t.requestBody.content[
                          'application/x-www-form-urlencoded'
                        ].schema.required = (
                          t.requestBody.content['application/x-www-form-urlencoded'].schema
                            .required || []
                        ).concat(
                          l.content['application/x-www-form-urlencoded'].schema.required || [],
                        )),
                        t.requestBody.content['application/x-www-form-urlencoded'].schema.required
                          .length ||
                          delete t.requestBody.content['application/x-www-form-urlencoded'].schema
                            .required)
                      : ((t.requestBody = Object.assign(t.requestBody, l)),
                        t.requestBody['x-s2o-name'] ||
                          (t.requestBody.schema && t.requestBody.schema.$ref
                            ? (t.requestBody['x-s2o-name'] = decodeURIComponent(
                                t.requestBody.schema.$ref.replace('#/components/schemas/', ''),
                              )
                                .split('/')
                                .join(''))
                            : t.operationId &&
                              (t.requestBody['x-s2o-name'] = y.sanitiseAll(t.operationId)))))),
              e && !e['x-s2o-delete'])
            ) {
              delete e.type;
              for (let t of y.parameterTypeProperties) delete e[t];
              'path' !== e.in ||
                (void 0 !== e.required && !0 === e.required) ||
                (s.patch
                  ? (s.patches++, (e.required = !0))
                  : k(
                      '(Patchable) path parameters must be required:true [' +
                        e.name +
                        ' in ' +
                        o +
                        ']',
                      s,
                    ));
            }
            return t;
          }
          function T(e, t) {
            for (let r in e) r.startsWith('x-') && !r.startsWith('x-s2o') && (t[r] = e[r]);
          }
          function _(e, t, r, n, o) {
            if (!e) return !1;
            if (e.$ref && 'string' == typeof e.$ref)
              e.$ref.indexOf('#/definitions/') >= 0
                ? O('definition used as response: ' + e.$ref, e, o)
                : e.$ref.startsWith('#/responses/') &&
                  (e.$ref =
                    '#/components/responses/' +
                    y.sanitise(decodeURIComponent(e.$ref.replace('#/responses/', ''))));
            else {
              if (
                ((void 0 === e.description ||
                  null === e.description ||
                  ('' === e.description && o.patch)) &&
                  (o.patch
                    ? 'object' != typeof e ||
                      Array.isArray(e) ||
                      (o.patches++, (e.description = g[e] || ''))
                    : k('(Patchable) response.description is mandatory', o)),
                void 0 !== e.schema)
              ) {
                if (
                  (E(e.schema, o),
                  e.schema.$ref &&
                    'string' == typeof e.schema.$ref &&
                    e.schema.$ref.startsWith('#/responses/') &&
                    (e.schema.$ref =
                      '#/components/responses/' +
                      y.sanitise(decodeURIComponent(e.schema.$ref.replace('#/responses/', '')))),
                  r && r.produces && 'string' == typeof r.produces)
                ) {
                  if (!o.patch) return k('(Patchable) operation.produces must be an array', o);
                  o.patches++, (r.produces = [r.produces]);
                }
                n.produces && !Array.isArray(n.produces) && delete n.produces;
                let t = ((r ? r.produces : null) || n.produces || []).filter(y.uniqueOnly);
                t.length || t.push('*/*'), (e.content = {});
                for (let r of t) {
                  if (
                    ((e.content[r] = {}),
                    (e.content[r].schema = u(e.schema)),
                    e.examples && e.examples[r])
                  ) {
                    let t = {};
                    (t.value = e.examples[r]),
                      (e.content[r].examples = {}),
                      (e.content[r].examples.response = t),
                      delete e.examples[r];
                  }
                  'file' === e.content[r].schema.type &&
                    (e.content[r].schema = { type: 'string', format: 'binary' });
                }
                delete e.schema;
              }
              for (let t in e.examples)
                e.content || (e.content = {}),
                  e.content[t] || (e.content[t] = {}),
                  (e.content[t].examples = {}),
                  (e.content[t].examples.response = {}),
                  (e.content[t].examples.response.value = e.examples[t]);
              if ((delete e.examples, e.headers))
                for (let t in e.headers)
                  'status code' === t.toLowerCase()
                    ? o.patch
                      ? (o.patches++, delete e.headers[t])
                      : k('(Patchable) "Status Code" is not a valid header', o)
                    : C(e.headers[t], o);
            }
          }
          function R(e, t, r, n, i) {
            for (let s in e) {
              let a = e[s];
              a &&
                a['x-trace'] &&
                'object' == typeof a['x-trace'] &&
                ((a.trace = a['x-trace']), delete a['x-trace']),
                a &&
                  a['x-summary'] &&
                  'string' == typeof a['x-summary'] &&
                  ((a.summary = a['x-summary']), delete a['x-summary']),
                a &&
                  a['x-description'] &&
                  'string' == typeof a['x-description'] &&
                  ((a.description = a['x-description']), delete a['x-description']),
                a &&
                  a['x-servers'] &&
                  Array.isArray(a['x-servers']) &&
                  ((a.servers = a['x-servers']), delete a['x-servers']);
              for (let e in a)
                if (y.httpMethods.indexOf(e) >= 0 || 'x-amazon-apigateway-any-method' === e) {
                  let p = a[e];
                  if (p && p.parameters && Array.isArray(p.parameters)) {
                    if (a.parameters)
                      for (let t of a.parameters)
                        'string' == typeof t.$ref && (A(t, r), (t = c(i, t.$ref))),
                          p.parameters.find(function (e, r, n) {
                            return e.name === t.name && e.in === t.in;
                          }) ||
                            ('formData' !== t.in && 'body' !== t.in && 'file' !== t.type) ||
                            ((p = I(t, p, a, e, s, i, r)),
                            r.rbname && '' === p[r.rbname] && delete p[r.rbname]);
                    for (let t of p.parameters) p = I(t, p, a, e, e + ':' + s, i, r);
                    r.rbname && '' === p[r.rbname] && delete p[r.rbname],
                      r.debug || (p.parameters && (p.parameters = p.parameters.filter(P)));
                  }
                  if ((p && p.security && S(p.security), 'object' == typeof p)) {
                    if (!p.responses) {
                      let e = { description: 'Default response' };
                      p.responses = { default: e };
                    }
                    for (let e in p.responses) _(p.responses[e], 0, p, i, r);
                  }
                  if (p && p['x-servers'] && Array.isArray(p['x-servers']))
                    (p.servers = p['x-servers']), delete p['x-servers'];
                  else if (p && p.schemes && p.schemes.length)
                    for (let e of p.schemes)
                      if (
                        (!i.schemes || i.schemes.indexOf(e) < 0) &&
                        (p.servers || (p.servers = []), Array.isArray(i.servers))
                      )
                        for (let t of i.servers) {
                          let r = u(t),
                            n = o.parse(r.url);
                          (n.protocol = e), (r.url = n.format()), p.servers.push(r);
                        }
                  if (
                    (r.debug &&
                      ((p['x-s2o-consumes'] = p.consumes || []),
                      (p['x-s2o-produces'] = p.produces || [])),
                    p)
                  ) {
                    if (
                      (delete p.consumes, delete p.produces, delete p.schemes, p['x-ms-examples'])
                    ) {
                      for (let e in p['x-ms-examples']) {
                        let t = p['x-ms-examples'][e],
                          r = y.sanitiseAll(e);
                        if (t.parameters)
                          for (let r in t.parameters) {
                            let n = t.parameters[r];
                            for (let t of (p.parameters || []).concat(a.parameters || []))
                              t.$ref && (t = l.jptr(i, t.$ref)),
                                t.name !== r ||
                                  t.example ||
                                  (t.examples || (t.examples = {}), (t.examples[e] = { value: n }));
                          }
                        if (t.responses)
                          for (let n in t.responses) {
                            if (t.responses[n].headers)
                              for (let e in t.responses[n].headers) {
                                let r = t.responses[n].headers[e];
                                for (let t in p.responses[n].headers)
                                  t === e && (p.responses[n].headers[t].example = r);
                              }
                            if (
                              t.responses[n].body &&
                              ((i.components.examples[r] = { value: u(t.responses[n].body) }),
                              p.responses[n] && p.responses[n].content)
                            )
                              for (let t in p.responses[n].content) {
                                let o = p.responses[n].content[t];
                                o.examples || (o.examples = {}),
                                  (o.examples[e] = { $ref: '#/components/examples/' + r });
                              }
                          }
                      }
                      delete p['x-ms-examples'];
                    }
                    if (
                      (p.parameters && 0 === p.parameters.length && delete p.parameters,
                      p.requestBody)
                    ) {
                      let r = p.operationId
                          ? y.sanitiseAll(p.operationId)
                          : y.sanitiseAll(e + s).toCamelCase(),
                        o = y.sanitise(p.requestBody['x-s2o-name'] || r || '');
                      delete p.requestBody['x-s2o-name'];
                      let i = JSON.stringify(p.requestBody),
                        a = y.hash(i);
                      if (!n[a]) {
                        let e = {};
                        (e.name = o), (e.body = p.requestBody), (e.refs = []), (n[a] = e);
                      }
                      let c =
                        '#/' +
                        t +
                        '/' +
                        encodeURIComponent(l.jpescape(s)) +
                        '/' +
                        e +
                        '/requestBody';
                      n[a].refs.push(c);
                    }
                  }
                }
              if (a && a.parameters) {
                for (let e in a.parameters) I(a.parameters[e], null, a, null, s, i, r);
                !r.debug && Array.isArray(a.parameters) && (a.parameters = a.parameters.filter(P));
              }
            }
          }
          function D(e) {
            return e && e.url && 'string' == typeof e.url
              ? ((e.url = e.url.split('{{').join('{')),
                (e.url = e.url.split('}}').join('}')),
                e.url.replace(/\{(.+?)\}/g, function (t, r) {
                  e.variables || (e.variables = {}), (e.variables[r] = { default: 'unknown' });
                }),
                e)
              : e;
          }
          function L(e, t, r) {
            if (void 0 === e.info || null === e.info) {
              if (!t.patch) return r(new w('(Patchable) info object is mandatory'));
              t.patches++, (e.info = { version: '', title: '' });
            }
            if ('object' != typeof e.info || Array.isArray(e.info))
              return r(new w('info must be an object'));
            if (void 0 === e.info.title || null === e.info.title) {
              if (!t.patch) return r(new w('(Patchable) info.title cannot be null'));
              t.patches++, (e.info.title = '');
            }
            if (void 0 === e.info.version || null === e.info.version) {
              if (!t.patch) return r(new w('(Patchable) info.version cannot be null'));
              t.patches++, (e.info.version = '');
            }
            if ('string' != typeof e.info.version) {
              if (!t.patch) return r(new w('(Patchable) info.version must be a string'));
              t.patches++, (e.info.version = e.info.version.toString());
            }
            if (void 0 !== e.info.logo) {
              if (!t.patch) return r(new w('(Patchable) info should not have logo property'));
              t.patches++, (e.info['x-logo'] = e.info.logo), delete e.info.logo;
            }
            if (void 0 !== e.info.termsOfService) {
              if (null === e.info.termsOfService) {
                if (!t.patch) return r(new w('(Patchable) info.termsOfService cannot be null'));
                t.patches++, (e.info.termsOfService = '');
              }
              try {
                new URL(e.info.termsOfService);
              } catch (n) {
                if (!t.patch) return r(new w('(Patchable) info.termsOfService must be a URL'));
                t.patches++, delete e.info.termsOfService;
              }
            }
          }
          function z(e, t, r) {
            if (void 0 === e.paths) {
              if (!t.patch) return r(new w('(Patchable) paths object is mandatory'));
              t.patches++, (e.paths = {});
            }
          }
          function N(e, t, r) {
            return i(
              r,
              new Promise(function (r, n) {
                if (
                  (e || (e = {}),
                  (t.original = e),
                  t.text || (t.text = a.stringify(e)),
                  (t.externals = []),
                  (t.externalRefs = {}),
                  (t.rewriteRefs = !0),
                  (t.preserveMiro = !0),
                  (t.promise = {}),
                  (t.promise.resolve = r),
                  (t.promise.reject = n),
                  (t.patches = 0),
                  t.cache || (t.cache = {}),
                  t.source && (t.cache[t.source] = t.original),
                  (function (e, t) {
                    const r = new WeakSet();
                    h(e, { identityDetection: !0 }, function (e, n, o) {
                      'object' == typeof e[n] &&
                        null !== e[n] &&
                        (r.has(e[n])
                          ? t.anchors
                            ? (e[n] = u(e[n]))
                            : k('YAML anchor or merge key at ' + o.path, t)
                          : r.add(e[n]));
                    });
                  })(e, t),
                  e.openapi && 'string' == typeof e.openapi && e.openapi.startsWith('3.'))
                )
                  return (
                    (t.openapi = d(e)),
                    L(t.openapi, t, n),
                    z(t.openapi, t, n),
                    void m
                      .optionalResolve(t)
                      .then(function () {
                        return t.direct ? r(t.openapi) : r(t);
                      })
                      .catch(function (e) {
                        console.warn(e), n(e);
                      })
                  );
                if (!e.swagger || '2.0' != e.swagger)
                  return n(
                    new w(
                      'Unsupported swagger/OpenAPI version: ' + (e.openapi ? e.openapi : e.swagger),
                    ),
                  );
                let o = (t.openapi = {});
                if (
                  ((o.openapi =
                    'string' == typeof t.targetVersion && t.targetVersion.startsWith('3.')
                      ? t.targetVersion
                      : x),
                  t.origin)
                ) {
                  o['x-origin'] || (o['x-origin'] = []);
                  let r = {};
                  (r.url = t.source || t.origin),
                    (r.format = 'swagger'),
                    (r.version = e.swagger),
                    (r.converter = {}),
                    (r.converter.url = 'https://github.com/mermade/oas-kit'),
                    (r.converter.version = b),
                    o['x-origin'].push(r);
                }
                if (
                  ((o = Object.assign(o, d(e))),
                  delete o.swagger,
                  h(o, {}, function (e, t, r) {
                    null === e[t] &&
                      !t.startsWith('x-') &&
                      'default' !== t &&
                      r.path.indexOf('/example') < 0 &&
                      delete e[t];
                  }),
                  e.host)
                )
                  for (let t of Array.isArray(e.schemes) ? e.schemes : ['']) {
                    let r = {},
                      n = (e.basePath || '').replace(/\/$/, '');
                    (r.url = (t ? t + ':' : '') + '//' + e.host + n),
                      D(r),
                      o.servers || (o.servers = []),
                      o.servers.push(r);
                  }
                else if (e.basePath) {
                  let t = {};
                  (t.url = e.basePath), D(t), o.servers || (o.servers = []), o.servers.push(t);
                }
                if (
                  (delete o.host,
                  delete o.basePath,
                  o['x-servers'] &&
                    Array.isArray(o['x-servers']) &&
                    ((o.servers = o['x-servers']), delete o['x-servers']),
                  e['x-ms-parameterized-host'])
                ) {
                  let t = e['x-ms-parameterized-host'],
                    r = {};
                  (r.url = t.hostTemplate + (e.basePath ? e.basePath : '')), (r.variables = {});
                  const n = r.url.match(/\{\w+\}/g);
                  for (let e in t.parameters) {
                    let i = t.parameters[e];
                    i.$ref && (i = u(c(o, i.$ref))),
                      e.startsWith('x-') ||
                        (delete i.required,
                        delete i.type,
                        delete i.in,
                        void 0 === i.default &&
                          (i.enum ? (i.default = i.enum[0]) : (i.default = 'none')),
                        i.name || (i.name = n[e].replace('{', '').replace('}', '')),
                        (r.variables[i.name] = i),
                        delete i.name);
                  }
                  o.servers || (o.servers = []),
                    !1 === t.useSchemePrefix
                      ? o.servers.push(r)
                      : e.schemes.forEach(e => {
                          o.servers.push(Object.assign({}, r, { url: e + '://' + r.url }));
                        }),
                    delete o['x-ms-parameterized-host'];
                }
                L(o, t, n),
                  z(o, t, n),
                  'string' == typeof o.consumes && (o.consumes = [o.consumes]),
                  'string' == typeof o.produces && (o.produces = [o.produces]),
                  (o.components = {}),
                  o['x-callbacks'] &&
                    ((o.components.callbacks = o['x-callbacks']), delete o['x-callbacks']),
                  (o.components.examples = {}),
                  (o.components.headers = {}),
                  o['x-links'] && ((o.components.links = o['x-links']), delete o['x-links']),
                  (o.components.parameters = o.parameters || {}),
                  (o.components.responses = o.responses || {}),
                  (o.components.requestBodies = {}),
                  (o.components.securitySchemes = o.securityDefinitions || {}),
                  (o.components.schemas = o.definitions || {}),
                  delete o.definitions,
                  delete o.responses,
                  delete o.parameters,
                  delete o.securityDefinitions,
                  m
                    .optionalResolve(t)
                    .then(function () {
                      (function (e, t) {
                        let r = {};
                        (v = { schemas: {} }), e.security && S(e.security);
                        for (let r in e.components.securitySchemes) {
                          let n = y.sanitise(r);
                          r !== n &&
                            (e.components.securitySchemes[n] &&
                              k('Duplicate sanitised securityScheme name ' + n, t),
                            (e.components.securitySchemes[n] = e.components.securitySchemes[r]),
                            delete e.components.securitySchemes[r]),
                            $(e.components.securitySchemes[n], t);
                        }
                        for (let r in e.components.schemas) {
                          let n = y.sanitiseAll(r),
                            o = '';
                          if (r !== n) {
                            for (; e.components.schemas[n + o]; ) o = o ? ++o : 2;
                            (e.components.schemas[n + o] = e.components.schemas[r]),
                              delete e.components.schemas[r];
                          }
                          (v.schemas[r] = n + o), E(e.components.schemas[n + o], t);
                        }
                        (t.refmap = {}),
                          h(e, { payload: { options: t } }, j),
                          (function (e, t) {
                            for (let r in t.refmap) l.jptr(e, r, { $ref: t.refmap[r] });
                          })(e, t);
                        for (let r in e.components.parameters) {
                          let n = y.sanitise(r);
                          r !== n &&
                            (e.components.parameters[n] &&
                              k('Duplicate sanitised parameter name ' + n, t),
                            (e.components.parameters[n] = e.components.parameters[r]),
                            delete e.components.parameters[r]),
                            I(e.components.parameters[n], null, null, null, n, e, t);
                        }
                        for (let r in e.components.responses) {
                          let n = y.sanitise(r);
                          r !== n &&
                            (e.components.responses[n] &&
                              k('Duplicate sanitised response name ' + n, t),
                            (e.components.responses[n] = e.components.responses[r]),
                            delete e.components.responses[r]);
                          let o = e.components.responses[n];
                          if ((_(o, 0, null, e, t), o.headers))
                            for (let e in o.headers)
                              'status code' === e.toLowerCase()
                                ? t.patch
                                  ? (t.patches++, delete o.headers[e])
                                  : k('(Patchable) "Status Code" is not a valid header', t)
                                : C(o.headers[e], t);
                        }
                        for (let t in e.components.requestBodies) {
                          let n = e.components.requestBodies[t],
                            o = JSON.stringify(n),
                            i = y.hash(o),
                            s = {};
                          (s.name = t), (s.body = n), (s.refs = []), (r[i] = s);
                        }
                        if (
                          (R(e.paths, 'paths', t, r, e),
                          e['x-ms-paths'] && R(e['x-ms-paths'], 'x-ms-paths', t, r, e),
                          !t.debug)
                        )
                          for (let t in e.components.parameters)
                            e.components.parameters[t]['x-s2o-delete'] &&
                              delete e.components.parameters[t];
                        t.debug &&
                          ((e['x-s2o-consumes'] = e.consumes || []),
                          (e['x-s2o-produces'] = e.produces || [])),
                          delete e.consumes,
                          delete e.produces,
                          delete e.schemes;
                        let n = [];
                        if (((e.components.requestBodies = {}), !t.resolveInternal)) {
                          let t = 1;
                          for (let o in r) {
                            let i = r[o];
                            if (i.refs.length > 1) {
                              let r = '';
                              for (
                                i.name || ((i.name = 'requestBody'), (r = t++));
                                n.indexOf(i.name + r) >= 0;

                              )
                                r = r ? ++r : 2;
                              (i.name = i.name + r),
                                n.push(i.name),
                                (e.components.requestBodies[i.name] = u(i.body));
                              for (let t in i.refs) {
                                let r = {};
                                (r.$ref = '#/components/requestBodies/' + i.name),
                                  l.jptr(e, i.refs[t], r);
                              }
                            }
                          }
                        }
                        e.components.responses &&
                          0 === Object.keys(e.components.responses).length &&
                          delete e.components.responses,
                          e.components.parameters &&
                            0 === Object.keys(e.components.parameters).length &&
                            delete e.components.parameters,
                          e.components.examples &&
                            0 === Object.keys(e.components.examples).length &&
                            delete e.components.examples,
                          e.components.requestBodies &&
                            0 === Object.keys(e.components.requestBodies).length &&
                            delete e.components.requestBodies,
                          e.components.securitySchemes &&
                            0 === Object.keys(e.components.securitySchemes).length &&
                            delete e.components.securitySchemes,
                          e.components.headers &&
                            0 === Object.keys(e.components.headers).length &&
                            delete e.components.headers,
                          e.components.schemas &&
                            0 === Object.keys(e.components.schemas).length &&
                            delete e.components.schemas,
                          e.components &&
                            0 === Object.keys(e.components).length &&
                            delete e.components;
                      })(t.openapi, t),
                        t.direct ? r(t.openapi) : r(t);
                    })
                    .catch(function (e) {
                      console.warn(e), n(e);
                    });
              }),
            );
          }
          function M(e, t, r) {
            return i(
              r,
              new Promise(function (r, n) {
                let o = null,
                  i = null;
                try {
                  (o = JSON.parse(e)), (t.text = JSON.stringify(o, null, 2));
                } catch (r) {
                  i = r;
                  try {
                    (o = a.parse(e, { schema: 'core', prettyErrors: !0 })),
                      (t.sourceYaml = !0),
                      (t.text = e);
                  } catch (e) {
                    i = e;
                  }
                }
                o
                  ? N(o, t)
                      .then(e => r(e))
                      .catch(e => n(e))
                  : n(new w(i ? i.message : 'Could not parse string'));
              }),
            );
          }
          e.exports = {
            S2OError: w,
            targetVersion: x,
            convert: N,
            convertObj: N,
            convertUrl: function (e, t, r) {
              return i(
                r,
                new Promise(function (r, n) {
                  (t.origin = !0),
                    t.source || (t.source = e),
                    t.verbose && console.warn('GET ' + e),
                    t.fetch || (t.fetch = s);
                  const o = Object.assign({}, t.fetchOptions, { agent: t.agent });
                  t.fetch(e, o)
                    .then(function (t) {
                      if (200 !== t.status) throw new w(`Received status code ${t.status}: ${e}`);
                      return t.text();
                    })
                    .then(function (e) {
                      M(e, t)
                        .then(e => r(e))
                        .catch(e => n(e));
                    })
                    .catch(function (e) {
                      n(e);
                    });
                }),
              );
            },
            convertStr: M,
            convertFile: function (e, t, r) {
              return i(
                r,
                new Promise(function (r, o) {
                  n.readFile(e, t.encoding || 'utf8', function (n, i) {
                    n
                      ? o(n)
                      : ((t.sourceFile = e),
                        M(i, t)
                          .then(e => r(e))
                          .catch(e => o(e)));
                  });
                }),
              );
            },
            convertStream: function (e, t, r) {
              return i(
                r,
                new Promise(function (r, n) {
                  let o = '';
                  e.on('data', function (e) {
                    o += e;
                  }).on('end', function () {
                    M(o, t)
                      .then(e => r(e))
                      .catch(e => n(e));
                  });
                }),
              );
            },
          };
        },
        711: function (e, t, r) {
          'use strict';
          const n = r(685);
          e.exports = {
            statusCodes: Object.assign(
              {},
              {
                default: 'Default response',
                '1XX': 'Informational',
                103: 'Early hints',
                '2XX': 'Successful',
                '3XX': 'Redirection',
                '4XX': 'Client Error',
                '5XX': 'Server Error',
                '7XX': 'Developer Error',
              },
              n.STATUS_CODES,
            ),
          };
        },
        595: function (e, t, r) {
          var n = r(314),
            o = ['add', 'done', 'toJS', 'fromExternalJS', 'load', 'dispose', 'search', 'Worker'];
          e.exports = function () {
            var e = new Worker(
              URL.createObjectURL(
                new Blob([
                  '/*! For license information please see 756674defce81e90acea.worker.js.LICENSE.txt */\n!function(){var e={336:function(e,t,r){var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,Q,k,S,E,L,P,b,T,O,I,R,F,C,N,j=function(e){var t=new j.Builder;return t.pipeline.add(j.trimmer,j.stopWordFilter,j.stemmer),t.searchPipeline.add(j.stemmer),e.call(t,t),t.build()};j.version="2.3.9",j.utils={},j.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),j.utils.asString=function(e){return null==e?"":e.toString()},j.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},j.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},j.FieldRef.joiner="/",j.FieldRef.fromString=function(e){var t=e.indexOf(j.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new j.FieldRef(n,r,e)},j.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+j.FieldRef.joiner+this.docRef),this._stringValue},j.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},j.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},j.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},j.Set.prototype.contains=function(e){return!!this.elements[e]},j.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===j.Set.complete)return this;if(e===j.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new j.Set(i)},j.Set.prototype.union=function(e){return e===j.Set.complete?j.Set.complete:e===j.Set.empty?this:new j.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},j.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},j.Token=function(e,t){this.str=e||"",this.metadata=t||{}},j.Token.prototype.toString=function(){return this.str},j.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},j.Token.prototype.clone=function(e){return e=e||function(e){return e},new j.Token(e(this.str,this.metadata),this.metadata)},j.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new j.Token(j.utils.asString(e).toLowerCase(),j.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(j.tokenizer.separator)||s==n){if(a>0){var u=j.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new j.Token(r.slice(o,s),u))}o=s+1}}return i},j.tokenizer.separator=/[\\s\\-]+/,j.Pipeline=function(){this._stack=[]},j.Pipeline.registeredFunctions=Object.create(null),j.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&j.utils.warn("Overwriting existing registered function: "+t),e.label=t,j.Pipeline.registeredFunctions[e.label]=e},j.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||j.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\\n",e)},j.Pipeline.load=function(e){var t=new j.Pipeline;return e.forEach((function(e){var r=j.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},j.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){j.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},j.Pipeline.prototype.after=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},j.Pipeline.prototype.before=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},j.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},j.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},j.Pipeline.prototype.runString=function(e,t){var r=new j.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},j.Pipeline.prototype.reset=function(){this._stack=[]},j.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return j.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},j.Vector=function(e){this._magnitude=0,this.elements=e||[]},j.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},j.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},j.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},j.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},j.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},j.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},j.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},j.Vector.prototype.toJSON=function(){return this.elements},j.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},h="^("+(l="[^aeiou][^aeiouy]*")+")?"+(c=(u="[aeiouy]")+"[aeiou]*")+l+"("+c+")?$",d="^("+l+")?"+c+l+c+l,f="^("+l+")?"+u,p=new RegExp("^("+l+")?"+c+l),y=new RegExp(d),m=new RegExp(h),g=new RegExp(f),x=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,w=/^(.+?)eed$/,Q=/^(.+?)(ed|ing)$/,k=/.$/,S=/(at|bl|iz)$/,E=new RegExp("([^aeiouylsz])\\\\1$"),L=new RegExp("^"+l+u+"[^aeiouwxy]$"),P=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,T=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,O=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,I=/^(.+?)(s|t)(ion)$/,R=/^(.+?)e$/,F=/ll$/,C=new RegExp("^"+l+u+"[^aeiouwxy]$"),N=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=v,(i=x).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=Q,(i=w).test(e)){var c=i.exec(e);(i=p).test(c[1])&&(i=k,e=e.replace(i,""))}else s.test(e)&&(t=(c=s.exec(e))[1],(s=g).test(t)&&(u=E,l=L,(s=S).test(e=t)?e+="e":u.test(e)?(i=k,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=P).test(e)&&(e=(t=(c=i.exec(e))[1])+"i"),(i=b).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+o[r])),(i=T).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+a[r])),s=I,(i=O).test(e)?(t=(c=i.exec(e))[1],(i=y).test(t)&&(e=t)):s.test(e)&&(t=(c=s.exec(e))[1]+c[2],(s=y).test(t)&&(e=t)),(i=R).test(e)&&(t=(c=i.exec(e))[1],s=m,u=C,((i=y).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=y,(i=F).test(e)&&s.test(e)&&(i=k,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(N)}),j.Pipeline.registerFunction(j.stemmer,"stemmer"),j.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},j.stopWordFilter=j.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),j.Pipeline.registerFunction(j.stopWordFilter,"stopWordFilter"),j.trimmer=function(e){return e.update((function(e){return e.replace(/^\\W+/,"").replace(/\\W+$/,"")}))},j.Pipeline.registerFunction(j.trimmer,"trimmer"),j.TokenSet=function(){this.final=!1,this.edges={},this.id=j.TokenSet._nextId,j.TokenSet._nextId+=1},j.TokenSet._nextId=1,j.TokenSet.fromArray=function(e){for(var t=new j.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},j.TokenSet.fromClause=function(e){return"editDistance"in e?j.TokenSet.fromFuzzyString(e.term,e.editDistance):j.TokenSet.fromString(e.term)},j.TokenSet.fromFuzzyString=function(e,t){for(var r=new j.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new j.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else a=new j.TokenSet,i.node.edges["*"]=a;if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else u=new j.TokenSet,i.node.edges["*"]=u;1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new j.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},j.TokenSet.fromString=function(e){for(var t=new j.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new j.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},j.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},j.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},j.TokenSet.prototype.intersect=function(e){for(var t=new j.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new j.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}return t},j.TokenSet.Builder=function(){this.previousWord="",this.root=new j.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},j.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new j.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},j.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},j.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},j.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},j.Index.prototype.search=function(e){return this.query((function(t){new j.QueryParser(e,t).parse()}))},j.Index.prototype.query=function(e){for(var t=new j.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new j.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=j.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=j.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===j.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++)s[R=l.fields[y]]=j.Set.empty;break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<l.fields.length;y++){var w=x[R=l.fields[y]],Q=Object.keys(w),k=g+"/"+R,S=new j.Set(Q);if(l.presence==j.Query.presence.REQUIRED&&(c=c.union(S),void 0===s[R]&&(s[R]=j.Set.complete)),l.presence!=j.Query.presence.PROHIBITED){if(n[R].upsert(v,l.boost,(function(e,t){return e+t})),!i[k]){for(var E=0;E<Q.length;E++){var L,P=Q[E],b=new j.FieldRef(P,R),T=w[P];void 0===(L=r[b])?r[b]=new j.MatchData(g,R,T):L.add(g,R,T)}i[k]=!0}}else void 0===o[R]&&(o[R]=j.Set.empty),o[R]=o[R].union(S)}}}if(l.presence===j.Query.presence.REQUIRED)for(y=0;y<l.fields.length;y++)s[R=l.fields[y]]=s[R].intersect(c)}var O=j.Set.complete,I=j.Set.empty;for(a=0;a<this.fields.length;a++){var R;s[R=this.fields[a]]&&(O=O.intersect(s[R])),o[R]&&(I=I.union(o[R]))}var F=Object.keys(r),C=[],N=Object.create(null);if(t.isNegated())for(F=Object.keys(this.fieldVectors),a=0;a<F.length;a++){b=F[a];var _=j.FieldRef.fromString(b);r[b]=new j.MatchData}for(a=0;a<F.length;a++){var D=(_=j.FieldRef.fromString(F[a])).docRef;if(O.contains(D)&&!I.contains(D)){var A,B=this.fieldVectors[_],z=n[_.fieldName].similarity(B);if(void 0!==(A=N[D]))A.score+=z,A.matchData.combine(r[_]);else{var V={ref:D,score:z,matchData:r[_]};N[D]=V,C.push(V)}}}return C.sort((function(e,t){return t.score-e.score}))},j.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:j.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},j.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new j.TokenSet.Builder,a=j.Pipeline.load(e.pipeline);e.version!=j.version&&j.utils.warn("Version mismatch when loading serialised index. Current version of lunr \'"+j.version+"\' does not match serialized index \'"+e.version+"\'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new j.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new j.Index(t)},j.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=j.tokenizer,this.pipeline=new j.Pipeline,this.searchPipeline=new j.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},j.Builder.prototype.ref=function(e){this._ref=e},j.Builder.prototype.field=function(e,t){if(/\\//.test(e))throw new RangeError("Field \'"+e+"\' contains illegal character \'/\'");this._fields[e]=t||{}},j.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},j.Builder.prototype.k1=function(e){this._k1=e},j.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new j.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},j.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=j.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},j.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=j.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new j.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(y=j.idf(this.invertedIndex[x],this.documentCount),n[x]=y):y=n[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},j.Builder.prototype.createTokenSet=function(){this.tokenSet=j.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},j.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new j.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},j.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},j.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},j.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},j.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},j.Query=function(e){this.clauses=[],this.allFields=e},j.Query.wildcard=new String("*"),j.Query.wildcard.NONE=0,j.Query.wildcard.LEADING=1,j.Query.wildcard.TRAILING=2,j.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},j.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=j.Query.wildcard.NONE),e.wildcard&j.Query.wildcard.LEADING&&e.term.charAt(0)!=j.Query.wildcard&&(e.term="*"+e.term),e.wildcard&j.Query.wildcard.TRAILING&&e.term.slice(-1)!=j.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=j.Query.presence.OPTIONAL),this.clauses.push(e),this},j.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=j.Query.presence.PROHIBITED)return!1;return!0},j.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,j.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},j.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},j.QueryParseError.prototype=new Error,j.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},j.QueryLexer.prototype.run=function(){for(var e=j.QueryLexer.lexText;e;)e=e(this)},j.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},j.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},j.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},j.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return j.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},j.QueryLexer.prototype.width=function(){return this.pos-this.start},j.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},j.QueryLexer.prototype.backup=function(){this.pos-=1},j.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=j.QueryLexer.EOS&&this.backup()},j.QueryLexer.prototype.more=function(){return this.pos<this.length},j.QueryLexer.EOS="EOS",j.QueryLexer.FIELD="FIELD",j.QueryLexer.TERM="TERM",j.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",j.QueryLexer.BOOST="BOOST",j.QueryLexer.PRESENCE="PRESENCE",j.QueryLexer.lexField=function(e){return e.backup(),e.emit(j.QueryLexer.FIELD),e.ignore(),j.QueryLexer.lexText},j.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(j.QueryLexer.TERM)),e.ignore(),e.more())return j.QueryLexer.lexText},j.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.EDIT_DISTANCE),j.QueryLexer.lexText},j.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.BOOST),j.QueryLexer.lexText},j.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(j.QueryLexer.TERM)},j.QueryLexer.termSeparator=j.tokenizer.separator,j.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==j.QueryLexer.EOS)return j.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return j.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if(t.match(j.QueryLexer.termSeparator))return j.QueryLexer.lexTerm}else e.escapeCharacter()}},j.QueryParser=function(e,t){this.lexer=new j.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},j.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=j.QueryParser.parseClause;e;)e=e(this);return this.query},j.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},j.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},j.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},j.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case j.QueryLexer.PRESENCE:return j.QueryParser.parsePresence;case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value \'"+t.str+"\'"),new j.QueryParseError(r,t.start,t.end)}},j.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=j.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=j.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator\'"+t.str+"\'";throw new j.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n)throw r="expecting term or field, found nothing",new j.QueryParseError(r,t.start,t.end);switch(n.type){case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:throw r="expecting term or field, found \'"+n.type+"\'",new j.QueryParseError(r,n.start,n.end)}}},j.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"\'"+e+"\'"})).join(", "),n="unrecognised field \'"+t.str+"\', possible fields: "+r;throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw n="expecting term, found nothing",new j.QueryParseError(n,t.start,t.end);if(i.type===j.QueryLexer.TERM)return j.QueryParser.parseTerm;throw n="expecting term, found \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}},j.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:var n="Unexpected lexeme type \'"+r.type+"\'";throw new j.QueryParseError(n,r.start,r.end)}else e.nextClause()}},j.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},j.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return j})?n.call(t,r,t,e):n)||(e.exports=i)}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};!function(){"use strict";r.d(n,{add:function(){return c},dispose:function(){return y},done:function(){return h},fromExternalJS:function(){return f},load:function(){return p},search:function(){return m},toJS:function(){return d}});var e=r(336),t=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{a(r.next(e))}catch(e){i(e)}},o=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((r=r.apply(e,t)).next())}));let i,s,o,a=[];function u(){i=new e.Builder,i.field("title"),i.field("description"),i.ref("ref"),i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),o=new Promise((e=>{s=e}))}e.tokenizer.separator=/\\s+/,u();const l=t=>{const r=e.trimmer(new e.Token(t,{}));return"*"+e.stemmer(r)+"*"};function c(e,t,r){const n=a.push(r)-1,s={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};i.add(s)}function h(){return t(this,null,(function*(){s(i.build())}))}function d(){return t(this,null,(function*(){return{store:a,index:(yield o).toJSON()}}))}function f(e,r){return t(this,null,(function*(){try{if(importScripts(e),!self[r])throw new Error("Broken index file format");p(self[r])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function p(r){return t(this,null,(function*(){a=r.store,s(e.Index.load(r.index))}))}function y(){return t(this,null,(function*(){a=[],u()}))}function m(e,r=0){return t(this,null,(function*(){if(0===e.trim().length)return[];let t=(yield o).query((t=>{e.trim().toLowerCase().split(/\\s+/).forEach((e=>{if(1===e.length)return;const r=l(e);t.term(r,{})}))}));return r>0&&(t=t.slice(0,r)),t.map((e=>({meta:a[e.ref],score:e.score})))}))}addEventListener("message",(function(e){var t,r=e.data,i=r.type,s=r.method,o=r.id,a=r.params;"RPC"===i&&s&&((t=n[s])?Promise.resolve().then((function(){return t.apply(n,a)})):Promise.reject("No such method")).then((function(e){postMessage({type:"RPC",id:o,result:e})})).catch((function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:o,error:t})}))})),postMessage({type:"RPC",method:"ready"})}()}();\n//# sourceMappingURL=756674defce81e90acea.worker.js.map',
                ]),
              ),
              { name: '[fullhash].worker.js' },
            );
            return n(e, o), e;
          };
        },
        314: function (e) {
          e.exports = function (e, t) {
            var r = 0,
              n = {};
            e.addEventListener('message', function (t) {
              var r = t.data;
              if ('RPC' === r.type)
                if (r.id) {
                  var o = n[r.id];
                  o &&
                    (delete n[r.id],
                    r.error
                      ? o[1](Object.assign(Error(r.error.message), r.error))
                      : o[0](r.result));
                } else {
                  var i = document.createEvent('Event');
                  i.initEvent(r.method, !1, !1), (i.data = r.params), e.dispatchEvent(i);
                }
            }),
              t.forEach(function (t) {
                e[t] = function () {
                  var o = arguments;
                  return new Promise(function (i, s) {
                    var a = ++r;
                    (n[a] = [i, s]),
                      e.postMessage({ type: 'RPC', id: a, method: t, params: [].slice.call(o) });
                  });
                };
              });
          };
        },
        766: function (e) {
          'use strict';
          e.exports = require('call-me-maybe');
        },
        376: function (e) {
          'use strict';
          e.exports = require('fast-safe-stringify');
        },
        322: function (e) {
          'use strict';
          e.exports = require('stickyfill');
        },
        66: function (e) {
          'use strict';
          e.exports = require('yaml');
        },
        147: function (e) {
          'use strict';
          e.exports = require('fs');
        },
        685: function (e) {
          'use strict';
          e.exports = require('http');
        },
        17: function (e) {
          'use strict';
          e.exports = require('path');
        },
        416: function (e) {
          'use strict';
          e.exports = void 0;
        },
        109: function (e) {
          'use strict';
          e.exports = { i8: '7.0.6' };
        },
      },
      t = {};
    function r(n) {
      var o = t[n];
      if (void 0 !== o) return o.exports;
      var i = (t[n] = { id: n, exports: {} });
      return e[n](i, i.exports, r), i.exports;
    }
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, { a: t }), t;
    }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ('object' == typeof globalThis) return globalThis;
        try {
          return this || new Function('return this')();
        } catch (e) {
          if ('object' == typeof window) return window;
        }
      })()),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.nc = void 0);
    var n = {};
    return (
      (function () {
        'use strict';
        r.r(n),
          r.d(n, {
            AUTH_TYPES: function () {
              return ic;
            },
            ApiContentWrap: function () {
              return nd;
            },
            ApiInfo: function () {
              return yc;
            },
            ApiInfoModel: function () {
              return Vr;
            },
            ApiLogo: function () {
              return vc;
            },
            AppStore: function () {
              return cc;
            },
            ArraySchema: function () {
              return dl;
            },
            BackgroundStub: function () {
              return od;
            },
            BodyContent: function () {
              return hp;
            },
            COMPONENT_REGEXP: function () {
              return Br;
            },
            CallbackModel: function () {
              return dn;
            },
            ClipboardService: function () {
              return qs;
            },
            ContentItem: function () {
              return $u;
            },
            ContentItems: function () {
              return Su;
            },
            DiscriminatorDropdown: function () {
              return el;
            },
            Dropdown: function () {
              return us;
            },
            DropdownLabel: function () {
              return ia;
            },
            DropdownOrLabel: function () {
              return vs;
            },
            DropdownWrapper: function () {
              return sa;
            },
            ErrorBoundary: function () {
              return ne;
            },
            Example: function () {
              return ra;
            },
            ExampleModel: function () {
              return Bn;
            },
            ExternalExample: function () {
              return na;
            },
            FieldModel: function () {
              return Hn;
            },
            GROUP_DEPTH: function () {
              return Yo;
            },
            GroupModel: function () {
              return Mo;
            },
            HistoryService: function () {
              return Ut;
            },
            IS_BROWSER: function () {
              return s;
            },
            InvertedSimpleDropdown: function () {
              return aa;
            },
            JsonPointer: function () {
              return Oe;
            },
            JsonViewer: function () {
              return Gs;
            },
            LEGACY_REGEXP: function () {
              return qr;
            },
            Loading: function () {
              return ae;
            },
            MDX_COMPONENT_REGEXP: function () {
              return Fr;
            },
            Markdown: function () {
              return Ts;
            },
            MarkdownRenderer: function () {
              return Ur;
            },
            MarkerService: function () {
              return Ht;
            },
            MediaContentModel: function () {
              return Kn;
            },
            MediaTypeModel: function () {
              return Yn;
            },
            MediaTypesSwitch: function () {
              return Kc;
            },
            MenuBuilder: function () {
              return Zo;
            },
            MenuItem: function () {
              return Nu;
            },
            MenuItemLabel: function () {
              return Dc;
            },
            MenuItemLi: function () {
              return _c;
            },
            MenuItemTitle: function () {
              return Lc;
            },
            MenuItemUl: function () {
              return Tc;
            },
            MenuItems: function () {
              return Wu;
            },
            MenuStore: function () {
              return ti;
            },
            MiddlePanel: function () {
              return ai;
            },
            MimeLabel: function () {
              return oa;
            },
            NoSampleLabel: function () {
              return la;
            },
            OLD_SECURITY_DEFINITIONS_JSX_NAME: function () {
              return ht;
            },
            ObjectSchema: function () {
              return tl;
            },
            OneOfButton: function () {
              return kl;
            },
            OneOfSchema: function () {
              return Ol;
            },
            OpenAPIParser: function () {
              return jn;
            },
            Operation: function () {
              return bu;
            },
            OperationBadge: function () {
              return Ac;
            },
            OperationItem: function () {
              return Au;
            },
            OperationMenuItemContent: function () {
              return Mu;
            },
            OperationModel: function () {
              return go;
            },
            OptionsConsumer: function () {
              return ue;
            },
            OptionsContext: function () {
              return ce;
            },
            OptionsProvider: function () {
              return pe;
            },
            Parameters: function () {
              return up;
            },
            PayloadSamples: function () {
              return Zp;
            },
            Redoc: function () {
              return hd;
            },
            RedocAttribution: function () {
              return zc;
            },
            RedocNormalizedOptions: function () {
              return W;
            },
            RedocStandalone: function () {
              return vd;
            },
            RedocWrap: function () {
              return rd;
            },
            RequestBodyModel: function () {
              return eo;
            },
            ResponseDetails: function () {
              return Pp;
            },
            ResponseHeaders: function () {
              return kp;
            },
            ResponseModel: function () {
              return po;
            },
            ResponseSamples: function () {
              return cu;
            },
            ResponseTitle: function () {
              return gp;
            },
            ResponseView: function () {
              return Cp;
            },
            ResponsesList: function () {
              return Ip;
            },
            RightPanel: function () {
              return ci;
            },
            Row: function () {
              return ui;
            },
            SCHEMA_DEFINITION_JSX_NAME: function () {
              return mt;
            },
            SECTION_ATTR: function () {
              return ei;
            },
            SECURITY_DEFINITIONS_JSX_NAME: function () {
              return dt;
            },
            SECURITY_SCHEMES_SECTION_PREFIX: function () {
              return ft;
            },
            Schema: function () {
              return Rl;
            },
            SchemaDefinition: function () {
              return Bl;
            },
            SchemaModel: function () {
              return Nn;
            },
            ScrollService: function () {
              return ii;
            },
            SearchBox: function () {
              return dd;
            },
            SearchStore: function () {
              return si;
            },
            Section: function () {
              return li;
            },
            SectionItem: function () {
              return Cu;
            },
            SecurityDefs: function () {
              return sc;
            },
            SecuritySchemeModel: function () {
              return $o;
            },
            SecuritySchemesModel: function () {
              return Po;
            },
            SideMenu: function () {
              return Hu;
            },
            SideNavStyleEnum: function () {
              return R;
            },
            SimpleDropdown: function () {
              return ds;
            },
            SourceCode: function () {
              return Xs;
            },
            SourceCodeWithCopy: function () {
              return Ks;
            },
            SpecStore: function () {
              return Do;
            },
            StickyResponsiveSidebar: function () {
              return td;
            },
            StoreBuilder: function () {
              return ki;
            },
            StoreConsumer: function () {
              return wi;
            },
            StoreContext: function () {
              return xi;
            },
            StoreProvider: function () {
              return vi;
            },
            StyledMarkdownBlock: function () {
              return Os;
            },
            ThemeProvider: function () {
              return X;
            },
            Throttle: function () {
              return St;
            },
            alphabeticallyByProp: function () {
              return qt;
            },
            appendToMdHeading: function () {
              return g;
            },
            argValueToBoolean: function () {
              return Q;
            },
            buildComponentComment: function () {
              return Qr;
            },
            concatRefStacks: function () {
              return En;
            },
            convertSwagger2OpenAPI: function () {
              return be;
            },
            createGlobalStyle: function () {
              return Z;
            },
            createStore: function () {
              return lc;
            },
            css: function () {
              return Y;
            },
            debugTime: function () {
              return $t;
            },
            debugTimeEnd: function () {
              return Pt;
            },
            detectType: function () {
              return Be;
            },
            escapeHTMLAttrChars: function () {
              return P;
            },
            expandDefaultServerVariables: function () {
              return pt;
            },
            extensionsHook: function () {
              return te;
            },
            extractExtensions: function () {
              return xt;
            },
            flattenByProp: function () {
              return m;
            },
            getBasePath: function () {
              return E;
            },
            getContentWithLegacyExamples: function () {
              return wt;
            },
            getDefinitionName: function () {
              return rt;
            },
            getOperationSummary: function () {
              return qe;
            },
            getSerializedValue: function () {
              return Xe;
            },
            getStatusCodeType: function () {
              return ze;
            },
            highlight: function () {
              return jt;
            },
            history: function () {
              return Wt;
            },
            html2Str: function () {
              return l;
            },
            humanizeConstraints: function () {
              return it;
            },
            humanizeNumberRange: function () {
              return ot;
            },
            isAbsoluteUrl: function () {
              return k;
            },
            isArray: function () {
              return A;
            },
            isBoolean: function () {
              return I;
            },
            isFormUrlEncoded: function () {
              return We;
            },
            isJsonLike: function () {
              return Ue;
            },
            isNamedDefinition: function () {
              return tt;
            },
            isNumeric: function () {
              return y;
            },
            isObject: function () {
              return x;
            },
            isOperationName: function () {
              return Me;
            },
            isPayloadSample: function () {
              return fo;
            },
            isPrimitiveType: function () {
              return Qe;
            },
            isRedocExtension: function () {
              return bt;
            },
            isStatusCode: function () {
              return Le;
            },
            keyframes: function () {
              return G;
            },
            langFromMime: function () {
              return Ke;
            },
            loadAndBundleSpec: function () {
              return ge;
            },
            mapLang: function () {
              return Et;
            },
            mapValues: function () {
              return h;
            },
            mapWithLast: function () {
              return d;
            },
            media: function () {
              return K;
            },
            memoize: function () {
              return Mt;
            },
            menuItemDepth: function () {
              return Rc;
            },
            mergeObjects: function () {
              return b;
            },
            mergeParams: function () {
              return lt;
            },
            mergeSimilarMediaTypes: function () {
              return ct;
            },
            normalizeServers: function () {
              return ut;
            },
            pluralizeType: function () {
              return vt;
            },
            pushRef: function () {
              return On;
            },
            querySelector: function () {
              return a;
            },
            removeQueryStringAndHash: function () {
              return S;
            },
            resolveUrl: function () {
              return O;
            },
            safeSlugify: function () {
              return w;
            },
            scrollIntoViewIfNeeded: function () {
              return c;
            },
            serializeParameterValue: function () {
              return Ge;
            },
            serializeParameterValueWithMime: function () {
              return Ze;
            },
            setSecuritySchemePrefix: function () {
              return yt;
            },
            shortenHTTPVerb: function () {
              return gt;
            },
            sortByField: function () {
              return at;
            },
            sortByRequired: function () {
              return st;
            },
            stripTrailingSlash: function () {
              return f;
            },
            styled: function () {
              return ee;
            },
            titleize: function () {
              return j;
            },
            unescapeHTMLChars: function () {
              return C;
            },
            urlFormEncodePayload: function () {
              return Ye;
            },
            useStore: function () {
              return Oi;
            },
          });
        var e = require('react'),
          t = require('polished');
        const o = {
          spacing: {
            unit: 5,
            sectionHorizontal: ({ spacing: e }) => 8 * e.unit,
            sectionVertical: ({ spacing: e }) => 8 * e.unit,
          },
          breakpoints: { small: '50rem', medium: '75rem', large: '105rem' },
          colors: {
            tonalOffset: 0.2,
            primary: {
              main: '#32329f',
              light: ({ colors: e }) => (0, t.lighten)(e.tonalOffset, e.primary.main),
              dark: ({ colors: e }) => (0, t.darken)(e.tonalOffset, e.primary.main),
              contrastText: ({ colors: e }) => (0, t.readableColor)(e.primary.main),
            },
            success: {
              main: '#1d8127',
              light: ({ colors: e }) => (0, t.lighten)(2 * e.tonalOffset, e.success.main),
              dark: ({ colors: e }) => (0, t.darken)(e.tonalOffset, e.success.main),
              contrastText: ({ colors: e }) => (0, t.readableColor)(e.success.main),
            },
            warning: {
              main: '#ffa500',
              light: ({ colors: e }) => (0, t.lighten)(e.tonalOffset, e.warning.main),
              dark: ({ colors: e }) => (0, t.darken)(e.tonalOffset, e.warning.main),
              contrastText: '#ffffff',
            },
            error: {
              main: '#d41f1c',
              light: ({ colors: e }) => (0, t.lighten)(e.tonalOffset, e.error.main),
              dark: ({ colors: e }) => (0, t.darken)(e.tonalOffset, e.error.main),
              contrastText: ({ colors: e }) => (0, t.readableColor)(e.error.main),
            },
            gray: { 50: '#FAFAFA', 100: '#F5F5F5' },
            text: {
              primary: '#333333',
              secondary: ({ colors: e }) => (0, t.lighten)(e.tonalOffset, e.text.primary),
            },
            border: { dark: 'rgba(0,0,0, 0.1)', light: '#ffffff' },
            responses: {
              success: {
                color: ({ colors: e }) => e.success.main,
                backgroundColor: ({ colors: e }) => (0, t.transparentize)(0.93, e.success.main),
                tabTextColor: ({ colors: e }) => e.responses.success.color,
              },
              error: {
                color: ({ colors: e }) => e.error.main,
                backgroundColor: ({ colors: e }) => (0, t.transparentize)(0.93, e.error.main),
                tabTextColor: ({ colors: e }) => e.responses.error.color,
              },
              redirect: {
                color: ({ colors: e }) => e.warning.main,
                backgroundColor: ({ colors: e }) =>
                  (0, t.transparentize)(0.9, e.responses.redirect.color),
                tabTextColor: ({ colors: e }) => e.responses.redirect.color,
              },
              info: {
                color: '#87ceeb',
                backgroundColor: ({ colors: e }) =>
                  (0, t.transparentize)(0.9, e.responses.info.color),
                tabTextColor: ({ colors: e }) => e.responses.info.color,
              },
            },
            http: {
              get: '#2F8132',
              post: '#186FAF',
              put: '#95507c',
              options: '#947014',
              patch: '#bf581d',
              delete: '#cc3333',
              basic: '#707070',
              link: '#07818F',
              head: '#A23DAD',
              publish: '#186FAF',
              subscribe: '#2F8132',
            },
          },
          schema: {
            linesColor: e =>
              (0, t.lighten)(
                e.colors.tonalOffset,
                (0, t.desaturate)(e.colors.tonalOffset, e.colors.primary.main),
              ),
            defaultDetailsWidth: '75%',
            typeNameColor: e => e.colors.text.secondary,
            typeTitleColor: e => e.schema.typeNameColor,
            requireLabelColor: e => e.colors.error.main,
            labelsTextSize: '0.9em',
            nestingSpacing: '1em',
            nestedBackground: '#fafafa',
            arrow: { size: '1.1em', color: e => e.colors.text.secondary },
          },
          typography: {
            fontSize: '14px',
            lineHeight: '1.5em',
            fontWeightRegular: '400',
            fontWeightBold: '600',
            fontWeightLight: '300',
            fontFamily: 'Roboto, sans-serif',
            smoothing: 'antialiased',
            optimizeSpeed: !0,
            headings: {
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400',
              lineHeight: '1.6em',
            },
            code: {
              fontSize: '13px',
              fontFamily: 'Courier, monospace',
              lineHeight: ({ typography: e }) => e.lineHeight,
              fontWeight: ({ typography: e }) => e.fontWeightRegular,
              color: '#e53935',
              backgroundColor: 'rgba(38, 50, 56, 0.05)',
              wrap: !1,
            },
            links: {
              color: ({ colors: e }) => e.primary.main,
              visited: ({ typography: e }) => e.links.color,
              hover: ({ typography: e }) => (0, t.lighten)(0.2, e.links.color),
              textDecoration: 'auto',
              hoverTextDecoration: 'auto',
            },
          },
          sidebar: {
            width: '260px',
            backgroundColor: '#fafafa',
            textColor: '#333333',
            activeTextColor: e =>
              e.sidebar.textColor !== o.sidebar.textColor
                ? e.sidebar.textColor
                : e.colors.primary.main,
            groupItems: {
              activeBackgroundColor: e => (0, t.darken)(0.1, e.sidebar.backgroundColor),
              activeTextColor: e => e.sidebar.activeTextColor,
              textTransform: 'uppercase',
            },
            level1Items: {
              activeBackgroundColor: e => (0, t.darken)(0.05, e.sidebar.backgroundColor),
              activeTextColor: e => e.sidebar.activeTextColor,
              textTransform: 'none',
            },
            arrow: { size: '1.5em', color: e => e.sidebar.textColor },
          },
          logo: {
            maxHeight: ({ sidebar: e }) => e.width,
            maxWidth: ({ sidebar: e }) => e.width,
            gutter: '2px',
          },
          rightPanel: {
            backgroundColor: '#263238',
            width: '40%',
            textColor: '#ffffff',
            servers: {
              overlay: { backgroundColor: '#fafafa', textColor: '#263238' },
              url: { backgroundColor: '#fff' },
            },
          },
          codeBlock: {
            backgroundColor: ({ rightPanel: e }) => (0, t.darken)(0.1, e.backgroundColor),
          },
          fab: { backgroundColor: '#f2f2f2', color: '#0065FB' },
        };
        var i = o;
        const s = 'undefined' != typeof window && 'HTMLElement' in window;
        function a(e) {
          return 'undefined' != typeof document ? document.querySelector(e) : null;
        }
        function l(e) {
          return e
            .split(/<[^>]+>/)
            .map(e => e.trim())
            .filter(e => e.length > 0)
            .join(' ');
        }
        function c(e, t = !0) {
          const r = e.parentNode;
          if (!r) return;
          const n = window.getComputedStyle(r, void 0),
            o = parseInt(n.getPropertyValue('border-top-width'), 10),
            i = parseInt(n.getPropertyValue('border-left-width'), 10),
            s = e.offsetTop - r.offsetTop < r.scrollTop,
            a = e.offsetTop - r.offsetTop + e.clientHeight - o > r.scrollTop + r.clientHeight,
            l = e.offsetLeft - r.offsetLeft < r.scrollLeft,
            c = e.offsetLeft - r.offsetLeft + e.clientWidth - i > r.scrollLeft + r.clientWidth,
            p = s && !a;
          (s || a) &&
            t &&
            (r.scrollTop = e.offsetTop - r.offsetTop - r.clientHeight / 2 - o + e.clientHeight / 2),
            (l || c) &&
              t &&
              (r.scrollLeft =
                e.offsetLeft - r.offsetLeft - r.clientWidth / 2 - i + e.clientWidth / 2),
            (s || a || l || c) && !t && e.scrollIntoView(p);
        }
        var p = require('slugify'),
          u = r.n(p);
        function d(e, t) {
          const r = [];
          for (let n = 0; n < e.length - 1; n++) r.push(t(e[n], !1));
          return 0 !== e.length && r.push(t(e[e.length - 1], !0)), r;
        }
        function h(e, t) {
          const r = {};
          for (const n in e) e.hasOwnProperty(n) && (r[n] = t(e[n], n, e));
          return r;
        }
        function m(e, t) {
          const r = [],
            n = e => {
              for (const o of e) r.push(o), o[t] && n(o[t]);
            };
          return n(e), r;
        }
        function f(e) {
          return e.endsWith('/') ? e.substring(0, e.length - 1) : e;
        }
        function y(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function g(e, t, r) {
          const n = new RegExp(`(^|\\n)#\\s?${t}\\s*\\n`, 'i'),
            o = new RegExp(`((\\n|^)#\\s*${t}\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)`, 'i');
          if (n.test(e)) return e.replace(o, `$1\n\n${r}\n$4`);
          {
            const n = '' === e || e.endsWith('\n\n') ? '' : e.endsWith('\n') ? '\n' : '\n\n';
            return `${e}${n}# ${t}\n\n${r}`;
          }
        }
        const b = (e, ...t) => {
            if (!t.length) return e;
            const r = t.shift();
            return void 0 === r
              ? e
              : (v(e) &&
                  v(r) &&
                  Object.keys(r).forEach(t => {
                    v(r[t]) ? (e[t] || (e[t] = {}), b(e[t], r[t])) : (e[t] = r[t]);
                  }),
                b(e, ...t));
          },
          x = e => null !== e && 'object' == typeof e,
          v = e => x(e) && !A(e);
        function w(e) {
          return (
            u()(e) ||
            e
              .toString()
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/&/g, '-and-')
              .replace(/\--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '')
          );
        }
        function k(e) {
          return /(?:^[a-z][a-z0-9+.-]*:|\/\/)/i.test(e);
        }
        function O(e, t) {
          let r;
          if (t.startsWith('//'))
            try {
              r = `${new URL(e).protocol || 'https:'}${t}`;
            } catch (e) {
              r = `https:${t}`;
            }
          else if (k(t)) r = t;
          else if (t.startsWith('/'))
            try {
              const n = new URL(e);
              (n.pathname = t), (r = n.href);
            } catch (e) {
              r = t;
            }
          else r = f(e) + '/' + t;
          return f(r);
        }
        function E(e) {
          try {
            return $(e).pathname;
          } catch (t) {
            return e;
          }
        }
        function j(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function S(e) {
          try {
            const t = $(e);
            return (t.search = ''), (t.hash = ''), t.toString();
          } catch (t) {
            return e;
          }
        }
        function $(e) {
          return 'undefined' == typeof URL ? new (r(416).URL)(e) : new URL(e);
        }
        function P(e) {
          return e.replace(/["\\]/g, '\\$&');
        }
        function C(e) {
          return e
            .replace(/&#(\d+);/g, (e, t) => String.fromCharCode(parseInt(t, 10)))
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"');
        }
        function A(e) {
          return Array.isArray(e);
        }
        function I(e) {
          return 'boolean' == typeof e;
        }
        const T = {
          enum: 'Enum',
          enumSingleValue: 'Value',
          enumArray: 'Items',
          default: 'Default',
          deprecated: 'Deprecated',
          example: 'Example',
          examples: 'Examples',
          recursive: 'Recursive',
          arrayOf: 'Array of ',
          webhook: 'Event',
          const: 'Value',
          noResultsFound: 'No results found',
          download: 'Download',
          downloadSpecification: 'Download OpenAPI specification',
          responses: 'Responses',
          callbackResponses: 'Callback responses',
          requestSamples: 'Request samples',
          payloadSamples: 'Payload samples',
          responseSamples: 'Response samples',
        };
        function _(e, t) {
          const r = T[e];
          return void 0 !== t ? r[t] : r;
        }
        var R = (e => (
            (e.SummaryOnly = 'summary-only'), (e.PathOnly = 'path-only'), (e.IdOnly = 'id-only'), e
          ))(R || {}),
          D = Object.defineProperty,
          L = Object.defineProperties,
          z = Object.getOwnPropertyDescriptors,
          N = Object.getOwnPropertySymbols,
          M = Object.prototype.hasOwnProperty,
          q = Object.prototype.propertyIsEnumerable,
          F = (e, t, r) =>
            t in e
              ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          B = (e, t) => {
            for (var r in t || (t = {})) M.call(t, r) && F(e, r, t[r]);
            if (N) for (var r of N(t)) q.call(t, r) && F(e, r, t[r]);
            return e;
          };
        function Q(e, t) {
          return void 0 === e ? t || !1 : 'string' == typeof e ? 'false' !== e : e;
        }
        function U(e) {
          return 'string' == typeof e ? parseInt(e, 10) : 'number' == typeof e ? e : void 0;
        }
        class W {
          static normalizeExpandResponses(e) {
            if ('all' === e) return 'all';
            if ('string' == typeof e) {
              const t = {};
              return (
                e.split(',').forEach(e => {
                  t[e.trim()] = !0;
                }),
                t
              );
            }
            return (
              void 0 !== e &&
                console.warn(
                  `expandResponses must be a string but received value "${e}" of type ${typeof e}`,
                ),
              {}
            );
          }
          static normalizeHideHostname(e) {
            return !!e;
          }
          static normalizeScrollYOffset(e) {
            if ('string' == typeof e && !y(e)) {
              const t = a(e);
              t ||
                console.warn(
                  'scrollYOffset value is a selector to non-existing element. Using offset 0 by default',
                );
              const r = (t && t.getBoundingClientRect().bottom) || 0;
              return () => r;
            }
            return 'number' == typeof e || y(e)
              ? () => ('number' == typeof e ? e : parseFloat(e))
              : 'function' == typeof e
              ? () => {
                  const t = e();
                  return (
                    'number' != typeof t &&
                      console.warn(
                        `scrollYOffset should return number but returned value "${t}" of type ${typeof t}`,
                      ),
                    t
                  );
                }
              : (void 0 !== e &&
                  console.warn(
                    'Wrong value for scrollYOffset ReDoc option: should be string, number or function',
                  ),
                () => 0);
          }
          static normalizeShowExtensions(e) {
            if (void 0 === e) return !1;
            if ('' === e) return !0;
            if ('string' != typeof e) return e;
            switch (e) {
              case 'true':
                return !0;
              case 'false':
                return !1;
              default:
                return e.split(',').map(e => e.trim());
            }
          }
          static normalizeSideNavStyle(e) {
            const t = R.SummaryOnly;
            if ('string' != typeof e) return t;
            switch (e) {
              case t:
                return e;
              case R.PathOnly:
                return R.PathOnly;
              case R.IdOnly:
                return R.IdOnly;
              default:
                return t;
            }
          }
          static normalizePayloadSampleIdx(e) {
            return 'number' == typeof e
              ? Math.max(0, e)
              : 'string' == typeof e && isFinite(e)
              ? parseInt(e, 10)
              : 0;
          }
          static normalizeJsonSampleExpandLevel(e) {
            return 'all' === e ? 1 / 0 : isNaN(Number(e)) ? 2 : Math.ceil(Number(e));
          }
          static normalizeGeneratedPayloadSamplesMaxDepth(e) {
            return isNaN(Number(e)) ? 10 : Math.max(0, Number(e));
          }
          constructor(e, t = {}) {
            var r, n, o, s, a;
            const l = (e = B(B({}, t), e)).theme && e.theme.extensionsHook;
            var c, p;
            (null == (r = e.theme) ? void 0 : r.menu) &&
              !(null == (n = e.theme) ? void 0 : n.sidebar) &&
              (console.warn('Theme setting "menu" is deprecated. Rename to "sidebar"'),
              (e.theme.sidebar = e.theme.menu)),
              (null == (o = e.theme) ? void 0 : o.codeSample) &&
                !(null == (s = e.theme) ? void 0 : s.codeBlock) &&
                (console.warn('Theme setting "codeSample" is deprecated. Rename to "codeBlock"'),
                (e.theme.codeBlock = e.theme.codeSample)),
              (this.theme = (function (e) {
                const t = {};
                let r = 0;
                const n = (o, i) => {
                  Object.keys(o).forEach(s => {
                    const a = (i ? i + '.' : '') + s,
                      l = o[s];
                    'function' == typeof l
                      ? Object.defineProperty(o, s, {
                          get() {
                            if (!t[a]) {
                              if ((r++, r > 1e3))
                                throw new Error(
                                  `Theme probably contains circular dependency at ${a}: ${l.toString()}`,
                                );
                              t[a] = l(e);
                            }
                            return t[a];
                          },
                          enumerable: !0,
                        })
                      : 'object' == typeof l && n(l, a);
                  });
                };
                return n(e, ''), JSON.parse(JSON.stringify(e));
              })(b({}, i, ((c = B({}, e.theme)), L(c, z({ extensionsHook: void 0 })))))),
              (this.theme.extensionsHook = l),
              (p = e.labels),
              Object.assign(T, p),
              (this.scrollYOffset = W.normalizeScrollYOffset(e.scrollYOffset)),
              (this.hideHostname = W.normalizeHideHostname(e.hideHostname)),
              (this.expandResponses = W.normalizeExpandResponses(e.expandResponses)),
              (this.requiredPropsFirst = Q(e.requiredPropsFirst)),
              (this.sortPropsAlphabetically = Q(e.sortPropsAlphabetically)),
              (this.sortEnumValuesAlphabetically = Q(e.sortEnumValuesAlphabetically)),
              (this.sortOperationsAlphabetically = Q(e.sortOperationsAlphabetically)),
              (this.sortTagsAlphabetically = Q(e.sortTagsAlphabetically)),
              (this.nativeScrollbars = Q(e.nativeScrollbars)),
              (this.pathInMiddlePanel = Q(e.pathInMiddlePanel)),
              (this.untrustedSpec = Q(e.untrustedSpec)),
              (this.hideDownloadButton = Q(e.hideDownloadButton)),
              (this.downloadFileName = e.downloadFileName),
              (this.downloadDefinitionUrl = e.downloadDefinitionUrl),
              (this.disableSearch = Q(e.disableSearch)),
              (this.onlyRequiredInSamples = Q(e.onlyRequiredInSamples)),
              (this.showExtensions = W.normalizeShowExtensions(e.showExtensions)),
              (this.sideNavStyle = W.normalizeSideNavStyle(e.sideNavStyle)),
              (this.hideSingleRequestSampleTab = Q(e.hideSingleRequestSampleTab)),
              (this.menuToggle = Q(e.menuToggle, !0)),
              (this.jsonSampleExpandLevel = W.normalizeJsonSampleExpandLevel(
                e.jsonSampleExpandLevel,
              )),
              (this.enumSkipQuotes = Q(e.enumSkipQuotes)),
              (this.hideSchemaTitles = Q(e.hideSchemaTitles)),
              (this.simpleOneOfTypeLabel = Q(e.simpleOneOfTypeLabel)),
              (this.payloadSampleIdx = W.normalizePayloadSampleIdx(e.payloadSampleIdx)),
              (this.expandSingleSchemaField = Q(e.expandSingleSchemaField)),
              (this.schemaExpansionLevel = (function (e, t = 0) {
                return 'all' === e ? 1 / 0 : U(e) || t;
              })(e.schemaExpansionLevel)),
              (this.showObjectSchemaExamples = Q(e.showObjectSchemaExamples)),
              (this.showSecuritySchemeType = Q(e.showSecuritySchemeType)),
              (this.hideSecuritySection = Q(e.hideSecuritySection)),
              (this.unstable_ignoreMimeParameters = Q(e.unstable_ignoreMimeParameters)),
              (this.allowedMdComponents = e.allowedMdComponents || {}),
              (this.expandDefaultServerVariables = Q(e.expandDefaultServerVariables)),
              (this.maxDisplayedEnumValues = U(e.maxDisplayedEnumValues));
            const u = A(e.ignoreNamedSchemas)
              ? e.ignoreNamedSchemas
              : null == (a = e.ignoreNamedSchemas)
              ? void 0
              : a.split(',').map(e => e.trim());
            (this.ignoreNamedSchemas = new Set(u)),
              (this.hideSchemaPattern = Q(e.hideSchemaPattern)),
              (this.generatedPayloadSamplesMaxDepth = W.normalizeGeneratedPayloadSamplesMaxDepth(
                e.generatedPayloadSamplesMaxDepth,
              )),
              (this.nonce = e.nonce),
              (this.hideFab = Q(e.hideFab)),
              (this.minCharacterLengthToInitSearch = U(e.minCharacterLengthToInitSearch) || 3),
              (this.showWebhookVerb = Q(e.showWebhookVerb));
          }
        }
        var V = require('styled-components'),
          H = r.n(V);
        const { default: J, css: Y, createGlobalStyle: Z, keyframes: G, ThemeProvider: X } = V,
          K = {
            lessThan(e, t, r) {
              return (...n) => Y`
      @media ${t ? 'print, ' : ''} screen and (max-width: ${t => t.theme.breakpoints[e]}) ${
                r || ''
              } {
        ${Y(...n)};
      }
    `;
            },
            greaterThan(e) {
              return (...t) => Y`
      @media (min-width: ${t => t.theme.breakpoints[e]}) {
        ${Y(...t)};
      }
    `;
            },
            between(e, t) {
              return (...r) => Y`
      @media (min-width: ${t => t.theme.breakpoints[e]}) and (max-width: ${e =>
                e.theme.breakpoints[t]}) {
        ${Y(...r)};
      }
    `;
            },
          };
        var ee = J;
        function te(e) {
          return t => {
            if (t.theme.extensionsHook) return t.theme.extensionsHook(e, t);
          };
        }
        const re = ee.div`
  padding: 20px;
  color: red;
`;
        class ne extends e.Component {
          constructor(e) {
            super(e), (this.state = { error: void 0 });
          }
          componentDidCatch(e) {
            return this.setState({ error: e }), !1;
          }
          render() {
            return this.state.error
              ? e.createElement(
                  re,
                  null,
                  e.createElement('h1', null, 'Something went wrong...'),
                  e.createElement('small', null, ' ', this.state.error.message, ' '),
                  e.createElement(
                    'p',
                    null,
                    e.createElement(
                      'details',
                      null,
                      e.createElement('summary', null, 'Stack trace'),
                      e.createElement('pre', null, this.state.error.stack),
                    ),
                  ),
                  e.createElement('small', null, ' ReDoc Version: ', '2.1.1'),
                  ' ',
                  e.createElement('br', null),
                  e.createElement('small', null, ' Commit: ', '55224165'),
                )
              : e.createElement(e.Fragment, null, e.Children.only(this.props.children));
          }
        }
        const oe = G`
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
  }
`,
          ie = ee(t =>
            e.createElement(
              'svg',
              {
                className: t.className,
                version: '1.1',
                width: '512',
                height: '512',
                viewBox: '0 0 512 512',
              },
              e.createElement('path', {
                d: 'M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z',
              }),
              e.createElement('path', {
                d: 'M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z',
              }),
              e.createElement('path', {
                d: 'M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z',
              }),
              e.createElement('path', {
                d: 'M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z',
              }),
              e.createElement('path', {
                d: 'M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z',
              }),
              e.createElement('path', {
                d: 'M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z',
              }),
              e.createElement('path', {
                d: 'M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z',
              }),
              e.createElement('path', {
                d: 'M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z',
              }),
            ),
          )`
  animation: 2s ${oe} linear infinite;
  width: 50px;
  height: 50px;
  content: '';
  display: inline-block;
  margin-left: -25px;

  path {
    fill: ${e => e.color};
  }
`,
          se = ee.div`
  font-family: helvetica, sans;
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 30px 0 20px 0;
  color: ${e => e.color};
`;
        class ae extends e.PureComponent {
          render() {
            return e.createElement(
              'div',
              { style: { textAlign: 'center' } },
              e.createElement(se, { color: this.props.color }, 'Loading ...'),
              e.createElement(ie, { color: this.props.color }),
            );
          }
        }
        var le = require('prop-types');
        const ce = e.createContext(new W({})),
          pe = ce.Provider,
          ue = ce.Consumer;
        var de = require('mobx'),
          he = require('@redocly/openapi-core/lib/bundle'),
          me = require('@redocly/openapi-core/lib/config/config'),
          fe = r(925),
          ye = (e, t, r) =>
            new Promise((n, o) => {
              var i = e => {
                  try {
                    a(r.next(e));
                  } catch (e) {
                    o(e);
                  }
                },
                s = e => {
                  try {
                    a(r.throw(e));
                  } catch (e) {
                    o(e);
                  }
                },
                a = e => (e.done ? n(e.value) : Promise.resolve(e.value).then(i, s));
              a((r = r.apply(e, t)).next());
            });
        function ge(e) {
          return ye(this, null, function* () {
            const t = new me.Config({}),
              n = { config: t, base: s ? window.location.href : process.cwd() };
            s && (t.resolve.http.customFetch = r.g.fetch),
              'object' == typeof e && null !== e
                ? (n.doc = { source: { absoluteRef: '' }, parsed: e })
                : (n.ref = e);
            const {
              bundle: { parsed: o },
            } = yield (0, he.bundle)(n);
            return void 0 !== o.swagger ? be(o) : o;
          });
        }
        function be(e) {
          return (
            console.warn('[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0'),
            new Promise((t, r) =>
              (0, fe.convertObj)(
                e,
                { patch: !0, warnOnly: !0, text: '{}', anchors: !0 },
                (e, n) => {
                  if (e) return r(e);
                  t(n && n.openapi);
                },
              ),
            )
          );
        }
        var xe = require('decko'),
          ve = require('eventemitter3'),
          we = require('json-pointer');
        const ke = we.parse;
        class Oe {
          static baseName(e, t = 1) {
            const r = Oe.parse(e);
            return r[r.length - t];
          }
          static dirName(e, t = 1) {
            const r = Oe.parse(e);
            return we.compile(r.slice(0, r.length - t));
          }
          static relative(e, t) {
            const r = Oe.parse(e);
            return Oe.parse(t).slice(r.length);
          }
          static parse(e) {
            let t = e;
            return '#' === t.charAt(0) && (t = t.substring(1)), ke(t);
          }
          static join(e, t) {
            const r = Oe.parse(e).concat(t);
            return we.compile(r);
          }
          static get(e, t) {
            return we.get(e, t);
          }
          static compile(e) {
            return we.compile(e);
          }
          static escape(e) {
            return we.escape(e);
          }
        }
        (we.parse = Oe.parse), Object.assign(Oe, we);
        var Ee = r(17),
          je = require('url-template'),
          Se = Object.defineProperty,
          $e = Object.defineProperties,
          Pe = Object.getOwnPropertyDescriptors,
          Ce = Object.getOwnPropertySymbols,
          Ae = Object.prototype.hasOwnProperty,
          Ie = Object.prototype.propertyIsEnumerable,
          Te = (e, t, r) =>
            t in e
              ? Se(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          _e = (e, t) => {
            for (var r in t || (t = {})) Ae.call(t, r) && Te(e, r, t[r]);
            if (Ce) for (var r of Ce(t)) Ie.call(t, r) && Te(e, r, t[r]);
            return e;
          },
          Re = (e, t) => $e(e, Pe(t));
        function De(e) {
          return 'string' == typeof e && /\dxx/i.test(e);
        }
        function Le(e) {
          return 'default' === e || y(e) || De(e);
        }
        function ze(e, t = !1) {
          if ('default' === e) return t ? 'error' : 'success';
          let r = 'string' == typeof e ? parseInt(e, 10) : e;
          if ((De(e) && (r *= 100), r < 100 || r > 599)) throw new Error('invalid HTTP code');
          let n = 'success';
          return (
            r >= 300 && r < 400
              ? (n = 'redirect')
              : r >= 400
              ? (n = 'error')
              : r < 200 && (n = 'info'),
            n
          );
        }
        const Ne = {
          get: !0,
          post: !0,
          put: !0,
          head: !0,
          patch: !0,
          delete: !0,
          options: !0,
          $ref: !0,
          subscribe: !0,
          publish: !0,
        };
        function Me(e) {
          return e in Ne;
        }
        function qe(e) {
          return (
            e.summary ||
            e.operationId ||
            (e.description && e.description.substring(0, 50)) ||
            e.pathName ||
            '<no summary>'
          );
        }
        const Fe = {
          multipleOf: 'number',
          maximum: 'number',
          exclusiveMaximum: 'number',
          minimum: 'number',
          exclusiveMinimum: 'number',
          maxLength: 'string',
          minLength: 'string',
          pattern: 'string',
          contentEncoding: 'string',
          contentMediaType: 'string',
          items: 'array',
          maxItems: 'array',
          minItems: 'array',
          uniqueItems: 'array',
          maxProperties: 'object',
          minProperties: 'object',
          required: 'object',
          additionalProperties: 'object',
          unevaluatedProperties: 'object',
          properties: 'object',
          patternProperties: 'object',
        };
        function Be(e) {
          if (void 0 !== e.type && !A(e.type)) return e.type;
          const t = Object.keys(Fe);
          for (const r of t) {
            const t = Fe[r];
            if (void 0 !== e[r]) return t;
          }
          return 'any';
        }
        function Qe(e, t = e.type) {
          if (e['x-circular-ref']) return !0;
          if (void 0 !== e.oneOf || void 0 !== e.anyOf) return !1;
          if ((e.if && e.then) || (e.if && e.else)) return !1;
          let r = !0;
          const n = A(t);
          return (
            ('object' === t || (n && (null == t ? void 0 : t.includes('object')))) &&
              (r =
                void 0 !== e.properties
                  ? 0 === Object.keys(e.properties).length
                  : void 0 === e.additionalProperties &&
                    void 0 === e.unevaluatedProperties &&
                    void 0 === e.patternProperties),
            !A(e.items) &&
              !A(e.prefixItems) &&
              (void 0 !== e.items &&
                !I(e.items) &&
                ('array' === t || (n && (null == t ? void 0 : t.includes('array')))) &&
                (r = Qe(e.items, e.items.type)),
              r)
          );
        }
        function Ue(e) {
          return -1 !== e.search(/json/i);
        }
        function We(e) {
          return 'application/x-www-form-urlencoded' === e;
        }
        function Ve(e, t, r) {
          return A(e)
            ? e.map(e => e.toString()).join(r)
            : 'object' == typeof e
            ? Object.keys(e)
                .map(t => `${t}${r}${e[t]}`)
                .join(r)
            : t + '=' + e.toString();
        }
        function He(e, t) {
          return A(e)
            ? (console.warn('deepObject style cannot be used with array value:' + e.toString()), '')
            : 'object' == typeof e
            ? Object.keys(e)
                .map(r => `${t}[${r}]=${e[r]}`)
                .join('&')
            : (console.warn(
                'deepObject style cannot be used with non-object value:' + e.toString(),
              ),
              '');
        }
        function Je(e, t, r) {
          const n = '__redoc_param_name__',
            o = t ? '*' : '';
          return je
            .parse(`{?${n}${o}}`)
            .expand({ [n]: r })
            .substring(1)
            .replace(/__redoc_param_name__/g, e);
        }
        function Ye(e, t = {}) {
          if (A(e)) throw new Error('Payload must have fields: ' + e.toString());
          return Object.keys(e)
            .map(r => {
              const n = e[r],
                { style: o = 'form', explode: i = !0 } = t[r] || {};
              switch (o) {
                case 'form':
                  return Je(r, i, n);
                case 'spaceDelimited':
                  return Ve(n, r, '%20');
                case 'pipeDelimited':
                  return Ve(n, r, '|');
                case 'deepObject':
                  return He(n, r);
                default:
                  return console.warn('Incorrect or unsupported encoding style: ' + o), '';
              }
            })
            .join('&');
        }
        function Ze(e, t) {
          return Ue(t)
            ? JSON.stringify(e)
            : (console.warn(`Parameter serialization as ${t} is not supported`), '');
        }
        function Ge(e, t) {
          const { name: r, style: n, explode: o = !1, serializationMime: i } = e;
          if (i)
            switch (e.in) {
              case 'path':
              case 'header':
                return Ze(t, i);
              case 'cookie':
              case 'query':
                return `${r}=${Ze(t, i)}`;
              default:
                return console.warn('Unexpected parameter location: ' + e.in), '';
            }
          if (!n) return console.warn(`Missing style attribute or content for parameter ${r}`), '';
          switch (e.in) {
            case 'path':
              return (function (e, t, r, n) {
                const o = r ? '*' : '';
                let i = '';
                'label' === t ? (i = '.') : 'matrix' === t && (i = ';');
                const s = '__redoc_param_name__';
                return je
                  .parse(`{${i}${s}${o}}`)
                  .expand({ [s]: n })
                  .replace(/__redoc_param_name__/g, e);
              })(r, n, o, t);
            case 'query':
              return (function (e, t, r, n) {
                switch (t) {
                  case 'form':
                    return Je(e, r, n);
                  case 'spaceDelimited':
                    return A(n)
                      ? r
                        ? Je(e, r, n)
                        : `${e}=${n.join('%20')}`
                      : (console.warn('The style spaceDelimited is only applicable to arrays'), '');
                  case 'pipeDelimited':
                    return A(n)
                      ? r
                        ? Je(e, r, n)
                        : `${e}=${n.join('|')}`
                      : (console.warn('The style pipeDelimited is only applicable to arrays'), '');
                  case 'deepObject':
                    return !r || A(n) || 'object' != typeof n
                      ? (console.warn(
                          'The style deepObject is only applicable for objects with explode=true',
                        ),
                        '')
                      : He(n, e);
                  default:
                    return console.warn('Unexpected style for query: ' + t), '';
                }
              })(r, n, o, t);
            case 'header':
              return (function (e, t, r) {
                if ('simple' === e) {
                  const e = t ? '*' : '',
                    n = '__redoc_param_name__',
                    o = je.parse(`{${n}${e}}`);
                  return decodeURIComponent(o.expand({ [n]: r }));
                }
                return console.warn('Unexpected style for header: ' + e), '';
              })(n, o, t);
            case 'cookie':
              return (function (e, t, r, n) {
                return 'form' === t
                  ? Je(e, r, n)
                  : (console.warn('Unexpected style for cookie: ' + t), '');
              })(r, n, o, t);
            default:
              return console.warn('Unexpected parameter location: ' + e.in), '';
          }
        }
        function Xe(e, t) {
          return e.in ? decodeURIComponent(Ge(e, t)) : String(t);
        }
        function Ke(e) {
          return -1 !== e.search(/xml/i)
            ? 'xml'
            : -1 !== e.search(/csv/i)
            ? 'csv'
            : -1 !== e.search(/plain/i)
            ? 'tex'
            : 'clike';
        }
        const et = /^#\/components\/(schemas|pathItems)\/([^/]+)$/;
        function tt(e) {
          return et.test(e || '');
        }
        function rt(e) {
          var t;
          const [r] = (null == (t = null == e ? void 0 : e.match(et)) ? void 0 : t.reverse()) || [];
          return r;
        }
        function nt(e, t, r) {
          let n;
          return (
            void 0 !== t && void 0 !== r
              ? (n = t === r ? `= ${t} ${e}` : `[ ${t} .. ${r} ] ${e}`)
              : void 0 !== r
              ? (n = `<= ${r} ${e}`)
              : void 0 !== t && (n = 1 === t ? 'non-empty' : `>= ${t} ${e}`),
            n
          );
        }
        function ot(e) {
          var t, r;
          const n =
              'number' == typeof e.exclusiveMinimum
                ? Math.min(e.exclusiveMinimum, null != (t = e.minimum) ? t : 1 / 0)
                : e.minimum,
            o =
              'number' == typeof e.exclusiveMaximum
                ? Math.max(e.exclusiveMaximum, null != (r = e.maximum) ? r : -1 / 0)
                : e.maximum,
            i = 'number' == typeof e.exclusiveMinimum || e.exclusiveMinimum,
            s = 'number' == typeof e.exclusiveMaximum || e.exclusiveMaximum;
          return void 0 !== n && void 0 !== o
            ? `${i ? '( ' : '[ '}${n} .. ${o}${s ? ' )' : ' ]'}`
            : void 0 !== o
            ? `${s ? '< ' : '<= '}${o}`
            : void 0 !== n
            ? `${i ? '> ' : '>= '}${n}`
            : void 0;
        }
        function it(e) {
          const t = [],
            r = nt('characters', e.minLength, e.maxLength);
          void 0 !== r && t.push(r);
          const n = nt('items', e.minItems, e.maxItems);
          void 0 !== n && t.push(n);
          const o = nt('properties', e.minProperties, e.maxProperties);
          void 0 !== o && t.push(o);
          const i = (function (e) {
            if (void 0 === e) return;
            const t = e.toString(10);
            return /^0\.0*1$/.test(t)
              ? `decimal places <= ${t.split('.')[1].length}`
              : `multiple of ${t}`;
          })(e.multipleOf);
          void 0 !== i && t.push(i);
          const s = ot(e);
          return void 0 !== s && t.push(s), e.uniqueItems && t.push('unique'), t;
        }
        function st(e, t = []) {
          const r = [],
            n = [],
            o = [];
          return (
            e.forEach(e => {
              e.required ? (t.includes(e.name) ? n.push(e) : o.push(e)) : r.push(e);
            }),
            n.sort((e, r) => t.indexOf(e.name) - t.indexOf(r.name)),
            [...n, ...o, ...r]
          );
        }
        function at(e, t) {
          return [...e].sort((e, r) => e[t].localeCompare(r[t]));
        }
        function lt(e, t = [], r = []) {
          const n = {};
          return (
            r.forEach(t => {
              ({ resolved: t } = e.deref(t)), (n[t.name + '_' + t.in] = !0);
            }),
            (t = t.filter(t => (({ resolved: t } = e.deref(t)), !n[t.name + '_' + t.in]))).concat(r)
          );
        }
        function ct(e) {
          const t = {};
          return (
            Object.keys(e).forEach(r => {
              const n = e[r],
                o = r.split(';')[0].trim();
              t[o] ? (t[o] = _e(_e({}, t[o]), n)) : (t[o] = n);
            }),
            t
          );
        }
        function pt(e, t = {}) {
          return e.replace(/(?:{)([\w-.]+)(?:})/g, (e, r) => (t[r] && t[r].default) || e);
        }
        function ut(e, t) {
          const r =
            void 0 === e
              ? S(
                  (() => {
                    if (!s) return '';
                    const e = window.location.href;
                    return e.endsWith('.html') ? (0, Ee.dirname)(e) : e;
                  })(),
                )
              : (0, Ee.dirname)(e);
          return (
            0 === t.length && (t = [{ url: '/' }]),
            t.map(e => {
              return Re(_e({}, e), {
                url: ((t = e.url), O(r, t)),
                description: e.description || '',
              });
              var t;
            })
          );
        }
        const dt = 'SecurityDefinitions',
          ht = 'security-definitions',
          mt = 'SchemaDefinition';
        let ft = 'section/Authentication/';
        function yt(e) {
          ft = e;
        }
        const gt = e => ({ delete: 'del', options: 'opts' }[e] || e);
        function bt(e) {
          return (
            e in
            {
              'x-circular-ref': !0,
              'x-parentRefs': !0,
              'x-refsStack': !0,
              'x-code-samples': !0,
              'x-codeSamples': !0,
              'x-displayName': !0,
              'x-examples': !0,
              'x-ignoredHeaderParameters': !0,
              'x-logo': !0,
              'x-nullable': !0,
              'x-servers': !0,
              'x-tagGroups': !0,
              'x-traitTag': !0,
              'x-additionalPropertiesName': !0,
              'x-explicitMappingOnly': !0,
            }
          );
        }
        function xt(e, t) {
          return Object.keys(e)
            .filter(e =>
              !0 === t ? e.startsWith('x-') && !bt(e) : e.startsWith('x-') && t.indexOf(e) > -1,
            )
            .reduce((t, r) => ((t[r] = e[r]), t), {});
        }
        function vt(e) {
          return e
            .split(' or ')
            .map(e => e.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/, '$1s$2'))
            .join(' or ');
        }
        function wt(e) {
          let t = e.content;
          const r = e['x-examples'],
            n = e['x-example'];
          if (r) {
            t = _e({}, t);
            for (const e of Object.keys(r)) {
              const n = r[e];
              t[e] = Re(_e({}, t[e]), { examples: n });
            }
          } else if (n) {
            t = _e({}, t);
            for (const e of Object.keys(n)) {
              const r = n[e];
              t[e] = Re(_e({}, t[e]), { example: r });
            }
          }
          return t;
        }
        var kt = require('prismjs');
        require('prismjs/components/prism-bash.js'),
          require('prismjs/components/prism-c.js'),
          require('prismjs/components/prism-clike.js'),
          require('prismjs/components/prism-coffeescript.js'),
          require('prismjs/components/prism-cpp.js'),
          require('prismjs/components/prism-csharp.js'),
          require('prismjs/components/prism-go.js'),
          require('prismjs/components/prism-http.js'),
          require('prismjs/components/prism-java.js'),
          require('prismjs/components/prism-lua.js'),
          require('prismjs/components/prism-markup-templating.js'),
          require('prismjs/components/prism-markup.js'),
          require('prismjs/components/prism-objectivec.js'),
          require('prismjs/components/prism-perl.js'),
          require('prismjs/components/prism-php.js'),
          require('prismjs/components/prism-python.js'),
          require('prismjs/components/prism-q.js'),
          require('prismjs/components/prism-ruby.js'),
          require('prismjs/components/prism-scala.js'),
          require('prismjs/components/prism-sql.js'),
          require('prismjs/components/prism-swift.js'),
          require('prismjs/components/prism-yaml.js'),
          require('prismjs/components/prism-csv.js');
        const Ot = 'clike';
        function Et(e) {
          return (
            {
              json: 'js',
              'c++': 'cpp',
              'c#': 'csharp',
              'objective-c': 'objectivec',
              shell: 'bash',
              viml: 'vim',
            }[e] || Ot
          );
        }
        function jt(e, t = Ot) {
          t = t.toLowerCase();
          let r = kt.languages[t];
          return r || (r = kt.languages[Et(t)]), kt.highlight(e.toString(), r, t);
        }
        function St(e) {
          return (t, r, n) => {
            n.value = (function (e, t) {
              let r,
                n,
                o,
                i = null,
                s = 0;
              const a = () => {
                (s = new Date().getTime()), (i = null), (o = e.apply(r, n)), i || (r = n = null);
              };
              return function () {
                const l = new Date().getTime(),
                  c = t - (l - s);
                return (
                  (r = this),
                  (n = arguments),
                  c <= 0 || c > t
                    ? (i && (clearTimeout(i), (i = null)),
                      (s = l),
                      (o = e.apply(r, n)),
                      i || (r = n = null))
                    : i || (i = setTimeout(a, c)),
                  o
                );
              };
            })(n.value, e);
          };
        }
        function $t(e) {}
        function Pt(e) {}
        kt.languages.insertBefore(
          'javascript',
          'string',
          {
            'property string': {
              pattern: /([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
              lookbehind: !0,
            },
          },
          void 0,
        ),
          kt.languages.insertBefore(
            'javascript',
            'punctuation',
            { property: { pattern: /([{,]\s*)[a-z]\w*(?=\s*:)/i, lookbehind: !0 } },
            void 0,
          );
        var Ct = Object.defineProperty,
          At = Object.defineProperties,
          It = Object.getOwnPropertyDescriptors,
          Tt = Object.getOwnPropertySymbols,
          _t = Object.prototype.hasOwnProperty,
          Rt = Object.prototype.propertyIsEnumerable,
          Dt = (e, t, r) =>
            t in e
              ? Ct(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Lt = (e, t) => {
            for (var r in t || (t = {})) _t.call(t, r) && Dt(e, r, t[r]);
            if (Tt) for (var r of Tt(t)) Rt.call(t, r) && Dt(e, r, t[r]);
            return e;
          },
          zt = (e, t) => At(e, It(t));
        const Nt = {};
        function Mt(e, t, r) {
          if ('function' == typeof r.value)
            return (function (e, t, r) {
              if (!r.value || r.value.length > 0)
                throw new Error(
                  '@memoize decorator can only be applied to methods of zero arguments',
                );
              const n = `_memoized_${t}`,
                o = r.value;
              return (
                (e[n] = Nt),
                zt(Lt({}, r), {
                  value() {
                    return this[n] === Nt && (this[n] = o.call(this)), this[n];
                  },
                })
              );
            })(e, t, r);
          if ('function' == typeof r.get)
            return (function (e, t, r) {
              const n = `_memoized_${t}`,
                o = r.get;
              return (
                (e[n] = Nt),
                zt(Lt({}, r), {
                  get() {
                    return this[n] === Nt && (this[n] = o.call(this)), this[n];
                  },
                })
              );
            })(e, t, r);
          throw new Error(
            '@memoize decorator can be applied to methods or getters, got ' +
              String(r.value) +
              ' instead',
          );
        }
        function qt(e) {
          let t = 1;
          return (
            '-' === e[0] && ((t = -1), (e = e.substr(1))),
            (r, n) => (-1 == t ? n[e].localeCompare(r[e]) : r[e].localeCompare(n[e]))
          );
        }
        var Ft = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor;
        const Qt = 'hashchange';
        class Ut {
          constructor() {
            (this.emit = () => {
              this._emiter.emit(Qt, this.currentId);
            }),
              (this._emiter = new ve.EventEmitter()),
              this.bind();
          }
          get currentId() {
            return s ? decodeURIComponent(window.location.hash.substring(1)) : '';
          }
          linkForId(e) {
            return e ? '#' + e : '';
          }
          subscribe(e) {
            const t = this._emiter.addListener(Qt, e);
            return () => t.removeListener(Qt, e);
          }
          bind() {
            s && window.addEventListener('hashchange', this.emit, !1);
          }
          dispose() {
            s && window.removeEventListener('hashchange', this.emit);
          }
          replace(e, t = !1) {
            s &&
              null != e &&
              e !== this.currentId &&
              (t
                ? window.history.replaceState(
                    null,
                    '',
                    window.location.href.split('#')[0] + this.linkForId(e),
                  )
                : (window.history.pushState(
                    null,
                    '',
                    window.location.href.split('#')[0] + this.linkForId(e),
                  ),
                  this.emit()));
          }
        }
        ((e, t, r, n) => {
          for (var o, i = Bt(t, r), s = e.length - 1; s >= 0; s--)
            (o = e[s]) && (i = o(t, r, i) || i);
          i && Ft(t, r, i);
        })([xe.bind, xe.debounce], Ut.prototype, 'replace');
        const Wt = new Ut();
        var Vt = require('mark.js');
        class Ht {
          constructor() {
            (this.map = new Map()), (this.prevTerm = '');
          }
          add(e) {
            this.map.set(e, new Vt(e));
          }
          delete(e) {
            this.map.delete(e);
          }
          addOnly(e) {
            this.map.forEach((t, r) => {
              -1 === e.indexOf(r) && (t.unmark(), this.map.delete(r));
            });
            for (const t of e) this.map.has(t) || this.map.set(t, new Vt(t));
          }
          clearAll() {
            this.unmark(), this.map.clear();
          }
          mark(e) {
            (e || this.prevTerm) &&
              (this.map.forEach(t => {
                t.unmark(), t.mark(e || this.prevTerm);
              }),
              (this.prevTerm = e || this.prevTerm));
          }
          unmark() {
            this.map.forEach(e => e.unmark()), (this.prevTerm = '');
          }
        }
        let Jt = {
          baseUrl: null,
          breaks: !1,
          extensions: null,
          gfm: !0,
          headerIds: !0,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: !0,
          pedantic: !1,
          renderer: null,
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          tokenizer: null,
          walkTokens: null,
          xhtml: !1,
        };
        const Yt = /[&<>"']/,
          Zt = /[&<>"']/g,
          Gt = /[<>"']|&(?!#?\w+;)/,
          Xt = /[<>"']|&(?!#?\w+;)/g,
          Kt = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
          er = e => Kt[e];
        function tr(e, t) {
          if (t) {
            if (Yt.test(e)) return e.replace(Zt, er);
          } else if (Gt.test(e)) return e.replace(Xt, er);
          return e;
        }
        const rr = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
        function nr(e) {
          return e.replace(rr, (e, t) =>
            'colon' === (t = t.toLowerCase())
              ? ':'
              : '#' === t.charAt(0)
              ? 'x' === t.charAt(1)
                ? String.fromCharCode(parseInt(t.substring(2), 16))
                : String.fromCharCode(+t.substring(1))
              : '',
          );
        }
        const or = /(^|[^\[])\^/g;
        function ir(e, t) {
          (e = 'string' == typeof e ? e : e.source), (t = t || '');
          const r = {
            replace: (t, n) => (
              (n = (n = n.source || n).replace(or, '$1')), (e = e.replace(t, n)), r
            ),
            getRegex: () => new RegExp(e, t),
          };
          return r;
        }
        const sr = /[^\w:]/g,
          ar = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function lr(e, t, r) {
          if (e) {
            let e;
            try {
              e = decodeURIComponent(nr(r)).replace(sr, '').toLowerCase();
            } catch (e) {
              return null;
            }
            if (
              0 === e.indexOf('javascript:') ||
              0 === e.indexOf('vbscript:') ||
              0 === e.indexOf('data:')
            )
              return null;
          }
          t &&
            !ar.test(r) &&
            (r = (function (e, t) {
              cr[' ' + e] ||
                (pr.test(e) ? (cr[' ' + e] = e + '/') : (cr[' ' + e] = yr(e, '/', !0)));
              const r = -1 === (e = cr[' ' + e]).indexOf(':');
              return '//' === t.substring(0, 2)
                ? r
                  ? t
                  : e.replace(ur, '$1') + t
                : '/' === t.charAt(0)
                ? r
                  ? t
                  : e.replace(dr, '$1') + t
                : e + t;
            })(t, r));
          try {
            r = encodeURI(r).replace(/%25/g, '%');
          } catch (e) {
            return null;
          }
          return r;
        }
        const cr = {},
          pr = /^[^:]+:\/*[^/]*$/,
          ur = /^([^:]+:)[\s\S]*$/,
          dr = /^([^:]+:\/*[^/]*)[\s\S]*$/,
          hr = { exec: function () {} };
        function mr(e) {
          let t,
            r,
            n = 1;
          for (; n < arguments.length; n++)
            for (r in ((t = arguments[n]), t))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }
        function fr(e, t) {
          const r = e
            .replace(/\|/g, (e, t, r) => {
              let n = !1,
                o = t;
              for (; --o >= 0 && '\\' === r[o]; ) n = !n;
              return n ? '|' : ' |';
            })
            .split(/ \|/);
          let n = 0;
          if (
            (r[0].trim() || r.shift(),
            r.length > 0 && !r[r.length - 1].trim() && r.pop(),
            r.length > t)
          )
            r.splice(t);
          else for (; r.length < t; ) r.push('');
          for (; n < r.length; n++) r[n] = r[n].trim().replace(/\\\|/g, '|');
          return r;
        }
        function yr(e, t, r) {
          const n = e.length;
          if (0 === n) return '';
          let o = 0;
          for (; o < n; ) {
            const i = e.charAt(n - o - 1);
            if (i !== t || r) {
              if (i === t || !r) break;
              o++;
            } else o++;
          }
          return e.slice(0, n - o);
        }
        function gr(e) {
          e &&
            e.sanitize &&
            !e.silent &&
            console.warn(
              'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
            );
        }
        function br(e, t) {
          if (t < 1) return '';
          let r = '';
          for (; t > 1; ) 1 & t && (r += e), (t >>= 1), (e += e);
          return r + e;
        }
        function xr(e, t, r, n) {
          const o = t.href,
            i = t.title ? tr(t.title) : null,
            s = e[1].replace(/\\([\[\]])/g, '$1');
          if ('!' !== e[0].charAt(0)) {
            n.state.inLink = !0;
            const e = {
              type: 'link',
              raw: r,
              href: o,
              title: i,
              text: s,
              tokens: n.inlineTokens(s, []),
            };
            return (n.state.inLink = !1), e;
          }
          return { type: 'image', raw: r, href: o, title: i, text: tr(s) };
        }
        class vr {
          constructor(e) {
            this.options = e || Jt;
          }
          space(e) {
            const t = this.rules.block.newline.exec(e);
            if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
          }
          code(e) {
            const t = this.rules.block.code.exec(e);
            if (t) {
              const e = t[0].replace(/^ {1,4}/gm, '');
              return {
                type: 'code',
                raw: t[0],
                codeBlockStyle: 'indented',
                text: this.options.pedantic ? e : yr(e, '\n'),
              };
            }
          }
          fences(e) {
            const t = this.rules.block.fences.exec(e);
            if (t) {
              const e = t[0],
                r = (function (e, t) {
                  const r = e.match(/^(\s+)(?:```)/);
                  if (null === r) return t;
                  const n = r[1];
                  return t
                    .split('\n')
                    .map(e => {
                      const t = e.match(/^\s+/);
                      if (null === t) return e;
                      const [r] = t;
                      return r.length >= n.length ? e.slice(n.length) : e;
                    })
                    .join('\n');
                })(e, t[3] || '');
              return { type: 'code', raw: e, lang: t[2] ? t[2].trim() : t[2], text: r };
            }
          }
          heading(e) {
            const t = this.rules.block.heading.exec(e);
            if (t) {
              let e = t[2].trim();
              if (/#$/.test(e)) {
                const t = yr(e, '#');
                this.options.pedantic ? (e = t.trim()) : (t && !/ $/.test(t)) || (e = t.trim());
              }
              const r = { type: 'heading', raw: t[0], depth: t[1].length, text: e, tokens: [] };
              return this.lexer.inline(r.text, r.tokens), r;
            }
          }
          hr(e) {
            const t = this.rules.block.hr.exec(e);
            if (t) return { type: 'hr', raw: t[0] };
          }
          blockquote(e) {
            const t = this.rules.block.blockquote.exec(e);
            if (t) {
              const e = t[0].replace(/^ *>[ \t]?/gm, '');
              return {
                type: 'blockquote',
                raw: t[0],
                tokens: this.lexer.blockTokens(e, []),
                text: e,
              };
            }
          }
          list(e) {
            let t = this.rules.block.list.exec(e);
            if (t) {
              let r,
                n,
                o,
                i,
                s,
                a,
                l,
                c,
                p,
                u,
                d,
                h,
                m = t[1].trim();
              const f = m.length > 1,
                y = {
                  type: 'list',
                  raw: '',
                  ordered: f,
                  start: f ? +m.slice(0, -1) : '',
                  loose: !1,
                  items: [],
                };
              (m = f ? `\\d{1,9}\\${m.slice(-1)}` : `\\${m}`),
                this.options.pedantic && (m = f ? m : '[*+-]');
              const g = new RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);
              for (; e && ((h = !1), (t = g.exec(e))) && !this.rules.block.hr.test(e); ) {
                if (
                  ((r = t[0]),
                  (e = e.substring(r.length)),
                  (c = t[2].split('\n', 1)[0]),
                  (p = e.split('\n', 1)[0]),
                  this.options.pedantic
                    ? ((i = 2), (d = c.trimLeft()))
                    : ((i = t[2].search(/[^ ]/)),
                      (i = i > 4 ? 1 : i),
                      (d = c.slice(i)),
                      (i += t[1].length)),
                  (a = !1),
                  !c &&
                    /^ *$/.test(p) &&
                    ((r += p + '\n'), (e = e.substring(p.length + 1)), (h = !0)),
                  !h)
                ) {
                  const t = new RegExp(
                      `^ {0,${Math.min(3, i - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`,
                    ),
                    n = new RegExp(
                      `^ {0,${Math.min(
                        3,
                        i - 1,
                      )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
                    );
                  for (
                    ;
                    e &&
                    ((u = e.split('\n', 1)[0]),
                    (c = u),
                    this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
                    !t.test(c)) &&
                    !n.test(e);

                  ) {
                    if (c.search(/[^ ]/) >= i || !c.trim()) d += '\n' + c.slice(i);
                    else {
                      if (a) break;
                      d += '\n' + c;
                    }
                    a || c.trim() || (a = !0), (r += u + '\n'), (e = e.substring(u.length + 1));
                  }
                }
                y.loose || (l ? (y.loose = !0) : /\n *\n *$/.test(r) && (l = !0)),
                  this.options.gfm &&
                    ((n = /^\[[ xX]\] /.exec(d)),
                    n && ((o = '[ ] ' !== n[0]), (d = d.replace(/^\[[ xX]\] +/, '')))),
                  y.items.push({
                    type: 'list_item',
                    raw: r,
                    task: !!n,
                    checked: o,
                    loose: !1,
                    text: d,
                  }),
                  (y.raw += r);
              }
              (y.items[y.items.length - 1].raw = r.trimRight()),
                (y.items[y.items.length - 1].text = d.trimRight()),
                (y.raw = y.raw.trimRight());
              const b = y.items.length;
              for (s = 0; s < b; s++) {
                (this.lexer.state.top = !1),
                  (y.items[s].tokens = this.lexer.blockTokens(y.items[s].text, []));
                const e = y.items[s].tokens.filter(e => 'space' === e.type),
                  t = e.every(e => {
                    const t = e.raw.split('');
                    let r = 0;
                    for (const e of t) if (('\n' === e && (r += 1), r > 1)) return !0;
                    return !1;
                  });
                !y.loose && e.length && t && ((y.loose = !0), (y.items[s].loose = !0));
              }
              return y;
            }
          }
          html(e) {
            const t = this.rules.block.html.exec(e);
            if (t) {
              const e = {
                type: 'html',
                raw: t[0],
                pre:
                  !this.options.sanitizer &&
                  ('pre' === t[1] || 'script' === t[1] || 'style' === t[1]),
                text: t[0],
              };
              return (
                this.options.sanitize &&
                  ((e.type = 'paragraph'),
                  (e.text = this.options.sanitizer ? this.options.sanitizer(t[0]) : tr(t[0])),
                  (e.tokens = []),
                  this.lexer.inline(e.text, e.tokens)),
                e
              );
            }
          }
          def(e) {
            const t = this.rules.block.def.exec(e);
            if (t)
              return (
                t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                {
                  type: 'def',
                  tag: t[1].toLowerCase().replace(/\s+/g, ' '),
                  raw: t[0],
                  href: t[2],
                  title: t[3],
                }
              );
          }
          table(e) {
            const t = this.rules.block.table.exec(e);
            if (t) {
              const e = {
                type: 'table',
                header: fr(t[1]).map(e => ({ text: e })),
                align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, '').split('\n') : [],
              };
              if (e.header.length === e.align.length) {
                e.raw = t[0];
                let r,
                  n,
                  o,
                  i,
                  s = e.align.length;
                for (r = 0; r < s; r++)
                  /^ *-+: *$/.test(e.align[r])
                    ? (e.align[r] = 'right')
                    : /^ *:-+: *$/.test(e.align[r])
                    ? (e.align[r] = 'center')
                    : /^ *:-+ *$/.test(e.align[r])
                    ? (e.align[r] = 'left')
                    : (e.align[r] = null);
                for (s = e.rows.length, r = 0; r < s; r++)
                  e.rows[r] = fr(e.rows[r], e.header.length).map(e => ({ text: e }));
                for (s = e.header.length, n = 0; n < s; n++)
                  (e.header[n].tokens = []),
                    this.lexer.inlineTokens(e.header[n].text, e.header[n].tokens);
                for (s = e.rows.length, n = 0; n < s; n++)
                  for (i = e.rows[n], o = 0; o < i.length; o++)
                    (i[o].tokens = []), this.lexer.inlineTokens(i[o].text, i[o].tokens);
                return e;
              }
            }
          }
          lheading(e) {
            const t = this.rules.block.lheading.exec(e);
            if (t) {
              const e = {
                type: 'heading',
                raw: t[0],
                depth: '=' === t[2].charAt(0) ? 1 : 2,
                text: t[1],
                tokens: [],
              };
              return this.lexer.inline(e.text, e.tokens), e;
            }
          }
          paragraph(e) {
            const t = this.rules.block.paragraph.exec(e);
            if (t) {
              const e = {
                type: 'paragraph',
                raw: t[0],
                text: '\n' === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1],
                tokens: [],
              };
              return this.lexer.inline(e.text, e.tokens), e;
            }
          }
          text(e) {
            const t = this.rules.block.text.exec(e);
            if (t) {
              const e = { type: 'text', raw: t[0], text: t[0], tokens: [] };
              return this.lexer.inline(e.text, e.tokens), e;
            }
          }
          escape(e) {
            const t = this.rules.inline.escape.exec(e);
            if (t) return { type: 'escape', raw: t[0], text: tr(t[1]) };
          }
          tag(e) {
            const t = this.rules.inline.tag.exec(e);
            if (t)
              return (
                !this.lexer.state.inLink && /^<a /i.test(t[0])
                  ? (this.lexer.state.inLink = !0)
                  : this.lexer.state.inLink &&
                    /^<\/a>/i.test(t[0]) &&
                    (this.lexer.state.inLink = !1),
                !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                  ? (this.lexer.state.inRawBlock = !0)
                  : this.lexer.state.inRawBlock &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                    (this.lexer.state.inRawBlock = !1),
                {
                  type: this.options.sanitize ? 'text' : 'html',
                  raw: t[0],
                  inLink: this.lexer.state.inLink,
                  inRawBlock: this.lexer.state.inRawBlock,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(t[0])
                      : tr(t[0])
                    : t[0],
                }
              );
          }
          link(e) {
            const t = this.rules.inline.link.exec(e);
            if (t) {
              const e = t[2].trim();
              if (!this.options.pedantic && /^</.test(e)) {
                if (!/>$/.test(e)) return;
                const t = yr(e.slice(0, -1), '\\');
                if ((e.length - t.length) % 2 == 0) return;
              } else {
                const e = (function (e, t) {
                  if (-1 === e.indexOf(t[1])) return -1;
                  const r = e.length;
                  let n = 0,
                    o = 0;
                  for (; o < r; o++)
                    if ('\\' === e[o]) o++;
                    else if (e[o] === t[0]) n++;
                    else if (e[o] === t[1] && (n--, n < 0)) return o;
                  return -1;
                })(t[2], '()');
                if (e > -1) {
                  const r = (0 === t[0].indexOf('!') ? 5 : 4) + t[1].length + e;
                  (t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, r).trim()), (t[3] = '');
                }
              }
              let r = t[2],
                n = '';
              if (this.options.pedantic) {
                const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
                e && ((r = e[1]), (n = e[3]));
              } else n = t[3] ? t[3].slice(1, -1) : '';
              return (
                (r = r.trim()),
                /^</.test(r) &&
                  (r = this.options.pedantic && !/>$/.test(e) ? r.slice(1) : r.slice(1, -1)),
                xr(
                  t,
                  {
                    href: r ? r.replace(this.rules.inline._escapes, '$1') : r,
                    title: n ? n.replace(this.rules.inline._escapes, '$1') : n,
                  },
                  t[0],
                  this.lexer,
                )
              );
            }
          }
          reflink(e, t) {
            let r;
            if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
              let e = (r[2] || r[1]).replace(/\s+/g, ' ');
              if (((e = t[e.toLowerCase()]), !e || !e.href)) {
                const e = r[0].charAt(0);
                return { type: 'text', raw: e, text: e };
              }
              return xr(r, e, r[0], this.lexer);
            }
          }
          emStrong(e, t, r = '') {
            let n = this.rules.inline.emStrong.lDelim.exec(e);
            if (!n) return;
            if (n[3] && r.match(/[\p{L}\p{N}]/u)) return;
            const o = n[1] || n[2] || '';
            if (!o || (o && ('' === r || this.rules.inline.punctuation.exec(r)))) {
              const r = n[0].length - 1;
              let o,
                i,
                s = r,
                a = 0;
              const l =
                '*' === n[0][0]
                  ? this.rules.inline.emStrong.rDelimAst
                  : this.rules.inline.emStrong.rDelimUnd;
              for (l.lastIndex = 0, t = t.slice(-1 * e.length + r); null != (n = l.exec(t)); ) {
                if (((o = n[1] || n[2] || n[3] || n[4] || n[5] || n[6]), !o)) continue;
                if (((i = o.length), n[3] || n[4])) {
                  s += i;
                  continue;
                }
                if ((n[5] || n[6]) && r % 3 && !((r + i) % 3)) {
                  a += i;
                  continue;
                }
                if (((s -= i), s > 0)) continue;
                if (((i = Math.min(i, i + s + a)), Math.min(r, i) % 2)) {
                  const t = e.slice(1, r + n.index + i);
                  return {
                    type: 'em',
                    raw: e.slice(0, r + n.index + i + 1),
                    text: t,
                    tokens: this.lexer.inlineTokens(t, []),
                  };
                }
                const t = e.slice(2, r + n.index + i - 1);
                return {
                  type: 'strong',
                  raw: e.slice(0, r + n.index + i + 1),
                  text: t,
                  tokens: this.lexer.inlineTokens(t, []),
                };
              }
            }
          }
          codespan(e) {
            const t = this.rules.inline.code.exec(e);
            if (t) {
              let e = t[2].replace(/\n/g, ' ');
              const r = /[^ ]/.test(e),
                n = /^ /.test(e) && / $/.test(e);
              return (
                r && n && (e = e.substring(1, e.length - 1)),
                (e = tr(e, !0)),
                { type: 'codespan', raw: t[0], text: e }
              );
            }
          }
          br(e) {
            const t = this.rules.inline.br.exec(e);
            if (t) return { type: 'br', raw: t[0] };
          }
          del(e) {
            const t = this.rules.inline.del.exec(e);
            if (t)
              return {
                type: 'del',
                raw: t[0],
                text: t[2],
                tokens: this.lexer.inlineTokens(t[2], []),
              };
          }
          autolink(e, t) {
            const r = this.rules.inline.autolink.exec(e);
            if (r) {
              let e, n;
              return (
                '@' === r[2]
                  ? ((e = tr(this.options.mangle ? t(r[1]) : r[1])), (n = 'mailto:' + e))
                  : ((e = tr(r[1])), (n = e)),
                {
                  type: 'link',
                  raw: r[0],
                  text: e,
                  href: n,
                  tokens: [{ type: 'text', raw: e, text: e }],
                }
              );
            }
          }
          url(e, t) {
            let r;
            if ((r = this.rules.inline.url.exec(e))) {
              let e, n;
              if ('@' === r[2]) (e = tr(this.options.mangle ? t(r[0]) : r[0])), (n = 'mailto:' + e);
              else {
                let t;
                do {
                  (t = r[0]), (r[0] = this.rules.inline._backpedal.exec(r[0])[0]);
                } while (t !== r[0]);
                (e = tr(r[0])), (n = 'www.' === r[1] ? 'http://' + e : e);
              }
              return {
                type: 'link',
                raw: r[0],
                text: e,
                href: n,
                tokens: [{ type: 'text', raw: e, text: e }],
              };
            }
          }
          inlineText(e, t) {
            const r = this.rules.inline.text.exec(e);
            if (r) {
              let e;
              return (
                (e = this.lexer.state.inRawBlock
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : tr(r[0])
                    : r[0]
                  : tr(this.options.smartypants ? t(r[0]) : r[0])),
                { type: 'text', raw: r[0], text: e }
              );
            }
          }
        }
        const wr = {
          newline: /^(?: *(?:\n|$))+/,
          code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
          fences:
            /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
          hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
          html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
          def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
          table: hr,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph:
            /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
          text: /^[^\n]+/,
          _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
          _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
        };
        (wr.def = ir(wr.def).replace('label', wr._label).replace('title', wr._title).getRegex()),
          (wr.bullet = /(?:[*+-]|\d{1,9}[.)])/),
          (wr.listItemStart = ir(/^( *)(bull) */)
            .replace('bull', wr.bullet)
            .getRegex()),
          (wr.list = ir(wr.list)
            .replace(/bull/g, wr.bullet)
            .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
            .replace('def', '\\n+(?=' + wr.def.source + ')')
            .getRegex()),
          (wr._tag =
            'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
          (wr._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
          (wr.html = ir(wr.html, 'i')
            .replace('comment', wr._comment)
            .replace('tag', wr._tag)
            .replace(
              'attribute',
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
            )
            .getRegex()),
          (wr.paragraph = ir(wr._paragraph)
            .replace('hr', wr.hr)
            .replace('heading', ' {0,3}#{1,6} ')
            .replace('|lheading', '')
            .replace('|table', '')
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
            .replace('tag', wr._tag)
            .getRegex()),
          (wr.blockquote = ir(wr.blockquote).replace('paragraph', wr.paragraph).getRegex()),
          (wr.normal = mr({}, wr)),
          (wr.gfm = mr({}, wr.normal, {
            table:
              '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
          })),
          (wr.gfm.table = ir(wr.gfm.table)
            .replace('hr', wr.hr)
            .replace('heading', ' {0,3}#{1,6} ')
            .replace('blockquote', ' {0,3}>')
            .replace('code', ' {4}[^\\n]')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
            .replace('tag', wr._tag)
            .getRegex()),
          (wr.gfm.paragraph = ir(wr._paragraph)
            .replace('hr', wr.hr)
            .replace('heading', ' {0,3}#{1,6} ')
            .replace('|lheading', '')
            .replace('table', wr.gfm.table)
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
            .replace('tag', wr._tag)
            .getRegex()),
          (wr.pedantic = mr({}, wr.normal, {
            html: ir(
              '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
            )
              .replace('comment', wr._comment)
              .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^(#{1,6})(.*)(?:\n+|$)/,
            fences: hr,
            paragraph: ir(wr.normal._paragraph)
              .replace('hr', wr.hr)
              .replace('heading', ' *#{1,6} *[^\n]')
              .replace('lheading', wr.lheading)
              .replace('blockquote', ' {0,3}>')
              .replace('|fences', '')
              .replace('|list', '')
              .replace('|html', '')
              .getRegex(),
          }));
        const kr = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: hr,
          tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(ref)\]/,
          nolink: /^!?\[(ref)\](?:\[\])?/,
          reflinkSearch: 'reflink|nolink(?!\\()',
          emStrong: {
            lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
            rDelimAst:
              /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
            rDelimUnd:
              /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
          },
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: hr,
          text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
          punctuation: /^([\spunctuation])/,
        };
        function Or(e) {
          return e
            .replace(/---/g, '—')
            .replace(/--/g, '–')
            .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
            .replace(/'/g, '’')
            .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
            .replace(/"/g, '”')
            .replace(/\.{3}/g, '…');
        }
        function Er(e) {
          let t,
            r,
            n = '';
          const o = e.length;
          for (t = 0; t < o; t++)
            (r = e.charCodeAt(t)),
              Math.random() > 0.5 && (r = 'x' + r.toString(16)),
              (n += '&#' + r + ';');
          return n;
        }
        (kr._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~'),
          (kr.punctuation = ir(kr.punctuation)
            .replace(/punctuation/g, kr._punctuation)
            .getRegex()),
          (kr.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
          (kr.escapedEmSt = /\\\*|\\_/g),
          (kr._comment = ir(wr._comment).replace('(?:--\x3e|$)', '--\x3e').getRegex()),
          (kr.emStrong.lDelim = ir(kr.emStrong.lDelim)
            .replace(/punct/g, kr._punctuation)
            .getRegex()),
          (kr.emStrong.rDelimAst = ir(kr.emStrong.rDelimAst, 'g')
            .replace(/punct/g, kr._punctuation)
            .getRegex()),
          (kr.emStrong.rDelimUnd = ir(kr.emStrong.rDelimUnd, 'g')
            .replace(/punct/g, kr._punctuation)
            .getRegex()),
          (kr._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (kr._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (kr._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (kr.autolink = ir(kr.autolink)
            .replace('scheme', kr._scheme)
            .replace('email', kr._email)
            .getRegex()),
          (kr._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (kr.tag = ir(kr.tag)
            .replace('comment', kr._comment)
            .replace('attribute', kr._attribute)
            .getRegex()),
          (kr._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (kr._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
          (kr._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (kr.link = ir(kr.link)
            .replace('label', kr._label)
            .replace('href', kr._href)
            .replace('title', kr._title)
            .getRegex()),
          (kr.reflink = ir(kr.reflink)
            .replace('label', kr._label)
            .replace('ref', wr._label)
            .getRegex()),
          (kr.nolink = ir(kr.nolink).replace('ref', wr._label).getRegex()),
          (kr.reflinkSearch = ir(kr.reflinkSearch, 'g')
            .replace('reflink', kr.reflink)
            .replace('nolink', kr.nolink)
            .getRegex()),
          (kr.normal = mr({}, kr)),
          (kr.pedantic = mr({}, kr.normal, {
            strong: {
              start: /^__|\*\*/,
              middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              endAst: /\*\*(?!\*)/g,
              endUnd: /__(?!_)/g,
            },
            em: {
              start: /^_|\*/,
              middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
              endAst: /\*(?!\*)/g,
              endUnd: /_(?!_)/g,
            },
            link: ir(/^!?\[(label)\]\((.*?)\)/)
              .replace('label', kr._label)
              .getRegex(),
            reflink: ir(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace('label', kr._label)
              .getRegex(),
          })),
          (kr.gfm = mr({}, kr.normal, {
            escape: ir(kr.escape).replace('])', '~|])').getRegex(),
            _extended_email:
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
            text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
          })),
          (kr.gfm.url = ir(kr.gfm.url, 'i').replace('email', kr.gfm._extended_email).getRegex()),
          (kr.breaks = mr({}, kr.gfm, {
            br: ir(kr.br).replace('{2,}', '*').getRegex(),
            text: ir(kr.gfm.text)
              .replace('\\b_', '\\b_| {2,}\\n')
              .replace(/\{2,\}/g, '*')
              .getRegex(),
          }));
        class jr {
          constructor(e) {
            (this.tokens = []),
              (this.tokens.links = Object.create(null)),
              (this.options = e || Jt),
              (this.options.tokenizer = this.options.tokenizer || new vr()),
              (this.tokenizer = this.options.tokenizer),
              (this.tokenizer.options = this.options),
              (this.tokenizer.lexer = this),
              (this.inlineQueue = []),
              (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
            const t = { block: wr.normal, inline: kr.normal };
            this.options.pedantic
              ? ((t.block = wr.pedantic), (t.inline = kr.pedantic))
              : this.options.gfm &&
                ((t.block = wr.gfm),
                this.options.breaks ? (t.inline = kr.breaks) : (t.inline = kr.gfm)),
              (this.tokenizer.rules = t);
          }
          static get rules() {
            return { block: wr, inline: kr };
          }
          static lex(e, t) {
            return new jr(t).lex(e);
          }
          static lexInline(e, t) {
            return new jr(t).inlineTokens(e);
          }
          lex(e) {
            let t;
            for (
              e = e.replace(/\r\n|\r/g, '\n'), this.blockTokens(e, this.tokens);
              (t = this.inlineQueue.shift());

            )
              this.inlineTokens(t.src, t.tokens);
            return this.tokens;
          }
          blockTokens(e, t = []) {
            let r, n, o, i;
            for (
              e = this.options.pedantic
                ? e.replace(/\t/g, '    ').replace(/^ +$/gm, '')
                : e.replace(/^( *)(\t+)/gm, (e, t, r) => t + '    '.repeat(r.length));
              e;

            )
              if (
                !(
                  this.options.extensions &&
                  this.options.extensions.block &&
                  this.options.extensions.block.some(
                    n =>
                      !!(r = n.call({ lexer: this }, e, t)) &&
                      ((e = e.substring(r.raw.length)), t.push(r), !0),
                  )
                )
              )
                if ((r = this.tokenizer.space(e)))
                  (e = e.substring(r.raw.length)),
                    1 === r.raw.length && t.length > 0 ? (t[t.length - 1].raw += '\n') : t.push(r);
                else if ((r = this.tokenizer.code(e)))
                  (e = e.substring(r.raw.length)),
                    (n = t[t.length - 1]),
                    !n || ('paragraph' !== n.type && 'text' !== n.type)
                      ? t.push(r)
                      : ((n.raw += '\n' + r.raw),
                        (n.text += '\n' + r.text),
                        (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                else if ((r = this.tokenizer.fences(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.heading(e)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.hr(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.blockquote(e)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.list(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.html(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.def(e)))
                  (e = e.substring(r.raw.length)),
                    (n = t[t.length - 1]),
                    !n || ('paragraph' !== n.type && 'text' !== n.type)
                      ? this.tokens.links[r.tag] ||
                        (this.tokens.links[r.tag] = { href: r.href, title: r.title })
                      : ((n.raw += '\n' + r.raw),
                        (n.text += '\n' + r.raw),
                        (this.inlineQueue[this.inlineQueue.length - 1].src = n.text));
                else if ((r = this.tokenizer.table(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.lheading(e)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else {
                  if (((o = e), this.options.extensions && this.options.extensions.startBlock)) {
                    let t = 1 / 0;
                    const r = e.slice(1);
                    let n;
                    this.options.extensions.startBlock.forEach(function (e) {
                      (n = e.call({ lexer: this }, r)),
                        'number' == typeof n && n >= 0 && (t = Math.min(t, n));
                    }),
                      t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
                  }
                  if (this.state.top && (r = this.tokenizer.paragraph(o)))
                    (n = t[t.length - 1]),
                      i && 'paragraph' === n.type
                        ? ((n.raw += '\n' + r.raw),
                          (n.text += '\n' + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                        : t.push(r),
                      (i = o.length !== e.length),
                      (e = e.substring(r.raw.length));
                  else if ((r = this.tokenizer.text(e)))
                    (e = e.substring(r.raw.length)),
                      (n = t[t.length - 1]),
                      n && 'text' === n.type
                        ? ((n.raw += '\n' + r.raw),
                          (n.text += '\n' + r.text),
                          this.inlineQueue.pop(),
                          (this.inlineQueue[this.inlineQueue.length - 1].src = n.text))
                        : t.push(r);
                  else if (e) {
                    const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
                    if (this.options.silent) {
                      console.error(t);
                      break;
                    }
                    throw new Error(t);
                  }
                }
            return (this.state.top = !0), t;
          }
          inline(e, t) {
            this.inlineQueue.push({ src: e, tokens: t });
          }
          inlineTokens(e, t = []) {
            let r,
              n,
              o,
              i,
              s,
              a,
              l = e;
            if (this.tokens.links) {
              const e = Object.keys(this.tokens.links);
              if (e.length > 0)
                for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(l)); )
                  e.includes(i[0].slice(i[0].lastIndexOf('[') + 1, -1)) &&
                    (l =
                      l.slice(0, i.index) +
                      '[' +
                      br('a', i[0].length - 2) +
                      ']' +
                      l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
            }
            for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(l)); )
              l =
                l.slice(0, i.index) +
                '[' +
                br('a', i[0].length - 2) +
                ']' +
                l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
            for (; null != (i = this.tokenizer.rules.inline.escapedEmSt.exec(l)); )
              l =
                l.slice(0, i.index) +
                '++' +
                l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
            for (; e; )
              if (
                (s || (a = ''),
                (s = !1),
                !(
                  this.options.extensions &&
                  this.options.extensions.inline &&
                  this.options.extensions.inline.some(
                    n =>
                      !!(r = n.call({ lexer: this }, e, t)) &&
                      ((e = e.substring(r.raw.length)), t.push(r), !0),
                  )
                ))
              )
                if ((r = this.tokenizer.escape(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.tag(e)))
                  (e = e.substring(r.raw.length)),
                    (n = t[t.length - 1]),
                    n && 'text' === r.type && 'text' === n.type
                      ? ((n.raw += r.raw), (n.text += r.text))
                      : t.push(r);
                else if ((r = this.tokenizer.link(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.reflink(e, this.tokens.links)))
                  (e = e.substring(r.raw.length)),
                    (n = t[t.length - 1]),
                    n && 'text' === r.type && 'text' === n.type
                      ? ((n.raw += r.raw), (n.text += r.text))
                      : t.push(r);
                else if ((r = this.tokenizer.emStrong(e, l, a)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.codespan(e)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.br(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.del(e))) (e = e.substring(r.raw.length)), t.push(r);
                else if ((r = this.tokenizer.autolink(e, Er)))
                  (e = e.substring(r.raw.length)), t.push(r);
                else if (this.state.inLink || !(r = this.tokenizer.url(e, Er))) {
                  if (((o = e), this.options.extensions && this.options.extensions.startInline)) {
                    let t = 1 / 0;
                    const r = e.slice(1);
                    let n;
                    this.options.extensions.startInline.forEach(function (e) {
                      (n = e.call({ lexer: this }, r)),
                        'number' == typeof n && n >= 0 && (t = Math.min(t, n));
                    }),
                      t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1));
                  }
                  if ((r = this.tokenizer.inlineText(o, Or)))
                    (e = e.substring(r.raw.length)),
                      '_' !== r.raw.slice(-1) && (a = r.raw.slice(-1)),
                      (s = !0),
                      (n = t[t.length - 1]),
                      n && 'text' === n.type ? ((n.raw += r.raw), (n.text += r.text)) : t.push(r);
                  else if (e) {
                    const t = 'Infinite loop on byte: ' + e.charCodeAt(0);
                    if (this.options.silent) {
                      console.error(t);
                      break;
                    }
                    throw new Error(t);
                  }
                } else (e = e.substring(r.raw.length)), t.push(r);
            return t;
          }
        }
        class Sr {
          constructor(e) {
            this.options = e || Jt;
          }
          code(e, t, r) {
            const n = (t || '').match(/\S*/)[0];
            if (this.options.highlight) {
              const t = this.options.highlight(e, n);
              null != t && t !== e && ((r = !0), (e = t));
            }
            return (
              (e = e.replace(/\n$/, '') + '\n'),
              n
                ? '<pre><code class="' +
                  this.options.langPrefix +
                  tr(n, !0) +
                  '">' +
                  (r ? e : tr(e, !0)) +
                  '</code></pre>\n'
                : '<pre><code>' + (r ? e : tr(e, !0)) + '</code></pre>\n'
            );
          }
          blockquote(e) {
            return `<blockquote>\n${e}</blockquote>\n`;
          }
          html(e) {
            return e;
          }
          heading(e, t, r, n) {
            return this.options.headerIds
              ? `<h${t} id="${this.options.headerPrefix + n.slug(r)}">${e}</h${t}>\n`
              : `<h${t}>${e}</h${t}>\n`;
          }
          hr() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }
          list(e, t, r) {
            const n = t ? 'ol' : 'ul';
            return (
              '<' + n + (t && 1 !== r ? ' start="' + r + '"' : '') + '>\n' + e + '</' + n + '>\n'
            );
          }
          listitem(e) {
            return `<li>${e}</li>\n`;
          }
          checkbox(e) {
            return (
              '<input ' +
              (e ? 'checked="" ' : '') +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? ' /' : '') +
              '> '
            );
          }
          paragraph(e) {
            return `<p>${e}</p>\n`;
          }
          table(e, t) {
            return (
              t && (t = `<tbody>${t}</tbody>`),
              '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
            );
          }
          tablerow(e) {
            return `<tr>\n${e}</tr>\n`;
          }
          tablecell(e, t) {
            const r = t.header ? 'th' : 'td';
            return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>\n`;
          }
          strong(e) {
            return `<strong>${e}</strong>`;
          }
          em(e) {
            return `<em>${e}</em>`;
          }
          codespan(e) {
            return `<code>${e}</code>`;
          }
          br() {
            return this.options.xhtml ? '<br/>' : '<br>';
          }
          del(e) {
            return `<del>${e}</del>`;
          }
          link(e, t, r) {
            if (null === (e = lr(this.options.sanitize, this.options.baseUrl, e))) return r;
            let n = '<a href="' + tr(e) + '"';
            return t && (n += ' title="' + t + '"'), (n += '>' + r + '</a>'), n;
          }
          image(e, t, r) {
            if (null === (e = lr(this.options.sanitize, this.options.baseUrl, e))) return r;
            let n = `<img src="${e}" alt="${r}"`;
            return t && (n += ` title="${t}"`), (n += this.options.xhtml ? '/>' : '>'), n;
          }
          text(e) {
            return e;
          }
        }
        class $r {
          strong(e) {
            return e;
          }
          em(e) {
            return e;
          }
          codespan(e) {
            return e;
          }
          del(e) {
            return e;
          }
          html(e) {
            return e;
          }
          text(e) {
            return e;
          }
          link(e, t, r) {
            return '' + r;
          }
          image(e, t, r) {
            return '' + r;
          }
          br() {
            return '';
          }
        }
        class Pr {
          constructor() {
            this.seen = {};
          }
          serialize(e) {
            return e
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, '')
              .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
              .replace(/\s/g, '-');
          }
          getNextSafeSlug(e, t) {
            let r = e,
              n = 0;
            if (this.seen.hasOwnProperty(r)) {
              n = this.seen[e];
              do {
                n++, (r = e + '-' + n);
              } while (this.seen.hasOwnProperty(r));
            }
            return t || ((this.seen[e] = n), (this.seen[r] = 0)), r;
          }
          slug(e, t = {}) {
            const r = this.serialize(e);
            return this.getNextSafeSlug(r, t.dryrun);
          }
        }
        class Cr {
          constructor(e) {
            (this.options = e || Jt),
              (this.options.renderer = this.options.renderer || new Sr()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options),
              (this.textRenderer = new $r()),
              (this.slugger = new Pr());
          }
          static parse(e, t) {
            return new Cr(t).parse(e);
          }
          static parseInline(e, t) {
            return new Cr(t).parseInline(e);
          }
          parse(e, t = !0) {
            let r,
              n,
              o,
              i,
              s,
              a,
              l,
              c,
              p,
              u,
              d,
              h,
              m,
              f,
              y,
              g,
              b,
              x,
              v,
              w = '';
            const k = e.length;
            for (r = 0; r < k; r++)
              if (
                ((u = e[r]),
                this.options.extensions &&
                  this.options.extensions.renderers &&
                  this.options.extensions.renderers[u.type] &&
                  ((v = this.options.extensions.renderers[u.type].call({ parser: this }, u)),
                  !1 !== v ||
                    ![
                      'space',
                      'hr',
                      'heading',
                      'code',
                      'table',
                      'blockquote',
                      'list',
                      'html',
                      'paragraph',
                      'text',
                    ].includes(u.type)))
              )
                w += v || '';
              else
                switch (u.type) {
                  case 'space':
                    continue;
                  case 'hr':
                    w += this.renderer.hr();
                    continue;
                  case 'heading':
                    w += this.renderer.heading(
                      this.parseInline(u.tokens),
                      u.depth,
                      nr(this.parseInline(u.tokens, this.textRenderer)),
                      this.slugger,
                    );
                    continue;
                  case 'code':
                    w += this.renderer.code(u.text, u.lang, u.escaped);
                    continue;
                  case 'table':
                    for (c = '', l = '', i = u.header.length, n = 0; n < i; n++)
                      l += this.renderer.tablecell(this.parseInline(u.header[n].tokens), {
                        header: !0,
                        align: u.align[n],
                      });
                    for (
                      c += this.renderer.tablerow(l), p = '', i = u.rows.length, n = 0;
                      n < i;
                      n++
                    ) {
                      for (a = u.rows[n], l = '', s = a.length, o = 0; o < s; o++)
                        l += this.renderer.tablecell(this.parseInline(a[o].tokens), {
                          header: !1,
                          align: u.align[o],
                        });
                      p += this.renderer.tablerow(l);
                    }
                    w += this.renderer.table(c, p);
                    continue;
                  case 'blockquote':
                    (p = this.parse(u.tokens)), (w += this.renderer.blockquote(p));
                    continue;
                  case 'list':
                    for (
                      d = u.ordered, h = u.start, m = u.loose, i = u.items.length, p = '', n = 0;
                      n < i;
                      n++
                    )
                      (y = u.items[n]),
                        (g = y.checked),
                        (b = y.task),
                        (f = ''),
                        y.task &&
                          ((x = this.renderer.checkbox(g)),
                          m
                            ? y.tokens.length > 0 && 'paragraph' === y.tokens[0].type
                              ? ((y.tokens[0].text = x + ' ' + y.tokens[0].text),
                                y.tokens[0].tokens &&
                                  y.tokens[0].tokens.length > 0 &&
                                  'text' === y.tokens[0].tokens[0].type &&
                                  (y.tokens[0].tokens[0].text =
                                    x + ' ' + y.tokens[0].tokens[0].text))
                              : y.tokens.unshift({ type: 'text', text: x })
                            : (f += x)),
                        (f += this.parse(y.tokens, m)),
                        (p += this.renderer.listitem(f, b, g));
                    w += this.renderer.list(p, d, h);
                    continue;
                  case 'html':
                    w += this.renderer.html(u.text);
                    continue;
                  case 'paragraph':
                    w += this.renderer.paragraph(this.parseInline(u.tokens));
                    continue;
                  case 'text':
                    for (
                      p = u.tokens ? this.parseInline(u.tokens) : u.text;
                      r + 1 < k && 'text' === e[r + 1].type;

                    )
                      (u = e[++r]), (p += '\n' + (u.tokens ? this.parseInline(u.tokens) : u.text));
                    w += t ? this.renderer.paragraph(p) : p;
                    continue;
                  default: {
                    const e = 'Token with "' + u.type + '" type was not found.';
                    if (this.options.silent) return void console.error(e);
                    throw new Error(e);
                  }
                }
            return w;
          }
          parseInline(e, t) {
            t = t || this.renderer;
            let r,
              n,
              o,
              i = '';
            const s = e.length;
            for (r = 0; r < s; r++)
              if (
                ((n = e[r]),
                this.options.extensions &&
                  this.options.extensions.renderers &&
                  this.options.extensions.renderers[n.type] &&
                  ((o = this.options.extensions.renderers[n.type].call({ parser: this }, n)),
                  !1 !== o ||
                    ![
                      'escape',
                      'html',
                      'link',
                      'image',
                      'strong',
                      'em',
                      'codespan',
                      'br',
                      'del',
                      'text',
                    ].includes(n.type)))
              )
                i += o || '';
              else
                switch (n.type) {
                  case 'escape':
                  case 'text':
                    i += t.text(n.text);
                    break;
                  case 'html':
                    i += t.html(n.text);
                    break;
                  case 'link':
                    i += t.link(n.href, n.title, this.parseInline(n.tokens, t));
                    break;
                  case 'image':
                    i += t.image(n.href, n.title, n.text);
                    break;
                  case 'strong':
                    i += t.strong(this.parseInline(n.tokens, t));
                    break;
                  case 'em':
                    i += t.em(this.parseInline(n.tokens, t));
                    break;
                  case 'codespan':
                    i += t.codespan(n.text);
                    break;
                  case 'br':
                    i += t.br();
                    break;
                  case 'del':
                    i += t.del(this.parseInline(n.tokens, t));
                    break;
                  default: {
                    const e = 'Token with "' + n.type + '" type was not found.';
                    if (this.options.silent) return void console.error(e);
                    throw new Error(e);
                  }
                }
            return i;
          }
        }
        function Ar(e, t, r) {
          if (null == e) throw new Error('marked(): input parameter is undefined or null');
          if ('string' != typeof e)
            throw new Error(
              'marked(): input parameter is of type ' +
                Object.prototype.toString.call(e) +
                ', string expected',
            );
          if (
            ('function' == typeof t && ((r = t), (t = null)),
            gr((t = mr({}, Ar.defaults, t || {}))),
            r)
          ) {
            const n = t.highlight;
            let o;
            try {
              o = jr.lex(e, t);
            } catch (e) {
              return r(e);
            }
            const i = function (e) {
              let i;
              if (!e)
                try {
                  t.walkTokens && Ar.walkTokens(o, t.walkTokens), (i = Cr.parse(o, t));
                } catch (t) {
                  e = t;
                }
              return (t.highlight = n), e ? r(e) : r(null, i);
            };
            if (!n || n.length < 3) return i();
            if ((delete t.highlight, !o.length)) return i();
            let s = 0;
            return (
              Ar.walkTokens(o, function (e) {
                'code' === e.type &&
                  (s++,
                  setTimeout(() => {
                    n(e.text, e.lang, function (t, r) {
                      if (t) return i(t);
                      null != r && r !== e.text && ((e.text = r), (e.escaped = !0)),
                        s--,
                        0 === s && i();
                    });
                  }, 0));
              }),
              void (0 === s && i())
            );
          }
          try {
            const r = jr.lex(e, t);
            return t.walkTokens && Ar.walkTokens(r, t.walkTokens), Cr.parse(r, t);
          } catch (e) {
            if (
              ((e.message += '\nPlease report this to https://github.com/markedjs/marked.'),
              t.silent)
            )
              return '<p>An error occurred:</p><pre>' + tr(e.message + '', !0) + '</pre>';
            throw e;
          }
        }
        (Ar.options = Ar.setOptions =
          function (e) {
            var t;
            return mr(Ar.defaults, e), (t = Ar.defaults), (Jt = t), Ar;
          }),
          (Ar.getDefaults = function () {
            return {
              baseUrl: null,
              breaks: !1,
              extensions: null,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: null,
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              tokenizer: null,
              walkTokens: null,
              xhtml: !1,
            };
          }),
          (Ar.defaults = Jt),
          (Ar.use = function (...e) {
            const t = mr({}, ...e),
              r = Ar.defaults.extensions || { renderers: {}, childTokens: {} };
            let n;
            e.forEach(e => {
              if (
                (e.extensions &&
                  ((n = !0),
                  e.extensions.forEach(e => {
                    if (!e.name) throw new Error('extension name required');
                    if (e.renderer) {
                      const t = r.renderers ? r.renderers[e.name] : null;
                      r.renderers[e.name] = t
                        ? function (...r) {
                            let n = e.renderer.apply(this, r);
                            return !1 === n && (n = t.apply(this, r)), n;
                          }
                        : e.renderer;
                    }
                    if (e.tokenizer) {
                      if (!e.level || ('block' !== e.level && 'inline' !== e.level))
                        throw new Error("extension level must be 'block' or 'inline'");
                      r[e.level] ? r[e.level].unshift(e.tokenizer) : (r[e.level] = [e.tokenizer]),
                        e.start &&
                          ('block' === e.level
                            ? r.startBlock
                              ? r.startBlock.push(e.start)
                              : (r.startBlock = [e.start])
                            : 'inline' === e.level &&
                              (r.startInline
                                ? r.startInline.push(e.start)
                                : (r.startInline = [e.start])));
                    }
                    e.childTokens && (r.childTokens[e.name] = e.childTokens);
                  })),
                e.renderer)
              ) {
                const r = Ar.defaults.renderer || new Sr();
                for (const t in e.renderer) {
                  const n = r[t];
                  r[t] = (...o) => {
                    let i = e.renderer[t].apply(r, o);
                    return !1 === i && (i = n.apply(r, o)), i;
                  };
                }
                t.renderer = r;
              }
              if (e.tokenizer) {
                const r = Ar.defaults.tokenizer || new vr();
                for (const t in e.tokenizer) {
                  const n = r[t];
                  r[t] = (...o) => {
                    let i = e.tokenizer[t].apply(r, o);
                    return !1 === i && (i = n.apply(r, o)), i;
                  };
                }
                t.tokenizer = r;
              }
              if (e.walkTokens) {
                const r = Ar.defaults.walkTokens;
                t.walkTokens = function (t) {
                  e.walkTokens.call(this, t), r && r.call(this, t);
                };
              }
              n && (t.extensions = r), Ar.setOptions(t);
            });
          }),
          (Ar.walkTokens = function (e, t) {
            for (const r of e)
              switch ((t.call(Ar, r), r.type)) {
                case 'table':
                  for (const e of r.header) Ar.walkTokens(e.tokens, t);
                  for (const e of r.rows) for (const r of e) Ar.walkTokens(r.tokens, t);
                  break;
                case 'list':
                  Ar.walkTokens(r.items, t);
                  break;
                default:
                  Ar.defaults.extensions &&
                  Ar.defaults.extensions.childTokens &&
                  Ar.defaults.extensions.childTokens[r.type]
                    ? Ar.defaults.extensions.childTokens[r.type].forEach(function (e) {
                        Ar.walkTokens(r[e], t);
                      })
                    : r.tokens && Ar.walkTokens(r.tokens, t);
              }
          }),
          (Ar.parseInline = function (e, t) {
            if (null == e)
              throw new Error('marked.parseInline(): input parameter is undefined or null');
            if ('string' != typeof e)
              throw new Error(
                'marked.parseInline(): input parameter is of type ' +
                  Object.prototype.toString.call(e) +
                  ', string expected',
              );
            gr((t = mr({}, Ar.defaults, t || {})));
            try {
              const r = jr.lexInline(e, t);
              return t.walkTokens && Ar.walkTokens(r, t.walkTokens), Cr.parseInline(r, t);
            } catch (e) {
              if (
                ((e.message += '\nPlease report this to https://github.com/markedjs/marked.'),
                t.silent)
              )
                return '<p>An error occurred:</p><pre>' + tr(e.message + '', !0) + '</pre>';
              throw e;
            }
          }),
          (Ar.Parser = Cr),
          (Ar.parser = Cr.parse),
          (Ar.Renderer = Sr),
          (Ar.TextRenderer = $r),
          (Ar.Lexer = jr),
          (Ar.lexer = jr.lex),
          (Ar.Tokenizer = vr),
          (Ar.Slugger = Pr),
          (Ar.parse = Ar),
          Ar.options,
          Ar.setOptions,
          Ar.use,
          Ar.walkTokens,
          Ar.parseInline,
          Cr.parse,
          jr.lex;
        var Ir = Object.defineProperty,
          Tr = Object.defineProperties,
          _r = Object.getOwnPropertyDescriptors,
          Rr = Object.getOwnPropertySymbols,
          Dr = Object.prototype.hasOwnProperty,
          Lr = Object.prototype.propertyIsEnumerable,
          zr = (e, t, r) =>
            t in e
              ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Nr = (e, t) => {
            for (var r in t || (t = {})) Dr.call(t, r) && zr(e, r, t[r]);
            if (Rr) for (var r of Rr(t)) Lr.call(t, r) && zr(e, r, t[r]);
            return e;
          };
        const Mr = new Ar.Renderer();
        Ar.setOptions({ renderer: Mr, highlight: (e, t) => jt(e, t) });
        const qr = '^ {0,3}\x3c!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?--\x3e\\s*$',
          Fr =
            '(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))',
          Br = '(?:' + qr + '|' + Fr + ')';
        function Qr(e) {
          return `\x3c!-- ReDoc-Inject: <${e}> --\x3e`;
        }
        class Ur {
          constructor(e, t) {
            (this.options = e),
              (this.parentId = t),
              (this.headings = []),
              (this.headingRule = (e, t, r, n) => (
                1 === t
                  ? (this.currentTopHeading = this.saveHeading(e, t))
                  : 2 === t &&
                    this.saveHeading(
                      e,
                      t,
                      this.currentTopHeading && this.currentTopHeading.items,
                      this.currentTopHeading && this.currentTopHeading.id,
                    ),
                this.originalHeadingRule(e, t, r, n)
              )),
              (this.parentId = t),
              (this.parser = new Ar.Parser()),
              (this.headingEnhanceRenderer = new Ar.Renderer()),
              (this.originalHeadingRule = this.headingEnhanceRenderer.heading.bind(
                this.headingEnhanceRenderer,
              )),
              (this.headingEnhanceRenderer.heading = this.headingRule);
          }
          static containsComponent(e, t) {
            return new RegExp(Br.replace(/{component}/g, t), 'gmi').test(e);
          }
          static getTextBeforeHading(e, t) {
            const r = e.search(new RegExp(`^##?\\s+${t}`, 'm'));
            return r > -1 ? e.substring(0, r) : e;
          }
          saveHeading(e, t, r = this.headings, n) {
            e = C(e);
            const o = {
              id: n ? `${n}/${w(e)}` : `${this.parentId || 'section'}/${w(e)}`,
              name: e,
              level: t,
              items: [],
            };
            return r.push(o), o;
          }
          flattenHeadings(e) {
            if (void 0 === e) return [];
            const t = [];
            for (const r of e) t.push(r), t.push(...this.flattenHeadings(r.items));
            return t;
          }
          attachHeadingsDescriptions(e) {
            const t = e =>
                new RegExp(
                  `##?\\s+${e.name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}s*(\n|\r\n|$|s*)`,
                ),
              r = this.flattenHeadings(this.headings);
            if (r.length < 1) return;
            let n = r[0],
              o = t(n),
              i = e.search(o);
            for (let s = 1; s < r.length; s++) {
              const a = r[s],
                l = t(a),
                c = e.substr(i + 1).search(l) + i + 1;
              (n.description = e.substring(i, c).replace(o, '').trim()), (n = a), (o = l), (i = c);
            }
            n.description = e.substring(i).replace(o, '').trim();
          }
          renderMd(e, t = !1) {
            const r = t ? { renderer: this.headingEnhanceRenderer } : void 0;
            return Ar(e.toString(), r);
          }
          extractHeadings(e) {
            this.renderMd(e, !0), this.attachHeadingsDescriptions(e);
            const t = this.headings;
            return (this.headings = []), t;
          }
          renderMdWithComponents(e) {
            const t = this.options && this.options.allowedMdComponents;
            if (!t || 0 === Object.keys(t).length) return [this.renderMd(e)];
            const r = Object.keys(t).join('|'),
              n = new RegExp(Br.replace(/{component}/g, r), 'mig'),
              o = [],
              i = [];
            let s = n.exec(e),
              a = 0;
            for (; s; ) {
              o.push(e.substring(a, s.index)), (a = n.lastIndex);
              const r = t[s[1] || s[2] || s[5]],
                p = s[3] || s[6],
                u = s[4];
              r &&
                i.push({
                  component: r.component,
                  propsSelector: r.propsSelector,
                  props: ((l = Nr(Nr({}, Wr(p)), r.props)), (c = { children: u }), Tr(l, _r(c))),
                }),
                (s = n.exec(e));
            }
            var l, c;
            o.push(e.substring(a));
            const p = [];
            for (let e = 0; e < o.length; e++) {
              const t = o[e];
              t && p.push(this.renderMd(t)), i[e] && p.push(i[e]);
            }
            return p;
          }
        }
        function Wr(e) {
          if (!e) return {};
          const t = /([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim,
            r = {};
          let n;
          for (; null !== (n = t.exec(e)); )
            if (n[3]) r[n[1]] = n[3];
            else if (n[2]) {
              let e;
              try {
                e = JSON.parse(n[2]);
              } catch (e) {}
              r[n[1]] = e;
            }
          return r;
        }
        class Vr {
          constructor(e, t = new W({})) {
            (this.parser = e),
              (this.options = t),
              Object.assign(this, e.spec.info),
              (this.description = e.spec.info.description || ''),
              (this.summary = e.spec.info.summary || '');
            const r = this.description.search(/^\s*##?\s+/m);
            r > -1 && (this.description = this.description.substring(0, r)),
              (this.downloadLink = this.getDownloadLink()),
              (this.downloadFileName = this.getDownloadFileName());
          }
          getDownloadLink() {
            if (this.options.downloadDefinitionUrl) return this.options.downloadDefinitionUrl;
            if (this.parser.specUrl) return this.parser.specUrl;
            if (s && window.Blob && window.URL && window.URL.createObjectURL) {
              const e = new Blob([JSON.stringify(this.parser.spec, null, 2)], {
                type: 'application/json',
              });
              return window.URL.createObjectURL(e);
            }
          }
          getDownloadFileName() {
            return this.parser.specUrl || this.options.downloadDefinitionUrl
              ? this.options.downloadFileName
              : this.options.downloadFileName || 'openapi.json';
          }
        }
        var Hr = Object.defineProperty,
          Jr = Object.defineProperties,
          Yr = Object.getOwnPropertyDescriptors,
          Zr = Object.getOwnPropertySymbols,
          Gr = Object.prototype.hasOwnProperty,
          Xr = Object.prototype.propertyIsEnumerable,
          Kr = (e, t, r) =>
            t in e
              ? Hr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        class en {
          constructor(e, t) {
            const r = (t.spec.components && t.spec.components.securitySchemes) || {};
            this.schemes = Object.keys(e || {})
              .map(n => {
                const { resolved: o } = t.deref(r[n]),
                  i = e[n] || [];
                if (!o)
                  return void console.warn(
                    `Non existing security scheme referenced: ${n}. Skipping`,
                  );
                const s = o['x-displayName'] || n;
                return (
                  (a = ((e, t) => {
                    for (var r in t || (t = {})) Gr.call(t, r) && Kr(e, r, t[r]);
                    if (Zr) for (var r of Zr(t)) Xr.call(t, r) && Kr(e, r, t[r]);
                    return e;
                  })({}, o)),
                  Jr(a, Yr({ id: n, sectionId: n, displayName: s, scopes: i }))
                );
                var a;
              })
              .filter(e => void 0 !== e);
          }
        }
        var tn = Object.defineProperty,
          rn = Object.defineProperties,
          nn = Object.getOwnPropertyDescriptor,
          on = Object.getOwnPropertyDescriptors,
          sn = Object.getOwnPropertySymbols,
          an = Object.prototype.hasOwnProperty,
          ln = Object.prototype.propertyIsEnumerable,
          cn = (e, t, r) =>
            t in e
              ? tn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          pn = (e, t) => {
            for (var r in t || (t = {})) an.call(t, r) && cn(e, r, t[r]);
            if (sn) for (var r of sn(t)) ln.call(t, r) && cn(e, r, t[r]);
            return e;
          },
          un = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? nn(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && tn(t, r, i), i;
          };
        class dn {
          constructor(e, t, r, n, o) {
            (this.expanded = !1),
              (this.operations = []),
              (0, de.makeObservable)(this),
              (this.name = t);
            const { resolved: i } = e.deref(r);
            for (const r of Object.keys(i)) {
              const l = i[r],
                c = Object.keys(l).filter(Me);
              for (const i of c) {
                const c = l[i],
                  p = new go(
                    e,
                    ((s = pn({}, c)),
                    (a = {
                      pathName: r,
                      pointer: Oe.compile([n, t, r, i]),
                      httpVerb: i,
                      pathParameters: l.parameters || [],
                      pathServers: l.servers,
                    }),
                    rn(s, on(a))),
                    void 0,
                    o,
                    !0,
                  );
                this.operations.push(p);
              }
            }
            var s, a;
          }
          toggle() {
            this.expanded = !this.expanded;
          }
        }
        un([de.observable], dn.prototype, 'expanded', 2),
          un([de.action], dn.prototype, 'toggle', 1);
        var hn = Object.defineProperty,
          mn = Object.defineProperties,
          fn = Object.getOwnPropertyDescriptors,
          yn = Object.getOwnPropertySymbols,
          gn = Object.prototype.hasOwnProperty,
          bn = Object.prototype.propertyIsEnumerable,
          xn = (e, t, r) =>
            t in e
              ? hn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          vn = (e, t) => {
            for (var r in t || (t = {})) gn.call(t, r) && xn(e, r, t[r]);
            if (yn) for (var r of yn(t)) bn.call(t, r) && xn(e, r, t[r]);
            return e;
          },
          wn = (e, t) => mn(e, fn(t)),
          kn = (e, t) => {
            var r = {};
            for (var n in e) gn.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && yn)
              for (var n of yn(e)) t.indexOf(n) < 0 && bn.call(e, n) && (r[n] = e[n]);
            return r;
          };
        function On(e, t) {
          return t && e[e.length - 1] !== t ? [...e, t] : e;
        }
        function En(e, t) {
          return t ? e.concat(t) : e;
        }
        class jn {
          constructor(e, t, r = new W({})) {
            (this.options = r),
              (this.allowMergeRefs = !1),
              (this.byRef = e => {
                let t;
                if (this.spec) {
                  '#' !== e.charAt(0) && (e = '#' + e), (e = decodeURIComponent(e));
                  try {
                    t = Oe.get(this.spec, e);
                  } catch (e) {}
                  return t || {};
                }
              }),
              this.validate(e),
              (this.spec = e),
              (this.allowMergeRefs = e.openapi.startsWith('3.1'));
            const n = s ? window.location.href : '';
            'string' == typeof t && (this.specUrl = n ? new URL(t, n).href : t);
          }
          validate(e) {
            if (void 0 === e.openapi)
              throw new Error('Document must be valid OpenAPI 3.0.0 definition');
          }
          isRef(e) {
            return !!e && void 0 !== e.$ref && null !== e.$ref;
          }
          deref(e, t = [], r = !1) {
            const n = null == e ? void 0 : e['x-refsStack'];
            if (((t = En(t, n)), this.isRef(e))) {
              const n = rt(e.$ref);
              if (n && this.options.ignoreNamedSchemas.has(n))
                return { resolved: { type: 'object', title: n }, refsStack: t };
              let o = this.byRef(e.$ref);
              if (!o) throw new Error(`Failed to resolve $ref "${e.$ref}"`);
              let i = t;
              if (t.includes(e.$ref) || t.length > 999)
                o = Object.assign({}, o, { 'x-circular-ref': !0 });
              else if (this.isRef(o)) {
                const e = this.deref(o, t, r);
                (i = e.refsStack), (o = e.resolved);
              }
              return (
                (i = On(t, e.$ref)),
                (o = this.allowMergeRefs ? this.mergeRefs(e, o, r) : o),
                { resolved: o, refsStack: i }
              );
            }
            return { resolved: e, refsStack: En(t, n) };
          }
          mergeRefs(e, t, r) {
            const n = e,
              { $ref: o } = n,
              i = kn(n, ['$ref']),
              s = Object.keys(i);
            if (0 === s.length) return t;
            if (
              r &&
              s.some(
                e =>
                  ![
                    'description',
                    'title',
                    'externalDocs',
                    'x-refsStack',
                    'x-parentRefs',
                    'readOnly',
                    'writeOnly',
                  ].includes(e),
              )
            ) {
              const e = i,
                { description: r, title: n, readOnly: o, writeOnly: s } = e;
              return {
                allOf: [
                  { description: r, title: n, readOnly: o, writeOnly: s },
                  t,
                  kn(e, ['description', 'title', 'readOnly', 'writeOnly']),
                ],
              };
            }
            return vn(vn({}, t), i);
          }
          mergeAllOf(e, t, r) {
            var n;
            if (e['x-circular-ref']) return e;
            if (void 0 === (e = this.hoistOneOfs(e, r)).allOf) return e;
            let o = wn(vn({}, e), { 'x-parentRefs': [], allOf: void 0, title: e.title || rt(t) });
            void 0 !== o.properties &&
              'object' == typeof o.properties &&
              (o.properties = vn({}, o.properties)),
              void 0 !== o.items && 'object' == typeof o.items && (o.items = vn({}, o.items));
            const i = (function (e, t) {
              const r = new Set();
              return e.filter(e => {
                const t = e.$ref;
                return !t || (t && !r.has(t) && r.add(t));
              });
            })(
              e.allOf
                .map(e => {
                  var t;
                  const { resolved: n, refsStack: i } = this.deref(e, r, !0),
                    s = e.$ref || void 0,
                    a = this.mergeAllOf(n, s, i);
                  if (!a['x-circular-ref'] || !a.allOf)
                    return (
                      s &&
                        (null == (t = o['x-parentRefs']) ||
                          t.push(...(a['x-parentRefs'] || []), s)),
                      { $ref: s, refsStack: On(i, s), schema: a }
                    );
                })
                .filter(e => void 0 !== e),
            );
            for (const { schema: e, refsStack: r } of i) {
              const i = e,
                {
                  type: s,
                  enum: a,
                  properties: l,
                  items: c,
                  required: p,
                  title: u,
                  description: d,
                  readOnly: h,
                  writeOnly: m,
                  oneOf: f,
                  anyOf: y,
                  'x-circular-ref': g,
                } = i,
                b = kn(i, [
                  'type',
                  'enum',
                  'properties',
                  'items',
                  'required',
                  'title',
                  'description',
                  'readOnly',
                  'writeOnly',
                  'oneOf',
                  'anyOf',
                  'x-circular-ref',
                ]);
              if (
                (o.type !== s &&
                  void 0 !== o.type &&
                  void 0 !== s &&
                  console.warn(`Incompatible types in allOf at "${t}": "${o.type}" and "${s}"`),
                void 0 !== s &&
                  (Array.isArray(s) && Array.isArray(o.type)
                    ? (o.type = [...s, ...o.type])
                    : (o.type = s)),
                void 0 !== a &&
                  (Array.isArray(a) && Array.isArray(o.enum)
                    ? (o.enum = Array.from(new Set([...a, ...o.enum])))
                    : (o.enum = a)),
                void 0 !== l && 'object' == typeof l)
              ) {
                o.properties = o.properties || {};
                for (const e in l) {
                  const i = En(r, null == (n = l[e]) ? void 0 : n['x-refsStack']);
                  if (o.properties[e]) {
                    if (!g) {
                      const r = this.mergeAllOf(
                        {
                          allOf: [o.properties[e], wn(vn({}, l[e]), { 'x-refsStack': i })],
                          'x-refsStack': i,
                        },
                        t + '/properties/' + e,
                        i,
                      );
                      o.properties[e] = r;
                    }
                  } else o.properties[e] = wn(vn({}, l[e]), { 'x-refsStack': i });
                }
              }
              if (void 0 !== c && !g) {
                const n = 'boolean' == typeof o.items ? {} : Object.assign({}, o.items),
                  i = 'boolean' == typeof e.items ? {} : Object.assign({}, e.items);
                o.items = this.mergeAllOf({ allOf: [n, i] }, t + '/items', r);
              }
              void 0 !== f && (o.oneOf = f),
                void 0 !== y && (o.anyOf = y),
                void 0 !== p && (o.required = [...(o.required || []), ...p]),
                (o = vn(
                  wn(vn({}, o), {
                    title: o.title || u,
                    description: o.description || d,
                    readOnly: void 0 !== o.readOnly ? o.readOnly : h,
                    writeOnly: void 0 !== o.writeOnly ? o.writeOnly : m,
                    'x-circular-ref': o['x-circular-ref'] || g,
                  }),
                  b,
                ));
            }
            return o;
          }
          findDerived(e) {
            const t = {},
              r = (this.spec.components && this.spec.components.schemas) || {};
            for (const n in r) {
              const { resolved: o } = this.deref(r[n]);
              void 0 !== o.allOf &&
                o.allOf.find(t => void 0 !== t.$ref && e.indexOf(t.$ref) > -1) &&
                (t['#/components/schemas/' + n] = [o['x-discriminator-value'] || n]);
            }
            return t;
          }
          hoistOneOfs(e, t) {
            if (void 0 === e.allOf) return e;
            const r = e.allOf;
            for (let e = 0; e < r.length; e++) {
              const n = r[e];
              if (Array.isArray(n.oneOf)) {
                const o = r.slice(0, e),
                  i = r.slice(e + 1);
                return { oneOf: n.oneOf.map(e => ({ allOf: [...o, e, ...i], 'x-refsStack': t })) };
              }
            }
            return e;
          }
        }
        var Sn = Object.defineProperty,
          $n = Object.defineProperties,
          Pn = Object.getOwnPropertyDescriptor,
          Cn = Object.getOwnPropertyDescriptors,
          An = Object.getOwnPropertySymbols,
          In = Object.prototype.hasOwnProperty,
          Tn = Object.prototype.propertyIsEnumerable,
          _n = (e, t, r) =>
            t in e
              ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Rn = (e, t) => {
            for (var r in t || (t = {})) In.call(t, r) && _n(e, r, t[r]);
            if (An) for (var r of An(t)) Tn.call(t, r) && _n(e, r, t[r]);
            return e;
          },
          Dn = (e, t) => $n(e, Cn(t)),
          Ln = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? Pn(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && Sn(t, r, i), i;
          };
        const zn = class {
          constructor(e, t, r, n, o = !1, i = []) {
            (this.options = n),
              (this.refsStack = i),
              (this.typePrefix = ''),
              (this.isCircular = !1),
              (this.activeOneOf = 0),
              (0, de.makeObservable)(this),
              (this.pointer = t.$ref || r || '');
            const { resolved: s, refsStack: a } = e.deref(t, i, !0);
            (this.refsStack = On(a, this.pointer)),
              (this.rawSchema = s),
              (this.schema = e.mergeAllOf(this.rawSchema, this.pointer, this.refsStack)),
              this.init(e, o),
              n.showExtensions && (this.extensions = xt(this.schema, n.showExtensions));
          }
          activateOneOf(e) {
            this.activeOneOf = e;
          }
          hasType(e) {
            return this.type === e || (A(this.type) && this.type.includes(e));
          }
          init(e, t) {
            var r, n, o, i, s, a, l, c;
            const p = this.schema;
            if (
              ((this.isCircular = !!p['x-circular-ref']),
              (this.title = p.title || (tt(this.pointer) && Oe.baseName(this.pointer)) || ''),
              (this.description = p.description || ''),
              (this.type = p.type || Be(p)),
              (this.format = p.format),
              (this.enum = p.enum || []),
              (this.example = p.example),
              (this.examples = p.examples),
              (this.deprecated = !!p.deprecated),
              (this.pattern = p.pattern),
              (this.externalDocs = p.externalDocs),
              (this.constraints = it(p)),
              (this.displayFormat = this.format),
              (this.isPrimitive = Qe(p, this.type)),
              (this.default = p.default),
              (this.readOnly = !!p.readOnly),
              (this.writeOnly = !!p.writeOnly),
              (this.const = p.const || ''),
              (this.contentEncoding = p.contentEncoding),
              (this.contentMediaType = p.contentMediaType),
              (this.minItems = p.minItems),
              (this.maxItems = p.maxItems),
              (p.nullable || p['x-nullable']) &&
                (A(this.type) && !this.type.some(e => null === e || 'null' === e)
                  ? (this.type = [...this.type, 'null'])
                  : A(this.type) ||
                    (null === this.type && 'null' === this.type) ||
                    (this.type = [this.type, 'null'])),
              (this.displayType = A(this.type)
                ? this.type.map(e => (null === e ? 'null' : e)).join(' or ')
                : this.type),
              !this.isCircular)
            )
              if ((p.if && p.then) || (p.if && p.else)) this.initConditionalOperators(p, e);
              else if (t || void 0 === qn(p)) {
                if (
                  (t && A(p.oneOf) && p.oneOf.find(e => e.$ref === this.pointer) && delete p.oneOf,
                  void 0 !== p.oneOf)
                )
                  return (
                    this.initOneOf(p.oneOf, e),
                    (this.oneOfType = 'One of'),
                    void (
                      void 0 !== p.anyOf &&
                      console.warn(
                        `oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`,
                      )
                    )
                  );
                if (void 0 !== p.anyOf)
                  return this.initOneOf(p.anyOf, e), void (this.oneOfType = 'Any of');
                if (this.hasType('object'))
                  this.fields = Mn(e, p, this.pointer, this.options, this.refsStack);
                else if (
                  this.hasType('array') &&
                  (A(p.items) || A(p.prefixItems)
                    ? (this.fields = Mn(e, p, this.pointer, this.options, this.refsStack))
                    : p.items &&
                      (this.items = new zn(
                        e,
                        p.items,
                        this.pointer + '/items',
                        this.options,
                        !1,
                        this.refsStack,
                      )),
                  (this.displayType =
                    p.prefixItems || A(p.items)
                      ? 'items'
                      : vt(
                          (null == (r = this.items) ? void 0 : r.displayType) || this.displayType,
                        )),
                  (this.displayFormat = (null == (n = this.items) ? void 0 : n.format) || ''),
                  (this.typePrefix =
                    (null == (o = this.items) ? void 0 : o.typePrefix) || '' + _('arrayOf')),
                  (this.title = this.title || (null == (i = this.items) ? void 0 : i.title) || ''),
                  (this.isPrimitive =
                    void 0 !== (null == (s = this.items) ? void 0 : s.isPrimitive)
                      ? null == (a = this.items)
                        ? void 0
                        : a.isPrimitive
                      : this.isPrimitive),
                  void 0 === this.example &&
                    void 0 !== (null == (l = this.items) ? void 0 : l.example) &&
                    (this.example = [this.items.example]),
                  (null == (c = this.items) ? void 0 : c.isPrimitive) &&
                    (this.enum = this.items.enum),
                  A(this.type))
                ) {
                  const e = this.type.filter(e => 'array' !== e);
                  e.length && (this.displayType += ` or ${e.join(' or ')}`);
                }
                this.enum.length && this.options.sortEnumValuesAlphabetically && this.enum.sort();
              } else this.initDiscriminator(p, e);
          }
          initOneOf(e, t) {
            if (
              ((this.oneOf = e.map((e, r) => {
                const { resolved: n, refsStack: o } = t.deref(e, this.refsStack, !0),
                  i = t.mergeAllOf(n, this.pointer + '/oneOf/' + r, o),
                  s =
                    tt(e.$ref) && !i.title
                      ? Oe.baseName(e.$ref)
                      : `${i.title || ''}${(void 0 !== i.const && JSON.stringify(i.const)) || ''}`;
                return new zn(
                  t,
                  Dn(Rn({}, i), {
                    title: s,
                    allOf: [Dn(Rn({}, this.schema), { oneOf: void 0, anyOf: void 0 })],
                    discriminator: n.allOf ? void 0 : i.discriminator,
                  }),
                  e.$ref || this.pointer + '/oneOf/' + r,
                  this.options,
                  !1,
                  o,
                );
              })),
              this.options.simpleOneOfTypeLabel)
            ) {
              const e = (function (e) {
                const t = new Set();
                return (
                  (function e(r) {
                    for (const n of r.oneOf || []) n.oneOf ? e(n) : n.type && t.add(n.type);
                  })(e),
                  Array.from(t.values())
                );
              })(this);
              this.displayType = e.join(' or ');
            } else
              this.displayType = this.oneOf
                .map(e => {
                  let t =
                    e.typePrefix + (e.title ? `${e.title} (${e.displayType})` : e.displayType);
                  return t.indexOf(' or ') > -1 && (t = `(${t})`), t;
                })
                .join(' or ');
          }
          initDiscriminator(e, t) {
            const r = qn(e);
            this.discriminatorProp = r.propertyName;
            const n = t.findDerived([...(this.schema['x-parentRefs'] || []), this.pointer]);
            if (e.oneOf)
              for (const t of e.oneOf) {
                if (void 0 === t.$ref) continue;
                const e = Oe.baseName(t.$ref);
                n[t.$ref] = e;
              }
            const o = r.mapping || {};
            let i = r['x-explicitMappingOnly'] || !1;
            0 === Object.keys(o).length && (i = !1);
            const s = {};
            for (const e in o) {
              const t = o[e];
              A(s[t]) ? s[t].push(e) : (s[t] = [e]);
            }
            const a = Rn(i ? {} : Rn({}, n), s);
            let l = [];
            for (const e of Object.keys(a)) {
              const t = a[e];
              if (A(t)) for (const r of t) l.push({ $ref: e, name: r });
              else l.push({ $ref: e, name: t });
            }
            const c = Object.keys(o);
            0 !== c.length &&
              (l = l.sort((e, t) => {
                const r = c.indexOf(e.name),
                  n = c.indexOf(t.name);
                return r < 0 && n < 0
                  ? e.name.localeCompare(t.name)
                  : r < 0
                  ? 1
                  : n < 0
                  ? -1
                  : r - n;
              })),
              (this.oneOf = l.map(({ $ref: e, name: r }) => {
                const n = new zn(t, { $ref: e }, e, this.options, !0, this.refsStack.slice(0, -1));
                return (n.title = r), n;
              }));
          }
          initConditionalOperators(e, t) {
            const r = e,
              { if: n, else: o = {}, then: i = {} } = r,
              s = ((e, t) => {
                var r = {};
                for (var n in e) In.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && An)
                  for (var n of An(e)) t.indexOf(n) < 0 && Tn.call(e, n) && (r[n] = e[n]);
                return r;
              })(r, ['if', 'else', 'then']),
              a = [
                {
                  allOf: [s, i, n],
                  title: (n && n['x-displayName']) || (null == n ? void 0 : n.title) || 'case 1',
                },
                {
                  allOf: [s, o],
                  title: (o && o['x-displayName']) || (null == o ? void 0 : o.title) || 'case 2',
                },
              ];
            (this.oneOf = a.map(
              (e, r) =>
                new zn(
                  t,
                  Rn({}, e),
                  this.pointer + '/oneOf/' + r,
                  this.options,
                  !1,
                  this.refsStack,
                ),
            )),
              (this.oneOfType = 'One of');
          }
        };
        let Nn = zn;
        function Mn(e, t, r, n, o) {
          const i = t.properties || t.prefixItems || t.items || {},
            s = t.patternProperties || {},
            a = t.additionalProperties || t.unevaluatedProperties,
            l = t.prefixItems ? t.items : t.additionalItems,
            c = t.default;
          let p = Object.keys(i || []).map(s => {
            let a = i[s];
            a ||
              (console.warn(
                `Field "${s}" is invalid, skipping.\n Field must be an object but got ${typeof a} at "${r}"`,
              ),
              (a = {}));
            const l = void 0 !== t.required && t.required.indexOf(s) > -1;
            return new Hn(
              e,
              {
                name: t.properties ? s : `[${s}]`,
                required: l,
                schema: Dn(Rn({}, a), { default: void 0 === a.default && c ? c[s] : a.default }),
              },
              r + '/properties/' + s,
              n,
              o,
            );
          });
          return (
            n.sortPropsAlphabetically && (p = at(p, 'name')),
            n.requiredPropsFirst && (p = st(p, n.sortPropsAlphabetically ? void 0 : t.required)),
            p.push(
              ...Object.keys(s).map(t => {
                let i = s[t];
                return (
                  i ||
                    (console.warn(
                      `Field "${t}" is invalid, skipping.\n Field must be an object but got ${typeof i} at "${r}"`,
                    ),
                    (i = {})),
                  new Hn(
                    e,
                    { name: t, required: !1, schema: i, kind: 'patternProperties' },
                    `${r}/patternProperties/${t}`,
                    n,
                    o,
                  )
                );
              }),
            ),
            ('object' != typeof a && !0 !== a) ||
              p.push(
                new Hn(
                  e,
                  {
                    name: (
                      ('object' == typeof a && a['x-additionalPropertiesName']) ||
                      'property name'
                    ).concat('*'),
                    required: !1,
                    schema: !0 === a ? {} : a,
                    kind: 'additionalProperties',
                  },
                  r + '/additionalProperties',
                  n,
                  o,
                ),
              ),
            p.push(
              ...(function ({
                parser: e,
                schema: t = !1,
                fieldsCount: r,
                $ref: n,
                options: o,
                refsStack: i,
              }) {
                return I(t)
                  ? t
                    ? [new Hn(e, { name: `[${r}...]`, schema: {} }, `${n}/additionalItems`, o, i)]
                    : []
                  : A(t)
                  ? [
                      ...t.map(
                        (t, s) =>
                          new Hn(
                            e,
                            { name: `[${r + s}]`, schema: t },
                            `${n}/additionalItems`,
                            o,
                            i,
                          ),
                      ),
                    ]
                  : x(t)
                  ? [new Hn(e, { name: `[${r}...]`, schema: t }, `${n}/additionalItems`, o, i)]
                  : [];
              })({
                parser: e,
                schema: l,
                fieldsCount: p.length,
                $ref: r,
                options: n,
                refsStack: o,
              }),
            ),
            p
          );
        }
        function qn(e) {
          return e.discriminator || e['x-discriminator'];
        }
        Ln([de.observable], Nn.prototype, 'activeOneOf', 2),
          Ln([de.action], Nn.prototype, 'activateOneOf', 1);
        const Fn = {};
        class Bn {
          constructor(e, t, r, n) {
            this.mime = r;
            const { resolved: o } = e.deref(t);
            (this.value = o.value),
              (this.summary = o.summary),
              (this.description = o.description),
              o.externalValue && (this.externalValueUrl = new URL(o.externalValue, e.specUrl).href),
              We(r) &&
                this.value &&
                'object' == typeof this.value &&
                (this.value = Ye(this.value, n));
          }
          getExternalValue(e) {
            return this.externalValueUrl
              ? (this.externalValueUrl in Fn ||
                  (Fn[this.externalValueUrl] = fetch(this.externalValueUrl).then(t =>
                    t.text().then(r => {
                      if (!t.ok) return Promise.reject(new Error(r));
                      if (!Ue(e)) return r;
                      try {
                        return JSON.parse(r);
                      } catch (e) {
                        return r;
                      }
                    }),
                  )),
                Fn[this.externalValueUrl])
              : Promise.resolve(void 0);
          }
        }
        var Qn = Object.defineProperty,
          Un = Object.getOwnPropertyDescriptor,
          Wn = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? Un(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && Qn(t, r, i), i;
          };
        const Vn = {
          path: { style: 'simple', explode: !1 },
          query: { style: 'form', explode: !0 },
          header: { style: 'simple', explode: !1 },
          cookie: { style: 'form', explode: !0 },
        };
        class Hn {
          constructor(e, t, r, n, o) {
            var i, s, a, l, c;
            (this.expanded = void 0), (0, de.makeObservable)(this);
            const { resolved: p } = e.deref(t);
            (this.kind = t.kind || 'field'),
              (this.name = t.name || p.name),
              (this.in = p.in),
              (this.required = !!p.required);
            let u = p.schema,
              d = '';
            if (
              (!u &&
                p.in &&
                p.content &&
                ((d = Object.keys(p.content)[0]), (u = p.content[d] && p.content[d].schema)),
              (this.schema = new Nn(e, u || {}, r, n, !1, o)),
              (this.description =
                void 0 === p.description ? this.schema.description || '' : p.description),
              (this.example = p.example || this.schema.example),
              void 0 !== p.examples || void 0 !== this.schema.examples)
            ) {
              const t = p.examples || this.schema.examples;
              this.examples = A(t) ? t : h(t, (t, r) => new Bn(e, t, r, p.encoding));
            }
            d
              ? (this.serializationMime = d)
              : p.style
              ? (this.style = p.style)
              : this.in &&
                (this.style =
                  null != (s = null == (i = Vn[this.in]) ? void 0 : i.style) ? s : 'form'),
              void 0 === p.explode && this.in
                ? (this.explode = null == (l = null == (a = Vn[this.in]) ? void 0 : a.explode) || l)
                : (this.explode = !!p.explode),
              (this.deprecated = void 0 === p.deprecated ? !!this.schema.deprecated : p.deprecated),
              n.showExtensions && (this.extensions = xt(p, n.showExtensions)),
              (this.const =
                (null == (c = this.schema) ? void 0 : c.const) ||
                (null == p ? void 0 : p.const) ||
                '');
          }
          toggle() {
            this.expanded = !this.expanded;
          }
          collapse() {
            this.expanded = !1;
          }
          expand() {
            this.expanded = !0;
          }
        }
        Wn([de.observable], Hn.prototype, 'expanded', 2),
          Wn([de.action], Hn.prototype, 'toggle', 1),
          Wn([de.action], Hn.prototype, 'collapse', 1),
          Wn([de.action], Hn.prototype, 'expand', 1);
        var Jn = require('openapi-sampler');
        class Yn {
          constructor(e, t, r, n, o) {
            (this.name = t),
              (this.isRequestType = r),
              (this.schema = n.schema && new Nn(e, n.schema, '', o)),
              (this.onlyRequiredInSamples = o.onlyRequiredInSamples),
              (this.generatedPayloadSamplesMaxDepth = o.generatedPayloadSamplesMaxDepth),
              void 0 !== n.examples
                ? (this.examples = h(n.examples, r => new Bn(e, r, t, n.encoding)))
                : void 0 !== n.example
                ? (this.examples = {
                    default: new Bn(e, { value: e.deref(n.example).resolved }, t, n.encoding),
                  })
                : Ue(t) && this.generateExample(e, n);
          }
          generateExample(e, t) {
            const r = {
              skipReadOnly: this.isRequestType,
              skipWriteOnly: !this.isRequestType,
              skipNonRequired: this.isRequestType && this.onlyRequiredInSamples,
              maxSampleDepth: this.generatedPayloadSamplesMaxDepth,
            };
            if (this.schema && this.schema.oneOf) {
              this.examples = {};
              for (const n of this.schema.oneOf) {
                const o = Jn.sample(n.rawSchema, r, e.spec);
                this.schema.discriminatorProp &&
                  'object' == typeof o &&
                  o &&
                  (o[this.schema.discriminatorProp] = n.title),
                  (this.examples[n.title] = new Bn(e, { value: o }, this.name, t.encoding));
              }
            } else
              this.schema &&
                (this.examples = {
                  default: new Bn(
                    e,
                    { value: Jn.sample(t.schema, r, e.spec) },
                    this.name,
                    t.encoding,
                  ),
                });
          }
        }
        var Zn = Object.defineProperty,
          Gn = Object.getOwnPropertyDescriptor,
          Xn = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? Gn(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && Zn(t, r, i), i;
          };
        class Kn {
          constructor(e, t, r, n) {
            (this.isRequestType = r),
              (this.activeMimeIdx = 0),
              (0, de.makeObservable)(this),
              n.unstable_ignoreMimeParameters && (t = ct(t)),
              (this.mediaTypes = Object.keys(t).map(o => {
                const i = t[o];
                return new Yn(e, o, r, i, n);
              }));
          }
          activate(e) {
            this.activeMimeIdx = e;
          }
          get active() {
            return this.mediaTypes[this.activeMimeIdx];
          }
          get hasSample() {
            return this.mediaTypes.filter(e => !!e.examples).length > 0;
          }
        }
        Xn([de.observable], Kn.prototype, 'activeMimeIdx', 2),
          Xn([de.action], Kn.prototype, 'activate', 1),
          Xn([de.computed], Kn.prototype, 'active', 1);
        class eo {
          constructor({ parser: e, infoOrRef: t, options: r, isEvent: n }) {
            const o = !n,
              { resolved: i } = e.deref(t);
            (this.description = i.description || ''), (this.required = i.required);
            const s = wt(i);
            void 0 !== s && (this.content = new Kn(e, s, o, r));
          }
        }
        var to = Object.defineProperty,
          ro = Object.defineProperties,
          no = Object.getOwnPropertyDescriptor,
          oo = Object.getOwnPropertyDescriptors,
          io = Object.getOwnPropertySymbols,
          so = Object.prototype.hasOwnProperty,
          ao = Object.prototype.propertyIsEnumerable,
          lo = (e, t, r) =>
            t in e
              ? to(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          co = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? no(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && to(t, r, i), i;
          };
        class po {
          constructor({
            parser: e,
            code: t,
            defaultAsError: r,
            infoOrRef: n,
            options: o,
            isEvent: i,
          }) {
            (this.expanded = !1),
              (this.headers = []),
              (0, de.makeObservable)(this),
              (this.expanded = 'all' === o.expandResponses || o.expandResponses[t]);
            const { resolved: s } = e.deref(n);
            (this.code = t),
              void 0 !== s.content && (this.content = new Kn(e, s.content, i, o)),
              void 0 !== s['x-summary']
                ? ((this.summary = s['x-summary']), (this.description = s.description || ''))
                : ((this.summary = s.description || ''), (this.description = '')),
              (this.type = ze(t, r));
            const a = s.headers;
            void 0 !== a &&
              (this.headers = Object.keys(a).map(t => {
                const r = a[t];
                return new Hn(
                  e,
                  ((n = ((e, t) => {
                    for (var r in t || (t = {})) so.call(t, r) && lo(e, r, t[r]);
                    if (io) for (var r of io(t)) ao.call(t, r) && lo(e, r, t[r]);
                    return e;
                  })({}, r)),
                  ro(n, oo({ name: t }))),
                  '',
                  o,
                );
                var n;
              })),
              o.showExtensions && (this.extensions = xt(s, o.showExtensions));
          }
          toggle() {
            this.expanded = !this.expanded;
          }
        }
        co([de.observable], po.prototype, 'expanded', 2),
          co([de.action], po.prototype, 'toggle', 1);
        var uo = Object.defineProperty,
          ho = Object.getOwnPropertyDescriptor,
          mo = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? ho(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && uo(t, r, i), i;
          };
        function fo(e) {
          return 'payload' === e.lang && e.requestBodyContent;
        }
        let yo = !1;
        class go {
          constructor(e, t, r, n, o = !1) {
            (this.parser = e),
              (this.operationSpec = t),
              (this.options = n),
              (this.type = 'operation'),
              (this.items = []),
              (this.ready = !0),
              (this.active = !1),
              (this.expanded = !1),
              (0, de.makeObservable)(this),
              (this.pointer = t.pointer),
              (this.description = t.description),
              (this.parent = r),
              (this.externalDocs = t.externalDocs),
              (this.deprecated = !!t.deprecated),
              (this.httpVerb = t.httpVerb),
              (this.deprecated = !!t.deprecated),
              (this.operationId = t.operationId),
              (this.path = t.pathName),
              (this.isCallback = o),
              (this.isWebhook = t.isWebhook),
              (this.isEvent = this.isCallback || this.isWebhook),
              (this.name = qe(t)),
              (this.sidebarLabel =
                n.sideNavStyle === R.IdOnly
                  ? this.operationId || this.path
                  : n.sideNavStyle === R.PathOnly
                  ? this.path
                  : this.name),
              this.isCallback
                ? ((this.security = (t.security || []).map(t => new en(t, e))),
                  (this.servers = ut('', t.servers || t.pathServers || [])))
                : ((this.operationHash = t.operationId && 'operation/' + t.operationId),
                  (this.id =
                    void 0 !== t.operationId
                      ? (r ? r.id + '/' : '') + this.operationHash
                      : void 0 !== r
                      ? r.id + this.pointer
                      : this.pointer),
                  (this.security = (t.security || e.spec.security || []).map(t => new en(t, e))),
                  (this.servers = ut(
                    e.specUrl,
                    t.servers || t.pathServers || e.spec.servers || [],
                  ))),
              n.showExtensions && (this.extensions = xt(t, n.showExtensions));
          }
          activate() {
            this.active = !0;
          }
          deactivate() {
            this.active = !1;
          }
          toggle() {
            this.expanded = !this.expanded;
          }
          expand() {
            this.parent && this.parent.expand();
          }
          collapse() {}
          get requestBody() {
            return (
              this.operationSpec.requestBody &&
              new eo({
                parser: this.parser,
                infoOrRef: this.operationSpec.requestBody,
                options: this.options,
                isEvent: this.isEvent,
              })
            );
          }
          get codeSamples() {
            let e =
              this.operationSpec['x-codeSamples'] || this.operationSpec['x-code-samples'] || [];
            this.operationSpec['x-code-samples'] &&
              !yo &&
              ((yo = !0),
              console.warn('"x-code-samples" is deprecated. Use "x-codeSamples" instead'));
            const t = this.requestBody && this.requestBody.content;
            if (t && t.hasSample) {
              const r = Math.min(e.length, this.options.payloadSampleIdx);
              e = [
                ...e.slice(0, r),
                { lang: 'payload', label: 'Payload', source: '', requestBodyContent: t },
                ...e.slice(r),
              ];
            }
            return e;
          }
          get parameters() {
            const e = lt(
              this.parser,
              this.operationSpec.pathParameters,
              this.operationSpec.parameters,
            ).map(e => new Hn(this.parser, e, this.pointer, this.options));
            return this.options.sortPropsAlphabetically
              ? at(e, 'name')
              : this.options.requiredPropsFirst
              ? st(e)
              : e;
          }
          get responses() {
            let e = !1;
            return Object.keys(this.operationSpec.responses || [])
              .filter(t => 'default' === t || ('success' === ze(t) && (e = !0), Le(t)))
              .map(
                t =>
                  new po({
                    parser: this.parser,
                    code: t,
                    defaultAsError: e,
                    infoOrRef: this.operationSpec.responses[t],
                    options: this.options,
                    isEvent: this.isEvent,
                  }),
              );
          }
          get callbacks() {
            return Object.keys(this.operationSpec.callbacks || []).map(
              e =>
                new dn(this.parser, e, this.operationSpec.callbacks[e], this.pointer, this.options),
            );
          }
        }
        mo([de.observable], go.prototype, 'ready', 2),
          mo([de.observable], go.prototype, 'active', 2),
          mo([de.observable], go.prototype, 'expanded', 2),
          mo([de.action], go.prototype, 'activate', 1),
          mo([de.action], go.prototype, 'deactivate', 1),
          mo([de.action], go.prototype, 'toggle', 1),
          mo([Mt], go.prototype, 'requestBody', 1),
          mo([Mt], go.prototype, 'codeSamples', 1),
          mo([Mt], go.prototype, 'parameters', 1),
          mo([Mt], go.prototype, 'responses', 1),
          mo([Mt], go.prototype, 'callbacks', 1);
        var bo = Object.defineProperty,
          xo = Object.defineProperties,
          vo = Object.getOwnPropertyDescriptors,
          wo = Object.getOwnPropertySymbols,
          ko = Object.prototype.hasOwnProperty,
          Oo = Object.prototype.propertyIsEnumerable,
          Eo = (e, t, r) =>
            t in e
              ? bo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          jo = (e, t) => {
            for (var r in t || (t = {})) ko.call(t, r) && Eo(e, r, t[r]);
            if (wo) for (var r of wo(t)) Oo.call(t, r) && Eo(e, r, t[r]);
            return e;
          };
        class So {
          constructor(e, t, r) {
            this.operations = [];
            const { resolved: n } = e.deref(r || {});
            this.initWebhooks(e, n, t);
          }
          initWebhooks(e, t, r) {
            for (const o of Object.keys(t)) {
              const i = t[o],
                s = Object.keys(i).filter(Me);
              for (const t of s) {
                const o = i[t];
                if (i.$ref) {
                  const n = e.deref(i || {});
                  this.initWebhooks(e, { [t]: n }, r);
                }
                if (!o) continue;
                const s = new go(e, ((n = jo({}, o)), xo(n, vo({ httpVerb: t }))), void 0, r, !1);
                this.operations.push(s);
              }
            }
            var n;
          }
        }
        class $o {
          constructor(e, t, r) {
            const { resolved: n } = e.deref(r);
            (this.id = t),
              (this.sectionId = ft + t),
              (this.type = n.type),
              (this.displayName = n['x-displayName'] || t),
              (this.description = n.description || ''),
              'apiKey' === n.type && (this.apiKey = { name: n.name, in: n.in }),
              'http' === n.type && (this.http = { scheme: n.scheme, bearerFormat: n.bearerFormat }),
              'openIdConnect' === n.type && (this.openId = { connectUrl: n.openIdConnectUrl }),
              'oauth2' === n.type && n.flows && (this.flows = n.flows);
          }
        }
        class Po {
          constructor(e) {
            const t = (e.spec.components && e.spec.components.securitySchemes) || {};
            this.schemes = Object.keys(t).map(r => new $o(e, r, t[r]));
          }
        }
        var Co = Object.defineProperty,
          Ao = Object.getOwnPropertySymbols,
          Io = Object.prototype.hasOwnProperty,
          To = Object.prototype.propertyIsEnumerable,
          _o = (e, t, r) =>
            t in e
              ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Ro = (e, t) => {
            for (var r in t || (t = {})) Io.call(t, r) && _o(e, r, t[r]);
            if (Ao) for (var r of Ao(t)) To.call(t, r) && _o(e, r, t[r]);
            return e;
          };
        class Do {
          constructor(e, t, r) {
            var n, o, i;
            (this.options = r),
              (this.parser = new jn(e, t, r)),
              (this.info = new Vr(this.parser, this.options)),
              (this.externalDocs = this.parser.spec.externalDocs),
              (this.contentItems = Zo.buildStructure(this.parser, this.options)),
              (this.securitySchemes = new Po(this.parser));
            const s = Ro(
              Ro(
                {},
                null == (o = null == (n = this.parser) ? void 0 : n.spec)
                  ? void 0
                  : o['x-webhooks'],
              ),
              null == (i = this.parser) ? void 0 : i.spec.webhooks,
            );
            this.webhooks = new So(this.parser, r, s);
          }
        }
        var Lo = Object.defineProperty,
          zo = Object.getOwnPropertyDescriptor,
          No = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? zo(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && Lo(t, r, i), i;
          };
        class Mo {
          constructor(e, t, r) {
            (this.items = []),
              (this.active = !1),
              (this.expanded = !1),
              (0, de.makeObservable)(this),
              (this.id = t.id || e + '/' + w(t.name)),
              (this.type = e),
              (this.name = t['x-displayName'] || t.name),
              (this.level = t.level || 1),
              (this.sidebarLabel = this.name),
              (this.description = t.description || '');
            const n = t.items;
            n &&
              n.length &&
              (this.description = Ur.getTextBeforeHading(this.description, n[0].name)),
              (this.parent = r),
              (this.externalDocs = t.externalDocs),
              'group' === this.type && (this.expanded = !0);
          }
          activate() {
            this.active = !0;
          }
          expand() {
            this.parent && this.parent.expand(), (this.expanded = !0);
          }
          collapse() {
            'group' !== this.type && (this.expanded = !1);
          }
          deactivate() {
            this.active = !1;
          }
        }
        No([de.observable], Mo.prototype, 'active', 2),
          No([de.observable], Mo.prototype, 'expanded', 2),
          No([de.action], Mo.prototype, 'activate', 1),
          No([de.action], Mo.prototype, 'expand', 1),
          No([de.action], Mo.prototype, 'collapse', 1),
          No([de.action], Mo.prototype, 'deactivate', 1);
        var qo = Object.defineProperty,
          Fo = Object.defineProperties,
          Bo = Object.getOwnPropertyDescriptors,
          Qo = Object.getOwnPropertySymbols,
          Uo = Object.prototype.hasOwnProperty,
          Wo = Object.prototype.propertyIsEnumerable,
          Vo = (e, t, r) =>
            t in e
              ? qo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Ho = (e, t) => {
            for (var r in t || (t = {})) Uo.call(t, r) && Vo(e, r, t[r]);
            if (Qo) for (var r of Qo(t)) Wo.call(t, r) && Vo(e, r, t[r]);
            return e;
          },
          Jo = (e, t) => Fo(e, Bo(t));
        const Yo = 0;
        class Zo {
          static buildStructure(e, t) {
            const r = e.spec,
              n = [],
              o = Zo.getTagsWithOperations(e, r);
            return (
              n.push(...Zo.addMarkdownItems(r.info.description || '', void 0, 1, t)),
              r['x-tagGroups'] && r['x-tagGroups'].length > 0
                ? n.push(...Zo.getTagGroupsItems(e, void 0, r['x-tagGroups'], o, t))
                : n.push(...Zo.getTagsItems(e, o, void 0, void 0, t)),
              n
            );
          }
          static addMarkdownItems(e, t, r, n) {
            const o = new Ur(n, null == t ? void 0 : t.id).extractHeadings(e || '');
            o.length &&
              t &&
              t.description &&
              (t.description = Ur.getTextBeforeHading(t.description, o[0].name));
            const i = (e, t, r = 1) =>
              t.map(t => {
                const n = new Mo('section', t, e);
                return (n.depth = r), t.items && (n.items = i(n, t.items, r + 1)), n;
              });
            return i(t, o, r);
          }
          static getTagGroupsItems(e, t, r, n, o) {
            const i = [];
            for (const s of r) {
              const r = new Mo('group', s, t);
              (r.depth = Yo), (r.items = Zo.getTagsItems(e, n, r, s, o)), i.push(r);
            }
            return i;
          }
          static getTagsItems(e, t, r, n, o) {
            let i;
            i = void 0 === n ? Object.keys(t) : n.tags;
            const s = i.map(e =>
                t[e]
                  ? ((t[e].used = !0), t[e])
                  : (console.warn(`Non-existing tag "${e}" is added to the group "${n.name}"`),
                    null),
              ),
              a = [];
            for (const t of s) {
              if (!t) continue;
              const n = new Mo('tag', t, r);
              if (((n.depth = Yo + 1), '' === t.name)) {
                const r = [
                  ...Zo.addMarkdownItems(t.description || '', n, n.depth + 1, o),
                  ...this.getOperationsItems(e, void 0, t, n.depth + 1, o),
                ];
                a.push(...r);
                continue;
              }
              const i = this.getTagRelatedSchema({ parser: e, tag: t, parent: n });
              (n.items = [
                ...i,
                ...Zo.addMarkdownItems(t.description || '', n, n.depth + 1, o),
                ...this.getOperationsItems(e, n, t, n.depth + 1, o),
              ]),
                a.push(n);
            }
            return o.sortTagsAlphabetically && a.sort(qt('name')), a;
          }
          static getOperationsItems(e, t, r, n, o) {
            if (0 === r.operations.length) return [];
            const i = [];
            for (const s of r.operations) {
              const r = new go(e, s, t, o);
              (r.depth = n), i.push(r);
            }
            return o.sortOperationsAlphabetically && i.sort(qt('name')), i;
          }
          static getTagsWithOperations(e, t) {
            const r = {},
              n = t['x-webhooks'] || t.webhooks;
            for (const e of t.tags || []) r[e.name] = Jo(Ho({}, e), { operations: [] });
            function o(e, t, n) {
              for (const i of Object.keys(t)) {
                const s = t[i],
                  a = Object.keys(s).filter(Me);
                for (const t of a) {
                  const a = s[t];
                  if (s.$ref) {
                    const { resolved: t } = e.deref(s);
                    o(e, { [i]: t }, n);
                    continue;
                  }
                  let l = null == a ? void 0 : a.tags;
                  (l && l.length) || (l = ['']);
                  for (const e of l) {
                    let o = r[e];
                    void 0 === o && ((o = { name: e, operations: [] }), (r[e] = o)),
                      o['x-traitTag'] ||
                        o.operations.push(
                          Jo(Ho({}, a), {
                            pathName: i,
                            pointer: Oe.compile(['paths', i, t]),
                            httpVerb: t,
                            pathParameters: s.parameters || [],
                            pathServers: s.servers,
                            isWebhook: !!n,
                          }),
                        );
                  }
                }
              }
            }
            return n && o(e, n, !0), t.paths && o(e, t.paths), r;
          }
          static getTagRelatedSchema({ parser: e, tag: t, parent: r }) {
            var n;
            return Object.entries((null == (n = e.spec.components) ? void 0 : n.schemas) || {})
              .map(([e, n]) => {
                const o = n['x-tags'];
                if (!(null == o ? void 0 : o.includes(t.name))) return null;
                const i = new Mo(
                  'schema',
                  {
                    name: e,
                    'x-displayName': `${n.title || e}`,
                    description: `<SchemaDefinition showWriteOnly={true} schemaRef="#/components/schemas/${e}" />`,
                  },
                  r,
                );
                return (i.depth = r.depth + 1), i;
              })
              .filter(Boolean);
          }
        }
        var Go = Object.defineProperty,
          Xo = Object.getOwnPropertyDescriptor,
          Ko = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? Xo(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && Go(t, r, i), i;
          };
        const ei = 'data-section-id';
        class ti {
          constructor(e, t, r) {
            (this.scroll = t),
              (this.history = r),
              (this.activeItemIdx = -1),
              (this.sideBarOpened = !1),
              (this.updateOnScroll = e => {
                const t = e ? 1 : -1;
                let r = this.activeItemIdx;
                for (; (-1 !== r || e) && !(r >= this.flatItems.length - 1 && e); ) {
                  if (e) {
                    const e = this.getElementAtOrFirstChild(r + 1);
                    if (this.scroll.isElementBellow(e)) break;
                  } else {
                    const e = this.getElementAt(r);
                    if (this.scroll.isElementAbove(e)) break;
                  }
                  r += t;
                }
                this.activate(this.flatItems[r], !0, !0);
              }),
              (this.updateOnHistory = (e = this.history.currentId) => {
                if (!e) return;
                let t;
                (t = this.flatItems.find(t => t.id === e)),
                  t
                    ? this.activateAndScroll(t, !1)
                    : (e.startsWith(ft) &&
                        ((t = this.flatItems.find(e => ft.startsWith(e.id))),
                        this.activateAndScroll(t, !1)),
                      this.scroll.scrollIntoViewBySelector(`[${ei}="${P(e)}"]`));
              }),
              (this.getItemById = e => this.flatItems.find(t => t.id === e)),
              (0, de.makeObservable)(this),
              (this.items = e.contentItems),
              (this.flatItems = m(this.items || [], 'items')),
              this.flatItems.forEach((e, t) => (e.absoluteIdx = t)),
              this.subscribe();
          }
          static updateOnHistory(e = Wt.currentId, t) {
            e && t.scrollIntoViewBySelector(`[${ei}="${P(e)}"]`);
          }
          subscribe() {
            (this._unsubscribe = this.scroll.subscribe(this.updateOnScroll)),
              (this._hashUnsubscribe = this.history.subscribe(this.updateOnHistory));
          }
          toggleSidebar() {
            this.sideBarOpened = !this.sideBarOpened;
          }
          closeSidebar() {
            this.sideBarOpened = !1;
          }
          getElementAt(e) {
            const t = this.flatItems[e];
            return (t && a(`[${ei}="${P(t.id)}"]`)) || null;
          }
          getElementAtOrFirstChild(e) {
            let t = this.flatItems[e];
            return (
              t && 'group' === t.type && (t = t.items[0]), (t && a(`[${ei}="${P(t.id)}"]`)) || null
            );
          }
          get activeItem() {
            return this.flatItems[this.activeItemIdx] || void 0;
          }
          activate(e, t = !0, r = !1) {
            if (
              (this.activeItem && this.activeItem.id) !== (e && e.id) &&
              (!e || 'group' !== e.type)
            ) {
              if ((this.deactivate(this.activeItem), !e))
                return (this.activeItemIdx = -1), void this.history.replace('', r);
              e.depth <= Yo ||
                ((this.activeItemIdx = e.absoluteIdx),
                t && this.history.replace(encodeURI(e.id), r),
                e.activate(),
                e.expand());
            }
          }
          deactivate(e) {
            if (void 0 !== e) for (e.deactivate(); void 0 !== e; ) e.collapse(), (e = e.parent);
          }
          activateAndScroll(e, t, r) {
            const n = (e && this.getItemById(e.id)) || e;
            this.activate(n, t, r),
              this.scrollToActive(),
              (n && n.items.length) || this.closeSidebar();
          }
          scrollToActive() {
            this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx));
          }
          dispose() {
            this._unsubscribe(), this._hashUnsubscribe();
          }
        }
        Ko([de.observable], ti.prototype, 'activeItemIdx', 2),
          Ko([de.observable], ti.prototype, 'sideBarOpened', 2),
          Ko([de.action], ti.prototype, 'toggleSidebar', 1),
          Ko([de.action], ti.prototype, 'closeSidebar', 1),
          Ko([de.action], ti.prototype, 'activate', 1),
          Ko([de.action.bound], ti.prototype, 'activateAndScroll', 1);
        var ri = Object.defineProperty,
          ni = Object.getOwnPropertyDescriptor;
        const oi = 'scroll';
        class ii {
          constructor(e) {
            (this.options = e),
              (this._prevOffsetY = 0),
              (this._scrollParent = s ? window : void 0),
              (this._emiter = new ve()),
              this.bind();
          }
          bind() {
            (this._prevOffsetY = this.scrollY()),
              this._scrollParent &&
                this._scrollParent.addEventListener('scroll', this.handleScroll);
          }
          dispose() {
            this._scrollParent &&
              this._scrollParent.removeEventListener('scroll', this.handleScroll),
              this._emiter.removeAllListeners(oi);
          }
          scrollY() {
            return 'undefined' != typeof HTMLElement && this._scrollParent instanceof HTMLElement
              ? this._scrollParent.scrollTop
              : void 0 !== this._scrollParent
              ? this._scrollParent.pageYOffset
              : 0;
          }
          isElementBellow(e) {
            if (null !== e) return e.getBoundingClientRect().top > this.options.scrollYOffset();
          }
          isElementAbove(e) {
            if (null === e) return;
            const t = e.getBoundingClientRect().top;
            return (t > 0 ? Math.floor(t) : Math.ceil(t)) <= this.options.scrollYOffset();
          }
          subscribe(e) {
            const t = this._emiter.addListener(oi, e);
            return () => t.removeListener(oi, e);
          }
          scrollIntoView(e) {
            null !== e &&
              (e.scrollIntoView(),
              this._scrollParent &&
                this._scrollParent.scrollBy &&
                this._scrollParent.scrollBy(0, 1 - this.options.scrollYOffset()));
          }
          scrollIntoViewBySelector(e) {
            const t = a(e);
            this.scrollIntoView(t);
          }
          handleScroll() {
            const e = this.scrollY() - this._prevOffsetY > 0;
            (this._prevOffsetY = this.scrollY()), this._emiter.emit(oi, e);
          }
        }
        ((e, t, r, n) => {
          for (var o, i = ni(t, r), s = e.length - 1; s >= 0; s--)
            (o = e[s]) && (i = o(t, r, i) || i);
          i && ri(t, r, i);
        })([xe.bind, St(100)], ii.prototype, 'handleScroll');
        class si {
          constructor() {
            this.searchWorker = (function () {
              let e;
              if (s)
                try {
                  e = r(595);
                } catch (t) {
                  e = r(388).ZP;
                }
              else e = r(388).ZP;
              return new e();
            })();
          }
          indexItems(e) {
            const t = e => {
              e.forEach(e => {
                'group' !== e.type &&
                  this.add(e.name, (e.description || '').concat(' ', e.path || ''), e.id),
                  t(e.items);
              });
            };
            t(e), this.searchWorker.done();
          }
          add(e, t, r) {
            this.searchWorker.add(e, t, r);
          }
          dispose() {
            this.searchWorker.terminate(), this.searchWorker.dispose();
          }
          search(e) {
            return this.searchWorker.search(e);
          }
          toJS() {
            return (
              (e = this),
              null,
              (t = function* () {
                return this.searchWorker.toJS();
              }),
              new Promise((r, n) => {
                var o = e => {
                    try {
                      s(t.next(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  i = e => {
                    try {
                      s(t.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  },
                  s = e => (e.done ? r(e.value) : Promise.resolve(e.value).then(o, i));
                s((t = t.apply(e, null)).next());
              })
            );
            var e, t;
          }
          load(e) {
            this.searchWorker.load(e);
          }
          fromExternalJS(e, t) {
            e && t && this.searchWorker.fromExternalJS(e, t);
          }
        }
        const ai = ee.div`
  width: calc(100% - ${e => e.theme.rightPanel.width});
  padding: 0 ${e => e.theme.spacing.sectionHorizontal}px;

  ${({ compact: e, theme: t }) => K.lessThan('medium', !0)`
    width: 100%;
    padding: ${`${e ? 0 : t.spacing.sectionVertical}px ${t.spacing.sectionHorizontal}px`};
  `};
`,
          li = ee.div.attrs(e => ({ [ei]: e.id }))`
  padding: ${e => e.theme.spacing.sectionVertical}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${K.lessThan('medium', !0)`
    padding: 0;
  `}
  ${e =>
    e.underlined
      ? "\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  "
      : ''}
`,
          ci = ee.div`
  width: ${e => e.theme.rightPanel.width};
  color: ${({ theme: e }) => e.rightPanel.textColor};
  background-color: ${e => e.theme.rightPanel.backgroundColor};
  padding: 0 ${e => e.theme.spacing.sectionHorizontal}px;

  ${K.lessThan('medium', !0)`
    width: 100%;
    padding: ${e => `${e.theme.spacing.sectionVertical}px ${e.theme.spacing.sectionHorizontal}px`};
  `};
`,
          pi = ee(ci)`
  background-color: ${e => e.theme.rightPanel.backgroundColor};
`,
          ui = ee.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${K.lessThan('medium', !0)`
    flex-direction: column;
  `};
`,
          di = { 1: '1.85714em', 2: '1.57143em', 3: '1.27em' },
          hi = e => Y`
  font-family: ${({ theme: e }) => e.typography.headings.fontFamily};
  font-weight: ${({ theme: e }) => e.typography.headings.fontWeight};
  font-size: ${di[e]};
  line-height: ${({ theme: e }) => e.typography.headings.lineHeight};
`,
          mi = ee.h1`
  ${hi(1)};
  color: ${({ theme: e }) => e.colors.text.primary};

  ${te('H1')};
`,
          fi = ee.h2`
  ${hi(2)};
  color: ${({ theme: e }) => e.colors.text.primary};
  margin: 0 0 20px;

  ${te('H2')};
`,
          yi =
            (ee.h2`
  ${hi(3)};
  color: ${({ theme: e }) => e.colors.text.primary};

  ${te('H3')};
`,
            ee.h3`
  color: ${({ theme: e }) => e.rightPanel.textColor};

  ${te('RightPanelHeader')};
`),
          gi = ee.h5`
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${te('UnderlinedHeader')};
`;
        var bi = (e, t, r) =>
          new Promise((n, o) => {
            var i = e => {
                try {
                  a(r.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = e => {
                try {
                  a(r.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = e => (e.done ? n(e.value) : Promise.resolve(e.value).then(i, s));
            a((r = r.apply(e, t)).next());
          });
        const xi = (0, e.createContext)(void 0),
          { Provider: vi, Consumer: wi } = xi;
        function ki(t) {
          const { spec: r, specUrl: n, options: o, onLoaded: i, children: s } = t,
            [a, l] = e.useState(null),
            [c, p] = e.useState(null);
          if (c) throw c;
          e.useEffect(() => {
            !(function () {
              bi(this, null, function* () {
                if (r || n) {
                  l(null);
                  try {
                    const e = yield ge(r || n);
                    l(e);
                  } catch (e) {
                    throw (i && i(e), p(e), e);
                  }
                }
              });
            })();
          }, [r, n]);
          const u = e.useMemo(() => {
            if (!a) return null;
            try {
              return new cc(a, n, o);
            } catch (e) {
              throw (i && i(e), e);
            }
          }, [a, n, o]);
          return (
            e.useEffect(() => {
              u && i && i();
            }, [u, i]),
            s({ loading: !u, store: u })
          );
        }
        function Oi() {
          return (0, e.useContext)(xi);
        }
        const Ei = e => Y`
  ${e} {
    cursor: pointer;
    margin-left: -20px;
    padding: 0;
    line-height: 1;
    width: 20px;
    display: inline-block;
    outline: 0;
  }
  ${e}:before {
    content: '';
    width: 15px;
    height: 15px;
    background-size: contain;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');
    opacity: 0.5;
    visibility: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  h1:hover > ${e}::before, h2:hover > ${e}::before, ${e}:hover::before {
    visibility: visible;
  }
`,
          ji = ee(function (t) {
            const r = e.useContext(xi),
              n = e.useCallback(
                e => {
                  r &&
                    (function (e, t, r) {
                      t.defaultPrevented ||
                        0 !== t.button ||
                        (e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(t) ||
                        (t.preventDefault(), e.replace(encodeURI(r)));
                    })(r.menu.history, e, t.to);
                },
                [r, t.to],
              );
            return r
              ? e.createElement(
                  'a',
                  {
                    className: t.className,
                    href: r.menu.history.linkForId(t.to),
                    onClick: n,
                    'aria-label': t.to,
                  },
                  t.children,
                )
              : null;
          })`
  ${Ei('&')};
`;
        function Si(t) {
          return e.createElement(ji, { to: t.to });
        }
        const $i = { left: '90deg', right: '-90deg', up: '-180deg', down: '0' },
          Pi = ee(t =>
            e.createElement(
              'svg',
              {
                className: t.className,
                style: t.style,
                version: '1.1',
                viewBox: '0 0 24 24',
                x: '0',
                xmlns: 'http://www.w3.org/2000/svg',
                y: '0',
                'aria-hidden': 'true',
              },
              e.createElement('polygon', {
                points: '17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 ',
              }),
            ),
          )`
  height: ${e => e.size || '18px'};
  width: ${e => e.size || '18px'};
  min-width: ${e => e.size || '18px'};
  vertical-align: middle;
  float: ${e => e.float || ''};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${e => $i[e.direction || 'down']});

  polygon {
    fill: ${({ color: e, theme: t }) =>
      (e && t.colors.responses[e] && t.colors.responses[e].color) || e};
  }
`,
          Ci = ee.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${e => e.theme.colors[e.type].main};
  color: ${e => e.theme.colors[e.type].contrastText};
  font-size: ${e => e.theme.typography.code.fontSize};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${({ theme: e }) => e.typography.fontWeightBold};
  font-size: 12px;
  + span[type] {
    margin-left: 4px;
  }
`,
          Ai = Y`
  text-decoration: line-through;
  color: #707070;
`,
          Ii = ee.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${e => e.theme.colors.text.secondary};
`,
          Ti = ee.td`
  border-left: 1px solid ${e => e.theme.schema.linesColor};
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 0;

  ${K.lessThan('small')`
    display: block;
    overflow: hidden;
  `}

  tr:first-of-type > &,
  tr.last > & {
    border-left-width: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  tr:first-of-type > & {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 22px,
      ${e => e.theme.schema.linesColor} 22px,
      ${e => e.theme.schema.linesColor} 100%
    );
  }

  tr.last > & {
    background-image: linear-gradient(
      to bottom,
      ${e => e.theme.schema.linesColor} 0%,
      ${e => e.theme.schema.linesColor} 22px,
      transparent 22px,
      transparent 100%
    );
  }

  tr.last + tr > & {
    border-left-color: transparent;
  }

  tr.last:first-child > & {
    background: none;
    border-left-color: transparent;
  }
`,
          _i = ee(Ti)`
  padding: 0;
`,
          Ri = ee(Ti)`
  vertical-align: top;
  line-height: 20px;
  white-space: nowrap;
  font-size: 13px;
  font-family: ${e => e.theme.typography.code.fontFamily};

  &.deprecated {
    ${Ai};
  }

  ${({ kind: e }) =>
    'patternProperties' === e &&
    Y`
      > span.property-name {
        display: inline-table;
        white-space: break-spaces;
        margin-right: 20px;

        ::before,
        ::after {
          content: '/';
          filter: opacity(0.2);
        }
      }
    `}

  ${({ kind: e = '' }) =>
    ['field', 'additionalProperties', 'patternProperties'].includes(e) ? '' : 'font-style: italic'};

  ${te('PropertyNameCell')};
`,
          Di = ee.td`
  border-bottom: 1px solid #9fb4be;
  padding: 10px 0;
  width: ${e => e.theme.schema.defaultDetailsWidth};
  box-sizing: border-box;

  tr.expanded & {
    border-bottom: none;
  }

  ${K.lessThan('small')`
    padding: 0 20px;
    border-bottom: none;
    border-left: 1px solid ${e => e.theme.schema.linesColor};

    tr.last > & {
      border-left: none;
    }
  `}

  ${te('PropertyDetailsCell')};
`,
          Li = ee.span`
  color: ${e => e.theme.schema.linesColor};
  font-family: ${e => e.theme.typography.code.fontFamily};
  margin-right: 10px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 1px;
    background: ${e => e.theme.schema.linesColor};
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    background: ${e => e.theme.schema.linesColor};
    height: 7px;
  }
`,
          zi = ee.div`
  padding: ${({ theme: e }) => e.schema.nestingSpacing};
`,
          Ni = ee.table`
  border-collapse: separate;
  border-radius: 3px;
  font-size: ${e => e.theme.typography.fontSize};

  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  ${K.lessThan('small')`
    display: block;
    > tr, > tbody > tr {
      display: block;
    }
  `}

  ${K.lessThan('small', !1, ' and (-ms-high-contrast:none)')`
    td {
      float: left;
      width: 100%;
    }
  `}

  &
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi} {
    margin: ${({ theme: e }) => e.schema.nestingSpacing};
    margin-right: 0;
    background: ${({ theme: e }) => e.schema.nestedBackground};
  }

  &
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi} {
    background: #ffffff;
  }
`,
          Mi = ee.div`
  margin: 0 0 3px 0;
  display: inline-block;
`,
          qi = ee.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${e => e.theme.colors.primary.main};
  font-family: ${e => e.theme.typography.headings.fontFamily};
}
`,
          Fi = ee.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${e => e.theme.colors.primary.main};
  padding: 2px 10px;
  line-height: 1.5em;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${e => e.theme.colors.primary.main};
  }

  ${({ deprecated: e }) => (e && Ai) || ''};

  ${e =>
    e.active
      ? `\n      color: white;\n      background-color: ${
          e.theme.colors.primary.main
        };\n      &:focus {\n        box-shadow: none;\n        background-color: ${(0, t.darken)(
          0.15,
          e.theme.colors.primary.main,
        )};\n      }\n      `
      : `\n        color: ${e.theme.colors.primary.main};\n        background-color: white;\n      `}
`,
          Bi = ee.div`
  font-size: 0.9em;
  font-family: ${e => e.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`,
          Qi = ee.div`
  font-size: 0.9em;
  font-family: ${e => e.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;
        var Ui = require('react-tabs');
        const Wi = ee(Ui.Tabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 5px 10px;
      display: inline-block;

      background-color: ${({ theme: e }) => e.codeBlock.backgroundColor};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${({ theme: e }) => (0, t.darken)(e.colors.tonalOffset, e.rightPanel.textColor)};
      margin: 0
        ${({ theme: e }) => `${e.spacing.unit}px ${e.spacing.unit}px ${e.spacing.unit}px`};
      border: 1px solid ${({ theme: e }) => (0, t.darken)(0.05, e.codeBlock.backgroundColor)};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;

      &.react-tabs__tab--selected {
        color: ${e => e.theme.colors.text.primary};
        background: ${({ theme: e }) => e.rightPanel.textColor};
        &:focus {
          outline: auto;
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-success {
        color: ${e => e.theme.colors.responses.success.tabTextColor};
      }

      &.tab-redirect {
        color: ${e => e.theme.colors.responses.redirect.tabTextColor};
      }

      &.tab-info {
        color: ${e => e.theme.colors.responses.info.tabTextColor};
      }

      &.tab-error {
        color: ${e => e.theme.colors.responses.error.tabTextColor};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${({ theme: e }) => e.codeBlock.backgroundColor};
    & > div,
    & > pre {
      padding: ${e => 4 * e.theme.spacing.unit}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`,
          Vi =
            (ee(Wi)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({ theme: e }) => (0, t.darken)(e.colors.tonalOffset, e.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({ theme: e }) => e.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${e => 2 * e.theme.spacing.unit}px 0;
    }
  }
`,
            ee.div`
  /**
  * Based on prism-dark.css
  */

  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-shadow: 0 -0.1em 0.2em black;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #4a8bb3;
  }

  .token.boolean {
    color: #e64441;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }

  .token.property.string {
    color: white;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

  ${te('Prism')};
`),
          Hi = ee.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${({ theme: e }) => e.typography.fontFamily};
    font-size: ${({ theme: e }) => e.typography.fontSize};
    line-height: ${({ theme: e }) => e.typography.lineHeight};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`,
          Ji = ee.div`
  &:hover ${Hi} {
    opacity: 1;
  }
`,
          Yi = ee(Vi).attrs({ as: 'pre' })`
  font-family: ${e => e.theme.typography.code.fontFamily};
  font-size: ${e => e.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({ theme: e }) => (e.typography.code.wrap ? 'pre-wrap' : 'pre')};
`;
        var Zi = require('perfect-scrollbar'),
          Gi = r.n(Zi),
          Xi = Object.defineProperty,
          Ki = Object.getOwnPropertySymbols,
          es = Object.prototype.hasOwnProperty,
          ts = Object.prototype.propertyIsEnumerable,
          rs = (e, t, r) =>
            t in e
              ? Xi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        const ns = Gi() || Zi;
        let os = '';
        s &&
          ((os = r(232)),
          (os = ('function' == typeof os.toString && os.toString()) || ''),
          (os = '[object Object]' === os ? '' : os));
        const is = Z`${os}`,
          ss = ee.div`
  position: relative;
`;
        class as extends e.Component {
          constructor() {
            super(...arguments),
              (this.handleRef = e => {
                this._container = e;
              });
          }
          componentDidMount() {
            const e =
              (this._container.parentElement && this._container.parentElement.scrollTop) || 0;
            (this.inst = new ns(this._container, this.props.options || {})),
              this._container.scrollTo && this._container.scrollTo(0, e);
          }
          componentDidUpdate() {
            this.inst.update();
          }
          componentWillUnmount() {
            this.inst.destroy();
          }
          render() {
            const { children: t, className: r, updateFn: n } = this.props;
            return (
              n && n(this.componentDidUpdate.bind(this)),
              e.createElement(
                e.Fragment,
                null,
                os && e.createElement(is, null),
                e.createElement(
                  ss,
                  { className: `scrollbar-container ${r}`, ref: this.handleRef },
                  t,
                ),
              )
            );
          }
        }
        function ls(t) {
          return e.createElement(ce.Consumer, null, r =>
            r.nativeScrollbars
              ? e.createElement(
                  'div',
                  {
                    style: {
                      overflow: 'auto',
                      overscrollBehavior: 'contain',
                      msOverflowStyle: '-ms-autohiding-scrollbar',
                    },
                  },
                  t.children,
                )
              : e.createElement(
                  as,
                  ((e, t) => {
                    for (var r in t || (t = {})) es.call(t, r) && rs(e, r, t[r]);
                    if (Ki) for (var r of Ki(t)) ts.call(t, r) && rs(e, r, t[r]);
                    return e;
                  })({}, t),
                  t.children,
                ),
          );
        }
        const cs = ee(({ className: t, style: r }) =>
            e.createElement(
              'svg',
              {
                className: t,
                style: r,
                xmlns: 'http://www.w3.org/2000/svg',
                width: '16',
                height: '16',
                viewBox: '0 0 24 24',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: '2',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              },
              e.createElement('polyline', { points: '6 9 12 15 18 9' }),
            ),
          )`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${e => 'dark' === e.variant && 'white'};
  }
`,
          ps = e.memo(t => {
            const {
              options: r,
              onChange: n,
              placeholder: o,
              value: i = '',
              variant: s,
              className: a,
            } = t;
            return e.createElement(
              'div',
              { className: a },
              e.createElement(cs, { variant: s }),
              e.createElement(
                'select',
                {
                  onChange: e => {
                    const { selectedIndex: t } = e.target;
                    n(r[o ? t - 1 : t]);
                  },
                  value: i,
                  className: 'dropdown-select',
                },
                o && e.createElement('option', { disabled: !0, hidden: !0, value: o }, o),
                r.map(({ idx: t, value: r, title: n }, o) =>
                  e.createElement('option', { key: t || r + o, value: r }, n || r),
                ),
              ),
              e.createElement('label', null, i),
            );
          }),
          us = H()(ps)`
  label {
    box-sizing: border-box;
    min-width: 100px;
    outline: none;
    display: inline-block;
    font-family: ${e => e.theme.typography.headings.fontFamily};
    color: ${({ theme: e }) => e.colors.text.primary};
    vertical-align: bottom;
    width: ${({ fullWidth: e }) => (e ? '100%' : 'auto')};
    text-transform: none;
    padding: 0 22px 0 4px;

    font-size: 0.929em;
    line-height: 1.5em;
    font-family: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dropdown-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    appearance: none;
    cursor: pointer;

    color: ${({ theme: e }) => e.colors.text.primary};
    line-height: inherit;
    font-family: inherit;
  }
  box-sizing: border-box;
  min-width: 100px;
  outline: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid rgba(38, 50, 56, 0.5);
  vertical-align: bottom;
  padding: 2px 0px 2px 6px;
  position: relative;
  width: auto;
  background: white;
  color: #263238;
  font-family: ${e => e.theme.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
  cursor: pointer;
  transition: border 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-within {
    border: 1px solid ${e => e.theme.colors.primary.main};
    color: ${e => e.theme.colors.primary.main};
    box-shadow: 0px 0px 0px 1px ${e => e.theme.colors.primary.main};
  }
`,
          ds = H()(us)`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.969em;

  font-size: 1em;
  border: none;
  padding: 0 1.2em 0 0;
  background: transparent;

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    label {
      color: ${e => e.theme.colors.primary.main};
      text-shadow: 0px 0px 0px ${e => e.theme.colors.primary.main};
    }
  }
`,
          hs = H().span`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.929em;
  color: black;
`;
        var ms = Object.defineProperty,
          fs = Object.getOwnPropertySymbols,
          ys = Object.prototype.hasOwnProperty,
          gs = Object.prototype.propertyIsEnumerable,
          bs = (e, t, r) =>
            t in e
              ? ms(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          xs = (e, t) => {
            for (var r in t || (t = {})) ys.call(t, r) && bs(e, r, t[r]);
            if (fs) for (var r of fs(t)) gs.call(t, r) && bs(e, r, t[r]);
            return e;
          };
        function vs(t) {
          const { Label: r = hs, Dropdown: n = ds } = t;
          return 1 === t.options.length
            ? e.createElement(r, null, t.options[0].value)
            : e.createElement(n, xs({}, t));
        }
        var ws = require('dompurify');
        const ks = Y`
  a {
    text-decoration: ${e => e.theme.typography.links.textDecoration};
    color: ${e => e.theme.typography.links.color};

    &:visited {
      color: ${e => e.theme.typography.links.visited};
    }

    &:hover {
      color: ${e => e.theme.typography.links.hover};
      text-decoration: ${e => e.theme.typography.links.hoverTextDecoration};
    }
  }
`,
          Os = ee(Vi)`
  font-family: ${e => e.theme.typography.fontFamily};
  font-weight: ${e => e.theme.typography.fontWeightRegular};
  line-height: ${e => e.theme.typography.lineHeight};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ compact: e }) =>
    e &&
    '\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  '}

  ${({ inline: e }) => e && ' p {\n    display: inline-block;\n  }'}

  h1 {
    ${hi(1)};
    color: ${e => e.theme.colors.primary.main};
    margin-top: 0;
  }

  h2 {
    ${hi(2)};
    color: ${e => e.theme.colors.text.primary};
  }

  code {
    color: ${({ theme: e }) => e.typography.code.color};
    background-color: ${({ theme: e }) => e.typography.code.backgroundColor};

    font-family: ${e => e.theme.typography.code.fontFamily};
    border-radius: 2px;
    border: 1px solid rgba(38, 50, 56, 0.1);
    padding: 0 ${({ theme: e }) => e.spacing.unit}px;
    font-size: ${e => e.theme.typography.code.fontSize};
    font-weight: ${({ theme: e }) => e.typography.code.fontWeight};

    word-break: break-word;
  }

  pre {
    font-family: ${e => e.theme.typography.code.fontFamily};
    white-space: ${({ theme: e }) => (e.typography.code.wrap ? 'pre-wrap' : 'pre')};
    background-color: ${({ theme: e }) => e.codeBlock.backgroundColor};
    color: white;
    padding: ${e => 4 * e.theme.spacing.unit}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0px;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      color: white;
      padding: 0;

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;

    &:nth-child(2n) {
      background-color: ${({ theme: e }) => e.schema.nestedBackground};
    }
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${Ei('.share-link')};

  ${ks}

  ${te('Markdown')};
`;
        var Es = Object.defineProperty,
          js = Object.getOwnPropertySymbols,
          Ss = Object.prototype.hasOwnProperty,
          $s = Object.prototype.propertyIsEnumerable,
          Ps = (e, t, r) =>
            t in e
              ? Es(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Cs = (e, t) => {
            for (var r in t || (t = {})) Ss.call(t, r) && Ps(e, r, t[r]);
            if (js) for (var r of js(t)) $s.call(t, r) && Ps(e, r, t[r]);
            return e;
          };
        const As = H()(t => e.createElement(Os, Cs({}, t)))`
  display: inline;
`;
        function Is(t) {
          const r = t.inline ? As : Os;
          return e.createElement(ue, null, n => {
            return e.createElement(
              r,
              Cs(
                {
                  className: 'redoc-markdown ' + (t.className || ''),
                  dangerouslySetInnerHTML: {
                    __html: ((o = n.untrustedSpec), (i = t.html), o ? ws.sanitize(i) : i),
                  },
                  'data-role': t['data-role'],
                },
                t,
              ),
            );
            var o, i;
          });
        }
        class Ts extends e.Component {
          render() {
            const { source: t, inline: r, compact: n, className: o, 'data-role': i } = this.props,
              s = new Ur();
            return e.createElement(Is, {
              html: s.renderMd(t),
              inline: r,
              compact: n,
              className: o,
              'data-role': i,
            });
          }
        }
        const _s = ee.div`
  position: relative;
`,
          Rs = ee.div`
  position: absolute;
  min-width: 80px;
  max-width: 500px;
  background: #fff;
  bottom: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);

  border-radius: 4px;
  padding: 0.3em 0.6em;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
`,
          Ds = ee.div`
  background: #fff;
  color: #000;
  display: inline;
  font-size: 0.85em;
  white-space: nowrap;
`,
          Ls = ee.div`
  position: absolute;
  width: 0;
  height: 0;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  border-top: solid #fff 5px;
`,
          zs = ee.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
`;
        class Ns extends e.Component {
          render() {
            const { open: t, title: r, children: n } = this.props;
            return e.createElement(
              _s,
              null,
              n,
              t &&
                e.createElement(
                  Rs,
                  null,
                  e.createElement(Ds, null, r),
                  e.createElement(Ls, null),
                  e.createElement(zs, null),
                ),
            );
          }
        }
        const Ms =
          'undefined' != typeof document &&
          document.queryCommandSupported &&
          document.queryCommandSupported('copy');
        class qs {
          static isSupported() {
            return Ms;
          }
          static selectElement(e) {
            let t, r;
            document.body.createTextRange
              ? ((t = document.body.createTextRange()), t.moveToElementText(e), t.select())
              : document.createRange &&
                window.getSelection &&
                ((r = window.getSelection()),
                (t = document.createRange()),
                t.selectNodeContents(e),
                r.removeAllRanges(),
                r.addRange(t));
          }
          static deselect() {
            if (document.selection) document.selection.empty();
            else if (window.getSelection) {
              const e = window.getSelection();
              e && e.removeAllRanges();
            }
          }
          static copySelected() {
            let e;
            try {
              e = document.execCommand('copy');
            } catch (t) {
              e = !1;
            }
            return e;
          }
          static copyElement(e) {
            qs.selectElement(e);
            const t = qs.copySelected();
            return t && qs.deselect(), t;
          }
          static copyCustom(e) {
            const t = document.createElement('textarea');
            (t.style.position = 'fixed'),
              (t.style.top = '0'),
              (t.style.left = '0'),
              (t.style.width = '2em'),
              (t.style.height = '2em'),
              (t.style.padding = '0'),
              (t.style.border = 'none'),
              (t.style.outline = 'none'),
              (t.style.boxShadow = 'none'),
              (t.style.background = 'transparent'),
              (t.value = e),
              document.body.appendChild(t),
              t.select();
            const r = qs.copySelected();
            return document.body.removeChild(t), r;
          }
        }
        const Fs = t => {
          const [r, n] = e.useState(!1),
            o = () => {
              const e = 'string' == typeof t.data ? t.data : JSON.stringify(t.data, null, 2);
              qs.copyCustom(e), i();
            },
            i = () => {
              n(!0),
                setTimeout(() => {
                  n(!1);
                }, 1500);
            };
          return t.children({
            renderCopyButton: () =>
              e.createElement(
                'button',
                { onClick: o },
                e.createElement(
                  Ns,
                  { title: qs.isSupported() ? 'Copied' : 'Not supported in your browser', open: r },
                  'Copy',
                ),
              ),
          });
        };
        let Bs = 1;
        function Qs(e, t) {
          Bs = 1;
          let r = '';
          return (
            (r += '<div class="redoc-json">'),
            (r += '<code>'),
            (r += Js(e, t)),
            (r += '</code>'),
            (r += '</div>'),
            r
          );
        }
        function Us(e) {
          return void 0 !== e
            ? e
                .toString()
                .replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
            : '';
        }
        function Ws(e) {
          return JSON.stringify(e).slice(1, -1);
        }
        function Vs(e, t) {
          return '<span class="' + t + '">' + Us(e) + '</span>';
        }
        function Hs(e) {
          return '<span class="token punctuation">' + e + '</span>';
        }
        function Js(e, t) {
          const r = typeof e;
          let n = '';
          return (
            null == e
              ? (n += Vs('null', 'token keyword'))
              : e && e.constructor === Array
              ? (Bs++,
                (n += (function (e, t) {
                  const r = Bs > t ? 'collapsed' : '';
                  let n = `<button class="collapser" aria-label="${
                      Bs > t + 1 ? 'expand' : 'collapse'
                    }"></button>${Hs(
                      '[',
                    )}<span class="ellipsis"></span><ul class="array collapsible">`,
                    o = !1;
                  const i = e.length;
                  for (let s = 0; s < i; s++)
                    (o = !0),
                      (n += '<li><div class="hoverable ' + r + '">'),
                      (n += Js(e[s], t)),
                      s < i - 1 && (n += ','),
                      (n += '</div></li>');
                  return (n += `</ul>${Hs(']')}`), o || (n = Hs('[ ]')), n;
                })(e, t)),
                Bs--)
              : e && e.constructor === Date
              ? (n += Vs('"' + e.toISOString() + '"', 'token string'))
              : 'object' === r
              ? (Bs++,
                (n += (function (e, t) {
                  const r = Bs > t ? 'collapsed' : '',
                    n = Object.keys(e),
                    o = n.length;
                  let i = `<button class="collapser" aria-label="${
                      Bs > t + 1 ? 'expand' : 'collapse'
                    }"></button>${Hs(
                      '{',
                    )}<span class="ellipsis"></span><ul class="obj collapsible">`,
                    s = !1;
                  for (let a = 0; a < o; a++) {
                    const l = n[a];
                    (s = !0),
                      (i += '<li><div class="hoverable ' + r + '">'),
                      (i += '<span class="property token string">"' + Us(l) + '"</span>: '),
                      (i += Js(e[l], t)),
                      a < o - 1 && (i += Hs(',')),
                      (i += '</div></li>');
                  }
                  return (i += `</ul>${Hs('}')}`), s || (i = Hs('{ }')), i;
                })(e, t)),
                Bs--)
              : 'number' === r
              ? (n += Vs(e, 'token number'))
              : 'string' === r
              ? /^(http|https):\/\/[^\s]+$/.test(e)
                ? (n +=
                    Vs('"', 'token string') +
                    '<a href="' +
                    encodeURI(e) +
                    '">' +
                    Us(Ws(e)) +
                    '</a>' +
                    Vs('"', 'token string'))
                : (n += Vs('"' + Ws(e) + '"', 'token string'))
              : 'boolean' === r && (n += Vs(e, 'token boolean')),
            n
          );
        }
        const Ys = Y`
  .redoc-json code > .collapser {
    display: none;
    pointer-events: none;
  }

  font-family: ${e => e.theme.typography.code.fontFamily};
  font-size: ${e => e.theme.typography.code.fontSize};

  white-space: ${({ theme: e }) => (e.typography.code.wrap ? 'pre-wrap' : 'pre')};
  contain: content;
  overflow-x: auto;

  .callback-function {
    color: gray;
  }

  .collapser:after {
    content: '-';
    cursor: pointer;
  }

  .collapsed > .collapser:after {
    content: '+';
    cursor: pointer;
  }

  .ellipsis:after {
    content: ' … ';
  }

  .collapsible {
    margin-left: 2em;
  }

  .hoverable {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
  }

  .hovered {
    background-color: rgba(235, 238, 249, 1);
  }

  .collapser {
    background-color: transparent;
    border: 0;
    color: #fff;
    font-family: ${e => e.theme.typography.code.fontFamily};
    font-size: ${e => e.theme.typography.code.fontSize};
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -1.5em;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    padding: 2px;
    &:focus {
      outline-color: #fff;
      outline-style: dotted;
      outline-width: 1px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 0px 26px;
  }

  li {
    position: relative;
    display: block;
  }

  .hoverable {
    display: inline-block;
  }

  .selected {
    outline-style: solid;
    outline-width: 1px;
    outline-style: dotted;
  }

  .collapsed > .collapsible {
    display: none;
  }

  .ellipsis {
    display: none;
  }

  .collapsed > .ellipsis {
    display: inherit;
  }
`,
          Zs = ee.div`
  &:hover > ${Hi} {
    opacity: 1;
  }
`,
          Gs = ee(t => {
            const [r, n] = e.useState(),
              o = ({ renderCopyButton: r }) => {
                const o =
                  t.data && Object.values(t.data).some(e => 'object' == typeof e && null !== e);
                return e.createElement(
                  Zs,
                  null,
                  e.createElement(
                    Hi,
                    null,
                    r(),
                    o &&
                      e.createElement(
                        e.Fragment,
                        null,
                        e.createElement('button', { onClick: i }, ' Expand all '),
                        e.createElement('button', { onClick: s }, ' Collapse all '),
                      ),
                  ),
                  e.createElement(ce.Consumer, null, r =>
                    e.createElement(Vi, {
                      className: t.className,
                      ref: e => n(e),
                      dangerouslySetInnerHTML: { __html: Qs(t.data, r.jsonSampleExpandLevel) },
                    }),
                  ),
                );
              },
              i = () => {
                const e = null == r ? void 0 : r.getElementsByClassName('collapsible');
                for (const t of Array.prototype.slice.call(e)) {
                  const e = t.parentNode;
                  e.classList.remove('collapsed'),
                    e.querySelector('.collapser').setAttribute('aria-label', 'collapse');
                }
              },
              s = () => {
                const e = null == r ? void 0 : r.getElementsByClassName('collapsible'),
                  t = Array.prototype.slice.call(e, 1);
                for (const e of t) {
                  const t = e.parentNode;
                  t.classList.add('collapsed'),
                    t.querySelector('.collapser').setAttribute('aria-label', 'expand');
                }
              },
              a = e => {
                let t;
                'collapser' === e.className &&
                  ((t = e.parentElement.getElementsByClassName('collapsible')[0]),
                  t.parentElement.classList.contains('collapsed')
                    ? (t.parentElement.classList.remove('collapsed'),
                      e.setAttribute('aria-label', 'collapse'))
                    : (t.parentElement.classList.add('collapsed'),
                      e.setAttribute('aria-label', 'expand')));
              },
              l = e.useCallback(e => {
                a(e.target);
              }, []),
              c = e.useCallback(e => {
                'Enter' === e.key && a(e.target);
              }, []);
            return (
              e.useEffect(
                () => (
                  null == r || r.addEventListener('click', l),
                  null == r || r.addEventListener('focus', c),
                  () => {
                    null == r || r.removeEventListener('click', l),
                      null == r || r.removeEventListener('focus', c);
                  }
                ),
                [l, c, r],
              ),
              e.createElement(Fs, { data: t.data }, o)
            );
          })`
  ${Ys};
`,
          Xs = t => {
            const { source: r, lang: n } = t;
            return e.createElement(Yi, { dangerouslySetInnerHTML: { __html: jt(r, n) } });
          },
          Ks = t => {
            const { source: r, lang: n } = t;
            return e.createElement(Fs, { data: r }, ({ renderCopyButton: t }) =>
              e.createElement(
                Ji,
                null,
                e.createElement(Hi, null, t()),
                e.createElement(Xs, { lang: n, source: r }),
              ),
            );
          };
        function ea({ value: t, mimeType: r }) {
          return Ue(r)
            ? e.createElement(Gs, { data: t })
            : ('object' == typeof t && (t = JSON.stringify(t, null, 2)),
              e.createElement(Ks, { lang: Ke(r), source: t }));
        }
        var ta = (e, t, r) =>
          new Promise((n, o) => {
            var i = e => {
                try {
                  a(r.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = e => {
                try {
                  a(r.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = e => (e.done ? n(e.value) : Promise.resolve(e.value).then(i, s));
            a((r = r.apply(e, t)).next());
          });
        function ra({ example: t, mimeType: r }) {
          return void 0 === t.value && t.externalValueUrl
            ? e.createElement(na, { example: t, mimeType: r })
            : e.createElement(ea, { value: t.value, mimeType: r });
        }
        function na({ example: t, mimeType: r }) {
          const n = (function (t, r) {
            const [, n] = (0, e.useState)(!0),
              o = (0, e.useRef)(void 0),
              i = (0, e.useRef)(void 0);
            return (
              i.current !== t && (o.current = void 0),
              (i.current = t),
              (0, e.useEffect)(() => {
                (() => {
                  ta(this, null, function* () {
                    n(!0);
                    try {
                      o.current = yield t.getExternalValue(r);
                    } catch (e) {
                      o.current = e;
                    }
                    n(!1);
                  });
                })();
              }, [t, r]),
              o.current
            );
          })(t, r);
          return void 0 === n
            ? e.createElement('span', null, 'Loading...')
            : n instanceof Error
            ? e.createElement(
                Yi,
                null,
                'Error loading external example: ',
                e.createElement('br', null),
                e.createElement(
                  'a',
                  {
                    className: 'token string',
                    href: t.externalValueUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  },
                  t.externalValueUrl,
                ),
              )
            : e.createElement(ea, { value: n, mimeType: r });
        }
        const oa = ee.div`
  padding: 0.9em;
  background-color: ${({ theme: e }) => (0, t.transparentize)(0.6, e.rightPanel.backgroundColor)};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({ theme: e }) => e.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
`,
          ia = ee.span`
  font-family: ${({ theme: e }) => e.typography.headings.fontFamily};
  font-size: 12px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  font-weight: ${({ theme: e }) => e.typography.fontWeightBold};
  color: ${({ theme: e }) => (0, t.transparentize)(0.3, e.rightPanel.textColor)};
`,
          sa = ee.div`
  position: relative;
`,
          aa = ee(us)`
  label {
    color: ${({ theme: e }) => e.rightPanel.textColor};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    text-transform: none;
    border: none;
  }
  margin: 0 0 10px 0;
  display: block;
  background-color: ${({ theme: e }) => (0, t.transparentize)(0.6, e.rightPanel.backgroundColor)};
  border: none;
  padding: 0.9em 1.6em 0.9em 0.9em;
  box-shadow: none;
  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    background-color: ${({ theme: e }) => (0, t.transparentize)(0.3, e.rightPanel.backgroundColor)};
  }
`,
          la = ee.div`
  font-family: ${e => e.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;
        class ca extends e.Component {
          constructor() {
            super(...arguments),
              (this.state = { activeIdx: 0 }),
              (this.switchMedia = ({ idx: e }) => {
                void 0 !== e && this.setState({ activeIdx: e });
              });
          }
          render() {
            const { activeIdx: t } = this.state,
              r = this.props.mediaType.examples || {},
              n = this.props.mediaType.name,
              o = e.createElement(la, null, 'No sample'),
              i = Object.keys(r);
            if (0 === i.length) return o;
            if (i.length > 1) {
              const o = i.map((e, t) => ({ value: r[e].summary || e, idx: t })),
                s = r[i[t]],
                a = s.description;
              return e.createElement(
                pa,
                null,
                e.createElement(
                  sa,
                  null,
                  e.createElement(ia, null, 'Example'),
                  this.props.renderDropdown({
                    value: o[t].value,
                    options: o,
                    onChange: this.switchMedia,
                    ariaLabel: 'Example',
                  }),
                ),
                e.createElement(
                  'div',
                  null,
                  a && e.createElement(Ts, { source: a }),
                  e.createElement(ra, { example: s, mimeType: n }),
                ),
              );
            }
            {
              const t = r[i[0]];
              return e.createElement(
                pa,
                null,
                t.description && e.createElement(Ts, { source: t.description }),
                e.createElement(ra, { example: t, mimeType: n }),
              );
            }
          }
        }
        const pa = ee.div`
  margin-top: 15px;
`;
        var ua = require('mobx-react');
        const da = ee(Ri)`
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 13px;
    font-family: ${e => e.theme.typography.code.fontFamily};
    cursor: pointer;
    padding: 0;
    color: ${e => e.theme.colors.text.primary};
    &:focus {
      font-weight: ${({ theme: e }) => e.typography.fontWeightBold};
    }
    ${({ kind: e }) =>
      'patternProperties' === e &&
      Y`
        display: inline-flex;
        margin-right: 20px;

        > span.property-name {
          white-space: break-spaces;
          text-align: left;

          ::before,
          ::after {
            content: '/';
            filter: opacity(0.2);
          }
        }

        > svg {
          align-self: center;
        }
      `}
  }
  ${Pi} {
    height: ${({ theme: e }) => e.schema.arrow.size};
    width: ${({ theme: e }) => e.schema.arrow.size};
    polygon {
      fill: ${({ theme: e }) => e.schema.arrow.color};
    }
  }
`,
          ha = ee.span`
  vertical-align: middle;
  font-size: ${({ theme: e }) => e.typography.code.fontSize};
  line-height: 20px;
`,
          ma = ee(ha)`
  color: ${e => (0, t.transparentize)(0.1, e.theme.schema.typeNameColor)};
`,
          fa = ee(ha)`
  color: ${e => e.theme.schema.typeNameColor};
`,
          ya = ee(ha)`
  color: ${e => e.theme.schema.typeTitleColor};
  word-break: break-word;
`,
          ga = fa,
          ba = ee(ha).attrs({ as: 'div' })`
  color: ${e => e.theme.schema.requireLabelColor};
  font-size: ${e => e.theme.schema.labelsTextSize};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`,
          xa = ee(ba)`
  color: ${e => e.theme.colors.primary.light};
`,
          va = ee(ha)`
  color: ${({ theme: e }) => e.colors.warning.main};
  font-size: 13px;
`,
          wa = ee(ha)`
  color: #0e7c86;
  &::before,
  &::after {
    font-weight: bold;
  }
`,
          ka = ee(ha)`
  border-radius: 2px;
  word-break: break-word;
  ${({ theme: e }) =>
    `\n    background-color: ${(0, t.transparentize)(
      0.95,
      e.colors.text.primary,
    )};\n    color: ${(0, t.transparentize)(0.1, e.colors.text.primary)};\n\n    padding: 0 ${
      e.spacing.unit
    }px;\n    border: 1px solid ${(0, t.transparentize)(
      0.9,
      e.colors.text.primary,
    )};\n    font-family: ${e.typography.code.fontFamily};\n}`};
  & + & {
    margin-left: 0;
  }
  ${te('ExampleValue')};
`,
          Oa = ee(ka)``,
          Ea = ee(ha)`
  border-radius: 2px;
  ${({ theme: e }) =>
    `\n    background-color: ${(0, t.transparentize)(
      0.95,
      e.colors.primary.light,
    )};\n    color: ${(0, t.transparentize)(0.1, e.colors.primary.main)};\n\n    margin: 0 ${
      e.spacing.unit
    }px;\n    padding: 0 ${e.spacing.unit}px;\n    border: 1px solid ${(0, t.transparentize)(
      0.9,
      e.colors.primary.main,
    )};\n}`};
  & + & {
    margin-left: 0;
  }
  ${te('ConstraintItem')};
`,
          ja = ee.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme: e }) => e.colors.text.secondary};
  margin-left: ${({ theme: e }) => e.spacing.unit}px;
  border-radius: 2px;
  cursor: pointer;
  outline-color: ${({ theme: e }) => e.colors.text.secondary};
  font-size: 12px;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        const Sa = ee.div`
  ${ks};
  ${({ compact: e }) => (e ? '' : 'margin: 1em 0')}
`;
        let $a = class extends e.Component {
          render() {
            const { externalDocs: t } = this.props;
            return t && t.url
              ? e.createElement(
                  Sa,
                  { compact: this.props.compact },
                  e.createElement('a', { href: t.url }, t.description || t.url),
                )
              : null;
          }
        };
        $a = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], $a);
        class Pa extends e.PureComponent {
          constructor() {
            super(...arguments), (this.state = { collapsed: !0 });
          }
          toggle() {
            this.setState({ collapsed: !this.state.collapsed });
          }
          render() {
            const { values: t, isArrayType: r } = this.props,
              { collapsed: n } = this.state,
              { enumSkipQuotes: o, maxDisplayedEnumValues: i } = this.context;
            if (!t.length) return null;
            const s = this.state.collapsed && i ? t.slice(0, i) : t,
              a = !!i && t.length > i,
              l = i ? (n ? `… ${t.length - i} more` : 'Hide') : '';
            return e.createElement(
              'div',
              null,
              e.createElement(
                ha,
                null,
                r ? _('enumArray') : '',
                ' ',
                1 === t.length ? _('enumSingleValue') : _('enum'),
                ':',
              ),
              ' ',
              s.map((t, r) => {
                const n = o ? String(t) : JSON.stringify(t);
                return e.createElement(e.Fragment, { key: r }, e.createElement(ka, null, n), ' ');
              }),
              a
                ? e.createElement(
                    Ca,
                    {
                      onClick: () => {
                        this.toggle();
                      },
                    },
                    l,
                  )
                : null,
            );
          }
        }
        Pa.contextType = ce;
        const Ca = ee.span`
  color: ${e => e.theme.colors.primary.main};
  vertical-align: middle;
  font-size: 13px;
  line-height: 20px;
  padding: 0 5px;
  cursor: pointer;
`,
          Aa = ee(Os)`
  margin: 2px 0;
`;
        class Ia extends e.PureComponent {
          render() {
            const t = this.props.extensions;
            return e.createElement(ce.Consumer, null, r =>
              e.createElement(
                e.Fragment,
                null,
                r.showExtensions &&
                  Object.keys(t).map(r =>
                    e.createElement(
                      Aa,
                      { key: r },
                      e.createElement(ha, null, ' ', r.substring(2), ': '),
                      ' ',
                      e.createElement(
                        Oa,
                        null,
                        'string' == typeof t[r] ? t[r] : JSON.stringify(t[r]),
                      ),
                    ),
                  ),
              ),
            );
          }
        }
        function Ta({ field: t }) {
          return t.examples
            ? e.createElement(
                e.Fragment,
                null,
                e.createElement(ha, null, ' ', _('examples'), ': '),
                A(t.examples)
                  ? t.examples.map((r, n) => {
                      const o = Xe(t, r),
                        i = t.in ? String(o) : JSON.stringify(o);
                      return e.createElement(
                        e.Fragment,
                        { key: n },
                        e.createElement(ka, null, i),
                        ' ',
                      );
                    })
                  : e.createElement(
                      _a,
                      null,
                      Object.values(t.examples).map((r, n) =>
                        e.createElement(
                          'li',
                          { key: n + r.value },
                          e.createElement(ka, null, Xe(t, r.value)),
                          ' -',
                          ' ',
                          r.summary || r.description,
                        ),
                      ),
                    ),
              )
            : null;
        }
        const _a = ee.ul`
  margin-top: 1em;
  list-style-position: outside;
`;
        class Ra extends e.PureComponent {
          render() {
            return 0 === this.props.constraints.length
              ? null
              : e.createElement(
                  'span',
                  null,
                  ' ',
                  this.props.constraints.map(t => e.createElement(Ea, { key: t }, ' ', t, ' ')),
                );
          }
        }
        const Da = e.memo(function ({ value: t, label: r, raw: n }) {
            if (void 0 === t) return null;
            const o = n ? String(t) : JSON.stringify(t);
            return e.createElement(
              'div',
              null,
              e.createElement(ha, null, ' ', r, ' '),
              ' ',
              e.createElement(ka, null, o),
            );
          }),
          La = 45;
        function za(t) {
          const r = t.schema.pattern,
            { hideSchemaPattern: n } = e.useContext(ce),
            [o, i] = e.useState(!1),
            s = e.useCallback(() => i(!o), [o]);
          return !r || n
            ? null
            : e.createElement(
                e.Fragment,
                null,
                e.createElement(wa, null, o || r.length < La ? r : `${r.substr(0, La)}...`),
                r.length > La &&
                  e.createElement(ja, { onClick: s }, o ? 'Hide pattern' : 'Show pattern'),
              );
        }
        function Na({ schema: t }) {
          const { hideSchemaPattern: r } = e.useContext(ce);
          return t &&
            ('string' !== t.type || t.constraints.length) &&
            (((null == t ? void 0 : t.pattern) && !r) ||
              t.items ||
              t.displayFormat ||
              t.constraints.length)
            ? e.createElement(
                Ma,
                null,
                '[ items',
                t.displayFormat && e.createElement(ga, null, ' <', t.displayFormat, ' >'),
                e.createElement(Ra, { constraints: t.constraints }),
                e.createElement(za, { schema: t }),
                t.items && e.createElement(Na, { schema: t.items }),
                ' ]',
              )
            : null;
        }
        const Ma = ee(ma)`
  margin: 0 5px;
  vertical-align: text-top;
`;
        var qa = Object.defineProperty,
          Fa = Object.getOwnPropertySymbols,
          Ba = Object.prototype.hasOwnProperty,
          Qa = Object.prototype.propertyIsEnumerable,
          Ua = (e, t, r) =>
            t in e
              ? qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Wa = (e, t) => {
            for (var r in t || (t = {})) Ba.call(t, r) && Ua(e, r, t[r]);
            if (Fa) for (var r of Fa(t)) Qa.call(t, r) && Ua(e, r, t[r]);
            return e;
          };
        const Va = (0, ua.observer)(t => {
            const { enumSkipQuotes: r, hideSchemaTitles: n } = e.useContext(ce),
              { showExamples: o, field: i, renderDiscriminatorSwitch: s } = t,
              { schema: a, description: l, deprecated: c, extensions: p, in: u, const: d } = i,
              h = 'array' === a.type,
              m = r || 'header' === u,
              f = e.useMemo(
                () =>
                  !o || (void 0 === i.example && void 0 === i.examples)
                    ? null
                    : void 0 !== i.examples
                    ? e.createElement(Ta, { field: i })
                    : e.createElement(Da, {
                        label: _('example') + ':',
                        value: Xe(i, i.example),
                        raw: Boolean(i.in),
                      }),
                [i, o],
              ),
              y = x(a.default) ? Xe(i, a.default).replace(`${i.name}=`, '') : a.default;
            return e.createElement(
              'div',
              null,
              e.createElement(
                'div',
                null,
                e.createElement(ma, null, a.typePrefix),
                e.createElement(fa, null, a.displayType),
                a.displayFormat && e.createElement(ga, null, ' ', '<', a.displayFormat, '>', ' '),
                a.contentEncoding &&
                  e.createElement(ga, null, ' ', '<', a.contentEncoding, '>', ' '),
                a.contentMediaType &&
                  e.createElement(ga, null, ' ', '<', a.contentMediaType, '>', ' '),
                a.title && !n && e.createElement(ya, null, ' (', a.title, ') '),
                e.createElement(Ra, { constraints: a.constraints }),
                e.createElement(za, { schema: a }),
                a.isCircular && e.createElement(va, null, ' ', _('recursive'), ' '),
                h && a.items && e.createElement(Na, { schema: a.items }),
              ),
              c &&
                e.createElement(
                  'div',
                  null,
                  e.createElement(Ci, { type: 'warning' }, ' ', _('deprecated'), ' '),
                ),
              e.createElement(Da, { raw: m, label: _('default') + ':', value: y }),
              !s && e.createElement(Pa, { isArrayType: h, values: a.enum }),
              ' ',
              f,
              e.createElement(Ia, { extensions: Wa(Wa({}, p), a.extensions) }),
              e.createElement('div', null, e.createElement(Ts, { compact: !0, source: l })),
              a.externalDocs && e.createElement($a, { externalDocs: a.externalDocs, compact: !0 }),
              (s && s(t)) || null,
              (d && e.createElement(Da, { label: _('const') + ':', value: d })) || null,
            );
          }),
          Ha = e.memo(Va);
        var Ja = Object.defineProperty,
          Ya = (Object.getOwnPropertyDescriptor, Object.getOwnPropertySymbols),
          Za = Object.prototype.hasOwnProperty,
          Ga = Object.prototype.propertyIsEnumerable,
          Xa = (e, t, r) =>
            t in e
              ? Ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        let Ka = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.toggle = () => {
                void 0 === this.props.field.expanded && this.props.expandByDefault
                  ? this.props.field.collapse()
                  : this.props.field.toggle();
              }),
              (this.handleKeyPress = e => {
                'Enter' === e.key && (e.preventDefault(), this.toggle());
              });
          }
          render() {
            const { className: t = '', field: r, isLast: n, expandByDefault: o } = this.props,
              { name: i, deprecated: s, required: a, kind: l } = r,
              c = !r.schema.isPrimitive && !r.schema.isCircular,
              p = void 0 === r.expanded ? o : r.expanded,
              u = e.createElement(
                e.Fragment,
                null,
                'additionalProperties' === l && e.createElement(xa, null, 'additional property'),
                'patternProperties' === l && e.createElement(xa, null, 'pattern property'),
                a && e.createElement(ba, null, 'required'),
              ),
              d = c
                ? e.createElement(
                    da,
                    { className: s ? 'deprecated' : '', kind: l, title: i },
                    e.createElement(Li, null),
                    e.createElement(
                      'button',
                      {
                        onClick: this.toggle,
                        onKeyPress: this.handleKeyPress,
                        'aria-label': `expand ${i}`,
                      },
                      e.createElement('span', { className: 'property-name' }, i),
                      e.createElement(Pi, { direction: p ? 'down' : 'right' }),
                    ),
                    u,
                  )
                : e.createElement(
                    Ri,
                    { className: s ? 'deprecated' : void 0, kind: l, title: i },
                    e.createElement(Li, null),
                    e.createElement('span', { className: 'property-name' }, i),
                    u,
                  );
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                'tr',
                { className: n ? 'last ' + t : t },
                d,
                e.createElement(
                  Di,
                  null,
                  e.createElement(
                    Ha,
                    ((e, t) => {
                      for (var r in t || (t = {})) Za.call(t, r) && Xa(e, r, t[r]);
                      if (Ya) for (var r of Ya(t)) Ga.call(t, r) && Xa(e, r, t[r]);
                      return e;
                    })({}, this.props),
                  ),
                ),
              ),
              p &&
                c &&
                e.createElement(
                  'tr',
                  { key: r.name + 'inner' },
                  e.createElement(
                    _i,
                    { colSpan: 2 },
                    e.createElement(
                      zi,
                      null,
                      e.createElement(Rl, {
                        schema: r.schema,
                        skipReadOnly: this.props.skipReadOnly,
                        skipWriteOnly: this.props.skipWriteOnly,
                        showTitle: this.props.showTitle,
                        level: this.props.level,
                      }),
                    ),
                  ),
                ),
            );
          }
        };
        Ka = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Ka);
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let el = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.changeActiveChild = e => {
                void 0 !== e.idx && this.props.parent.activateOneOf(e.idx);
              });
          }
          sortOptions(e, t) {
            if (0 === t.length) return;
            const r = {};
            t.forEach((e, t) => {
              r[e] = t;
            }),
              e.sort((e, t) => (r[e.value] > r[t.value] ? 1 : -1));
          }
          render() {
            const { parent: t, enumValues: r } = this.props;
            if (void 0 === t.oneOf) return null;
            const n = t.oneOf.map((e, t) => ({ value: e.title, idx: t })),
              o = n[t.activeOneOf].value;
            return (
              this.sortOptions(n, r),
              e.createElement(us, {
                value: o,
                options: n,
                onChange: this.changeActiveChild,
                ariaLabel: 'Example',
              })
            );
          }
        };
        el = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], el);
        const tl = (0, ua.observer)(
          ({
            schema: { fields: t = [], title: r },
            showTitle: n,
            discriminator: o,
            skipReadOnly: i,
            skipWriteOnly: s,
            level: a,
          }) => {
            const {
                expandSingleSchemaField: l,
                showObjectSchemaExamples: c,
                schemaExpansionLevel: p,
              } = e.useContext(ce),
              u = e.useMemo(
                () =>
                  i || s
                    ? t.filter(e => !((i && e.schema.readOnly) || (s && e.schema.writeOnly)))
                    : t,
                [i, s, t],
              ),
              h = (l && 1 === u.length) || p >= a;
            return e.createElement(
              Ni,
              null,
              n && e.createElement(Ii, null, r),
              e.createElement(
                'tbody',
                null,
                d(u, (t, r) =>
                  e.createElement(Ka, {
                    key: t.name,
                    isLast: r,
                    field: t,
                    expandByDefault: h,
                    renderDiscriminatorSwitch:
                      (null == o ? void 0 : o.fieldName) === t.name
                        ? () =>
                            e.createElement(el, {
                              parent: o.parentSchema,
                              enumValues: t.schema.enum,
                            })
                        : void 0,
                    className: t.expanded ? 'expanded' : void 0,
                    showExamples: c,
                    skipReadOnly: i,
                    skipWriteOnly: s,
                    showTitle: n,
                    level: a,
                  }),
                ),
              ),
            );
          },
        );
        var rl = Object.defineProperty,
          nl = Object.defineProperties,
          ol = Object.getOwnPropertyDescriptors,
          il = Object.getOwnPropertySymbols,
          sl = Object.prototype.hasOwnProperty,
          al = Object.prototype.propertyIsEnumerable,
          ll = (e, t, r) =>
            t in e
              ? rl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          cl = (e, t) => {
            for (var r in t || (t = {})) sl.call(t, r) && ll(e, r, t[r]);
            if (il) for (var r of il(t)) al.call(t, r) && ll(e, r, t[r]);
            return e;
          },
          pl = (e, t) => nl(e, ol(t));
        const ul = ee.div`
  padding-left: ${({ theme: e }) => 2 * e.spacing.unit}px;
`;
        class dl extends e.PureComponent {
          render() {
            const t = this.props.schema,
              r = t.items,
              n = void 0 === t.minItems && void 0 === t.maxItems ? '' : `(${it(t)})`;
            return t.fields
              ? e.createElement(tl, pl(cl({}, this.props), { level: this.props.level }))
              : !t.displayType || r || n.length
              ? e.createElement(
                  'div',
                  null,
                  e.createElement(Bi, null, ' Array ', n),
                  e.createElement(
                    ul,
                    null,
                    e.createElement(Rl, pl(cl({}, this.props), { schema: r })),
                  ),
                  e.createElement(Qi, null),
                )
              : e.createElement('div', null, e.createElement(fa, null, t.displayType));
          }
        }
        var hl = Object.defineProperty,
          ml = Object.defineProperties,
          fl = Object.getOwnPropertyDescriptor,
          yl = Object.getOwnPropertyDescriptors,
          gl = Object.getOwnPropertySymbols,
          bl = Object.prototype.hasOwnProperty,
          xl = Object.prototype.propertyIsEnumerable,
          vl = (e, t, r) =>
            t in e
              ? hl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          wl = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? fl(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && hl(t, r, i), i;
          };
        let kl = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.activateOneOf = () => {
                this.props.schema.activateOneOf(this.props.idx);
              });
          }
          render() {
            const { idx: t, schema: r, subSchema: n } = this.props;
            return e.createElement(
              Fi,
              {
                deprecated: n.deprecated,
                active: t === r.activeOneOf,
                onClick: this.activateOneOf,
              },
              n.title || n.typePrefix + n.displayType,
            );
          }
        };
        kl = wl([ua.observer], kl);
        let Ol = class extends e.Component {
          render() {
            const {
              schema: { oneOf: t },
              schema: r,
            } = this.props;
            if (void 0 === t) return null;
            const n = t[r.activeOneOf];
            return e.createElement(
              'div',
              null,
              e.createElement(qi, null, ' ', r.oneOfType, ' '),
              e.createElement(
                Mi,
                null,
                t.map((t, n) =>
                  e.createElement(kl, { key: t.pointer, schema: r, subSchema: t, idx: n }),
                ),
              ),
              e.createElement(
                'div',
                null,
                t[r.activeOneOf].deprecated &&
                  e.createElement(Ci, { type: 'warning' }, 'Deprecated'),
              ),
              e.createElement(Ra, { constraints: n.constraints }),
              e.createElement(
                Rl,
                ((o = ((e, t) => {
                  for (var r in t || (t = {})) bl.call(t, r) && vl(e, r, t[r]);
                  if (gl) for (var r of gl(t)) xl.call(t, r) && vl(e, r, t[r]);
                  return e;
                })({}, this.props)),
                ml(o, yl({ schema: n }))),
              ),
            );
            var o;
          }
        };
        Ol = wl([ua.observer], Ol);
        const El = (0, ua.observer)(({ schema: t }) =>
          e.createElement(
            'div',
            null,
            e.createElement(fa, null, t.displayType),
            t.title && e.createElement(ya, null, ' ', t.title, ' '),
            e.createElement(va, null, ' ', _('recursive'), ' '),
          ),
        );
        var jl = Object.defineProperty,
          Sl = Object.defineProperties,
          $l = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyDescriptors),
          Pl = Object.getOwnPropertySymbols,
          Cl = Object.prototype.hasOwnProperty,
          Al = Object.prototype.propertyIsEnumerable,
          Il = (e, t, r) =>
            t in e
              ? jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Tl = (e, t) => {
            for (var r in t || (t = {})) Cl.call(t, r) && Il(e, r, t[r]);
            if (Pl) for (var r of Pl(t)) Al.call(t, r) && Il(e, r, t[r]);
            return e;
          },
          _l = (e, t) => Sl(e, $l(t));
        let Rl = class extends e.Component {
          render() {
            var t;
            const r = this.props,
              { schema: n } = r,
              o = ((e, t) => {
                var r = {};
                for (var n in e) Cl.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && Pl)
                  for (var n of Pl(e)) t.indexOf(n) < 0 && Al.call(e, n) && (r[n] = e[n]);
                return r;
              })(r, ['schema']),
              i = (o.level || 0) + 1;
            if (!n) return e.createElement('em', null, ' Schema not provided ');
            const { type: s, oneOf: a, discriminatorProp: l, isCircular: c } = n;
            if (c) return e.createElement(El, { schema: n });
            if (void 0 !== l) {
              if (!a || !a.length)
                return (
                  console.warn(
                    `Looks like you are using discriminator wrong: you don't have any definition inherited from the ${n.title}`,
                  ),
                  null
                );
              const t = a[n.activeOneOf];
              return t.isCircular
                ? e.createElement(El, { schema: t })
                : e.createElement(
                    tl,
                    _l(Tl({}, o), {
                      level: i,
                      schema: t,
                      discriminator: { fieldName: l, parentSchema: n },
                    }),
                  );
            }
            if (void 0 !== a) return e.createElement(Ol, Tl({ schema: n }, o));
            const p = A(s) ? s : [s];
            if (p.includes('object')) {
              if (null == (t = n.fields) ? void 0 : t.length)
                return e.createElement(tl, _l(Tl({}, this.props), { level: i }));
            } else if (p.includes('array'))
              return e.createElement(dl, _l(Tl({}, this.props), { level: i }));
            const u = {
              schema: n,
              name: '',
              required: !1,
              description: n.description,
              externalDocs: n.externalDocs,
              deprecated: !1,
              toggle: () => null,
              expanded: !1,
            };
            return e.createElement('div', null, e.createElement(Ha, { field: u }));
          }
        };
        Rl = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Rl);
        var Dl = Object.defineProperty,
          Ll = Object.defineProperties,
          zl = Object.getOwnPropertyDescriptors,
          Nl = Object.getOwnPropertySymbols,
          Ml = Object.prototype.hasOwnProperty,
          ql = Object.prototype.propertyIsEnumerable,
          Fl = (e, t, r) =>
            t in e
              ? Dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        class Bl extends e.PureComponent {
          constructor() {
            super(...arguments),
              (this.renderDropdown = t => {
                return e.createElement(
                  vs,
                  ((r = ((e, t) => {
                    for (var r in t || (t = {})) Ml.call(t, r) && Fl(e, r, t[r]);
                    if (Nl) for (var r of Nl(t)) ql.call(t, r) && Fl(e, r, t[r]);
                    return e;
                  })({ Label: hs, Dropdown: aa }, t)),
                  Ll(r, zl({ variant: 'dark' }))),
                );
                var r;
              });
          }
          static getMediaType(e, t) {
            if (!e) return {};
            const r = { schema: { $ref: e } };
            return t && (r.examples = { example: { $ref: t } }), r;
          }
          get mediaModel() {
            const { parser: e, schemaRef: t, exampleRef: r, options: n } = this.props;
            return (
              this._mediaModel ||
                (this._mediaModel = new Yn(e, 'json', !1, Bl.getMediaType(t, r), n)),
              this._mediaModel
            );
          }
          render() {
            const { showReadOnly: t = !0, showWriteOnly: r = !1, showExample: n = !0 } = this.props;
            return e.createElement(
              li,
              null,
              e.createElement(
                ui,
                null,
                e.createElement(
                  ai,
                  null,
                  e.createElement(Rl, {
                    skipWriteOnly: !r,
                    skipReadOnly: !t,
                    schema: this.mediaModel.schema,
                  }),
                ),
                n &&
                  e.createElement(
                    pi,
                    null,
                    e.createElement(
                      Ql,
                      null,
                      e.createElement(ca, {
                        renderDropdown: this.renderDropdown,
                        mediaType: this.mediaModel,
                      }),
                    ),
                  ),
              ),
            );
          }
        }
        const Ql = ee.div`
  background: ${({ theme: e }) => e.codeBlock.backgroundColor};
  & > div,
  & > pre {
    padding: ${e => 4 * e.theme.spacing.unit}px;
    margin: 0;
  }

  & > div > pre {
    padding: 0;
  }
`,
          Ul =
            (H().div`
  background-color: #e4e7eb;
`,
            H().ul`
  display: inline;
  list-style: none;
  padding: 0;

  li {
    display: inherit;

    &:after {
      content: ',';
    }
    &:last-child:after {
      content: none;
    }
  }
`,
            H().code`
  font-size: ${e => e.theme.typography.code.fontSize};
  font-family: ${e => e.theme.typography.code.fontFamily};
  margin: 0 3px;
  padding: 0.2em;
  display: inline-block;
  line-height: 1;

  &:after {
    content: ',';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }
`),
          Wl = H().span`
  &:after {
    content: ' and ';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }

  ${ks};
`,
          Vl = H().span`
  ${e => !e.expanded && 'white-space: nowrap;'}
  &:after {
    content: ' or ';
    ${e => e.expanded && "content: ' or \\a';"}
    white-space: pre;
  }

  &:last-child:after,
  &:only-child:after {
    content: none;
  }

  ${ks};
`,
          Hl = H().div`
  flex: 1 1 auto;
  cursor: pointer;
`,
          Jl = H().div`
  width: ${e => e.theme.schema.defaultDetailsWidth};
  text-overflow: ellipsis;
  border-radius: 4px;
  overflow: hidden;
  ${e =>
    e.expanded &&
    `background: ${e.theme.colors.gray[100]};\n     padding: 8px 9.6px;\n     margin: 20px 0;\n     width: 100%;\n    `};
  ${K.lessThan('small')`
    margin-top: 10px;
  `}
`,
          Yl = H()(gi)`
  display: inline-block;
  margin: 0;
`,
          Zl = H().div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: ${e => (e.expanded ? 'column' : 'row')};
  ${K.lessThan('small')`
    flex-direction: column;
  `}
`,
          Gl = H().div`
  margin: 0.5em 0;
`,
          Xl = H().div`
  border-bottom: 1px solid ${({ theme: e }) => e.colors.border.dark};
  margin-bottom: 1.5em;
  padding-bottom: 0.7em;

  h5 {
    line-height: 1em;
    margin: 0 0 0.6em;
    font-size: ${({ theme: e }) => e.typography.fontSize};
  }

  .redoc-markdown p:first-child {
    display: inline;
  }
`;
        function Kl({ children: t, height: r }) {
          const n = e.createRef(),
            [o, i] = e.useState(!1),
            [s, a] = e.useState(!1);
          return (
            e.useEffect(() => {
              n.current && n.current.clientHeight + 20 < n.current.scrollHeight && a(!0);
            }, [n]),
            e.createElement(
              e.Fragment,
              null,
              e.createElement(
                ec,
                { ref: n, className: o ? '' : 'container', style: { height: o ? 'auto' : r } },
                t,
              ),
              e.createElement(
                tc,
                { dimmed: !o },
                s &&
                  e.createElement(
                    rc,
                    {
                      onClick: () => {
                        i(!o);
                      },
                    },
                    o ? 'See less' : 'See more',
                  ),
              ),
            )
          );
        }
        const ec = H().div`
  overflow-y: hidden;
`,
          tc = H().div`
  text-align: center;
  line-height: 1.5em;
  ${({ dimmed: e }) =>
    e &&
    'background-image: linear-gradient(to bottom, transparent,rgb(255 255 255));\n     position: relative;\n     top: -0.5em;\n     padding-top: 0.5em;\n     background-position-y: -1em;\n    '}
`,
          rc = H().a`
  cursor: pointer;
`,
          nc = e.memo(function (t) {
            const { type: r, flow: n, RequiredScopes: o } = t,
              i = Object.keys((null == n ? void 0 : n.scopes) || {});
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                Gl,
                null,
                e.createElement('b', null, 'Flow type: '),
                e.createElement('code', null, r, ' '),
              ),
              ('implicit' === r || 'authorizationCode' === r) &&
                e.createElement(
                  Gl,
                  null,
                  e.createElement('strong', null, ' Authorization URL: '),
                  e.createElement(
                    'code',
                    null,
                    e.createElement(
                      'a',
                      { target: '_blank', rel: 'noopener noreferrer', href: n.authorizationUrl },
                      n.authorizationUrl,
                    ),
                  ),
                ),
              ('password' === r || 'clientCredentials' === r || 'authorizationCode' === r) &&
                e.createElement(
                  Gl,
                  null,
                  e.createElement('b', null, ' Token URL: '),
                  e.createElement('code', null, n.tokenUrl),
                ),
              n.refreshUrl &&
                e.createElement(
                  Gl,
                  null,
                  e.createElement('strong', null, ' Refresh URL: '),
                  n.refreshUrl,
                ),
              !!i.length &&
                e.createElement(
                  e.Fragment,
                  null,
                  o || null,
                  e.createElement(Gl, null, e.createElement('b', null, ' Scopes: ')),
                  e.createElement(
                    Kl,
                    { height: '4em' },
                    e.createElement(
                      'ul',
                      null,
                      i.map(t =>
                        e.createElement(
                          'li',
                          { key: t },
                          e.createElement('code', null, t),
                          ' -',
                          ' ',
                          e.createElement(Ts, {
                            className: 'redoc-markdown',
                            inline: !0,
                            source: n.scopes[t] || '',
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          });
        function oc(t) {
          const { RequiredScopes: r, scheme: n } = t;
          return e.createElement(
            Os,
            null,
            n.apiKey
              ? e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    Gl,
                    null,
                    e.createElement('b', null, j(n.apiKey.in || ''), ' parameter name: '),
                    e.createElement('code', null, n.apiKey.name),
                  ),
                  r,
                )
              : n.http
              ? e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    Gl,
                    null,
                    e.createElement('b', null, 'HTTP Authorization Scheme: '),
                    e.createElement('code', null, n.http.scheme),
                  ),
                  e.createElement(
                    Gl,
                    null,
                    'bearer' === n.http.scheme &&
                      n.http.bearerFormat &&
                      e.createElement(
                        e.Fragment,
                        null,
                        e.createElement('b', null, 'Bearer format: '),
                        e.createElement('code', null, n.http.bearerFormat),
                      ),
                  ),
                  r,
                )
              : n.openId
              ? e.createElement(
                  e.Fragment,
                  null,
                  e.createElement(
                    Gl,
                    null,
                    e.createElement('b', null, 'Connect URL: '),
                    e.createElement(
                      'code',
                      null,
                      e.createElement(
                        'a',
                        { target: '_blank', rel: 'noopener noreferrer', href: n.openId.connectUrl },
                        n.openId.connectUrl,
                      ),
                    ),
                  ),
                  r,
                )
              : n.flows
              ? Object.keys(n.flows).map(t =>
                  e.createElement(nc, { key: t, type: t, RequiredScopes: r, flow: n.flows[t] }),
                )
              : null,
          );
        }
        const ic = {
          oauth2: 'OAuth2',
          apiKey: 'API Key',
          http: 'HTTP',
          openIdConnect: 'OpenID Connect',
        };
        class sc extends e.PureComponent {
          render() {
            return this.props.securitySchemes.schemes.map(t =>
              e.createElement(
                li,
                { id: t.sectionId, key: t.id },
                e.createElement(
                  ui,
                  null,
                  e.createElement(
                    ai,
                    null,
                    e.createElement(
                      fi,
                      null,
                      e.createElement(Si, { to: t.sectionId }),
                      t.displayName,
                    ),
                    e.createElement(Ts, { source: t.description || '' }),
                    e.createElement(
                      Xl,
                      null,
                      e.createElement(
                        Gl,
                        null,
                        e.createElement('b', null, 'Security Scheme Type: '),
                        e.createElement('span', null, ic[t.type] || t.type),
                      ),
                      e.createElement(oc, { scheme: t }),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        var ac = (e, t, r) =>
          new Promise((n, o) => {
            var i = e => {
                try {
                  a(r.next(e));
                } catch (e) {
                  o(e);
                }
              },
              s = e => {
                try {
                  a(r.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              a = e => (e.done ? n(e.value) : Promise.resolve(e.value).then(i, s));
            a((r = r.apply(e, t)).next());
          });
        function lc(e, t) {
          return ac(this, arguments, function* (e, t, r = {}) {
            const n = yield ge(e || t);
            return new cc(n, t, r);
          });
        }
        class cc {
          constructor(e, t, r = {}, n = !0) {
            (this.marker = new Ht()),
              (this.disposer = null),
              (this.rawOptions = r),
              (this.options = new W(r, pc)),
              (this.scroll = new ii(this.options)),
              ti.updateOnHistory(Wt.currentId, this.scroll),
              (this.spec = new Do(e, t, this.options)),
              (this.menu = new ti(this.spec, this.scroll, Wt)),
              this.options.disableSearch ||
                ((this.search = new si()),
                n && this.search.indexItems(this.menu.items),
                (this.disposer = (0, de.observe)(this.menu, 'activeItemIdx', e => {
                  this.updateMarkOnMenu(e.newValue);
                })));
          }
          static fromJS(e) {
            const t = new cc(e.spec.data, e.spec.url, e.options, !1);
            return (
              (t.menu.activeItemIdx = e.menu.activeItemIdx || 0),
              t.menu.activate(t.menu.flatItems[t.menu.activeItemIdx]),
              t.options.disableSearch || t.search.load(e.searchIndex),
              t
            );
          }
          onDidMount() {
            this.menu.updateOnHistory(), this.updateMarkOnMenu(this.menu.activeItemIdx);
          }
          dispose() {
            this.scroll.dispose(),
              this.menu.dispose(),
              this.search && this.search.dispose(),
              null != this.disposer && this.disposer();
          }
          toJS() {
            return ac(this, null, function* () {
              return {
                menu: { activeItemIdx: this.menu.activeItemIdx },
                spec: { url: this.spec.parser.specUrl, data: this.spec.parser.spec },
                searchIndex: this.search ? yield this.search.toJS() : void 0,
                options: this.rawOptions,
              };
            });
          }
          updateMarkOnMenu(e) {
            const t = Math.max(0, e),
              r = Math.min(this.menu.flatItems.length, t + 5),
              n = [];
            for (let e = t; e < r; e++) {
              const t = this.menu.getElementAt(e);
              t && n.push(t);
            }
            if (-1 === e && s) {
              const e = document.querySelector('[data-role="redoc-description"]'),
                t = document.querySelector('[data-role="redoc-summary"]');
              e && n.push(e), t && n.push(t);
            }
            this.marker.addOnly(n), this.marker.mark();
          }
        }
        const pc = {
            allowedMdComponents: {
              [dt]: {
                component: sc,
                propsSelector: e => ({ securitySchemes: e.spec.securitySchemes }),
              },
              [ht]: {
                component: sc,
                propsSelector: e => ({ securitySchemes: e.spec.securitySchemes }),
              },
              [mt]: {
                component: Bl,
                propsSelector: e => ({ parser: e.spec.parser, options: e.options }),
              },
            },
          },
          uc = ee(mi)`
  margin-top: 0;
  margin-bottom: 0.5em;

  ${te('ApiHeader')};
`,
          dc = ee.a`
  border: 1px solid ${e => e.theme.colors.primary.main};
  color: ${e => e.theme.colors.primary.main};
  font-weight: normal;
  margin-left: 0.5em;
  padding: 4px 8px 4px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  ${te('DownloadButton')};
`,
          hc = ee.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${15}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`,
          mc = ee.div`
  overflow: hidden;
`,
          fc = ee.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${15}px;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let yc = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.handleDownloadClick = e => {
                e.target.href || (e.target.href = this.props.store.spec.info.downloadLink);
              });
          }
          render() {
            const { store: t } = this.props,
              { info: r, externalDocs: n } = t.spec,
              o = t.options.hideDownloadButton,
              i = r.downloadFileName,
              s = r.downloadLink,
              a =
                (r.license &&
                  e.createElement(
                    hc,
                    null,
                    'License:',
                    ' ',
                    r.license.identifier
                      ? r.license.identifier
                      : e.createElement('a', { href: r.license.url }, r.license.name),
                  )) ||
                null,
              l =
                (r.contact &&
                  r.contact.url &&
                  e.createElement(
                    hc,
                    null,
                    'URL: ',
                    e.createElement('a', { href: r.contact.url }, r.contact.url),
                  )) ||
                null,
              c =
                (r.contact &&
                  r.contact.email &&
                  e.createElement(
                    hc,
                    null,
                    r.contact.name || 'E-mail',
                    ':',
                    ' ',
                    e.createElement('a', { href: 'mailto:' + r.contact.email }, r.contact.email),
                  )) ||
                null,
              p =
                (r.termsOfService &&
                  e.createElement(
                    hc,
                    null,
                    e.createElement('a', { href: r.termsOfService }, 'Terms of Service'),
                  )) ||
                null,
              u = (r.version && e.createElement('span', null, '(', r.version, ')')) || null;
            return e.createElement(
              li,
              null,
              e.createElement(
                ui,
                null,
                e.createElement(
                  ai,
                  { className: 'api-info' },
                  e.createElement(uc, null, r.title, ' ', u),
                  !o &&
                    e.createElement(
                      'p',
                      null,
                      _('downloadSpecification'),
                      ':',
                      e.createElement(
                        dc,
                        {
                          download: i || !0,
                          target: '_blank',
                          href: s,
                          onClick: this.handleDownloadClick,
                        },
                        _('download'),
                      ),
                    ),
                  e.createElement(
                    Os,
                    null,
                    ((r.license || r.contact || r.termsOfService) &&
                      e.createElement(
                        mc,
                        null,
                        e.createElement(fc, null, c, ' ', l, ' ', a, ' ', p),
                      )) ||
                      null,
                  ),
                  e.createElement(Ts, {
                    source: t.spec.info.summary,
                    'data-role': 'redoc-summary',
                  }),
                  e.createElement(Ts, {
                    source: t.spec.info.description,
                    'data-role': 'redoc-description',
                  }),
                  n && e.createElement($a, { externalDocs: n }),
                ),
              ),
            );
          }
        };
        yc = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], yc);
        const gc = ee.img`
  max-height: ${e => e.theme.logo.maxHeight};
  max-width: ${e => e.theme.logo.maxWidth};
  padding: ${e => e.theme.logo.gutter};
  width: 100%;
  display: block;
`,
          bc = ee.div`
  text-align: center;
`,
          xc = ee.a`
  display: inline-block;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let vc = class extends e.Component {
          render() {
            const { info: t } = this.props,
              r = t['x-logo'];
            if (!r || !r.url) return null;
            const n = r.href || (t.contact && t.contact.url),
              o = r.altText ? r.altText : 'logo',
              i = e.createElement(gc, { src: r.url, alt: o });
            return e.createElement(
              bc,
              { style: { backgroundColor: r.backgroundColor } },
              n ? ((s = n), t => e.createElement(xc, { href: s }, t))(i) : i,
            );
            var s;
          }
        };
        vc = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], vc);
        var wc = Object.defineProperty,
          kc = Object.getOwnPropertySymbols,
          Oc = Object.prototype.hasOwnProperty,
          Ec = Object.prototype.propertyIsEnumerable,
          jc = (e, t, r) =>
            t in e
              ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          Sc = (e, t) => {
            for (var r in t || (t = {})) Oc.call(t, r) && jc(e, r, t[r]);
            if (kc) for (var r of kc(t)) Ec.call(t, r) && jc(e, r, t[r]);
            return e;
          };
        class $c extends e.Component {
          render() {
            return e.createElement(ue, null, t =>
              e.createElement(wi, null, e => this.renderWithOptionsAndStore(t, e)),
            );
          }
          renderWithOptionsAndStore(t, r) {
            const { source: n, htmlWrap: o = e => e } = this.props;
            if (!r)
              throw new Error('When using components in markdown, store prop must be provided');
            const i = new Ur(t, this.props.parentId).renderMdWithComponents(n);
            return i.length
              ? i.map((t, n) => {
                  if ('string' == typeof t)
                    return e.cloneElement(
                      o(e.createElement(Is, { html: t, inline: !1, compact: !1 })),
                      { key: n },
                    );
                  const i = t.component;
                  return e.createElement(
                    i,
                    Sc({ key: n }, Sc(Sc({}, t.props), t.propsSelector(r))),
                  );
                })
              : null;
          }
        }
        var Pc = require('classnames'),
          Cc = r.n(Pc);
        const Ac = ee.span.attrs(e => ({ className: `operation-type ${e.type}` }))`
  width: 9ex;
  display: inline-block;
  height: ${e => e.theme.typography.code.fontSize};
  line-height: ${e => e.theme.typography.code.fontSize};
  background-color: #333;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana, sans-serif; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  &.get {
    background-color: ${({ theme: e }) => e.colors.http.get};
  }

  &.post {
    background-color: ${({ theme: e }) => e.colors.http.post};
  }

  &.put {
    background-color: ${({ theme: e }) => e.colors.http.put};
  }

  &.options {
    background-color: ${({ theme: e }) => e.colors.http.options};
  }

  &.patch {
    background-color: ${({ theme: e }) => e.colors.http.patch};
  }

  &.delete {
    background-color: ${({ theme: e }) => e.colors.http.delete};
  }

  &.basic {
    background-color: ${({ theme: e }) => e.colors.http.basic};
  }

  &.link {
    background-color: ${({ theme: e }) => e.colors.http.link};
  }

  &.head {
    background-color: ${({ theme: e }) => e.colors.http.head};
  }

  &.hook {
    background-color: ${({ theme: e }) => e.colors.primary.main};
  }

  &.schema {
    background-color: ${({ theme: e }) => e.colors.http.basic};
  }

  &.publish {
    background-color: ${({ theme: e }) => e.colors.http.publish};
  }

  &.subscribe {
    background-color: ${({ theme: e }) => e.colors.http.subscribe};
  }
`;
        function Ic(e, { theme: t }, r) {
          return e > 1 ? t.sidebar.level1Items[r] : 1 === e ? t.sidebar.groupItems[r] : '';
        }
        const Tc = ee.ul`
  margin: 0;
  padding: 0;

  &:first-child {
    padding-bottom: 32px;
  }

  & & {
    font-size: 0.929em;
  }

  ${e => (e.expanded ? '' : 'display: none;')};
`,
          _c = ee.li`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${e => (0 === e.depth ? 'margin-top: 15px' : '')};
`,
          Rc = {
            0: Y`
    opacity: 0.7;
    text-transform: ${({ theme: e }) => e.sidebar.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
  `,
            1: Y`
    font-size: 0.929em;
    text-transform: ${({ theme: e }) => e.sidebar.level1Items.textTransform};
  `,
          },
          Dc = ee.label.attrs(e => ({ className: Cc()('-depth' + e.depth, { active: e.active }) }))`
  cursor: pointer;
  color: ${e => (e.active ? Ic(e.depth, e, 'activeTextColor') : e.theme.sidebar.textColor)};
  margin: 0;
  padding: 12.5px ${e => 4 * e.theme.spacing.unit}px;
  ${({ depth: e, type: t, theme: r }) =>
    ('section' === t && e > 1 && 'padding-left: ' + 8 * r.spacing.unit + 'px;') || ''}
  display: flex;
  justify-content: space-between;
  font-family: ${e => e.theme.typography.headings.fontFamily};
  ${e => Rc[e.depth]};
  background-color: ${e =>
    e.active ? Ic(e.depth, e, 'activeBackgroundColor') : e.theme.sidebar.backgroundColor};

  ${e => (e.deprecated && Ai) || ''};

  &:hover {
    color: ${e => Ic(e.depth, e, 'activeTextColor')};
    background-color: ${e => Ic(e.depth, e, 'activeBackgroundColor')};
  }

  ${Pi} {
    height: ${({ theme: e }) => e.sidebar.arrow.size};
    width: ${({ theme: e }) => e.sidebar.arrow.size};
    polygon {
      fill: ${({ theme: e }) => e.sidebar.arrow.color};
    }
  }
`,
          Lc = ee.span`
  display: inline-block;
  vertical-align: middle;
  width: ${e => (e.width ? e.width : 'auto')};
  overflow: hidden;
  text-overflow: ellipsis;
`,
          zc = ee.div`
  ${({ theme: e }) => Y`
    font-size: 0.8em;
    margin-top: ${2 * e.spacing.unit}px;
    text-align: center;
    position: fixed;
    width: ${e.sidebar.width};
    bottom: 0;
    background: ${e.sidebar.backgroundColor};

    a,
    a:visited,
    a:hover {
      color: ${e.sidebar.textColor} !important;
      padding: ${e.spacing.unit}px 0;
      border-top: 1px solid ${(0, t.darken)(0.1, e.sidebar.backgroundColor)};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};
  img {
    width: 15px;
    margin-right: 5px;
  }

  ${K.lessThan('small')`
    width: 100%;
  `};
`,
          Nc = ee.button`
  border: 0;
  width: 100%;
  text-align: left;
  & > * {
    vertical-align: middle;
  }

  ${Pi} {
    polygon {
      fill: ${({ theme: e }) => (0, t.darken)(e.colors.tonalOffset, e.colors.gray[100])};
    }
  }
`,
          Mc = ee.span`
  text-decoration: ${e => (e.deprecated ? 'line-through' : 'none')};
  margin-right: 8px;
`,
          qc = ee(Ac)`
  margin: 0 5px 0 0;
`,
          Fc = ee(t => {
            const { name: r, opened: n, className: o, onClick: i, httpVerb: s, deprecated: a } = t;
            return e.createElement(
              Nc,
              { className: o, onClick: i || void 0 },
              e.createElement(qc, { type: s }, gt(s)),
              e.createElement(Pi, {
                size: '1.5em',
                direction: n ? 'down' : 'right',
                float: 'left',
              }),
              e.createElement(Mc, { deprecated: a }, r),
              a ? e.createElement(Ci, { type: 'warning' }, ' ', _('deprecated'), ' ') : null,
            );
          })`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: ${({ theme: e }) => e.colors.gray[100]};
  cursor: pointer;
  outline-color: ${({ theme: e }) => (0, t.darken)(e.colors.tonalOffset, e.colors.gray[100])};
`,
          Bc = ee.div`
  padding: 10px 25px;
  background-color: ${({ theme: e }) => e.colors.gray[50]};
  margin-bottom: 5px;
  margin-top: 5px;
`;
        class Qc extends e.PureComponent {
          constructor() {
            super(...arguments),
              (this.selectElement = () => {
                qs.selectElement(this.child);
              });
          }
          render() {
            const { children: t } = this.props;
            return e.createElement(
              'div',
              {
                ref: e => (this.child = e),
                onClick: this.selectElement,
                onFocus: this.selectElement,
                tabIndex: 0,
                role: 'button',
              },
              t,
            );
          }
        }
        const Uc = ee.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`,
          Wc = ee.span`
  font-family: ${e => e.theme.typography.code.fontFamily};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,
          Vc = ee.button`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${e => (e.inverted ? '10px' : '20px')};
  border-radius: ${e => (e.inverted ? '0' : '4px 4px 0 0')};
  background-color: ${e => (e.inverted ? 'transparent' : e.theme.codeBlock.backgroundColor)};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${e => (e.inverted ? '0' : '1px solid transparent')};
  border-bottom: ${e => (e.inverted ? '1px solid #ccc' : '0')};
  transition: border-color 0.25s ease;

  ${e => (e.expanded && !e.inverted && `border-color: ${e.theme.colors.border.dark};`) || ''}

  .${Wc} {
    color: ${e => (e.inverted ? e.theme.colors.text.primary : '#ffffff')};
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`,
          Hc = ee.span.attrs(e => ({ className: `http-verb ${e.type}` }))`
  font-size: ${e => (e.compact ? '0.8em' : '0.929em')};
  line-height: ${e => (e.compact ? '18px' : '20px')};
  background-color: ${e => e.theme.colors.http[e.type] || '#999999'};
  color: #ffffff;
  padding: ${e => (e.compact ? '2px 8px' : '3px 10px')};
  text-transform: uppercase;
  font-family: ${e => e.theme.typography.headings.fontFamily};
  margin: 0;
`,
          Jc = ee.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${e => e.theme.rightPanel.servers.overlay.backgroundColor};
  color: ${e => e.theme.rightPanel.servers.overlay.textColor};
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${e => (e.expanded ? 'visibility: visible;' : 'transform: translateY(-50%) scaleY(0);')}
`,
          Yc = ee.div`
  padding: 10px;
`,
          Zc = ee.div`
  padding: 5px;
  border: 1px solid #ccc;
  background: ${e => e.theme.rightPanel.servers.url.backgroundColor};
  word-break: break-all;
  color: ${e => e.theme.colors.primary.main};
  > span {
    color: ${e => e.theme.colors.text.primary};
  }
`;
        class Gc extends e.Component {
          constructor(e) {
            super(e),
              (this.toggle = () => {
                this.setState({ expanded: !this.state.expanded });
              }),
              (this.state = { expanded: !1 });
          }
          render() {
            const { operation: t, inverted: r, hideHostname: n } = this.props,
              { expanded: o } = this.state;
            return e.createElement(ce.Consumer, null, i =>
              e.createElement(
                Uc,
                null,
                e.createElement(
                  Vc,
                  { onClick: this.toggle, expanded: o, inverted: r },
                  e.createElement(
                    Hc,
                    { type: t.httpVerb, compact: this.props.compact },
                    t.httpVerb,
                  ),
                  e.createElement(Wc, null, t.path),
                  e.createElement(Pi, {
                    float: 'right',
                    color: r ? 'black' : 'white',
                    size: '20px',
                    direction: o ? 'up' : 'down',
                    style: { marginRight: '-25px' },
                  }),
                ),
                e.createElement(
                  Jc,
                  { expanded: o, 'aria-hidden': !o },
                  t.servers.map(r => {
                    const o = i.expandDefaultServerVariables ? pt(r.url, r.variables) : r.url,
                      s = E(o);
                    return e.createElement(
                      Yc,
                      { key: o },
                      e.createElement(Ts, { source: r.description || '', compact: !0 }),
                      e.createElement(
                        Qc,
                        null,
                        e.createElement(
                          Zc,
                          null,
                          e.createElement(
                            'span',
                            null,
                            n || i.hideHostname ? ('/' === s ? '' : s) : o,
                          ),
                          t.path,
                        ),
                      ),
                    );
                  }),
                ),
              ),
            );
          }
        }
        class Xc extends e.PureComponent {
          render() {
            const { place: t, parameters: r } = this.props;
            return r && r.length
              ? e.createElement(
                  'div',
                  { key: t },
                  e.createElement(gi, null, t, ' Parameters'),
                  e.createElement(
                    Ni,
                    null,
                    e.createElement(
                      'tbody',
                      null,
                      d(r, (t, r) =>
                        e.createElement(Ka, { key: t.name, isLast: r, field: t, showExamples: !0 }),
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let Kc = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.switchMedia = ({ idx: e }) => {
                this.props.content && void 0 !== e && this.props.content.activate(e);
              });
          }
          render() {
            const { content: t } = this.props;
            if (!t || !t.mediaTypes || !t.mediaTypes.length) return null;
            const r = t.activeMimeIdx,
              n = t.mediaTypes.map((e, t) => ({ value: e.name, idx: t })),
              o = ({ children: t }) =>
                this.props.withLabel
                  ? e.createElement(sa, null, e.createElement(ia, null, 'Content type'), t)
                  : t;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                o,
                null,
                this.props.renderDropdown({
                  value: n[r].value,
                  options: n,
                  onChange: this.switchMedia,
                  ariaLabel: 'Content type',
                }),
              ),
              this.props.children(t.active),
            );
          }
        };
        Kc = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Kc);
        var ep = Object.defineProperty,
          tp = Object.defineProperties,
          rp = Object.getOwnPropertyDescriptors,
          np = Object.getOwnPropertySymbols,
          op = Object.prototype.hasOwnProperty,
          ip = Object.prototype.propertyIsEnumerable,
          sp = (e, t, r) =>
            t in e
              ? ep(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          ap = (e, t) => {
            for (var r in t || (t = {})) op.call(t, r) && sp(e, r, t[r]);
            if (np) for (var r of np(t)) ip.call(t, r) && sp(e, r, t[r]);
            return e;
          },
          lp = (e, t) => tp(e, rp(t)),
          cp = (e, t) => {
            var r = {};
            for (var n in e) op.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && np)
              for (var n of np(e)) t.indexOf(n) < 0 && ip.call(e, n) && (r[n] = e[n]);
            return r;
          };
        const pp = ['path', 'query', 'cookie', 'header'];
        class up extends e.PureComponent {
          orderParams(e) {
            const t = {};
            return (
              e.forEach(e => {
                var r, n, o;
                (o = e), (r = t)[(n = e.in)] || (r[n] = []), r[n].push(o);
              }),
              t
            );
          }
          render() {
            const { body: t, parameters: r = [] } = this.props;
            if (void 0 === t && void 0 === r) return null;
            const n = this.orderParams(r),
              o = r.length > 0 ? pp : [],
              i = t && t.content,
              s = t && t.description,
              a = t && t.required;
            return e.createElement(
              e.Fragment,
              null,
              o.map(t => e.createElement(Xc, { key: t, place: t, parameters: n[t] })),
              i &&
                e.createElement(hp, {
                  content: i,
                  description: s,
                  bodyRequired: a,
                  isWebhook: this.props.isWebhook,
                }),
            );
          }
        }
        function dp(t) {
          var r = t,
            { bodyRequired: n } = r,
            o = cp(r, ['bodyRequired']);
          const i = 'boolean' == typeof n && !!n,
            s = 'boolean' == typeof n && !n,
            a = o.isWebhook ? 'Payload schema' : 'Request Body schema';
          return e.createElement(
            gi,
            { key: 'header' },
            a,
            ': ',
            e.createElement(vs, ap({}, o)),
            i && e.createElement(fp, null, 'required'),
            s && e.createElement(yp, null, 'optional'),
          );
        }
        function hp(t) {
          const { content: r, description: n, bodyRequired: o, isWebhook: i } = t,
            { isRequestType: s } = r;
          return e.createElement(
            Kc,
            {
              content: r,
              renderDropdown: t =>
                e.createElement(dp, lp(ap({ bodyRequired: o }, t), { isWebhook: i })),
            },
            ({ schema: t }) =>
              e.createElement(
                e.Fragment,
                null,
                void 0 !== n && e.createElement(Ts, { source: n }),
                'object' === (null == t ? void 0 : t.type) &&
                  e.createElement(Ra, { constraints: (null == t ? void 0 : t.constraints) || [] }),
                e.createElement(Rl, {
                  skipReadOnly: s,
                  skipWriteOnly: !s,
                  key: 'schema',
                  schema: t,
                }),
              ),
          );
        }
        const mp = '\n  text-transform: lowercase;\n  margin-left: 0;\n  line-height: 1.5em;\n',
          fp = ee(ba)`
  ${mp}
`,
          yp = ee('div')`
  ${mp}
  color: ${({ theme: e }) => e.colors.text.secondary};
  font-size: ${e => e.theme.schema.labelsTextSize};
`,
          gp = e.memo(function ({
            title: t,
            type: r,
            empty: n,
            code: o,
            opened: i,
            className: s,
            onClick: a,
          }) {
            return e.createElement(
              'button',
              { className: s, onClick: (!n && a) || void 0, 'aria-expanded': i, disabled: n },
              !n &&
                e.createElement(Pi, {
                  size: '1.5em',
                  color: r,
                  direction: i ? 'down' : 'right',
                  float: 'left',
                }),
              e.createElement(wp, null, o, ' '),
              e.createElement(Ts, { compact: !0, inline: !0, source: t }),
            );
          }),
          bp = ee(gp)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${e => e.theme.colors.responses[e.type].color};
  background-color: ${e => e.theme.colors.responses[e.type].backgroundColor};
  &:focus {
    outline: auto ${e => e.theme.colors.responses[e.type].color};
  }
  ${e =>
    e.empty
      ? '\ncursor: default;\n&::before {\n  content: "—";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n}\n&:focus {\n  outline: 0;\n}\n'
      : ''};
`,
          xp = ee.div`
  padding: 10px;
`,
          vp = ee(gi).attrs({ as: 'caption' })`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`,
          wp = ee.strong`
  vertical-align: top;
`;
        class kp extends e.PureComponent {
          render() {
            const { headers: t } = this.props;
            return void 0 === t || 0 === t.length
              ? null
              : e.createElement(
                  Ni,
                  null,
                  e.createElement(vp, null, ' Response Headers '),
                  e.createElement(
                    'tbody',
                    null,
                    d(t, (t, r) =>
                      e.createElement(Ka, { isLast: r, key: t.name, field: t, showExamples: !0 }),
                    ),
                  ),
                );
          }
        }
        var Op = Object.defineProperty,
          Ep = Object.getOwnPropertySymbols,
          jp = Object.prototype.hasOwnProperty,
          Sp = Object.prototype.propertyIsEnumerable,
          $p = (e, t, r) =>
            t in e
              ? Op(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        class Pp extends e.PureComponent {
          constructor() {
            super(...arguments),
              (this.renderDropdown = t =>
                e.createElement(
                  gi,
                  { key: 'header' },
                  'Response Schema: ',
                  e.createElement(
                    vs,
                    ((e, t) => {
                      for (var r in t || (t = {})) jp.call(t, r) && $p(e, r, t[r]);
                      if (Ep) for (var r of Ep(t)) Sp.call(t, r) && $p(e, r, t[r]);
                      return e;
                    })({}, t),
                  ),
                ));
          }
          render() {
            const { description: t, extensions: r, headers: n, content: o } = this.props.response;
            return e.createElement(
              e.Fragment,
              null,
              t && e.createElement(Ts, { source: t }),
              e.createElement(Ia, { extensions: r }),
              e.createElement(kp, { headers: n }),
              e.createElement(
                Kc,
                { content: o, renderDropdown: this.renderDropdown },
                ({ schema: t }) =>
                  e.createElement(
                    e.Fragment,
                    null,
                    'object' === (null == t ? void 0 : t.type) &&
                      e.createElement(Ra, {
                        constraints: (null == t ? void 0 : t.constraints) || [],
                      }),
                    e.createElement(Rl, { skipWriteOnly: !0, key: 'schema', schema: t }),
                  ),
              ),
            );
          }
        }
        const Cp = (0, ua.observer)(({ response: t }) => {
            const {
                extensions: r,
                headers: n,
                type: o,
                summary: i,
                description: s,
                code: a,
                expanded: l,
                content: c,
              } = t,
              p = e.useMemo(
                () => (void 0 === c ? [] : c.mediaTypes.filter(e => void 0 !== e.schema)),
                [c],
              ),
              u = e.useMemo(
                () =>
                  !((r && 0 !== Object.keys(r).length) || 0 !== n.length || 0 !== p.length || s),
                [r, n, p, s],
              );
            return e.createElement(
              'div',
              null,
              e.createElement(bp, {
                onClick: () => t.toggle(),
                type: o,
                empty: u,
                title: i || '',
                code: a,
                opened: l,
              }),
              l && !u && e.createElement(xp, null, e.createElement(Pp, { response: t })),
            );
          }),
          Ap = ee.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({ theme: e }) => e.colors.text.primary};
  font-weight: normal;
`;
        class Ip extends e.PureComponent {
          render() {
            const { responses: t, isCallback: r } = this.props;
            return t && 0 !== t.length
              ? e.createElement(
                  'div',
                  null,
                  e.createElement(Ap, null, _(r ? 'callbackResponses' : 'responses')),
                  t.map(t => e.createElement(Cp, { key: t.code, response: t })),
                )
              : null;
          }
        }
        function Tp(t) {
          const { security: r, showSecuritySchemeType: n, expanded: o } = t,
            i = r.schemes.length > 1;
          return 0 === r.schemes.length
            ? e.createElement(Vl, { expanded: o }, 'None')
            : e.createElement(
                Vl,
                { expanded: o },
                i && '(',
                r.schemes.map(t =>
                  e.createElement(
                    Wl,
                    { key: t.id },
                    n && `${ic[t.type] || t.type}: `,
                    e.createElement('i', null, t.displayName),
                    o && t.scopes.length
                      ? [' (', t.scopes.map(t => e.createElement(Ul, { key: t }, t)), ') ']
                      : null,
                  ),
                ),
                i && ') ',
              );
        }
        const _p = ({ scopes: t }) =>
          t.length
            ? e.createElement(
                'div',
                null,
                e.createElement('b', null, 'Required scopes: '),
                t.map((t, r) =>
                  e.createElement(e.Fragment, { key: r }, e.createElement('code', null, t), ' '),
                ),
              )
            : null;
        function Rp(t) {
          const r = Oi(),
            n = null == r ? void 0 : r.options.showSecuritySchemeType,
            [o, i] = (0, e.useState)(!1),
            { securities: s } = t;
          if (
            !(null == s ? void 0 : s.length) ||
            (null == r ? void 0 : r.options.hideSecuritySection)
          )
            return null;
          const a =
            null == r
              ? void 0
              : r.spec.securitySchemes.schemes.filter(({ id: e }) =>
                  s.find(t => t.schemes.find(t => t.id === e)),
                );
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              Zl,
              { expanded: o },
              e.createElement(
                Hl,
                { onClick: () => i(!o) },
                e.createElement(Yl, null, 'Authorizations:'),
                e.createElement(Pi, { size: '1.3em', direction: o ? 'down' : 'right' }),
              ),
              e.createElement(
                Jl,
                { expanded: o },
                s.map((t, r) =>
                  e.createElement(Tp, {
                    key: r,
                    expanded: o,
                    showSecuritySchemeType: n,
                    security: t,
                  }),
                ),
              ),
            ),
            o &&
              (null == a ? void 0 : a.length) &&
              a.map((t, r) =>
                e.createElement(
                  Xl,
                  { key: r },
                  e.createElement(
                    'h5',
                    null,
                    e.createElement(Dp, null),
                    ' ',
                    ic[t.type] || t.type,
                    ': ',
                    t.id,
                  ),
                  e.createElement(Ts, { source: t.description || '' }),
                  e.createElement(oc, {
                    key: t.id,
                    scheme: t,
                    RequiredScopes: e.createElement(_p, { scopes: Lp(t.id, s) }),
                  }),
                ),
              ),
          );
        }
        const Dp = () =>
          e.createElement(
            'svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 24 24',
              width: '11',
              height: '11',
            },
            e.createElement('path', {
              fill: 'currentColor',
              d: 'M18 10V6A6 6 0 0 0 6 6v4H3v14h18V10h-3zM8 6c0-2.206 1.794-4 4-4s4 1.794 4 4v4H8V6zm11 16H5V12h14v10z',
            }),
          );
        function Lp(e, t) {
          const r = [];
          let n = t.length;
          for (; n--; ) {
            const o = t[n];
            let i = o.schemes.length;
            for (; i--; ) {
              const t = o.schemes[i];
              t.id === e && Array.isArray(t.scopes) && r.push(...t.scopes);
            }
          }
          return Array.from(new Set(r));
        }
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let zp = class extends e.Component {
          render() {
            const { operation: t } = this.props,
              { description: r, externalDocs: n } = t,
              o = !(!r && !n);
            return e.createElement(
              Bc,
              null,
              o &&
                e.createElement(
                  Np,
                  null,
                  void 0 !== r && e.createElement(Ts, { source: r }),
                  n && e.createElement($a, { externalDocs: n }),
                ),
              e.createElement(Gc, { operation: this.props.operation, inverted: !0, compact: !0 }),
              e.createElement(Ia, { extensions: t.extensions }),
              e.createElement(Rp, { securities: t.security }),
              e.createElement(up, { parameters: t.parameters, body: t.requestBody }),
              e.createElement(Ip, { responses: t.responses, isCallback: t.isCallback }),
            );
          }
        };
        zp = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], zp);
        const Np = ee.div`
  margin-bottom: ${({ theme: e }) => 3 * e.spacing.unit}px;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let Mp = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.toggle = () => {
                this.props.callbackOperation.toggle();
              });
          }
          render() {
            const {
              name: t,
              expanded: r,
              httpVerb: n,
              deprecated: o,
            } = this.props.callbackOperation;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(Fc, {
                onClick: this.toggle,
                name: t,
                opened: r,
                httpVerb: n,
                deprecated: o,
              }),
              r && e.createElement(zp, { operation: this.props.callbackOperation }),
            );
          }
        };
        Mp = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Mp);
        class qp extends e.PureComponent {
          render() {
            const { callbacks: t } = this.props;
            return t && 0 !== t.length
              ? e.createElement(
                  'div',
                  null,
                  e.createElement(Fp, null, ' Callbacks '),
                  t.map(t =>
                    t.operations.map((r, n) =>
                      e.createElement(Mp, { key: `${t.name}_${n}`, callbackOperation: r }),
                    ),
                  ),
                )
              : null;
          }
        }
        const Fp = ee.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({ theme: e }) => e.colors.text.primary};
  font-weight: normal;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let Bp = class extends e.Component {
          constructor(e) {
            super(e),
              (this.switchItem = ({ idx: e }) => {
                this.props.items && void 0 !== e && this.setState({ activeItemIdx: e });
              }),
              (this.state = { activeItemIdx: 0 });
          }
          render() {
            const { items: t } = this.props;
            if (!t || !t.length) return null;
            const r = ({ children: t }) =>
              this.props.label
                ? e.createElement(sa, null, e.createElement(ia, null, this.props.label), t)
                : t;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                r,
                null,
                this.props.renderDropdown({
                  value: this.props.options[this.state.activeItemIdx].value,
                  options: this.props.options,
                  onChange: this.switchItem,
                  ariaLabel: this.props.label || 'Callback',
                }),
              ),
              this.props.children(t[this.state.activeItemIdx]),
            );
          }
        };
        Bp = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Bp);
        var Qp = Object.defineProperty,
          Up = Object.defineProperties,
          Wp = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyDescriptors),
          Vp = Object.getOwnPropertySymbols,
          Hp = Object.prototype.hasOwnProperty,
          Jp = Object.prototype.propertyIsEnumerable,
          Yp = (e, t, r) =>
            t in e
              ? Qp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        let Zp = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.renderDropdown = t => {
                return e.createElement(
                  vs,
                  ((r = ((e, t) => {
                    for (var r in t || (t = {})) Hp.call(t, r) && Yp(e, r, t[r]);
                    if (Vp) for (var r of Vp(t)) Jp.call(t, r) && Yp(e, r, t[r]);
                    return e;
                  })({ Label: oa, Dropdown: aa }, t)),
                  Up(r, Wp({ variant: 'dark' }))),
                );
                var r;
              });
          }
          render() {
            const t = this.props.content;
            return void 0 === t
              ? null
              : e.createElement(
                  Kc,
                  { content: t, renderDropdown: this.renderDropdown, withLabel: !0 },
                  t =>
                    e.createElement(ca, {
                      key: 'samples',
                      mediaType: t,
                      renderDropdown: this.renderDropdown,
                    }),
                );
          }
        };
        Zp = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Zp);
        class Gp extends e.Component {
          render() {
            const t = this.props.callback.codeSamples.find(e => fo(e));
            return t
              ? e.createElement(Xp, null, e.createElement(Zp, { content: t.requestBodyContent }))
              : null;
          }
        }
        const Xp = ee.div`
  margin-top: 15px;
`;
        var Kp = Object.defineProperty,
          eu = Object.defineProperties,
          tu = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyDescriptors),
          ru = Object.getOwnPropertySymbols,
          nu = Object.prototype.hasOwnProperty,
          ou = Object.prototype.propertyIsEnumerable,
          iu = (e, t, r) =>
            t in e
              ? Kp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        let su = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.renderDropdown = t => {
                return e.createElement(
                  vs,
                  ((r = ((e, t) => {
                    for (var r in t || (t = {})) nu.call(t, r) && iu(e, r, t[r]);
                    if (ru) for (var r of ru(t)) ou.call(t, r) && iu(e, r, t[r]);
                    return e;
                  })({ Label: oa, Dropdown: aa }, t)),
                  eu(r, tu({ variant: 'dark' }))),
                );
                var r;
              });
          }
          render() {
            const { callbacks: t } = this.props;
            if (!t || 0 === t.length) return null;
            const r = t.map(e => e.operations.map(e => e)).reduce((e, t) => e.concat(t), []);
            if (!r.some(e => e.codeSamples.length > 0)) return null;
            const n = r.map((e, t) => ({
              value: `${e.httpVerb.toUpperCase()}: ${e.name}`,
              idx: t,
            }));
            return e.createElement(
              'div',
              null,
              e.createElement(yi, null, ' Callback payload samples '),
              e.createElement(
                au,
                null,
                e.createElement(
                  Bp,
                  { items: r, renderDropdown: this.renderDropdown, label: 'Callback', options: n },
                  t =>
                    e.createElement(Gp, {
                      key: 'callbackPayloadSample',
                      callback: t,
                      renderDropdown: this.renderDropdown,
                    }),
                ),
              ),
            );
          }
        };
        (su.contextType = ce),
          (su = ((e, t, r, n) => {
            for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
            return i;
          })([ua.observer], su));
        const au = ee.div`
  background: ${({ theme: e }) => e.codeBlock.backgroundColor};
  padding: ${e => 4 * e.theme.spacing.unit}px;
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let lu = class extends e.Component {
          render() {
            const { operation: t } = this.props,
              r = t.codeSamples,
              n = r.length > 0,
              o = 1 === r.length && this.context.hideSingleRequestSampleTab;
            return (
              (n &&
                e.createElement(
                  'div',
                  null,
                  e.createElement(
                    yi,
                    null,
                    t.isWebhook ? _('payloadSamples') : _('requestSamples'),
                  ),
                  e.createElement(
                    Wi,
                    { defaultIndex: 0 },
                    e.createElement(
                      Ui.TabList,
                      { hidden: o },
                      r.map(t =>
                        e.createElement(
                          Ui.Tab,
                          { key: t.lang + '_' + (t.label || '') },
                          void 0 !== t.label ? t.label : t.lang,
                        ),
                      ),
                    ),
                    r.map(t =>
                      e.createElement(
                        Ui.TabPanel,
                        { key: t.lang + '_' + (t.label || '') },
                        fo(t)
                          ? e.createElement(
                              'div',
                              null,
                              e.createElement(Zp, { content: t.requestBodyContent }),
                            )
                          : e.createElement(Ks, { lang: t.lang, source: t.source }),
                      ),
                    ),
                  ),
                )) ||
              null
            );
          }
        };
        (lu.contextType = ce),
          (lu = ((e, t, r, n) => {
            for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
            return i;
          })([ua.observer], lu));
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let cu = class extends e.Component {
          render() {
            const { operation: t } = this.props,
              r = t.responses.filter(e => e.content && e.content.hasSample);
            return (
              (r.length > 0 &&
                e.createElement(
                  'div',
                  null,
                  e.createElement(yi, null, ' ', _('responseSamples'), ' '),
                  e.createElement(
                    Wi,
                    { defaultIndex: 0 },
                    e.createElement(
                      Ui.TabList,
                      null,
                      r.map(t =>
                        e.createElement(
                          Ui.Tab,
                          { className: 'tab-' + t.type, key: t.code },
                          t.code,
                        ),
                      ),
                    ),
                    r.map(t =>
                      e.createElement(
                        Ui.TabPanel,
                        { key: t.code },
                        e.createElement('div', null, e.createElement(Zp, { content: t.content })),
                      ),
                    ),
                  ),
                )) ||
              null
            );
          }
        };
        cu = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], cu);
        var pu = Object.defineProperty,
          uu = Object.defineProperties,
          du = Object.getOwnPropertyDescriptors,
          hu = Object.getOwnPropertySymbols,
          mu = Object.prototype.hasOwnProperty,
          fu = Object.prototype.propertyIsEnumerable,
          yu = (e, t, r) =>
            t in e
              ? pu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        const gu = ee.div`
  margin-bottom: ${({ theme: e }) => 6 * e.spacing.unit}px;
`,
          bu = (0, ua.observer)(({ operation: t }) => {
            const { name: r, description: n, deprecated: o, externalDocs: i, isWebhook: s } = t,
              a = !(!n && !i);
            return e.createElement(ce.Consumer, null, l => {
              return e.createElement(
                ui,
                ((c = ((e, t) => {
                  for (var r in t || (t = {})) mu.call(t, r) && yu(e, r, t[r]);
                  if (hu) for (var r of hu(t)) fu.call(t, r) && yu(e, r, t[r]);
                  return e;
                })({}, { [ei]: t.operationHash })),
                (p = { id: t.operationHash }),
                uu(c, du(p))),
                e.createElement(
                  ai,
                  null,
                  e.createElement(
                    fi,
                    null,
                    e.createElement(Si, { to: t.id }),
                    r,
                    ' ',
                    o && e.createElement(Ci, { type: 'warning' }, ' Deprecated '),
                    s && e.createElement(Ci, { type: 'primary' }, t.isWebhook && 'ASYNC'),
                  ),
                  l.pathInMiddlePanel && !s && e.createElement(Gc, { operation: t, inverted: !0 }),
                  a &&
                    e.createElement(
                      gu,
                      null,
                      void 0 !== n && e.createElement(Ts, { source: n }),
                      i && e.createElement($a, { externalDocs: i }),
                    ),
                  e.createElement(Ia, { extensions: t.extensions }),
                  e.createElement(Rp, { securities: t.security }),
                  e.createElement(up, {
                    parameters: t.parameters,
                    body: t.requestBody,
                    isWebhook: t.isWebhook,
                  }),
                  e.createElement(Ip, { responses: t.responses }),
                  e.createElement(qp, { callbacks: t.callbacks }),
                ),
                e.createElement(
                  pi,
                  null,
                  !l.pathInMiddlePanel && e.createElement(Gc, { operation: t }),
                  e.createElement(lu, { operation: t }),
                  e.createElement(cu, { operation: t }),
                  e.createElement(su, { callbacks: t.callbacks }),
                ),
              );
              var c, p;
            });
          });
        var xu = Object.defineProperty,
          vu = Object.getOwnPropertyDescriptor,
          wu = Object.getOwnPropertySymbols,
          ku = Object.prototype.hasOwnProperty,
          Ou = Object.prototype.propertyIsEnumerable,
          Eu = (e, t, r) =>
            t in e
              ? xu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          ju = (e, t, r, n) => {
            for (var o, i = n > 1 ? void 0 : n ? vu(t, r) : t, s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = (n ? o(t, r, i) : o(i)) || i);
            return n && i && xu(t, r, i), i;
          };
        let Su = class extends e.Component {
          render() {
            const t = this.props.items;
            return 0 === t.length ? null : t.map(t => e.createElement($u, { key: t.id, item: t }));
          }
        };
        Su = ju([ua.observer], Su);
        let $u = class extends e.Component {
          render() {
            const t = this.props.item;
            let r;
            const { type: n } = t;
            switch (n) {
              case 'group':
                r = null;
                break;
              case 'tag':
              case 'section':
              default:
                r = e.createElement(
                  Cu,
                  ((e, t) => {
                    for (var r in t || (t = {})) ku.call(t, r) && Eu(e, r, t[r]);
                    if (wu) for (var r of wu(t)) Ou.call(t, r) && Eu(e, r, t[r]);
                    return e;
                  })({}, this.props),
                );
                break;
              case 'operation':
                r = e.createElement(Au, { item: t });
            }
            return e.createElement(
              e.Fragment,
              null,
              r && e.createElement(li, { id: t.id, underlined: 'operation' === t.type }, r),
              t.items && e.createElement(Su, { items: t.items }),
            );
          }
        };
        $u = ju([ua.observer], $u);
        const Pu = t => e.createElement(ai, { compact: !0 }, t);
        let Cu = class extends e.Component {
          render() {
            const { name: t, description: r, externalDocs: n, level: o } = this.props.item,
              i = 2 === o ? fi : mi;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                ui,
                null,
                e.createElement(
                  ai,
                  { compact: !1 },
                  e.createElement(i, null, e.createElement(Si, { to: this.props.item.id }), t),
                ),
              ),
              e.createElement($c, { parentId: this.props.item.id, source: r || '', htmlWrap: Pu }),
              n &&
                e.createElement(
                  ui,
                  null,
                  e.createElement(ai, null, e.createElement($a, { externalDocs: n })),
                ),
            );
          }
        };
        Cu = ju([ua.observer], Cu);
        let Au = class extends e.Component {
          render() {
            return e.createElement(bu, { operation: this.props.item });
          }
        };
        Au = ju([ua.observer], Au);
        var Iu = Object.defineProperty,
          Tu = Object.defineProperties,
          _u = (Object.getOwnPropertyDescriptor, Object.getOwnPropertyDescriptors),
          Ru = Object.getOwnPropertySymbols,
          Du = Object.prototype.hasOwnProperty,
          Lu = Object.prototype.propertyIsEnumerable,
          zu = (e, t, r) =>
            t in e
              ? Iu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        let Nu = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.ref = e.createRef()),
              (this.activate = e => {
                this.props.onActivate(this.props.item), e.stopPropagation();
              });
          }
          componentDidMount() {
            this.scrollIntoViewIfActive();
          }
          componentDidUpdate() {
            this.scrollIntoViewIfActive();
          }
          scrollIntoViewIfActive() {
            this.props.item.active && this.ref.current && c(this.ref.current);
          }
          render() {
            const { item: t, withoutChildren: r } = this.props;
            return e.createElement(
              _c,
              {
                tabIndex: 0,
                onClick: this.activate,
                depth: t.depth,
                'data-item-id': t.id,
                role: 'menuitem',
              },
              'operation' === t.type
                ? e.createElement(
                    Mu,
                    ((n = ((e, t) => {
                      for (var r in t || (t = {})) Du.call(t, r) && zu(e, r, t[r]);
                      if (Ru) for (var r of Ru(t)) Lu.call(t, r) && zu(e, r, t[r]);
                      return e;
                    })({}, this.props)),
                    Tu(n, _u({ item: t }))),
                  )
                : e.createElement(
                    Dc,
                    { depth: t.depth, active: t.active, type: t.type, ref: this.ref },
                    'schema' === t.type && e.createElement(Ac, { type: 'schema' }, 'schema'),
                    e.createElement(
                      Lc,
                      { width: 'calc(100% - 38px)', title: t.sidebarLabel },
                      t.sidebarLabel,
                      this.props.children,
                    ),
                    (t.depth > 0 &&
                      t.items.length > 0 &&
                      e.createElement(Pi, {
                        float: 'right',
                        direction: t.expanded ? 'down' : 'right',
                      })) ||
                      null,
                  ),
              !r &&
                t.items &&
                t.items.length > 0 &&
                e.createElement(Wu, {
                  expanded: t.expanded,
                  items: t.items,
                  onActivate: this.props.onActivate,
                }),
            );
            var n;
          }
        };
        Nu = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Nu);
        const Mu = (0, ua.observer)(t => {
          const { item: r } = t,
            n = e.createRef(),
            { showWebhookVerb: o } = e.useContext(ce);
          return (
            e.useEffect(() => {
              t.item.active && n.current && c(n.current);
            }, [t.item.active, n]),
            e.createElement(
              Dc,
              { depth: r.depth, active: r.active, deprecated: r.deprecated, ref: n },
              r.isWebhook
                ? e.createElement(Ac, { type: r.httpVerb }, o ? r.httpVerb : _('webhook'))
                : e.createElement(Ac, { type: r.httpVerb }, gt(r.httpVerb)),
              e.createElement(
                Lc,
                { tabIndex: 0, width: 'calc(100% - 38px)' },
                r.sidebarLabel,
                t.children,
              ),
            )
          );
        });
        var qu = Object.defineProperty,
          Fu = (Object.getOwnPropertyDescriptor, Object.getOwnPropertySymbols),
          Bu = Object.prototype.hasOwnProperty,
          Qu = Object.prototype.propertyIsEnumerable,
          Uu = (e, t, r) =>
            t in e
              ? qu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r);
        let Wu = class extends e.Component {
          render() {
            const { items: t, root: r, className: n } = this.props,
              o = null == this.props.expanded || this.props.expanded;
            return e.createElement(
              Tc,
              ((e, t) => {
                for (var r in t || (t = {})) Bu.call(t, r) && Uu(e, r, t[r]);
                if (Fu) for (var r of Fu(t)) Qu.call(t, r) && Uu(e, r, t[r]);
                return e;
              })({ className: n, style: this.props.style, expanded: o }, r ? { role: 'menu' } : {}),
              t.map((t, r) =>
                e.createElement(Nu, { key: r, item: t, onActivate: this.props.onActivate }),
              ),
            );
          }
        };
        function Vu() {
          const [t, r] = (0, e.useState)(!1);
          return (
            (0, e.useEffect)(() => {
              r(!0);
            }, []),
            t
              ? e.createElement('img', {
                  alt: 'redocly logo',
                  onError: () => r(!1),
                  src: 'https://cdn.redoc.ly/redoc/logo-mini.svg',
                })
              : null
          );
        }
        Wu = ((e, t, r, n) => {
          for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
          return i;
        })([ua.observer], Wu);
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let Hu = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.activate = e => {
                if (e && e.active && this.context.menuToggle)
                  return e.expanded ? e.collapse() : e.expand();
                this.props.menu.activateAndScroll(e, !0),
                  setTimeout(() => {
                    this._updateScroll && this._updateScroll();
                  });
              }),
              (this.saveScrollUpdate = e => {
                this._updateScroll = e;
              });
          }
          render() {
            const t = this.props.menu;
            return e.createElement(
              ls,
              {
                updateFn: this.saveScrollUpdate,
                className: this.props.className,
                options: { wheelPropagation: !1 },
              },
              e.createElement(Wu, { items: t.items, onActivate: this.activate, root: !0 }),
              e.createElement(
                zc,
                null,
                e.createElement(
                  'a',
                  {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href: 'https://redocly.com/redoc/',
                  },
                  e.createElement(Vu, null),
                  'API docs by Redocly',
                ),
              ),
            );
          }
        };
        (Hu.contextType = ce),
          (Hu = ((e, t, r, n) => {
            for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
            return i;
          })([ua.observer], Hu));
        const Ju = ({ open: t }) => {
            const r = t ? 8 : -4;
            return e.createElement(
              Zu,
              null,
              e.createElement(Yu, {
                size: 15,
                style: {
                  transform: `translate(2px, ${r}px) rotate(180deg)`,
                  transition: 'transform 0.2s ease',
                },
              }),
              e.createElement(Yu, {
                size: 15,
                style: {
                  transform: `translate(2px, ${0 - r}px)`,
                  transition: 'transform 0.2s ease',
                },
              }),
            );
          },
          Yu = ({ size: t = 10, className: r = '', style: n }) =>
            e.createElement(
              'svg',
              {
                className: r,
                style: n || {},
                viewBox: '0 0 926.23699 573.74994',
                version: '1.1',
                x: '0px',
                y: '0px',
                width: t,
                height: t,
              },
              e.createElement(
                'g',
                { transform: 'translate(904.92214,-879.1482)' },
                e.createElement('path', {
                  d: '\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ',
                  fill: 'currentColor',
                }),
              ),
            ),
          Zu = ee.div`
  user-select: none;
  width: 20px;
  height: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  color: ${e => e.theme.colors.primary.main};
`;
        Object.defineProperty, Object.getOwnPropertyDescriptor;
        let Gu;
        s && (Gu = r(322));
        const Xu = Gu && Gu(),
          Ku = ee.div`
  width: ${e => e.theme.sidebar.width};
  background-color: ${e => e.theme.sidebar.backgroundColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  backface-visibility: hidden;
  /* contain: strict; TODO: breaks layout since Chrome 80*/

  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${K.lessThan('small')`
    position: fixed;
    z-index: 20;
    width: 100%;
    background: ${({ theme: e }) => e.sidebar.backgroundColor};
    display: ${e => (e.open ? 'flex' : 'none')};
  `};

  @media print {
    display: none;
  }
`,
          ed = ee.div`
  outline: none;
  user-select: none;
  background-color: ${({ theme: e }) => e.fab.backgroundColor};
  color: ${e => e.theme.colors.primary.main};
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  ${K.lessThan('small')`
    display: flex;
  `};

  bottom: 44px;

  width: 60px;
  height: 60px;
  padding: 0 20px;
  svg {
    color: ${({ theme: e }) => e.fab.color};
  }

  @media print {
    display: none;
  }
`;
        let td = class extends e.Component {
          constructor() {
            super(...arguments),
              (this.state = { offsetTop: '0px' }),
              (this.toggleNavMenu = () => {
                this.props.menu.toggleSidebar();
              });
          }
          componentDidMount() {
            Xu && Xu.add(this.stickyElement),
              this.setState({ offsetTop: this.getScrollYOffset(this.context) });
          }
          componentWillUnmount() {
            Xu && Xu.remove(this.stickyElement);
          }
          getScrollYOffset(e) {
            let t;
            return (
              (t =
                void 0 !== this.props.scrollYOffset
                  ? W.normalizeScrollYOffset(this.props.scrollYOffset)()
                  : e.scrollYOffset()),
              t + 'px'
            );
          }
          render() {
            const t = this.props.menu.sideBarOpened,
              r = this.state.offsetTop;
            return e.createElement(
              e.Fragment,
              null,
              e.createElement(
                Ku,
                {
                  open: t,
                  className: this.props.className,
                  style: { top: r, height: `calc(100vh - ${r})` },
                  ref: e => {
                    this.stickyElement = e;
                  },
                },
                this.props.children,
              ),
              !this.context.hideFab &&
                e.createElement(
                  ed,
                  { onClick: this.toggleNavMenu },
                  e.createElement(Ju, { open: t }),
                ),
            );
          }
        };
        (td.contextType = ce),
          (td = ((e, t, r, n) => {
            for (var o, i = t, s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = o(i) || i);
            return i;
          })([ua.observer], td));
        const rd = ee.div`
  ${({ theme: e }) =>
    `\n  font-family: ${e.typography.fontFamily};\n  font-size: ${
      e.typography.fontSize
    };\n  font-weight: ${e.typography.fontWeightRegular};\n  line-height: ${
      e.typography.lineHeight
    };\n  color: ${
      e.colors.text.primary
    };\n  display: flex;\n  position: relative;\n  text-align: left;\n\n  -webkit-font-smoothing: ${
      e.typography.smoothing
    };\n  font-smoothing: ${e.typography.smoothing};\n  ${
      e.typography.optimizeSpeed ? 'text-rendering: optimizeSpeed !important' : ''
    };\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  }\n`};
`,
          nd = ee.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${e => e.theme.sidebar.width});
  ${K.lessThan('small', !0)`
    width: 100%;
  `};

  contain: layout;
`,
          od = ee.div`
  background: ${({ theme: e }) => e.rightPanel.backgroundColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({ theme: e }) => {
    if (e.rightPanel.width.endsWith('%')) {
      const t = parseInt(e.rightPanel.width, 10);
      return `calc((100% - ${e.sidebar.width}) * ${t / 100})`;
    }
    return e.rightPanel.width;
  }};
  ${K.lessThan('medium', !0)`
    display: none;
  `};
`,
          id = ee.div`
  padding: 5px 0;
`,
          sd = ee.input.attrs(() => ({ className: 'search-input' }))`
  width: calc(100% - ${e => 8 * e.theme.spacing.unit}px);
  box-sizing: border-box;
  margin: 0 ${e => 4 * e.theme.spacing.unit}px;
  padding: 5px ${e => 2 * e.theme.spacing.unit}px 5px
    ${e => 4 * e.theme.spacing.unit}px;
  border: 0;
  border-bottom: 1px solid
    ${({ theme: e }) =>
      ((0, t.getLuminance)(e.sidebar.backgroundColor) > 0.5 ? t.darken : t.lighten)(
        0.1,
        e.sidebar.backgroundColor,
      )};
  font-family: ${({ theme: e }) => e.typography.fontFamily};
  font-weight: bold;
  font-size: 13px;
  color: ${e => e.theme.sidebar.textColor};
  background-color: transparent;
  outline: none;
`,
          ad = ee(t =>
            e.createElement(
              'svg',
              {
                className: t.className,
                version: '1.1',
                viewBox: '0 0 1000 1000',
                x: '0px',
                xmlns: 'http://www.w3.org/2000/svg',
                y: '0px',
              },
              e.createElement('path', {
                d: 'M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z',
              }),
            ),
          ).attrs({ className: 'search-icon' })`
  position: absolute;
  left: ${e => 4 * e.theme.spacing.unit}px;
  height: 1.8em;
  width: 0.9em;

  path {
    fill: ${e => e.theme.sidebar.textColor};
  }
`,
          ld = ee.div`
  padding: ${e => e.theme.spacing.unit}px 0;
  background-color: ${({ theme: e }) => (0, t.darken)(0.05, e.sidebar.backgroundColor)}};
  color: ${e => e.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({ theme: e }) => (0, t.darken)(0.1, e.sidebar.backgroundColor)}};
  border-bottom: ${({ theme: e }) => (0, t.darken)(0.1, e.sidebar.backgroundColor)}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${Dc} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({ theme: e }) => (0, t.darken)(0.1, e.sidebar.backgroundColor)};
    }

    > svg {
      display: none;
    }
  }
`,
          cd = ee.i`
  position: absolute;
  display: inline-block;
  width: ${e => 2 * e.theme.spacing.unit}px;
  text-align: center;
  right: ${e => 4 * e.theme.spacing.unit}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;
        var pd = Object.defineProperty,
          ud = Object.getOwnPropertyDescriptor;
        class dd extends e.PureComponent {
          constructor(e) {
            super(e),
              (this.activeItemRef = null),
              (this.clear = () => {
                this.setState({ results: [], noResults: !1, term: '', activeItemIdx: -1 }),
                  this.props.marker.unmark();
              }),
              (this.handleKeyDown = e => {
                if (
                  (27 === e.keyCode && this.clear(),
                  40 === e.keyCode &&
                    (this.setState({
                      activeItemIdx: Math.min(
                        this.state.activeItemIdx + 1,
                        this.state.results.length - 1,
                      ),
                    }),
                    e.preventDefault()),
                  38 === e.keyCode &&
                    (this.setState({ activeItemIdx: Math.max(0, this.state.activeItemIdx - 1) }),
                    e.preventDefault()),
                  13 === e.keyCode)
                ) {
                  const e = this.state.results[this.state.activeItemIdx];
                  if (e) {
                    const t = this.props.getItemById(e.meta);
                    t && this.props.onActivate(t);
                  }
                }
              }),
              (this.search = e => {
                const { minCharacterLengthToInitSearch: t } = this.context,
                  r = e.target.value;
                r.length < t
                  ? this.clearResults(r)
                  : this.setState({ term: r }, () => this.searchCallback(this.state.term));
              }),
              (this.state = { results: [], noResults: !1, term: '', activeItemIdx: -1 });
          }
          clearResults(e) {
            this.setState({ results: [], noResults: !1, term: e }), this.props.marker.unmark();
          }
          setResults(e, t) {
            this.setState({ results: e, noResults: 0 === e.length }), this.props.marker.mark(t);
          }
          searchCallback(e) {
            this.props.search.search(e).then(t => {
              this.setResults(t, e);
            });
          }
          render() {
            const { activeItemIdx: t } = this.state,
              r = this.state.results
                .filter(e => this.props.getItemById(e.meta))
                .map(e => ({ item: this.props.getItemById(e.meta), score: e.score }))
                .sort((e, t) => t.score - e.score);
            return e.createElement(
              id,
              { role: 'search' },
              this.state.term && e.createElement(cd, { onClick: this.clear }, '×'),
              e.createElement(ad, null),
              e.createElement(sd, {
                value: this.state.term,
                onKeyDown: this.handleKeyDown,
                placeholder: 'Search...',
                'aria-label': 'Search',
                type: 'text',
                onChange: this.search,
              }),
              r.length > 0 &&
                e.createElement(
                  ls,
                  { options: { wheelPropagation: !1 } },
                  e.createElement(
                    ld,
                    { 'data-role': 'search:results' },
                    r.map((r, n) =>
                      e.createElement(Nu, {
                        item: Object.create(r.item, { active: { value: n === t } }),
                        onActivate: this.props.onActivate,
                        withoutChildren: !0,
                        key: r.item.id,
                        'data-role': 'search:result',
                      }),
                    ),
                  ),
                ),
              this.state.term && this.state.noResults
                ? e.createElement(ld, { 'data-role': 'search:results' }, _('noResultsFound'))
                : null,
            );
          }
        }
        (dd.contextType = ce),
          ((e, t, r, n) => {
            for (var o, i = ud(t, r), s = e.length - 1; s >= 0; s--)
              (o = e[s]) && (i = o(t, r, i) || i);
            i && pd(t, r, i);
          })([xe.bind, (0, xe.debounce)(400)], dd.prototype, 'searchCallback');
        class hd extends e.Component {
          componentDidMount() {
            this.props.store.onDidMount();
          }
          componentWillUnmount() {
            this.props.store.dispose();
          }
          render() {
            const {
                store: { spec: t, menu: r, options: n, search: o, marker: i },
              } = this.props,
              s = this.props.store;
            return e.createElement(
              X,
              { theme: n.theme },
              e.createElement(
                vi,
                { value: s },
                e.createElement(
                  pe,
                  { value: n },
                  e.createElement(
                    rd,
                    { className: 'redoc-wrap' },
                    e.createElement(
                      td,
                      { menu: r, className: 'menu-content' },
                      e.createElement(vc, { info: t.info }),
                      (!n.disableSearch &&
                        e.createElement(dd, {
                          search: o,
                          marker: i,
                          getItemById: r.getItemById,
                          onActivate: r.activateAndScroll,
                        })) ||
                        null,
                      e.createElement(Hu, { menu: r }),
                    ),
                    e.createElement(
                      nd,
                      { className: 'api-content' },
                      e.createElement(yc, { store: s }),
                      e.createElement(Su, { items: r.items }),
                    ),
                    e.createElement(od, null),
                  ),
                ),
              ),
            );
          }
        }
        hd.propTypes = { store: le.instanceOf(cc).isRequired };
        var md = Object.defineProperty,
          fd = Object.getOwnPropertySymbols,
          yd = Object.prototype.hasOwnProperty,
          gd = Object.prototype.propertyIsEnumerable,
          bd = (e, t, r) =>
            t in e
              ? md(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
              : (e[t] = r),
          xd = (e, t) => {
            for (var r in t || (t = {})) yd.call(t, r) && bd(e, r, t[r]);
            if (fd) for (var r of fd(t)) gd.call(t, r) && bd(e, r, t[r]);
            return e;
          };
        const vd = function (t) {
          const { spec: n, specUrl: o, options: i = {}, onLoaded: s } = t,
            a = Q(i.hideLoading, !1),
            l = new W(i);
          if (void 0 !== l.nonce)
            try {
              r.nc = l.nonce;
            } catch (e) {}
          return e.createElement(
            ne,
            null,
            e.createElement(
              ki,
              { spec: n ? xd({}, n) : void 0, specUrl: o, options: i, onLoaded: s },
              ({ loading: t, store: r }) =>
                t
                  ? a
                    ? null
                    : e.createElement(ae, { color: l.theme.colors.primary.main })
                  : e.createElement(hd, { store: r }),
            ),
          );
        };
      })(),
      n
    );
  })();
});
//# sourceMappingURL=redoc.lib.js.map
