"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
function render(source, target) {
    if (target === void 0) { target = document.body; }
    var node = source.render().build();
    source.update = function () {
        if (node)
            node.remove();
        node = source.render().build();
        target.appendChild(node);
    };
    target.appendChild(node);
}
exports.render = render;
//# sourceMappingURL=render.js.map