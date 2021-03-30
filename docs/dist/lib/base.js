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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalDom = exports.ObjectDom = void 0;
var attrs_1 = require("./dom/attrs");
var styles_1 = require("./styles");
var ObjectDom = /** @class */ (function () {
    function ObjectDom() {
        var _this = this;
        this.update = function () { };
        this.toHtml = function (root) { return _this.render().node.outerHTML; };
    }
    return ObjectDom;
}());
exports.ObjectDom = ObjectDom;
var GlobalDom = /** @class */ (function (_super) {
    __extends(GlobalDom, _super);
    function GlobalDom(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.render = function () { return _this; };
        _this.id = new attrs_1.NodeAttr(_this, 'id', props === null || props === void 0 ? void 0 : props.id);
        _this.className = new attrs_1.NodeAttr(_this, 'class', styles_1.convertClassList(props === null || props === void 0 ? void 0 : props.className));
        _this.contentEditable = new attrs_1.NodeAttr(_this, 'contenteditable', props === null || props === void 0 ? void 0 : props.contenteditable);
        _this.accesskey = new attrs_1.NodeAttr(_this, 'accesskey', props === null || props === void 0 ? void 0 : props.accesskey);
        _this.autocapitalize = new attrs_1.NodeAttr(_this, 'autocapitalize', props === null || props === void 0 ? void 0 : props.autocapitalize);
        _this.dir = new attrs_1.NodeAttr(_this, 'dir', props === null || props === void 0 ? void 0 : props.dir);
        _this.draggable = new attrs_1.NodeAttr(_this, 'draggable', props === null || props === void 0 ? void 0 : props.draggable);
        _this.enterkeyhint = new attrs_1.NodeAttr(_this, 'enterkeyhint', props === null || props === void 0 ? void 0 : props.enterkeyhint);
        _this.hidden = new attrs_1.NodeAttr(_this, 'hidden', props === null || props === void 0 ? void 0 : props.hidden);
        _this.inputmode = new attrs_1.NodeAttr(_this, 'inputmode', props === null || props === void 0 ? void 0 : props.inputmode);
        _this.is = new attrs_1.NodeAttr(_this, 'is', props === null || props === void 0 ? void 0 : props.is);
        _this.lang = new attrs_1.NodeAttr(_this, 'lang', props === null || props === void 0 ? void 0 : props.lang);
        _this.nonce = new attrs_1.NodeAttr(_this, 'nonce', props === null || props === void 0 ? void 0 : props.nonce);
        _this.part = new attrs_1.NodeAttr(_this, 'part', props === null || props === void 0 ? void 0 : props.part);
        _this.slot = new attrs_1.NodeAttr(_this, 'slot', props === null || props === void 0 ? void 0 : props.slot);
        _this.spellcheck = new attrs_1.NodeAttr(_this, 'spellcheck', props === null || props === void 0 ? void 0 : props.spellcheck);
        _this.style = new attrs_1.NodeAttr(_this, 'style', styles_1.convertCssStyles(props === null || props === void 0 ? void 0 : props.style));
        _this.tabindex = new attrs_1.NodeAttr(_this, 'tabindex', props === null || props === void 0 ? void 0 : props.tabindex);
        _this.title = new attrs_1.NodeAttr(_this, 'title', props === null || props === void 0 ? void 0 : props.title);
        _this.translate = new attrs_1.NodeAttr(_this, 'translate', props === null || props === void 0 ? void 0 : props.translate);
        return _this;
    }
    Object.defineProperty(GlobalDom.prototype, "node", {
        get: function () {
            var _a;
            var _parent = this.render();
            var _node = _parent.rootNode;
            if ((_a = _parent.props) === null || _a === void 0 ? void 0 : _a.text) {
                _node.innerText = _parent.props.text;
            }
            else {
                _node.innerText = '';
            }
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
            for (var _i = 0, _b = _parent.children; _i < _b.length; _i++) {
                var child = _b[_i];
                _loop_1(child);
            }
            return _node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDom.prototype, "children", {
        get: function () {
            var _a;
            return (_a = this.props.children) !== null && _a !== void 0 ? _a : [];
        },
        set: function (value) {
            this.props.children = value;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GlobalDom.prototype, "rootNode", {
        get: function () {
            var _a;
            return (_a = this.props.node) !== null && _a !== void 0 ? _a : this.render().rootNode;
        },
        set: function (value) {
            this.props.node = value;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    GlobalDom.prototype.addChild = function (value, index) {
        var current = this.children;
        if (index) {
            current.splice(index, 0, value);
        }
        else {
            current.push(value);
        }
        this.children = current;
    };
    GlobalDom.prototype.removeChild = function (index) {
        var current = this.children;
        current.splice(index, 1);
        this.children = current;
    };
    return GlobalDom;
}(ObjectDom));
exports.GlobalDom = GlobalDom;
//# sourceMappingURL=base.js.map