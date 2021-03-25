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
exports.Wrap = exports.Column = exports.Row = exports.Flex = exports.InlineBlock = exports.Inline = exports.Block = exports.Grid = exports.Div = void 0;
var base_1 = require("../base");
require("html-document/lib/global");
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('div') }, props)) || this;
    }
    return Div;
}(base_1.CoreDom));
exports.Div = Div;
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
exports.Grid = Grid;
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'block', props) || this;
    }
    return Block;
}(Display));
exports.Block = Block;
var Inline = /** @class */ (function (_super) {
    __extends(Inline, _super);
    function Inline(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline', props) || this;
    }
    return Inline;
}(Display));
exports.Inline = Inline;
var InlineBlock = /** @class */ (function (_super) {
    __extends(InlineBlock, _super);
    function InlineBlock(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline-block', props) || this;
    }
    return InlineBlock;
}(Display));
exports.InlineBlock = InlineBlock;
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'flex', props) || this;
    }
    return Flex;
}(Display));
exports.Flex = Flex;
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
exports.Row = Row;
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
exports.Column = Column;
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
exports.Wrap = Wrap;
//# sourceMappingURL=div.js.map