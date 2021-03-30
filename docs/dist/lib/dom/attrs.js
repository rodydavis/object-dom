"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeAttr = void 0;
var NodeAttr = /** @class */ (function () {
    function NodeAttr(root, key, value) {
        this._root = root;
        this._key = key;
        this._value = value !== null && value !== void 0 ? value : null;
        this.update();
    }
    Object.defineProperty(NodeAttr.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    NodeAttr.prototype.update = function () {
        if (this.value === null) {
            this.clear();
            return;
        }
        if (typeof this.value === 'string') {
            this.node.setAttribute(this._key, this.value);
            this._root.update();
            return;
        }
        if (typeof this.value === 'boolean' && this.value) {
            this.node.setAttribute(this._key, this._key);
            this._root.update();
            return;
        }
        if (typeof this.value === 'number' && this.value) {
            this.node.setAttribute(this._key, this._key);
            this._root.update();
            return;
        }
    };
    NodeAttr.prototype.clear = function () {
        this.node.removeAttribute(this._key);
        this._root.update();
    };
    Object.defineProperty(NodeAttr.prototype, "node", {
        get: function () {
            return this._root.node;
        },
        enumerable: false,
        configurable: true
    });
    return NodeAttr;
}());
exports.NodeAttr = NodeAttr;
//# sourceMappingURL=attrs.js.map