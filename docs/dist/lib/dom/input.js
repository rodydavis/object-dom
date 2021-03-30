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
exports.InputGroup = exports.Input = exports.Label = exports.Form = void 0;
var base_1 = require("../base");
var div_1 = require("./div");
var attrs_1 = require("./attrs");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('form') }, props)) || this;
        _this.onChange = function () { };
        _this.node.addEventListener('change', function () { return _this.onChange(); });
        _this.target = new attrs_1.NodeAttr(_this, 'target', props === null || props === void 0 ? void 0 : props.target);
        _this.acceptCharset = new attrs_1.NodeAttr(_this, 'accept-charset', props === null || props === void 0 ? void 0 : props.acceptCharset);
        _this.method = new attrs_1.NodeAttr(_this, 'method', props === null || props === void 0 ? void 0 : props.method);
        _this.action = new attrs_1.NodeAttr(_this, 'action', props === null || props === void 0 ? void 0 : props.action);
        _this.autocomplete = new attrs_1.NodeAttr(_this, 'autocomplete', props === null || props === void 0 ? void 0 : props.autocomplete);
        _this.novalidate = new attrs_1.NodeAttr(_this, 'novalidate', props === null || props === void 0 ? void 0 : props.novalidate);
        return _this;
    }
    return Form;
}(base_1.GlobalDom));
exports.Form = Form;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('label') }, props)) || this;
        _this.value = props.value;
        _this.input = new attrs_1.NodeAttr(_this, 'for', props === null || props === void 0 ? void 0 : props.input);
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
}(base_1.GlobalDom));
exports.Label = Label;
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
}(base_1.GlobalDom));
exports.Input = Input;
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
}(div_1.Div));
exports.InputGroup = InputGroup;
//# sourceMappingURL=input.js.map