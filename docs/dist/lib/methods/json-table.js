"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonTable = void 0;
var dom_1 = require("../dom");
function jsonTable(data, props) {
    var _a, _b, _c, _d;
    if (props === void 0) { props = {}; }
    var table = new dom_1.Table((_a = props === null || props === void 0 ? void 0 : props.table) !== null && _a !== void 0 ? _a : {});
    var index = 0;
    var headerRow = new dom_1.TableRow((_c = (_b = props === null || props === void 0 ? void 0 : props.headerRow) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.tableRow) !== null && _c !== void 0 ? _c : {});
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        var row = new dom_1.TableRow((_d = props === null || props === void 0 ? void 0 : props.tableRow) !== null && _d !== void 0 ? _d : {});
        for (var _e = 0, _f = Object.entries(item); _e < _f.length; _e++) {
            var _g = _f[_e], key = _g[0], value = _g[1];
            if (index === 0) {
                var cell_1 = new dom_1.HeaderCell({ text: key });
                headerRow.addChild(cell_1);
            }
            var cell = new dom_1.Cell({ text: value });
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
exports.jsonTable = jsonTable;
//# sourceMappingURL=json-table.js.map