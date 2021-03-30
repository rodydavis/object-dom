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
exports.Math = void 0;
var base_1 = require("../base");
var attrs_1 = require("./attrs");
var Math = /** @class */ (function (_super) {
    __extends(Math, _super);
    function Math(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('math') }, props)) || this;
        _this.href = new attrs_1.NodeAttr(_this, 'href', props === null || props === void 0 ? void 0 : props.href);
        _this.mathbackground = new attrs_1.NodeAttr(_this, 'mathbackground', props === null || props === void 0 ? void 0 : props.mathbackground);
        _this.mathcolor = new attrs_1.NodeAttr(_this, 'mathcolor', props === null || props === void 0 ? void 0 : props.mathcolor);
        _this.display = new attrs_1.NodeAttr(_this, 'display', props === null || props === void 0 ? void 0 : props.display);
        return _this;
    }
    return Math;
}(base_1.GlobalDom));
exports.Math = Math;
// export class MathRow extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mrow'), ...props });
//   }
// }
// export class MathSup extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('msup'), ...props });
//   }
// }
// export class MathI extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mi'), ...props });
//   }
// }
// export class MathO extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mo'), ...props });
//   }
// }
// export class MStyle extends GlobalDom<HTMLElement> {
//   constructor(props: MathProps = {}) {
//     super({ node: document.createElement('mstyle'), ...props });
//   }
// }
//# sourceMappingURL=math.js.map