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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreDom = exports.ObjectDom = void 0;
require("html-document/lib/global");
__exportStar(require("./styles"), exports);
function applyNodeStyle(node, style) {
    for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        node.style.setProperty(key, value);
    }
}
var ObjectDom = /** @class */ (function () {
    function ObjectDom() {
        var _this = this;
        this.update = function () { };
        this.toHtml = function () { return _this.build().node.outerHTML; };
    }
    return ObjectDom;
}());
exports.ObjectDom = ObjectDom;
var CoreDom = /** @class */ (function (_super) {
    __extends(CoreDom, _super);
    function CoreDom(props) {
        var _this = _super.call(this) || this;
        _this.build = function () { return _this; };
        _this._node = props.node;
        _this._style = props.style;
        _this._children = [];
        _this._classList = [];
        _this.id = props.id;
        if (props === null || props === void 0 ? void 0 : props.text)
            _this.node.innerText = props.text;
        if (props === null || props === void 0 ? void 0 : props.className) {
            if (typeof props.className === 'string') {
                _this.addClassName(props.className);
            }
            else {
                props.className.forEach(function (e) { return _this.addClassName(e); });
            }
        }
        if (_this.style)
            applyNodeStyle(_this.node, _this.style);
        if (props === null || props === void 0 ? void 0 : props.children)
            for (var _i = 0, _a = props.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _this.addChild(child);
            }
        return _this;
    }
    Object.defineProperty(CoreDom.prototype, "classList", {
        get: function () {
            return this._classList;
        },
        enumerable: false,
        configurable: true
    });
    CoreDom.prototype.addClassName = function (val) {
        this._classList.push(val);
        this.node.classList.add(val);
    };
    Object.defineProperty(CoreDom.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            if (value)
                this.node.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (value) {
            this._node = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            this._style = value;
            if (this.style)
                applyNodeStyle(this.node, this.style);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    CoreDom.prototype.addChild = function (value) {
        this._children.push(value);
        if (value instanceof ObjectDom) {
            this._node.append(value.build().node);
        }
        else {
            this._node.append(value);
        }
    };
    return CoreDom;
}(ObjectDom));
exports.CoreDom = CoreDom;
//# sourceMappingURL=base.js.map