var ObjectDom = /** @class */ (function () {
    function ObjectDom(node, styles, children) {
        this._node = node;
        this._styles = styles;
        this._children = [];
        applyNodeStyles(this.node, this.styles);
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            this.addChild(child);
        }
    }
    Object.defineProperty(ObjectDom.prototype, "node", {
        get: function () {
            return this._node;
        },
        enumerable: false,
        configurable: true
    });
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
        enumerable: false,
        configurable: true
    });
    ObjectDom.prototype.addChild = function (value) {
        this._children.push(value);
        if (value instanceof ObjectDom) {
            this._node.append(value.node);
        }
        else {
            this._node.append(value);
        }
    };
    return ObjectDom;
}());
function render(source, target) {
    if (target === void 0) { target = document.body; }
    target.innerHTML = '';
    target.appendChild(source.node);
    console.log('render node', target, source);
}
function applyNodeStyles(node, styles) {
    for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        node.style.setProperty(key, value);
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
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _a, _b;
        return _super.call(this, document.createElement('div'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
    }
    return Div;
}(ObjectDom));
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.display = 'flex';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Flex;
}(Div));
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.flexDirection = 'row';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Row;
}(Flex));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.flexDirection = 'column';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Column;
}(Flex));
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.display = 'grid';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Grid;
}(Div));
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.display = 'block';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Block;
}(Div));
var Inline = /** @class */ (function (_super) {
    __extends(Inline, _super);
    function Inline(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.display = 'inline';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return Inline;
}(Div));
var InlineBlock = /** @class */ (function (_super) {
    __extends(InlineBlock, _super);
    function InlineBlock(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = this;
        props.style.display = 'inline-block';
        _this = _super.call(this, props) || this;
        return _this;
    }
    return InlineBlock;
}(Div));

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(value, props) {
        if (props === void 0) { props = {}; }
        var _a;
        var _this = _super.call(this, document.createElement('p'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, []) || this;
        _this._value = _this.node.innerText = value;
        return _this;
    }
    Object.defineProperty(Text.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.node.innerText = value;
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
        _this._value = _this.node.innerText = value;
        return _this;
    }
    Object.defineProperty(Button.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.node.innerText = value;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(ObjectDom));

export { ObjectDom, render, Div, Flex, Row, Column, Grid, Block, Inline, InlineBlock, Text, Button };
//# sourceMappingURL=object-dom.es5.js.map
