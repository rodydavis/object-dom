var ObjectDom = /** @class */ (function () {
    function ObjectDom(node, styles, children) {
        this.node = node;
        this._styles = styles;
        this._children = children;
        applyNodeStyles(this.node, this.styles);
        applyNodeChildren(this.node, this.children);
    }
    ObjectDom.prototype.update = function () {
        render(this, this.node);
    };
    Object.defineProperty(ObjectDom.prototype, "styles", {
        get: function () {
            return this._styles;
        },
        set: function (value) {
            this._styles = value;
            applyNodeStyles(this.node, this.styles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectDom.prototype, "children", {
        get: function () {
            return this._children;
        },
        set: function (value) {
            this._children = value;
            applyNodeChildren(this.node, this.children);
        },
        enumerable: false,
        configurable: true
    });
    return ObjectDom;
}());
function render(source, target) {
    if (target === void 0) { target = document.body; }
    //   const htmlResult = source.render()
    //   console.log(htmlResult)
    target.innerHTML = '';
    target.appendChild(source.node);
}
function applyNodeStyles(node, styles) {
    if (styles === null || styles === void 0 ? void 0 : styles.width)
        node.style.width = styles.width;
    if (styles === null || styles === void 0 ? void 0 : styles.height)
        node.style.height = styles.height;
}
function applyNodeChildren(node, children) {
    node.innerHTML = '';
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        if (child instanceof ObjectDom) {
            node.append(child.node);
        }
        else {
            node.append(child);
        }
    }
}

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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(props) {
        if (props === void 0) { props = {}; }
        var _a, _b;
        return _super.call(this, document.createElement('div'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
    }
    return Div;
}(ObjectDom));

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(value, props) {
        if (props === void 0) { props = {}; }
        var _a, _b;
        var _this = _super.call(this, document.createElement('p'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
        _this._value = value;
        _this.children = [value];
        return _this;
    }
    Object.defineProperty(Text.prototype, "value", {
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
    return Text;
}(ObjectDom));

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(value, props) {
        var _a, _b;
        var _this = _super.call(this, document.createElement('button'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
        _this._value = value;
        _this.children = [value];
        return _this;
    }
    Object.defineProperty(Button.prototype, "value", {
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
    return Button;
}(ObjectDom));

export { ObjectDom, render, Div, Text, Button };
//# sourceMappingURL=object-dom.es5.js.map
