"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertClassList = exports.convertCssStyles = void 0;
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
exports.convertCssStyles = convertCssStyles;
function convertClassList(value) {
    if (value) {
        if (typeof value === 'string')
            return value;
        return value.join(' ');
    }
    return undefined;
}
exports.convertClassList = convertClassList;
//# sourceMappingURL=styles.js.map