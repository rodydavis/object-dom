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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

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

function convertCssStyles(style) {
    if (style) {
        if (typeof style === 'string')
            return style;
        var results = [];
        for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var _key = key
                .split(/(?=[A-Z])/)
                .join('-')
                .toLowerCase();
            results.push(_key + ": " + value + ";");
        }
        return results.join(' ');
    }
    return undefined;
}
function convertClassList(value) {
    if (value) {
        if (typeof value === 'string')
            return value;
        return value.join(' ');
    }
    return undefined;
}

var ObjectDom = /** @class */ (function () {
    function ObjectDom() {
        var _this = this;
        this.update = function () { };
        this.toHtml = function (root) { return _this.render().node.outerHTML; };
    }
    return ObjectDom;
}());
var GlobalDom = /** @class */ (function (_super) {
    __extends(GlobalDom, _super);
    function GlobalDom(props) {
        var _this = _super.call(this) || this;
        _this.props = props;
        _this.render = function () { return _this; };
        _this.id = new NodeAttr(_this, 'id', props === null || props === void 0 ? void 0 : props.id);
        _this.className = new NodeAttr(_this, 'class', convertClassList(props === null || props === void 0 ? void 0 : props.className));
        _this.contentEditable = new NodeAttr(_this, 'contenteditable', props === null || props === void 0 ? void 0 : props.contenteditable);
        _this.accesskey = new NodeAttr(_this, 'accesskey', props === null || props === void 0 ? void 0 : props.accesskey);
        _this.autocapitalize = new NodeAttr(_this, 'autocapitalize', props === null || props === void 0 ? void 0 : props.autocapitalize);
        _this.dir = new NodeAttr(_this, 'dir', props === null || props === void 0 ? void 0 : props.dir);
        _this.draggable = new NodeAttr(_this, 'draggable', props === null || props === void 0 ? void 0 : props.draggable);
        _this.enterkeyhint = new NodeAttr(_this, 'enterkeyhint', props === null || props === void 0 ? void 0 : props.enterkeyhint);
        _this.hidden = new NodeAttr(_this, 'hidden', props === null || props === void 0 ? void 0 : props.hidden);
        _this.inputmode = new NodeAttr(_this, 'inputmode', props === null || props === void 0 ? void 0 : props.inputmode);
        _this.is = new NodeAttr(_this, 'is', props === null || props === void 0 ? void 0 : props.is);
        _this.lang = new NodeAttr(_this, 'lang', props === null || props === void 0 ? void 0 : props.lang);
        _this.nonce = new NodeAttr(_this, 'nonce', props === null || props === void 0 ? void 0 : props.nonce);
        _this.part = new NodeAttr(_this, 'part', props === null || props === void 0 ? void 0 : props.part);
        _this.slot = new NodeAttr(_this, 'slot', props === null || props === void 0 ? void 0 : props.slot);
        _this.spellcheck = new NodeAttr(_this, 'spellcheck', props === null || props === void 0 ? void 0 : props.spellcheck);
        _this.style = new NodeAttr(_this, 'style', convertCssStyles(props === null || props === void 0 ? void 0 : props.style));
        _this.tabindex = new NodeAttr(_this, 'tabindex', props === null || props === void 0 ? void 0 : props.tabindex);
        _this.title = new NodeAttr(_this, 'title', props === null || props === void 0 ? void 0 : props.title);
        _this.translate = new NodeAttr(_this, 'translate', props === null || props === void 0 ? void 0 : props.translate);
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

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('div') }, props)) || this;
    }
    return Div;
}(GlobalDom));
var Display = /** @class */ (function (_super) {
    __extends(Display, _super);
    function Display(display, props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = display;
        return _this;
    }
    return Display;
}(Div));
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'grid', props) || this;
    }
    return Grid;
}(Display));
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'block', props) || this;
    }
    return Block;
}(Display));
var Inline = /** @class */ (function (_super) {
    __extends(Inline, _super);
    function Inline(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline', props) || this;
    }
    return Inline;
}(Display));
var InlineBlock = /** @class */ (function (_super) {
    __extends(InlineBlock, _super);
    function InlineBlock(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline-block', props) || this;
    }
    return InlineBlock;
}(Display));
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'flex', props) || this;
    }
    return Flex;
}(Display));
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.direction)
            _this.node.style.flexDirection = props.direction;
        return _this;
    }
    return Row;
}(Flex));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.direction)
            _this.node.style.flexDirection = props.direction;
        return _this;
    }
    return Column;
}(Flex));
var Wrap = /** @class */ (function (_super) {
    __extends(Wrap, _super);
    function Wrap(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.direction)
            _this.node.style.flexWrap = props.direction;
        return _this;
    }
    return Wrap;
}(Flex));

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(tag, props) {
        var _this = _super.call(this, __assign({ node: document.createElement(tag) }, props)) || this;
        _this.text = props.text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (text)
                this.node.innerText = text;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(GlobalDom));
var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    function Span(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'span', props) || this;
    }
    return Span;
}(Text));
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'p', props) || this;
    }
    return Paragraph;
}(Text));
var Bold = /** @class */ (function (_super) {
    __extends(Bold, _super);
    function Bold(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'b', props) || this;
    }
    return Bold;
}(Text));
var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'strong', props) || this;
    }
    return Strong;
}(Text));
var Italic = /** @class */ (function (_super) {
    __extends(Italic, _super);
    function Italic(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'i', props) || this;
    }
    return Italic;
}(Text));
var Emphasized = /** @class */ (function (_super) {
    __extends(Emphasized, _super);
    function Emphasized(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'em', props) || this;
    }
    return Emphasized;
}(Text));
var Marked = /** @class */ (function (_super) {
    __extends(Marked, _super);
    function Marked(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'mark', props) || this;
    }
    return Marked;
}(Text));
var Smaller = /** @class */ (function (_super) {
    __extends(Smaller, _super);
    function Smaller(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'small', props) || this;
    }
    return Smaller;
}(Text));
var Deleted = /** @class */ (function (_super) {
    __extends(Deleted, _super);
    function Deleted(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'del', props) || this;
    }
    return Deleted;
}(Text));
var Inserted = /** @class */ (function (_super) {
    __extends(Inserted, _super);
    function Inserted(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'ins', props) || this;
    }
    return Inserted;
}(Text));
var Subscript = /** @class */ (function (_super) {
    __extends(Subscript, _super);
    function Subscript(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'sub', props) || this;
    }
    return Subscript;
}(Text));
var Superscript = /** @class */ (function (_super) {
    __extends(Superscript, _super);
    function Superscript(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'sup', props) || this;
    }
    return Superscript;
}(Text));
var Heading1 = /** @class */ (function (_super) {
    __extends(Heading1, _super);
    function Heading1(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h1', props) || this;
    }
    return Heading1;
}(Text));
var Heading2 = /** @class */ (function (_super) {
    __extends(Heading2, _super);
    function Heading2(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h2', props) || this;
    }
    return Heading2;
}(Text));
var Heading3 = /** @class */ (function (_super) {
    __extends(Heading3, _super);
    function Heading3(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h3', props) || this;
    }
    return Heading3;
}(Text));
var Heading4 = /** @class */ (function (_super) {
    __extends(Heading4, _super);
    function Heading4(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h4', props) || this;
    }
    return Heading4;
}(Text));
var Heading5 = /** @class */ (function (_super) {
    __extends(Heading5, _super);
    function Heading5(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h5', props) || this;
    }
    return Heading5;
}(Text));
var Heading6 = /** @class */ (function (_super) {
    __extends(Heading6, _super);
    function Heading6(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h6', props) || this;
    }
    return Heading6;
}(Text));
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('br') }, props)) || this;
    }
    return Break;
}(GlobalDom));

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('button') }, props)) || this;
        _this.onClick = function () { };
        if (props === null || props === void 0 ? void 0 : props.onClick)
            _this.onClick = props.onClick;
        _this.node.addEventListener('click', function () { return _this.onClick(); });
        _this.text = props.text;
        return _this;
    }
    Object.defineProperty(Button.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (text)
                this.node.innerText = text;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(GlobalDom));

var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('form') }, props)) || this;
        _this.onChange = function () { };
        _this.node.addEventListener('change', function () { return _this.onChange(); });
        _this.target = new NodeAttr(_this, 'target', props === null || props === void 0 ? void 0 : props.target);
        _this.acceptCharset = new NodeAttr(_this, 'accept-charset', props === null || props === void 0 ? void 0 : props.acceptCharset);
        _this.method = new NodeAttr(_this, 'method', props === null || props === void 0 ? void 0 : props.method);
        _this.action = new NodeAttr(_this, 'action', props === null || props === void 0 ? void 0 : props.action);
        _this.autocomplete = new NodeAttr(_this, 'autocomplete', props === null || props === void 0 ? void 0 : props.autocomplete);
        _this.novalidate = new NodeAttr(_this, 'novalidate', props === null || props === void 0 ? void 0 : props.novalidate);
        return _this;
    }
    return Form;
}(GlobalDom));
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('label') }, props)) || this;
        _this.value = props.value;
        _this.input = new NodeAttr(_this, 'for', props === null || props === void 0 ? void 0 : props.input);
        return _this;
    }
    Object.defineProperty(Label.prototype, "value", {
        get: function () {
            return this.node.innerText;
        },
        set: function (val) {
            this.node.innerText = val !== null && val !== void 0 ? val : '';
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}(GlobalDom));
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('input') }, props)) || this;
        _this.onChange = function (val) { };
        _this.node.addEventListener('change', function (val) { return _this.onChange(val); });
        if (props === null || props === void 0 ? void 0 : props.type)
            _this.node.type = props.type;
        if (props === null || props === void 0 ? void 0 : props.name)
            _this.node.name = props.name;
        if (props === null || props === void 0 ? void 0 : props.required)
            _this.node.required = props.required;
        return _this;
    }
    Object.defineProperty(Input.prototype, "value", {
        get: function () {
            var _a;
            return (_a = this.node.value) !== null && _a !== void 0 ? _a : '';
        },
        set: function (val) {
            this.node.value = val !== null && val !== void 0 ? val : '';
        },
        enumerable: false,
        configurable: true
    });
    return Input;
}(GlobalDom));
var InputGroup = /** @class */ (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup(id, type, props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, { style: props === null || props === void 0 ? void 0 : props.style }) || this;
        var children = [
            new Label(__assign({ input: id }, props === null || props === void 0 ? void 0 : props.label)),
            new Input(__assign({ id: id,
                type: type }, props === null || props === void 0 ? void 0 : props.input))
        ];
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            _this.addChild(child);
        }
        return _this;
    }
    return InputGroup;
}(Div));

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('table') }, props)) || this;
    }
    return Table;
}(GlobalDom));
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('tr') }, props)) || this;
    }
    return TableRow;
}(GlobalDom));
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(node, props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Section;
}(GlobalDom));
var TableHeader = /** @class */ (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, document.createElement('thead'), props) || this;
    }
    return TableHeader;
}(Section));
var TableFooter = /** @class */ (function (_super) {
    __extends(TableFooter, _super);
    function TableFooter(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, document.createElement('tfoot'), props) || this;
    }
    return TableFooter;
}(Section));
var TableBody = /** @class */ (function (_super) {
    __extends(TableBody, _super);
    function TableBody(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, document.createElement('tbody'), props) || this;
    }
    return TableBody;
}(Section));
var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('th') }, props)) || this;
        if (props === null || props === void 0 ? void 0 : props.colspan)
            _this.node.colSpan = props.colspan;
        if (props === null || props === void 0 ? void 0 : props.rowspan)
            _this.node.rowSpan = props.rowspan;
        if (props === null || props === void 0 ? void 0 : props.text)
            _this.node.innerText = props.text;
        return _this;
    }
    return HeaderCell;
}(GlobalDom));
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('td') }, props)) || this;
    }
    return Cell;
}(GlobalDom));
var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    function Caption(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('caption') }, props)) || this;
    }
    return Caption;
}(GlobalDom));
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col(node, props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Col;
}(GlobalDom));
var TableColumn = /** @class */ (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, document.createElement('col'), props) || this;
    }
    return TableColumn;
}(Col));
var TableColumnGroup = /** @class */ (function (_super) {
    __extends(TableColumnGroup, _super);
    function TableColumnGroup(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, document.createElement('colgroup'), props) || this;
    }
    return TableColumnGroup;
}(Col));

var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('html') }, props)) || this;
        _this.lang = new NodeAttr(_this, 'lang', props.lang);
        _this.xmlns = new NodeAttr(_this, 'xmlns', props.xmlns);
        return _this;
    }
    return Html;
}(GlobalDom));
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('head') }, props)) || this;
    }
    return Head;
}(GlobalDom));
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('body') }, props)) || this;
    }
    return Body;
}(GlobalDom));
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('script') }, props)) || this;
    }
    return Script;
}(GlobalDom));
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('style') }, props)) || this;
    }
    return Style;
}(GlobalDom));
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('link') }, props)) || this;
    }
    return Link;
}(GlobalDom));
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('meta') }, props)) || this;
    }
    return Meta;
}(GlobalDom));
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('title') }, props)) || this;
    }
    return Title;
}(GlobalDom));
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('template') }, props)) || this;
    }
    return Template;
}(GlobalDom));

var Svg = /** @class */ (function (_super) {
    __extends(Svg, _super);
    function Svg(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('svg') }, props)) || this;
    }
    return Svg;
}(GlobalDom));

var Custom = /** @class */ (function (_super) {
    __extends(Custom, _super);
    function Custom(tag, props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement(tag) }, props)) || this;
    }
    return Custom;
}(GlobalDom));

function jsonTable(data, props) {
    var _a, _b, _c, _d;
    if (props === void 0) { props = {}; }
    var table = new Table((_a = props === null || props === void 0 ? void 0 : props.table) !== null && _a !== void 0 ? _a : {});
    var index = 0;
    var headerRow = new TableRow((_c = (_b = props === null || props === void 0 ? void 0 : props.headerRow) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.tableRow) !== null && _c !== void 0 ? _c : {});
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        var row = new TableRow((_d = props === null || props === void 0 ? void 0 : props.tableRow) !== null && _d !== void 0 ? _d : {});
        for (var _e = 0, _f = Object.entries(item); _e < _f.length; _e++) {
            var _g = _f[_e], key = _g[0], value = _g[1];
            if (index === 0) {
                var cell_1 = new HeaderCell({ text: key });
                headerRow.addChild(cell_1);
            }
            var cell = new Cell({ text: value });
            row.addChild(cell);
        }
        if (index === 0) {
            if (props === null || props === void 0 ? void 0 : props.header) {
                props.header.addChild(headerRow);
                table.addChild(props.header);
            }
            else {
                table.addChild(headerRow);
            }
            index++;
        }
        if (props === null || props === void 0 ? void 0 : props.body) {
            props.body.addChild(row);
        }
        else {
            table.addChild(row);
        }
    }
    if (props === null || props === void 0 ? void 0 : props.body) {
        table.addChild(props.body);
    }
    return table;
}

function render(source, target) {
    if (target === void 0) { target = document.body; }
    var node = source.render().node;
    source.update = function () {
        if (node)
            node.remove();
        node = source.render().node;
        target.appendChild(node);
    };
    target.appendChild(node);
}

function create(props) {
    return new Html({
        children: [
            new Head({
                children: __spreadArrays([
                    new Title({ text: props.title })
                ], (props.meta ? props.meta : []), (props.styles ? props.styles : []), (props.link ? props.link : []))
            }),
            new Body({
                children: __spreadArrays((props.children ? props.children : []), (props.scripts ? props.scripts : []))
            })
        ]
    });
}

export { Block, Body, Bold, Break, Button, Caption, Cell, Column, Custom, Deleted, Div, Emphasized, Flex, Form, GlobalDom, Grid, Head, HeaderCell, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Html, Inline, InlineBlock, Input, InputGroup, Inserted, Italic, Label, Link, Marked, Meta, ObjectDom, Paragraph, Row, Script, Smaller, Span, Strong, Style, Subscript, Superscript, Svg, Table, TableBody, TableColumn, TableColumnGroup, TableFooter, TableHeader, TableRow, Template, Text, Title, Wrap, convertClassList, convertCssStyles, create, jsonTable, render };
//# sourceMappingURL=object-dom.es5.js.map
