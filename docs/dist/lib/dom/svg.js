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
exports.Svg = void 0;
var base_1 = require("../base");
var attrs_1 = require("./attrs");
var Svg = /** @class */ (function (_super) {
    __extends(Svg, _super);
    function Svg(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('svg') }, props)) || this;
        _this.viewbox = new attrs_1.NodeAttr(_this, 'viewbox', props === null || props === void 0 ? void 0 : props.viewbox);
        _this.preserveAspectRatio = new attrs_1.NodeAttr(_this, 'preserve-aspect-ratio', props === null || props === void 0 ? void 0 : props.preserveAspectRatio);
        _this.weight = new attrs_1.NodeAttr(_this, 'weight', props === null || props === void 0 ? void 0 : props.weight);
        _this.height = new attrs_1.NodeAttr(_this, 'height', props === null || props === void 0 ? void 0 : props.height);
        _this.x = new attrs_1.NodeAttr(_this, 'x', props === null || props === void 0 ? void 0 : props.x);
        _this.y = new attrs_1.NodeAttr(_this, 'y', props === null || props === void 0 ? void 0 : props.y);
        return _this;
    }
    return Svg;
}(base_1.GlobalDom));
exports.Svg = Svg;
//# sourceMappingURL=svg.js.map