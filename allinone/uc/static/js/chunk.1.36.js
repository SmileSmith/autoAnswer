webpackJsonp([1],{

    /***/ 440:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(488)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(490),
      /* template */
      __webpack_require__(515),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-309af183",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 488:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(489);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("5991023e", content, true);
    
    /***/ }),
    
    /***/ 489:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".dream[data-v-309af183]{height:100%;min-height:480px}.review[data-v-309af183]{text-align:left}.review>p[data-v-309af183]{margin-top:30px;margin-bottom:14px}.review>p[data-v-309af183],.review ul[data-v-309af183]{text-align:left;padding:0 30px}.review ul li[data-v-309af183]{padding:20px 0;border-bottom:1px solid hsla(0,0%,100%,.1)}.review ul li[data-v-309af183]:last-child{border:none}.content[data-v-309af183]{position:relative}.card-wrap[data-v-309af183]{width:auto;padding-bottom:84.5333%;margin:20px 34px;position:relative}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/views/dream/match.vue"],"names":[],"mappings":"AACA,wBACE,YAAa,AACb,gBAAkB,CACnB,AACD,yBACE,eAAiB,CAClB,AACD,2BACI,gBAAiB,AACjB,kBAAoB,CAGvB,AACD,uDAHI,gBAAiB,AACjB,cAA2B,CAK9B,AACD,+BACM,eAAkB,AAClB,0CAAkD,CACvD,AACD,0CACQ,WAAa,CACpB,AACD,0BACE,iBAAmB,CACpB,AACD,4BACE,WAAY,AACZ,wBAAyB,AACzB,iBAAkB,AAClB,iBAAmB,CACpB","file":"match.vue","sourcesContent":["\n.dream[data-v-309af183] {\n  height: 100%;\n  min-height: 480px;\n}\n.review[data-v-309af183] {\n  text-align: left;\n}\n.review > p[data-v-309af183] {\n    margin-top: 30px;\n    margin-bottom: 14px;\n    text-align: left;\n    padding: 0px 30px 0px 30px;\n}\n.review ul[data-v-309af183] {\n    text-align: left;\n    padding: 0px 30px 0px 30px;\n}\n.review ul li[data-v-309af183] {\n      padding: 20px 0px;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.review ul li[data-v-309af183]:nth-last-child(1) {\n        border: none;\n}\n.content[data-v-309af183] {\n  position: relative;\n}\n.card-wrap[data-v-309af183] {\n  width: auto;\n  padding-bottom: 84.5333%;\n  margin: 20px 34px;\n  position: relative;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 490:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _promise = __webpack_require__(166);
    
    var _promise2 = _interopRequireDefault(_promise);
    
    var _extends2 = __webpack_require__(443);
    
    var _extends3 = _interopRequireDefault(_extends2);
    
    var _banner = __webpack_require__(447);
    
    var _banner2 = _interopRequireDefault(_banner);
    
    var _title = __webpack_require__(448);
    
    var _title2 = _interopRequireDefault(_title);
    
    var _card = __webpack_require__(491);
    
    var _card2 = _interopRequireDefault(_card);
    
    var _review = __webpack_require__(450);
    
    var _review2 = _interopRequireDefault(_review);
    
    var _mixin = __webpack_require__(446);
    
    var _mixin2 = _interopRequireDefault(_mixin);
    
    var _common = __webpack_require__(445);
    
    var _vuex = __webpack_require__(165);
    
    var _util = __webpack_require__(164);
    
    var _util2 = _interopRequireDefault(_util);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
        name: "match",
        data: function data() {
            return {
                transition: 0,
                finish: 0,
                question: [],
                isReview: 0,
                currentRound: ''
            };
        },
    
        props: ['activity'],
        mixins: [_mixin2.default],
        initData: _mixin2.default.initData,
        computed: (0, _extends3.default)({
            hasReview: function hasReview() {
                if (_util2.default.isEmptyObject(this.question)) {
                    return false;
                } else {
                    return true;
                }
            }
        }, (0, _vuex.mapState)("answer", {
            result: function result(state) {
                return state.result;
            }
        }), {
            title: function title() {
                return this.activityTitle + this.currentOrder;
            },
            correct: function correct() {
                if (this.result.correct != '') {
                    return Number(this.result.correct) + 1;
                }
                return this.result.correct;
            },
            round: function round() {
                if (this.result.round && Number(this.result.round) > Number(this.currentRound)) {
                    this.currentRound = Number(this.result.round);
                }
                return this.currentRound;
            },
            type: function type() {
                if (!this.finish && !this.transition && (this.round != 0 || this.round != '')) {
                    return 1;
                }
                if (this.finish) {
                    return 2;
                }
                if (this.transition && this.round && this.round < 12) {
                    return 3;
                }
                if (!this.result.round && !this.result.correct) {
                    return 4;
                }
            },
            status: function status() {
                if (this.finish) {
                    return 2;
                }
                if (this.result.status == 1 && this.result.round <= 12 && !this.finish) {
                    return 1;
                }
            }
        }),
        methods: (0, _extends3.default)({}, (0, _vuex.mapActions)("answer", ["updateResult"]), {
            questionText: function questionText(item) {
                return item.id + '、' + item.title;
            },
            sleep: function sleep(time) {
                var _this = this;
    
                if (this._sleep) {
                    return _promise2.default.reject();
                } else {
                    this._sleep = true;
                    return new _promise2.default(function (resolve) {
                        setTimeout(function () {
                            _this._sleep = false;
                            resolve();
                        }, time);
                    });
                }
            },
            refresh: function refresh() {
                var _this2 = this;
                setTimeout(function () {
                    if (_this2.$route.name !== "Match") {
                        return;
                    }
                    (0, _common.getCurAnswer)(_this2.activity).then(function (result) {
                        var retRound = Number(result.round);
                        if (retRound > _this2.round) {
                            _this2.transition = 0;
                        } else if (retRound < _this2.round) {
                            _this2.refresh();
                            return;
                        }
                        // hack start
                        if (_this2.pre_quesionId !== result.round) {
                            
                            var answerData = {
                                question: {
                                    text: result.title,
                                    questionId: result.round
                                },
                                result: result.correct,
                                answers: result.options
                            }
                            $.post('http://localhost:7777/reply-answer-uc', answerData, function(response) {
                                console.log('reply success ...' + JSON.stringify(answerData))
                                // process response
                            });
                            
                        }
                        _this2.pre_quesionId = result.round;
                        // hack end
                        
                        _this2.updateResult(result).then(function () {
                            if (_this2.round <= 11 && !_this2.transition) {
                                _this2.sleep(_common.REFRESH.POST).then(function () {
                                    _this2.transition = 1;
                                }).catch(function () {});
                            }
                            result.round == 12 && _this2.sleep(_common.REFRESH.POST).then(function () {
                                _this2.finish = 1;
                            }).catch(function () {});
                            if (result.sid == 0 || result.sid != _this2.sid) {
                                (0, _common.getReviewData)(_this2.activity, _this2.sid).then(function (result) {
                                    _this2.question = _this2.question.concat(result.question);
                                    _this2.$store.dispatch('updateAppCSS', {
                                        "min-height": "100%",
                                        "height": "auto"
                                    });
                                }).catch(function (err) {
                                    _this2.backHome();
                                });
                            } else {
                                _this2.refresh();
                            }
                        }).catch(function () {
                            _this2.refresh();
                        });
                    }).catch(function () {
                        _this2.refresh();
                    });
                }, _common.REFRESH.CUR);
            }
        }),
    
        asyncData: function asyncData(obj) {
            return new _promise2.default(function (resolve, reject) {
                var id = obj.route.params.activity;
                if (!id) {
                    reject();
                } else {
                    (0, _common.getCurAnswer)(id).then(function (result) {
                        return obj.store.dispatch("answer/updateResult", result).then(function () {
                            resolve();
                        }).catch(function () {
                            reject();
                        });
                    }).then(function () {}).catch(function () {
                        reject();
                    });
                }
            });
        },
        created: function created() {
            if (!this.isStart()) {
                this.backHome();
            }
        },
        mounted: function mounted() {
            this.sid = this.result.sid;
            if (this.isStart()) {
                this.refresh();
            }
        },
    
        components: {
            DBanner: _banner2.default,
            DCard: _card2.default,
            DTitle: _title2.default,
            DReview: _review2.default
        }
    };
    
    /***/ }),
    
    /***/ 491:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(492)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(494),
      /* template */
      __webpack_require__(510),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-13c7844a",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 492:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(493);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("6d271325", content, true);
    
    /***/ }),
    
    /***/ 493:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".card[data-v-13c7844a]{width:100%;height:100%;background:#fff;border-radius:32px;margin:0 auto;position:absolute;top:0;left:0;padding-top:40px;box-shadow:0 20px 20px rgba(25,0,87,.3)}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/card/index.vue"],"names":[],"mappings":"AACA,uBACE,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,mBAAoB,AACpB,cAAe,AACf,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,iBAAkB,AAClB,uCAA6C,CAC9C","file":"index.vue","sourcesContent":["\n.card[data-v-13c7844a] {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-radius: 32px;\n  margin: 0 auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-top: 40px;\n  box-shadow: rgba(25, 0, 87, 0.3) 0 20px 20px;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 494:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _order = __webpack_require__(495);
    
    var _order2 = _interopRequireDefault(_order);
    
    var _answer = __webpack_require__(500);
    
    var _answer2 = _interopRequireDefault(_answer);
    
    var _tip = __webpack_require__(505);
    
    var _tip2 = _interopRequireDefault(_tip);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function getRandomIndex(rank) {
        rank = rank || 3;
        return Math.floor(Math.random() * rank);
    }
    
    var TYPE = {
        QUESTION: 1
    };
    var components = {
        DOrder: _order2.default,
        DAnswer: _answer2.default,
        DTip: _tip2.default
    };
    exports.default = {
        name: 'd-card',
    
        props: {
            klass: String,
            type: [Number, String],
            round: [Number, String],
            answer: [String, Number]
        },
        computed: {
            nextQTitle: function nextQTitle() {
                var r = getRandomIndex();
    
                var t = ["下一题计算中，请稍候...", "努力思考中，耐心等待...", "答案解锁中，请稍候..."];
    
                return t[r];
            },
            startQTitle: function startQTitle() {
                var r = getRandomIndex();
    
                var t = ["答题马上开始, 请注意...", "答题马上开始, 正在蓄力...", "答题马上开始, 调整姿势..."];
                return t[r];
            }
        },
    
        data: function data() {
            return {
                TYPE: {
                    QUESTION: 1,
                    FINISH: 2,
                    THINK: 3
                }
            };
        },
    
        components: components
    
    };
    
    /***/ }),
    
    /***/ 495:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(496)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(498),
      /* template */
      __webpack_require__(499),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-2c9244c6",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 496:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(497);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("2e185227", content, true);
    
    /***/ }),
    
    /***/ 497:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".order[data-v-2c9244c6]{display:flex;align-items:center;color:#000}.order i[data-v-2c9244c6]{flex:1;display:block;height:1px;background:rgba(0,0,0,.1);margin:10px 10px 0}.order span[data-v-2c9244c6]{font-size:12px;height:28px;line-height:28px}.order span strong[data-v-2c9244c6]{font-size:28px;font-weight:700;padding:0 4px}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/card/order.vue"],"names":[],"mappings":"AACA,wBACE,aAAc,AACd,mBAAoB,AACpB,UAAe,CAChB,AACD,0BACI,OAAQ,AACR,cAAe,AACf,WAAY,AACZ,0BAA+B,AAC/B,kBAAsB,CACzB,AACD,6BACI,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACrB,AACD,oCACM,eAAgB,AAChB,gBAAkB,AAClB,aAAiB,CACtB","file":"order.vue","sourcesContent":["\n.order[data-v-2c9244c6] {\n  display: flex;\n  align-items: center;\n  color: #000000;\n}\n.order i[data-v-2c9244c6] {\n    flex: 1;\n    display: block;\n    height: 1px;\n    background: rgba(0, 0, 0, 0.1);\n    margin: 10px 10px 0px;\n}\n.order span[data-v-2c9244c6] {\n    font-size: 12px;\n    height: 28px;\n    line-height: 28px;\n}\n.order span strong[data-v-2c9244c6] {\n      font-size: 28px;\n      font-weight: bold;\n      padding: 0px 4px;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 498:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: 'd-order',
        props: {
            num: [String, Number]
        }
    };
    
    /***/ }),
    
    /***/ 499:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('p', {
        staticClass: "order"
      }, [_c('i'), _vm._v(" "), _c('span', [_vm._v("\n        第\n        "), _c('strong', {
        domProps: {
          "textContent": _vm._s(_vm.num)
        }
      }), _vm._v("题\n    ")]), _vm._v(" "), _c('i')])
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 500:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(501)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(503),
      /* template */
      __webpack_require__(504),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-7470bd76",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 501:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(502);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("0781c167", content, true);
    
    /***/ }),
    
    /***/ 502:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".wrap[data-v-7470bd76]{position:absolute;left:50%;top:55%;width:100%;transform:translate3d(-50%,-40%,0);-webkit-transform:translate3d(-50%,-40%,0)}.answer[data-v-7470bd76]{color:#00d2cf;font-weight:700;position:relative}.answer span[data-v-7470bd76]{font-size:120px;vertical-align:0}.answer span[data-v-7470bd76]:nth-of-type(2){font-size:150px;vertical-align:-13px}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/card/answer.vue"],"names":[],"mappings":"AACA,uBACE,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,WAAY,AACZ,mCAAsC,AACtC,0CAA8C,CAC/C,AACD,yBACE,cAAe,AACf,gBAAkB,AAClB,iBAAmB,CACpB,AACD,8BACI,gBAAiB,AACjB,gBAAoB,CACvB,AACD,6CACM,gBAAiB,AACjB,oBAAsB,CAC3B","file":"answer.vue","sourcesContent":["\n.wrap[data-v-7470bd76] {\n  position: absolute;\n  left: 50%;\n  top: 55%;\n  width: 100%;\n  transform: translate3d(-50%, -40%, 0);\n  -webkit-transform: translate3d(-50%, -40%, 0);\n}\n.answer[data-v-7470bd76] {\n  color: #00D2CF;\n  font-weight: bold;\n  position: relative;\n}\n.answer span[data-v-7470bd76] {\n    font-size: 120px;\n    vertical-align: 0px;\n}\n.answer span[data-v-7470bd76]:nth-of-type(2) {\n      font-size: 150px;\n      vertical-align: -13px;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 503:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: 'd-answer',
        props: {
            answer: [String, Number]
        }
    };
    
    /***/ }),
    
    /***/ 504:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "wrap"
      }, [_c('p', {
        staticClass: "answer"
      }, [_c('span', [_vm._v("选")]), _vm._v(" "), _c('span', {
        domProps: {
          "textContent": _vm._s(_vm.answer)
        }
      })])])
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 505:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(506)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(508),
      /* template */
      __webpack_require__(509),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-eaabf0da",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 506:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(507);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("9fdcc8fe", content, true);
    
    /***/ }),
    
    /***/ 507:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".tip-wrap[data-v-eaabf0da]{position:absolute;top:50%;left:50%;width:100%;transform:translate3d(-50%,-50%,0)}.tip-wrap .loading[data-v-eaabf0da]{width:60px;height:60px;margin:0 auto;position:relative}.tip-wrap .loading span[data-v-eaabf0da]{display:block;position:absolute;left:50%;top:50%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);border-radius:100%;width:12px;height:12px}.tip-wrap .loading span[data-v-eaabf0da]:first-child{background:#00dab8}.tip-wrap .loading span[data-v-eaabf0da]:nth-child(2){animation:anim-data-v-eaabf0da 2s infinite}.tip-wrap .loading span[data-v-eaabf0da]:nth-child(3){animation:anim-data-v-eaabf0da 2s .5s infinite}.tip-wrap .tip p[data-v-eaabf0da]{font-size:12px;color:rgba(0,0,0,.6);margin-top:5px}.tip-wrap .tip h2[data-v-eaabf0da]{font-size:20px;color:#000}@keyframes anim-data-v-eaabf0da{0%{background:rgba(0,219,184,.2)}to{background:rgba(0,219,184,0);width:100%;height:100%}}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/card/tip.vue"],"names":[],"mappings":"AACA,2BACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,WAAY,AACZ,kCAAsC,CACvC,AACD,oCACI,WAAY,AACZ,YAAa,AACb,cAAe,AACf,iBAAmB,CACtB,AACD,yCACM,cAAe,AACf,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,mCAAsC,AACtC,2CAA8C,AAC9C,mBAAoB,AACpB,WAAY,AACZ,WAAa,CAClB,AACD,qDACQ,kBAAoB,CAC3B,AACD,sDACQ,0CAA4C,CACnD,AACD,sDACQ,8CAAiD,CACxD,AACD,kCACI,eAAgB,AAChB,qBAA0B,AAC1B,cAAgB,CACnB,AACD,mCACI,eAAgB,AAChB,UAAe,CAClB,AACD,gCACA,GACI,6BAAmC,CACtC,AACD,GACI,6BAAiC,AACjC,WAAY,AACZ,WAAa,CAChB,CACA","file":"tip.vue","sourcesContent":["\n.tip-wrap[data-v-eaabf0da] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.tip-wrap .loading[data-v-eaabf0da] {\n    width: 60px;\n    height: 60px;\n    margin: 0 auto;\n    position: relative;\n}\n.tip-wrap .loading span[data-v-eaabf0da] {\n      display: block;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate3d(-50%, -50%, 0);\n      -webkit-transform: translate3d(-50%, -50%, 0);\n      border-radius: 100%;\n      width: 12px;\n      height: 12px;\n}\n.tip-wrap .loading span[data-v-eaabf0da]:nth-child(1) {\n        background: #00dab8;\n}\n.tip-wrap .loading span[data-v-eaabf0da]:nth-child(2) {\n        animation: anim-data-v-eaabf0da 2s infinite;\n}\n.tip-wrap .loading span[data-v-eaabf0da]:nth-child(3) {\n        animation: anim-data-v-eaabf0da 2s 0.5s infinite;\n}\n.tip-wrap .tip p[data-v-eaabf0da] {\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.6);\n    margin-top: 5px;\n}\n.tip-wrap .tip h2[data-v-eaabf0da] {\n    font-size: 20px;\n    color: #000000;\n}\n@keyframes anim-data-v-eaabf0da {\nfrom {\n    background: rgba(0, 219, 184, 0.2);\n}\nto {\n    background: rgba(0, 219, 184, 0);\n    width: 100%;\n    height: 100%;\n}\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 508:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "d-tip",
        props: {
            title: String,
            subTitle: String
        }
    };
    
    /***/ }),
    
    /***/ 509:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "tip-wrap"
      }, [_vm._m(0), _vm._v(" "), _c('div', {
        staticClass: "tip"
      }, [(_vm.title) ? _c('h2', {
        domProps: {
          "textContent": _vm._s(_vm.title)
        }
      }) : _vm._e(), _vm._v(" "), (_vm.subTitle) ? _c('p', {
        domProps: {
          "textContent": _vm._s(_vm.subTitle)
        }
      }) : _vm._e()])])
    },staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "loading"
      }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')])
    }]}
    
    /***/ }),
    
    /***/ 510:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "card",
        class: _vm.klass
      }, [(_vm.type == _vm.TYPE.QUESTION) ? [_c('d-order', {
        attrs: {
          "num": _vm.round
        }
      }), _vm._v(" "), (_vm.answer) ? _c('d-answer', {
        attrs: {
          "answer": _vm.answer
        }
      }) : _c('d-tip', {
        attrs: {
          "title": "太难了，答不上来了",
          "sub-title": "亲，相信你哦~"
        }
      })] : (_vm.type == _vm.TYPE.FINISH) ? [_c('d-tip', {
        attrs: {
          "title": "本场结束",
          "sub-title": "不管赚了多少，都祝你开心~"
        }
      })] : (_vm.type == _vm.TYPE.THINK) ? [_c('d-order', {
        attrs: {
          "num": _vm.round + 1
        }
      }), _vm._v(" "), _c('d-tip', {
        attrs: {
          "title": _vm.nextQTitle,
          "sub-title": "提示：给出的答案是答案编号"
        }
      })] : [_c('d-tip', {
        attrs: {
          "title": _vm.startQTitle,
          "sub-title": "提示：给出的答案是答案编号"
        }
      })]], 2)
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 515:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "dream"
      }, [_c('d-banner', {
        attrs: {
          "image": _vm.banner
        },
        on: {
          "back": _vm.backHome
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "content"
      }, [_c('d-title', {
        attrs: {
          "title": _vm.title,
          "status": _vm.status
        }
      }), _vm._v(" "), (!_vm.hasReview) ? _c('div', {
        staticClass: "card-wrap"
      }, [_c('d-card', {
        attrs: {
          "type": _vm.type,
          "round": _vm.round,
          "answer": _vm.correct
        }
      })], 1) : _vm._e(), _vm._v(" "), (_vm.hasReview) ? _c('div', {
        staticClass: "review"
      }, [_c('p', [_vm._v("\n                回顾题目\n            ")]), _vm._v(" "), (_vm.hasReview) ? _c('ul', _vm._l((_vm.question), function(item, key) {
        return _c('li', {
          key: key
        }, [_c('d-review', {
          attrs: {
            "question": _vm.questionText(item),
            "answer": item.answer
          }
        })], 1)
      })) : _vm._e()]) : _vm._e()], 1)], 1)
    },staticRenderFns: []}
    
    /***/ })
    
    });
    
    
    // WEBPACK FOOTER //
    // static/js/chunk.1.36.js