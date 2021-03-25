"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.Meta = exports.Link = exports.Style = exports.Script = exports.Body = exports.Head = exports.Html = void 0;
var base_1 = require("../base");
var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('html') }, props)) || this;
    }
    return Html;
}(base_1.CoreDom));
exports.Html = Html;
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('head') }, props)) || this;
    }
    return Head;
}(base_1.CoreDom));
exports.Head = Head;
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('body') }, props)) || this;
    }
    return Body;
}(base_1.CoreDom));
exports.Body = Body;
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('script') }, props)) || this;
    }
    return Script;
}(base_1.CoreDom));
exports.Script = Script;
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('style') }, props)) || this;
    }
    return Style;
}(base_1.CoreDom));
exports.Style = Style;
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('link') }, props)) || this;
    }
    return Link;
}(base_1.CoreDom));
exports.Link = Link;
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('meta') }, props)) || this;
    }
    return Meta;
}(base_1.CoreDom));
exports.Meta = Meta;
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('title') }, props)) || this;
    }
    return Title;
}(base_1.CoreDom));
exports.Title = Title;
//# sourceMappingURL=core.js.map