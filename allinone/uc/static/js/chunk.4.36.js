webpackJsonp([4],{

    /***/ 441:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(516)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(518),
      /* template */
      __webpack_require__(519),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-0531630a",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 516:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(517);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("000bec93", content, true);
    
    /***/ }),
    
    /***/ 517:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".wrap[data-v-0531630a]{color:#fff;padding-bottom:50px}.wrap>p[data-v-0531630a]{margin-top:30px;margin-bottom:14px}.wrap>p[data-v-0531630a],.wrap ul[data-v-0531630a]{text-align:left;padding:0 30px}.wrap ul li[data-v-0531630a]{padding:20px 0;border-bottom:1px solid hsla(0,0%,100%,.1)}.wrap ul li[data-v-0531630a]:last-child{border:none}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/views/dream/review.vue"],"names":[],"mappings":"AACA,uBACE,WAAe,AACf,mBAAqB,CACtB,AACD,yBACI,gBAAiB,AACjB,kBAAoB,CAGvB,AACD,mDAHI,gBAAiB,AACjB,cAA2B,CAK9B,AACD,6BACM,eAAkB,AAClB,0CAAkD,CACvD,AACD,wCACQ,WAAa,CACpB","file":"review.vue","sourcesContent":["\n.wrap[data-v-0531630a] {\n  color: #ffffff;\n  padding-bottom: 50px;\n}\n.wrap > p[data-v-0531630a] {\n    margin-top: 30px;\n    margin-bottom: 14px;\n    text-align: left;\n    padding: 0px 30px 0px 30px;\n}\n.wrap ul[data-v-0531630a] {\n    text-align: left;\n    padding: 0px 30px 0px 30px;\n}\n.wrap ul li[data-v-0531630a] {\n      padding: 20px 0px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.wrap ul li[data-v-0531630a]:nth-last-child(1) {\n        border: none;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 518:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _promise = __webpack_require__(166);
    
    var _promise2 = _interopRequireDefault(_promise);
    
    var _extends2 = __webpack_require__(443);
    
    var _extends3 = _interopRequireDefault(_extends2);
    
    var _vuex = __webpack_require__(165);
    
    var _util = __webpack_require__(164);
    
    var _util2 = _interopRequireDefault(_util);
    
    var _common = __webpack_require__(445);
    
    var _mixin = __webpack_require__(446);
    
    var _mixin2 = _interopRequireDefault(_mixin);
    
    var _banner = __webpack_require__(447);
    
    var _banner2 = _interopRequireDefault(_banner);
    
    var _title = __webpack_require__(448);
    
    var _title2 = _interopRequireDefault(_title);
    
    var _button = __webpack_require__(449);
    
    var _button2 = _interopRequireDefault(_button);
    
    var _review = __webpack_require__(450);
    
    var _review2 = _interopRequireDefault(_review);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
        name: 'review',
        computed: (0, _extends3.default)({}, (0, _vuex.mapState)("review", {
            review: function review(state) {
                return state.review;
            }
        }), {
            hasReview: function hasReview() {
                if (_util2.default.isEmptyObject(this.review)) {
                    return false;
                } else if (_util2.default.isEmptyObject(this.review.question)) {
                    return false;
                } else {
                    return true;
                }
            },
            banner: function banner() {
                return _util2.default.getCommonParamByKey("banner");
            },
            title: function title() {
                if (this.hasReview) {
                    return this.review.info.cnname + this.review.info.order;
                }
            }
        }),
        mixins: [_mixin2.default],
        initData: _mixin2.default.initData,
        asyncData: function asyncData(obj) {
            return new _promise2.default(function (resolve, reject) {
                var activity = obj.route.params.activity;
                var id = obj.route.params.sid;
                if (!id) {
                    reject();
                } else {
                    (0, _common.getReviewData)(activity, id).then(function (result) {
                        obj.store.dispatch("review/updateReview", result).then(function () {
                            resolve();
                        }).catch(function (ret) {
                            reject(ret);
                        });
                    }).catch(function (ret) {
                        reject(ret);
                    });
                }
            });
        },
        mounted: function mounted() {
            window.scrollTo(0, 1);
        },
    
        components: {
            DButton: _button2.default,
            DTitle: _title2.default,
            DBanner: _banner2.default,
            DReview: _review2.default
        }
    
    };
    
    /***/ }),
    
    /***/ 519:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "wrap"
      }, [_c('d-banner', {
        attrs: {
          "image": _vm.banner
        },
        on: {
          "back": _vm.backHome
        }
      }), _vm._v(" "), (_vm.hasReview) ? _c('d-title', {
        attrs: {
          "title": _vm.title,
          "status": "2"
        }
      }) : _vm._e(), _vm._v(" "), _c('p', [_vm._v("\n        回顾题目\n    ")]), _vm._v(" "), (_vm.hasReview) ? _c('ul', _vm._l((_vm.review.question), function(item, key) {
        return _c('li', {
          key: key
        }, [_c('d-review', {
          attrs: {
            "question": item.id + '、' + item.title,
            "answer": item.answer
          }
        })], 1)
      })) : _c('div', [_vm._v("\n        暂时无题\n    ")])], 1)
    },staticRenderFns: []}
    
    /***/ })
    
    });
    
    
    // WEBPACK FOOTER //
    // static/js/chunk.4.36.js