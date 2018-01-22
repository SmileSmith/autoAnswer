webpackJsonp([6],{

    /***/ 164:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _typeof2 = __webpack_require__(382);
    
    var _typeof3 = _interopRequireDefault(_typeof2);
    
    var _getPrototypeOf = __webpack_require__(170);
    
    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var encodeURL = window.encodeURIComponent,
        decodeURL = window.decodeURIComponent,
        class2type = {},
        toString = class2type.toString;
    
    'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (v, i) {
        class2type['[object ' + v + ']'] = v.toLowerCase();
    });
    
    var ucInvoke = function () {
        var notUC = 0;
        return function (apiName, options, success, fail) {
            var emptyFunc = function emptyFunc() {},
                param = this.extend(options || {}, {
                success: success || emptyFunc,
                fail: fail || emptyFunc
            });
    
            if (!notUC) {
                try {
                    window.ucapi.invoke(apiName, param);
                } catch (e) {
                    notUC = 1;
                }
            }
    
            notUC && param.fail({
                result: 'SM_NO_UCAPI'
            });
        };
    }();
    
    var tempParent = document.createElement('div');
    
    var type = function type(obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
    };
    var isFunction = function isFunction(obj) {
        return type(obj) == 'function';
    };
    var isWindow = function isWindow(obj) {
        return obj != null && obj == obj.window;
    };
    
    var isPlainObject = function isPlainObject(obj) {
        return type(obj) == 'object' && !isWindow(obj) && (0, _getPrototypeOf2.default)(obj) == Object.prototype;
    };
    
    var isDocument = function isDocument(obj) {
        return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
    };
    
    var isString = function isString(obj) {
        return type(obj) == 'string';
    };
    var isUndefined = function isUndefined(obj) {
        return type(obj) == 'undefined';
    };
    
    function matches(element, selector) {
        if (!element || element.nodeType !== 1) {
            return false;
        }
        var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
        if (matchesSelector) {
            return matchesSelector.call(element, selector);
        }
    
        var match,
            parent = element.parentNode,
            temp = !parent;
        if (temp) (parent = tempParent).appendChild(element);
        match = ~qsa(parent, selector).indexOf(element);
        temp && tempParent.removeChild(element);
        return match;
    }
    
    function qsa(element, selector) {
        var found,
            maybeID = selector[0] == '#',
            maybeClass = !maybeID && selector[0] == '.',
            nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
            isSimple = simpleSelectorRE.test(nameOnly);
        return isDocument(element) && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
    }
    
    exports.default = {
        setCookie: function setCookie(key, value, expires, domain) {
            var cookie = key + '=' + encodeURL(value);
    
            if (domain) {
                cookie += ';domain=' + domain;
            }
    
            if (expires) {
                cookie += ';path=/;expires=' + expires.toGMTString() + ';';
            }
    
            document.cookie = cookie;
        },
    
        getCookie: function getCookie(key) {
            var reg = new RegExp('(^| )' + key + '=([^;]*)(;|\x24)'),
                result = reg.exec(document.cookie);
    
            if (result) {
                return decodeURL(result[2]) || null;
            }
    
            return null;
        },
        extend: function extend(target) {
            var sources = [].slice.call(arguments, 1),
                ret = target;
    
            sources.forEach(function (source) {
                for (var key in source) {
                    ret[key] = source[key];
                }
            });
    
            return ret;
        },
        isEmptyObject: function isEmptyObject(obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        },
        serialize: function serialize(params, obj, traditional, scope) {
            var type = void 0,
                isArray = Array.isArray(obj),
                hash = this.isPlainObject(obj);
    
            for (var key in obj) {
                var value = obj[key];
    
                type = this.type(value);
    
                if (scope) {
                    key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
                }
    
                if (!scope && isArray) {
                    params.add(value.name, value.value);
                } else if (type == 'array' || !traditional && type == 'object') {
                    this.serialize(params, value, traditional, key);
                } else {
                    params.add(key, value);
                }
            }
        },
        type: type,
        isFunction: isFunction,
        isWindow: isWindow,
        isPlainObject: isPlainObject,
        isString: isString,
        isDocument: isDocument,
        isUndefined: isUndefined,
        param: function param(obj, traditional) {
            var params = [];
            params.add = function (k, v) {
                this.push(escape(k) + '=' + escape(v));
            };
            this.serialize(params, obj, traditional);
            return params.join('&').replace(/%20/g, '+');
        },
        ucInvoke: ucInvoke,
        parents: function parents(el, selector) {
            var ancestors = [],
                nodes = [el];
            var self = this;
    
            function filtered(nodes, selector) {
                if (selector == null) {
                    return nodes;
                } else {
                    return nodes.filter(function (node) {
                        return matches(node, selector);
                    });
                }
            }
    
            while (nodes.length > 0) {
                var _nodes = [];
    
                for (var i = 0, len = nodes.length; i < len; i++) {
                    var node = nodes[i];
    
                    if (node && (node = node.parentNode) && !self.isDocument(node) && ancestors.indexOf(node) < 0) {
                        ancestors.push(node);
                        _nodes.push(node);
                    }
                }
    
                nodes = _nodes;
            }
    
            return filtered(ancestors, selector);
        },
        unescape: function unescape(str) {
            var decodeArray = [];
    
            if (typeof str !== 'string') {
                return str;
            }
    
            for (var i = 0, len = str.length; i < len; i++) {
                decodeArray.push(str[i].charCodeAt() ^ 1);
            }
    
            return String.fromCharCode.apply(0, decodeArray);
        },
        deserialize: function deserialize(value) {
            var num;
            try {
                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) && num + '' === value ? num : /^[\[\{]/.test(value) ? JSON.parse(value) : value) : value;
            } catch (e) {
                return value;
            }
        },
        on: function () {
            if (document.addEventListener) {
                return function (element, event, handler) {
                    if (element && event && handler) {
                        element.addEventListener(event, handler, false);
                    }
                };
            } else {
                return function (element, event, handler) {
                    if (element && event && handler) {
                        element.attachEvent('on' + event, handler);
                    }
                };
            }
        }(),
        off: function () {
            if (document.addEventListener) {
                return function (element, event, handler) {
                    if (element && event && handler) {
                        element.removeEventListener(event, handler, false);
                    }
                };
            } else {
                return function (element, event, handler) {
                    if (element && event && handler) {
                        element.detachEvent('on' + event, handler);
                    }
                };
            }
        }(),
        once: function once(element, event, fn) {
            var self = this,
                listener = function listener() {
                if (fn) {
                    fn.apply(this, arguments);
                }
                self.off(element, event, listener);
            };
            this.on(element, event, listener);
        },
        hasClass: function hasClass(el, cls) {
            if (!el || !cls) {
                return false;
            }
            if (cls.indexOf(' ') !== -1) {
                throw new Error('className should not contain space.');
            }
            if (el.classList) {
                return el.classList.contains(cls);
            } else {
                return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
            }
        },
        addClass: function addClass(el, cls) {
            if (!el) return;
            var curClass = el.className;
            var classes = (cls || '').split(' ');
    
            for (var i = 0, j = classes.length; i < j; i++) {
                var clsName = classes[i];
                if (!clsName) continue;
    
                if (el.classList) {
                    el.classList.add(clsName);
                } else {
                    if (!this.hasClass(el, clsName)) {
                        curClass += ' ' + clsName;
                    }
                }
            }
            if (!el.classList) {
                el.className = curClass;
            }
        },
        removeClass: function removeClass(el, cls) {
            if (!el || !cls) return;
            var classes = cls.split(' ');
            var curClass = ' ' + el.className + ' ';
    
            for (var i = 0, j = classes.length; i < j; i++) {
                var clsName = classes[i];
                if (!clsName) continue;
    
                if (el.classList) {
                    el.classList.remove(clsName);
                } else {
                    if (this.hasClass(el, clsName)) {
                        curClass = curClass.replace(' ' + clsName + ' ', ' ');
                    }
                }
            }
            if (!el.classList) {
                el.className = this.trim(curClass);
            }
        },
        trim: function trim(string) {
            return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
        },
        getCommonParamByKey: function getCommonParamByKey(path) {
            var CommonParams = sm.COMMON_PARAMS;
    
            (path || '').split('.').forEach(function (key) {
                if (key && typeof CommonParams !== 'undefined') {
                    CommonParams = CommonParams[key];
                }
            });
            return CommonParams;
        },
        getSearchUrl: function getSearchUrl(query) {
            var url = this.getCommonParamByKey('Search');
    
            return url.replace(/q=\&/, 'q=' + query + '&');
        },
    
        queryString: function () {
            function SearchMaker(strSearch) {
                this.search = strSearch || '';
            };
    
            SearchMaker.prototype = {
                toString: function toString() {
                    return this.search;
                },
                get: function get(key) {
                    var me = this;
    
                    return (me.search.match(me.makeReg(encodeURL(key))) || ['', '', null])[2] || '';
                },
    
                set: function set(key, value, del) {
                    var k = encodeURL(key),
                        v = value ? encodeURL(value) : '',
                        me = this,
                        search = me.search,
                        reg = me.makeReg(k);
    
                    if (reg.test(search)) {
                        if (del) {
                            me.search = search.replace(reg, '$1').replace(/&($|#.*)/, '$1');
                        } else {
                            me.search = search.replace(reg, '$1' + k + '=' + v + '$3');
                        }
                    } else {
                        if (!del) {
                            me.add(k, v);
                        }
                    }
                },
    
                add: function add(key, value) {
                    var me = this;
    
                    if (me.search) {
                        me.search = me.search.replace(/([^#]+)(#.*)?/, '$1&' + key + '=' + value + '$2');
                    } else {
                        me.search = '?' + key + '=' + value;
                    }
                },
                makeReg: function makeReg(key) {
                    return new RegExp('(\\?|&)' + key + '(?:&|$|=(.*?)(&|#|$))');
                }
            };
    
            return function (strSearch) {
                var objSearch = new SearchMaker(strSearch || window.location.search);
    
                var objExport = {
                    get: function get(key) {
                        return decodeURIComponent(objSearch.get(key).toString());
                    },
                    set: function set(key, value) {
                        objSearch.set(key, value);
    
                        return objExport;
                    },
                    del: function del(key) {
                        objSearch.set(key, '', 1);
    
                        return objExport;
                    },
                    toString: function toString() {
                        return objSearch.toString();
                    }
                };
    
                return objExport;
            };
        }(),
        dataAdapter: function dataAdapter(data, mapping, each) {
            if (this.isEmptyObject(data)) {
                return data;
            }
    
            if (!Array.isArray(data)) {
                throw new Error('must be array');
            }
    
            if (!(this.isPlainObject(mapping) && !this.isEmptyObject(mapping))) {
                return data;
            }
    
            each = this.isFunction(each) ? each : function (key, item) {
                return item[key];
            };
    
            var ret = [],
                value = void 0;
    
            data.forEach(function (item, index) {
                var retItem = {};
    
                for (var key in item) {
                    if (key in mapping) {
                        value = each(key, index, item);
    
                        if (typeof value == 'undefined') {
                            retItem[mapping[key]] = item[key];
                        } else {
                            retItem[mapping[key]] = value;
                        }
                    } else {
                        retItem[key] = item[key];
                    }
                }
                ret.push(retItem);
            });
            return ret;
        },
        throttle: function throttle(method, before, delay) {
            var timer = null;
            var self = this;
            return function () {
                var context = this,
                    args = arguments;
    
                if (self.isFunction(before)) {
                    var ret = before.call(context);
                    if (!ret) {
                        return;
                    }
                }
                clearTimeout(timer);
    
                timer = setTimeout(function () {
                    self.isFunction(method) && method.apply(context, args);
                }, delay || 0);
            };
        },
        des: function des(str) {
            var decodeArray = [];
    
            if (typeof str !== 'string') {
                return str;
            }
    
            for (var i = 0, len = str.length; i < len; i++) {
                decodeArray.push(str[i].charCodeAt() ^ 1);
            }
    
            return String.fromCharCode.apply(0, decodeArray);
        },
        supportOrientation: function supportOrientation() {
            return typeof window.orientation === 'number' && (0, _typeof3.default)(window.onorientationchange) === 'object';
        },
        sleep: function (_sleep) {
            function sleep(_x, _x2, _x3, _x4) {
                return _sleep.apply(this, arguments);
            }
    
            sleep.toString = function () {
                return _sleep.toString();
            };
    
            return sleep;
        }(function (delay, start, now, cb) {
            if (Math.abs(now - start) >= delay) {
                this.isFunction(cb) && cb();
            } else {
                sleep(delay, start, Date.now() / 1000, cb);
            }
        })
    };
    
    /***/ }),
    
    /***/ 171:
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(172);
    module.exports = __webpack_require__(374);
    
    
    /***/ }),
    
    /***/ 374:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    var _vue = __webpack_require__(69);
    
    var _vue2 = _interopRequireDefault(_vue);
    
    var _App = __webpack_require__(378);
    
    var _App2 = _interopRequireDefault(_App);
    
    var _router = __webpack_require__(407);
    
    var _router2 = _interopRequireDefault(_router);
    
    var _progressBar = __webpack_require__(427);
    
    var _progressBar2 = _interopRequireDefault(_progressBar);
    
    var _store = __webpack_require__(431);
    
    var _store2 = _interopRequireDefault(_store);
    
    var _vueLazyload = __webpack_require__(435);
    
    var _vueLazyload2 = _interopRequireDefault(_vueLazyload);
    
    var _App3 = __webpack_require__(436);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    _vue2.default.config.productionTip = false;
    
    var loading = _vue2.default.prototype.$loading = new _vue2.default(_progressBar2.default).$mount();
    
    _vue2.default.use(_vueLazyload2.default, {
        listenEvents: ['scroll', 'transitionend'],
        lazyComponent: true,
        error: '//sm01.alicdn.com/L1/272/6837/static/novel/image/error.png'
    });
    var app = new _vue2.default({
        router: _router2.default,
        store: _store2.default,
        template: '<App/>',
        components: {
            App: _App2.default
        }
    });
    document.body.appendChild(loading.$el);
    (0, _App3.App)(app, _router2.default, _store2.default, loading);
    
    /***/ }),
    
    /***/ 378:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(379)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(381),
      /* template */
      __webpack_require__(406),
      /* styles */
      injectStyle,
      /* scopeId */
      null,
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 379:
    /***/ (function(module, exports) {
    
    // removed by extract-text-webpack-plugin
    
    /***/ }),
    
    /***/ 381:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _util = __webpack_require__(164);
    
    var _util2 = _interopRequireDefault(_util);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
        name: 'app',
        computed: {
            bgColor: function bgColor() {
                return _util2.default.getCommonParamByKey("bgColor");
            },
            bg: function bg() {
                return '//sm01.alicdn.com/L1/272/6837/static/wap/img/dream/bg.png';
            },
            appCSS: function appCSS() {
                var css = this.$store.state.AppCSS || {};
    
                css.background = this.bgColor + ' url(\'' + this.bg + '\') no-repeat right top';
                css.backgroundSize = 'contain';
    
                return css;
            }
        }
    };
    
    /***/ }),
    
    /***/ 406:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        style: (_vm.appCSS),
        attrs: {
          "id": "app"
        }
      }, [_c('transition', {
        attrs: {
          "name": "fade",
          "mode": "out-in"
        }
      }, [_c('router-view')], 1)], 1)
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 407:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _vue = __webpack_require__(69);
    
    var _vue2 = _interopRequireDefault(_vue);
    
    var _vueRouter = __webpack_require__(408);
    
    var _vueRouter2 = _interopRequireDefault(_vueRouter);
    
    var _index = __webpack_require__(409);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _match = __webpack_require__(424);
    
    var _match2 = _interopRequireDefault(_match);
    
    var _review = __webpack_require__(425);
    
    var _review2 = _interopRequireDefault(_review);
    
    var _error = __webpack_require__(426);
    
    var _error2 = _interopRequireDefault(_error);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    _vue2.default.use(_vueRouter2.default);
    var routes = [_index2.default, _match2.default, _review2.default, _error2.default, {
        path: '*',
        redirect: {
            name: 'Index'
        }
    }];
    
    var router = new _vueRouter2.default({
        routes: routes
    });
    
    exports.default = router;
    
    /***/ }),
    
    /***/ 409:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        path: '/index',
        name: 'Index',
        meta: {
            height: "auto"
        },
        component: function component(resolve) {
            Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(2)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(439)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    };
    
    /***/ }),
    
    /***/ 424:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        path: '/match/:activity',
        name: 'Match',
        component: function component(resolve) {
            Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(1)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(440)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        meta: {
            height: "100%"
        },
        props: true
    };
    
    /***/ }),
    
    /***/ 425:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        path: '/review/:activity/:sid',
        name: 'Review',
        component: function component(resolve) {
            Promise.all/* require */([__webpack_require__.e(0), __webpack_require__.e(4)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(441)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        },
        props: true,
        meta: {
            height: "auto"
        }
    };
    
    /***/ }),
    
    /***/ 426:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        path: '/error',
        name: 'Error',
        component: function component(resolve) {
            __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(442)]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    };
    
    /***/ }),
    
    /***/ 427:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(428)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(429),
      /* template */
      __webpack_require__(430),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-c318817c",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 428:
    /***/ (function(module, exports) {
    
    // removed by extract-text-webpack-plugin
    
    /***/ }),
    
    /***/ 429:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        data: function data() {
            return {
                percent: 0,
                show: false,
                canSuccess: true,
                duration: 3000,
                height: '2px',
                color: '#ffca2b',
                failedColor: '#ff0000'
            };
        },
    
        methods: {
            start: function start() {
                var _this = this;
    
                this.show = true;
                this.canSuccess = true;
                if (this._timer) {
                    clearInterval(this._timer);
                    this.percent = 0;
                }
                this._cut = 10000 / Math.floor(this.duration);
                this._timer = setInterval(function () {
                    _this.increase(_this._cut * Math.random());
                    if (_this.percent > 95) {
                        _this.finish();
                    }
                }, 100);
                return this;
            },
            set: function set(num) {
                this.show = true;
                this.canSuccess = true;
                this.percent = Math.floor(num);
                return this;
            },
            get: function get() {
                return Math.floor(this.percent);
            },
            increase: function increase(num) {
                this.percent = this.percent + Math.floor(num);
                return this;
            },
            decrease: function decrease(num) {
                this.percent = this.percent - Math.floor(num);
                return this;
            },
            finish: function finish() {
                this.percent = 100;
                this.hide();
                return this;
            },
            pause: function pause() {
                clearInterval(this._timer);
                return this;
            },
            hide: function hide() {
                var _this2 = this;
    
                clearInterval(this._timer);
                this._timer = null;
                setTimeout(function () {
                    _this2.show = false;
                    _this2.$nextTick(function () {
                        setTimeout(function () {
                            _this2.percent = 0;
                        }, 200);
                    });
                }, 500);
                return this;
            },
            fail: function fail() {
                this.canSuccess = false;
                return this;
            }
        }
    };
    
    /***/ }),
    
    /***/ 430:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "progress",
        style: ({
          'width': _vm.percent + '%',
          'height': _vm.height,
          'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
          'opacity': _vm.show ? 1 : 0
        })
      })
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 431:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _vue = __webpack_require__(69);
    
    var _vue2 = _interopRequireDefault(_vue);
    
    var _vuex = __webpack_require__(165);
    
    var _vuex2 = _interopRequireDefault(_vuex);
    
    var _index = __webpack_require__(432);
    
    var _index2 = _interopRequireDefault(_index);
    
    var _answer = __webpack_require__(433);
    
    var _answer2 = _interopRequireDefault(_answer);
    
    var _review = __webpack_require__(434);
    
    var _review2 = _interopRequireDefault(_review);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    _vue2.default.use(_vuex2.default);
    exports.default = new _vuex2.default.Store({
        state: {
            activityTitle: '',
            activityName: '',
            banner: '',
            bgColor: '',
            activityStartTime: '',
            API: {},
            AppCSS: {}
        },
        mutations: {
            updateAppCSS: function updateAppCSS(state, payload) {
                state.AppCSS = payload;
            }
        },
        actions: {
            updateAppCSS: function updateAppCSS(context, payload) {
                context.commit('updateAppCSS', payload);
            }
        },
        modules: {
            index: _index2.default,
            review: _review2.default,
            answer: _answer2.default
        }
    });
    
    /***/ }),
    
    /***/ 432:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        namespaced: true,
        state: {
            result: {},
            timeout: 0
        },
        mutations: {
            updateResult: function updateResult(state, payload) {
                state.result = payload;
            },
            updateTimeout: function updateTimeout(state, payload) {
                state.timeout = payload;
            }
        },
        actions: {
            updateResult: function updateResult(context, payload) {
                context.commit('updateResult', payload);
            },
            updateTimeout: function updateTimeout(context, payload) {
                context.commit('updateTimeout', payload);
            }
        }
    };
    
    /***/ }),
    
    /***/ 433:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        namespaced: true,
        state: {
            result: {}
    
        },
        mutations: {
            updateResult: function updateResult(state, payload) {
                state.result = payload;
            }
        },
        actions: {
            updateResult: function updateResult(context, payload) {
                context.commit('updateResult', payload);
            }
        }
    };
    
    /***/ }),
    
    /***/ 434:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        namespaced: true,
        state: {
            review: {}
        },
        mutations: {
            updateReview: function updateReview(state, payload) {
                state.review = payload;
            }
        },
        actions: {
            updateReview: function updateReview(context, payload) {
                context.commit('updateReview', payload);
            }
        }
    };
    
    /***/ }),
    
    /***/ 436:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _promise = __webpack_require__(166);
    
    var _promise2 = _interopRequireDefault(_promise);
    
    exports.App = App;
    
    var _vue = __webpack_require__(69);
    
    var _vue2 = _interopRequireDefault(_vue);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function App(app, router, store, loading) {
        _vue2.default.mixin({
            beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
                var initData = this.$options.initData;
    
                if (initData && typeof initData == 'function') {
                    initData({
                        store: store,
                        route: to
                    });
                }
    
                var asyncData = this.$options.asyncData;
                if (asyncData) {
                    loading.start();
                    asyncData.call(this, {
                        store: store,
                        route: to
                    }).then(function () {
                        loading.finish();
                        next();
                    }).catch(next);
                } else {
                    next();
                }
            },
            beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    
                if (to.meta.height) {
                    next(function (vm) {
                        vm.$store.dispatch('updateAppCSS', {
                            "min-height": "100%",
                            "height": to.meta.height
                        });
                    });
                } else {
                    next();
                }
            }
        });
        router.onError(function (err) {});
    
        router.beforeResolve(function (to, from, next) {
            var matched = router.getMatchedComponents(to);
            var prevMatched = router.getMatchedComponents(from);
    
            var diffed = false;
            var activated = matched.filter(function (c, i) {
                return diffed || (diffed = prevMatched[i] !== c);
            });
    
            if (!activated.length) {
                return next();
            }
            loading.start();
            _promise2.default.all(activated.map(function (c) {
                if (c.initData && typeof c.initData == 'function') {
                    c.initData({
                        store: store,
                        route: to
                    });
                }
                if (c.asyncData) {
                    return c.asyncData({
                        store: store,
                        route: to
                    });
                }
            })).then(function () {
                loading.finish();
                next();
            }).catch(function (err) {
                next(err || new Error('路由异常'));
            });
        });
    
        router.onReady(function () {
            return app.$mount('#app');
        });
    }
    
    /***/ })
    
    },[171]);
    
    
    // WEBPACK FOOTER //
    // static/js/dream.36.js