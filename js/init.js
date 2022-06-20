/*! For license information please see init.js.LICENSE.txt */
(() => {
  var u = {
      7757: (u, t, e) => {
        u.exports = e(5666);
      },
      2146: (u, t, e) => {
        "use strict";
        e.r(t);
        var r = e(7757),
          n = e.n(r),
          i = ["access_token"];
        function o(u, t) {
          if (null == u) return {};
          var e,
            r,
            n = (function (u, t) {
              if (null == u) return {};
              var e,
                r,
                n = {},
                i = Object.keys(u);
              for (r = 0; r < i.length; r++)
                (e = i[r]), t.indexOf(e) >= 0 || (n[e] = u[e]);
              return n;
            })(u, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(u);
            for (r = 0; r < i.length; r++)
              (e = i[r]),
                t.indexOf(e) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(u, e) &&
                    (n[e] = u[e]));
          }
          return n;
        }
        function a(u, t, e) {
          return (
            t in u
              ? Object.defineProperty(u, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[t] = e),
            u
          );
        }
        function c(u, t, e, r, n, i, o) {
          try {
            var a = u[i](o),
              c = a.value;
          } catch (u) {
            return void e(u);
          }
          a.done ? t(c) : Promise.resolve(c).then(r, n);
        }
        function s(u) {
          return function () {
            var t = this,
              e = arguments;
            return new Promise(function (r, n) {
              var i = u.apply(t, e);
              function o(u) {
                c(i, r, n, o, a, "next", u);
              }
              function a(u) {
                c(i, r, n, o, a, "throw", u);
              }
              o(void 0);
            });
          };
        }
        function D(u, t) {
          return (
            (function (u) {
              if (Array.isArray(u)) return u;
            })(u) ||
            (function (u, t) {
              var e =
                null == u
                  ? null
                  : ("undefined" != typeof Symbol && u[Symbol.iterator]) ||
                    u["@@iterator"];
              if (null == e) return;
              var r,
                n,
                i = [],
                o = !0,
                a = !1;
              try {
                for (
                  e = e.call(u);
                  !(o = (r = e.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  o = !0
                );
              } catch (u) {
                (a = !0), (n = u);
              } finally {
                try {
                  o || null == e.return || e.return();
                } finally {
                  if (a) throw n;
                }
              }
              return i;
            })(u, t) ||
            (function (u, t) {
              if (!u) return;
              if ("string" == typeof u) return f(u, t);
              var e = Object.prototype.toString.call(u).slice(8, -1);
              "Object" === e && u.constructor && (e = u.constructor.name);
              if ("Map" === e || "Set" === e) return Array.from(u);
              if (
                "Arguments" === e ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
              )
                return f(u, t);
            })(u, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function f(u, t) {
          (null == t || t > u.length) && (t = u.length);
          for (var e = 0, r = new Array(t); e < t; e++) r[e] = u[e];
          return r;
        }
        function h(u, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (u.prototype = Object.create(t && t.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            t && F(u, t);
        }
        function l(u) {
          var t = d();
          return function () {
            var e,
              r = C(u);
            if (t) {
              var n = C(this).constructor;
              e = Reflect.construct(r, arguments, n);
            } else e = r.apply(this, arguments);
            return p(this, e);
          };
        }
        function p(u, t) {
          if (t && ("object" === B(t) || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return (function (u) {
            if (void 0 === u)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return u;
          })(u);
        }
        function A(u) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (A = function (u) {
              if (
                null === u ||
                ((e = u),
                -1 === Function.toString.call(e).indexOf("[native code]"))
              )
                return u;
              var e;
              if ("function" != typeof u)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              if (void 0 !== t) {
                if (t.has(u)) return t.get(u);
                t.set(u, r);
              }
              function r() {
                return E(u, arguments, C(this).constructor);
              }
              return (
                (r.prototype = Object.create(u.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                F(r, u)
              );
            }),
            A(u)
          );
        }
        function E(u, t, e) {
          return (
            (E = d()
              ? Reflect.construct
              : function (u, t, e) {
                  var r = [null];
                  r.push.apply(r, t);
                  var n = new (Function.bind.apply(u, r))();
                  return e && F(n, e.prototype), n;
                }),
            E.apply(null, arguments)
          );
        }
        function d() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (u) {
            return !1;
          }
        }
        function F(u, t) {
          return (
            (F =
              Object.setPrototypeOf ||
              function (u, t) {
                return (u.__proto__ = t), u;
              }),
            F(u, t)
          );
        }
        function C(u) {
          return (
            (C = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (u) {
                  return u.__proto__ || Object.getPrototypeOf(u);
                }),
            C(u)
          );
        }
        function y(u, t) {
          if (!(u instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function v(u, t) {
          for (var e = 0; e < t.length; e++) {
            var r = t[e];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(u, r.key, r);
          }
        }
        function g(u, t, e) {
          return t && v(u.prototype, t), e && v(u, e), u;
        }
        function B(u) {
          return (
            (B =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (u) {
                    return typeof u;
                  }
                : function (u) {
                    return u &&
                      "function" == typeof Symbol &&
                      u.constructor === Symbol &&
                      u !== Symbol.prototype
                      ? "symbol"
                      : typeof u;
                  }),
            B(u)
          );
        }
        !(function (u) {
          var t = {};
          function e(r) {
            if (t[r]) return t[r].exports;
            var n = (t[r] = { i: r, l: !1, exports: {} });
            return u[r].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
          }
          (e.m = u),
            (e.c = t),
            (e.d = function (u, t, r) {
              e.o(u, t) ||
                Object.defineProperty(u, t, { enumerable: !0, get: r });
            }),
            (e.r = function (u) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(u, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(u, "__esModule", { value: !0 });
            }),
            (e.t = function (u, t) {
              if ((1 & t && (u = e(u)), 8 & t)) return u;
              if (4 & t && "object" == B(u) && u && u.__esModule) return u;
              var r = Object.create(null);
              if (
                (e.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: u,
                }),
                2 & t && "string" != typeof u)
              )
                for (var n in u)
                  e.d(
                    r,
                    n,
                    function (t) {
                      return u[t];
                    }.bind(null, n)
                  );
              return r;
            }),
            (e.n = function (u) {
              var t =
                u && u.__esModule
                  ? function () {
                      return u.default;
                    }
                  : function () {
                      return u;
                    };
              return e.d(t, "a", t), t;
            }),
            (e.o = function (u, t) {
              return Object.prototype.hasOwnProperty.call(u, t);
            }),
            (e.p = ""),
            e((e.s = 14));
        })([
          function (u, t, e) {
            var r;
            u.exports =
              ((r =
                r ||
                (function (u, t) {
                  var e =
                      Object.create ||
                      (function () {
                        function u() {}
                        return function (t) {
                          var e;
                          return (
                            (u.prototype = t),
                            (e = new u()),
                            (u.prototype = null),
                            e
                          );
                        };
                      })(),
                    r = {},
                    n = (r.lib = {}),
                    i = (n.Base = {
                      extend: function (u) {
                        var t = e(this);
                        return (
                          u && t.mixIn(u),
                          (t.hasOwnProperty("init") && this.init !== t.init) ||
                            (t.init = function () {
                              t.$super.init.apply(this, arguments);
                            }),
                          (t.init.prototype = t),
                          (t.$super = this),
                          t
                        );
                      },
                      create: function () {
                        var u = this.extend();
                        return u.init.apply(u, arguments), u;
                      },
                      init: function () {},
                      mixIn: function (u) {
                        for (var t in u)
                          u.hasOwnProperty(t) && (this[t] = u[t]);
                        u.hasOwnProperty("toString") &&
                          (this.toString = u.toString);
                      },
                      clone: function () {
                        return this.init.prototype.extend(this);
                      },
                    }),
                    o = (n.WordArray = i.extend({
                      init: function (u, t) {
                        (u = this.words = u || []),
                          (this.sigBytes = null != t ? t : 4 * u.length);
                      },
                      toString: function (u) {
                        return (u || c).stringify(this);
                      },
                      concat: function (u) {
                        var t = this.words,
                          e = u.words,
                          r = this.sigBytes,
                          n = u.sigBytes;
                        if ((this.clamp(), r % 4))
                          for (var i = 0; i < n; i++) {
                            var o = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                            t[(r + i) >>> 2] |= o << (24 - ((r + i) % 4) * 8);
                          }
                        else
                          for (i = 0; i < n; i += 4)
                            t[(r + i) >>> 2] = e[i >>> 2];
                        return (this.sigBytes += n), this;
                      },
                      clamp: function () {
                        var t = this.words,
                          e = this.sigBytes;
                        (t[e >>> 2] &= 4294967295 << (32 - (e % 4) * 8)),
                          (t.length = u.ceil(e / 4));
                      },
                      clone: function () {
                        var u = i.clone.call(this);
                        return (u.words = this.words.slice(0)), u;
                      },
                      random: function (t) {
                        for (
                          var e,
                            r = [],
                            n = function (t) {
                              t = t;
                              var e = 987654321,
                                r = 4294967295;
                              return function () {
                                var n =
                                  (((e =
                                    (36969 * (65535 & e) + (e >> 16)) & r) <<
                                    16) +
                                    (t =
                                      (18e3 * (65535 & t) + (t >> 16)) & r)) &
                                  r;
                                return (
                                  (n /= 4294967296),
                                  (n += 0.5) * (u.random() > 0.5 ? 1 : -1)
                                );
                              };
                            },
                            i = 0;
                          i < t;
                          i += 4
                        ) {
                          var a = n(4294967296 * (e || u.random()));
                          (e = 987654071 * a()), r.push((4294967296 * a()) | 0);
                        }
                        return new o.init(r, t);
                      },
                    })),
                    a = (r.enc = {}),
                    c = (a.Hex = {
                      stringify: function (u) {
                        for (
                          var t = u.words, e = u.sigBytes, r = [], n = 0;
                          n < e;
                          n++
                        ) {
                          var i = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                          r.push((i >>> 4).toString(16)),
                            r.push((15 & i).toString(16));
                        }
                        return r.join("");
                      },
                      parse: function (u) {
                        for (var t = u.length, e = [], r = 0; r < t; r += 2)
                          e[r >>> 3] |=
                            parseInt(u.substr(r, 2), 16) << (24 - (r % 8) * 4);
                        return new o.init(e, t / 2);
                      },
                    }),
                    s = (a.Latin1 = {
                      stringify: function (u) {
                        for (
                          var t = u.words, e = u.sigBytes, r = [], n = 0;
                          n < e;
                          n++
                        ) {
                          var i = (t[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                          r.push(String.fromCharCode(i));
                        }
                        return r.join("");
                      },
                      parse: function (u) {
                        for (var t = u.length, e = [], r = 0; r < t; r++)
                          e[r >>> 2] |=
                            (255 & u.charCodeAt(r)) << (24 - (r % 4) * 8);
                        return new o.init(e, t);
                      },
                    }),
                    D = (a.Utf8 = {
                      stringify: function (u) {
                        try {
                          return decodeURIComponent(escape(s.stringify(u)));
                        } catch (u) {
                          throw new Error("Malformed UTF-8 data");
                        }
                      },
                      parse: function (u) {
                        return s.parse(unescape(encodeURIComponent(u)));
                      },
                    }),
                    f = (n.BufferedBlockAlgorithm = i.extend({
                      reset: function () {
                        (this._data = new o.init()), (this._nDataBytes = 0);
                      },
                      _append: function (u) {
                        "string" == typeof u && (u = D.parse(u)),
                          this._data.concat(u),
                          (this._nDataBytes += u.sigBytes);
                      },
                      _process: function (t) {
                        var e = this._data,
                          r = e.words,
                          n = e.sigBytes,
                          i = this.blockSize,
                          a = n / (4 * i),
                          c =
                            (a = t
                              ? u.ceil(a)
                              : u.max((0 | a) - this._minBufferSize, 0)) * i,
                          s = u.min(4 * c, n);
                        if (c) {
                          for (var D = 0; D < c; D += i)
                            this._doProcessBlock(r, D);
                          var f = r.splice(0, c);
                          e.sigBytes -= s;
                        }
                        return new o.init(f, s);
                      },
                      clone: function () {
                        var u = i.clone.call(this);
                        return (u._data = this._data.clone()), u;
                      },
                      _minBufferSize: 0,
                    })),
                    h =
                      ((n.Hasher = f.extend({
                        cfg: i.extend(),
                        init: function (u) {
                          (this.cfg = this.cfg.extend(u)), this.reset();
                        },
                        reset: function () {
                          f.reset.call(this), this._doReset();
                        },
                        update: function (u) {
                          return this._append(u), this._process(), this;
                        },
                        finalize: function (u) {
                          return u && this._append(u), this._doFinalize();
                        },
                        blockSize: 16,
                        _createHelper: function (u) {
                          return function (t, e) {
                            return new u.init(e).finalize(t);
                          };
                        },
                        _createHmacHelper: function (u) {
                          return function (t, e) {
                            return new h.HMAC.init(u, e).finalize(t);
                          };
                        },
                      })),
                      (r.algo = {}));
                  return r;
                })(Math)),
              r);
          },
          function (u, t, e) {
            (u.exports = function () {
              (this.listeners = {}),
                (this.registerListener = function (t, e, r) {
                  var n = t.constructor.name;
                  (r = this.validateNumber(r || "any")),
                    "Array" !== n && (t = [t]),
                    t.forEach(function (t) {
                      if ("String" !== t.constructor.name)
                        throw new Error(
                          "Only `String` and array of `String` are accepted for the event names!"
                        );
                      (u.listeners[t] = u.listeners[t] || []),
                        u.listeners[t].push({ callback: e, number: r });
                    });
                }),
                (this.validateNumber = function (u) {
                  var t = u.constructor.name;
                  if ("Number" === t) return u;
                  if ("String" === t && "any" === u.toLowerCase()) return "any";
                  throw new Error(
                    "Only `Number` and `any` are accepted in the number of possible executions!"
                  );
                }),
                (this.toBeRemoved = function (u) {
                  var t = u.number;
                  return (
                    (u.execution = u.execution || 0),
                    u.execution++,
                    !("any" === t || u.execution < t)
                  );
                });
              var u = this;
              return {
                on: function (t, e) {
                  u.registerListener.bind(u)(t, e, "any");
                },
                once: function (t, e) {
                  u.registerListener.bind(u)(t, e, 1);
                },
                exactly: function (t, e, r) {
                  u.registerListener.bind(u)(e, r, t);
                },
                die: function (t) {
                  delete u.listeners[t];
                },
                off: function (u) {
                  this.die(u);
                },
                detach: function (t, e) {
                  if (void 0 === e) return (u.listeners[t] = []), !0;
                  for (var r in u.listeners[t])
                    if (
                      u.listeners[t].hasOwnProperty(r) &&
                      u.listeners[t][r].callback === e
                    )
                      return u.listeners[t].splice(r, 1), this.detach(t, e);
                  return !0;
                },
                detachAll: function () {
                  for (var t in u.listeners)
                    u.listeners.hasOwnProperty(t) && this.detach(t);
                },
                emit: function (t, e) {
                  var r = [];
                  for (name in u.listeners)
                    if (
                      u.listeners.hasOwnProperty(name) &&
                      (name === t &&
                        Array.prototype.push.apply(r, u.listeners[name]),
                      name.indexOf("*") >= 0)
                    ) {
                      var n = name.replace(/\*\*/, "([^.]+.?)+");
                      n = n.replace(/\*/g, "[^.]+");
                      var i = t.match(n);
                      i &&
                        t === i[0] &&
                        Array.prototype.push.apply(r, u.listeners[name]);
                    }
                  var o = arguments;
                  (e = e || this),
                    r.forEach(function (r, n) {
                      var i = r.callback;
                      r.number, e && (i = i.bind(e));
                      var a = [];
                      Object.keys(o).map(function (u) {
                        u > 1 && a.push(o[u]);
                      }),
                        u.toBeRemoved(r) && u.listeners[t].splice(n, 1),
                        i.apply(null, a);
                    });
                },
              };
            }),
              (u.exports.default = u.exports);
          },
          function (u, t, e) {
            u.exports = (function () {
              function u(u, t) {
                return u((t = { exports: {} }), t.exports), t.exports;
              }
              var t = u(function (u) {
                  var t = (u.exports =
                    "undefined" != typeof window && window.Math == Math
                      ? window
                      : "undefined" != typeof self && self.Math == Math
                      ? self
                      : Function("return this")());
                  "number" == typeof __g && (__g = t);
                }),
                e = u(function (u) {
                  var t = (u.exports = { version: "2.6.5" });
                  "number" == typeof __e && (__e = t);
                }),
                r =
                  (e.version,
                  function (u) {
                    return "object" == B(u)
                      ? null !== u
                      : "function" == typeof u;
                  }),
                n = function (u) {
                  if (!r(u)) throw TypeError(u + " is not an object!");
                  return u;
                },
                i = function (u) {
                  try {
                    return !!u();
                  } catch (u) {
                    return !0;
                  }
                },
                o = !i(function () {
                  return (
                    7 !=
                    Object.defineProperty({}, "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                }),
                a = t.document,
                c = r(a) && r(a.createElement),
                s =
                  !o &&
                  !i(function () {
                    return (
                      7 !=
                      Object.defineProperty(
                        ("div", c ? a.createElement("div") : {}),
                        "a",
                        {
                          get: function () {
                            return 7;
                          },
                        }
                      ).a
                    );
                  }),
                D = Object.defineProperty,
                f = {
                  f: o
                    ? Object.defineProperty
                    : function (u, t, e) {
                        if (
                          (n(u),
                          (t = (function (u, t) {
                            if (!r(u)) return u;
                            var e, n;
                            if (
                              "function" == typeof (e = u.toString) &&
                              !r((n = e.call(u)))
                            )
                              return n;
                            if (
                              "function" == typeof (e = u.valueOf) &&
                              !r((n = e.call(u)))
                            )
                              return n;
                            throw TypeError(
                              "Can't convert object to primitive value"
                            );
                          })(t)),
                          n(e),
                          s)
                        )
                          try {
                            return D(u, t, e);
                          } catch (u) {}
                        if ("get" in e || "set" in e)
                          throw TypeError("Accessors not supported!");
                        return "value" in e && (u[t] = e.value), u;
                      },
                },
                h = o
                  ? function (u, t, e) {
                      return f.f(
                        u,
                        t,
                        (function (u, t) {
                          return {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: t,
                          };
                        })(0, e)
                      );
                    }
                  : function (u, t, e) {
                      return (u[t] = e), u;
                    },
                l = {}.hasOwnProperty,
                p = function (u, t) {
                  return l.call(u, t);
                },
                A = 0,
                E = Math.random(),
                d = u(function (u) {
                  var r =
                    t["__core-js_shared__"] || (t["__core-js_shared__"] = {});
                  (u.exports = function (u, t) {
                    return r[u] || (r[u] = void 0 !== t ? t : {});
                  })("versions", []).push({
                    version: e.version,
                    mode: "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
                  });
                })("native-function-to-string", Function.toString),
                F = u(function (u) {
                  var r = "Symbol(".concat("src", ")_", (++A + E).toString(36)),
                    n = ("" + d).split("toString");
                  (e.inspectSource = function (u) {
                    return d.call(u);
                  }),
                    (u.exports = function (u, e, i, o) {
                      var a = "function" == typeof i;
                      a && (p(i, "name") || h(i, "name", e)),
                        u[e] !== i &&
                          (a &&
                            (p(i, r) ||
                              h(i, r, u[e] ? "" + u[e] : n.join(String(e)))),
                          u === t
                            ? (u[e] = i)
                            : o
                            ? u[e]
                              ? (u[e] = i)
                              : h(u, e, i)
                            : (delete u[e], h(u, e, i)));
                    })(Function.prototype, "toString", function () {
                      return (
                        ("function" == typeof this && this[r]) || d.call(this)
                      );
                    });
                }),
                C = function (u, t, e) {
                  if (
                    ((function (u) {
                      if ("function" != typeof u)
                        throw TypeError(u + " is not a function!");
                    })(u),
                    void 0 === t)
                  )
                    return u;
                  switch (e) {
                    case 1:
                      return function (e) {
                        return u.call(t, e);
                      };
                    case 2:
                      return function (e, r) {
                        return u.call(t, e, r);
                      };
                    case 3:
                      return function (e, r, n) {
                        return u.call(t, e, r, n);
                      };
                  }
                  return function () {
                    return u.apply(t, arguments);
                  };
                },
                y = function u(r, n, i) {
                  var o,
                    a,
                    c,
                    s,
                    D = r & u.F,
                    f = r & u.G,
                    l = r & u.P,
                    p = r & u.B,
                    A = f
                      ? t
                      : r & u.S
                      ? t[n] || (t[n] = {})
                      : (t[n] || {}).prototype,
                    E = f ? e : e[n] || (e[n] = {}),
                    d = E.prototype || (E.prototype = {});
                  for (o in (f && (i = n), i))
                    (c = ((a = !D && A && void 0 !== A[o]) ? A : i)[o]),
                      (s =
                        p && a
                          ? C(c, t)
                          : l && "function" == typeof c
                          ? C(Function.call, c)
                          : c),
                      A && F(A, o, c, r & u.U),
                      E[o] != c && h(E, o, s),
                      l && d[o] != c && (d[o] = c);
                };
              (t.core = e),
                (y.F = 1),
                (y.G = 2),
                (y.S = 4),
                (y.P = 8),
                (y.B = 16),
                (y.W = 32),
                (y.U = 64),
                (y.R = 128);
              var v = y,
                g = Math.ceil,
                w = Math.floor,
                m = function (u) {
                  return isNaN((u = +u)) ? 0 : (u > 0 ? w : g)(u);
                },
                _ =
                  (!1,
                  function (u, t) {
                    var e,
                      r,
                      n = String(
                        (function (u) {
                          if (null == u)
                            throw TypeError("Can't call method on  " + u);
                          return u;
                        })(u)
                      ),
                      i = m(t),
                      o = n.length;
                    return i < 0 || i >= o
                      ? void 0
                      : (e = n.charCodeAt(i)) < 55296 ||
                        e > 56319 ||
                        i + 1 === o ||
                        (r = n.charCodeAt(i + 1)) < 56320 ||
                        r > 57343
                      ? e
                      : r - 56320 + ((e - 55296) << 10) + 65536;
                  });
              v(v.P, "String", {
                codePointAt: function (u) {
                  return _(this, u);
                },
              }),
                e.String.codePointAt;
              var b = Math.max,
                S = Math.min,
                k = function (u, t) {
                  return (u = m(u)) < 0 ? b(u + t, 0) : S(u, t);
                },
                P = String.fromCharCode,
                x = String.fromCodePoint;
              v(v.S + v.F * (!!x && 1 != x.length), "String", {
                fromCodePoint: function (u) {
                  for (
                    var t, e = arguments, r = [], n = arguments.length, i = 0;
                    n > i;

                  ) {
                    if (((t = +e[i++]), k(t, 1114111) !== t))
                      throw RangeError(t + " is not a valid code point");
                    r.push(
                      t < 65536
                        ? P(t)
                        : P(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
                    );
                  }
                  return r.join("");
                },
              }),
                e.String.fromCodePoint;
              var O,
                T,
                R,
                L,
                N,
                I,
                j,
                U,
                M,
                Y,
                z,
                H,
                V,
                K,
                G = {
                  Space_Separator: /[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
                  ID_Start:
                    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
                  ID_Continue:
                    /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
                },
                J = function (u) {
                  return (
                    "string" == typeof u &&
                    ((u >= "a" && u <= "z") ||
                      (u >= "A" && u <= "Z") ||
                      "$" === u ||
                      "_" === u ||
                      G.ID_Start.test(u))
                  );
                },
                $ = function (u) {
                  return (
                    "string" == typeof u &&
                    ((u >= "a" && u <= "z") ||
                      (u >= "A" && u <= "Z") ||
                      (u >= "0" && u <= "9") ||
                      "$" === u ||
                      "_" === u ||
                      "‌" === u ||
                      "‍" === u ||
                      G.ID_Continue.test(u))
                  );
                },
                W = function (u) {
                  return "string" == typeof u && /[0-9]/.test(u);
                },
                q = function (u) {
                  return "string" == typeof u && /[0-9A-Fa-f]/.test(u);
                };
              function X() {
                for (Y = "default", z = "", H = !1, V = 1; ; ) {
                  K = Q();
                  var u = uu[Y]();
                  if (u) return u;
                }
              }
              function Q() {
                if (O[L]) return String.fromCodePoint(O.codePointAt(L));
              }
              function Z() {
                var u = Q();
                return (
                  "\n" === u ? (N++, (I = 0)) : u ? (I += u.length) : I++,
                  u && (L += u.length),
                  u
                );
              }
              var uu = {
                default: function () {
                  switch (K) {
                    case "\t":
                    case "\v":
                    case "\f":
                    case " ":
                    case " ":
                    case "\ufeff":
                    case "\n":
                    case "\r":
                    case "\u2028":
                    case "\u2029":
                      return void Z();
                    case "/":
                      return Z(), void (Y = "comment");
                    case void 0:
                      return Z(), tu("eof");
                  }
                  if (
                    !(function (u) {
                      return "string" == typeof u && G.Space_Separator.test(u);
                    })(K)
                  )
                    return uu[T]();
                  Z();
                },
                comment: function () {
                  switch (K) {
                    case "*":
                      return Z(), void (Y = "multiLineComment");
                    case "/":
                      return Z(), void (Y = "singleLineComment");
                  }
                  throw au(Z());
                },
                multiLineComment: function () {
                  switch (K) {
                    case "*":
                      return Z(), void (Y = "multiLineCommentAsterisk");
                    case void 0:
                      throw au(Z());
                  }
                  Z();
                },
                multiLineCommentAsterisk: function () {
                  switch (K) {
                    case "*":
                      return void Z();
                    case "/":
                      return Z(), void (Y = "default");
                    case void 0:
                      throw au(Z());
                  }
                  Z(), (Y = "multiLineComment");
                },
                singleLineComment: function () {
                  switch (K) {
                    case "\n":
                    case "\r":
                    case "\u2028":
                    case "\u2029":
                      return Z(), void (Y = "default");
                    case void 0:
                      return Z(), tu("eof");
                  }
                  Z();
                },
                value: function () {
                  switch (K) {
                    case "{":
                    case "[":
                      return tu("punctuator", Z());
                    case "n":
                      return Z(), eu("ull"), tu("null", null);
                    case "t":
                      return Z(), eu("rue"), tu("boolean", !0);
                    case "f":
                      return Z(), eu("alse"), tu("boolean", !1);
                    case "-":
                    case "+":
                      return "-" === Z() && (V = -1), void (Y = "sign");
                    case ".":
                      return (z = Z()), void (Y = "decimalPointLeading");
                    case "0":
                      return (z = Z()), void (Y = "zero");
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                      return (z = Z()), void (Y = "decimalInteger");
                    case "I":
                      return Z(), eu("nfinity"), tu("numeric", 1 / 0);
                    case "N":
                      return Z(), eu("aN"), tu("numeric", NaN);
                    case '"':
                    case "'":
                      return (H = '"' === Z()), (z = ""), void (Y = "string");
                  }
                  throw au(Z());
                },
                identifierNameStartEscape: function () {
                  if ("u" !== K) throw au(Z());
                  Z();
                  var u = ru();
                  switch (u) {
                    case "$":
                    case "_":
                      break;
                    default:
                      if (!J(u)) throw su();
                  }
                  (z += u), (Y = "identifierName");
                },
                identifierName: function () {
                  switch (K) {
                    case "$":
                    case "_":
                    case "‌":
                    case "‍":
                      return void (z += Z());
                    case "\\":
                      return Z(), void (Y = "identifierNameEscape");
                  }
                  if (!$(K)) return tu("identifier", z);
                  z += Z();
                },
                identifierNameEscape: function () {
                  if ("u" !== K) throw au(Z());
                  Z();
                  var u = ru();
                  switch (u) {
                    case "$":
                    case "_":
                    case "‌":
                    case "‍":
                      break;
                    default:
                      if (!$(u)) throw su();
                  }
                  (z += u), (Y = "identifierName");
                },
                sign: function () {
                  switch (K) {
                    case ".":
                      return (z = Z()), void (Y = "decimalPointLeading");
                    case "0":
                      return (z = Z()), void (Y = "zero");
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                      return (z = Z()), void (Y = "decimalInteger");
                    case "I":
                      return Z(), eu("nfinity"), tu("numeric", V * (1 / 0));
                    case "N":
                      return Z(), eu("aN"), tu("numeric", NaN);
                  }
                  throw au(Z());
                },
                zero: function () {
                  switch (K) {
                    case ".":
                      return (z += Z()), void (Y = "decimalPoint");
                    case "e":
                    case "E":
                      return (z += Z()), void (Y = "decimalExponent");
                    case "x":
                    case "X":
                      return (z += Z()), void (Y = "hexadecimal");
                  }
                  return tu("numeric", 0 * V);
                },
                decimalInteger: function () {
                  switch (K) {
                    case ".":
                      return (z += Z()), void (Y = "decimalPoint");
                    case "e":
                    case "E":
                      return (z += Z()), void (Y = "decimalExponent");
                  }
                  if (!W(K)) return tu("numeric", V * Number(z));
                  z += Z();
                },
                decimalPointLeading: function () {
                  if (W(K)) return (z += Z()), void (Y = "decimalFraction");
                  throw au(Z());
                },
                decimalPoint: function () {
                  switch (K) {
                    case "e":
                    case "E":
                      return (z += Z()), void (Y = "decimalExponent");
                  }
                  return W(K)
                    ? ((z += Z()), void (Y = "decimalFraction"))
                    : tu("numeric", V * Number(z));
                },
                decimalFraction: function () {
                  switch (K) {
                    case "e":
                    case "E":
                      return (z += Z()), void (Y = "decimalExponent");
                  }
                  if (!W(K)) return tu("numeric", V * Number(z));
                  z += Z();
                },
                decimalExponent: function () {
                  switch (K) {
                    case "+":
                    case "-":
                      return (z += Z()), void (Y = "decimalExponentSign");
                  }
                  if (W(K))
                    return (z += Z()), void (Y = "decimalExponentInteger");
                  throw au(Z());
                },
                decimalExponentSign: function () {
                  if (W(K))
                    return (z += Z()), void (Y = "decimalExponentInteger");
                  throw au(Z());
                },
                decimalExponentInteger: function () {
                  if (!W(K)) return tu("numeric", V * Number(z));
                  z += Z();
                },
                hexadecimal: function () {
                  if (q(K)) return (z += Z()), void (Y = "hexadecimalInteger");
                  throw au(Z());
                },
                hexadecimalInteger: function () {
                  if (!q(K)) return tu("numeric", V * Number(z));
                  z += Z();
                },
                string: function () {
                  switch (K) {
                    case "\\":
                      return (
                        Z(),
                        void (z += (function () {
                          switch (Q()) {
                            case "b":
                              return Z(), "\b";
                            case "f":
                              return Z(), "\f";
                            case "n":
                              return Z(), "\n";
                            case "r":
                              return Z(), "\r";
                            case "t":
                              return Z(), "\t";
                            case "v":
                              return Z(), "\v";
                            case "0":
                              if ((Z(), W(Q()))) throw au(Z());
                              return "\0";
                            case "x":
                              return (
                                Z(),
                                (function () {
                                  var u = "",
                                    t = Q();
                                  if (!q(t)) throw au(Z());
                                  if (((u += Z()), (t = Q()), !q(t)))
                                    throw au(Z());
                                  return (
                                    (u += Z()),
                                    String.fromCodePoint(parseInt(u, 16))
                                  );
                                })()
                              );
                            case "u":
                              return Z(), ru();
                            case "\n":
                            case "\u2028":
                            case "\u2029":
                              return Z(), "";
                            case "\r":
                              return Z(), "\n" === Q() && Z(), "";
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6":
                            case "7":
                            case "8":
                            case "9":
                            case void 0:
                              throw au(Z());
                          }
                          return Z();
                        })())
                      );
                    case '"':
                      return H ? (Z(), tu("string", z)) : void (z += Z());
                    case "'":
                      return H ? void (z += Z()) : (Z(), tu("string", z));
                    case "\n":
                    case "\r":
                    case void 0:
                      throw au(Z());
                    case "\u2028":
                    case "\u2029":
                      !(function (u) {
                        console.warn(
                          "JSON5: '" +
                            Du(u) +
                            "' in strings is not valid ECMAScript; consider escaping"
                        );
                      })(K);
                  }
                  z += Z();
                },
                start: function () {
                  switch (K) {
                    case "{":
                    case "[":
                      return tu("punctuator", Z());
                  }
                  Y = "value";
                },
                beforePropertyName: function () {
                  switch (K) {
                    case "$":
                    case "_":
                      return (z = Z()), void (Y = "identifierName");
                    case "\\":
                      return Z(), void (Y = "identifierNameStartEscape");
                    case "}":
                      return tu("punctuator", Z());
                    case '"':
                    case "'":
                      return (H = '"' === Z()), void (Y = "string");
                  }
                  if (J(K)) return (z += Z()), void (Y = "identifierName");
                  throw au(Z());
                },
                afterPropertyName: function () {
                  if (":" === K) return tu("punctuator", Z());
                  throw au(Z());
                },
                beforePropertyValue: function () {
                  Y = "value";
                },
                afterPropertyValue: function () {
                  switch (K) {
                    case ",":
                    case "}":
                      return tu("punctuator", Z());
                  }
                  throw au(Z());
                },
                beforeArrayValue: function () {
                  if ("]" === K) return tu("punctuator", Z());
                  Y = "value";
                },
                afterArrayValue: function () {
                  switch (K) {
                    case ",":
                    case "]":
                      return tu("punctuator", Z());
                  }
                  throw au(Z());
                },
                end: function () {
                  throw au(Z());
                },
              };
              function tu(u, t) {
                return { type: u, value: t, line: N, column: I };
              }
              function eu(u) {
                for (var t = 0, e = u; t < e.length; t += 1) {
                  var r = e[t];
                  if (Q() !== r) throw au(Z());
                  Z();
                }
              }
              function ru() {
                for (var u = "", t = 4; t-- > 0; ) {
                  var e = Q();
                  if (!q(e)) throw au(Z());
                  u += Z();
                }
                return String.fromCodePoint(parseInt(u, 16));
              }
              var nu = {
                start: function () {
                  if ("eof" === j.type) throw cu();
                  iu();
                },
                beforePropertyName: function () {
                  switch (j.type) {
                    case "identifier":
                    case "string":
                      return (U = j.value), void (T = "afterPropertyName");
                    case "punctuator":
                      return void ou();
                    case "eof":
                      throw cu();
                  }
                },
                afterPropertyName: function () {
                  if ("eof" === j.type) throw cu();
                  T = "beforePropertyValue";
                },
                beforePropertyValue: function () {
                  if ("eof" === j.type) throw cu();
                  iu();
                },
                beforeArrayValue: function () {
                  if ("eof" === j.type) throw cu();
                  "punctuator" !== j.type || "]" !== j.value ? iu() : ou();
                },
                afterPropertyValue: function () {
                  if ("eof" === j.type) throw cu();
                  switch (j.value) {
                    case ",":
                      return void (T = "beforePropertyName");
                    case "}":
                      ou();
                  }
                },
                afterArrayValue: function () {
                  if ("eof" === j.type) throw cu();
                  switch (j.value) {
                    case ",":
                      return void (T = "beforeArrayValue");
                    case "]":
                      ou();
                  }
                },
                end: function () {},
              };
              function iu() {
                var u;
                switch (j.type) {
                  case "punctuator":
                    switch (j.value) {
                      case "{":
                        u = {};
                        break;
                      case "[":
                        u = [];
                    }
                    break;
                  case "null":
                  case "boolean":
                  case "numeric":
                  case "string":
                    u = j.value;
                }
                if (void 0 === M) M = u;
                else {
                  var t = R[R.length - 1];
                  Array.isArray(t) ? t.push(u) : (t[U] = u);
                }
                if (null !== u && "object" == B(u))
                  R.push(u),
                    (T = Array.isArray(u)
                      ? "beforeArrayValue"
                      : "beforePropertyName");
                else {
                  var e = R[R.length - 1];
                  T =
                    null == e
                      ? "end"
                      : Array.isArray(e)
                      ? "afterArrayValue"
                      : "afterPropertyValue";
                }
              }
              function ou() {
                R.pop();
                var u = R[R.length - 1];
                T =
                  null == u
                    ? "end"
                    : Array.isArray(u)
                    ? "afterArrayValue"
                    : "afterPropertyValue";
              }
              function au(u) {
                return fu(
                  void 0 === u
                    ? "JSON5: invalid end of input at " + N + ":" + I
                    : "JSON5: invalid character '" +
                        Du(u) +
                        "' at " +
                        N +
                        ":" +
                        I
                );
              }
              function cu() {
                return fu("JSON5: invalid end of input at " + N + ":" + I);
              }
              function su() {
                return fu(
                  "JSON5: invalid identifier character at " + N + ":" + (I -= 5)
                );
              }
              function Du(u) {
                var t = {
                  "'": "\\'",
                  '"': '\\"',
                  "\\": "\\\\",
                  "\b": "\\b",
                  "\f": "\\f",
                  "\n": "\\n",
                  "\r": "\\r",
                  "\t": "\\t",
                  "\v": "\\v",
                  "\0": "\\0",
                  "\u2028": "\\u2028",
                  "\u2029": "\\u2029",
                };
                if (t[u]) return t[u];
                if (u < " ") {
                  var e = u.charCodeAt(0).toString(16);
                  return "\\x" + ("00" + e).substring(e.length);
                }
                return u;
              }
              function fu(u) {
                var t = new SyntaxError(u);
                return (t.lineNumber = N), (t.columnNumber = I), t;
              }
              return {
                parse: function (u, t) {
                  (O = String(u)),
                    (T = "start"),
                    (R = []),
                    (L = 0),
                    (N = 1),
                    (I = 0),
                    (j = void 0),
                    (U = void 0),
                    (M = void 0);
                  do {
                    (j = X()), nu[T]();
                  } while ("eof" !== j.type);
                  return "function" == typeof t
                    ? (function u(t, e, r) {
                        var n = t[e];
                        if (null != n && "object" == B(n))
                          for (var i in n) {
                            var o = u(n, i, r);
                            void 0 === o ? delete n[i] : (n[i] = o);
                          }
                        return r.call(t, e, n);
                      })({ "": M }, "", t)
                    : M;
                },
                stringify: function (u, t, e) {
                  var r,
                    n,
                    i,
                    o = [],
                    a = "",
                    c = "";
                  if (
                    (null == t ||
                      "object" != B(t) ||
                      Array.isArray(t) ||
                      ((e = t.space), (i = t.quote), (t = t.replacer)),
                    "function" == typeof t)
                  )
                    n = t;
                  else if (Array.isArray(t)) {
                    r = [];
                    for (var s = 0, D = t; s < D.length; s += 1) {
                      var f = D[s],
                        h = void 0;
                      "string" == typeof f
                        ? (h = f)
                        : ("number" == typeof f ||
                            f instanceof String ||
                            f instanceof Number) &&
                          (h = String(f)),
                        void 0 !== h && r.indexOf(h) < 0 && r.push(h);
                    }
                  }
                  return (
                    e instanceof Number
                      ? (e = Number(e))
                      : e instanceof String && (e = String(e)),
                    "number" == typeof e
                      ? e > 0 &&
                        ((e = Math.min(10, Math.floor(e))),
                        (c = "          ".substr(0, e)))
                      : "string" == typeof e && (c = e.substr(0, 10)),
                    (function u(t, e) {
                      var i = e[t];
                      switch (
                        (null != i &&
                          ("function" == typeof i.toJSON5
                            ? (i = i.toJSON5(t))
                            : "function" == typeof i.toJSON &&
                              (i = i.toJSON(t))),
                        n && (i = n.call(e, t, i)),
                        i instanceof Number
                          ? (i = Number(i))
                          : i instanceof String
                          ? (i = String(i))
                          : i instanceof Boolean && (i = i.valueOf()),
                        i)
                      ) {
                        case null:
                          return "null";
                        case !0:
                          return "true";
                        case !1:
                          return "false";
                      }
                      return "string" == typeof i
                        ? l(i)
                        : "number" == typeof i
                        ? String(i)
                        : "object" == B(i)
                        ? Array.isArray(i)
                          ? (function (t) {
                              if (o.indexOf(t) >= 0)
                                throw TypeError(
                                  "Converting circular structure to JSON5"
                                );
                              o.push(t);
                              var e = a;
                              a += c;
                              for (var r, n = [], i = 0; i < t.length; i++) {
                                var s = u(String(i), t);
                                n.push(void 0 !== s ? s : "null");
                              }
                              if (0 === n.length) r = "[]";
                              else if ("" === c) {
                                r = "[" + n.join(",") + "]";
                              } else {
                                var D = ",\n" + a,
                                  f = n.join(D);
                                r = "[\n" + a + f + ",\n" + e + "]";
                              }
                              return o.pop(), (a = e), r;
                            })(i)
                          : (function (t) {
                              if (o.indexOf(t) >= 0)
                                throw TypeError(
                                  "Converting circular structure to JSON5"
                                );
                              o.push(t);
                              var e = a;
                              a += c;
                              for (
                                var n,
                                  i,
                                  s = [],
                                  D = 0,
                                  f = r || Object.keys(t);
                                D < f.length;
                                D += 1
                              ) {
                                var h = f[D],
                                  l = u(h, t);
                                if (void 0 !== l) {
                                  var A = p(h) + ":";
                                  "" !== c && (A += " "), (A += l), s.push(A);
                                }
                              }
                              if (0 === s.length) n = "{}";
                              else if ("" === c)
                                n = "{" + (i = s.join(",")) + "}";
                              else {
                                var E = ",\n" + a;
                                (i = s.join(E)),
                                  (n = "{\n" + a + i + ",\n" + e + "}");
                              }
                              return o.pop(), (a = e), n;
                            })(i)
                        : void 0;
                    })("", { "": u })
                  );
                  function l(u) {
                    for (
                      var t = { "'": 0.1, '"': 0.2 },
                        e = {
                          "'": "\\'",
                          '"': '\\"',
                          "\\": "\\\\",
                          "\b": "\\b",
                          "\f": "\\f",
                          "\n": "\\n",
                          "\r": "\\r",
                          "\t": "\\t",
                          "\v": "\\v",
                          "\0": "\\0",
                          "\u2028": "\\u2028",
                          "\u2029": "\\u2029",
                        },
                        r = "",
                        n = 0;
                      n < u.length;
                      n++
                    ) {
                      var o = u[n];
                      switch (o) {
                        case "'":
                        case '"':
                          t[o]++, (r += o);
                          continue;
                        case "\0":
                          if (W(u[n + 1])) {
                            r += "\\x00";
                            continue;
                          }
                      }
                      if (e[o]) r += e[o];
                      else if (o < " ") {
                        var a = o.charCodeAt(0).toString(16);
                        r += "\\x" + ("00" + a).substring(a.length);
                      } else r += o;
                    }
                    var c =
                      i ||
                      Object.keys(t).reduce(function (u, e) {
                        return t[u] < t[e] ? u : e;
                      });
                    return c + (r = r.replace(new RegExp(c, "g"), e[c])) + c;
                  }
                  function p(u) {
                    if (0 === u.length) return l(u);
                    var t = String.fromCodePoint(u.codePointAt(0));
                    if (!J(t)) return l(u);
                    for (var e = t.length; e < u.length; e++)
                      if (!$(String.fromCodePoint(u.codePointAt(e))))
                        return l(u);
                    return u;
                  }
                },
              };
            })();
          },
          function (u, t, e) {
            t.__esModule = !0;
            var r = e(4),
              n = e(5),
              i = e(6),
              o =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
            function a(u) {
              for (var t = "", e = i(u), r = 256 / o.length, n = 0; n < u; n++)
                t += o.charAt(Math.floor(e[n] / r));
              return t;
            }
            function c(u) {
              if ((void 0 === u && (u = 128), u < 43 || u > 128))
                throw new Error("expected length " + u + " between 43 and 128");
              return a(u);
            }
            function s(u) {
              return (function (u) {
                return u
                  .replace(/=/g, "")
                  .replace(/\+/g, "-")
                  .replace(/\//g, "_");
              })(((t = u), n.stringify(r(t))));
              var t;
            }
            (t.random = a),
              (t.createVerifier = c),
              (t.createChallenge = s),
              (t.create = function (u) {
                void 0 === u && (u = 128);
                var t = c(u);
                return { codeVerifier: t, codeChallenge: s(t) };
              });
          },
          function (u, t, e) {
            var r;
            u.exports =
              ((r = e(0)),
              (function (u) {
                var t = r,
                  e = t.lib,
                  n = e.WordArray,
                  i = e.Hasher,
                  o = t.algo,
                  a = [],
                  c = [];
                !(function () {
                  function t(t) {
                    for (var e = u.sqrt(t), r = 2; r <= e; r++)
                      if (!(t % r)) return !1;
                    return !0;
                  }
                  function e(u) {
                    return (4294967296 * (u - (0 | u))) | 0;
                  }
                  for (var r = 2, n = 0; n < 64; )
                    t(r) &&
                      (n < 8 && (a[n] = e(u.pow(r, 0.5))),
                      (c[n] = e(u.pow(r, 1 / 3))),
                      n++),
                      r++;
                })();
                var s = [],
                  D = (o.SHA256 = i.extend({
                    _doReset: function () {
                      this._hash = new n.init(a.slice(0));
                    },
                    _doProcessBlock: function (u, t) {
                      for (
                        var e = this._hash.words,
                          r = e[0],
                          n = e[1],
                          i = e[2],
                          o = e[3],
                          a = e[4],
                          D = e[5],
                          f = e[6],
                          h = e[7],
                          l = 0;
                        l < 64;
                        l++
                      ) {
                        if (l < 16) s[l] = 0 | u[t + l];
                        else {
                          var p = s[l - 15],
                            A =
                              ((p << 25) | (p >>> 7)) ^
                              ((p << 14) | (p >>> 18)) ^
                              (p >>> 3),
                            E = s[l - 2],
                            d =
                              ((E << 15) | (E >>> 17)) ^
                              ((E << 13) | (E >>> 19)) ^
                              (E >>> 10);
                          s[l] = A + s[l - 7] + d + s[l - 16];
                        }
                        var F = (r & n) ^ (r & i) ^ (n & i),
                          C =
                            ((r << 30) | (r >>> 2)) ^
                            ((r << 19) | (r >>> 13)) ^
                            ((r << 10) | (r >>> 22)),
                          y =
                            h +
                            (((a << 26) | (a >>> 6)) ^
                              ((a << 21) | (a >>> 11)) ^
                              ((a << 7) | (a >>> 25))) +
                            ((a & D) ^ (~a & f)) +
                            c[l] +
                            s[l];
                        (h = f),
                          (f = D),
                          (D = a),
                          (a = (o + y) | 0),
                          (o = i),
                          (i = n),
                          (n = r),
                          (r = (y + (C + F)) | 0);
                      }
                      (e[0] = (e[0] + r) | 0),
                        (e[1] = (e[1] + n) | 0),
                        (e[2] = (e[2] + i) | 0),
                        (e[3] = (e[3] + o) | 0),
                        (e[4] = (e[4] + a) | 0),
                        (e[5] = (e[5] + D) | 0),
                        (e[6] = (e[6] + f) | 0),
                        (e[7] = (e[7] + h) | 0);
                    },
                    _doFinalize: function () {
                      var t = this._data,
                        e = t.words,
                        r = 8 * this._nDataBytes,
                        n = 8 * t.sigBytes;
                      return (
                        (e[n >>> 5] |= 128 << (24 - (n % 32))),
                        (e[14 + (((n + 64) >>> 9) << 4)] = u.floor(
                          r / 4294967296
                        )),
                        (e[15 + (((n + 64) >>> 9) << 4)] = r),
                        (t.sigBytes = 4 * e.length),
                        this._process(),
                        this._hash
                      );
                    },
                    clone: function () {
                      var u = i.clone.call(this);
                      return (u._hash = this._hash.clone()), u;
                    },
                  }));
                (t.SHA256 = i._createHelper(D)),
                  (t.HmacSHA256 = i._createHmacHelper(D));
              })(Math),
              r.SHA256);
          },
          function (u, t, e) {
            var r, n, i;
            u.exports =
              ((i = e(0)),
              (n = (r = i).lib.WordArray),
              (r.enc.Base64 = {
                stringify: function (u) {
                  var t = u.words,
                    e = u.sigBytes,
                    r = this._map;
                  u.clamp();
                  for (var n = [], i = 0; i < e; i += 3)
                    for (
                      var o =
                          (((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                          (((t[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) &
                            255) <<
                            8) |
                          ((t[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) &
                            255),
                        a = 0;
                      a < 4 && i + 0.75 * a < e;
                      a++
                    )
                      n.push(r.charAt((o >>> (6 * (3 - a))) & 63));
                  var c = r.charAt(64);
                  if (c) for (; n.length % 4; ) n.push(c);
                  return n.join("");
                },
                parse: function (u) {
                  var t = u.length,
                    e = this._map,
                    r = this._reverseMap;
                  if (!r) {
                    r = this._reverseMap = [];
                    for (var i = 0; i < e.length; i++) r[e.charCodeAt(i)] = i;
                  }
                  var o = e.charAt(64);
                  if (o) {
                    var a = u.indexOf(o);
                    -1 !== a && (t = a);
                  }
                  return (function (u, t, e) {
                    for (var r = [], i = 0, o = 0; o < t; o++)
                      if (o % 4) {
                        var a = e[u.charCodeAt(o - 1)] << ((o % 4) * 2),
                          c = e[u.charCodeAt(o)] >>> (6 - (o % 4) * 2);
                        (r[i >>> 2] |= (a | c) << (24 - (i % 4) * 8)), i++;
                      }
                    return n.create(r, i);
                  })(u, t, r);
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              }),
              i.enc.Base64);
          },
          function (u, t, e) {
            (function (r, n) {
              var i;
              !(function (o) {
                function a(u, t) {
                  if (
                    ((t = t || { type: "Array" }),
                    void 0 !== r &&
                      "number" == typeof r.pid &&
                      r.versions &&
                      r.versions.node)
                  )
                    return (function (u, t) {
                      var r = e(13).randomBytes(u);
                      switch (t.type) {
                        case "Array":
                          return [].slice.call(r);
                        case "Buffer":
                          return r;
                        case "Uint8Array":
                          for (var n = new Uint8Array(u), i = 0; i < u; ++i)
                            n[i] = r.readUInt8(i);
                          return n;
                        default:
                          throw new Error(t.type + " is unsupported.");
                      }
                    })(u, t);
                  if (!window.crypto && !window.msCrypto)
                    throw new Error(
                      "Your browser does not support window.crypto."
                    );
                  return (function (u, t) {
                    var e = new Uint8Array(u);
                    switch (
                      ((window.crypto || window.msCrypto).getRandomValues(e),
                      t.type)
                    ) {
                      case "Array":
                        return [].slice.call(e);
                      case "Buffer":
                        try {
                          new n(1);
                        } catch (u) {
                          throw new Error(
                            "Buffer not supported in this environment. Use Node.js or Browserify for browser support."
                          );
                        }
                        return new n(e);
                      case "Uint8Array":
                        return e;
                      default:
                        throw new Error(t.type + " is unsupported.");
                    }
                  })(u, t);
                }
                void 0 ===
                  (i = function () {
                    return a;
                  }.apply(t, [])) || (u.exports = i),
                  (a.randomArray = function (u) {
                    return a(u, { type: "Array" });
                  }),
                  (a.randomUint8Array = function (u) {
                    return a(u, { type: "Uint8Array" });
                  }),
                  (a.randomBuffer = function (u) {
                    return a(u, { type: "Buffer" });
                  });
              })();
            }.call(this, e(7), e(8).Buffer));
          },
          function (u, t) {
            var e,
              r,
              n = (u.exports = {});
            function i() {
              throw new Error("setTimeout has not been defined");
            }
            function o() {
              throw new Error("clearTimeout has not been defined");
            }
            function a(u) {
              if (e === setTimeout) return setTimeout(u, 0);
              if ((e === i || !e) && setTimeout)
                return (e = setTimeout), setTimeout(u, 0);
              try {
                return e(u, 0);
              } catch (t) {
                try {
                  return e.call(null, u, 0);
                } catch (t) {
                  return e.call(this, u, 0);
                }
              }
            }
            !(function () {
              try {
                e = "function" == typeof setTimeout ? setTimeout : i;
              } catch (u) {
                e = i;
              }
              try {
                r = "function" == typeof clearTimeout ? clearTimeout : o;
              } catch (u) {
                r = o;
              }
            })();
            var c,
              s = [],
              D = !1,
              f = -1;
            function h() {
              D &&
                c &&
                ((D = !1),
                c.length ? (s = c.concat(s)) : (f = -1),
                s.length && l());
            }
            function l() {
              if (!D) {
                var u = a(h);
                D = !0;
                for (var t = s.length; t; ) {
                  for (c = s, s = []; ++f < t; ) c && c[f].run();
                  (f = -1), (t = s.length);
                }
                (c = null),
                  (D = !1),
                  (function (u) {
                    if (r === clearTimeout) return clearTimeout(u);
                    if ((r === o || !r) && clearTimeout)
                      return (r = clearTimeout), clearTimeout(u);
                    try {
                      r(u);
                    } catch (t) {
                      try {
                        return r.call(null, u);
                      } catch (t) {
                        return r.call(this, u);
                      }
                    }
                  })(u);
              }
            }
            function p(u, t) {
              (this.fun = u), (this.array = t);
            }
            function A() {}
            (n.nextTick = function (u) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var e = 1; e < arguments.length; e++)
                  t[e - 1] = arguments[e];
              s.push(new p(u, t)), 1 !== s.length || D || a(l);
            }),
              (p.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (n.title = "browser"),
              (n.browser = !0),
              (n.env = {}),
              (n.argv = []),
              (n.version = ""),
              (n.versions = {}),
              (n.on = A),
              (n.addListener = A),
              (n.once = A),
              (n.off = A),
              (n.removeListener = A),
              (n.removeAllListeners = A),
              (n.emit = A),
              (n.prependListener = A),
              (n.prependOnceListener = A),
              (n.listeners = function (u) {
                return [];
              }),
              (n.binding = function (u) {
                throw new Error("process.binding is not supported");
              }),
              (n.cwd = function () {
                return "/";
              }),
              (n.chdir = function (u) {
                throw new Error("process.chdir is not supported");
              }),
              (n.umask = function () {
                return 0;
              });
          },
          function (u, t, e) {
            (function (u) {
              var r = e(10),
                n = e(11),
                i = e(12);
              function o() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
              }
              function a(u, t) {
                if (o() < t) throw new RangeError("Invalid typed array length");
                return (
                  c.TYPED_ARRAY_SUPPORT
                    ? ((u = new Uint8Array(t)).__proto__ = c.prototype)
                    : (null === u && (u = new c(t)), (u.length = t)),
                  u
                );
              }
              function c(u, t, e) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
                  return new c(u, t, e);
                if ("number" == typeof u) {
                  if ("string" == typeof t)
                    throw new Error(
                      "If encoding is specified then the first argument must be a string"
                    );
                  return f(this, u);
                }
                return s(this, u, t, e);
              }
              function s(u, t, e, r) {
                if ("number" == typeof t)
                  throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer &&
                  t instanceof ArrayBuffer
                  ? (function (u, t, e, r) {
                      if ((t.byteLength, e < 0 || t.byteLength < e))
                        throw new RangeError("'offset' is out of bounds");
                      if (t.byteLength < e + (r || 0))
                        throw new RangeError("'length' is out of bounds");
                      return (
                        (t =
                          void 0 === e && void 0 === r
                            ? new Uint8Array(t)
                            : void 0 === r
                            ? new Uint8Array(t, e)
                            : new Uint8Array(t, e, r)),
                        c.TYPED_ARRAY_SUPPORT
                          ? ((u = t).__proto__ = c.prototype)
                          : (u = h(u, t)),
                        u
                      );
                    })(u, t, e, r)
                  : "string" == typeof t
                  ? (function (u, t, e) {
                      if (
                        (("string" == typeof e && "" !== e) || (e = "utf8"),
                        !c.isEncoding(e))
                      )
                        throw new TypeError(
                          '"encoding" must be a valid string encoding'
                        );
                      var r = 0 | p(t, e),
                        n = (u = a(u, r)).write(t, e);
                      return n !== r && (u = u.slice(0, n)), u;
                    })(u, t, e)
                  : (function (u, t) {
                      if (c.isBuffer(t)) {
                        var e = 0 | l(t.length);
                        return (
                          0 === (u = a(u, e)).length || t.copy(u, 0, 0, e), u
                        );
                      }
                      if (t) {
                        if (
                          ("undefined" != typeof ArrayBuffer &&
                            t.buffer instanceof ArrayBuffer) ||
                          "length" in t
                        )
                          return "number" != typeof t.length ||
                            (r = t.length) != r
                            ? a(u, 0)
                            : h(u, t);
                        if ("Buffer" === t.type && i(t.data))
                          return h(u, t.data);
                      }
                      var r;
                      throw new TypeError(
                        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                      );
                    })(u, t);
              }
              function D(u) {
                if ("number" != typeof u)
                  throw new TypeError('"size" argument must be a number');
                if (u < 0)
                  throw new RangeError('"size" argument must not be negative');
              }
              function f(u, t) {
                if (
                  (D(t),
                  (u = a(u, t < 0 ? 0 : 0 | l(t))),
                  !c.TYPED_ARRAY_SUPPORT)
                )
                  for (var e = 0; e < t; ++e) u[e] = 0;
                return u;
              }
              function h(u, t) {
                var e = t.length < 0 ? 0 : 0 | l(t.length);
                u = a(u, e);
                for (var r = 0; r < e; r += 1) u[r] = 255 & t[r];
                return u;
              }
              function l(u) {
                if (u >= o())
                  throw new RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x" +
                      o().toString(16) +
                      " bytes"
                  );
                return 0 | u;
              }
              function p(u, t) {
                if (c.isBuffer(u)) return u.length;
                if (
                  "undefined" != typeof ArrayBuffer &&
                  "function" == typeof ArrayBuffer.isView &&
                  (ArrayBuffer.isView(u) || u instanceof ArrayBuffer)
                )
                  return u.byteLength;
                "string" != typeof u && (u = "" + u);
                var e = u.length;
                if (0 === e) return 0;
                for (var r = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return e;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                      return M(u).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * e;
                    case "hex":
                      return e >>> 1;
                    case "base64":
                      return Y(u).length;
                    default:
                      if (r) return M(u).length;
                      (t = ("" + t).toLowerCase()), (r = !0);
                  }
              }
              function A(u, t, e) {
                var r = !1;
                if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                  return "";
                if (
                  ((void 0 === e || e > this.length) && (e = this.length),
                  e <= 0)
                )
                  return "";
                if ((e >>>= 0) <= (t >>>= 0)) return "";
                for (u || (u = "utf8"); ; )
                  switch (u) {
                    case "hex":
                      return k(this, t, e);
                    case "utf8":
                    case "utf-8":
                      return _(this, t, e);
                    case "ascii":
                      return b(this, t, e);
                    case "latin1":
                    case "binary":
                      return S(this, t, e);
                    case "base64":
                      return m(this, t, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return P(this, t, e);
                    default:
                      if (r) throw new TypeError("Unknown encoding: " + u);
                      (u = (u + "").toLowerCase()), (r = !0);
                  }
              }
              function E(u, t, e) {
                var r = u[t];
                (u[t] = u[e]), (u[e] = r);
              }
              function d(u, t, e, r, n) {
                if (0 === u.length) return -1;
                if (
                  ("string" == typeof e
                    ? ((r = e), (e = 0))
                    : e > 2147483647
                    ? (e = 2147483647)
                    : e < -2147483648 && (e = -2147483648),
                  (e = +e),
                  isNaN(e) && (e = n ? 0 : u.length - 1),
                  e < 0 && (e = u.length + e),
                  e >= u.length)
                ) {
                  if (n) return -1;
                  e = u.length - 1;
                } else if (e < 0) {
                  if (!n) return -1;
                  e = 0;
                }
                if (("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t)))
                  return 0 === t.length ? -1 : F(u, t, e, r, n);
                if ("number" == typeof t)
                  return (
                    (t &= 255),
                    c.TYPED_ARRAY_SUPPORT &&
                    "function" == typeof Uint8Array.prototype.indexOf
                      ? n
                        ? Uint8Array.prototype.indexOf.call(u, t, e)
                        : Uint8Array.prototype.lastIndexOf.call(u, t, e)
                      : F(u, [t], e, r, n)
                  );
                throw new TypeError("val must be string, number or Buffer");
              }
              function F(u, t, e, r, n) {
                var i,
                  o = 1,
                  a = u.length,
                  c = t.length;
                if (
                  void 0 !== r &&
                  ("ucs2" === (r = String(r).toLowerCase()) ||
                    "ucs-2" === r ||
                    "utf16le" === r ||
                    "utf-16le" === r)
                ) {
                  if (u.length < 2 || t.length < 2) return -1;
                  (o = 2), (a /= 2), (c /= 2), (e /= 2);
                }
                function s(u, t) {
                  return 1 === o ? u[t] : u.readUInt16BE(t * o);
                }
                if (n) {
                  var D = -1;
                  for (i = e; i < a; i++)
                    if (s(u, i) === s(t, -1 === D ? 0 : i - D)) {
                      if ((-1 === D && (D = i), i - D + 1 === c)) return D * o;
                    } else -1 !== D && (i -= i - D), (D = -1);
                } else
                  for (e + c > a && (e = a - c), i = e; i >= 0; i--) {
                    for (var f = !0, h = 0; h < c; h++)
                      if (s(u, i + h) !== s(t, h)) {
                        f = !1;
                        break;
                      }
                    if (f) return i;
                  }
                return -1;
              }
              function C(u, t, e, r) {
                e = Number(e) || 0;
                var n = u.length - e;
                r ? (r = Number(r)) > n && (r = n) : (r = n);
                var i = t.length;
                if (i % 2 != 0) throw new TypeError("Invalid hex string");
                r > i / 2 && (r = i / 2);
                for (var o = 0; o < r; ++o) {
                  var a = parseInt(t.substr(2 * o, 2), 16);
                  if (isNaN(a)) return o;
                  u[e + o] = a;
                }
                return o;
              }
              function y(u, t, e, r) {
                return z(M(t, u.length - e), u, e, r);
              }
              function v(u, t, e, r) {
                return z(
                  (function (u) {
                    for (var t = [], e = 0; e < u.length; ++e)
                      t.push(255 & u.charCodeAt(e));
                    return t;
                  })(t),
                  u,
                  e,
                  r
                );
              }
              function g(u, t, e, r) {
                return v(u, t, e, r);
              }
              function B(u, t, e, r) {
                return z(Y(t), u, e, r);
              }
              function w(u, t, e, r) {
                return z(
                  (function (u, t) {
                    for (
                      var e, r, n, i = [], o = 0;
                      o < u.length && !((t -= 2) < 0);
                      ++o
                    )
                      (r = (e = u.charCodeAt(o)) >> 8),
                        (n = e % 256),
                        i.push(n),
                        i.push(r);
                    return i;
                  })(t, u.length - e),
                  u,
                  e,
                  r
                );
              }
              function m(u, t, e) {
                return 0 === t && e === u.length
                  ? r.fromByteArray(u)
                  : r.fromByteArray(u.slice(t, e));
              }
              function _(u, t, e) {
                e = Math.min(u.length, e);
                for (var r = [], n = t; n < e; ) {
                  var i,
                    o,
                    a,
                    c,
                    s = u[n],
                    D = null,
                    f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
                  if (n + f <= e)
                    switch (f) {
                      case 1:
                        s < 128 && (D = s);
                        break;
                      case 2:
                        128 == (192 & (i = u[n + 1])) &&
                          (c = ((31 & s) << 6) | (63 & i)) > 127 &&
                          (D = c);
                        break;
                      case 3:
                        (i = u[n + 1]),
                          (o = u[n + 2]),
                          128 == (192 & i) &&
                            128 == (192 & o) &&
                            (c =
                              ((15 & s) << 12) | ((63 & i) << 6) | (63 & o)) >
                              2047 &&
                            (c < 55296 || c > 57343) &&
                            (D = c);
                        break;
                      case 4:
                        (i = u[n + 1]),
                          (o = u[n + 2]),
                          (a = u[n + 3]),
                          128 == (192 & i) &&
                            128 == (192 & o) &&
                            128 == (192 & a) &&
                            (c =
                              ((15 & s) << 18) |
                              ((63 & i) << 12) |
                              ((63 & o) << 6) |
                              (63 & a)) > 65535 &&
                            c < 1114112 &&
                            (D = c);
                    }
                  null === D
                    ? ((D = 65533), (f = 1))
                    : D > 65535 &&
                      ((D -= 65536),
                      r.push(((D >>> 10) & 1023) | 55296),
                      (D = 56320 | (1023 & D))),
                    r.push(D),
                    (n += f);
                }
                return (function (u) {
                  var t = u.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, u);
                  for (var e = "", r = 0; r < t; )
                    e += String.fromCharCode.apply(
                      String,
                      u.slice(r, (r += 4096))
                    );
                  return e;
                })(r);
              }
              function b(u, t, e) {
                var r = "";
                e = Math.min(u.length, e);
                for (var n = t; n < e; ++n)
                  r += String.fromCharCode(127 & u[n]);
                return r;
              }
              function S(u, t, e) {
                var r = "";
                e = Math.min(u.length, e);
                for (var n = t; n < e; ++n) r += String.fromCharCode(u[n]);
                return r;
              }
              function k(u, t, e) {
                var r = u.length;
                (!t || t < 0) && (t = 0), (!e || e < 0 || e > r) && (e = r);
                for (var n = "", i = t; i < e; ++i) n += U(u[i]);
                return n;
              }
              function P(u, t, e) {
                for (var r = u.slice(t, e), n = "", i = 0; i < r.length; i += 2)
                  n += String.fromCharCode(r[i] + 256 * r[i + 1]);
                return n;
              }
              function x(u, t, e) {
                if (u % 1 != 0 || u < 0)
                  throw new RangeError("offset is not uint");
                if (u + t > e)
                  throw new RangeError("Trying to access beyond buffer length");
              }
              function O(u, t, e, r, n, i) {
                if (!c.isBuffer(u))
                  throw new TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > n || t < i)
                  throw new RangeError('"value" argument is out of bounds');
                if (e + r > u.length)
                  throw new RangeError("Index out of range");
              }
              function T(u, t, e, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var n = 0, i = Math.min(u.length - e, 2); n < i; ++n)
                  u[e + n] =
                    (t & (255 << (8 * (r ? n : 1 - n)))) >>>
                    (8 * (r ? n : 1 - n));
              }
              function R(u, t, e, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var n = 0, i = Math.min(u.length - e, 4); n < i; ++n)
                  u[e + n] = (t >>> (8 * (r ? n : 3 - n))) & 255;
              }
              function L(u, t, e, r, n, i) {
                if (e + r > u.length)
                  throw new RangeError("Index out of range");
                if (e < 0) throw new RangeError("Index out of range");
              }
              function N(u, t, e, r, i) {
                return i || L(u, 0, e, 4), n.write(u, t, e, r, 23, 4), e + 4;
              }
              function I(u, t, e, r, i) {
                return i || L(u, 0, e, 8), n.write(u, t, e, r, 52, 8), e + 8;
              }
              (t.Buffer = c),
                (t.SlowBuffer = function (u) {
                  return +u != u && (u = 0), c.alloc(+u);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (c.TYPED_ARRAY_SUPPORT =
                  void 0 !== u.TYPED_ARRAY_SUPPORT
                    ? u.TYPED_ARRAY_SUPPORT
                    : (function () {
                        try {
                          var u = new Uint8Array(1);
                          return (
                            (u.__proto__ = {
                              __proto__: Uint8Array.prototype,
                              foo: function () {
                                return 42;
                              },
                            }),
                            42 === u.foo() &&
                              "function" == typeof u.subarray &&
                              0 === u.subarray(1, 1).byteLength
                          );
                        } catch (u) {
                          return !1;
                        }
                      })()),
                (t.kMaxLength = o()),
                (c.poolSize = 8192),
                (c._augment = function (u) {
                  return (u.__proto__ = c.prototype), u;
                }),
                (c.from = function (u, t, e) {
                  return s(null, u, t, e);
                }),
                c.TYPED_ARRAY_SUPPORT &&
                  ((c.prototype.__proto__ = Uint8Array.prototype),
                  (c.__proto__ = Uint8Array),
                  "undefined" != typeof Symbol &&
                    Symbol.species &&
                    c[Symbol.species] === c &&
                    Object.defineProperty(c, Symbol.species, {
                      value: null,
                      configurable: !0,
                    })),
                (c.alloc = function (u, t, e) {
                  return (function (u, t, e, r) {
                    return (
                      D(t),
                      t <= 0
                        ? a(u, t)
                        : void 0 !== e
                        ? "string" == typeof r
                          ? a(u, t).fill(e, r)
                          : a(u, t).fill(e)
                        : a(u, t)
                    );
                  })(null, u, t, e);
                }),
                (c.allocUnsafe = function (u) {
                  return f(null, u);
                }),
                (c.allocUnsafeSlow = function (u) {
                  return f(null, u);
                }),
                (c.isBuffer = function (u) {
                  return !(null == u || !u._isBuffer);
                }),
                (c.compare = function (u, t) {
                  if (!c.isBuffer(u) || !c.isBuffer(t))
                    throw new TypeError("Arguments must be Buffers");
                  if (u === t) return 0;
                  for (
                    var e = u.length, r = t.length, n = 0, i = Math.min(e, r);
                    n < i;
                    ++n
                  )
                    if (u[n] !== t[n]) {
                      (e = u[n]), (r = t[n]);
                      break;
                    }
                  return e < r ? -1 : r < e ? 1 : 0;
                }),
                (c.isEncoding = function (u) {
                  switch (String(u).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (c.concat = function (u, t) {
                  if (!i(u))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === u.length) return c.alloc(0);
                  var e;
                  if (void 0 === t)
                    for (t = 0, e = 0; e < u.length; ++e) t += u[e].length;
                  var r = c.allocUnsafe(t),
                    n = 0;
                  for (e = 0; e < u.length; ++e) {
                    var o = u[e];
                    if (!c.isBuffer(o))
                      throw new TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(r, n), (n += o.length);
                  }
                  return r;
                }),
                (c.byteLength = p),
                (c.prototype._isBuffer = !0),
                (c.prototype.swap16 = function () {
                  var u = this.length;
                  if (u % 2 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < u; t += 2) E(this, t, t + 1);
                  return this;
                }),
                (c.prototype.swap32 = function () {
                  var u = this.length;
                  if (u % 4 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < u; t += 4)
                    E(this, t, t + 3), E(this, t + 1, t + 2);
                  return this;
                }),
                (c.prototype.swap64 = function () {
                  var u = this.length;
                  if (u % 8 != 0)
                    throw new RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < u; t += 8)
                    E(this, t, t + 7),
                      E(this, t + 1, t + 6),
                      E(this, t + 2, t + 5),
                      E(this, t + 3, t + 4);
                  return this;
                }),
                (c.prototype.toString = function () {
                  var u = 0 | this.length;
                  return 0 === u
                    ? ""
                    : 0 === arguments.length
                    ? _(this, 0, u)
                    : A.apply(this, arguments);
                }),
                (c.prototype.equals = function (u) {
                  if (!c.isBuffer(u))
                    throw new TypeError("Argument must be a Buffer");
                  return this === u || 0 === c.compare(this, u);
                }),
                (c.prototype.inspect = function () {
                  var u = "",
                    e = t.INSPECT_MAX_BYTES;
                  return (
                    this.length > 0 &&
                      ((u = this.toString("hex", 0, e)
                        .match(/.{2}/g)
                        .join(" ")),
                      this.length > e && (u += " ... ")),
                    "<Buffer " + u + ">"
                  );
                }),
                (c.prototype.compare = function (u, t, e, r, n) {
                  if (!c.isBuffer(u))
                    throw new TypeError("Argument must be a Buffer");
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === e && (e = u ? u.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = this.length),
                    t < 0 || e > u.length || r < 0 || n > this.length)
                  )
                    throw new RangeError("out of range index");
                  if (r >= n && t >= e) return 0;
                  if (r >= n) return -1;
                  if (t >= e) return 1;
                  if (this === u) return 0;
                  for (
                    var i = (n >>>= 0) - (r >>>= 0),
                      o = (e >>>= 0) - (t >>>= 0),
                      a = Math.min(i, o),
                      s = this.slice(r, n),
                      D = u.slice(t, e),
                      f = 0;
                    f < a;
                    ++f
                  )
                    if (s[f] !== D[f]) {
                      (i = s[f]), (o = D[f]);
                      break;
                    }
                  return i < o ? -1 : o < i ? 1 : 0;
                }),
                (c.prototype.includes = function (u, t, e) {
                  return -1 !== this.indexOf(u, t, e);
                }),
                (c.prototype.indexOf = function (u, t, e) {
                  return d(this, u, t, e, !0);
                }),
                (c.prototype.lastIndexOf = function (u, t, e) {
                  return d(this, u, t, e, !1);
                }),
                (c.prototype.write = function (u, t, e, r) {
                  if (void 0 === t) (r = "utf8"), (e = this.length), (t = 0);
                  else if (void 0 === e && "string" == typeof t)
                    (r = t), (e = this.length), (t = 0);
                  else {
                    if (!isFinite(t))
                      throw new Error(
                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                      );
                    (t |= 0),
                      isFinite(e)
                        ? ((e |= 0), void 0 === r && (r = "utf8"))
                        : ((r = e), (e = void 0));
                  }
                  var n = this.length - t;
                  if (
                    ((void 0 === e || e > n) && (e = n),
                    (u.length > 0 && (e < 0 || t < 0)) || t > this.length)
                  )
                    throw new RangeError(
                      "Attempt to write outside buffer bounds"
                    );
                  r || (r = "utf8");
                  for (var i = !1; ; )
                    switch (r) {
                      case "hex":
                        return C(this, u, t, e);
                      case "utf8":
                      case "utf-8":
                        return y(this, u, t, e);
                      case "ascii":
                        return v(this, u, t, e);
                      case "latin1":
                      case "binary":
                        return g(this, u, t, e);
                      case "base64":
                        return B(this, u, t, e);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return w(this, u, t, e);
                      default:
                        if (i) throw new TypeError("Unknown encoding: " + r);
                        (r = ("" + r).toLowerCase()), (i = !0);
                    }
                }),
                (c.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (c.prototype.slice = function (u, t) {
                  var e,
                    r = this.length;
                  if (
                    ((u = ~~u) < 0 ? (u += r) < 0 && (u = 0) : u > r && (u = r),
                    (t = void 0 === t ? r : ~~t) < 0
                      ? (t += r) < 0 && (t = 0)
                      : t > r && (t = r),
                    t < u && (t = u),
                    c.TYPED_ARRAY_SUPPORT)
                  )
                    (e = this.subarray(u, t)).__proto__ = c.prototype;
                  else {
                    var n = t - u;
                    e = new c(n, void 0);
                    for (var i = 0; i < n; ++i) e[i] = this[i + u];
                  }
                  return e;
                }),
                (c.prototype.readUIntLE = function (u, t, e) {
                  (u |= 0), (t |= 0), e || x(u, t, this.length);
                  for (var r = this[u], n = 1, i = 0; ++i < t && (n *= 256); )
                    r += this[u + i] * n;
                  return r;
                }),
                (c.prototype.readUIntBE = function (u, t, e) {
                  (u |= 0), (t |= 0), e || x(u, t, this.length);
                  for (var r = this[u + --t], n = 1; t > 0 && (n *= 256); )
                    r += this[u + --t] * n;
                  return r;
                }),
                (c.prototype.readUInt8 = function (u, t) {
                  return t || x(u, 1, this.length), this[u];
                }),
                (c.prototype.readUInt16LE = function (u, t) {
                  return (
                    t || x(u, 2, this.length), this[u] | (this[u + 1] << 8)
                  );
                }),
                (c.prototype.readUInt16BE = function (u, t) {
                  return (
                    t || x(u, 2, this.length), (this[u] << 8) | this[u + 1]
                  );
                }),
                (c.prototype.readUInt32LE = function (u, t) {
                  return (
                    t || x(u, 4, this.length),
                    (this[u] | (this[u + 1] << 8) | (this[u + 2] << 16)) +
                      16777216 * this[u + 3]
                  );
                }),
                (c.prototype.readUInt32BE = function (u, t) {
                  return (
                    t || x(u, 4, this.length),
                    16777216 * this[u] +
                      ((this[u + 1] << 16) | (this[u + 2] << 8) | this[u + 3])
                  );
                }),
                (c.prototype.readIntLE = function (u, t, e) {
                  (u |= 0), (t |= 0), e || x(u, t, this.length);
                  for (var r = this[u], n = 1, i = 0; ++i < t && (n *= 256); )
                    r += this[u + i] * n;
                  return r >= (n *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (c.prototype.readIntBE = function (u, t, e) {
                  (u |= 0), (t |= 0), e || x(u, t, this.length);
                  for (
                    var r = t, n = 1, i = this[u + --r];
                    r > 0 && (n *= 256);

                  )
                    i += this[u + --r] * n;
                  return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i;
                }),
                (c.prototype.readInt8 = function (u, t) {
                  return (
                    t || x(u, 1, this.length),
                    128 & this[u] ? -1 * (255 - this[u] + 1) : this[u]
                  );
                }),
                (c.prototype.readInt16LE = function (u, t) {
                  t || x(u, 2, this.length);
                  var e = this[u] | (this[u + 1] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (c.prototype.readInt16BE = function (u, t) {
                  t || x(u, 2, this.length);
                  var e = this[u + 1] | (this[u] << 8);
                  return 32768 & e ? 4294901760 | e : e;
                }),
                (c.prototype.readInt32LE = function (u, t) {
                  return (
                    t || x(u, 4, this.length),
                    this[u] |
                      (this[u + 1] << 8) |
                      (this[u + 2] << 16) |
                      (this[u + 3] << 24)
                  );
                }),
                (c.prototype.readInt32BE = function (u, t) {
                  return (
                    t || x(u, 4, this.length),
                    (this[u] << 24) |
                      (this[u + 1] << 16) |
                      (this[u + 2] << 8) |
                      this[u + 3]
                  );
                }),
                (c.prototype.readFloatLE = function (u, t) {
                  return t || x(u, 4, this.length), n.read(this, u, !0, 23, 4);
                }),
                (c.prototype.readFloatBE = function (u, t) {
                  return t || x(u, 4, this.length), n.read(this, u, !1, 23, 4);
                }),
                (c.prototype.readDoubleLE = function (u, t) {
                  return t || x(u, 8, this.length), n.read(this, u, !0, 52, 8);
                }),
                (c.prototype.readDoubleBE = function (u, t) {
                  return t || x(u, 8, this.length), n.read(this, u, !1, 52, 8);
                }),
                (c.prototype.writeUIntLE = function (u, t, e, r) {
                  (u = +u),
                    (t |= 0),
                    (e |= 0),
                    r || O(this, u, t, e, Math.pow(2, 8 * e) - 1, 0);
                  var n = 1,
                    i = 0;
                  for (this[t] = 255 & u; ++i < e && (n *= 256); )
                    this[t + i] = (u / n) & 255;
                  return t + e;
                }),
                (c.prototype.writeUIntBE = function (u, t, e, r) {
                  (u = +u),
                    (t |= 0),
                    (e |= 0),
                    r || O(this, u, t, e, Math.pow(2, 8 * e) - 1, 0);
                  var n = e - 1,
                    i = 1;
                  for (this[t + n] = 255 & u; --n >= 0 && (i *= 256); )
                    this[t + n] = (u / i) & 255;
                  return t + e;
                }),
                (c.prototype.writeUInt8 = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 1, 255, 0),
                    c.TYPED_ARRAY_SUPPORT || (u = Math.floor(u)),
                    (this[t] = 255 & u),
                    t + 1
                  );
                }),
                (c.prototype.writeUInt16LE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 2, 65535, 0),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & u), (this[t + 1] = u >>> 8))
                      : T(this, u, t, !0),
                    t + 2
                  );
                }),
                (c.prototype.writeUInt16BE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 2, 65535, 0),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = u >>> 8), (this[t + 1] = 255 & u))
                      : T(this, u, t, !1),
                    t + 2
                  );
                }),
                (c.prototype.writeUInt32LE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 4, 4294967295, 0),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t + 3] = u >>> 24),
                        (this[t + 2] = u >>> 16),
                        (this[t + 1] = u >>> 8),
                        (this[t] = 255 & u))
                      : R(this, u, t, !0),
                    t + 4
                  );
                }),
                (c.prototype.writeUInt32BE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 4, 4294967295, 0),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = u >>> 24),
                        (this[t + 1] = u >>> 16),
                        (this[t + 2] = u >>> 8),
                        (this[t + 3] = 255 & u))
                      : R(this, u, t, !1),
                    t + 4
                  );
                }),
                (c.prototype.writeIntLE = function (u, t, e, r) {
                  if (((u = +u), (t |= 0), !r)) {
                    var n = Math.pow(2, 8 * e - 1);
                    O(this, u, t, e, n - 1, -n);
                  }
                  var i = 0,
                    o = 1,
                    a = 0;
                  for (this[t] = 255 & u; ++i < e && (o *= 256); )
                    u < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
                      (this[t + i] = (((u / o) >> 0) - a) & 255);
                  return t + e;
                }),
                (c.prototype.writeIntBE = function (u, t, e, r) {
                  if (((u = +u), (t |= 0), !r)) {
                    var n = Math.pow(2, 8 * e - 1);
                    O(this, u, t, e, n - 1, -n);
                  }
                  var i = e - 1,
                    o = 1,
                    a = 0;
                  for (this[t + i] = 255 & u; --i >= 0 && (o *= 256); )
                    u < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
                      (this[t + i] = (((u / o) >> 0) - a) & 255);
                  return t + e;
                }),
                (c.prototype.writeInt8 = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 1, 127, -128),
                    c.TYPED_ARRAY_SUPPORT || (u = Math.floor(u)),
                    u < 0 && (u = 255 + u + 1),
                    (this[t] = 255 & u),
                    t + 1
                  );
                }),
                (c.prototype.writeInt16LE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 2, 32767, -32768),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & u), (this[t + 1] = u >>> 8))
                      : T(this, u, t, !0),
                    t + 2
                  );
                }),
                (c.prototype.writeInt16BE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 2, 32767, -32768),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = u >>> 8), (this[t + 1] = 255 & u))
                      : T(this, u, t, !1),
                    t + 2
                  );
                }),
                (c.prototype.writeInt32LE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 4, 2147483647, -2147483648),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = 255 & u),
                        (this[t + 1] = u >>> 8),
                        (this[t + 2] = u >>> 16),
                        (this[t + 3] = u >>> 24))
                      : R(this, u, t, !0),
                    t + 4
                  );
                }),
                (c.prototype.writeInt32BE = function (u, t, e) {
                  return (
                    (u = +u),
                    (t |= 0),
                    e || O(this, u, t, 4, 2147483647, -2147483648),
                    u < 0 && (u = 4294967295 + u + 1),
                    c.TYPED_ARRAY_SUPPORT
                      ? ((this[t] = u >>> 24),
                        (this[t + 1] = u >>> 16),
                        (this[t + 2] = u >>> 8),
                        (this[t + 3] = 255 & u))
                      : R(this, u, t, !1),
                    t + 4
                  );
                }),
                (c.prototype.writeFloatLE = function (u, t, e) {
                  return N(this, u, t, !0, e);
                }),
                (c.prototype.writeFloatBE = function (u, t, e) {
                  return N(this, u, t, !1, e);
                }),
                (c.prototype.writeDoubleLE = function (u, t, e) {
                  return I(this, u, t, !0, e);
                }),
                (c.prototype.writeDoubleBE = function (u, t, e) {
                  return I(this, u, t, !1, e);
                }),
                (c.prototype.copy = function (u, t, e, r) {
                  if (
                    (e || (e = 0),
                    r || 0 === r || (r = this.length),
                    t >= u.length && (t = u.length),
                    t || (t = 0),
                    r > 0 && r < e && (r = e),
                    r === e)
                  )
                    return 0;
                  if (0 === u.length || 0 === this.length) return 0;
                  if (t < 0) throw new RangeError("targetStart out of bounds");
                  if (e < 0 || e >= this.length)
                    throw new RangeError("sourceStart out of bounds");
                  if (r < 0) throw new RangeError("sourceEnd out of bounds");
                  r > this.length && (r = this.length),
                    u.length - t < r - e && (r = u.length - t + e);
                  var n,
                    i = r - e;
                  if (this === u && e < t && t < r)
                    for (n = i - 1; n >= 0; --n) u[n + t] = this[n + e];
                  else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (n = 0; n < i; ++n) u[n + t] = this[n + e];
                  else
                    Uint8Array.prototype.set.call(
                      u,
                      this.subarray(e, e + i),
                      t
                    );
                  return i;
                }),
                (c.prototype.fill = function (u, t, e, r) {
                  if ("string" == typeof u) {
                    if (
                      ("string" == typeof t
                        ? ((r = t), (t = 0), (e = this.length))
                        : "string" == typeof e && ((r = e), (e = this.length)),
                      1 === u.length)
                    ) {
                      var n = u.charCodeAt(0);
                      n < 256 && (u = n);
                    }
                    if (void 0 !== r && "string" != typeof r)
                      throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !c.isEncoding(r))
                      throw new TypeError("Unknown encoding: " + r);
                  } else "number" == typeof u && (u &= 255);
                  if (t < 0 || this.length < t || this.length < e)
                    throw new RangeError("Out of range index");
                  if (e <= t) return this;
                  var i;
                  if (
                    ((t >>>= 0),
                    (e = void 0 === e ? this.length : e >>> 0),
                    u || (u = 0),
                    "number" == typeof u)
                  )
                    for (i = t; i < e; ++i) this[i] = u;
                  else {
                    var o = c.isBuffer(u) ? u : M(new c(u, r).toString()),
                      a = o.length;
                    for (i = 0; i < e - t; ++i) this[i + t] = o[i % a];
                  }
                  return this;
                });
              var j = /[^+\/0-9A-Za-z-_]/g;
              function U(u) {
                return u < 16 ? "0" + u.toString(16) : u.toString(16);
              }
              function M(u, t) {
                var e;
                t = t || 1 / 0;
                for (var r = u.length, n = null, i = [], o = 0; o < r; ++o) {
                  if ((e = u.charCodeAt(o)) > 55295 && e < 57344) {
                    if (!n) {
                      if (e > 56319) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                      }
                      if (o + 1 === r) {
                        (t -= 3) > -1 && i.push(239, 191, 189);
                        continue;
                      }
                      n = e;
                      continue;
                    }
                    if (e < 56320) {
                      (t -= 3) > -1 && i.push(239, 191, 189), (n = e);
                      continue;
                    }
                    e = 65536 + (((n - 55296) << 10) | (e - 56320));
                  } else n && (t -= 3) > -1 && i.push(239, 191, 189);
                  if (((n = null), e < 128)) {
                    if ((t -= 1) < 0) break;
                    i.push(e);
                  } else if (e < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push((e >> 6) | 192, (63 & e) | 128);
                  } else if (e < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(
                      (e >> 12) | 224,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  } else {
                    if (!(e < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(
                      (e >> 18) | 240,
                      ((e >> 12) & 63) | 128,
                      ((e >> 6) & 63) | 128,
                      (63 & e) | 128
                    );
                  }
                }
                return i;
              }
              function Y(u) {
                return r.toByteArray(
                  (function (u) {
                    if (
                      (u = (function (u) {
                        return u.trim ? u.trim() : u.replace(/^\s+|\s+$/g, "");
                      })(u).replace(j, "")).length < 2
                    )
                      return "";
                    for (; u.length % 4 != 0; ) u += "=";
                    return u;
                  })(u)
                );
              }
              function z(u, t, e, r) {
                for (
                  var n = 0;
                  n < r && !(n + e >= t.length || n >= u.length);
                  ++n
                )
                  t[n + e] = u[n];
                return n;
              }
            }.call(this, e(9)));
          },
          function (u, t) {
            var e;
            e = (function () {
              return this;
            })();
            try {
              e = e || new Function("return this")();
            } catch (u) {
              "object" ==
                ("undefined" == typeof window ? "undefined" : B(window)) &&
                (e = window);
            }
            u.exports = e;
          },
          function (u, t, e) {
            (t.byteLength = function (u) {
              var t = s(u),
                e = t[0],
                r = t[1];
              return (3 * (e + r)) / 4 - r;
            }),
              (t.toByteArray = function (u) {
                var t,
                  e,
                  r = s(u),
                  o = r[0],
                  a = r[1],
                  c = new i(
                    (function (u, t, e) {
                      return (3 * (t + e)) / 4 - e;
                    })(0, o, a)
                  ),
                  D = 0,
                  f = a > 0 ? o - 4 : o;
                for (e = 0; e < f; e += 4)
                  (t =
                    (n[u.charCodeAt(e)] << 18) |
                    (n[u.charCodeAt(e + 1)] << 12) |
                    (n[u.charCodeAt(e + 2)] << 6) |
                    n[u.charCodeAt(e + 3)]),
                    (c[D++] = (t >> 16) & 255),
                    (c[D++] = (t >> 8) & 255),
                    (c[D++] = 255 & t);
                return (
                  2 === a &&
                    ((t =
                      (n[u.charCodeAt(e)] << 2) |
                      (n[u.charCodeAt(e + 1)] >> 4)),
                    (c[D++] = 255 & t)),
                  1 === a &&
                    ((t =
                      (n[u.charCodeAt(e)] << 10) |
                      (n[u.charCodeAt(e + 1)] << 4) |
                      (n[u.charCodeAt(e + 2)] >> 2)),
                    (c[D++] = (t >> 8) & 255),
                    (c[D++] = 255 & t)),
                  c
                );
              }),
              (t.fromByteArray = function (u) {
                for (
                  var t, e = u.length, n = e % 3, i = [], o = 0, a = e - n;
                  o < a;
                  o += 16383
                )
                  i.push(D(u, o, o + 16383 > a ? a : o + 16383));
                return (
                  1 === n
                    ? ((t = u[e - 1]),
                      i.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
                    : 2 === n &&
                      ((t = (u[e - 2] << 8) + u[e - 1]),
                      i.push(
                        r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="
                      )),
                  i.join("")
                );
              });
            for (
              var r = [],
                n = [],
                i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                o =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                a = 0,
                c = o.length;
              a < c;
              ++a
            )
              (r[a] = o[a]), (n[o.charCodeAt(a)] = a);
            function s(u) {
              var t = u.length;
              if (t % 4 > 0)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              var e = u.indexOf("=");
              return -1 === e && (e = t), [e, e === t ? 0 : 4 - (e % 4)];
            }
            function D(u, t, e) {
              for (var n, i, o = [], a = t; a < e; a += 3)
                (n =
                  ((u[a] << 16) & 16711680) +
                  ((u[a + 1] << 8) & 65280) +
                  (255 & u[a + 2])),
                  o.push(
                    r[((i = n) >> 18) & 63] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
              return o.join("");
            }
            (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
          },
          function (u, t) {
            (t.read = function (u, t, e, r, n) {
              var i,
                o,
                a = 8 * n - r - 1,
                c = (1 << a) - 1,
                s = c >> 1,
                D = -7,
                f = e ? n - 1 : 0,
                h = e ? -1 : 1,
                l = u[t + f];
              for (
                f += h, i = l & ((1 << -D) - 1), l >>= -D, D += a;
                D > 0;
                i = 256 * i + u[t + f], f += h, D -= 8
              );
              for (
                o = i & ((1 << -D) - 1), i >>= -D, D += r;
                D > 0;
                o = 256 * o + u[t + f], f += h, D -= 8
              );
              if (0 === i) i = 1 - s;
              else {
                if (i === c) return o ? NaN : (1 / 0) * (l ? -1 : 1);
                (o += Math.pow(2, r)), (i -= s);
              }
              return (l ? -1 : 1) * o * Math.pow(2, i - r);
            }),
              (t.write = function (u, t, e, r, n, i) {
                var o,
                  a,
                  c,
                  s = 8 * i - n - 1,
                  D = (1 << s) - 1,
                  f = D >> 1,
                  h = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                  l = r ? 0 : i - 1,
                  p = r ? 1 : -1,
                  A = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                for (
                  t = Math.abs(t),
                    isNaN(t) || t === 1 / 0
                      ? ((a = isNaN(t) ? 1 : 0), (o = D))
                      : ((o = Math.floor(Math.log(t) / Math.LN2)),
                        t * (c = Math.pow(2, -o)) < 1 && (o--, (c *= 2)),
                        (t += o + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) *
                          c >=
                          2 && (o++, (c /= 2)),
                        o + f >= D
                          ? ((a = 0), (o = D))
                          : o + f >= 1
                          ? ((a = (t * c - 1) * Math.pow(2, n)), (o += f))
                          : ((a = t * Math.pow(2, f - 1) * Math.pow(2, n)),
                            (o = 0)));
                  n >= 8;
                  u[e + l] = 255 & a, l += p, a /= 256, n -= 8
                );
                for (
                  o = (o << n) | a, s += n;
                  s > 0;
                  u[e + l] = 255 & o, l += p, o /= 256, s -= 8
                );
                u[e + l - p] |= 128 * A;
              });
          },
          function (u, t) {
            var e = {}.toString;
            u.exports =
              Array.isArray ||
              function (u) {
                return "[object Array]" == e.call(u);
              };
          },
          function (u, t) {},
          function (u, t, e) {
            e.r(t);
            var r,
              c,
              f = e(1),
              p = e.n(f);
            !(function (u) {
              (u.INIT = "init"),
                (u.RENDER = "render"),
                (u.AUTH = "auth"),
                (u.LOG_OUT = "log_out"),
                (u.ACCOUNT_FETCH = "account_fetch"),
                (u.ERROR = "error");
            })(r || (r = {})),
              (function (u) {
                (u.LOGIN = "login"), (u.REGISTER = "register");
              })(c || (c = {}));
            var E,
              d = (function () {
                function u(t) {
                  y(this, u), (this.raw = t);
                }
                return (
                  g(u, [
                    {
                      key: "id",
                      get: function () {
                        return this.raw.id;
                      },
                    },
                    {
                      key: "publicId",
                      get: function () {
                        return this.raw.public_id;
                      },
                    },
                    {
                      key: "username",
                      get: function () {
                        return this.raw.username;
                      },
                    },
                    {
                      key: "email",
                      get: function () {
                        return this.raw.email;
                      },
                    },
                    {
                      key: "isEmailVerified",
                      get: function () {
                        return this.raw.email_verified;
                      },
                    },
                    {
                      key: "lastLogin",
                      get: function () {
                        return new Date(this.raw.last_login);
                      },
                    },
                    {
                      key: "dateOfBirth",
                      get: function () {
                        return new Date(this.raw.date_of_birth);
                      },
                    },
                    {
                      key: "updatedAt",
                      get: function () {
                        return new Date(this.raw.updated_at);
                      },
                    },
                    {
                      key: "createdAt",
                      get: function () {
                        return new Date(this.raw.created_at);
                      },
                    },
                    {
                      key: "country",
                      get: function () {
                        return this.raw.country;
                      },
                    },
                    {
                      key: "locale",
                      get: function () {
                        return this.raw.locale;
                      },
                    },
                    {
                      key: "userNameUpdatedAt",
                      get: function () {
                        return this.raw.username_updated_at
                          ? new Date(this.raw.username_updated_at)
                          : null;
                      },
                    },
                    {
                      key: "avatarUrl",
                      get: function () {
                        return this.raw.avatar.image_url;
                      },
                    },
                    {
                      key: "output",
                      value: function () {
                        return {
                          id: this.id,
                          username: this.username,
                          avatarUrl: this.avatarUrl,
                        };
                      },
                    },
                  ]),
                  u
                );
              })(),
              F = (function (u) {
                h(e, u);
                var t = l(e);
                function e() {
                  return y(this, e), t.apply(this, arguments);
                }
                return e;
              })(A(Error)),
              C = (function (u) {
                h(e, u);
                var t = l(e);
                function e() {
                  return y(this, e), t.apply(this, arguments);
                }
                return e;
              })(A(Error)),
              v = (function () {
                function u(t, e, r, n, i) {
                  var o =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : c.LOGIN,
                    a =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : window.location.origin,
                    s =
                      arguments.length > 7 && void 0 !== arguments[7]
                        ? arguments[7]
                        : function () {
                            return window.location.toString();
                          },
                    D =
                      arguments.length > 8 && void 0 !== arguments[8]
                        ? arguments[8]
                        : function () {
                            return window.location.toString();
                          },
                    f =
                      arguments.length > 9 && void 0 !== arguments[9]
                        ? arguments[9]
                        : function (u) {
                            u !== location.href && window.location.replace(u);
                          };
                  y(this, u),
                    (this.oauthSite = t),
                    (this.apiKey = e),
                    (this.httpService = r),
                    (this.authStoreService = n),
                    (this.pkceService = i),
                    (this.preferredOauth = o),
                    (this.redirectUrl = a),
                    (this.preLogoutHook = s),
                    (this.preAuthHook = D),
                    (this.postAuthHook = f),
                    this.httpService.setAuth(this);
                }
                var t, e, r;
                return (
                  g(
                    u,
                    [
                      {
                        key: "buildOAuthRedirect",
                        value: function () {
                          var u = {
                              cs:
                                "string" == typeof this.preAuthHook
                                  ? this.preAuthHook
                                  : this.preAuthHook(),
                            },
                            t = this.pkceService.createPKCE(),
                            e = new URLSearchParams({
                              redirect_url: this.redirectUrl,
                              client_id: this.apiKey,
                              state: JSON.stringify(u),
                              code_method: "S256",
                              code_challenge: t.codeChallenge,
                              prefer: this.preferredOauth,
                            });
                          return ""
                            .concat(this.oauthSite, "/oauth?")
                            .concat(e.toString());
                        },
                      },
                      {
                        key: "parseResponseParams",
                        value: function () {
                          var t = window.location.search,
                            e = void 0 === t ? "" : t,
                            r = e.substring(1).split("&"),
                            n = {};
                          return (
                            r.forEach(function (u) {
                              var t = D(u.split("="), 2),
                                e = t[0],
                                r = t[1];
                              n[e] = decodeURIComponent(r);
                            }),
                            (n.auth_code && n.state) || n.error
                              ? ((n.state = n.state ? JSON.parse(n.state) : {}),
                                u.cleanUrl(e),
                                n)
                              : null
                          );
                        },
                      },
                      {
                        key: "handleAuth",
                        value:
                          ((r = s(
                            n().mark(function u() {
                              var t, e, r, i, o, a, c, s, D, f, h;
                              return n().wrap(
                                function (u) {
                                  for (;;)
                                    switch ((u.prev = u.next)) {
                                      case 0:
                                        if (
                                          (window.location,
                                          !this.authStoreService.isAuthorized())
                                        ) {
                                          u.next = 3;
                                          break;
                                        }
                                        throw new F("Not in auth flow");
                                      case 3:
                                        if ((t = this.parseResponseParams())) {
                                          u.next = 6;
                                          break;
                                        }
                                        throw new F("Not in auth flow");
                                      case 6:
                                        if (
                                          ((e = t.auth_code),
                                          (r = t.state),
                                          (i = (r = void 0 === r ? {} : r).cs),
                                          (o = void 0 === i ? {} : i),
                                          !(a = t.error))
                                        ) {
                                          u.next = 11;
                                          break;
                                        }
                                        throw new C(a);
                                      case 11:
                                        return (
                                          (c = this.pkceService.getVerifier()),
                                          (u.next = 14),
                                          this.httpService.post(
                                            "/sessions/auth/token?options=refresh_token&options=account",
                                            {
                                              grant_type: "authorization_code",
                                              code: e,
                                              code_verifier: c,
                                              redirect_uri: this.redirectUrl,
                                            }
                                          )
                                        );
                                      case 14:
                                        return (
                                          (s = u.sent),
                                          (D = s.access_token),
                                          (f = s.refresh_token),
                                          (h = s.account),
                                          u.abrupt(
                                            "return",
                                            (this.pkceService.removeVerifier(),
                                            this.authStoreService.storeAuth({
                                              access_token: D,
                                              refresh_token: f,
                                            }),
                                            o && this.postAuthHook(o),
                                            new d(h))
                                          )
                                        );
                                      case 19:
                                      case "end":
                                        return u.stop();
                                    }
                                },
                                u,
                                this
                              );
                            })
                          )),
                          function () {
                            return r.apply(this, arguments);
                          }),
                      },
                      {
                        key: "handleLogout",
                        value:
                          ((e = s(
                            n().mark(function u() {
                              var t;
                              return n().wrap(
                                function (u) {
                                  for (;;)
                                    switch ((u.prev = u.next)) {
                                      case 0:
                                        this.authStoreService.removeAuth(),
                                          (t = new URLSearchParams({
                                            ref:
                                              "string" ==
                                              typeof this.preLogoutHook
                                                ? this.preLogoutHook
                                                : this.preLogoutHook(),
                                          })),
                                          window.location.replace(
                                            ""
                                              .concat(
                                                this.oauthSite,
                                                "/logout?"
                                              )
                                              .concat(t.toString())
                                          );
                                      case 3:
                                      case "end":
                                        return u.stop();
                                    }
                                },
                                u,
                                this
                              );
                            })
                          )),
                          function () {
                            return e.apply(this, arguments);
                          }),
                      },
                      {
                        key: "refreshAccessToken",
                        value:
                          ((t = s(
                            n().mark(function u(t) {
                              var e;
                              return n().wrap(
                                function (u) {
                                  for (;;)
                                    switch ((u.prev = u.next)) {
                                      case 0:
                                        return (
                                          this.authStoreService.removeAccessToken(),
                                          (u.next = 3),
                                          this.httpService.post(
                                            "/sessions/auth/token?options=refresh_token",
                                            {
                                              grant_type: "refresh_token",
                                              code: t,
                                            }
                                          )
                                        );
                                      case 3:
                                        (e = u.sent),
                                          this.authStoreService.storeAuth(e);
                                      case 5:
                                      case "end":
                                        return u.stop();
                                    }
                                },
                                u,
                                this
                              );
                            })
                          )),
                          function (u) {
                            return t.apply(this, arguments);
                          }),
                      },
                    ],
                    [
                      {
                        key: "cleanUrl",
                        value: function (u) {
                          var t = D(u.split(/auth_code|error/), 1)[0],
                            e = "#" === t ? "" : t.replace("&", ""),
                            r =
                              window.location.pathname +
                              window.location.search +
                              e;
                          history.pushState("", document.title, r);
                        },
                      },
                    ]
                  ),
                  u
                );
              })();
            !(function (u) {
              (u[(u.BAD_TOKEN = 3)] = "BAD_TOKEN"),
                (u[(u.INVALID_CREDENTIALS = 1012)] = "INVALID_CREDENTIALS");
            })(E || (E = {}));
            var B,
              w,
              m = e(2),
              _ = e.n(m),
              b = "datetime",
              S = "binary",
              k = "objectid",
              P = "localized",
              x = "calendar_controlled",
              O = (function () {
                function u(t) {
                  y(this, u),
                    (this.slug = t.slug || ""),
                    (this.default = t.default || ""),
                    (this.localizations = t.localizations || {});
                }
                return (
                  g(u, [
                    {
                      key: "agType",
                      get: function () {
                        return P;
                      },
                    },
                    {
                      key: "isLocalized",
                      get: function () {
                        return !0;
                      },
                    },
                    {
                      key: "toString",
                      value: function () {
                        return this.default;
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return {
                          slug: this.slug,
                          default: this.default,
                          localizations: this.localizations,
                        };
                      },
                    },
                  ]),
                  u
                );
              })(),
              T = (function () {
                function u(t) {
                  y(this, u),
                    (this.default = t.default),
                    (this.rendered = t.rendered);
                }
                return (
                  g(u, [
                    {
                      key: "agType",
                      get: function () {
                        return x;
                      },
                    },
                    {
                      key: "isCalendarControlled",
                      get: function () {
                        return !0;
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return { default: this.default };
                      },
                    },
                  ]),
                  u
                );
              })(),
              R = (function () {
                function u(t) {
                  y(this, u), (this.id = t);
                }
                return (
                  g(u, [
                    {
                      key: "agType",
                      get: function () {
                        return k;
                      },
                    },
                    {
                      key: "isObjectId",
                      get: function () {
                        return !0;
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return this.id;
                      },
                    },
                  ]),
                  u
                );
              })(),
              L = (function () {
                function u(t) {
                  y(this, u), (this.data = t || "");
                }
                return (
                  g(u, [
                    {
                      key: "agType",
                      get: function () {
                        return S;
                      },
                    },
                    {
                      key: "isBinary",
                      get: function () {
                        return !0;
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return this.data;
                      },
                    },
                  ]),
                  u
                );
              })(),
              N = function (u, t) {
                var e,
                  r =
                    (a((e = {}), b, function (u) {
                      return new Date(
                        u.replace(/([+-])(\d{2})(\d{2})$/, "$1$2:$3")
                      );
                    }),
                    a(e, S, function (u) {
                      return new L(u);
                    }),
                    a(e, P, function (u) {
                      return new O(u);
                    }),
                    a(e, x, function (u) {
                      return new T(u);
                    }),
                    a(e, k, function (u) {
                      return new R(u);
                    }),
                    e),
                  n = (function () {
                    try {
                      var u = t._agType,
                        e = t._agValue;
                      if (u) return { type: u, value: e };
                    } catch (u) {}
                    return { type: null, value: t };
                  })(),
                  i = n.type,
                  o = n.value,
                  c = r[i],
                  s = i ? { _agType: i, _agValue: o } : o;
                if (!c) return s;
                try {
                  return c.call(null, o);
                } catch (u) {
                  return s;
                }
              },
              I = function (u) {
                var t,
                  e =
                    (a((t = {}), b, function (u) {
                      return u.toISOString();
                    }),
                    a(t, S, function (u) {
                      return u.serialize();
                    }),
                    a(t, P, function (u) {
                      return u.serialize();
                    }),
                    a(t, x, function (u) {
                      return u.serialize();
                    }),
                    a(t, k, function (u) {
                      return u.serialize();
                    }),
                    t),
                  r = this[u],
                  n = (function (u) {
                    return u instanceof Date
                      ? b
                      : u && u.agType
                      ? u.agType
                      : null;
                  })(r),
                  i = e[n];
                if (!i) return r;
                try {
                  return { _agType: n, _agValue: i.call(null, r) };
                } catch (u) {
                  return r;
                }
              },
              j = function (u) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
                return JSON.stringify(u, I, t);
              },
              U = function (u) {
                try {
                  return (function (u) {
                    return _.a.parse(u, N);
                  })(u);
                } catch (t) {
                  return u;
                }
              },
              M = function (u) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
                try {
                  return j(u, t);
                } catch (t) {
                  return u;
                }
              };
            !(function (u) {
              (u.GET = "get"),
                (u.POST = "post"),
                (u.PUT = "put"),
                (u.DELETE = "delete");
            })(B || (B = {})),
              (function (u) {
                u[(u.BAD_REQUEST = 400)] = "BAD_REQUEST";
              })(w || (w = {}));
            var Y = (function (u) {
                h(e, u);
                var t = l(e);
                function e(u, r) {
                  var n;
                  return (
                    y(this, e),
                    ((n = t.call(this, u)).error = null),
                    (n.error = r),
                    n
                  );
                }
                return e;
              })(A(Error)),
              z = (function () {
                function u(t, e) {
                  y(this, u), (this.apiEndpoint = t), (this.apiKey = e);
                }
                return (
                  g(u, [
                    {
                      key: "setAuth",
                      value: function (u) {
                        this.authService = u;
                      },
                    },
                    {
                      key: "setAuthStore",
                      value: function (u) {
                        this.authStoreService = u;
                      },
                    },
                    {
                      key: "baseFetch",
                      value: function (u, t) {
                        var e = this,
                          r =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          i = arguments.length > 3 ? arguments[3] : void 0,
                          o = this.authStoreService.getStoredAuth() || {},
                          a = o.access_token,
                          c = o.refresh_token;
                        return fetch("".concat(this.apiEndpoint).concat(u), {
                          method: t,
                          headers: Object.assign(
                            {},
                            {
                              "X-Hydra-API-Key": this.apiKey,
                              "Content-Type": "application/json",
                            },
                            a && { "X-Hydra-Access-Token": a },
                            r
                          ),
                          body: i,
                        })
                          .then(
                            (function () {
                              var o = s(
                                n().mark(function o(s) {
                                  var D, f, h, l;
                                  return n().wrap(
                                    function (n) {
                                      for (;;)
                                        switch ((n.prev = n.next)) {
                                          case 0:
                                            if (s.status !== w.BAD_REQUEST) {
                                              n.next = 19;
                                              break;
                                            }
                                            return (
                                              (n.next = 4),
                                              s.json().catch(function () {
                                                return {};
                                              })
                                            );
                                          case 4:
                                            if (
                                              ((f = n.sent),
                                              (h = f.hydra_error) !==
                                                E.BAD_TOKEN)
                                            ) {
                                              n.next = 18;
                                              break;
                                            }
                                            return (
                                              (n.prev = 7),
                                              (n.next = 10),
                                              e.authService.refreshAccessToken(
                                                c
                                              )
                                            );
                                          case 10:
                                            n.next = 17;
                                            break;
                                          case 12:
                                            if (
                                              ((n.prev = 12),
                                              (n.t0 = n.catch(7)),
                                              (l =
                                                null ===
                                                  (D =
                                                    e.authStoreService.getStoredAuth()) ||
                                                void 0 === D
                                                  ? void 0
                                                  : D.access_token),
                                              n.t0.error.hydra_error ===
                                                E.INVALID_CREDENTIALS &&
                                                l !== a &&
                                                l)
                                            ) {
                                              n.next = 17;
                                              break;
                                            }
                                            throw (
                                              (e.authStoreService.removeAuth(),
                                              n.t0)
                                            );
                                          case 17:
                                            return n.abrupt(
                                              "return",
                                              e.baseFetch(u, t, r, i)
                                            );
                                          case 18:
                                            throw new Y("Hydra error " + h, f);
                                          case 19:
                                            return n.abrupt("return", s.text());
                                          case 20:
                                          case "end":
                                            return n.stop();
                                        }
                                    },
                                    o,
                                    null,
                                    [[7, 12]]
                                  );
                                })
                              );
                              return function (u) {
                                return o.apply(this, arguments);
                              };
                            })()
                          )
                          .then(function (u) {
                            return U(u);
                          });
                      },
                    },
                    {
                      key: "get",
                      value: function (u) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        return this.apiKey
                          ? this.baseFetch(u, B.GET, t)
                          : Promise.reject("No API key defined!");
                      },
                    },
                    {
                      key: "put",
                      value: function (u, t) {
                        var e =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        return this.apiKey
                          ? this.baseFetch(u, B.PUT, e, M(t))
                          : Promise.reject("No API key defined!");
                      },
                    },
                    {
                      key: "post",
                      value: function (u, t) {
                        var e =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        return this.apiKey
                          ? this.baseFetch(u, B.POST, e, M(t))
                          : Promise.reject("No API key defined!");
                      },
                    },
                    {
                      key: "delete",
                      value: function (u) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        return this.apiKey
                          ? this.baseFetch(u, B.DELETE, t)
                          : Promise.reject("No API key defined!");
                      },
                    },
                  ]),
                  u
                );
              })(),
              H = (function () {
                function u(t, e) {
                  y(this, u),
                    (this.httpService = t),
                    (this.authStoreService = e);
                }
                return (
                  g(u, [
                    {
                      key: "fetchAccount",
                      value: function () {
                        return this.authStoreService.isAuthorized()
                          ? this.httpService
                              .get("/accounts/me")
                              .then(function (u) {
                                return u.id ? new d(u) : null;
                              })
                          : Promise.resolve(null);
                      },
                    },
                  ]),
                  u
                );
              })(),
              V = (function () {
                function u(t) {
                  y(this, u),
                    (this.httpService = t),
                    this.httpService.setAuthStore(this);
                }
                return (
                  g(u, [
                    {
                      key: "storeAuth",
                      value: function (t) {
                        window.localStorage.setItem(u.KEY, JSON.stringify(t));
                      },
                    },
                    {
                      key: "getStoredAuth",
                      value: function () {
                        var t = window.localStorage.getItem(u.KEY);
                        return t ? JSON.parse(t) : null;
                      },
                    },
                    {
                      key: "removeAuth",
                      value: function () {
                        window.localStorage.removeItem(u.KEY);
                      },
                    },
                    {
                      key: "removeAccessToken",
                      value: function () {
                        var u = this.getStoredAuth() || {},
                          t = (u.access_token, o(u, i));
                        "refresh_token" in t && this.storeAuth(t);
                      },
                    },
                    {
                      key: "isAuthorized",
                      value: function () {
                        return null !== this.getStoredAuth();
                      },
                    },
                  ]),
                  u
                );
              })();
            V.KEY = "__webridge_auth";
            var K = e(3),
              G = (function () {
                function u() {
                  y(this, u),
                    (this.verifier = window.localStorage.getItem(u.KEY));
                }
                return (
                  g(u, [
                    {
                      key: "createPKCE",
                      value: function () {
                        var t = Object(K.create)();
                        return (
                          window.localStorage.setItem(u.KEY, t.codeVerifier),
                          this.verifier || (this.verifier = t.codeVerifier),
                          t
                        );
                      },
                    },
                    {
                      key: "getVerifier",
                      value: function () {
                        return this.verifier;
                      },
                    },
                    {
                      key: "removeVerifier",
                      value: function () {
                        window.localStorage.removeItem(u.KEY),
                          this.invalidateVerifier();
                      },
                    },
                    {
                      key: "invalidateVerifier",
                      value: function () {
                        this.verifier = null;
                      },
                    },
                  ]),
                  u
                );
              })();
            G.KEY = "__webridge_pkce";
            var J = {
              SDK: (function () {
                function u(t) {
                  y(this, u),
                    (this.account = null),
                    (function (u) {
                      if (!u)
                        throw new Error(
                          "Missing configuration object in the SDK constructor."
                        );
                      if (!u.apiKey)
                        throw new Error(
                          "Missing apiKey option in the configruation object."
                        );
                      if (!u.apiEndpoint)
                        throw new Error(
                          "Missing Hydra API URL in the configruation object."
                        );
                      if (!u.prefer)
                        throw new Error(
                          "Missing prefer option in the configruation object."
                        );
                      if (u.prefer !== c.LOGIN && u.prefer !== c.REGISTER)
                        throw new Error(
                          "Prefer option should be one of: login or register."
                        );
                      if (!u.oauthSite)
                        throw new Error(
                          "Missing OAuth site option in the configuration object."
                        );
                    })(t),
                    (this.addEventListener = this.addEventListener.bind(this)),
                    (this.logout = this.logout.bind(this)),
                    (this.render = this.render.bind(this)),
                    (this.__dispatch = this.__dispatch.bind(this)),
                    (this.__fetchAccount = this.__fetchAccount.bind(this)),
                    (this.__handleAuth = this.__handleAuth.bind(this)),
                    (this.__handleError = this.__handleError.bind(this)),
                    (this.options = t),
                    (this.__eventBus = new p.a()),
                    (this.__pkceService = new G()),
                    (this.__httpService = new z(
                      this.options.apiEndpoint,
                      this.options.apiKey
                    )),
                    (this.__authStoreService = new V(this.__httpService)),
                    (this.__authService = new v(
                      this.options.oauthSite,
                      this.options.apiKey,
                      this.__httpService,
                      this.__authStoreService,
                      this.__pkceService,
                      this.options.prefer,
                      this.options.redirectUrl,
                      this.options.preLogoutHook,
                      this.options.preAuthHook,
                      this.options.postAuthHook
                    )),
                    (this.__accountService = new H(
                      this.__httpService,
                      this.__authStoreService
                    )),
                    (this.loginLink = this.__authService.buildOAuthRedirect());
                }
                var t, e, i, o, a, D;
                return (
                  g(u, [
                    {
                      key: "addEventListener",
                      value: function (u, t) {
                        this.__eventBus.on(u, t);
                      },
                    },
                    {
                      key: "render",
                      value:
                        ((D = s(
                          n().mark(function u(t, e) {
                            var i,
                              o,
                              a,
                              c,
                              s = this;
                            return n().wrap(function (u) {
                              for (;;)
                                switch ((u.prev = u.next)) {
                                  case 0:
                                    (i = document.querySelector(
                                      "script[data-wb-network-bridge]"
                                    )),
                                      (o = "wb-pn-sdk-widget-script"),
                                      (a = document.querySelector("#" + o)) &&
                                        a.remove(),
                                      ((c =
                                        document.createElement("script")).src =
                                        (function (u, t) {
                                          var e = document.createElement("a");
                                          e.href = u;
                                          var r = e.pathname.split("/");
                                          r[r.length - 1] = "widget.js";
                                          var n = r.join("/");
                                          return ""
                                            .concat(e.protocol, "//")
                                            .concat(e.host)
                                            .concat(n)
                                            .concat(e.search);
                                        })(i.src)),
                                      (c.id = o),
                                      c.addEventListener("load", function () {
                                        window.__P1__banner__initApp &&
                                          (window.__P1__banner__initApp(
                                            t,
                                            s,
                                            e
                                          ),
                                          delete window.__P1__banner__initApp,
                                          s.__dispatch(r.RENDER));
                                      }),
                                      document.body.append(c);
                                  case 4:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                          })
                        )),
                        function (u, t) {
                          return D.apply(this, arguments);
                        }),
                    },
                    {
                      key: "getAccount",
                      value:
                        ((a = s(
                          n().mark(function u() {
                            return n().wrap(
                              function (u) {
                                for (;;)
                                  switch ((u.prev = u.next)) {
                                    case 0:
                                      return (
                                        (u.prev = 0),
                                        (u.next = 3),
                                        this.__handleAuth()
                                      );
                                    case 3:
                                      u.next = 11;
                                      break;
                                    case 5:
                                      if (
                                        ((u.prev = 5),
                                        (u.t0 = u.catch(0)),
                                        u.t0 instanceof F)
                                      ) {
                                        u.next = 9;
                                        break;
                                      }
                                      throw (this.__handleError(u.t0), u.t0);
                                    case 9:
                                      return (
                                        (u.next = 11), this.__fetchAccount()
                                      );
                                    case 11:
                                      return u.abrupt("return", this.account);
                                    case 12:
                                    case "end":
                                      return u.stop();
                                  }
                              },
                              u,
                              this,
                              [[0, 5]]
                            );
                          })
                        )),
                        function () {
                          return a.apply(this, arguments);
                        }),
                    },
                    {
                      key: "getFriends",
                      value:
                        ((o = s(
                          n().mark(function u() {
                            return n().wrap(function (u) {
                              for (;;)
                                switch ((u.prev = u.next)) {
                                  case 0:
                                  case "end":
                                    return u.stop();
                                }
                            }, u);
                          })
                        )),
                        function () {
                          return o.apply(this, arguments);
                        }),
                    },
                    {
                      key: "logout",
                      value:
                        ((i = s(
                          n().mark(function u() {
                            return n().wrap(
                              function (u) {
                                for (;;)
                                  switch ((u.prev = u.next)) {
                                    case 0:
                                      return (
                                        (u.prev = 0),
                                        this.__pkceService.invalidateVerifier(),
                                        this.__dispatch(r.LOG_OUT),
                                        (u.next = 5),
                                        this.__authService.handleLogout()
                                      );
                                    case 5:
                                      u.next = 10;
                                      break;
                                    case 7:
                                      (u.prev = 7),
                                        (u.t0 = u.catch(0)),
                                        this.__handleError(u.t0);
                                    case 10:
                                    case "end":
                                      return u.stop();
                                  }
                              },
                              u,
                              this,
                              [[0, 7]]
                            );
                          })
                        )),
                        function () {
                          return i.apply(this, arguments);
                        }),
                    },
                    {
                      key: "accessToken",
                      get: function () {
                        var u = this.__authStoreService.getStoredAuth();
                        return (u && u.access_token) || null;
                      },
                    },
                    {
                      key: "httpService",
                      get: function () {
                        return this.__httpService;
                      },
                    },
                    {
                      key: "__dispatch",
                      value: function (u, t) {
                        this.__eventBus.emit(u, null, t);
                      },
                    },
                    {
                      key: "__handleError",
                      value: function (u) {
                        this.__dispatch(r.ERROR, u.message);
                      },
                    },
                    {
                      key: "__fetchAccount",
                      value:
                        ((e = s(
                          n().mark(function u() {
                            var t;
                            return n().wrap(
                              function (u) {
                                for (;;)
                                  switch ((u.prev = u.next)) {
                                    case 0:
                                      return (
                                        (u.prev = 0),
                                        (u.next = 3),
                                        this.__accountService.fetchAccount()
                                      );
                                    case 3:
                                      return (
                                        (t = u.sent),
                                        u.abrupt(
                                          "return",
                                          t
                                            ? ((this.account = t),
                                              this.__dispatch(
                                                r.ACCOUNT_FETCH,
                                                null == t ? void 0 : t.output()
                                              ),
                                              this.account)
                                            : ((this.account = null), null)
                                        )
                                      );
                                    case 7:
                                      (u.prev = 7),
                                        (u.t0 = u.catch(0)),
                                        (this.account = null);
                                    case 10:
                                      return u.abrupt("return", null);
                                    case 11:
                                    case "end":
                                      return u.stop();
                                  }
                              },
                              u,
                              this,
                              [[0, 7]]
                            );
                          })
                        )),
                        function () {
                          return e.apply(this, arguments);
                        }),
                    },
                    {
                      key: "__handleAuth",
                      value:
                        ((t = s(
                          n().mark(function u() {
                            var t;
                            return n().wrap(
                              function (u) {
                                for (;;)
                                  switch ((u.prev = u.next)) {
                                    case 0:
                                      return (
                                        (u.next = 2),
                                        this.__authService.handleAuth()
                                      );
                                    case 2:
                                      return (
                                        (t = u.sent),
                                        u.abrupt(
                                          "return",
                                          (this.__dispatch(r.AUTH),
                                          (this.account = t),
                                          this.account)
                                        )
                                      );
                                    case 4:
                                    case "end":
                                      return u.stop();
                                  }
                              },
                              u,
                              this
                            );
                          })
                        )),
                        function () {
                          return t.apply(this, arguments);
                        }),
                    },
                  ]),
                  u
                );
              })(),
              EventEnum: r,
              OAuthPreferMethodEnum: c,
              AuthError: F,
              OAuthError: C,
            };
            (window.WeBridge = J), (t.default = J);
          },
        ]);
      },
      5666: (u) => {
        var t = (function (u) {
          "use strict";
          var t,
            e = Object.prototype,
            r = e.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            i = n.iterator || "@@iterator",
            o = n.asyncIterator || "@@asyncIterator",
            a = n.toStringTag || "@@toStringTag";
          function c(u, t, e) {
            return (
              Object.defineProperty(u, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              u[t]
            );
          }
          try {
            c({}, "");
          } catch (u) {
            c = function (u, t, e) {
              return (u[t] = e);
            };
          }
          function s(u, t, e, r) {
            var n = t && t.prototype instanceof E ? t : E,
              i = Object.create(n.prototype),
              o = new S(r || []);
            return (
              (i._invoke = (function (u, t, e) {
                var r = f;
                return function (n, i) {
                  if (r === l) throw new Error("Generator is already running");
                  if (r === p) {
                    if ("throw" === n) throw i;
                    return P();
                  }
                  for (e.method = n, e.arg = i; ; ) {
                    var o = e.delegate;
                    if (o) {
                      var a = m(o, e);
                      if (a) {
                        if (a === A) continue;
                        return a;
                      }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                      if (r === f) throw ((r = p), e.arg);
                      e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    r = l;
                    var c = D(u, t, e);
                    if ("normal" === c.type) {
                      if (((r = e.done ? p : h), c.arg === A)) continue;
                      return { value: c.arg, done: e.done };
                    }
                    "throw" === c.type &&
                      ((r = p), (e.method = "throw"), (e.arg = c.arg));
                  }
                };
              })(u, e, o)),
              i
            );
          }
          function D(u, t, e) {
            try {
              return { type: "normal", arg: u.call(t, e) };
            } catch (u) {
              return { type: "throw", arg: u };
            }
          }
          u.wrap = s;
          var f = "suspendedStart",
            h = "suspendedYield",
            l = "executing",
            p = "completed",
            A = {};
          function E() {}
          function d() {}
          function F() {}
          var C = {};
          c(C, i, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            v = y && y(y(k([])));
          v && v !== e && r.call(v, i) && (C = v);
          var g = (F.prototype = E.prototype = Object.create(C));
          function B(u) {
            ["next", "throw", "return"].forEach(function (t) {
              c(u, t, function (u) {
                return this._invoke(t, u);
              });
            });
          }
          function w(u, t) {
            function e(n, i, o, a) {
              var c = D(u[n], u, i);
              if ("throw" !== c.type) {
                var s = c.arg,
                  f = s.value;
                return f && "object" == typeof f && r.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (u) {
                        e("next", u, o, a);
                      },
                      function (u) {
                        e("throw", u, o, a);
                      }
                    )
                  : t.resolve(f).then(
                      function (u) {
                        (s.value = u), o(s);
                      },
                      function (u) {
                        return e("throw", u, o, a);
                      }
                    );
              }
              a(c.arg);
            }
            var n;
            this._invoke = function (u, r) {
              function i() {
                return new t(function (t, n) {
                  e(u, r, t, n);
                });
              }
              return (n = n ? n.then(i, i) : i());
            };
          }
          function m(u, e) {
            var r = u.iterator[e.method];
            if (r === t) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  u.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = t),
                  m(u, e),
                  "throw" === e.method)
                )
                  return A;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return A;
            }
            var n = D(r, u.iterator, e.arg);
            if ("throw" === n.type)
              return (
                (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), A
              );
            var i = n.arg;
            return i
              ? i.done
                ? ((e[u.resultName] = i.value),
                  (e.next = u.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = t)),
                  (e.delegate = null),
                  A)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                A);
          }
          function _(u) {
            var t = { tryLoc: u[0] };
            1 in u && (t.catchLoc = u[1]),
              2 in u && ((t.finallyLoc = u[2]), (t.afterLoc = u[3])),
              this.tryEntries.push(t);
          }
          function b(u) {
            var t = u.completion || {};
            (t.type = "normal"), delete t.arg, (u.completion = t);
          }
          function S(u) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              u.forEach(_, this),
              this.reset(!0);
          }
          function k(u) {
            if (u) {
              var e = u[i];
              if (e) return e.call(u);
              if ("function" == typeof u.next) return u;
              if (!isNaN(u.length)) {
                var n = -1,
                  o = function e() {
                    for (; ++n < u.length; )
                      if (r.call(u, n))
                        return (e.value = u[n]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: P };
          }
          function P() {
            return { value: t, done: !0 };
          }
          return (
            (d.prototype = F),
            c(g, "constructor", F),
            c(F, "constructor", d),
            (d.displayName = c(F, a, "GeneratorFunction")),
            (u.isGeneratorFunction = function (u) {
              var t = "function" == typeof u && u.constructor;
              return (
                !!t &&
                (t === d || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (u.mark = function (u) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(u, F)
                  : ((u.__proto__ = F), c(u, a, "GeneratorFunction")),
                (u.prototype = Object.create(g)),
                u
              );
            }),
            (u.awrap = function (u) {
              return { __await: u };
            }),
            B(w.prototype),
            c(w.prototype, o, function () {
              return this;
            }),
            (u.AsyncIterator = w),
            (u.async = function (t, e, r, n, i) {
              void 0 === i && (i = Promise);
              var o = new w(s(t, e, r, n), i);
              return u.isGeneratorFunction(e)
                ? o
                : o.next().then(function (u) {
                    return u.done ? u.value : o.next();
                  });
            }),
            B(g),
            c(g, a, "Generator"),
            c(g, i, function () {
              return this;
            }),
            c(g, "toString", function () {
              return "[object Generator]";
            }),
            (u.keys = function (u) {
              var t = [];
              for (var e in u) t.push(e);
              return (
                t.reverse(),
                function e() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in u) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (u.values = k),
            (S.prototype = {
              constructor: S,
              reset: function (u) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(b),
                  !u)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      r.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var u = this.tryEntries[0].completion;
                if ("throw" === u.type) throw u.arg;
                return this.rval;
              },
              dispatchException: function (u) {
                if (this.done) throw u;
                var e = this;
                function n(r, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = u),
                    (e.next = r),
                    n && ((e.method = "next"), (e.arg = t)),
                    !!n
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    a = o.completion;
                  if ("root" === o.tryLoc) return n("end");
                  if (o.tryLoc <= this.prev) {
                    var c = r.call(o, "catchLoc"),
                      s = r.call(o, "finallyLoc");
                    if (c && s) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (u, t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (
                    n.tryLoc <= this.prev &&
                    r.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === u || "continue" === u) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = u),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), A)
                    : this.complete(o)
                );
              },
              complete: function (u, t) {
                if ("throw" === u.type) throw u.arg;
                return (
                  "break" === u.type || "continue" === u.type
                    ? (this.next = u.arg)
                    : "return" === u.type
                    ? ((this.rval = this.arg = u.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === u.type && t && (this.next = t),
                  A
                );
              },
              finish: function (u) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.finallyLoc === u)
                    return this.complete(e.completion, e.afterLoc), b(e), A;
                }
              },
              catch: function (u) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.tryLoc === u) {
                    var r = e.completion;
                    if ("throw" === r.type) {
                      var n = r.arg;
                      b(e);
                    }
                    return n;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (u, e, r) {
                return (
                  (this.delegate = {
                    iterator: k(u),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  A
                );
              },
            }),
            u
          );
        })(u.exports);
        try {
          regeneratorRuntime = t;
        } catch (u) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
    },
    t = {};
  function e(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var i = (t[r] = { exports: {} });
    return u[r](i, i.exports, e), i.exports;
  }
  (e.n = (u) => {
    var t = u && u.__esModule ? () => u.default : () => u;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (u, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(u, r) &&
          Object.defineProperty(u, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (u, t) => Object.prototype.hasOwnProperty.call(u, t)),
    (e.r = (u) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(u, "__esModule", { value: !0 });
    }),
    (() => {
      function u(u, t) {
        var e = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(u, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function t(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (u) {
                r(t, u, n[u]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (u) {
                Object.defineProperty(
                  t,
                  u,
                  Object.getOwnPropertyDescriptor(n, u)
                );
              });
        }
        return t;
      }
      function r(u, t, e) {
        return (
          t in u
            ? Object.defineProperty(u, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (u[t] = e),
          u
        );
      }
      e(2146);
      window.location.protocol, window.location.host;
      var n = t(
        t({}, { prefer: WeBridge.OAuthPreferMethodEnum.LOGIN }),
        window.playerNetwork
      );
      window.WB_BRIDGE = new WeBridge.SDK(n);
      var i = {
        settings: {
          locale: document.documentElement.lang,
          localeFallback: "en-us",
        },
      };
      window.WB_BRIDGE.render(".pn-banner-desktop", i);
    })();
})();
