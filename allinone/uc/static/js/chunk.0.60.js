webpackJsonp([0], {
  469: function(t, n, e) {
    function i(t) {
      e(485);
    }
    var a = e(49)(e(487), e(488), i, "data-v-e3423ba8", null);
    t.exports = a.exports;
  },
  470: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var i = e(116),
      a = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(i),
      A = e(174),
      o = e(117);
    n.default = {
      computed: (0, a.default)(
        {
          config: function() {
            return this.conf || this.$parent.conf || {};
          },
          bigQrcode: function() {
            return "//sm01.alicdn.com/L1/272/6837/static/wap/img/dream/bigqrcode.png";
          },
          smallQrcode: function() {
            return "//sm01.alicdn.com/L1/272/6837/static/wap/img/dream/bigqrcode.png";
          }
        },
        (0, o.mapState)("index", {
          uctrack: function(t) {
            return t.uctrack;
          },
          uc: function(t) {
            return t.uc;
          },
          floatUrl: function(t) {
            return t.floatUrl;
          }
        }),
        {
          title: function() {
            return this.config.title;
          },
          subTitle: function() {
            return this.config.subTitle;
          }
        }
      ),
      methods: {
        proxy: function(t) {
          "function" == typeof this.click
            ? this.click(t)
            : "function" == typeof this.$parent.click &&
              this.$parent.click(this);
        },
        downOrOpenUC: function() {
          return (
            !!this.uctrack.url &&
            ((0, A.downOrOpenUC)(this.uctrack.url, this.uctrack.ch), !0)
          );
        },
        openAnswerHelper: function() {
          (0, A.openAnswerHelper)(this.uc.isSupportFloat, {
            url: this.floatUrl,
            uctrack: this.uctrack
          });
        }
      },
      props: { conf: [Object] }
    };
  },
  471: function(t, n, e) {
    function i(t) {
      e(481);
    }
    var a = e(49)(e(483), e(484), i, "data-v-6dec0934", null);
    t.exports = a.exports;
  },
  472: function(t, n, e) {
    var i = e(49)(e(489), e(509), null, null, null);
    t.exports = i.exports;
  },
  473: function(t, n, e) {
    function i(t) {
      e(534);
    }
    var a = e(49)(e(536), e(537), i, "data-v-7cfa3ad2", null);
    t.exports = a.exports;
  },
  481: function(t, n, e) {
    var i = e(482);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("c504a8ec", i, !0);
  },
  482: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        ".title[data-v-6dec0934]{font-size:20px;height:30px;line-height:30px;font-weight:700}.title span[data-v-6dec0934]{text-align:right;display:inline-block;vertical-align:-1px;height:20px;line-height:20px}.title i.tag[data-v-6dec0934]{font-style:normal;border-radius:20px;vertical-align:2px;margin-left:7px;padding:0 8px;display:inline-block;height:20px;line-height:20px;font-size:12px;text-align:center}.title i.tag.precess[data-v-6dec0934]{background:linear-gradient(90deg,#42e0ae,#56e1b1)}.title i.tag.finish[data-v-6dec0934]{background:linear-gradient(90deg,#ffb26d,#ff947a)}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/title/index.vue"
          ],
          names: [],
          mappings:
            "AACA,wBACE,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,eAAkB,CACnB,AACD,6BACI,iBAAkB,AAClB,qBAAsB,AACtB,oBAAqB,AACrB,YAAa,AACb,gBAAkB,CACrB,AACD,8BACI,kBAAmB,AACnB,mBAAoB,AACpB,mBAAoB,AACpB,gBAAiB,AACjB,cAAiB,AACjB,qBAAsB,AACtB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACtB,AACD,sCACM,iDAAwD,CAC7D,AACD,qCACM,iDAAwD,CAC7D",
          file: "index.vue",
          sourcesContent: [
            "\n.title[data-v-6dec0934] {\n  font-size: 20px;\n  height: 30px;\n  line-height: 30px;\n  font-weight: bold;\n}\n.title span[data-v-6dec0934] {\n    text-align: right;\n    display: inline-block;\n    vertical-align: -1px;\n    height: 20px;\n    line-height: 20px;\n}\n.title i.tag[data-v-6dec0934] {\n    font-style: normal;\n    border-radius: 20px;\n    vertical-align: 2px;\n    margin-left: 7px;\n    padding: 0px 8px;\n    display: inline-block;\n    height: 20px;\n    line-height: 20px;\n    font-size: 12px;\n    text-align: center;\n}\n.title i.tag.precess[data-v-6dec0934] {\n      background: linear-gradient(to right, #42E0AE, #56E1B1);\n}\n.title i.tag.finish[data-v-6dec0934] {\n      background: linear-gradient(to right, #ffb26d, #ff947a);\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  483: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = {
        name: "d-order-title",
        props: { title: String, status: [Number, String] }
      });
  },
  484: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", { staticClass: "title" }, [
          t.title
            ? e("span", { domProps: { textContent: t._s(t.title) } })
            : t._e(),
          t._v(" "),
          t.title && 1 == t.status
            ? e("i", { staticClass: "tag precess" }, [t._v("进行中")])
            : t._e(),
          t._v(" "),
          t.title && 2 == t.status
            ? e("i", { staticClass: "tag finish" }, [t._v("已结束")])
            : t._e()
        ]);
      },
      staticRenderFns: []
    };
  },
  485: function(t, n, e) {
    var i = e(486);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("576a0e0e", i, !0);
  },
  486: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        "a[data-v-e3423ba8]{text-align:center;color:hsla(0,0%,100%,.8);box-sizing:border-box;display:block;width:100%;padding:0 8px}a.hollow[data-v-e3423ba8]{line-height:34px;border-radius:34px;min-height:34px;border:1px solid hsla(0,0%,100%,.5);font-size:12px}a.solid[data-v-e3423ba8]{line-height:34px;border-radius:34px;min-height:34px}a.answer[data-v-e3423ba8],a.solid[data-v-e3423ba8]{background:hsla(0,0%,100%,.2);color:#fff;font-size:12px}a.answer[data-v-e3423ba8]{line-height:32px;border-radius:32px;min-height:32px;text-align:center;padding:0 14px}a.entry[data-v-e3423ba8]{min-height:60px;line-height:60px;color:#fff;font-size:20px;border-radius:60px;background:linear-gradient(90deg,#f3cd3c,#fe5e9a);box-shadow:0 4px 0 0 #c05067,0 8px 8px 4px rgba(0,0,0,.2);font-weight:700}@media screen and (max-width:320px){a.entry[data-v-e3423ba8]{min-height:50px;line-height:50px}}a.entry-disable[data-v-e3423ba8]{min-height:60px;line-height:60px;color:#fff;font-size:20px;border-radius:60px;font-weight:700;background:#7a63b4;box-shadow:0 4px 0 0 #59448c,0 8px 8px 4px rgba(0,0,0,.2)}@media screen and (max-width:320px){a.entry-disable[data-v-e3423ba8]{min-height:50px;line-height:50px}}a.down[data-v-e3423ba8]{min-height:32px;line-height:32px;color:#fff;text-align:center;font-size:14px;border-radius:32px;font-weight:700;background:linear-gradient(to right top,#3569f0,#5a52fa);box-shadow:0 2px 0 0 #3e70db}@media screen and (max-width:320px){a.down[data-v-e3423ba8]{min-height:32px;line-height:32px}}a.down1[data-v-e3423ba8]{height:24px;background:#ff7f0d;line-height:24px;padding:0 4px;border-radius:2px;font-size:14px;color:#fff}a.txt[data-v-e3423ba8]{line-height:33px;height:33px;color:hsla(0,0%,100%,.7)}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/button/index.vue"
          ],
          names: [],
          mappings:
            "AACA,mBACE,kBAAmB,AACnB,yBAAgC,AAChC,sBAAuB,AACvB,cAAe,AACf,WAAY,AACZ,aAAiB,CAClB,AACD,0BACI,iBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,oCAA2C,AAC3C,cAAgB,CACnB,AACD,yBAEI,iBAAkB,AAClB,mBAAoB,AACpB,eAAiB,CAGpB,AACD,mDAPI,8BAAqC,AAIrC,WAAe,AACf,cAAgB,CAWnB,AATD,0BAEI,iBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AAGjB,kBAAmB,AACnB,cAAkB,CACrB,AACD,yBACI,gBAAiB,AACjB,iBAAkB,AAClB,WAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,kDAAwD,AACxD,0DAAsE,AACtE,eAAkB,CACrB,AACD,oCACA,yBACQ,gBAAiB,AACjB,gBAAkB,CACzB,CACA,AACD,iCACI,gBAAiB,AACjB,iBAAkB,AAClB,WAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,gBAAkB,AAClB,mBAAoB,AACpB,yDAAsE,CACzE,AACD,oCACA,iCACQ,gBAAiB,AACjB,gBAAkB,CACzB,CACA,AACD,wBACI,gBAAiB,AACjB,iBAAkB,AAClB,WAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,mBAAoB,AACpB,gBAAkB,AAClB,yDAA4D,AAC5D,4BAAoC,CACvC,AACD,oCACA,wBACQ,gBAAiB,AACjB,gBAAkB,CACzB,CACA,AACD,yBACI,YAAa,AACb,mBAAoB,AACpB,iBAAkB,AAClB,cAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,UAAY,CACf,AACD,uBACI,iBAAkB,AAClB,YAAa,AACb,wBAAgC,CACnC",
          file: "index.vue",
          sourcesContent: [
            "\na[data-v-e3423ba8] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 0px 8px;\n}\na.hollow[data-v-e3423ba8] {\n    line-height: 34px;\n    border-radius: 34px;\n    min-height: 34px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    font-size: 12px;\n}\na.solid[data-v-e3423ba8] {\n    background: rgba(255, 255, 255, 0.2);\n    line-height: 34px;\n    border-radius: 34px;\n    min-height: 34px;\n    color: #ffffff;\n    font-size: 12px;\n}\na.answer[data-v-e3423ba8] {\n    background: rgba(255, 255, 255, 0.2);\n    line-height: 32px;\n    border-radius: 32px;\n    min-height: 32px;\n    color: #ffffff;\n    font-size: 12px;\n    text-align: center;\n    padding: 0px 14px;\n}\na.entry[data-v-e3423ba8] {\n    min-height: 60px;\n    line-height: 60px;\n    color: #ffffff;\n    font-size: 20px;\n    border-radius: 60px;\n    background: linear-gradient(to right, #F3CD3C, #FE5E9A);\n    box-shadow: #C05067 0px 4px 0px 0px, rgba(0, 0, 0, 0.2) 0 8px 8px 4px;\n    font-weight: bold;\n}\n@media screen and (max-width: 320px) {\na.entry[data-v-e3423ba8] {\n        min-height: 50px;\n        line-height: 50px;\n}\n}\na.entry-disable[data-v-e3423ba8] {\n    min-height: 60px;\n    line-height: 60px;\n    color: #ffffff;\n    font-size: 20px;\n    border-radius: 60px;\n    font-weight: bold;\n    background: #7A63B4;\n    box-shadow: #59448C 0px 4px 0px 0px, rgba(0, 0, 0, 0.2) 0 8px 8px 4px;\n}\n@media screen and (max-width: 320px) {\na.entry-disable[data-v-e3423ba8] {\n        min-height: 50px;\n        line-height: 50px;\n}\n}\na.down[data-v-e3423ba8] {\n    min-height: 32px;\n    line-height: 32px;\n    color: #ffffff;\n    text-align: center;\n    font-size: 14px;\n    border-radius: 32px;\n    font-weight: bold;\n    background: linear-gradient(to right top, #3569F0, #5A52FA);\n    box-shadow: #3E70DB 0px 2px 0px 0px;\n}\n@media screen and (max-width: 320px) {\na.down[data-v-e3423ba8] {\n        min-height: 32px;\n        line-height: 32px;\n}\n}\na.down1[data-v-e3423ba8] {\n    height: 24px;\n    background: #ff7f0d;\n    line-height: 24px;\n    padding: 0px 4px;\n    border-radius: 2px;\n    font-size: 14px;\n    color: #fff;\n}\na.txt[data-v-e3423ba8] {\n    line-height: 33px;\n    height: 33px;\n    color: rgba(255, 255, 255, 0.7);\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  487: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = {
        name: "d-button",
        props: { type: [Number, String], text: [String] },
        methods: {
          click: function() {
            this.$emit("click");
          }
        },
        computed: {
          klass: function() {
            var t = "";
            switch (Number(this.type)) {
              case 1:
                t = "hollow";
                break;
              case 2:
                t = "solid";
                break;
              case 3:
                t = "entry";
                break;
              case 4:
                t = "answer";
                break;
              case 5:
                t = "entry-disable";
                break;
              case 6:
                t = "down";
                break;
              case 7:
                t = "txt";
                break;
              case 8:
                t = "down1";
            }
            return t;
          }
        }
      });
  },
  488: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement;
        return (t._self._c || n)("a", {
          class: t.klass,
          attrs: { href: "javascript:;" },
          domProps: { textContent: t._s(t.text) },
          on: { click: t.click }
        });
      },
      staticRenderFns: []
    };
  },
  489: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var i = (e(174), ["float", "qrcode", "banner", "at-once"]),
      a = function(t) {
        return "[object Number]" === {}.toString.call(t)
          ? (i.length <= t &&
              (console.warn(
                "'" + t + "' UCLIST not found, use the default UCLIST."
              ),
              (t = 0)),
            console.log(i[t]),
            i[t])
          : (-1 === i.indexOf(t) &&
              (console.warn(
                "'" + t + "' UCLIST not found, use the default novelList."
              ),
              (t = i[0])),
            t);
      };
    n.default = {
      name: "d-uc",
      props: { type: [String, Number], conf: [Object] },
      computed: {
        uc: function() {
          return "uc-" + a(this.type);
        }
      },
      components: {
        UcFloat: e(490),
        UcQrcode: e(495),
        UcAtOnce: e(500),
        UcBanner: e(503)
      }
    };
  },
  490: function(t, n, e) {
    function i(t) {
      e(491);
    }
    var a = e(49)(e(493), e(494), i, "data-v-22fb7292", null);
    t.exports = a.exports;
  },
  491: function(t, n, e) {
    var i = e(492);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("a06983f4", i, !0);
  },
  492: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        ".uc[data-v-22fb7292]{display:block;height:66px;background:rgba(90,69,140,.9);width:100%;padding:5px 14px;position:fixed;bottom:0;left:0}.button[data-v-22fb7292]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:56px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.button>div[data-v-22fb7292]:first-child{background:#fff;padding:2px;width:56px;height:100%;position:relative;border-radius:2px}.button>div:first-child img[data-v-22fb7292]{position:absolute;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);top:50%;left:50%;width:50px;height:50px}.button>div[data-v-22fb7292]:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left;padding-left:15px}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/uc/float.vue"
          ],
          names: [],
          mappings:
            "AACA,qBACE,cAAe,AACf,YAAa,AACb,8BAAmC,AACnC,WAAY,AACZ,iBAAkB,AAClB,eAAgB,AAChB,SAAY,AACZ,MAAU,CACX,AACD,yBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,YAAa,AACb,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,yCACI,gBAAoB,AACpB,YAAa,AACb,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAmB,CACtB,AACD,6CACM,kBAAmB,AACnB,mCAAsC,AACtC,2CAA8C,AAC9C,QAAS,AACT,SAAU,AACV,WAAY,AACZ,WAAa,CAClB,AACD,0CACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,iBAAmB,CACtB",
          file: "float.vue",
          sourcesContent: [
            "\n.uc[data-v-22fb7292] {\n  display: block;\n  height: 66px;\n  background: rgba(90, 69, 140, 0.9);\n  width: 100%;\n  padding: 5px 14px;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n}\n.button[data-v-22fb7292] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 56px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.button > div[data-v-22fb7292]:nth-child(1) {\n    background: #ffffff;\n    padding: 2px;\n    width: 56px;\n    height: 100%;\n    position: relative;\n    border-radius: 2px;\n}\n.button > div:nth-child(1) img[data-v-22fb7292] {\n      position: absolute;\n      transform: translate3d(-50%, -50%, 0);\n      -webkit-transform: translate3d(-50%, -50%, 0);\n      top: 50%;\n      left: 50%;\n      width: 50px;\n      height: 50px;\n}\n.button > div[data-v-22fb7292]:nth-child(2) {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n    padding-left: 15px;\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  493: function(t, n, e) {
    "use strict";
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = e(469),
      A = i(a),
      o = e(470),
      r = i(o);
    n.default = {
      name: "uc-float",
      mixins: [r.default],
      components: { DButton: A.default },
      methods: {
        click: function(t) {
          this.downOrOpenUC();
        }
      }
    };
  },
  494: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", { staticClass: "uc" }, [
          e(
            "a",
            {
              staticClass: "button",
              attrs: { href: "javascript:;" },
              on: { click: t.proxy }
            },
            [
              e("div", { staticClass: "imgwrap" }, [
                e("img", { attrs: { src: t.smallQrcode } })
              ]),
              t._v(" "),
              e("div", [
                t.title
                  ? e("p", { domProps: { textContent: t._s(t.title) } })
                  : t._e(),
                t._v(" "),
                t.subTitle
                  ? e("p", { domProps: { textContent: t._s(t.subTitle) } })
                  : t._e()
              ]),
              t._v(" "),
              t.config.button
                ? e(
                    "div",
                    [
                      e("d-button", {
                        attrs: {
                          type: t.config.button.type,
                          text: t.config.button.text
                        }
                      })
                    ],
                    1
                  )
                : t._e()
            ]
          )
        ]);
      },
      staticRenderFns: []
    };
  },
  495: function(t, n, e) {
    function i(t) {
      e(496);
    }
    var a = e(49)(e(498), e(499), i, "data-v-22d74748", null);
    t.exports = a.exports;
  },
  496: function(t, n, e) {
    var i = e(497);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("3ff8868e", i, !0);
  },
  497: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        ".uc[data-v-22d74748]{position:relative;width:75px;padding:0;background:transparent;margin:0}.uc>div[data-v-22d74748]{width:66px;height:66px;position:relative;margin:0 auto 10px;background:#fff;padding:2px;border-radius:2px}.uc img[data-v-22d74748]{position:absolute;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);top:50%;left:50%;width:62px;height:62px;display:block}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/uc/qrcode.vue"
          ],
          names: [],
          mappings:
            "AACA,qBACE,kBAAmB,AACnB,WAAY,AACZ,UAAa,AACb,uBAAwB,AACxB,QAAY,CACb,AACD,yBACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,mBAAyB,AACzB,gBAAoB,AACpB,YAAa,AACb,iBAAmB,CACtB,AACD,yBACI,kBAAmB,AACnB,mCAAsC,AACtC,2CAA8C,AAC9C,QAAS,AACT,SAAU,AACV,WAAY,AACZ,YAAa,AACb,aAAe,CAClB",
          file: "qrcode.vue",
          sourcesContent: [
            "\n.uc[data-v-22d74748] {\n  position: relative;\n  width: 75px;\n  padding: 0px;\n  background: transparent;\n  margin: 0px;\n}\n.uc > div[data-v-22d74748] {\n    width: 66px;\n    height: 66px;\n    position: relative;\n    margin: 0 auto 10px auto;\n    background: #ffffff;\n    padding: 2px;\n    border-radius: 2px;\n}\n.uc img[data-v-22d74748] {\n    position: absolute;\n    transform: translate3d(-50%, -50%, 0);\n    -webkit-transform: translate3d(-50%, -50%, 0);\n    top: 50%;\n    left: 50%;\n    width: 62px;\n    height: 62px;\n    display: block;\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  498: function(t, n, e) {
    "use strict";
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = e(469),
      A = i(a),
      o = e(470),
      r = i(o);
    n.default = {
      name: "uc-qrcode",
      mixins: [r.default],
      components: { DButton: A.default },
      methods: {
        click: function(t) {
          this.downOrOpenUC();
        }
      }
    };
  },
  499: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e(
          "div",
          { staticClass: "uc" },
          [
            e("div", { staticClass: "imgwrap" }, [
              e("img", {
                directives: [
                  {
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.bigQrcode,
                    expression: "bigQrcode"
                  }
                ]
              })
            ]),
            t._v(" "),
            t.config.button
              ? e("d-button", {
                  attrs: {
                    type: t.config.button.type,
                    text: t.config.button.text
                  },
                  on: { click: t.proxy }
                })
              : t._e()
          ],
          1
        );
      },
      staticRenderFns: []
    };
  },
  500: function(t, n, e) {
    var i = e(49)(e(501), e(502), null, null, null);
    t.exports = i.exports;
  },
  501: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var i = e(470),
      a = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(i);
    n.default = {
      name: "uc-at-once",
      mixins: [a.default],
      created: function() {
        !this.uc.isUC && this.downOrOpenUC();
      }
    };
  },
  502: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement;
        return (t._self._c || n)("div", { staticClass: "uc" });
      },
      staticRenderFns: []
    };
  },
  503: function(t, n, e) {
    function i(t) {
      e(504);
    }
    var a = e(49)(e(506), e(508), i, "data-v-3e3103e6", null);
    t.exports = a.exports;
  },
  504: function(t, n, e) {
    var i = e(505);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("332fd50c", i, !0);
  },
  505: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        ".uc[data-v-3e3103e6]{display:block;height:69px;background:rgba(0,0,0,.16);width:100%;padding:7px 30px;position:relative}.uc.noapp[data-v-3e3103e6]{padding:7px 5px 7px 30px}.uc .imgWrap[data-v-3e3103e6]{background:#fff;padding:2px}.button[data-v-3e3103e6]{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;height:56px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.button>div[data-v-3e3103e6]:first-child{background:#fff;padding:2px;width:56px;height:100%;position:relative;border-radius:2px}.button>div:first-child img[data-v-3e3103e6]{position:absolute;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);top:50%;left:50%;width:50px;height:50px}.button>div[data-v-3e3103e6]:nth-child(2){-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:left;padding-left:15px}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/uc/banner.vue"
          ],
          names: [],
          mappings:
            "AACA,qBACE,cAAe,AACf,YAAa,AACb,2BAAgC,AAChC,WAAY,AACZ,iBAAkB,AAClB,iBAAmB,CACpB,AACD,2BACI,wBAA0B,CAC7B,AACD,8BACE,gBAAoB,AACpB,WAAa,CACd,AACD,yBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,WAAY,AACZ,YAAa,AACb,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,yCACI,gBAAoB,AACpB,YAAa,AACb,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAmB,CACtB,AACD,6CACM,kBAAmB,AACnB,mCAAsC,AACtC,2CAA8C,AAC9C,QAAS,AACT,SAAU,AACV,WAAY,AACZ,WAAa,CAClB,AACD,0CACI,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,gBAAiB,AACjB,iBAAmB,CACtB",
          file: "banner.vue",
          sourcesContent: [
            "\n.uc[data-v-3e3103e6] {\n  display: block;\n  height: 69px;\n  background: rgba(0, 0, 0, 0.16);\n  width: 100%;\n  padding: 7px 30px;\n  position: relative;\n}\n.uc.noapp[data-v-3e3103e6] {\n    padding: 7px 5px 7px 30px;\n}\n.uc .imgWrap[data-v-3e3103e6] {\n  background: #ffffff;\n  padding: 2px;\n}\n.button[data-v-3e3103e6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 56px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.button > div[data-v-3e3103e6]:nth-child(1) {\n    background: #ffffff;\n    padding: 2px;\n    width: 56px;\n    height: 100%;\n    position: relative;\n    border-radius: 2px;\n}\n.button > div:nth-child(1) img[data-v-3e3103e6] {\n      position: absolute;\n      transform: translate3d(-50%, -50%, 0);\n      -webkit-transform: translate3d(-50%, -50%, 0);\n      top: 50%;\n      left: 50%;\n      width: 50px;\n      height: 50px;\n}\n.button > div[data-v-3e3103e6]:nth-child(2) {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: left;\n    padding-left: 15px;\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  506: function(t, n, e) {
    "use strict";
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = e(469),
      A = i(a),
      o = e(470),
      r = i(o),
      s = e(174),
      d = e(507);
    n.default = {
      name: "uc-banner",
      mixins: [r.default],
      data: function() {
        return { status: 1 };
      },
      computed: {
        btnTxt: function() {
          switch (this.status) {
            case 1:
              return this.config.button.text;
            case 2:
              return "进入直播";
            case 3:
              return "未安装答题应用";
          }
        },
        btnType: function() {
          switch (this.status) {
            case 1:
            case 2:
              return this.config.button.type;
            case 3:
              return 7;
          }
        }
      },
      watch: {
        status: function(t, n) {
          var e = this;
          2 == t &&
            (0, d.update)()
              .then(function() {
                return (0, d.get)();
              })
              .then(function(t) {
                t || (e.status = 3);
              });
        }
      },
      components: { DButton: A.default },
      methods: {
        click: function(t) {
          var n = this;
          this.uc.isSupportFloat && this.floatUrl
            ? 1 == this.status
              ? (this.openAnswerHelper(),
                (0, s.getStatus)().then(function(t) {
                  t.isOpen && (n.status = 2);
                }))
              : 2 == this.status && (0, d.start)()
            : this.downOrOpenUC();
        }
      },
      mounted: function() {
        var t = this;
        this.uc.isSupportFloat &&
          this.floatUrl &&
          ((0, s.getStatus)().then(function(n) {
            n.isOpen && (t.status = 2);
          }),
          (0, s.onChanged)(function(n) {
            t.status = n.isOpen ? 2 : 1;
          }));
      }
    };
  },
  507: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.start = n.update = n.get = void 0);
    var i = e(174),
      a = [
        {
          pkg: "com.ss.android.article.video",
          name: "西瓜视频",
          installed: !1,
          order: 1
        },
        {
          pkg: "com.ss.android.ugc.aweme",
          name: "抖音短视频",
          installed: !1,
          order: 2
        },
        {
          pkg: "com.ss.android.ugc.live",
          name: "火山小视频",
          installed: !1,
          order: 3
        },
        {
          pkg: "com.ss.android.article.news",
          name: "今日头条",
          installed: !1,
          order: 4
        }
      ],
      A = (n.get = function() {
        return a
          .filter(function(t) {
            return !!t.installed;
          })
          .sort(function(t, n) {
            return t.order - n.order;
          })
          .shift();
      });
    (n.update = function() {
      var t = a.map(function(t) {
        return t.pkg;
      });
      return (0, i.queryApp)(t).then(function(t) {
        a.forEach(function(n) {
          var e = n.pkg,
            i = t[e];
          i && i.appName && (n.installed = !0);
        });
      });
    }),
      (n.start = function() {
        var t = A(),
          n = t.pkg;
        return (0, i.startApp)(n);
      });
  },
  508: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e(
          "div",
          { staticClass: "uc", class: { noapp: 7 == t.btnType } },
          [
            e(
              "a",
              {
                staticClass: "button",
                attrs: { href: "javascript:;" },
                on: { click: t.proxy }
              },
              [
                e("div", { staticClass: "imgwrap" }, [
                  e("img", { attrs: { src: t.smallQrcode } })
                ]),
                t._v(" "),
                e("div", [
                  t.title
                    ? e("p", { domProps: { textContent: t._s(t.title) } })
                    : t._e(),
                  t._v(" "),
                  t.subTitle
                    ? e("p", { domProps: { textContent: t._s(t.subTitle) } })
                    : t._e()
                ]),
                t._v(" "),
                t.config.button
                  ? e(
                      "div",
                      [
                        e("d-button", {
                          attrs: { type: t.btnType, text: t.btnTxt }
                        })
                      ],
                      1
                    )
                  : t._e()
              ]
            )
          ]
        );
      },
      staticRenderFns: []
    };
  },
  509: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", [e(t.uc, { tag: "component" })], 1);
      },
      staticRenderFns: []
    };
  },
  534: function(t, n, e) {
    var i = e(535);
    "string" == typeof i && (i = [[t.i, i, ""]]),
      i.locals && (t.exports = i.locals);
    e(462)("f36c4806", i, !0);
  },
  535: function(t, n, e) {
    (n = t.exports = e(461)(!0)),
      n.push([
        t.i,
        "p[data-v-7cfa3ad2]{word-break:break-all}.b-wrap[data-v-7cfa3ad2]{margin-top:14px}.b-wrap>div[data-v-7cfa3ad2]{display:inline-block;min-width:68px}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/component/review/index.vue"
          ],
          names: [],
          mappings:
            "AACA,mBACE,oBAAsB,CACvB,AACD,yBACE,eAAiB,CAClB,AACD,6BACI,qBAAsB,AACtB,cAAgB,CACnB",
          file: "index.vue",
          sourcesContent: [
            "\np[data-v-7cfa3ad2] {\n  word-break: break-all;\n}\n.b-wrap[data-v-7cfa3ad2] {\n  margin-top: 14px;\n}\n.b-wrap > div[data-v-7cfa3ad2] {\n    display: inline-block;\n    min-width: 68px;\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  536: function(t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var i = e(469),
      a = (function(t) {
        return t && t.__esModule ? t : { default: t };
      })(i);
    n.default = {
      name: "d-review",
      props: { answer: [String], question: [String] },
      components: { DButton: a.default }
    };
  },
  537: function(t, n) {
    t.exports = {
      render: function() {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", [
          e("p", { domProps: { textContent: t._s(t.question) } }),
          t._v(" "),
          e("div", { staticClass: "b-wrap" }, [
            e(
              "div",
              [e("d-button", { attrs: { text: t.answer, type: "4" } })],
              1
            )
          ])
        ]);
      },
      staticRenderFns: []
    };
  }
});
//# sourceMappingURL=chunk.0.60.js.map
