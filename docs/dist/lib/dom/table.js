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
exports.TableColumnGroup = exports.TableColumn = exports.Caption = exports.Cell = exports.HeaderCell = exports.TableBody = exports.TableFooter = exports.TableHeader = exports.TableRow = exports.Table = exports.tableFromJsonList = void 0;
var base_1 = require("../base");
function tableFromJsonList(data, props) {
    var _a, _b, _c, _d;
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
            var cell = new HeaderCell({ text: value });
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
exports.tableFromJsonList = tableFromJsonList;
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, __assign({ node: document.createElement('table') }, props)) || this;
    }
    return Table;
}(base_1.ObjectDom));
exports.Table = Table;
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        return _super.call(this, __assign({ node: document.createElement('tr') }, props)) || this;
    }
    return TableRow;
}(base_1.ObjectDom));
exports.TableRow = TableRow;
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Section;
}(base_1.ObjectDom));
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
}(base_1.ObjectDom));
exports.HeaderCell = HeaderCell;
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(props) {
        return _super.call(this, __assign({ node: document.createElement('td') }, props)) || this;
    }
    return Cell;
}(base_1.ObjectDom));
exports.Cell = Cell;
var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    function Caption(props) {
        return _super.call(this, __assign({ node: document.createElement('caption') }, props)) || this;
    }
    return Caption;
}(base_1.ObjectDom));
exports.Caption = Caption;
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Col;
}(base_1.ObjectDom));
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