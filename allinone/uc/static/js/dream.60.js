webpackJsonp(
  [7],
  {
    173: function(t, e, n) {
      var r = n(49)(n(439), null, null, null, null);
      t.exports = r.exports;
    },
    174: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        var e,
          n = !0;
        for (e = 0; e < v.length; e++)
          if ("" === t[v[e]]) {
            n = !1;
            break;
          }
        return n;
      }
      function i(t, e) {
        var n = "UNKNOWN";
        (0, p.isAndroid)() ? (n = "ANDROID") : (0, p.isIOS)() && (n = "IPHONE");
        var r = h[n];
        if (!window.ADTRACKJSSDK)
          return void console.warn("不存在ADTRACKJSSDK");
        m || (m = new window.ADTRACKJSSDK()),
          "UNKNOWN" !== n &&
            ((r.adChannel = e),
            (r.downLink = t),
            (r.ucLink = t),
            (r.directDownload = !0),
            a(r) && m.sdkClick(r));
      }
      function o(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "millionwinner";
        return function(n) {
          return new d.default(function(r, a) {
            var i = function(t) {
                return "fail" !== t.result ? r(t) : a(t);
              },
              o = function(t) {
                console.log(t), a(t);
              },
              u = (0, l.default)({ success: i, fail: o }, n);
            window.ucapi ? window.ucapi[e][t](u) : a("no ucapi");
          });
        };
      }
      function u(t, e) {
        t && (0, p.isAndroid)()
          ? b()
              .then(function(t) {
                t.isOpen ||
                  y(e.url).catch(function(t) {
                    w();
                  });
              })
              .catch(function(t) {
                i(e.uctrack.url, e.uctrack.ch);
              })
          : i(e.uctrack.url, e.uctrack.ch);
      }
      function c() {
        g();
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.startApp = e.queryApp = e.ucparams = e.requestPermission = e.getStatus = e.close = e.open = e.onChanged = void 0);
      var s = n(116),
        l = r(s),
        f = n(51),
        d = r(f);
      (e.downOrOpenUC = i), (e.openAnswerHelper = u), (e.closeAnswerHelper = c);
      var p = n(50),
        m = void 0,
        h = {
          ANDROID: {
            appID: "cc77796ca7c25dff9607d31b29effc07",
            pkgName: "com.UCMobile",
            adBid: "800",
            oldLink: "",
            adPosID: "",
            cid: ""
          },
          IPHONE: {
            appID: "f11f7cb5d16fa0969d670c1eccc6053d",
            pkgName: "com.ucweb.iphone.lowversion",
            adBid: "997",
            oldLink: "",
            adPosID: "",
            cid: ""
          }
        },
        v = ["appID", "pkgName", "adChannel", "adBid", "ucLink", "downLink"],
        y = ((e.onChanged = function(t) {
          ucapi && ucapi.millionwinner.onFloatChanged({ trigger: t });
        }),
        (e.open = function(t) {
          return o("tryOpenFloat")({ url: t });
        })),
        g = (e.close = function() {
          return o("tryCloseFloat")();
        }),
        b = (e.getStatus = function() {
          return o("isFloatOpen")();
        }),
        w = (e.requestPermission = function() {
          return o("openFloatPermission")();
        });
      (e.ucparams = function() {
        return o("ucparams", "biz")({ isHttps: !1, params: "svve" });
      }),
        (e.queryApp = function(t) {
          return o("queryApp", "biz")({ pkgs: t });
        }),
        (e.startApp = function(t) {
          return o("startApp", "biz")({ pkg: t });
        });
    },
    175: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        return new c.default(function(e, n) {
          var r = l.default.getCommonParamByKey("API.current");
          (0, f.request)({
            url: r,
            type: "GET",
            dataType: "json",
            data: { _t: Date.now(), activity: t }
          })
            .then(function(t) {
              0 == t.status ? e(t.data) : n(t);
            })
            .catch(function(t) {
              n(t);
            });
        });
      }
      function i(t, e) {
        return new c.default(function(n, r) {
          var a = l.default.getCommonParamByKey("API.review");
          (0, f.request)({
            url: a,
            type: "GET",
            dataType: "jsonp",
            data: { _t: Date.now(), activity: t, sid: e }
          })
            .then(function(t) {
              0 == t.status ? n(t.data) : r(t);
            })
            .catch(function(t) {
              r(t);
            });
        });
      }
      function o(t) {
        return (
          (t = t || l.default.getCommonParamByKey("activityName")),
          new c.default(function(e, n) {
            var r = l.default.getCommonParamByKey("API.index");
            (0, f.request)({
              url: r,
              type: "GET",
              dataType: "jsonp",
              data: { _t: Date.now(), activity: t }
            })
              .then(function(t) {
                0 == t.status ? e(t.data) : n(t);
              })
              .catch(function(t) {
                n(t);
              });
          })
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.REFRESH = void 0);
      var u = n(51),
        c = r(u);
      (e.getCurAnswer = a), (e.getReviewData = i), (e.getIndexData = o);
      var s = n(50),
        l = r(s),
        f = n(435);
      e.REFRESH = { HOUR: 54e5, MINUTE: 6e4, PRE: 18e4, CUR: 500, POST: 1e4 };
    },
    176: function(t, e, n) {
      function r(t) {
        n(440);
      }
      var a = n(49)(n(441), n(442), r, "data-v-a4cfecb4", null);
      t.exports = a.exports;
    },
    177: function(t, e, n) {
      n(178), (t.exports = n(380));
    },
    380: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var a = n(72),
        i = r(a),
        o = n(384),
        u = r(o),
        c = n(413),
        s = r(c),
        l = n(451),
        f = r(l),
        d = n(455),
        p = r(d),
        m = n(459),
        h = r(m),
        v = n(460);
      i.default.config.productionTip = !1;
      var y = (i.default.prototype.$loading = new i.default(
        f.default
      ).$mount());
      i.default.use(h.default, {
        listenEvents: ["scroll", "transitionend"],
        lazyComponent: !0,
        error: "//sm01.alicdn.com/L1/272/6837/static/novel/image/error.png"
      });
      var g = new i.default({
        router: s.default,
        store: p.default,
        template: "<App/>",
        components: { App: u.default }
      });
      document.body.appendChild(y.$el), (0, v.App)(g, s.default, p.default, y);
    },
    384: function(t, e, n) {
      function r(t) {
        n(385);
      }
      var a = n(49)(n(387), n(412), r, null, null);
      t.exports = a.exports;
    },
    385: function(t, e) {},
    387: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n(50),
        a = (function(t) {
          return t && t.__esModule ? t : { default: t };
        })(r);
      e.default = {
        name: "app",
        computed: {
          bgColor: function() {
            return a.default.getCommonParamByKey("bgColor");
          },
          appCSS: function() {
            var t = this.$store.state.AppCSS || {};
            return (
              (t.background =
                this.bgColor),
              (t.backgroundSize = "contain"),
              t
            );
          }
        }
      };
    },
    412: function(t, e) {
      t.exports = {
        render: function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { style: t.appCSS, attrs: { id: "app" } },
            [
              n(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [n("router-view")],
                1
              )
            ],
            1
          );
        },
        staticRenderFns: []
      };
    },
    413: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(72),
        i = r(a),
        o = n(414),
        u = r(o),
        c = n(415),
        s = r(c),
        l = n(443),
        f = r(l),
        d = n(444),
        p = r(d),
        m = n(445),
        h = r(m),
        v = n(446),
        y = r(v),
        g = n(450),
        b = r(g);
      i.default.use(u.default);
      var w = [
          {
            path: "/",
            name: "Main",
            component: y.default,
            children: [
              s.default,
              f.default,
              p.default,
              h.default,
              b.default,
              { path: "*", redirect: { name: "Index" } }
            ]
          }
        ],
        C = new u.default({ routes: w });
      e.default = C;
    },
    415: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          path: "/index",
          name: "Index",
          meta: { height: "auto" },
          component: function(t) {
            Promise.all([n.e(0), n.e(2)])
              .then(
                function() {
                  var e = [n(464)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          }
        });
    },
    435: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t) {
        return new o.default(function(e, n) {
          (t.success = function(t) {
            e(t);
          }),
            (t.error = function() {
              n();
            }),
            f.ajax(t);
        });
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(51),
        o = r(i),
        u = n(436),
        c = r(u),
        s = n(167),
        l = r(s);
      e.request = a;
      var f = (function() {
        function t(t, e, n) {
          var r = document.createEvent("Events");
          return (
            r.initEvent(e, !0, !0),
            n && (r._args = n),
            t.dispatchEvent(r),
            !r.defaultPrevented
          );
        }
        function e(e, n, r, a) {
          if (e.global) return t(n || document, r, a);
        }
        function n(t) {
          t.global && 0 == g.active++ && e(t, null, "ajaxStart");
        }
        function r(t) {
          t.global && !--g.active && e(t, null, "ajaxStop");
        }
        function a(t, n) {
          var r = n.context;
          if (
            !1 === n.beforeSend.call(r, t, n) ||
            !1 === e(n, r, "ajaxBeforeSend", [t, n])
          )
            return !1;
          e(n, r, "ajaxSend", [t, n]);
        }
        function i(t, n, r) {
          var a = r.context;
          r.success.call(a, t, "success", n),
            e(r, a, "ajaxSuccess", [n, r, t]),
            u("success", n, r);
        }
        function o(t, n, r, a) {
          var i = a.context;
          a.error.call(i, r, n, t),
            e(a, i, "ajaxError", [r, a, t || n]),
            u(n, r, a);
        }
        function u(t, n, a) {
          var i = a.context;
          a.complete.call(i, n, t), e(a, i, "ajaxComplete", [n, a]), r(a);
        }
        function s(t, e) {
          return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
        }
        function f(t) {
          t.processData &&
            t.data &&
            "string" != g.type(t.data) &&
            (t.data = g.param(t.data, t.traditional)),
            !t.data ||
              (t.type && "GET" != t.type.toUpperCase()) ||
              ((t.url = s(t.url, t.data)), (t.data = void 0));
        }
        function d(t) {
          return null == t ? String(t) : C[toString.call(t)] || "object";
        }
        function p(t) {
          return null != t && t == t.window;
        }
        function m(t) {
          return "object" == d(t);
        }
        function h(t, e, n, r) {
          var a,
            i = g.isArray(e),
            o = g.isPlainObject(e);
          g.each(e, function(e, u) {
            (a = g.type(u)),
              r &&
                (e = n
                  ? r
                  : r +
                    "[" +
                    (o || "object" == a || "array" == a ? e : "") +
                    "]"),
              !r && i
                ? t.add(u.name, u.value)
                : "array" == a || (!n && "object" == a)
                  ? h(t, u, n, e)
                  : t.add(e, u);
          });
        }
        function v(t) {
          return (
            t && (t = t.split(";", 2)[0]),
            (t &&
              (t == _
                ? "html"
                : t == S
                  ? "json"
                  : x.test(t) ? "script" : xmlTypeRE.test(t) && "xml")) ||
              "text"
          );
        }
        function y(t, e, n, r) {
          return (
            g.isFunction(e) && ((r = success), (success = e), (e = void 0)),
            g.isFunction(success) || ((r = success), (success = void 0)),
            { url: t, data: e, success: success, dataType: r }
          );
        }
        var g = {},
          b = void 0,
          w = 0,
          C = {},
          x = /^(?:text|application)\/javascript/i,
          S = "application/json",
          _ = "text/html",
          j = /^\s*$/,
          O = function() {};
        (g.active = 0),
          (g.isFunction = function(t) {
            return "function" == typeof t;
          }),
          (g.isArray = function(t) {
            return "array" === g.type(t);
          }),
          (g.likeArray = function(t) {
            return "number" == typeof t.length;
          }),
          (g.each = function(t, e) {
            var n, r;
            if (g.likeArray(t)) {
              for (n = 0; n < t.length; n++)
                if (!1 === e.call(t[n], n, t[n])) return t;
            } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
            return t;
          }),
          g.each(
            "Boolean Number String Function Array Date RegExp Object Error".split(
              " "
            ),
            function(t, e) {
              C["[object " + e + "]"] = e.toLowerCase();
            }
          ),
          (g.type = function(t) {
            return null == t ? String(t) : C[toString.call(t)] || "object";
          }),
          (g.isPlainObject = function(t) {
            return m(t) && !p(t) && (0, l.default)(t) == Object.prototype;
          }),
          (g.remove = function() {
            return g.each(function() {
              null != this.parentNode && this.parentNode.removeChild(this);
            });
          });
        var E = window.encodeURIComponent;
        return (
          (g.param = function(t, e) {
            var n = [];
            return (
              (n.add = function(t, e) {
                g.isFunction(e) && (e = e()),
                  null == e && (e = ""),
                  this.push(E(t) + "=" + E(e));
              }),
              h(n, t, e),
              n.join("&").replace(/%20/g, "+")
            );
          }),
          (g.ajaxSettings = {
            type: "GET",
            beforeSend: O,
            success: O,
            error: O,
            complete: O,
            context: null,
            global: !0,
            xhr: function() {
              return new window.XMLHttpRequest();
            },
            accepts: {
              script:
                "text/javascript, application/javascript, application/x-javascript",
              json: "application/json",
              xml: "application/xml, text/xml",
              html: "text/html",
              text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
          }),
          (g.ajaxJSONP = function(t) {
            function e(a, u) {
              clearTimeout(r),
                s.removeEventListener(a.type, e),
                g.remove(s),
                "error" != a.type && n
                  ? i(n[0], d, t)
                  : o(null, u || "error", d, t),
                (window[c] = l),
                n && g.isFunction(l) && l(n[0]),
                (l = n = void 0);
            }
            if (!("type" in t)) return g.ajax(t);
            var n,
              r,
              u = t.jsonpCallback,
              c = (g.isFunction(u) ? u() : u) || "jsonp" + ++w,
              s = document.createElement("script"),
              l = window[c],
              f = function(t) {
                e({ type: t || "error" }, t || "error");
              },
              d = { abort: f };
            return (
              s.addEventListener("load", e),
              s.addEventListener("error", e),
              !1 === a(d, t)
                ? (f("abort"), d)
                : ((window[c] = function() {
                    n = arguments;
                  }),
                  (s.src = t.url.replace(/\?(.+)=\?/, "?$1=" + c)),
                  document.head.appendChild(s),
                  t.timeout > 0 &&
                    (r = setTimeout(function() {
                      f("timeout");
                    }, t.timeout)),
                  d)
            );
          }),
          (g.ajax = function(t) {
            var e = (0, c.default)(t);
            for (var r in g.ajaxSettings)
              void 0 === e[r] && (e[r] = g.ajaxSettings[r]);
            n(e),
              e.crossDomain ||
                (e.crossDomain =
                  /^([\w-]+:)?\/\/([^\/]+)/.test(e.url) &&
                  RegExp.$2 != window.location.host),
              e.url || (e.url = window.location.toString()),
              f(e);
            var u = e.dataType,
              l = /\?.+=\?/.test(e.url);
            if (
              (l && (u = "jsonp"),
              (!1 !== e.cache &&
                ((t && !0 === t.cache) || ("script" != u && "jsonp" != u))) ||
                (e.url = s(e.url, "_=" + Date.now())),
              "jsonp" == u)
            )
              return (
                l ||
                  (e.url = s(
                    e.url,
                    e.jsonp
                      ? e.jsonp + "=?"
                      : !1 === e.jsonp ? "" : "callback=?"
                  )),
                g.ajaxJSONP(e)
              );
            var d,
              p = e.accepts[u],
              m = {},
              h = function(t, e) {
                m[t.toLowerCase()] = [t, e];
              },
              y = /^([\w-]+:)\/\//.test(e.url)
                ? RegExp.$1
                : window.location.protocol,
              w = e.xhr(),
              C = w.setRequestHeader;
            if (
              (e.crossDomain || h("X-Requested-With", "XMLHttpRequest"),
              h("Accept", p || "*/*"),
              (p = e.mimeType || p) &&
                (p.indexOf(",") > -1 && (p = p.split(",", 2)[0]),
                w.overrideMimeType && w.overrideMimeType(p)),
              (e.contentType ||
                (!1 !== e.contentType &&
                  e.data &&
                  "GET" != e.type.toUpperCase())) &&
                h(
                  "Content-Type",
                  e.contentType || "application/x-www-form-urlencoded"
                ),
              e.headers)
            )
              for (b in e.headers) h(b, e.headers[b]);
            if (
              ((w.setRequestHeader = h),
              (w.onreadystatechange = function() {
                if (4 == w.readyState) {
                  (w.onreadystatechange = O), clearTimeout(d);
                  var t,
                    n = !1;
                  if (
                    (w.status >= 200 && w.status < 300) ||
                    304 == w.status ||
                    (0 == w.status && "file:" == y)
                  ) {
                    (u =
                      u ||
                      v(e.mimeType || w.getResponseHeader("content-type"))),
                      (t = w.responseText);
                    try {
                      "script" == u
                        ? (0, eval)(t)
                        : "xml" == u
                          ? (t = w.responseXML)
                          : "json" == u &&
                            (t = j.test(t) ? null : JSON.parse(t));
                    } catch (t) {
                      n = t;
                    }
                    n ? o(n, "parsererror", w, e) : i(t, w, e);
                  } else
                    o(w.statusText || null, w.status ? "error" : "abort", w, e);
                }
              }),
              !1 === a(w, e))
            )
              return w.abort(), o(null, "abort", w, e), w;
            if (e.xhrFields) for (b in e.xhrFields) w[b] = e.xhrFields[b];
            var x = !("async" in e) || e.async;
            w.open(e.type, e.url, x, e.username, e.password);
            for (b in m) C.apply(w, m[b]);
            return (
              e.timeout > 0 &&
                (d = setTimeout(function() {
                  (w.onreadystatechange = O),
                    w.abort(),
                    o(null, "timeout", w, e);
                }, e.timeout)),
              w.send(e.data ? e.data : null),
              w
            );
          }),
          (g.get = function() {
            return g.ajax(y.apply(null, arguments));
          }),
          (g.post = function() {
            var t = y.apply(null, arguments);
            return (t.type = "POST"), g.ajax(t);
          }),
          (g.getJSON = function() {
            var t = y.apply(null, arguments);
            return (t.dataType = "json"), g.ajax(t);
          }),
          g
        );
      })();
      e.default = f;
    },
    439: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(116),
        i = r(a),
        o = n(50),
        u = r(o),
        c = n(117);
      e.default = {
        computed: (0, i.default)(
          {},
          (0, c.mapState)(["activityName", "banner", "bgColor", "API"]),
          (0, c.mapState)("index", {
            activityTitle: function(t) {
              return t.title;
            },
            activityStartTime: function(t) {
              return t.startTime;
            },
            currentReward: function(t) {
              return t.reward;
            },
            currentOrder: function(t) {
              return t.order;
            },
            currentDate: function(t) {
              return t.date;
            },
            floatUrl: function(t) {
              return t.floatUrl;
            },
            uctrack: function(t) {
              return t.uctrack;
            },
            uc: function(t) {
              return t.uc;
            }
          })
        ),
        methods: {
          isStart: function() {
            return this.activityStartTime - Date.now() / 1e3 < 180;
          },
          backHome: function() {
            this.$router.push({ name: "Index", query: { token: Date.now() } });
          }
        },
        initData: function(t) {
          var e = t.store;
          (e.state.activityName = u.default.getCommonParamByKey(
            "activityName"
          )),
            (e.state.banner = u.default.getCommonParamByKey("banner")),
            (e.state.bgColor = u.default.getCommonParamByKey("bgColor")),
            (e.state.API = u.default.getCommonParamByKey("API"));
        }
      };
    },
    440: function(t, e) {},
    441: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          name: "d-banner",
          props: { image: String },
          methods: {
            back: function() {
              this.$emit("back");
            }
          }
        });
    },
    442: function(t, e) {
      t.exports = {
        render: function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              directives: [
                {
                  name: "lazy",
                  rawName: "v-lazy:background-image",
                  value: t.image,
                  expression: "image",
                  arg: "background-image"
                }
              ],
              staticClass: "banner"
            },
            [n("a", { attrs: { href: "javascript:;" }, on: { click: t.back } })]
          );
        },
        staticRenderFns: []
      };
    },
    443: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          path: "/match/:activity",
          name: "Match",
          component: function(t) {
            Promise.all([n.e(0), n.e(1)])
              .then(
                function() {
                  var e = [n(465)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          meta: { height: "100%" },
          props: !0
        });
    },
    444: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          path: "/review/:activity/:sid",
          name: "Review",
          component: function(t) {
            Promise.all([n.e(0), n.e(4)])
              .then(
                function() {
                  var e = [n(466)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          },
          props: !0,
          meta: { height: "auto" }
        });
    },
    445: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          path: "/qrcode",
          name: "Qrcode",
          meta: { height: "100%", background: "#fff" },
          component: function(t) {
            Promise.all([n.e(0), n.e(5)])
              .then(
                function() {
                  var e = [n(467)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          }
        });
    },
    446: function(t, e, n) {
      function r(t) {
        n(447);
      }
      var a = n(49)(n(448), n(449), r, "data-v-016509fc", null);
      t.exports = a.exports;
    },
    447: function(t, e) {},
    448: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e) {
        var n, r, a;
        if (void 0 === t || void 0 === e)
          throw new Error('"newVer" or "oldVer" is undefined');
        (t = String(t).split(".")),
          (e = String(e).split(".")),
          (n = Math.min(t.length, e.length));
        for (var i = 0; i < n; i++) {
          if (((r = parseInt(t[i])), (a = parseInt(e[i])) > r)) return 1;
          if (a < r) return -1;
        }
        return 0;
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(51),
        o = r(i),
        u = n(176),
        c = r(u),
        s = n(173),
        l = r(s),
        f = n(175),
        d = n(174);
      e.default = {
        name: "Main",
        mixins: [l.default],
        initData: l.default.initData,
        methods: {
          back: function() {
            "Index" == this.$router.currentRoute.name
              ? history.back()
              : this.backHome();
          }
        },
        components: { DBanner: c.default },
        asyncData: function(t) {
          return new o.default(function(e, n) {
            (0, f.getIndexData)()
              .then(function(n) {
                t.store.dispatch("index/updateAll", n).then(function() {
                  n.uc.isSupportFloat
                    ? (0, d.ucparams)()
                        .then(function(n) {
                          var r = void 0,
                            i = a("11.8.3.963", n.ve);
                          (r =
                            1 == i ||
                            (0 == i &&
                              [
                                "uctrialdtzs",
                                "ucrelease3",
                                "ucrelease4"
                              ].indexOf(n.sv) >= 0)),
                            t.store.dispatch("index/upateUC", {
                              isUC: n.isUC,
                              isSupportFloat: r
                            }),
                            e();
                        })
                        .catch(function(t) {
                          e();
                        })
                    : e();
                });
              })
              .catch(function() {
                n();
              });
          });
        }
      };
    },
    449: function(t, e) {
      t.exports = {
        render: function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            [
              n(
                "header",
                [
                  n("d-banner", {
                    attrs: { image: t.banner },
                    on: { back: t.back }
                  })
                ],
                1
              ),
              t._v(" "),
              n(
                "transition",
                { attrs: { name: "fade", mode: "out-in" } },
                [n("router-view")],
                1
              )
            ],
            1
          );
        },
        staticRenderFns: []
      };
    },
    450: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          path: "/error",
          name: "Error",
          component: function(t) {
            n
              .e(3)
              .then(
                function() {
                  var e = [n(468)];
                  t.apply(null, e);
                }.bind(this)
              )
              .catch(n.oe);
          }
        });
    },
    451: function(t, e, n) {
      function r(t) {
        n(452);
      }
      var a = n(49)(n(453), n(454), r, "data-v-c318817c", null);
      t.exports = a.exports;
    },
    452: function(t, e) {},
    453: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          data: function() {
            return {
              percent: 0,
              show: !1,
              canSuccess: !0,
              duration: 3e3,
              height: "3px",
              color: "#ffca2b",
              failedColor: "#ff0000"
            };
          },
          methods: {
            start: function() {
              var t = this;
              return (
                (this.show = !0),
                (this.canSuccess = !0),
                this._timer && (clearInterval(this._timer), (this.percent = 0)),
                (this._cut = 1e4 / Math.floor(this.duration)),
                (this._timer = setInterval(function() {
                  t.increase(t._cut * Math.random()),
                    t.percent > 95 && t.finish();
                }, 100)),
                this
              );
            },
            set: function(t) {
              return (
                (this.show = !0),
                (this.canSuccess = !0),
                (this.percent = Math.floor(t)),
                this
              );
            },
            get: function() {
              return Math.floor(this.percent);
            },
            increase: function(t) {
              return (this.percent = this.percent + Math.floor(t)), this;
            },
            decrease: function(t) {
              return (this.percent = this.percent - Math.floor(t)), this;
            },
            finish: function() {
              return (this.percent = 100), this.hide(), this;
            },
            pause: function() {
              return clearInterval(this._timer), this;
            },
            hide: function() {
              var t = this;
              return (
                clearInterval(this._timer),
                (this._timer = null),
                setTimeout(function() {
                  (t.show = !1),
                    t.$nextTick(function() {
                      setTimeout(function() {
                        t.percent = 0;
                      }, 200);
                    });
                }, 500),
                this
              );
            },
            fail: function() {
              return (this.canSuccess = !1), this;
            }
          }
        });
    },
    454: function(t, e) {
      t.exports = {
        render: function() {
          var t = this,
            e = t.$createElement;
          return (t._self._c || e)("div", {
            staticClass: "progress",
            style: {
              width: t.percent + "%",
              height: t.height,
              "background-color": t.canSuccess ? t.color : t.failedColor,
              opacity: t.show ? 1 : 0
            }
          });
        },
        staticRenderFns: []
      };
    },
    455: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(72),
        i = r(a),
        o = n(117),
        u = r(o),
        c = n(456),
        s = r(c),
        l = n(457),
        f = r(l),
        d = n(458),
        p = r(d);
      i.default.use(u.default),
        (e.default = new u.default.Store({
          state: {
            activityName: "",
            banner: "",
            bgColor: "",
            API: {},
            AppCSS: {}
          },
          mutations: {
            updateAppCSS: function(t, e) {
              t.AppCSS = e;
            }
          },
          actions: {
            updateAppCSS: function(t, e) {
              t.commit("updateAppCSS", e);
            }
          },
          modules: { index: s.default, review: p.default, answer: f.default }
        }));
    },
    456: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          namespaced: !0,
          state: {
            result: {},
            currentCC: {},
            reviewCC: [],
            nextCC: [],
            activities: [],
            startTime: 0,
            title: "",
            reward: "",
            order: "",
            uc: {},
            uctrack: {},
            floatUrl: "",
            timeout: 0
          },
          mutations: {
            updateCurrentCC: function(t, e) {
              t.currentCC = e;
            },
            updateTimeout: function(t, e) {
              t.timeout = e;
            },
            updateUC: function(t, e) {
              t.uc = e;
            },
            updateAll: function(t, e) {
              (t.result = e),
                console.log(e),
                "info" in e &&
                  ((t.currentCC = e.info),
                  (t.reward = e.info.reward),
                  (t.order = e.info.order),
                  (t.title = e.info.cnname),
                  (t.startTime = e.info.starttime),
                  (t.date = e.info.date)),
                "uc" in e && (t.uc = e.uc),
                "floatUrl" in e && (t.floatUrl = e.floatUrl),
                "uctrack" in e && (t.uctrack = e.uctrack),
                "previous" in e && (t.reviewCC = e.previous),
                "next" in e && (t.nextCC = e.next),
                "other" in e && (t.activities = e.other);
            }
          },
          actions: {
            updateCurrentCC: function(t, e) {
              t.commit("updateCurrentCC", e);
            },
            updateUC: function(t, e) {
              t.commit("updateUC", e);
            },
            updateTimeout: function(t, e) {
              t.commit("updateTimeout", e);
            },
            updateAll: function(t, e) {
              t.commit("updateAll", e);
            }
          }
        });
    },
    457: function(t, e, n) {
      "use strict";
      function r(t, e) {
        return i.default.isEmptyObject(t)
          ? e.status
            ? "" != e.round
              ? "" == e.correct && 1 == e.round
                ? 1
                : 1 != e.round ? (e.round < 12 ? 2 : 4) : 2
              : 1
            : 0
          : e.sid != t.sid
            ? 3
            : e.status
              ? "" != e.round
                ? 12 == e.round && "" != e.official
                  ? 4
                  : Number(e.round) > Number(t.round)
                    ? "" != e.correct ? 2 : -1
                    : e.round == t.round &&
                      (e.correct != t.correct || e.official != t.official)
                      ? 2
                      : -1
                : 1
              : 0;
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(50),
        i = (function(t) {
          return t && t.__esModule ? t : { default: t };
        })(a);
      e.default = {
        namespaced: !0,
        state: { result: {}, currentResult: {} },
        mutations: {
          updateResult: function(t, e) {
            var n = void 0;
            (t.result = e),
              i.default.isEmptyObject(t.currentResult)
                ? ((n = r({}, e)), (e.mstatus = n), (t.currentResult = e))
                : ((n = r(t.currentResult, e)),
                  2 == n || 4 == n
                    ? ((e.mstatus = n), (t.currentResult = e))
                    : (t.currentResult.mstatus = n));
          },
          updateResultMStatus: function(t, e) {
            t.currentResult.mstatus = e;
          },
          cleanupCurrent: function(t) {
            t.currentResult = {};
          }
        },
        actions: {
          updateResult: function(t, e) {
            t.commit("updateResult", e);
          },
          updateResultMStatus: function(t, e) {
            t.commit("updateResultMStatus", e);
          },
          cleanupCurrent: function(t) {
            t.commit("cleanupCurrent");
          }
        }
      };
    },
    458: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          namespaced: !0,
          state: { review: {} },
          mutations: {
            updateReview: function(t, e) {
              t.review = e;
            }
          },
          actions: {
            updateReview: function(t, e) {
              t.commit("updateReview", e);
            }
          }
        });
    },
    460: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e, n, r) {
        l.default.mixin({
          beforeRouteUpdate: function(t, e, a) {
            var i = this.$options.initData;
            i && "function" == typeof i && i({ store: n, route: t });
            var o = this.$options.asyncData;
            o
              ? (r.start(),
                o
                  .call(this, { store: n, route: t })
                  .then(function() {
                    r.finish(), a();
                  })
                  .catch(a))
              : a();
          },
          beforeRouteEnter: function(t, e, n) {
            t.meta.height
              ? n(function(e) {
                  e.$store.dispatch(
                    "updateAppCSS",
                    (0, c.default)({ "min-height": "100%" }, t.meta)
                  );
                })
              : n();
          }
        }),
          e.beforeResolve(function(t, a, i) {
            var u = e.getMatchedComponents(t),
              c = e.getMatchedComponents(a),
              s = !1,
              l = u.filter(function(t, e) {
                return s || (s = c[e] !== t);
              });
            if (!l.length) return i();
            r.start(),
              o.default
                .all(
                  l.map(function(e) {
                    if (
                      (e.initData &&
                        "function" == typeof e.initData &&
                        e.initData({ store: n, route: t }),
                      e.asyncData)
                    )
                      return e.asyncData({ store: n, route: t });
                  })
                )
                .then(function() {
                  r.finish(), i();
                })
                .catch(function(t) {
                  r.finish(), i(t || new Error("路由异常"));
                });
          }),
          e.onReady(function() {
            return t.$mount("#app");
          });
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(51),
        o = r(i),
        u = n(118),
        c = r(u);
      e.App = a;
      var s = n(72),
        l = r(s);
    },
    50: function(t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function a(t, e) {
        if (!t || 1 !== t.nodeType) return !1;
        var n =
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.oMatchesSelector ||
          t.matchesSelector;
        if (n) return n.call(t, e);
        var r,
          a = t.parentNode,
          o = !a;
        return (
          o && (a = y).appendChild(t),
          (r = ~i(a, e).indexOf(t)),
          o && y.removeChild(t),
          r
        );
      }
      function i(t, e) {
        var n,
          r = "#" == e[0],
          a = !r && "." == e[0],
          i = r || a ? e.slice(1) : e,
          o = simpleSelectorRE.test(i);
        return x(t) && o && r
          ? (n = t.getElementById(i)) ? [n] : []
          : 1 !== t.nodeType && 9 !== t.nodeType
            ? []
            : slice.call(
                o && !r
                  ? a ? t.getElementsByClassName(i) : t.getElementsByTagName(e)
                  : t.querySelectorAll(e)
              );
      }
      function o() {
        return /Android/i.test(j);
      }
      function u() {
        return /iPhone|iPad|iPod/i.test(j);
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(388),
        s = r(c),
        l = n(167),
        f = r(l);
      (e.isAndroid = o), (e.isIOS = u);
      var d = window.encodeURIComponent,
        p = window.decodeURIComponent,
        m = {},
        h = m.toString;
      "Boolean Number String Function Array Date RegExp Object Error"
        .split(" ")
        .forEach(function(t, e) {
          m["[object " + t + "]"] = t.toLowerCase();
        });
      var v = (function() {
          var t = 0;
          return function(e, n, r, a) {
            var i = function() {},
              o = this.extend(n || {}, { success: r || i, fail: a || i });
            if (!t)
              try {
                window.ucapi.invoke(e, o);
              } catch (e) {
                t = 1;
              }
            t && o.fail({ result: "SM_NO_UCAPI" });
          };
        })(),
        y = document.createElement("div"),
        g = function(t) {
          return null == t ? String(t) : m[h.call(t)] || "object";
        },
        b = function(t) {
          return "function" == g(t);
        },
        w = function(t) {
          return null != t && t == t.window;
        },
        C = function(t) {
          return (
            "object" == g(t) && !w(t) && (0, f.default)(t) == Object.prototype
          );
        },
        x = function(t) {
          return null != t && t.nodeType == t.DOCUMENT_NODE;
        },
        S = function(t) {
          return "string" == g(t);
        },
        _ = function(t) {
          return "undefined" == g(t);
        },
        j = navigator.userAgent;
      e.default = {
        setCookie: function(t, e, n, r) {
          var a = t + "=" + d(e);
          r && (a += ";domain=" + r),
            n && (a += ";path=/;expires=" + n.toGMTString() + ";"),
            (document.cookie = a);
        },
        getCookie: function(t) {
          var e = new RegExp("(^| )" + t + "=([^;]*)(;|$)"),
            n = e.exec(document.cookie);
          return n ? p(n[2]) || null : null;
        },
        extend: function(t) {
          var e = [].slice.call(arguments, 1),
            n = t;
          return (
            e.forEach(function(t) {
              for (var e in t) n[e] = t[e];
            }),
            n
          );
        },
        isEmptyObject: function(t) {
          for (var e in t) return !1;
          return !0;
        },
        serialize: function(t, e, n, r) {
          var a = void 0,
            i = Array.isArray(e),
            o = this.isPlainObject(e);
          for (var u in e) {
            var c = e[u];
            (a = this.type(c)),
              r &&
                (u = n
                  ? r
                  : r +
                    "[" +
                    (o || "object" == a || "array" == a ? u : "") +
                    "]"),
              !r && i
                ? t.add(c.name, c.value)
                : "array" == a || (!n && "object" == a)
                  ? this.serialize(t, c, n, u)
                  : t.add(u, c);
          }
        },
        type: g,
        isFunction: b,
        isWindow: w,
        isPlainObject: C,
        isString: S,
        isDocument: x,
        isUndefined: _,
        param: function(t, e) {
          var n = [];
          return (
            (n.add = function(t, e) {
              this.push(escape(t) + "=" + escape(e));
            }),
            this.serialize(n, t, e),
            n.join("&").replace(/%20/g, "+")
          );
        },
        ucInvoke: v,
        parents: function(t, e) {
          for (var n = [], r = [t], i = this; r.length > 0; ) {
            for (var o = [], u = 0, c = r.length; u < c; u++) {
              var s = r[u];
              s &&
                (s = s.parentNode) &&
                !i.isDocument(s) &&
                n.indexOf(s) < 0 &&
                (n.push(s), o.push(s));
            }
            r = o;
          }
          return (function(t, e) {
            return null == e
              ? t
              : t.filter(function(t) {
                  return a(t, e);
                });
          })(n, e);
        },
        unescape: function(t) {
          var e = [];
          if ("string" != typeof t) return t;
          for (var n = 0, r = t.length; n < r; n++)
            e.push(1 ^ t[n].charCodeAt());
          return String.fromCharCode.apply(0, e);
        },
        deserialize: function(t) {
          var e;
          try {
            return t
              ? "true" == t ||
                  ("false" != t &&
                    ("null" == t
                      ? null
                      : isNaN((e = Number(t))) || e + "" !== t
                        ? /^[\[\{]/.test(t) ? JSON.parse(t) : t
                        : e))
              : t;
          } catch (e) {
            return t;
          }
        },
        on: (function() {
          return document.addEventListener
            ? function(t, e, n) {
                t && e && n && t.addEventListener(e, n, !1);
              }
            : function(t, e, n) {
                t && e && n && t.attachEvent("on" + e, n);
              };
        })(),
        off: (function() {
          return document.addEventListener
            ? function(t, e, n) {
                t && e && n && t.removeEventListener(e, n, !1);
              }
            : function(t, e, n) {
                t && e && n && t.detachEvent("on" + e, n);
              };
        })(),
        once: function(t, e, n) {
          var r = this,
            a = function a() {
              n && n.apply(this, arguments), r.off(t, e, a);
            };
          this.on(t, e, a);
        },
        hasClass: function(t, e) {
          if (!t || !e) return !1;
          if (-1 !== e.indexOf(" "))
            throw new Error("className should not contain space.");
          return t.classList
            ? t.classList.contains(e)
            : (" " + t.className + " ").indexOf(" " + e + " ") > -1;
        },
        addClass: function(t, e) {
          if (t) {
            for (
              var n = t.className,
                r = (e || "").split(" "),
                a = 0,
                i = r.length;
              a < i;
              a++
            ) {
              var o = r[a];
              o &&
                (t.classList
                  ? t.classList.add(o)
                  : this.hasClass(t, o) || (n += " " + o));
            }
            t.classList || (t.className = n);
          }
        },
        removeClass: function(t, e) {
          if (t && e) {
            for (
              var n = e.split(" "),
                r = " " + t.className + " ",
                a = 0,
                i = n.length;
              a < i;
              a++
            ) {
              var o = n[a];
              o &&
                (t.classList
                  ? t.classList.remove(o)
                  : this.hasClass(t, o) && (r = r.replace(" " + o + " ", " ")));
            }
            t.classList || (t.className = this.trim(r));
          }
        },
        trim: function(t) {
          return (t || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
        },
        getCommonParamByKey: function(t) {
          var e = sm.COMMON_PARAMS;
          return (
            (t || "").split(".").forEach(function(t) {
              t && void 0 !== e && (e = e[t]);
            }),
            e
          );
        },
        getSearchUrl: function(t) {
          return this.getCommonParamByKey("Search").replace(
            /q=\&/,
            "q=" + t + "&"
          );
        },
        queryString: (function() {
          function t(t) {
            this.search = t || "";
          }
          return (
            (t.prototype = {
              toString: function() {
                return this.search;
              },
              get: function(t) {
                var e = this;
                return (
                  (e.search.match(e.makeReg(d(t))) || ["", "", null])[2] || ""
                );
              },
              set: function(t, e, n) {
                var r = d(t),
                  a = e ? d(e) : "",
                  i = this,
                  o = i.search,
                  u = i.makeReg(r);
                u.test(o)
                  ? (i.search = n
                      ? o.replace(u, "$1").replace(/&($|#.*)/, "$1")
                      : o.replace(u, "$1" + r + "=" + a + "$3"))
                  : n || i.add(r, a);
              },
              add: function(t, e) {
                var n = this;
                n.search
                  ? (n.search = n.search.replace(
                      /([^#]+)(#.*)?/,
                      "$1&" + t + "=" + e + "$2"
                    ))
                  : (n.search = "?" + t + "=" + e);
              },
              makeReg: function(t) {
                return new RegExp("(\\?|&)" + t + "(?:&|$|=(.*?)(&|#|$))");
              }
            }),
            function(e) {
              var n = new t(e || window.location.search),
                r = {
                  get: function(t) {
                    return decodeURIComponent(n.get(t).toString());
                  },
                  set: function(t, e) {
                    return n.set(t, e), r;
                  },
                  del: function(t) {
                    return n.set(t, "", 1), r;
                  },
                  toString: function() {
                    return n.toString();
                  }
                };
              return r;
            }
          );
        })(),
        dataAdapter: function(t, e, n) {
          if (this.isEmptyObject(t)) return t;
          if (!Array.isArray(t)) throw new Error("must be array");
          if (!this.isPlainObject(e) || this.isEmptyObject(e)) return t;
          n = this.isFunction(n)
            ? n
            : function(t, e) {
                return e[t];
              };
          var r = [],
            a = void 0;
          return (
            t.forEach(function(t, i) {
              var o = {};
              for (var u in t)
                u in e
                  ? ((a = n(u, i, t)), (o[e[u]] = void 0 === a ? t[u] : a))
                  : (o[u] = t[u]);
              r.push(o);
            }),
            r
          );
        },
        throttle: function(t, e, n) {
          var r = null,
            a = this;
          return function() {
            var i = this,
              o = arguments;
            if (a.isFunction(e)) {
              if (!e.call(i)) return;
            }
            clearTimeout(r),
              (r = setTimeout(function() {
                a.isFunction(t) && t.apply(i, o);
              }, n || 0));
          };
        },
        des: function(t) {
          var e = [];
          if ("string" != typeof t) return t;
          for (var n = 0, r = t.length; n < r; n++)
            e.push(1 ^ t[n].charCodeAt());
          return String.fromCharCode.apply(0, e);
        },
        supportOrientation: function() {
          return (
            "number" == typeof window.orientation &&
            "object" === (0, s.default)(window.onorientationchange)
          );
        },
        sleep: (function(t) {
          function e(e, n, r, a) {
            return t.apply(this, arguments);
          }
          return (
            (e.toString = function() {
              return t.toString();
            }),
            e
          );
        })(function(t, e, n, r) {
          Math.abs(n - e) >= t
            ? this.isFunction(r) && r()
            : sleep(t, e, Date.now() / 1e3, r);
        })
      };
    }
  },
  [177]
);
//# sourceMappingURL=dream.60.js.map
