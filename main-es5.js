(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\n      <h1 class=\"display-3\">{{ title }}</h1>\n     \n      <router-outlet></router-outlet>\n\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment-editor/post-comment-editor.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment-editor/post-comment-editor.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group\">\n  <textarea\n    cols=\"30\"\n    rows=\"1\"\n    class=\"form-control\"\n    [value]=\"comment.body\"\n    (input)=\"bodyInput( $event.target.value )\"\n  >\n  </textarea>\n\n  <div class=\"input-group-append\">\n    <span class=\"input-group-text\"> {{ comment.body.length }} / 170 </span>\n\n    <input type=\"button\" value=\"Comment!\" class=\"btn btn-outline-secondary\" (click)=\"send()\" />\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment/post-comment.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment/post-comment.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span class=\"close\" (click)=\"close()\">&times;</span>\n  {{ comment.body }}\n  <small class=\"text-muted float-right\">\n    {{ comment.name }}\n  </small>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/posts-grid/posts-grid.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/posts-grid/posts-grid.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-group\">\n  <div class=\"card\" *ngFor=\"let post of posts\">\n    <!-- <img src=\"https://www.placecage.com/c/200/300\" class=\"card-img-top\" alt=\"...\" /> -->\n\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">\n        {{ post.title }}\n      </h5>\n\n      <div class=\"card-text\">\n        {{ post.body }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n  .card {\n    min-width: 25%;\n  }\n</style>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/search-form/search-form.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/search-form/search-form.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group mb-3\">\n  \n  <input type=\"text\" class=\"form-control\" \n      placeholder=\"Search\" \n      [formControl]=\"queryForm.get('query')\"/>\n\n  <div class=\"input-group-append\">\n    <button class=\"btn btn-outline-secondary\">\n      Search\n    </button>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/post-view/post-view.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/post-view/post-view.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!post\">\n  Please wait...\n</div>\n\n<div *ngIf=\"post\">\n  <h5 class=\"\">\n    {{ post.title }}\n  </h5>\n  <div class=\"card mb-3\">\n    <div class=\"card-body\">\n      <p class=\"card-text\">\n        {{ post.body }}\n      </p>\n      <p class=\"card-text float-right\" *ngIf=\"post.user\">\n        <small class=\"text-muted\">\n          {{ post.user.name }}\n        </small>\n      </p>\n    </div>\n  </div>\n\n  <div *ngIf=\"post.comments\">\n    <h3>Comments</h3>\n\n    <div class=\"list-group\">\n      <app-post-comment-editor\n        class=\"list-group-item\"\n        (addComment)=\"addComment($event)\"\n      >\n      </app-post-comment-editor>\n\n      <app-post-comment\n        *ngFor=\"let data of post.comments\"\n        class=\"list-group-item\"\n        [comment]=\"data\"\n        (remove)=\"removeComment(data)\"\n      >\n      </app-post-comment>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-search-view/posts-search-view.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-search-view/posts-search-view.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  <div class=\"col\">\n    <app-search-form (searchChange)=\"search( $event )\">\n    </app-search-form>\n\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n\n    <!-- <button (click)=\"hide = !hide\">Toggle {{hide}}</button> -->\n   <!-- *ngIf=\"hide\" -->\n\n   <p>Found {{ (posts$ | async)?.length }} results </p>\n\n    <app-posts-grid   [posts]=\"posts$ | async \"></app-posts-grid>\n\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-view/posts-view.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-view/posts-view.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>posts-view works!</p>\n\n<div>\n  <div class=\"card mb-3\" *ngFor=\"let post of posts\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">\n        <a [routerLink]=\"['/post', post.id]\">\n          {{ post.title }}\n        </a>\n      </h5>\n\n      <p class=\"card-text\">\n        {{ post.body }}\n      </p>\n\n      <p class=\"card-text float-right\">\n        <small class=\"text-muted\">\n          {{ post.user.name }}\n        </small>\n      </p>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/sync-search/sync-search.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/sync-search/sync-search.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n    <app-posts-search-view></app-posts-search-view>\n  </div>\n  <div class=\"col\">\n    <button (click)=\"hide = !hide\">Toggle {{hide}}</button>\n    <app-posts-search-view *ngIf=\"hide\"></app-posts-search-view>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col\">\n\n    <div class=\"list-group\">\n      <div\n        class=\"list-group-item\"\n        [class.active]=\"playlist == item\"\n        (click)=\"select(item)\"\n        *ngFor=\"let item of playlists; index as i\"\n      >\n        {{ i + 1 }}. {{ item.name }}\n      </div>\n    </div>\n\n  </div>\n  <div class=\"col\">\n    <div class=\"card\" *ngIf=\"this.mode === 'show'\">\n      <div class=\"card-body\">\n        <dl>\n          <dt>Name:</dt>\n          <dd>{{ playlist.name }}</dd>\n\n          <dt>Favourite:</dt>\n          <dd>\n            {{ playlist.favorite ? \"Yes\" : \"No\" }}\n          </dd>\n\n          <dt>Color:</dt>\n          <dd\n            style=\"border: 1px solid red\"\n            [style.color]=\"playlist.color\"\n            [style.background-color]=\"playlist.color\"\n          >\n            {{ playlist.color }}\n          </dd>\n        </dl>\n\n        <input type=\"button\" value=\"Edit\" (click)=\"edit()\" />\n      </div>\n    </div>\n\n    <div class=\"card\" *ngIf=\"this.mode === 'edit'\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [value]=\"playlist.name\"\n            (input)=\"playlist.name = $event.target.value\"\n          />\n          {{ 170 - playlist.name.length }} / 170\n        </div>\n\n        <input type=\"button\" value=\"Cancel\" (click)=\"cancel()\" />\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
            var routes = [
                {
                    path: "",
                    pathMatch: "full",
                    redirectTo: "blog"
                },
                {
                    path: "playlists",
                    component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistComponent"]
                },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(cdr) {
                    var _this = this;
                    this.title = "programator-angular";
                    this.subtitle = "Lubię placki!";
                    this.counter = 0;
                    setInterval(function () {
                        _this.counter++;
                        // cdr.detectChanges()
                    }, 500);
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-root",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
            /* harmony import */ var _blog_blog_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.module */ "./src/app/blog/blog.module.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        // StadionModule,
                        _blog_blog_module__WEBPACK_IMPORTED_MODULE_6__["BlogModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/blog/blog-routing.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/blog/blog-routing.module.ts ***!
          \*********************************************/
        /*! exports provided: BlogRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function () { return BlogRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _views_posts_view_posts_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/posts-view/posts-view.component */ "./src/app/blog/views/posts-view/posts-view.component.ts");
            /* harmony import */ var _views_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/post-view/post-view.component */ "./src/app/blog/views/post-view/post-view.component.ts");
            /* harmony import */ var _views_posts_search_view_posts_search_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/posts-search-view/posts-search-view.component */ "./src/app/blog/views/posts-search-view/posts-search-view.component.ts");
            /* harmony import */ var _views_sync_search_sync_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/sync-search/sync-search.component */ "./src/app/blog/views/sync-search/sync-search.component.ts");
            var routes = [
                {
                    path: "blog",
                    component: _views_posts_view_posts_view_component__WEBPACK_IMPORTED_MODULE_3__["PostsViewComponent"]
                },
                {
                    path: "post/:post_id",
                    component: _views_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_4__["PostViewComponent"]
                },
                {
                    path: "search",
                    component: _views_posts_search_view_posts_search_view_component__WEBPACK_IMPORTED_MODULE_5__["PostsSearchViewComponent"]
                },
                {
                    path: "sync",
                    component: _views_sync_search_sync_search_component__WEBPACK_IMPORTED_MODULE_6__["SyncSearchComponent"]
                }
            ];
            var BlogRoutingModule = /** @class */ (function () {
                function BlogRoutingModule() {
                }
                return BlogRoutingModule;
            }());
            BlogRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], BlogRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/blog/blog.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/blog/blog.module.ts ***!
          \*************************************/
        /*! exports provided: BlogModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function () { return BlogModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-routing.module */ "./src/app/blog/blog-routing.module.ts");
            /* harmony import */ var _views_posts_view_posts_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/posts-view/posts-view.component */ "./src/app/blog/views/posts-view/posts-view.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _views_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/post-view/post-view.component */ "./src/app/blog/views/post-view/post-view.component.ts");
            /* harmony import */ var _components_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-comment/post-comment.component */ "./src/app/blog/components/post-comment/post-comment.component.ts");
            /* harmony import */ var _components_post_comment_editor_post_comment_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/post-comment-editor/post-comment-editor.component */ "./src/app/blog/components/post-comment-editor/post-comment-editor.component.ts");
            /* harmony import */ var _views_posts_search_view_posts_search_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/posts-search-view/posts-search-view.component */ "./src/app/blog/views/posts-search-view/posts-search-view.component.ts");
            /* harmony import */ var _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/search-form/search-form.component */ "./src/app/blog/components/search-form/search-form.component.ts");
            /* harmony import */ var _components_posts_grid_posts_grid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/posts-grid/posts-grid.component */ "./src/app/blog/components/posts-grid/posts-grid.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _views_sync_search_sync_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/sync-search/sync-search.component */ "./src/app/blog/views/sync-search/sync-search.component.ts");
            /* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tokens */ "./src/app/blog/tokens.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            var BlogModule = /** @class */ (function () {
                function BlogModule() {
                }
                return BlogModule;
            }());
            BlogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _views_posts_view_posts_view_component__WEBPACK_IMPORTED_MODULE_4__["PostsViewComponent"],
                        _views_post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__["PostViewComponent"],
                        _components_post_comment_post_comment_component__WEBPACK_IMPORTED_MODULE_7__["PostCommentComponent"],
                        _components_post_comment_editor_post_comment_editor_component__WEBPACK_IMPORTED_MODULE_8__["PostCommentEditorComponent"],
                        _views_posts_search_view_posts_search_view_component__WEBPACK_IMPORTED_MODULE_9__["PostsSearchViewComponent"],
                        _components_search_form_search_form_component__WEBPACK_IMPORTED_MODULE_10__["SearchFormComponent"],
                        _components_posts_grid_posts_grid_component__WEBPACK_IMPORTED_MODULE_11__["PostsGridComponent"],
                        _views_sync_search_sync_search_component__WEBPACK_IMPORTED_MODULE_13__["SyncSearchComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _blog_routing_module__WEBPACK_IMPORTED_MODULE_3__["BlogRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]
                    ],
                    providers: [
                        {
                            provide: _tokens__WEBPACK_IMPORTED_MODULE_14__["API_URL"],
                            useValue: "http://localhost:3000/"
                        }
                        // {
                        //   provide: SearchPostsService,
                        //   useClass: TestingSearchPostsService
                        //   // useFactory(){
                        //   //   return new SearchPostsService(...)
                        //   // }
                        // }
                        // {
                        //   provide:SearchPostsService, useClass:SearchPostsService
                        // },
                        // SearchPostsService
                    ]
                })
            ], BlogModule);
            /***/ 
        }),
        /***/ "./src/app/blog/components/post-comment-editor/post-comment-editor.component.scss": 
        /*!****************************************************************************************!*\
          !*** ./src/app/blog/components/post-comment-editor/post-comment-editor.component.scss ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29tcG9uZW50cy9wb3N0LWNvbW1lbnQtZWRpdG9yL3Bvc3QtY29tbWVudC1lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/blog/components/post-comment-editor/post-comment-editor.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/blog/components/post-comment-editor/post-comment-editor.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: PostCommentEditorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentEditorComponent", function () { return PostCommentEditorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PostCommentEditorComponent = /** @class */ (function () {
                function PostCommentEditorComponent() {
                    this.comment = {
                        postId: null,
                        userId: null,
                        id: null,
                        body: "",
                        email: "",
                        name: ""
                    };
                    this.addComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                PostCommentEditorComponent.prototype.send = function () {
                    this.addComment.emit(this.comment);
                    this.comment = {
                        id: null,
                        body: "",
                        email: "",
                        name: "",
                        postId: null
                    };
                };
                PostCommentEditorComponent.prototype.bodyInput = function (text) {
                    if (text.length <= 170) {
                        this.comment.body = text;
                    }
                };
                PostCommentEditorComponent.prototype.ngOnInit = function () { };
                return PostCommentEditorComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PostCommentEditorComponent.prototype, "addComment", void 0);
            PostCommentEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-post-comment-editor",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comment-editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment-editor/post-comment-editor.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comment-editor.component.scss */ "./src/app/blog/components/post-comment-editor/post-comment-editor.component.scss")).default]
                })
            ], PostCommentEditorComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/components/post-comment/post-comment.component.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/blog/components/post-comment/post-comment.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29tcG9uZW50cy9wb3N0LWNvbW1lbnQvcG9zdC1jb21tZW50LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/blog/components/post-comment/post-comment.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/blog/components/post-comment/post-comment.component.ts ***!
          \************************************************************************/
        /*! exports provided: PostCommentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCommentComponent", function () { return PostCommentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PostCommentComponent = /** @class */ (function () {
                function PostCommentComponent() {
                    this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                PostCommentComponent.prototype.close = function () {
                    this.remove.emit();
                };
                PostCommentComponent.prototype.ngOnInit = function () { };
                return PostCommentComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PostCommentComponent.prototype, "comment", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PostCommentComponent.prototype, "remove", void 0);
            PostCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-post-comment",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/post-comment/post-comment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-comment.component.scss */ "./src/app/blog/components/post-comment/post-comment.component.scss")).default]
                })
            ], PostCommentComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/components/posts-grid/posts-grid.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/blog/components/posts-grid/posts-grid.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29tcG9uZW50cy9wb3N0cy1ncmlkL3Bvc3RzLWdyaWQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/blog/components/posts-grid/posts-grid.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/blog/components/posts-grid/posts-grid.component.ts ***!
          \********************************************************************/
        /*! exports provided: PostsGridComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsGridComponent", function () { return PostsGridComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PostsGridComponent = /** @class */ (function () {
                function PostsGridComponent() {
                }
                PostsGridComponent.prototype.ngOnInit = function () { };
                return PostsGridComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PostsGridComponent.prototype, "posts", void 0);
            PostsGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-posts-grid",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/posts-grid/posts-grid.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-grid.component.scss */ "./src/app/blog/components/posts-grid/posts-grid.component.scss")).default]
                })
            ], PostsGridComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/components/search-form/search-form.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/blog/components/search-form/search-form.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY29tcG9uZW50cy9zZWFyY2gtZm9ybS9zZWFyY2gtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/blog/components/search-form/search-form.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/blog/components/search-form/search-form.component.ts ***!
          \**********************************************************************/
        /*! exports provided: SearchFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function () { return SearchFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var SearchFormComponent = /** @class */ (function () {
                function SearchFormComponent() {
                    var _this = this;
                    this.queryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                        type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("post"),
                        query: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("batman")
                    });
                    this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    console.log(this.queryForm);
                    var valueChanges = this.queryForm.get("query").valueChanges;
                    // https://rxmarbles.com/
                    valueChanges
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) { return v.trim(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (v) { return v.length >= 3; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
                        .subscribe({
                        next: function (value) {
                            _this.searchChange.emit(value);
                        }
                    });
                }
                SearchFormComponent.prototype.ngOnInit = function () { };
                return SearchFormComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SearchFormComponent.prototype, "searchChange", void 0);
            SearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-search-form",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/components/search-form/search-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-form.component.scss */ "./src/app/blog/components/search-form/search-form.component.scss")).default]
                })
            ], SearchFormComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/services/search-posts.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/blog/services/search-posts.service.ts ***!
          \*******************************************************/
        /*! exports provided: SearchPostsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsService", function () { return SearchPostsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tokens */ "./src/app/blog/tokens.ts");
            // import dane from "../../../../db-1576606331233.json";
            // "resolveJsonModule": true, w tsconfig.json
            var SearchPostsService = /** @class */ (function () {
                function SearchPostsService(api_url, http) {
                    // (window as any).subject = this.resultsChange;
                    this.api_url = api_url;
                    this.http = http;
                    // getResults() {
                    //   // return merge(this.resultsChange, of(this.resultsCache));
                    //   // return concat(this.resultsChange, of(this.resultsCache));
                    //   // return concat(of(this.resultsCache), this.resultsChange);
                    //   return this.resultsChange.pipe(startWith(this.resultsCache));
                    // }
                    // resultsCache: Post[] = [];
                    // resultsChange = new EventEmitter<Post[]>();
                    // resultsChange = new Subject<Post[]>();
                    // resultsChange = new ReplaySubject<Post[]>(3, 5000);
                    // resultsChange = new ReplaySubject<Post[]>(1);
                    this.resultsChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
                    console.log("SearchPostsService");
                }
                SearchPostsService.prototype.search = function (query) {
                    var _this = this;
                    if (query === void 0) { query = "molestiae"; }
                    // this.resultsChange.getValue()
                    this.http
                        .get(this.api_url + "posts", {
                        params: {
                            q: query,
                            _limit: "10"
                        }
                    })
                        .subscribe(function (posts) {
                        // this.resultsCache = posts;
                        console.log("result from server");
                        _this.resultsChange.next(posts);
                    });
                };
                return SearchPostsService;
            }());
            SearchPostsService.ctorParameters = function () { return [
                { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL"],] }] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SearchPostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_tokens__WEBPACK_IMPORTED_MODULE_4__["API_URL"]))
            ], SearchPostsService);
            /***/ 
        }),
        /***/ "./src/app/blog/tokens.ts": 
        /*!********************************!*\
          !*** ./src/app/blog/tokens.ts ***!
          \********************************/
        /*! exports provided: API_URL */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function () { return API_URL; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            // import { SearchPostsService } from "./services/search-posts.service";
            var API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("API host url string");
            /***/ 
        }),
        /***/ "./src/app/blog/views/post-view/post-view.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/blog/views/post-view/post-view.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlld3MvcG9zdC12aWV3L3Bvc3Qtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/blog/views/post-view/post-view.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/blog/views/post-view/post-view.component.ts ***!
          \*************************************************************/
        /*! exports provided: PostViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function () { return PostViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var PostViewComponent = /** @class */ (function () {
                function PostViewComponent(route, http) {
                    this.route = route;
                    this.http = http;
                    this.url = "http://localhost:3000/";
                }
                PostViewComponent.prototype.addComment = function (comment) {
                    var _this = this;
                    comment.userId = this.post.userId;
                    comment.name = this.post.user.name;
                    comment.email = this.post.user.email;
                    comment.postId = this.post.id;
                    this.http.post(this.url + "comments/", comment).subscribe(function (resp) {
                        console.log(resp);
                        _this.fetchPost();
                    });
                };
                PostViewComponent.prototype.ngOnInit = function () {
                    this.fetchPost();
                };
                PostViewComponent.prototype.fetchPost = function () {
                    var _this = this;
                    var post_id = this.route.snapshot.paramMap.get("post_id");
                    // ==
                    this.http
                        .get(this.url + "posts/" + post_id, {
                        params: {
                            _expand: "user",
                            _embed: "comments"
                        }
                    })
                        .subscribe(function (post) { return (_this.post = post); });
                };
                PostViewComponent.prototype.removeComment = function (comment) {
                    var _this = this;
                    this.http.delete(this.url + "comments/" + comment.id).subscribe(function (resp) {
                        _this.fetchPost();
                    });
                };
                return PostViewComponent;
            }());
            PostViewComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-post-view",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/post-view/post-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-view.component.scss */ "./src/app/blog/views/post-view/post-view.component.scss")).default]
                })
            ], PostViewComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/views/posts-search-view/posts-search-view.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/blog/views/posts-search-view/posts-search-view.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlld3MvcG9zdHMtc2VhcmNoLXZpZXcvcG9zdHMtc2VhcmNoLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/blog/views/posts-search-view/posts-search-view.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/blog/views/posts-search-view/posts-search-view.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: PostsSearchViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsSearchViewComponent", function () { return PostsSearchViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_search_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search-posts.service */ "./src/app/blog/services/search-posts.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var PostsSearchViewComponent = /** @class */ (function () {
                function PostsSearchViewComponent(searchService) {
                    var _this = this;
                    this.searchService = searchService;
                    this.posts = [];
                    this.posts$ = this.searchService.resultsChange.pipe(
                    // tap(console.log),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (posts) { return (_this.posts = posts); }));
                }
                PostsSearchViewComponent.prototype.search = function (query) {
                    this.searchService.search(query);
                };
                PostsSearchViewComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit");
                };
                PostsSearchViewComponent.prototype.ngOnDestroy = function () {
                    console.log("ngOnDestroy");
                };
                return PostsSearchViewComponent;
            }());
            PostsSearchViewComponent.ctorParameters = function () { return [
                { type: _services_search_posts_service__WEBPACK_IMPORTED_MODULE_2__["SearchPostsService"] }
            ]; };
            PostsSearchViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-posts-search-view",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-search-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-search-view/posts-search-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-search-view.component.scss */ "./src/app/blog/views/posts-search-view/posts-search-view.component.scss")).default]
                })
            ], PostsSearchViewComponent);
            /*
            const clock = interval(1000);
            
            clock.subscribe({
              next: resp => {
                console.log('Clock 2 ',resp);
              }
            });
            
            const sub = clock.subscribe({
              next: resp => {
                console.log("Clock 1", resp);
            
                if (resp > 5) {
                  sub.unsubscribe();
                }
              }
            }); */
            /***/ 
        }),
        /***/ "./src/app/blog/views/posts-view/posts-view.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/blog/views/posts-view/posts-view.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlld3MvcG9zdHMtdmlldy9wb3N0cy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/blog/views/posts-view/posts-view.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/blog/views/posts-view/posts-view.component.ts ***!
          \***************************************************************/
        /*! exports provided: PostsViewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsViewComponent", function () { return PostsViewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PostsViewComponent = /** @class */ (function () {
                function PostsViewComponent(http) {
                    this.http = http;
                    this.posts = [];
                    this.url = "http://localhost:3000/posts";
                }
                PostsViewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http
                        .get(this.url, {
                        headers: {},
                        params: {
                            _limit: "10",
                            _expand: "user"
                        }
                    })
                        .subscribe(function (resp) { return (_this.posts = resp); });
                    // .toPromise()
                    // .then(resp => {
                    //   this.posts = resp;
                    // });
                };
                return PostsViewComponent;
            }());
            PostsViewComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            PostsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-posts-view",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./posts-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/posts-view/posts-view.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./posts-view.component.scss */ "./src/app/blog/views/posts-view/posts-view.component.scss")).default]
                })
            ], PostsViewComponent);
            /***/ 
        }),
        /***/ "./src/app/blog/views/sync-search/sync-search.component.scss": 
        /*!*******************************************************************!*\
          !*** ./src/app/blog/views/sync-search/sync-search.component.scss ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvdmlld3Mvc3luYy1zZWFyY2gvc3luYy1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/blog/views/sync-search/sync-search.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/blog/views/sync-search/sync-search.component.ts ***!
          \*****************************************************************/
        /*! exports provided: SyncSearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncSearchComponent", function () { return SyncSearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SyncSearchComponent = /** @class */ (function () {
                function SyncSearchComponent() {
                }
                SyncSearchComponent.prototype.ngOnInit = function () {
                };
                return SyncSearchComponent;
            }());
            SyncSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sync-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sync-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/views/sync-search/sync-search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sync-search.component.scss */ "./src/app/blog/views/sync-search/sync-search.component.scss")).default]
                })
            ], SyncSearchComponent);
            /***/ 
        }),
        /***/ "./src/app/playlist/playlist.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/playlist/playlist.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/playlist/playlist.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/playlist/playlist.component.ts ***!
          \************************************************/
        /*! exports provided: PlaylistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function () { return PlaylistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"];
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOfContext"];
            var PlaylistComponent = /** @class */ (function () {
                function PlaylistComponent(cdr) {
                    // cdr.detectChanges()
                    this.mode = "show";
                    this.playlists = [
                        {
                            id: 123,
                            name: "Placki 123",
                            color: "#ffff00",
                            favorite: false
                        },
                        {
                            id: 234,
                            name: "Placki 234",
                            color: "#ff00ff",
                            favorite: true
                        },
                        {
                            id: 345,
                            name: "Placki 345",
                            color: "#ff00ff",
                            favorite: false
                        },
                    ];
                    this.playlist = this.playlists[1];
                    // setInterval(()=>{
                    //   const last = this.playlists.pop()
                    //   this.playlists.unshift(last)
                    // },1000 )
                }
                PlaylistComponent.prototype.select = function (p) {
                    this.playlist = p;
                };
                PlaylistComponent.prototype.edit = function () {
                    this.mode = "edit";
                };
                PlaylistComponent.prototype.cancel = function () {
                    this.mode = "show";
                };
                PlaylistComponent.prototype.ngOnInit = function () { };
                return PlaylistComponent;
            }());
            PlaylistComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-playlist, .placki-playlist",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.scss */ "./src/app/playlist/playlist.component.scss")).default]
                })
            ], PlaylistComponent);
            // console.log(PlaylistComponent)
            /***/ 
        }),
        /***/ "./src/app/shared/highlight.directive.ts": 
        /*!***********************************************!*\
          !*** ./src/app/shared/highlight.directive.ts ***!
          \***********************************************/
        /*! exports provided: HighlightDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function () { return HighlightDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HighlightDirective = /** @class */ (function () {
                function HighlightDirective(elem) {
                    this.elem = elem;
                }
                HighlightDirective.prototype.ngOnInit = function () {
                    this.elem.nativeElement.style.color = "red";
                };
                return HighlightDirective;
            }());
            HighlightDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            HighlightDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: "[appHighlight]"
                })
            ], HighlightDirective);
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/shared/highlight.directive.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightDirective"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightDirective"]]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Projects\eduweb\programator-angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map