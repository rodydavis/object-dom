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
exports.InputGroup = exports.ColorInput = exports.EmailInput = exports.NumberInput = exports.FileInput = exports.TextInput = exports.SubmitInput = exports.Input = exports.Label = exports.Form = void 0;
var base_1 = require("../base");
var div_1 = require("./div");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(type, props) {
        var _this = _super.call(this, __assign({ node: document.createElement('form') }, props)) || this;
        _this.onChange = function () { };
        _this.node.addEventListener('change', function () { return _this.onChange(); });
        _this.node.type = type;
        if (props === null || props === void 0 ? void 0 : props.target)
            _this.node.target = props.target;
        if (props === null || props === void 0 ? void 0 : props.acceptCharset)
            _this.node.acceptCharset = props.acceptCharset;
        if (props === null || props === void 0 ? void 0 : props.method)
            _this.node.method = props.method;
        if (props === null || props === void 0 ? void 0 : props.action)
            _this.node.action = props.action;
        if (props === null || props === void 0 ? void 0 : props.novalidate)
            _this.node.noValidate = props.novalidate;
        if (props === null || props === void 0 ? void 0 : props.autocomplete)
            _this.node.autocomplete = props.autocomplete ? 'on' : 'off';
        return _this;
    }
    return Form;
}(base_1.ObjectDom));
exports.Form = Form;
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        var _this = _super.call(this, __assign({ node: document.createElement('label') }, props)) || this;
        if (props === null || props === void 0 ? void 0 : props.value)
            _this.value = props.value;
        if (props === null || props === void 0 ? void 0 : props.input)
            _this.node.htmlFor = props.input;
        return _this;
    }
    Object.defineProperty(Label.prototype, "value", {
        set: function (val) {
            this.node.innerText = val !== null && val !== void 0 ? val : '';
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}(base_1.ObjectDom));
exports.Label = Label;
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(type, props) {
        var _this = _super.call(this, __assign({ node: document.createElement('input') }, props)) || this;
        _this.onChange = function (val) { };
        _this.node.addEventListener('change', function (val) { return _this.onChange(val); });
        _this.node.type = type;
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
}(base_1.ObjectDom));
exports.Input = Input;
var SubmitInput = /** @class */ (function (_super) {
    __extends(SubmitInput, _super);
    function SubmitInput(props) {
        return _super.call(this, 'submit', props) || this;
    }
    return SubmitInput;
}(Input));
exports.SubmitInput = SubmitInput;
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        return _super.call(this, 'text', props) || this;
    }
    return TextInput;
}(Input));
exports.TextInput = TextInput;
var FileInput = /** @class */ (function (_super) {
    __extends(FileInput, _super);
    function FileInput(props) {
        return _super.call(this, 'file', props) || this;
    }
    return FileInput;
}(Input));
exports.FileInput = FileInput;
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput(props) {
        return _super.call(this, 'number', props) || this;
    }
    return NumberInput;
}(Input));
exports.NumberInput = NumberInput;
var EmailInput = /** @class */ (function (_super) {
    __extends(EmailInput, _super);
    function EmailInput(props) {
        return _super.call(this, 'email', props) || this;
    }
    return EmailInput;
}(Input));
exports.EmailInput = EmailInput;
var ColorInput = /** @class */ (function (_super) {
    __extends(ColorInput, _super);
    function ColorInput(props) {
        return _super.call(this, 'color', props) || this;
    }
    return ColorInput;
}(Input));
exports.ColorInput = ColorInput;
var InputGroup = /** @class */ (function (_super) {
    __extends(InputGroup, _super);
    function InputGroup(id, type, props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, { style: props === null || props === void 0 ? void 0 : props.style }) || this;
        var children = [
            new Label(__assign({ input: id }, props === null || props === void 0 ? void 0 : props.label)),
            new Input(type, __assign({ id: id }, props === null || props === void 0 ? void 0 : props.input))
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