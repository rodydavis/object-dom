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
__exportStar(require("./styles"), exports);
function applyNodeStyle(node, style) {
    for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var _key = key.split(/(?=[A-Z])/).join('-').toLowerCase();
        node.style.setProperty(_key, value);
    }
}
var ObjectDom = /** @class */ (function () {
    function ObjectDom() {
        var _this = this;
        this.update = function () { };
        this.toHtml = function (root) { return _this.render().node.outerHTML; };
    }
    return ObjectDom;
}());
exports.ObjectDom = ObjectDom;
var CoreDom = /** @class */ (function (_super) {
    __extends(CoreDom, _super);
    function CoreDom(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.render = function () { return _this; };
        return _this;
    }
    Object.defineProperty(CoreDom.prototype, "classList", {
        get: function () {
            var _a;
            var _classList = [];
            if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.className) {
                if (typeof this.props.className === 'string') {
                    _classList.push(this.props.className);
                }
                else {
                    this.props.className.forEach(function (e) { return _classList.push(e); });
                }
            }
            return _classList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "id", {
        get: function () {
            return this.props.id;
        },
        set: function (value) {
            this.props.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "rootNode", {
        get: function () {
            var _a;
            return (_a = this.props.node) !== null && _a !== void 0 ? _a : this.render().rootNode;
        },
        set: function (value) {
            this.props.node = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "node", {
        get: function () {
            var _a;
            var _parent = this.render();
            var _node = _parent.rootNode;
            if (_parent.id)
                _node.id = _parent.id;
            if ((_a = _parent.props) === null || _a === void 0 ? void 0 : _a.text) {
                _node.innerText = _parent.props.text;
            }
            else {
                _node.innerText = '';
            }
            for (var _i = 0, _b = _parent.classList; _i < _b.length; _i++) {
                var className = _b[_i];
                _node.classList.add(className);
            }
            if (_parent.style)
                applyNodeStyle(_node, _parent.style);
            var _loop_1 = function (child) {
                if (child instanceof ObjectDom) {
                    var childNode_1 = child.render().node;
                    child.update = function () {
                        if (childNode_1)
                            childNode_1.remove();
                        childNode_1 = child.render().node;
                        _node.appendChild(childNode_1);
                    };
                    _node.appendChild(childNode_1);
                }
                else {
                    _node.append(child);
                }
            };
            for (var _c = 0, _d = _parent.children; _c < _d.length; _c++) {
                var child = _d[_c];
                _loop_1(child);
            }
            return _node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        set: function (value) {
            this.props.style = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "children", {
        get: function () {
            var _a;
            return (_a = this.props.children) !== null && _a !== void 0 ? _a : [];
        },
        set: function (value) {
            this.props.children = value;
        },
        enumerable: false,
        configurable: true
    });
    CoreDom.prototype.addChild = function (value, index) {
        if (this.props.children == undefined) {
            this.props.children = [];
        }
        if (index) {
            this.props.children.splice(index, 0, value);
        }
        else {
            this.props.children.push(value);
        }
    };
    CoreDom.prototype.removeChild = function (index) {
        if (this.props.children == undefined) {
            return;
        }
        this.props.children.splice(index, 1);
    };
    return CoreDom;
}(ObjectDom));
exports.CoreDom = CoreDom;
//# sourceMappingURL=base.js.map