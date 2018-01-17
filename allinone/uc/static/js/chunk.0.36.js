webpackJsonp([0],{

    /***/ 443:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    exports.__esModule = true;
    
    var _assign = __webpack_require__(457);
    
    var _assign2 = _interopRequireDefault(_assign);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = _assign2.default || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
    
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    
      return target;
    };
    
    /***/ }),
    
    /***/ 444:
    /***/ (function(module, exports) {
    
    module.exports = function escape(url) {
        // If url is already wrapped in quotes, remove them
        if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
        }
        // Should url be wrapped?
        // See https://drafts.csswg.org/css-values-3/#urls
        if (/["'() \t\n]/.test(url)) {
            return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
        }
    
        return url
    }
    
    
    /***/ }),
    
    /***/ 445:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.REFRESH = undefined;
    
    var _promise = __webpack_require__(166);
    
    var _promise2 = _interopRequireDefault(_promise);
    
    exports.getCurAnswer = getCurAnswer;
    exports.getReviewData = getReviewData;
    
    var _util = __webpack_require__(164);
    
    var _util2 = _interopRequireDefault(_util);
    
    var _ajax = __webpack_require__(463);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    function getCurAnswer(activity) {
        return new _promise2.default(function (resolve, reject) {
            var url = _util2.default.getCommonParamByKey("API.current");
            (0, _ajax.request)({
                url: url,
                type: "GET",
                dataType: "json",
                data: {
                    _t: Date.now(),
                    activity: activity
                }
            }).then(function (ret) {
                if (ret.status == 0) {
                    resolve(ret.data);
                } else {
                    reject(ret);
                }
            }).catch(function (ret) {
                reject(ret);
            });
        });
    }
    
    function getReviewData(activity, id) {
        return new _promise2.default(function (resolve, reject) {
            var url = _util2.default.getCommonParamByKey("API.review");
            (0, _ajax.request)({
                url: url,
                type: "GET",
                dataType: "jsonp",
                data: {
                    _t: Date.now(),
                    activity: activity,
                    sid: id
                }
            }).then(function (ret) {
                if (ret.status == 0) {
                    resolve(ret.data);
                } else {
                    reject(ret);
                }
            }).catch(function (ret) {
                reject(ret);
            });
        });
    }
    
    var REFRESH = exports.REFRESH = {
        HOUR: 60 * 60 * 1000 * 1.5,
        MINUTE: 60 * 1000,
        PRE: 3 * 60 * 1000,
        CUR: 500,
        POST: 10 * 1000
    };
    
    /***/ }),
    
    /***/ 446:
    /***/ (function(module, exports, __webpack_require__) {
    
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(467),
      /* template */
      null,
      /* styles */
      null,
      /* scopeId */
      null,
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 447:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(468)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(471),
      /* template */
      __webpack_require__(472),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-a4cfecb4",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 448:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(473)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(475),
      /* template */
      __webpack_require__(476),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-6dec0934",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 449:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(477)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(479),
      /* template */
      __webpack_require__(480),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-e3423ba8",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 450:
    /***/ (function(module, exports, __webpack_require__) {
    
    function injectStyle (ssrContext) {
      __webpack_require__(511)
    }
    var Component = __webpack_require__(112)(
      /* script */
      __webpack_require__(513),
      /* template */
      __webpack_require__(514),
      /* styles */
      injectStyle,
      /* scopeId */
      "data-v-7cfa3ad2",
      /* moduleIdentifier (server only) */
      null
    )
    
    module.exports = Component.exports
    
    
    /***/ }),
    
    /***/ 457:
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = { "default": __webpack_require__(458), __esModule: true };
    
    /***/ }),
    
    /***/ 458:
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(459);
    module.exports = __webpack_require__(27).Object.assign;
    
    
    /***/ }),
    
    /***/ 459:
    /***/ (function(module, exports, __webpack_require__) {
    
    // 19.1.3.1 Object.assign(target, source)
    var $export = __webpack_require__(48);
    
    $export($export.S + $export.F, 'Object', { assign: __webpack_require__(460) });
    
    
    /***/ }),
    
    /***/ 460:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    // 19.1.2.1 Object.assign(target, source, ...)
    var getKeys = __webpack_require__(168);
    var gOPS = __webpack_require__(461);
    var pIE = __webpack_require__(462);
    var toObject = __webpack_require__(113);
    var IObject = __webpack_require__(169);
    var $assign = Object.assign;
    
    // should work with symbols and should have deterministic property order (V8 bug)
    module.exports = !$assign || __webpack_require__(75)(function () {
      var A = {};
      var B = {};
      // eslint-disable-next-line no-undef
      var S = Symbol();
      var K = 'abcdefghijklmnopqrst';
      A[S] = 7;
      K.split('').forEach(function (k) { B[k] = k; });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
    }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
      } return T;
    } : $assign;
    
    
    /***/ }),
    
    /***/ 461:
    /***/ (function(module, exports) {
    
    exports.f = Object.getOwnPropertySymbols;
    
    
    /***/ }),
    
    /***/ 462:
    /***/ (function(module, exports) {
    
    exports.f = {}.propertyIsEnumerable;
    
    
    /***/ }),
    
    /***/ 463:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _promise = __webpack_require__(166);
    
    var _promise2 = _interopRequireDefault(_promise);
    
    var _create = __webpack_require__(464);
    
    var _create2 = _interopRequireDefault(_create);
    
    var _getPrototypeOf = __webpack_require__(170);
    
    var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
    
    exports.request = request;
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    var http = function () {
        var _ = {},
            name = void 0,
            jsonpID = 0,
            class2type = {},
            scriptTypeRE = /^(?:text|application)\/javascript/i,
            jsonType = 'application/json',
            htmlType = 'text/html',
            blankRE = /^\s*$/,
            empty = function empty() {};
        _.active = 0;
    
        function triggerAndReturn(context, eventName, data) {
            var event = document.createEvent('Events');
            event.initEvent(eventName, true, true);
            if (data) {
                event._args = data;
            }
            context.dispatchEvent(event);
            return !event.defaultPrevented;
        }
    
        function triggerGlobal(settings, context, eventName, data) {
            if (settings.global) return triggerAndReturn(context || document, eventName, data);
        }
    
        function ajaxStart(settings) {
            if (settings.global && _.active++ === 0) triggerGlobal(settings, null, 'ajaxStart');
        }
    
        function ajaxStop(settings) {
            if (settings.global && ! --_.active) triggerGlobal(settings, null, 'ajaxStop');
        }
    
        function ajaxBeforeSend(xhr, settings) {
            var context = settings.context;
            if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false) return false;
            triggerGlobal(settings, context, 'ajaxSend', [xhr, settings]);
        }
    
        function ajaxSuccess(data, xhr, settings) {
            var context = settings.context,
                status = 'success';
            settings.success.call(context, data, status, xhr);
            triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data]);
            ajaxComplete(status, xhr, settings);
        }
    
        function ajaxError(error, type, xhr, settings) {
            var context = settings.context;
            settings.error.call(context, xhr, type, error);
            triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type]);
            ajaxComplete(type, xhr, settings);
        }
    
        function ajaxComplete(status, xhr, settings) {
            var context = settings.context;
            settings.complete.call(context, xhr, status);
            triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings]);
            ajaxStop(settings);
        }
    
        function appendQuery(url, query) {
            if (query == '') return url;
            return (url + '&' + query).replace(/[&?]{1,2}/, '?');
        }
    
        function serializeData(options) {
            if (options.processData && options.data && _.type(options.data) != 'string') options.data = _.param(options.data, options.traditional);
            if (options.data && (!options.type || options.type.toUpperCase() == 'GET')) options.url = appendQuery(options.url, options.data), options.data = undefined;
        }
    
        _.isFunction = function (obj) {
            return typeof obj === 'function';
        };
        _.isArray = function (obj) {
            return _.type(obj) === 'array';
        };
        _.likeArray = function (obj) {
            return typeof obj.length == 'number';
        };
        _.each = function (obj, callback) {
            var i, key;
            if (_.likeArray(obj)) {
                for (i = 0; i < obj.length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) return obj;
                }
            } else {
                for (key in obj) {
                    if (callback.call(obj[key], key, obj[key]) === false) return obj;
                }
            }
            return obj;
        };
        _.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
            class2type['[object ' + name + ']'] = name.toLowerCase();
        });
        _.type = function (obj) {
            return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
        };
    
        function type(obj) {
            return obj == null ? String(obj) : class2type[toString.call(obj)] || 'object';
        }
    
        function isFunction(value) {
            return type(value) == 'function';
        }
    
        function isWindow(obj) {
            return obj != null && obj == obj.window;
        }
    
        function isDocument(obj) {
            return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
        }
    
        function isObject(obj) {
            return type(obj) == 'object';
        }
    
        _.isPlainObject = function (obj) {
            return isObject(obj) && !isWindow(obj) && (0, _getPrototypeOf2.default)(obj) == Object.prototype;
        };
        _.remove = function () {
            return _.each(function () {
                if (this.parentNode != null) this.parentNode.removeChild(this);
            });
        };
    
        function serialize(params, obj, traditional, scope) {
            var type,
                array = _.isArray(obj),
                hash = _.isPlainObject(obj);
            _.each(obj, function (key, value) {
                type = _.type(value);
                if (scope) key = traditional ? scope : scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']';
                if (!scope && array) params.add(value.name, value.value);else if (type == 'array' || !traditional && type == 'object') serialize(params, value, traditional, key);else params.add(key, value);
            });
        }
    
        var escape = window.encodeURIComponent;
        _.param = function (obj, traditional) {
            var params = [];
            params.add = function (key, value) {
                if (_.isFunction(value)) value = value();
                if (value == null) value = '';
                this.push(escape(key) + '=' + escape(value));
            };
            serialize(params, obj, traditional);
            return params.join('&').replace(/%20/g, '+');
        };
        _.ajaxSettings = {
            type: 'GET',
            beforeSend: empty,
            success: empty,
            error: empty,
            complete: empty,
            context: null,
            global: true,
            xhr: function xhr() {
                return new window.XMLHttpRequest();
            },
            accepts: {
                script: 'text/javascript, application/javascript, application/x-javascript',
                json: 'application/json',
                xml: 'application/xml, text/xml',
                html: 'text/html',
                text: 'text/plain'
            },
            crossDomain: false,
            timeout: 0,
            processData: true,
            cache: true
        };
    
        function mimeToDataType(mime) {
            if (mime) mime = mime.split(';', 2)[0];
            return mime && (mime == htmlType ? 'html' : mime == jsonType ? 'json' : scriptTypeRE.test(mime) ? 'script' : xmlTypeRE.test(mime) && 'xml') || 'text';
        }
    
        _.ajaxJSONP = function (options) {
            if (!('type' in options)) return _.ajax(options);
            var _callbackName = options.jsonpCallback,
                callbackName = (_.isFunction(_callbackName) ? _callbackName() : _callbackName) || 'jsonp' + ++jsonpID,
                script = document.createElement('script'),
                originalCallback = window[callbackName],
                responseData,
                abort = function abort(errorType) {
                handler({
                    type: errorType || 'error'
                }, errorType || 'error');
            },
                xhr = {
                abort: abort
            },
                abortTimeout;
    
            function handler(e, errorType) {
                clearTimeout(abortTimeout);
                script.removeEventListener(e.type, handler);
                _.remove(script);
                if (e.type == 'error' || !responseData) {
                    ajaxError(null, errorType || 'error', xhr, options);
                } else {
                    ajaxSuccess(responseData[0], xhr, options);
                }
                window[callbackName] = originalCallback;
                if (responseData && _.isFunction(originalCallback)) originalCallback(responseData[0]);
                originalCallback = responseData = undefined;
            }
    
            script.addEventListener('load', handler);
            script.addEventListener('error', handler);
            if (ajaxBeforeSend(xhr, options) === false) {
                abort('abort');
                return xhr;
            }
            window[callbackName] = function () {
                responseData = arguments;
            };
            script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName);
            document.head.appendChild(script);
            if (options.timeout > 0) abortTimeout = setTimeout(function () {
                abort('timeout');
            }, options.timeout);
            return xhr;
        };
        _.ajax = function (options) {
            var settings = (0, _create2.default)(options);
            for (var key in _.ajaxSettings) {
                if (settings[key] === undefined) {
                    settings[key] = _.ajaxSettings[key];
                }
            }
            ajaxStart(settings);
            if (!settings.crossDomain) {
                settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;
            }
            if (!settings.url) settings.url = window.location.toString();
            serializeData(settings);
            var dataType = settings.dataType,
                hasPlaceholder = /\?.+=\?/.test(settings.url);
            if (hasPlaceholder) dataType = 'jsonp';
            if (settings.cache === false || (!options || options.cache !== true) && ('script' == dataType || 'jsonp' == dataType)) settings.url = appendQuery(settings.url, '_=' + Date.now());
            if ('jsonp' == dataType) {
                if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + '=?' : settings.jsonp === false ? '' : 'callback=?');
                return _.ajaxJSONP(settings);
            }
            var mime = settings.accepts[dataType],
                headers = {},
                setHeader = function setHeader(name, value) {
                headers[name.toLowerCase()] = [name, value];
            },
                protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
                xhr = settings.xhr(),
                nativeSetHeader = xhr.setRequestHeader,
                abortTimeout;
            if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest');
            setHeader('Accept', mime || '*/*');
            if (mime = settings.mimeType || mime) {
                if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0];
                xhr.overrideMimeType && xhr.overrideMimeType(mime);
            }
            if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET') setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded');
            if (settings.headers) for (name in settings.headers) {
                setHeader(name, settings.headers[name]);
            }xhr.setRequestHeader = setHeader;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    xhr.onreadystatechange = empty;
                    clearTimeout(abortTimeout);
                    var result,
                        error = false;
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
                        dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'));
                        result = xhr.responseText;
                        try {
                            if (dataType == 'script') (1, eval)(result);else if (dataType == 'xml') result = xhr.responseXML;else if (dataType == 'json') result = blankRE.test(result) ? null : JSON.parse(result);
                        } catch (e) {
                            error = e;
                        }
                        if (error) ajaxError(error, 'parsererror', xhr, settings);else ajaxSuccess(result, xhr, settings);
                    } else {
                        ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings);
                    }
                }
            };
            if (ajaxBeforeSend(xhr, settings) === false) {
                xhr.abort();
                ajaxError(null, 'abort', xhr, settings);
                return xhr;
            }
            if (settings.xhrFields) for (name in settings.xhrFields) {
                xhr[name] = settings.xhrFields[name];
            }var async = 'async' in settings ? settings.async : true;
            xhr.open(settings.type, settings.url, async, settings.username, settings.password);
            for (name in headers) {
                nativeSetHeader.apply(xhr, headers[name]);
            }if (settings.timeout > 0) abortTimeout = setTimeout(function () {
                xhr.onreadystatechange = empty;
                xhr.abort();
                ajaxError(null, 'timeout', xhr, settings);
            }, settings.timeout);
            xhr.send(settings.data ? settings.data : null);
            return xhr;
        };
    
        function parseArguments(url, data, succfess, dataType) {
            if (_.isFunction(data)) dataType = success, success = data, data = undefined;
            if (!_.isFunction(success)) dataType = success, success = undefined;
            return {
                url: url,
                data: data,
                success: success,
                dataType: dataType
            };
        }
    
        _.get = function () {
            return _.ajax(parseArguments.apply(null, arguments));
        };
        _.post = function () {
            var options = parseArguments.apply(null, arguments);
            options.type = 'POST';
            return _.ajax(options);
        };
        _.getJSON = function () {
            var options = parseArguments.apply(null, arguments);
            options.dataType = 'json';
            return _.ajax(options);
        };
    
        return _;
    }();
    function request(param) {
        return new _promise2.default(function (resolve, reject) {
            param.success = function (ret) {
                resolve(ret);
            };
            param.error = function () {
                reject();
            };
            http.ajax(param);
        });
    }
    exports.default = http;
    
    /***/ }),
    
    /***/ 464:
    /***/ (function(module, exports, __webpack_require__) {
    
    module.exports = { "default": __webpack_require__(465), __esModule: true };
    
    /***/ }),
    
    /***/ 465:
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(466);
    var $Object = __webpack_require__(27).Object;
    module.exports = function create(P, D) {
      return $Object.create(P, D);
    };
    
    
    /***/ }),
    
    /***/ 466:
    /***/ (function(module, exports, __webpack_require__) {
    
    var $export = __webpack_require__(48);
    // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
    $export($export.S, 'Object', { create: __webpack_require__(167) });
    
    
    /***/ }),
    
    /***/ 467:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _extends2 = __webpack_require__(443);
    
    var _extends3 = _interopRequireDefault(_extends2);
    
    var _util = __webpack_require__(164);
    
    var _util2 = _interopRequireDefault(_util);
    
    var _vuex = __webpack_require__(165);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
        computed: (0, _extends3.default)({}, (0, _vuex.mapState)(['activityTitle', 'activityName', 'banner', 'bgColor', 'activityStartTime', 'API']), {
            currentReward: function currentReward() {
                return _util2.default.getCommonParamByKey('currentReward');
            },
            currentOrder: function currentOrder() {
                return _util2.default.getCommonParamByKey('currentOrder');
            }
        }),
        methods: {
            backHome: function backHome() {
                this.$router.push({
                    name: 'Index',
                    query: {
                        token: Date.now()
                    }
                });
            },
            isStart: function isStart() {
                return this.activityStartTime - Date.now() / 1000 < 3 * 60;
            }
        },
    
        initData: function initData(obj) {
            var store = obj.store;
            store.state.activityTitle = _util2.default.getCommonParamByKey('title');
            store.state.activityName = _util2.default.getCommonParamByKey('activityName');
            store.state.banner = _util2.default.getCommonParamByKey('banner');
            store.state.bgColor = _util2.default.getCommonParamByKey('bgColor');
            store.state.activityStartTime = _util2.default.getCommonParamByKey('startTime');
            store.state.API = _util2.default.getCommonParamByKey('API');
        }
    };
    
    /***/ }),
    
    /***/ 468:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(469);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("58207aa8", content, true);
    
    /***/ }),
    
    /***/ 469:
    /***/ (function(module, exports, __webpack_require__) {
    
    var escape = __webpack_require__(444);
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".banner[data-v-a4cfecb4]{display:block;padding-bottom:45.3333%;background-repeat:no-repeat;background-position:50% 20%;background-size:cover;position:relative}.banner a[data-v-a4cfecb4]{position:absolute;display:block;width:40px;height:40px;left:10px;top:5px;background:url(" + escape(__webpack_require__(470)) + ") no-repeat 50%;background-size:22px}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/banner/index.vue"],"names":[],"mappings":"AACA,yBACE,cAAe,AACf,wBAAyB,AACzB,4BAA6B,AAC7B,4BAA6B,AAC7B,sBAAuB,AACvB,iBAAmB,CACpB,AACD,2BACI,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,YAAa,AACb,UAAW,AACX,QAAS,AACT,uDAA8D,AAC9D,oBAAsB,CACzB","file":"index.vue","sourcesContent":["\n.banner[data-v-a4cfecb4] {\n  display: block;\n  padding-bottom: 45.3333%;\n  background-repeat: no-repeat;\n  background-position: 50% 20%;\n  background-size: cover;\n  position: relative;\n}\n.banner a[data-v-a4cfecb4] {\n    position: absolute;\n    display: block;\n    width: 40px;\n    height: 40px;\n    left: 10px;\n    top: 5px;\n    background: url(\"../../assets/img/back.png\") no-repeat center;\n    background-size: 22px;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 470:
    /***/ (function(module, exports) {
    
    module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAtxJREFUeNrMmUloFFEQhrufo0bFjYiIYkSCBCQiBiF6cI0GY4IyREQRyS1Hj3r06lG8KAheFFRQ3BMNDm4IgiCiCPEgeMjBLXGNSxwy/gW/8ChbTWd6qYKPB13NzMebN+9VdbsgwahUKhPBMfAJlEAtCJJkQoKykzCcA3vAZLAYjIBbSU5KISFZETwP2lUqDKwFZGtAb+XPeJ7GknBVyk7BcBlsUal+sD4Mw8GkJ6hQhexUDFfARpV6Blog+zqNX7QwTtlpGK6BdSr1lLJv01qCbhyy0zFcj5B9DDakKRt7hiE7g7KrVeoR2AzZobT/5C6G7EwMfRGyD7kMhrLYldwYZWdjuAmaVeoBZ/ZDVtuoG4NsLYYSWKlS90ErZD9mue+7/8jOoewKlboney9kP2d9ULl/yM5lHbBcpW6DNsh+yeNkdX+RnUfZRpWS2W6H7HBepYCLkJ3PWVyqUrJDdED2a561i1OyCyjboO7rAdsg+z3vYst5sgsx3AFL1D1SLxQh+8NCdegou4iy9Sp/EXRCdsRKOesgK53BXXYIfkj3sBOyPy3V3zLDp0Cdun4W7LYm+1t4mbomf6z9kC0HBkOEj6trNeAGDw57ATFZx6cjerInrCOq/fxkezr89KP43L3ggvouWSp9uGmWtSURcL3u4gHhRxPoZZdhR5jSstd2su71YxW4yqbTjjClZYfYzn3Zj7XgkjyDMCVMaSluOthN+LFJnu7wkZQdYUpLYd7G5tKPreAMpAumhCktfVornzX4UQQnZTs0JUzpQS6FfpWSHeUEpENTwpR+I208eKFSXeBoYDUwm3XgZcSJeDjLky6udD0YiJA+ZFKYAg3gVYT0QZPClGgE7yKkD5gUpkgTeB8hvc+kMGWa+cZIR7dJYQqtAcNKeBR0mRSmVAv4pqTLoGjqpYx3uJRYmvqPA+Qd4JHMT7oY0j08ssu5Hs0xpaXN2gEGSHfSwr8EGADTt2CPwgRtCQAAAABJRU5ErkJggg=="
    
    /***/ }),
    
    /***/ 471:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: "d-banner",
        props: {
            image: String
        },
        methods: {
            back: function back() {
                this.$emit('back');
            }
        }
    };
    
    /***/ }),
    
    /***/ 472:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        directives: [{
          name: "lazy",
          rawName: "v-lazy:background-image",
          value: (_vm.image),
          expression: "image",
          arg: "background-image"
        }],
        staticClass: "banner"
      }, [_c('a', {
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": _vm.back
        }
      })])
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 473:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(474);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("7d1a791c", content, true);
    
    /***/ }),
    
    /***/ 474:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, ".title[data-v-6dec0934]{font-size:18px;font-weight:700}.title span[data-v-6dec0934]{text-align:right;display:inline-block;vertical-align:-1px;height:20px;line-height:20px}.title i.tag[data-v-6dec0934]{font-style:normal;border-radius:20px;vertical-align:1px;padding:0 5px;display:inline-block;height:20px;line-height:20px;font-size:12px;text-align:center}.title i.tag.precess[data-v-6dec0934]{background:linear-gradient(90deg,#42e0ae,#56e1b1)}.title i.tag.finish[data-v-6dec0934]{background:linear-gradient(90deg,#ffb26d,#ff947a)}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/title/index.vue"],"names":[],"mappings":"AACA,wBACE,eAAgB,AAChB,eAAkB,CACnB,AACD,6BACI,iBAAkB,AAClB,qBAAsB,AACtB,oBAAqB,AACrB,YAAa,AACb,gBAAkB,CACrB,AACD,8BACI,kBAAmB,AACnB,mBAAoB,AACpB,mBAAoB,AACpB,cAAiB,AACjB,qBAAsB,AACtB,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACtB,AACD,sCACM,iDAAwD,CAC7D,AACD,qCACM,iDAAwD,CAC7D","file":"index.vue","sourcesContent":["\n.title[data-v-6dec0934] {\n  font-size: 18px;\n  font-weight: bold;\n}\n.title span[data-v-6dec0934] {\n    text-align: right;\n    display: inline-block;\n    vertical-align: -1px;\n    height: 20px;\n    line-height: 20px;\n}\n.title i.tag[data-v-6dec0934] {\n    font-style: normal;\n    border-radius: 20px;\n    vertical-align: 1px;\n    padding: 0px 5px;\n    display: inline-block;\n    height: 20px;\n    line-height: 20px;\n    font-size: 12px;\n    text-align: center;\n}\n.title i.tag.precess[data-v-6dec0934] {\n      background: linear-gradient(to right, #42E0AE, #56E1B1);\n}\n.title i.tag.finish[data-v-6dec0934] {\n      background: linear-gradient(to right, #ffb26d, #ff947a);\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 475:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: 'd-order-title',
        props: {
            title: String,
            status: [Number, String]
        }
    };
    
    /***/ }),
    
    /***/ 476:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', {
        staticClass: "title"
      }, [(_vm.title) ? _c('span', {
        domProps: {
          "textContent": _vm._s(_vm.title)
        }
      }) : _vm._e(), _vm._v(" "), (_vm.title && _vm.status == 1) ? _c('i', {
        staticClass: "tag precess"
      }, [_vm._v("进行中")]) : _vm._e(), _vm._v(" "), (_vm.title && _vm.status == 2) ? _c('i', {
        staticClass: "tag finish"
      }, [_vm._v("已结束")]) : _vm._e()])
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 477:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(478);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("13540a18", content, true);
    
    /***/ }),
    
    /***/ 478:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, "a[data-v-e3423ba8]{text-align:center;color:hsla(0,0%,100%,.8);box-sizing:border-box;display:block;width:100%;padding:0 8px}a.hollow[data-v-e3423ba8]{line-height:34px;border-radius:34px;min-height:34px;border:1px solid hsla(0,0%,100%,.5);font-size:12px}a.solid[data-v-e3423ba8]{line-height:34px;border-radius:34px;min-height:34px}a.answer[data-v-e3423ba8],a.solid[data-v-e3423ba8]{background:hsla(0,0%,100%,.2);color:#fff;font-size:12px}a.answer[data-v-e3423ba8]{line-height:32px;border-radius:32px;min-height:32px}a.entry[data-v-e3423ba8]{min-height:60px;line-height:60px;color:#fff;font-size:20px;border-radius:60px;background:linear-gradient(90deg,#f3cd3c,#fe5e9a);box-shadow:0 4px 0 0 #c05067}@media screen and (max-width:320px){a.entry[data-v-e3423ba8]{min-height:50px;line-height:50px}}a.entry-disable[data-v-e3423ba8]{min-height:60px;line-height:60px;color:#fff;font-size:20px;border-radius:60px;background:#7a63b4;box-shadow:0 4px 0 0 #59448c}@media screen and (max-width:320px){a.entry-disable[data-v-e3423ba8]{min-height:50px;line-height:50px}}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/button/index.vue"],"names":[],"mappings":"AACA,mBACE,kBAAmB,AACnB,yBAAgC,AAChC,sBAAuB,AACvB,cAAe,AACf,WAAY,AACZ,aAAiB,CAClB,AACD,0BACI,iBAAkB,AAClB,mBAAoB,AACpB,gBAAiB,AACjB,oCAA2C,AAC3C,cAAgB,CACnB,AACD,yBAEI,iBAAkB,AAClB,mBAAoB,AACpB,eAAiB,CAGpB,AACD,mDAPI,8BAAqC,AAIrC,WAAe,AACf,cAAgB,CASnB,AAPD,0BAEI,iBAAkB,AAClB,mBAAoB,AACpB,eAAiB,CAGpB,AACD,yBACI,gBAAiB,AACjB,iBAAkB,AAClB,WAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,kDAAwD,AAExD,4BAAoC,CACvC,AACD,oCACA,yBACQ,gBAAiB,AACjB,gBAAkB,CACzB,CACA,AACD,iCACI,gBAAiB,AACjB,iBAAkB,AAClB,WAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,mBAAoB,AACpB,4BAAoC,CACvC,AACD,oCACA,iCACQ,gBAAiB,AACjB,gBAAkB,CACzB,CACA","file":"index.vue","sourcesContent":["\na[data-v-e3423ba8] {\n  text-align: center;\n  color: rgba(255, 255, 255, 0.8);\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 0px 8px;\n}\na.hollow[data-v-e3423ba8] {\n    line-height: 34px;\n    border-radius: 34px;\n    min-height: 34px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    font-size: 12px;\n}\na.solid[data-v-e3423ba8] {\n    background: rgba(255, 255, 255, 0.2);\n    line-height: 34px;\n    border-radius: 34px;\n    min-height: 34px;\n    color: #ffffff;\n    font-size: 12px;\n}\na.answer[data-v-e3423ba8] {\n    background: rgba(255, 255, 255, 0.2);\n    line-height: 32px;\n    border-radius: 32px;\n    min-height: 32px;\n    color: #ffffff;\n    font-size: 12px;\n}\na.entry[data-v-e3423ba8] {\n    min-height: 60px;\n    line-height: 60px;\n    color: #ffffff;\n    font-size: 20px;\n    border-radius: 60px;\n    background: linear-gradient(to right, #F3CD3C, #FE5E9A);\n    box-shadow: #C05067 0px 4px 0px 0px;\n    box-shadow: #C05067 0px 4px 0px 0px;\n}\n@media screen and (max-width: 320px) {\na.entry[data-v-e3423ba8] {\n        min-height: 50px;\n        line-height: 50px;\n}\n}\na.entry-disable[data-v-e3423ba8] {\n    min-height: 60px;\n    line-height: 60px;\n    color: #ffffff;\n    font-size: 20px;\n    border-radius: 60px;\n    background: #7A63B4;\n    box-shadow: #59448C 0px 4px 0px 0px;\n}\n@media screen and (max-width: 320px) {\na.entry-disable[data-v-e3423ba8] {\n        min-height: 50px;\n        line-height: 50px;\n}\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 479:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        name: 'd-button',
        props: {
            type: [Number, String],
            text: [String]
        },
        methods: {
            click: function click() {
                this.$emit('click');
            }
        },
        computed: {
            klass: function klass() {
                var klass = '';
                switch (Number(this.type)) {
                    case 1:
                        klass = 'hollow';
                        break;
                    case 2:
                        klass = 'solid';
                        break;
                    case 3:
                        klass = 'entry';
                        break;
                    case 4:
                        klass = 'answer';
                        break;
                    case 5:
                        klass = 'entry-disable';
                }
                return klass;
            }
        }
    };
    
    /***/ }),
    
    /***/ 480:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('a', {
        class: _vm.klass,
        attrs: {
          "href": "javascript:;"
        },
        domProps: {
          "textContent": _vm._s(_vm.text)
        },
        on: {
          "click": _vm.click
        }
      })
    },staticRenderFns: []}
    
    /***/ }),
    
    /***/ 511:
    /***/ (function(module, exports, __webpack_require__) {
    
    // style-loader: Adds some css to the DOM by adding a <style> tag
    
    // load the styles
    var content = __webpack_require__(512);
    if(typeof content === 'string') content = [[module.i, content, '']];
    if(content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(438)("466b7d49", content, true);
    
    /***/ }),
    
    /***/ 512:
    /***/ (function(module, exports, __webpack_require__) {
    
    exports = module.exports = __webpack_require__(437)(true);
    // imports
    
    
    // module
    exports.push([module.i, "p[data-v-7cfa3ad2]{word-break:break-all}.b-wrap[data-v-7cfa3ad2]{margin-top:14px}.b-wrap>div[data-v-7cfa3ad2]{display:inline-block;min-width:68px}", "", {"version":3,"sources":["/Users/gml/mywork/gitlab/dream/src/component/review/index.vue"],"names":[],"mappings":"AACA,mBACE,oBAAsB,CACvB,AACD,yBACE,eAAiB,CAClB,AACD,6BACI,qBAAsB,AACtB,cAAgB,CACnB","file":"index.vue","sourcesContent":["\np[data-v-7cfa3ad2] {\n  word-break: break-all;\n}\n.b-wrap[data-v-7cfa3ad2] {\n  margin-top: 14px;\n}\n.b-wrap > div[data-v-7cfa3ad2] {\n    display: inline-block;\n    min-width: 68px;\n}\n"],"sourceRoot":""}]);
    
    // exports
    
    
    /***/ }),
    
    /***/ 513:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    
    
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    
    var _index = __webpack_require__(449);
    
    var _index2 = _interopRequireDefault(_index);
    
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
    exports.default = {
        name: 'd-review',
        props: {
            answer: [String],
            question: [String]
        },
        components: {
            DButton: _index2.default
        }
    };
    
    /***/ }),
    
    /***/ 514:
    /***/ (function(module, exports) {
    
    module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
      return _c('div', [_c('p', {
        domProps: {
          "textContent": _vm._s(_vm.question)
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "b-wrap"
      }, [_c('div', [_c('d-button', {
        attrs: {
          "text": _vm.answer,
          "type": "4"
        }
      })], 1)])])
    },staticRenderFns: []}
    
    /***/ })
    
    });
    
    
    // WEBPACK FOOTER //
    // static/js/chunk.0.36.js