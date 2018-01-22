webpackJsonp([4], {
  466: function(t, e, n) {
    function a(t) {
      n(550);
    }
    var i = n(49)(n(552), n(553), a, "data-v-0531630a", null);
    t.exports = i.exports;
  },
  550: function(t, e, n) {
    var a = n(551);
    "string" == typeof a && (a = [[t.i, a, ""]]),
      a.locals && (t.exports = a.locals);
    n(462)("f8ce590a", a, !0);
  },
  551: function(t, e, n) {
    (e = t.exports = n(461)(!0)),
      e.push([
        t.i,
        ".wrap[data-v-0531630a]{color:#fff;padding-bottom:50px}.wrap .content[data-v-0531630a]{margin-top:41px}.wrap .content>p[data-v-0531630a]{margin-top:30px;margin-bottom:14px;text-align:left;padding:0 30px}.wrap ul[data-v-0531630a]{text-align:left;padding:0 30px}.wrap ul li[data-v-0531630a]{padding:20px 0;border-bottom:1px solid hsla(0,0%,100%,.1)}.wrap ul li[data-v-0531630a]:last-child{border:none}",
        "",
        {
          version: 3,
          sources: [
            "/Users/gml/mywork/gitlab/dream/src/views/dream/review.vue"
          ],
          names: [],
          mappings:
            "AACA,uBACE,WAAe,AACf,mBAAqB,CACtB,AACD,gCACI,eAAiB,CACpB,AACD,kCACM,gBAAiB,AACjB,mBAAoB,AACpB,gBAAiB,AACjB,cAA2B,CAChC,AACD,0BACI,gBAAiB,AACjB,cAA2B,CAC9B,AACD,6BACM,eAAkB,AAClB,0CAAkD,CACvD,AACD,wCACQ,WAAa,CACpB",
          file: "review.vue",
          sourcesContent: [
            "\n.wrap[data-v-0531630a] {\n  color: #ffffff;\n  padding-bottom: 50px;\n}\n.wrap .content[data-v-0531630a] {\n    margin-top: 41px;\n}\n.wrap .content > p[data-v-0531630a] {\n      margin-top: 30px;\n      margin-bottom: 14px;\n      text-align: left;\n      padding: 0px 30px 0px 30px;\n}\n.wrap ul[data-v-0531630a] {\n    text-align: left;\n    padding: 0px 30px 0px 30px;\n}\n.wrap ul li[data-v-0531630a] {\n      padding: 20px 0px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.wrap ul li[data-v-0531630a]:nth-last-child(1) {\n        border: none;\n}\n"
          ],
          sourceRoot: ""
        }
      ]);
  },
  552: function(t, e, n) {
    "use strict";
    function a(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(51),
      r = a(i),
      o = n(116),
      p = a(o),
      d = n(117),
      s = n(50),
      u = a(s),
      l = n(175),
      A = n(173),
      c = a(A),
      f = n(176),
      v = a(f),
      w = n(471),
      C = a(w),
      m = n(469),
      x = a(m),
      g = n(473),
      B = a(g);
    e.default = {
      name: "review",
      computed: (0, p.default)(
        {},
        (0, d.mapState)("review", {
          review: function(t) {
            return t.review;
          }
        }),
        {
          hasReview: function() {
            return (
              !u.default.isEmptyObject(this.review) &&
              !u.default.isEmptyObject(this.review.question)
            );
          },
          banner: function() {
            return u.default.getCommonParamByKey("banner");
          },
          title: function() {
            if (this.hasReview)
              return this.review.info.cnname + this.review.info.order;
          }
        }
      ),
      mixins: [c.default],
      initData: c.default.initData,
      asyncData: function(t) {
        return new r.default(function(e, n) {
          var a = t.route.params.activity,
            i = t.route.params.sid;
          i
            ? (0, l.getReviewData)(a, i)
                .then(function(a) {
                  t.store
                    .dispatch("review/updateReview", a)
                    .then(function() {
                      e();
                    })
                    .catch(function(t) {
                      n(t);
                    });
                })
                .catch(function(t) {
                  n(t);
                })
            : n();
        });
      },
      mounted: function() {
        window.scrollTo(0, 1);
      },
      components: {
        DButton: x.default,
        DTitle: C.default,
        DBanner: v.default,
        DReview: B.default
      }
    };
  },
  553: function(t, e) {
    t.exports = {
      render: function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "wrap" }, [
          n(
            "div",
            { staticClass: "content" },
            [
              t.hasReview
                ? n("d-title", { attrs: { title: t.title, status: "2" } })
                : t._e(),
              t._v(" "),
              n("p", [t._v("\n            回顾题目\n        ")]),
              t._v(" "),
              t.hasReview
                ? n(
                    "ul",
                    t._l(t.review.question, function(t, e) {
                      return n(
                        "li",
                        { key: e },
                        [
                          n("d-review", {
                            attrs: {
                              question: t.id + "、" + t.title,
                              answer: t.answer
                            }
                          })
                        ],
                        1
                      );
                    })
                  )
                : n("div", [t._v("\n            暂时无题\n        ")])
            ],
            1
          )
        ]);
      },
      staticRenderFns: []
    };
  }
});
//# sourceMappingURL=chunk.4.60.js.map
