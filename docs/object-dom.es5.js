var ObjectDom = /** @class */ (function () {
    function ObjectDom(node, styles, children) {
        this.node = node;
        this.styles = styles;
        this.children = children;
    }
    ObjectDom.prototype.render = function () {
        var node = this.node;
        if (node instanceof HTMLElement)
            return nodeToHtml(node, this.styles, this.children);
        return node.toString();
    };
    return ObjectDom;
}());
function applyNodeStyles(node, styles) {
    if (styles === null || styles === void 0 ? void 0 : styles.width)
        node.style.width = styles.width;
    if (styles === null || styles === void 0 ? void 0 : styles.height)
        node.style.height = styles.height;
}
function applyNodeChildren(node, children) {
    var nodes = [];
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];
        var childHtml = child.render();
        nodes.push(childHtml);
    }
    if (nodes.length > 0) {
        node.innerHTML = nodes.join('\n');
    }
}
function nodeToHtml(node, styles, children) {
    applyNodeStyles(node, styles);
    applyNodeChildren(node, children);
    return node.outerHTML;
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
        var _this = _super.call(this, value, (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
        _this.value = value;
        return _this;
    }
    return Text;
}(ObjectDom));

function render(source, target) {
    if (target === void 0) { target = document.body; }
    var htmlResult = source.render();
    console.log(htmlResult);
    target.innerHTML = htmlResult;
}

export { render, ObjectDom, Div, Text };
//# sourceMappingURL=object-dom.es5.js.map
