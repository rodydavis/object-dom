"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
function render(source, target) {
    if (target === void 0) { target = document.body; }
    target.innerHTML = '';
    var node = source.build().node;
    source.update = function () {
        node.remove();
        node = source.build().node;
        target.appendChild(node);
    };
    target.appendChild(node);
}
exports.render = render;
//# sourceMappingURL=render.js.map