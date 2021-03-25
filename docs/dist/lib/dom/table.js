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
exports.TableColumnGroup = exports.TableColumn = exports.Caption = exports.Cell = exports.HeaderCell = exports.TableBody = exports.TableFooter = exports.TableHeader = exports.TableRow = exports.Table = void 0;
var base_1 = require("../base");
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, __assign({ node: document.createElement('table') }, props)) || this;
    }
    return Table;
}(base_1.CoreDom));
exports.Table = Table;
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        return _super.call(this, __assign({ node: document.createElement('tr') }, props)) || this;
    }
    return TableRow;
}(base_1.CoreDom));
exports.TableRow = TableRow;
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Section;
}(base_1.CoreDom));
var TableHeader = /** @class */ (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader(props) {
        return _super.call(this, document.createElement('thead'), props) || this;
    }
    return TableHeader;
}(Section));
exports.TableHeader = TableHeader;
var TableFooter = /** @class */ (function (_super) {
    __extends(TableFooter, _super);
    function TableFooter(props) {
        return _super.call(this, document.createElement('tfoot'), props) || this;
    }
    return TableFooter;
}(Section));
exports.TableFooter = TableFooter;
var TableBody = /** @class */ (function (_super) {
    __extends(TableBody, _super);
    function TableBody(props) {
        return _super.call(this, document.createElement('tbody'), props) || this;
    }
    return TableBody;
}(Section));
exports.TableBody = TableBody;
var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell(props) {
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
}(base_1.CoreDom));
exports.HeaderCell = HeaderCell;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(props) {
        return _super.call(this, __assign({ node: document.createElement('td') }, props)) || this;
    }
    return Cell;
}(base_1.CoreDom));
exports.Cell = Cell;
var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    function Caption(props) {
        return _super.call(this, __assign({ node: document.createElement('caption') }, props)) || this;
    }
    return Caption;
}(base_1.CoreDom));
exports.Caption = Caption;
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Col;
}(base_1.CoreDom));
var TableColumn = /** @class */ (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(props) {
        return _super.call(this, document.createElement('col'), props) || this;
    }
    return TableColumn;
}(Col));
exports.TableColumn = TableColumn;
var TableColumnGroup = /** @class */ (function (_super) {
    __extends(TableColumnGroup, _super);
    function TableColumnGroup(props) {
        return _super.call(this, document.createElement('colgroup'), props) || this;
    }
    return TableColumnGroup;
}(Col));
exports.TableColumnGroup = TableColumnGroup;
//# sourceMappingURL=table.js.map