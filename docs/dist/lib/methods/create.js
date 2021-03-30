"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var dom_1 = require("../dom");
function create(props) {
    return new dom_1.Html({
        children: [
            new dom_1.Head({
                children: __spreadArrays([
                    new dom_1.Title({ text: props.title })
                ], (props.meta ? props.meta : []), (props.styles ? props.styles : []), (props.link ? props.link : []))
            }),
            new dom_1.Body({
                children: __spreadArrays((props.children ? props.children : []), (props.scripts ? props.scripts : []))
            })
        ]
    });
}
exports.create = create;
//# sourceMappingURL=create.js.map