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
exports.MStyle = exports.MathO = exports.MathI = exports.MathSup = exports.MathRow = exports.Math = void 0;
var base_1 = require("../base");
var Math = /** @class */ (function (_super) {
    __extends(Math, _super);
    function Math(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('math') }, props)) || this;
    }
    return Math;
}(base_1.GlobalDom));
exports.Math = Math;
var MathRow = /** @class */ (function (_super) {
    __extends(MathRow, _super);
    function MathRow(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('mrow') }, props)) || this;
    }
    return MathRow;
}(base_1.GlobalDom));
exports.MathRow = MathRow;
var MathSup = /** @class */ (function (_super) {
    __extends(MathSup, _super);
    function MathSup(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('msup') }, props)) || this;
    }
    return MathSup;
}(base_1.GlobalDom));
exports.MathSup = MathSup;
var MathI = /** @class */ (function (_super) {
    __extends(MathI, _super);
    function MathI(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('mi') }, props)) || this;
    }
    return MathI;
}(base_1.GlobalDom));
exports.MathI = MathI;
var MathO = /** @class */ (function (_super) {
    __extends(MathO, _super);
    function MathO(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('mo') }, props)) || this;
    }
    return MathO;
}(base_1.GlobalDom));
exports.MathO = MathO;
var MStyle = /** @class */ (function (_super) {
    __extends(MStyle, _super);
    function MStyle(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('mstyle') }, props)) || this;
    }
    return MStyle;
}(base_1.GlobalDom));
exports.MStyle = MStyle;
//# sourceMappingURL=math.js.map