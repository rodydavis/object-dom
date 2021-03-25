import events from 'events';
import stream from 'stream';
import util from 'util';
import buffer from 'buffer';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var Node_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Node = (function () {
    /*
     * @constructs Node
     */

    function Node() {
        _classCallCheck(this, Node);

        this._attributes = {};
    }

    _createClass(Node, [{
        key: 'getAttribute',

        /* ATTRIBUTES */

        /**
         * get attribute's value
         *
         * @method Node#getAttribute
         * @param {String} attributeName
         * @return {String}
         */
        value: function getAttribute(attributeName) {
            return this._attributes[attributeName];
        }
    }, {
        key: 'hasAttribute',

        /**
         * checks if attribute exists for node
         *
         * @method Node#hasAttribute
         * @param {String} attributeName
         * @returns {boolean}
         */
        value: function hasAttribute(attributeName) {
            return attributeName in this._attributes;
        }
    }, {
        key: 'setAttribute',

        /**
         * set attribute's value
         *
         * @method Node#setAttribute
         * @param {String} attributeName
         * @param {String} attributeValue
         */
        value: function setAttribute(attributeName, attributeValue) {
            this._setAttribute(attributeName, attributeValue);
            this._updatedAttribute(attributeName, this._attributes[attributeName]);
        }
    }, {
        key: '_setAttribute',

        /**
         * set attribute's value
         *
         * @internal
         * @param {String} attributeName
         * @param {String} attributeValue
         */
        value: function _setAttribute(attributeName, attributeValue) {
            this._attributes[attributeName] = String(attributeValue);
        }
    }, {
        key: 'removeAttribute',

        /**
         * remove attribute
         *
         * @method Node#removeAttribute
         * @param {String} attributeName
         */
        value: function removeAttribute(attributeName) {
            delete this._attributes[attributeName];
            this._updatedAttribute(attributeName);
        }
    }, {
        key: '_updatedAttribute',

        /**
         * @internal
         * @param {String} attributeName
         */
        value: function _updatedAttribute(attributeName) {}
    }, {
        key: '_toHTML',
        value: function _toHTML() {
            return this.outerHTML;
        }
    }, {
        key: 'addEventListener',

        /* EVENTS */

        /**
         * @property Node#addEventListener
         * @param {string} eventType
         * @param {function} listener
         * @param {boolean} capturingPhase
         */
        value: function addEventListener(eventType, listener, capturingPhase) {
            eventType = eventType.toLowerCase();
            var _eventsKey = capturingPhase ? '_eventsCapturingPhase' : '_eventsBubblingPhase';
            if (!this[_eventsKey]) {
                this[_eventsKey] = new Map();
            }

            var callbacks = undefined;
            if (!this[_eventsKey].has(eventType)) {
                this[_eventsKey].set(eventType, callbacks = []);
            } else {
                callbacks = this[_eventsKey].get(eventType);
            }

            callbacks.push(listener);
            return this;
        }
    }, {
        key: 'removeEventListener',

        /**
         * @method Node#addEventListener
         * @param {string} eventType
         * @param {function} listener
         * @param {boolean} capturingPhase
         */
        value: function removeEventListener(eventType, listener, capturingPhase) {
            eventType = eventType.toLowerCase();
            var _eventsKey = capturingPhase ? '_eventsCapturingPhase' : '_eventsBubblingPhase';
            if (this[_eventsKey] && this[_eventsKey].has(eventType)) {
                var callbacks = this[_eventsKey].get(eventType);
                var i = callbacks.indexOf(listener);
                if (i === -1) {
                    return false;
                }

                callbacks.splice(i, 1);
            }
        }
    }, {
        key: 'dispatchEvent',

        /**
         * @method Node#dispatchEvent
         * @param {Event} event
         * @return {boolean}
         */
        value: function dispatchEvent(event) {
            var _this = this;

            event.target = this;

            // Capturing phase
            var capturingPhase = function capturingPhase(event) {
                if (this._parentNode) {
                    capturingPhase.call(this._parentNode, event);
                }

                if (event.propagationStopped) {
                    return;
                }

                var callbacks = this._eventsCapturingPhase && this._eventsCapturingPhase.get(event.type);
                if (callbacks) {
                    callbacks.some(function (callback) {
                        callback(event);
                        return event.immediatePropagationStopped;
                    });
                }
            };

            capturingPhase.call(this, event);

            // Bubbling phase
            if (!event.propagationStopped) {
                (function () {
                    var bubblingPhase = function bubblingPhase(event) {
                        var callbacks = this._eventsBubblingPhase && this._eventsBubblingPhase.get(event.type);
                        if (callbacks) {
                            callbacks.some(function (callback) {
                                callback(event);
                                return event.immediatePropagationStopped;
                            });
                        }

                        if (!event.propagationStopped && this._parentNode) {
                            bubblingPhase.call(this._parentNode, event);
                        }
                    };

                    bubblingPhase.call(_this, event);
                })();
            }

            return !event.defaultPrevented;
        }
    }, {
        key: 'textContent',

        /* CONTENT */

        /**
         * @property Node#textContent
         * @return {String}
         */
        get: function get() {
            return '';
        }
    }]);

    return Node;
})();

exports['default'] = Node;

/**
 * @constant {number} Node.ELEMENT_NODE
 */
Object.defineProperty(Node, 'ELEMENT_NODE', { value: 1 });

/**
 * @constant {number} Node.ATTRIBUTE_NODE
 */
Object.defineProperty(Node, 'ATTRIBUTE_NODE', { value: 2 });

/**
 * @constant {number} Node.TEXT_NODE
 */
Object.defineProperty(Node, 'TEXT_NODE', { value: 3 });

/**
 * @constant {number} Node.CDATA_SECTION_NODE
 */
Object.defineProperty(Node, 'CDATA_SECTION_NODE', { value: 4 });

/**
 * @constant {number} Node.ENTITY_REFERENCE_NODE
 */
Object.defineProperty(Node, 'ENTITY_REFERENCE_NODE', { value: 5 });

/**
 * @constant {number} Node.ENTITY_NODE
 */
Object.defineProperty(Node, 'ENTITY_NODE', { value: 6 });

/**
 * @constant {number} Node.PROCESSING_INSTRUCTION_NODE
 */
Object.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', { value: 7 });

/**
 * @constant {number} Node.COMMENT_NODE
 */
Object.defineProperty(Node, 'COMMENT_NODE', { value: 8 });

/**
 * @constant {number} Node.DOCUMENT_NODE
 */
Object.defineProperty(Node, 'DOCUMENT_NODE', { value: 9 });

/**
 * @constant {number} Node.DOCUMENT_TYPE_NODE
 */
Object.defineProperty(Node, 'DOCUMENT_TYPE_NODE', { value: 10 });

/**
 * @constant {number} Node.DOCUMENT_FRAGMENT_NODE
 */
Object.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', { value: 11 });

/**
 * @constant {number} Node.NOTATION_NODE
 */
Object.defineProperty(Node, 'NOTATION_NODE', { value: 12 });
module.exports = exports['default'];

});

unwrapExports(Node_1);

var Event_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = (function () {
  /**
   * @param {String} type
   */

  function Event(type /*: string*/) {
    _classCallCheck(this, Event);

    /**
     * A boolean indicating whether the event bubbles up through the DOM or not.
     * @member {Boolean} Event#bubbles
     * @readonly
     */
    this.bubbles = false;

    /**
     * A boolean indicating whether the event is cancelable.
     * @member {Boolean} Event#cancelable
     * @readonly
     */
    this.cancelable = false;

    /**
     * A reference to the currently registered target for the event.
     * @member {HTMLElement} Event#currentTarget
     * @readonly
     */
    this.currentTarget = false;

    /**
     * Indicates whether or not event.preventDefault() has been called on the event.
     * @member {Boolean} Event#defaultPrevented
     * @readonly
     */
    this.defaultPrevented = false;

    /**
     * Indicates which phase of the event flow is being processed.
     * @member {Number} Event#eventPhase
     * @readonly
     */
    this.eventPhase = 0;

    /**
     * A reference to the target to which the event was originally dispatched.
     * @member {HTMLElement} Event#target
     * @readonly
     */
    this.target = null;

    /**
     * The time that the event was created.
     * @member {Number} Event#timeStamp
     * @readonly
     */
    this.timeStamp = Date.now() * 1000;

    /**
     * The name of the event (case-insensitive).
     * @member {String} Event#type
     * @readonly
     */
    this.type = type.toLowerCase();

    /**
     * Indicates whether or not the event was initiated by the browser (after a user click for instance)
     * or by a script (using an event creation method)
     * @member {Boolean} Event#isTrusted
     * @readonly
     */
    this.isTrusted = false;
  }

  _createClass(Event, [{
    key: "preventDefault",

    /**
     * @method Event#preventDefault
     */
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "stopImmediatePropagation",

    /**
     * @method Event#stopImmediatePropagation
     */
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = true;
      this.stopPropagation();
    }
  }, {
    key: "stopPropagation",

    /**
     * @method Event#stopPropagation
     */
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
  }, {
    key: "isImmediatePropagationStopped",

    /**
     * @method Event#isImmediatePropagationStopped
     * @return {Boolean}
     */
    value: function isImmediatePropagationStopped() {
      return this.immediatePropagationStopped;
    }
  }]);

  return Event;
})();

exports["default"] = Event;
module.exports = exports["default"];

});

unwrapExports(Event_1);

var escapeHTML_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = escapeHTML;

function escapeHTML(string) {
    if (!string) {
        return string;
    }

    return String(string).replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = exports['default'];

});

unwrapExports(escapeHTML_1);

var Comment_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _utilsEscapeHTML2 = _interopRequireDefault(escapeHTML_1);



var _Node3 = _interopRequireDefault(Node_1);

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/Comment
 * @class Comment
 * @extends Node
 * @param {String} comment
 */

var Comment = (function (_Node) {
  /*
   * @constructs Comment
   *
   * @param {String} comment
   */

  function Comment(comment /*: string*/) {
    _classCallCheck(this, Comment);

    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
    this._value = comment;
  }

  _inherits(Comment, _Node);

  _createClass(Comment, [{
    key: 'innerHTML',

    /**
     * @property Comment#innerHTML
     * @inheritdoc
     */
    get: function get() {
      return '';
    }
  }, {
    key: 'outerHTML',

    /**
     * @inheritdoc
     */
    get: function get() {
      return '<!--' + (0, _utilsEscapeHTML2['default'])(this._value) + '-->';
    }
  }, {
    key: 'data',

    /**
     * Returns comment's value
     *
     * @type {String}
     */
    get: function get() {
      return this._value;
    },

    /**
     * Set comment's value
     *
     * @param {String} data
     */
    set: function set(data) {
      this._value = data;
    }
  }]);

  return Comment;
})(_Node3['default']);

exports['default'] = Comment;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Comment.prototype, 'nodeType', { value: _Node3['default'].COMMENT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
module.exports = exports['default'];

});

unwrapExports(Comment_1);

var decode = {
	"0": 65533,
	"128": 8364,
	"130": 8218,
	"131": 402,
	"132": 8222,
	"133": 8230,
	"134": 8224,
	"135": 8225,
	"136": 710,
	"137": 8240,
	"138": 352,
	"139": 8249,
	"140": 338,
	"142": 381,
	"145": 8216,
	"146": 8217,
	"147": 8220,
	"148": 8221,
	"149": 8226,
	"150": 8211,
	"151": 8212,
	"152": 732,
	"153": 8482,
	"154": 353,
	"155": 8250,
	"156": 339,
	"158": 382,
	"159": 376
};

var decode$1 = /*#__PURE__*/Object.freeze({
    default: decode
});

var decodeMap = getCjsExportFromNamespace(decode$1);

var decode_codepoint = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }

    if (codePoint in decodeMap) {
        codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
        codePoint -= 0x10000;
        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
        codePoint = 0xdc00 | (codePoint & 0x3ff);
    }

    output += String.fromCharCode(codePoint);
    return output;
}

var Aacute = "Á";
var aacute = "á";
var Abreve = "Ă";
var abreve = "ă";
var ac = "∾";
var acd = "∿";
var acE = "∾̳";
var Acirc = "Â";
var acirc = "â";
var acute = "´";
var Acy = "А";
var acy = "а";
var AElig = "Æ";
var aelig = "æ";
var af = "⁡";
var Afr = "𝔄";
var afr = "𝔞";
var Agrave = "À";
var agrave = "à";
var alefsym = "ℵ";
var aleph = "ℵ";
var Alpha = "Α";
var alpha = "α";
var Amacr = "Ā";
var amacr = "ā";
var amalg = "⨿";
var amp = "&";
var AMP = "&";
var andand = "⩕";
var And = "⩓";
var and = "∧";
var andd = "⩜";
var andslope = "⩘";
var andv = "⩚";
var ang = "∠";
var ange = "⦤";
var angle = "∠";
var angmsdaa = "⦨";
var angmsdab = "⦩";
var angmsdac = "⦪";
var angmsdad = "⦫";
var angmsdae = "⦬";
var angmsdaf = "⦭";
var angmsdag = "⦮";
var angmsdah = "⦯";
var angmsd = "∡";
var angrt = "∟";
var angrtvb = "⊾";
var angrtvbd = "⦝";
var angsph = "∢";
var angst = "Å";
var angzarr = "⍼";
var Aogon = "Ą";
var aogon = "ą";
var Aopf = "𝔸";
var aopf = "𝕒";
var apacir = "⩯";
var ap = "≈";
var apE = "⩰";
var ape = "≊";
var apid = "≋";
var apos = "'";
var ApplyFunction = "⁡";
var approx = "≈";
var approxeq = "≊";
var Aring = "Å";
var aring = "å";
var Ascr = "𝒜";
var ascr = "𝒶";
var Assign = "≔";
var ast = "*";
var asymp = "≈";
var asympeq = "≍";
var Atilde = "Ã";
var atilde = "ã";
var Auml = "Ä";
var auml = "ä";
var awconint = "∳";
var awint = "⨑";
var backcong = "≌";
var backepsilon = "϶";
var backprime = "‵";
var backsim = "∽";
var backsimeq = "⋍";
var Backslash = "∖";
var Barv = "⫧";
var barvee = "⊽";
var barwed = "⌅";
var Barwed = "⌆";
var barwedge = "⌅";
var bbrk = "⎵";
var bbrktbrk = "⎶";
var bcong = "≌";
var Bcy = "Б";
var bcy = "б";
var bdquo = "„";
var becaus = "∵";
var because = "∵";
var Because = "∵";
var bemptyv = "⦰";
var bepsi = "϶";
var bernou = "ℬ";
var Bernoullis = "ℬ";
var Beta = "Β";
var beta = "β";
var beth = "ℶ";
var between = "≬";
var Bfr = "𝔅";
var bfr = "𝔟";
var bigcap = "⋂";
var bigcirc = "◯";
var bigcup = "⋃";
var bigodot = "⨀";
var bigoplus = "⨁";
var bigotimes = "⨂";
var bigsqcup = "⨆";
var bigstar = "★";
var bigtriangledown = "▽";
var bigtriangleup = "△";
var biguplus = "⨄";
var bigvee = "⋁";
var bigwedge = "⋀";
var bkarow = "⤍";
var blacklozenge = "⧫";
var blacksquare = "▪";
var blacktriangle = "▴";
var blacktriangledown = "▾";
var blacktriangleleft = "◂";
var blacktriangleright = "▸";
var blank = "␣";
var blk12 = "▒";
var blk14 = "░";
var blk34 = "▓";
var block = "█";
var bne = "=⃥";
var bnequiv = "≡⃥";
var bNot = "⫭";
var bnot = "⌐";
var Bopf = "𝔹";
var bopf = "𝕓";
var bot = "⊥";
var bottom = "⊥";
var bowtie = "⋈";
var boxbox = "⧉";
var boxdl = "┐";
var boxdL = "╕";
var boxDl = "╖";
var boxDL = "╗";
var boxdr = "┌";
var boxdR = "╒";
var boxDr = "╓";
var boxDR = "╔";
var boxh = "─";
var boxH = "═";
var boxhd = "┬";
var boxHd = "╤";
var boxhD = "╥";
var boxHD = "╦";
var boxhu = "┴";
var boxHu = "╧";
var boxhU = "╨";
var boxHU = "╩";
var boxminus = "⊟";
var boxplus = "⊞";
var boxtimes = "⊠";
var boxul = "┘";
var boxuL = "╛";
var boxUl = "╜";
var boxUL = "╝";
var boxur = "└";
var boxuR = "╘";
var boxUr = "╙";
var boxUR = "╚";
var boxv = "│";
var boxV = "║";
var boxvh = "┼";
var boxvH = "╪";
var boxVh = "╫";
var boxVH = "╬";
var boxvl = "┤";
var boxvL = "╡";
var boxVl = "╢";
var boxVL = "╣";
var boxvr = "├";
var boxvR = "╞";
var boxVr = "╟";
var boxVR = "╠";
var bprime = "‵";
var breve = "˘";
var Breve = "˘";
var brvbar = "¦";
var bscr = "𝒷";
var Bscr = "ℬ";
var bsemi = "⁏";
var bsim = "∽";
var bsime = "⋍";
var bsolb = "⧅";
var bsol = "\\";
var bsolhsub = "⟈";
var bull = "•";
var bullet = "•";
var bump = "≎";
var bumpE = "⪮";
var bumpe = "≏";
var Bumpeq = "≎";
var bumpeq = "≏";
var Cacute = "Ć";
var cacute = "ć";
var capand = "⩄";
var capbrcup = "⩉";
var capcap = "⩋";
var cap = "∩";
var Cap = "⋒";
var capcup = "⩇";
var capdot = "⩀";
var CapitalDifferentialD = "ⅅ";
var caps = "∩︀";
var caret = "⁁";
var caron = "ˇ";
var Cayleys = "ℭ";
var ccaps = "⩍";
var Ccaron = "Č";
var ccaron = "č";
var Ccedil = "Ç";
var ccedil = "ç";
var Ccirc = "Ĉ";
var ccirc = "ĉ";
var Cconint = "∰";
var ccups = "⩌";
var ccupssm = "⩐";
var Cdot = "Ċ";
var cdot = "ċ";
var cedil = "¸";
var Cedilla = "¸";
var cemptyv = "⦲";
var cent = "¢";
var centerdot = "·";
var CenterDot = "·";
var cfr = "𝔠";
var Cfr = "ℭ";
var CHcy = "Ч";
var chcy = "ч";
var check = "✓";
var checkmark = "✓";
var Chi = "Χ";
var chi = "χ";
var circ = "ˆ";
var circeq = "≗";
var circlearrowleft = "↺";
var circlearrowright = "↻";
var circledast = "⊛";
var circledcirc = "⊚";
var circleddash = "⊝";
var CircleDot = "⊙";
var circledR = "®";
var circledS = "Ⓢ";
var CircleMinus = "⊖";
var CirclePlus = "⊕";
var CircleTimes = "⊗";
var cir = "○";
var cirE = "⧃";
var cire = "≗";
var cirfnint = "⨐";
var cirmid = "⫯";
var cirscir = "⧂";
var ClockwiseContourIntegral = "∲";
var CloseCurlyDoubleQuote = "”";
var CloseCurlyQuote = "’";
var clubs = "♣";
var clubsuit = "♣";
var colon = ":";
var Colon = "∷";
var Colone = "⩴";
var colone = "≔";
var coloneq = "≔";
var comma = ",";
var commat = "@";
var comp = "∁";
var compfn = "∘";
var complement = "∁";
var complexes = "ℂ";
var cong = "≅";
var congdot = "⩭";
var Congruent = "≡";
var conint = "∮";
var Conint = "∯";
var ContourIntegral = "∮";
var copf = "𝕔";
var Copf = "ℂ";
var coprod = "∐";
var Coproduct = "∐";
var copy = "©";
var COPY = "©";
var copysr = "℗";
var CounterClockwiseContourIntegral = "∳";
var crarr = "↵";
var cross = "✗";
var Cross = "⨯";
var Cscr = "𝒞";
var cscr = "𝒸";
var csub = "⫏";
var csube = "⫑";
var csup = "⫐";
var csupe = "⫒";
var ctdot = "⋯";
var cudarrl = "⤸";
var cudarrr = "⤵";
var cuepr = "⋞";
var cuesc = "⋟";
var cularr = "↶";
var cularrp = "⤽";
var cupbrcap = "⩈";
var cupcap = "⩆";
var CupCap = "≍";
var cup = "∪";
var Cup = "⋓";
var cupcup = "⩊";
var cupdot = "⊍";
var cupor = "⩅";
var cups = "∪︀";
var curarr = "↷";
var curarrm = "⤼";
var curlyeqprec = "⋞";
var curlyeqsucc = "⋟";
var curlyvee = "⋎";
var curlywedge = "⋏";
var curren = "¤";
var curvearrowleft = "↶";
var curvearrowright = "↷";
var cuvee = "⋎";
var cuwed = "⋏";
var cwconint = "∲";
var cwint = "∱";
var cylcty = "⌭";
var dagger = "†";
var Dagger = "‡";
var daleth = "ℸ";
var darr = "↓";
var Darr = "↡";
var dArr = "⇓";
var dash = "‐";
var Dashv = "⫤";
var dashv = "⊣";
var dbkarow = "⤏";
var dblac = "˝";
var Dcaron = "Ď";
var dcaron = "ď";
var Dcy = "Д";
var dcy = "д";
var ddagger = "‡";
var ddarr = "⇊";
var DD = "ⅅ";
var dd = "ⅆ";
var DDotrahd = "⤑";
var ddotseq = "⩷";
var deg = "°";
var Del = "∇";
var Delta = "Δ";
var delta = "δ";
var demptyv = "⦱";
var dfisht = "⥿";
var Dfr = "𝔇";
var dfr = "𝔡";
var dHar = "⥥";
var dharl = "⇃";
var dharr = "⇂";
var DiacriticalAcute = "´";
var DiacriticalDot = "˙";
var DiacriticalDoubleAcute = "˝";
var DiacriticalGrave = "`";
var DiacriticalTilde = "˜";
var diam = "⋄";
var diamond = "⋄";
var Diamond = "⋄";
var diamondsuit = "♦";
var diams = "♦";
var die = "¨";
var DifferentialD = "ⅆ";
var digamma = "ϝ";
var disin = "⋲";
var div = "÷";
var divide = "÷";
var divideontimes = "⋇";
var divonx = "⋇";
var DJcy = "Ђ";
var djcy = "ђ";
var dlcorn = "⌞";
var dlcrop = "⌍";
var dollar = "$";
var Dopf = "𝔻";
var dopf = "𝕕";
var Dot = "¨";
var dot = "˙";
var DotDot = "⃜";
var doteq = "≐";
var doteqdot = "≑";
var DotEqual = "≐";
var dotminus = "∸";
var dotplus = "∔";
var dotsquare = "⊡";
var doublebarwedge = "⌆";
var DoubleContourIntegral = "∯";
var DoubleDot = "¨";
var DoubleDownArrow = "⇓";
var DoubleLeftArrow = "⇐";
var DoubleLeftRightArrow = "⇔";
var DoubleLeftTee = "⫤";
var DoubleLongLeftArrow = "⟸";
var DoubleLongLeftRightArrow = "⟺";
var DoubleLongRightArrow = "⟹";
var DoubleRightArrow = "⇒";
var DoubleRightTee = "⊨";
var DoubleUpArrow = "⇑";
var DoubleUpDownArrow = "⇕";
var DoubleVerticalBar = "∥";
var DownArrowBar = "⤓";
var downarrow = "↓";
var DownArrow = "↓";
var Downarrow = "⇓";
var DownArrowUpArrow = "⇵";
var DownBreve = "̑";
var downdownarrows = "⇊";
var downharpoonleft = "⇃";
var downharpoonright = "⇂";
var DownLeftRightVector = "⥐";
var DownLeftTeeVector = "⥞";
var DownLeftVectorBar = "⥖";
var DownLeftVector = "↽";
var DownRightTeeVector = "⥟";
var DownRightVectorBar = "⥗";
var DownRightVector = "⇁";
var DownTeeArrow = "↧";
var DownTee = "⊤";
var drbkarow = "⤐";
var drcorn = "⌟";
var drcrop = "⌌";
var Dscr = "𝒟";
var dscr = "𝒹";
var DScy = "Ѕ";
var dscy = "ѕ";
var dsol = "⧶";
var Dstrok = "Đ";
var dstrok = "đ";
var dtdot = "⋱";
var dtri = "▿";
var dtrif = "▾";
var duarr = "⇵";
var duhar = "⥯";
var dwangle = "⦦";
var DZcy = "Џ";
var dzcy = "џ";
var dzigrarr = "⟿";
var Eacute = "É";
var eacute = "é";
var easter = "⩮";
var Ecaron = "Ě";
var ecaron = "ě";
var Ecirc = "Ê";
var ecirc = "ê";
var ecir = "≖";
var ecolon = "≕";
var Ecy = "Э";
var ecy = "э";
var eDDot = "⩷";
var Edot = "Ė";
var edot = "ė";
var eDot = "≑";
var ee = "ⅇ";
var efDot = "≒";
var Efr = "𝔈";
var efr = "𝔢";
var eg = "⪚";
var Egrave = "È";
var egrave = "è";
var egs = "⪖";
var egsdot = "⪘";
var el = "⪙";
var Element = "∈";
var elinters = "⏧";
var ell = "ℓ";
var els = "⪕";
var elsdot = "⪗";
var Emacr = "Ē";
var emacr = "ē";
var empty = "∅";
var emptyset = "∅";
var EmptySmallSquare = "◻";
var emptyv = "∅";
var EmptyVerySmallSquare = "▫";
var emsp13 = " ";
var emsp14 = " ";
var emsp = " ";
var ENG = "Ŋ";
var eng = "ŋ";
var ensp = " ";
var Eogon = "Ę";
var eogon = "ę";
var Eopf = "𝔼";
var eopf = "𝕖";
var epar = "⋕";
var eparsl = "⧣";
var eplus = "⩱";
var epsi = "ε";
var Epsilon = "Ε";
var epsilon = "ε";
var epsiv = "ϵ";
var eqcirc = "≖";
var eqcolon = "≕";
var eqsim = "≂";
var eqslantgtr = "⪖";
var eqslantless = "⪕";
var Equal = "⩵";
var equals = "=";
var EqualTilde = "≂";
var equest = "≟";
var Equilibrium = "⇌";
var equiv = "≡";
var equivDD = "⩸";
var eqvparsl = "⧥";
var erarr = "⥱";
var erDot = "≓";
var escr = "ℯ";
var Escr = "ℰ";
var esdot = "≐";
var Esim = "⩳";
var esim = "≂";
var Eta = "Η";
var eta = "η";
var ETH = "Ð";
var eth = "ð";
var Euml = "Ë";
var euml = "ë";
var euro = "€";
var excl = "!";
var exist = "∃";
var Exists = "∃";
var expectation = "ℰ";
var exponentiale = "ⅇ";
var ExponentialE = "ⅇ";
var fallingdotseq = "≒";
var Fcy = "Ф";
var fcy = "ф";
var female = "♀";
var ffilig = "ﬃ";
var fflig = "ﬀ";
var ffllig = "ﬄ";
var Ffr = "𝔉";
var ffr = "𝔣";
var filig = "ﬁ";
var FilledSmallSquare = "◼";
var FilledVerySmallSquare = "▪";
var fjlig = "fj";
var flat = "♭";
var fllig = "ﬂ";
var fltns = "▱";
var fnof = "ƒ";
var Fopf = "𝔽";
var fopf = "𝕗";
var forall = "∀";
var ForAll = "∀";
var fork = "⋔";
var forkv = "⫙";
var Fouriertrf = "ℱ";
var fpartint = "⨍";
var frac12 = "½";
var frac13 = "⅓";
var frac14 = "¼";
var frac15 = "⅕";
var frac16 = "⅙";
var frac18 = "⅛";
var frac23 = "⅔";
var frac25 = "⅖";
var frac34 = "¾";
var frac35 = "⅗";
var frac38 = "⅜";
var frac45 = "⅘";
var frac56 = "⅚";
var frac58 = "⅝";
var frac78 = "⅞";
var frasl = "⁄";
var frown = "⌢";
var fscr = "𝒻";
var Fscr = "ℱ";
var gacute = "ǵ";
var Gamma = "Γ";
var gamma = "γ";
var Gammad = "Ϝ";
var gammad = "ϝ";
var gap = "⪆";
var Gbreve = "Ğ";
var gbreve = "ğ";
var Gcedil = "Ģ";
var Gcirc = "Ĝ";
var gcirc = "ĝ";
var Gcy = "Г";
var gcy = "г";
var Gdot = "Ġ";
var gdot = "ġ";
var ge = "≥";
var gE = "≧";
var gEl = "⪌";
var gel = "⋛";
var geq = "≥";
var geqq = "≧";
var geqslant = "⩾";
var gescc = "⪩";
var ges = "⩾";
var gesdot = "⪀";
var gesdoto = "⪂";
var gesdotol = "⪄";
var gesl = "⋛︀";
var gesles = "⪔";
var Gfr = "𝔊";
var gfr = "𝔤";
var gg = "≫";
var Gg = "⋙";
var ggg = "⋙";
var gimel = "ℷ";
var GJcy = "Ѓ";
var gjcy = "ѓ";
var gla = "⪥";
var gl = "≷";
var glE = "⪒";
var glj = "⪤";
var gnap = "⪊";
var gnapprox = "⪊";
var gne = "⪈";
var gnE = "≩";
var gneq = "⪈";
var gneqq = "≩";
var gnsim = "⋧";
var Gopf = "𝔾";
var gopf = "𝕘";
var grave = "`";
var GreaterEqual = "≥";
var GreaterEqualLess = "⋛";
var GreaterFullEqual = "≧";
var GreaterGreater = "⪢";
var GreaterLess = "≷";
var GreaterSlantEqual = "⩾";
var GreaterTilde = "≳";
var Gscr = "𝒢";
var gscr = "ℊ";
var gsim = "≳";
var gsime = "⪎";
var gsiml = "⪐";
var gtcc = "⪧";
var gtcir = "⩺";
var gt = ">";
var GT = ">";
var Gt = "≫";
var gtdot = "⋗";
var gtlPar = "⦕";
var gtquest = "⩼";
var gtrapprox = "⪆";
var gtrarr = "⥸";
var gtrdot = "⋗";
var gtreqless = "⋛";
var gtreqqless = "⪌";
var gtrless = "≷";
var gtrsim = "≳";
var gvertneqq = "≩︀";
var gvnE = "≩︀";
var Hacek = "ˇ";
var hairsp = " ";
var half = "½";
var hamilt = "ℋ";
var HARDcy = "Ъ";
var hardcy = "ъ";
var harrcir = "⥈";
var harr = "↔";
var hArr = "⇔";
var harrw = "↭";
var Hat = "^";
var hbar = "ℏ";
var Hcirc = "Ĥ";
var hcirc = "ĥ";
var hearts = "♥";
var heartsuit = "♥";
var hellip = "…";
var hercon = "⊹";
var hfr = "𝔥";
var Hfr = "ℌ";
var HilbertSpace = "ℋ";
var hksearow = "⤥";
var hkswarow = "⤦";
var hoarr = "⇿";
var homtht = "∻";
var hookleftarrow = "↩";
var hookrightarrow = "↪";
var hopf = "𝕙";
var Hopf = "ℍ";
var horbar = "―";
var HorizontalLine = "─";
var hscr = "𝒽";
var Hscr = "ℋ";
var hslash = "ℏ";
var Hstrok = "Ħ";
var hstrok = "ħ";
var HumpDownHump = "≎";
var HumpEqual = "≏";
var hybull = "⁃";
var hyphen = "‐";
var Iacute = "Í";
var iacute = "í";
var ic = "⁣";
var Icirc = "Î";
var icirc = "î";
var Icy = "И";
var icy = "и";
var Idot = "İ";
var IEcy = "Е";
var iecy = "е";
var iexcl = "¡";
var iff = "⇔";
var ifr = "𝔦";
var Ifr = "ℑ";
var Igrave = "Ì";
var igrave = "ì";
var ii = "ⅈ";
var iiiint = "⨌";
var iiint = "∭";
var iinfin = "⧜";
var iiota = "℩";
var IJlig = "Ĳ";
var ijlig = "ĳ";
var Imacr = "Ī";
var imacr = "ī";
var image = "ℑ";
var ImaginaryI = "ⅈ";
var imagline = "ℐ";
var imagpart = "ℑ";
var imath = "ı";
var Im = "ℑ";
var imof = "⊷";
var imped = "Ƶ";
var Implies = "⇒";
var incare = "℅";
var infin = "∞";
var infintie = "⧝";
var inodot = "ı";
var intcal = "⊺";
var int = "∫";
var Int = "∬";
var integers = "ℤ";
var Integral = "∫";
var intercal = "⊺";
var Intersection = "⋂";
var intlarhk = "⨗";
var intprod = "⨼";
var InvisibleComma = "⁣";
var InvisibleTimes = "⁢";
var IOcy = "Ё";
var iocy = "ё";
var Iogon = "Į";
var iogon = "į";
var Iopf = "𝕀";
var iopf = "𝕚";
var Iota = "Ι";
var iota = "ι";
var iprod = "⨼";
var iquest = "¿";
var iscr = "𝒾";
var Iscr = "ℐ";
var isin = "∈";
var isindot = "⋵";
var isinE = "⋹";
var isins = "⋴";
var isinsv = "⋳";
var isinv = "∈";
var it = "⁢";
var Itilde = "Ĩ";
var itilde = "ĩ";
var Iukcy = "І";
var iukcy = "і";
var Iuml = "Ï";
var iuml = "ï";
var Jcirc = "Ĵ";
var jcirc = "ĵ";
var Jcy = "Й";
var jcy = "й";
var Jfr = "𝔍";
var jfr = "𝔧";
var jmath = "ȷ";
var Jopf = "𝕁";
var jopf = "𝕛";
var Jscr = "𝒥";
var jscr = "𝒿";
var Jsercy = "Ј";
var jsercy = "ј";
var Jukcy = "Є";
var jukcy = "є";
var Kappa = "Κ";
var kappa = "κ";
var kappav = "ϰ";
var Kcedil = "Ķ";
var kcedil = "ķ";
var Kcy = "К";
var kcy = "к";
var Kfr = "𝔎";
var kfr = "𝔨";
var kgreen = "ĸ";
var KHcy = "Х";
var khcy = "х";
var KJcy = "Ќ";
var kjcy = "ќ";
var Kopf = "𝕂";
var kopf = "𝕜";
var Kscr = "𝒦";
var kscr = "𝓀";
var lAarr = "⇚";
var Lacute = "Ĺ";
var lacute = "ĺ";
var laemptyv = "⦴";
var lagran = "ℒ";
var Lambda = "Λ";
var lambda = "λ";
var lang = "⟨";
var Lang = "⟪";
var langd = "⦑";
var langle = "⟨";
var lap = "⪅";
var Laplacetrf = "ℒ";
var laquo = "«";
var larrb = "⇤";
var larrbfs = "⤟";
var larr = "←";
var Larr = "↞";
var lArr = "⇐";
var larrfs = "⤝";
var larrhk = "↩";
var larrlp = "↫";
var larrpl = "⤹";
var larrsim = "⥳";
var larrtl = "↢";
var latail = "⤙";
var lAtail = "⤛";
var lat = "⪫";
var late = "⪭";
var lates = "⪭︀";
var lbarr = "⤌";
var lBarr = "⤎";
var lbbrk = "❲";
var lbrace = "{";
var lbrack = "[";
var lbrke = "⦋";
var lbrksld = "⦏";
var lbrkslu = "⦍";
var Lcaron = "Ľ";
var lcaron = "ľ";
var Lcedil = "Ļ";
var lcedil = "ļ";
var lceil = "⌈";
var lcub = "{";
var Lcy = "Л";
var lcy = "л";
var ldca = "⤶";
var ldquo = "“";
var ldquor = "„";
var ldrdhar = "⥧";
var ldrushar = "⥋";
var ldsh = "↲";
var le = "≤";
var lE = "≦";
var LeftAngleBracket = "⟨";
var LeftArrowBar = "⇤";
var leftarrow = "←";
var LeftArrow = "←";
var Leftarrow = "⇐";
var LeftArrowRightArrow = "⇆";
var leftarrowtail = "↢";
var LeftCeiling = "⌈";
var LeftDoubleBracket = "⟦";
var LeftDownTeeVector = "⥡";
var LeftDownVectorBar = "⥙";
var LeftDownVector = "⇃";
var LeftFloor = "⌊";
var leftharpoondown = "↽";
var leftharpoonup = "↼";
var leftleftarrows = "⇇";
var leftrightarrow = "↔";
var LeftRightArrow = "↔";
var Leftrightarrow = "⇔";
var leftrightarrows = "⇆";
var leftrightharpoons = "⇋";
var leftrightsquigarrow = "↭";
var LeftRightVector = "⥎";
var LeftTeeArrow = "↤";
var LeftTee = "⊣";
var LeftTeeVector = "⥚";
var leftthreetimes = "⋋";
var LeftTriangleBar = "⧏";
var LeftTriangle = "⊲";
var LeftTriangleEqual = "⊴";
var LeftUpDownVector = "⥑";
var LeftUpTeeVector = "⥠";
var LeftUpVectorBar = "⥘";
var LeftUpVector = "↿";
var LeftVectorBar = "⥒";
var LeftVector = "↼";
var lEg = "⪋";
var leg = "⋚";
var leq = "≤";
var leqq = "≦";
var leqslant = "⩽";
var lescc = "⪨";
var les = "⩽";
var lesdot = "⩿";
var lesdoto = "⪁";
var lesdotor = "⪃";
var lesg = "⋚︀";
var lesges = "⪓";
var lessapprox = "⪅";
var lessdot = "⋖";
var lesseqgtr = "⋚";
var lesseqqgtr = "⪋";
var LessEqualGreater = "⋚";
var LessFullEqual = "≦";
var LessGreater = "≶";
var lessgtr = "≶";
var LessLess = "⪡";
var lesssim = "≲";
var LessSlantEqual = "⩽";
var LessTilde = "≲";
var lfisht = "⥼";
var lfloor = "⌊";
var Lfr = "𝔏";
var lfr = "𝔩";
var lg = "≶";
var lgE = "⪑";
var lHar = "⥢";
var lhard = "↽";
var lharu = "↼";
var lharul = "⥪";
var lhblk = "▄";
var LJcy = "Љ";
var ljcy = "љ";
var llarr = "⇇";
var ll = "≪";
var Ll = "⋘";
var llcorner = "⌞";
var Lleftarrow = "⇚";
var llhard = "⥫";
var lltri = "◺";
var Lmidot = "Ŀ";
var lmidot = "ŀ";
var lmoustache = "⎰";
var lmoust = "⎰";
var lnap = "⪉";
var lnapprox = "⪉";
var lne = "⪇";
var lnE = "≨";
var lneq = "⪇";
var lneqq = "≨";
var lnsim = "⋦";
var loang = "⟬";
var loarr = "⇽";
var lobrk = "⟦";
var longleftarrow = "⟵";
var LongLeftArrow = "⟵";
var Longleftarrow = "⟸";
var longleftrightarrow = "⟷";
var LongLeftRightArrow = "⟷";
var Longleftrightarrow = "⟺";
var longmapsto = "⟼";
var longrightarrow = "⟶";
var LongRightArrow = "⟶";
var Longrightarrow = "⟹";
var looparrowleft = "↫";
var looparrowright = "↬";
var lopar = "⦅";
var Lopf = "𝕃";
var lopf = "𝕝";
var loplus = "⨭";
var lotimes = "⨴";
var lowast = "∗";
var lowbar = "_";
var LowerLeftArrow = "↙";
var LowerRightArrow = "↘";
var loz = "◊";
var lozenge = "◊";
var lozf = "⧫";
var lpar = "(";
var lparlt = "⦓";
var lrarr = "⇆";
var lrcorner = "⌟";
var lrhar = "⇋";
var lrhard = "⥭";
var lrm = "‎";
var lrtri = "⊿";
var lsaquo = "‹";
var lscr = "𝓁";
var Lscr = "ℒ";
var lsh = "↰";
var Lsh = "↰";
var lsim = "≲";
var lsime = "⪍";
var lsimg = "⪏";
var lsqb = "[";
var lsquo = "‘";
var lsquor = "‚";
var Lstrok = "Ł";
var lstrok = "ł";
var ltcc = "⪦";
var ltcir = "⩹";
var lt = "<";
var LT = "<";
var Lt = "≪";
var ltdot = "⋖";
var lthree = "⋋";
var ltimes = "⋉";
var ltlarr = "⥶";
var ltquest = "⩻";
var ltri = "◃";
var ltrie = "⊴";
var ltrif = "◂";
var ltrPar = "⦖";
var lurdshar = "⥊";
var luruhar = "⥦";
var lvertneqq = "≨︀";
var lvnE = "≨︀";
var macr = "¯";
var male = "♂";
var malt = "✠";
var maltese = "✠";
var map = "↦";
var mapsto = "↦";
var mapstodown = "↧";
var mapstoleft = "↤";
var mapstoup = "↥";
var marker = "▮";
var mcomma = "⨩";
var Mcy = "М";
var mcy = "м";
var mdash = "—";
var mDDot = "∺";
var measuredangle = "∡";
var MediumSpace = " ";
var Mellintrf = "ℳ";
var Mfr = "𝔐";
var mfr = "𝔪";
var mho = "℧";
var micro = "µ";
var midast = "*";
var midcir = "⫰";
var mid = "∣";
var middot = "·";
var minusb = "⊟";
var minus = "−";
var minusd = "∸";
var minusdu = "⨪";
var MinusPlus = "∓";
var mlcp = "⫛";
var mldr = "…";
var mnplus = "∓";
var models = "⊧";
var Mopf = "𝕄";
var mopf = "𝕞";
var mp = "∓";
var mscr = "𝓂";
var Mscr = "ℳ";
var mstpos = "∾";
var Mu = "Μ";
var mu = "μ";
var multimap = "⊸";
var mumap = "⊸";
var nabla = "∇";
var Nacute = "Ń";
var nacute = "ń";
var nang = "∠⃒";
var nap = "≉";
var napE = "⩰̸";
var napid = "≋̸";
var napos = "ŉ";
var napprox = "≉";
var natural = "♮";
var naturals = "ℕ";
var natur = "♮";
var nbsp = " ";
var nbump = "≎̸";
var nbumpe = "≏̸";
var ncap = "⩃";
var Ncaron = "Ň";
var ncaron = "ň";
var Ncedil = "Ņ";
var ncedil = "ņ";
var ncong = "≇";
var ncongdot = "⩭̸";
var ncup = "⩂";
var Ncy = "Н";
var ncy = "н";
var ndash = "–";
var nearhk = "⤤";
var nearr = "↗";
var neArr = "⇗";
var nearrow = "↗";
var ne = "≠";
var nedot = "≐̸";
var NegativeMediumSpace = "​";
var NegativeThickSpace = "​";
var NegativeThinSpace = "​";
var NegativeVeryThinSpace = "​";
var nequiv = "≢";
var nesear = "⤨";
var nesim = "≂̸";
var NestedGreaterGreater = "≫";
var NestedLessLess = "≪";
var NewLine = "\n";
var nexist = "∄";
var nexists = "∄";
var Nfr = "𝔑";
var nfr = "𝔫";
var ngE = "≧̸";
var nge = "≱";
var ngeq = "≱";
var ngeqq = "≧̸";
var ngeqslant = "⩾̸";
var nges = "⩾̸";
var nGg = "⋙̸";
var ngsim = "≵";
var nGt = "≫⃒";
var ngt = "≯";
var ngtr = "≯";
var nGtv = "≫̸";
var nharr = "↮";
var nhArr = "⇎";
var nhpar = "⫲";
var ni = "∋";
var nis = "⋼";
var nisd = "⋺";
var niv = "∋";
var NJcy = "Њ";
var njcy = "њ";
var nlarr = "↚";
var nlArr = "⇍";
var nldr = "‥";
var nlE = "≦̸";
var nle = "≰";
var nleftarrow = "↚";
var nLeftarrow = "⇍";
var nleftrightarrow = "↮";
var nLeftrightarrow = "⇎";
var nleq = "≰";
var nleqq = "≦̸";
var nleqslant = "⩽̸";
var nles = "⩽̸";
var nless = "≮";
var nLl = "⋘̸";
var nlsim = "≴";
var nLt = "≪⃒";
var nlt = "≮";
var nltri = "⋪";
var nltrie = "⋬";
var nLtv = "≪̸";
var nmid = "∤";
var NoBreak = "⁠";
var NonBreakingSpace = " ";
var nopf = "𝕟";
var Nopf = "ℕ";
var Not = "⫬";
var not = "¬";
var NotCongruent = "≢";
var NotCupCap = "≭";
var NotDoubleVerticalBar = "∦";
var NotElement = "∉";
var NotEqual = "≠";
var NotEqualTilde = "≂̸";
var NotExists = "∄";
var NotGreater = "≯";
var NotGreaterEqual = "≱";
var NotGreaterFullEqual = "≧̸";
var NotGreaterGreater = "≫̸";
var NotGreaterLess = "≹";
var NotGreaterSlantEqual = "⩾̸";
var NotGreaterTilde = "≵";
var NotHumpDownHump = "≎̸";
var NotHumpEqual = "≏̸";
var notin = "∉";
var notindot = "⋵̸";
var notinE = "⋹̸";
var notinva = "∉";
var notinvb = "⋷";
var notinvc = "⋶";
var NotLeftTriangleBar = "⧏̸";
var NotLeftTriangle = "⋪";
var NotLeftTriangleEqual = "⋬";
var NotLess = "≮";
var NotLessEqual = "≰";
var NotLessGreater = "≸";
var NotLessLess = "≪̸";
var NotLessSlantEqual = "⩽̸";
var NotLessTilde = "≴";
var NotNestedGreaterGreater = "⪢̸";
var NotNestedLessLess = "⪡̸";
var notni = "∌";
var notniva = "∌";
var notnivb = "⋾";
var notnivc = "⋽";
var NotPrecedes = "⊀";
var NotPrecedesEqual = "⪯̸";
var NotPrecedesSlantEqual = "⋠";
var NotReverseElement = "∌";
var NotRightTriangleBar = "⧐̸";
var NotRightTriangle = "⋫";
var NotRightTriangleEqual = "⋭";
var NotSquareSubset = "⊏̸";
var NotSquareSubsetEqual = "⋢";
var NotSquareSuperset = "⊐̸";
var NotSquareSupersetEqual = "⋣";
var NotSubset = "⊂⃒";
var NotSubsetEqual = "⊈";
var NotSucceeds = "⊁";
var NotSucceedsEqual = "⪰̸";
var NotSucceedsSlantEqual = "⋡";
var NotSucceedsTilde = "≿̸";
var NotSuperset = "⊃⃒";
var NotSupersetEqual = "⊉";
var NotTilde = "≁";
var NotTildeEqual = "≄";
var NotTildeFullEqual = "≇";
var NotTildeTilde = "≉";
var NotVerticalBar = "∤";
var nparallel = "∦";
var npar = "∦";
var nparsl = "⫽⃥";
var npart = "∂̸";
var npolint = "⨔";
var npr = "⊀";
var nprcue = "⋠";
var nprec = "⊀";
var npreceq = "⪯̸";
var npre = "⪯̸";
var nrarrc = "⤳̸";
var nrarr = "↛";
var nrArr = "⇏";
var nrarrw = "↝̸";
var nrightarrow = "↛";
var nRightarrow = "⇏";
var nrtri = "⋫";
var nrtrie = "⋭";
var nsc = "⊁";
var nsccue = "⋡";
var nsce = "⪰̸";
var Nscr = "𝒩";
var nscr = "𝓃";
var nshortmid = "∤";
var nshortparallel = "∦";
var nsim = "≁";
var nsime = "≄";
var nsimeq = "≄";
var nsmid = "∤";
var nspar = "∦";
var nsqsube = "⋢";
var nsqsupe = "⋣";
var nsub = "⊄";
var nsubE = "⫅̸";
var nsube = "⊈";
var nsubset = "⊂⃒";
var nsubseteq = "⊈";
var nsubseteqq = "⫅̸";
var nsucc = "⊁";
var nsucceq = "⪰̸";
var nsup = "⊅";
var nsupE = "⫆̸";
var nsupe = "⊉";
var nsupset = "⊃⃒";
var nsupseteq = "⊉";
var nsupseteqq = "⫆̸";
var ntgl = "≹";
var Ntilde = "Ñ";
var ntilde = "ñ";
var ntlg = "≸";
var ntriangleleft = "⋪";
var ntrianglelefteq = "⋬";
var ntriangleright = "⋫";
var ntrianglerighteq = "⋭";
var Nu = "Ν";
var nu = "ν";
var num = "#";
var numero = "№";
var numsp = " ";
var nvap = "≍⃒";
var nvdash = "⊬";
var nvDash = "⊭";
var nVdash = "⊮";
var nVDash = "⊯";
var nvge = "≥⃒";
var nvgt = ">⃒";
var nvHarr = "⤄";
var nvinfin = "⧞";
var nvlArr = "⤂";
var nvle = "≤⃒";
var nvlt = "<⃒";
var nvltrie = "⊴⃒";
var nvrArr = "⤃";
var nvrtrie = "⊵⃒";
var nvsim = "∼⃒";
var nwarhk = "⤣";
var nwarr = "↖";
var nwArr = "⇖";
var nwarrow = "↖";
var nwnear = "⤧";
var Oacute = "Ó";
var oacute = "ó";
var oast = "⊛";
var Ocirc = "Ô";
var ocirc = "ô";
var ocir = "⊚";
var Ocy = "О";
var ocy = "о";
var odash = "⊝";
var Odblac = "Ő";
var odblac = "ő";
var odiv = "⨸";
var odot = "⊙";
var odsold = "⦼";
var OElig = "Œ";
var oelig = "œ";
var ofcir = "⦿";
var Ofr = "𝔒";
var ofr = "𝔬";
var ogon = "˛";
var Ograve = "Ò";
var ograve = "ò";
var ogt = "⧁";
var ohbar = "⦵";
var ohm = "Ω";
var oint = "∮";
var olarr = "↺";
var olcir = "⦾";
var olcross = "⦻";
var oline = "‾";
var olt = "⧀";
var Omacr = "Ō";
var omacr = "ō";
var Omega = "Ω";
var omega = "ω";
var Omicron = "Ο";
var omicron = "ο";
var omid = "⦶";
var ominus = "⊖";
var Oopf = "𝕆";
var oopf = "𝕠";
var opar = "⦷";
var OpenCurlyDoubleQuote = "“";
var OpenCurlyQuote = "‘";
var operp = "⦹";
var oplus = "⊕";
var orarr = "↻";
var Or = "⩔";
var or = "∨";
var ord = "⩝";
var order = "ℴ";
var orderof = "ℴ";
var ordf = "ª";
var ordm = "º";
var origof = "⊶";
var oror = "⩖";
var orslope = "⩗";
var orv = "⩛";
var oS = "Ⓢ";
var Oscr = "𝒪";
var oscr = "ℴ";
var Oslash = "Ø";
var oslash = "ø";
var osol = "⊘";
var Otilde = "Õ";
var otilde = "õ";
var otimesas = "⨶";
var Otimes = "⨷";
var otimes = "⊗";
var Ouml = "Ö";
var ouml = "ö";
var ovbar = "⌽";
var OverBar = "‾";
var OverBrace = "⏞";
var OverBracket = "⎴";
var OverParenthesis = "⏜";
var para = "¶";
var parallel = "∥";
var par = "∥";
var parsim = "⫳";
var parsl = "⫽";
var part = "∂";
var PartialD = "∂";
var Pcy = "П";
var pcy = "п";
var percnt = "%";
var period = ".";
var permil = "‰";
var perp = "⊥";
var pertenk = "‱";
var Pfr = "𝔓";
var pfr = "𝔭";
var Phi = "Φ";
var phi = "φ";
var phiv = "ϕ";
var phmmat = "ℳ";
var phone = "☎";
var Pi = "Π";
var pi = "π";
var pitchfork = "⋔";
var piv = "ϖ";
var planck = "ℏ";
var planckh = "ℎ";
var plankv = "ℏ";
var plusacir = "⨣";
var plusb = "⊞";
var pluscir = "⨢";
var plus = "+";
var plusdo = "∔";
var plusdu = "⨥";
var pluse = "⩲";
var PlusMinus = "±";
var plusmn = "±";
var plussim = "⨦";
var plustwo = "⨧";
var pm = "±";
var Poincareplane = "ℌ";
var pointint = "⨕";
var popf = "𝕡";
var Popf = "ℙ";
var pound = "£";
var prap = "⪷";
var Pr = "⪻";
var pr = "≺";
var prcue = "≼";
var precapprox = "⪷";
var prec = "≺";
var preccurlyeq = "≼";
var Precedes = "≺";
var PrecedesEqual = "⪯";
var PrecedesSlantEqual = "≼";
var PrecedesTilde = "≾";
var preceq = "⪯";
var precnapprox = "⪹";
var precneqq = "⪵";
var precnsim = "⋨";
var pre = "⪯";
var prE = "⪳";
var precsim = "≾";
var prime = "′";
var Prime = "″";
var primes = "ℙ";
var prnap = "⪹";
var prnE = "⪵";
var prnsim = "⋨";
var prod = "∏";
var Product = "∏";
var profalar = "⌮";
var profline = "⌒";
var profsurf = "⌓";
var prop = "∝";
var Proportional = "∝";
var Proportion = "∷";
var propto = "∝";
var prsim = "≾";
var prurel = "⊰";
var Pscr = "𝒫";
var pscr = "𝓅";
var Psi = "Ψ";
var psi = "ψ";
var puncsp = " ";
var Qfr = "𝔔";
var qfr = "𝔮";
var qint = "⨌";
var qopf = "𝕢";
var Qopf = "ℚ";
var qprime = "⁗";
var Qscr = "𝒬";
var qscr = "𝓆";
var quaternions = "ℍ";
var quatint = "⨖";
var quest = "?";
var questeq = "≟";
var quot = "\"";
var QUOT = "\"";
var rAarr = "⇛";
var race = "∽̱";
var Racute = "Ŕ";
var racute = "ŕ";
var radic = "√";
var raemptyv = "⦳";
var rang = "⟩";
var Rang = "⟫";
var rangd = "⦒";
var range = "⦥";
var rangle = "⟩";
var raquo = "»";
var rarrap = "⥵";
var rarrb = "⇥";
var rarrbfs = "⤠";
var rarrc = "⤳";
var rarr = "→";
var Rarr = "↠";
var rArr = "⇒";
var rarrfs = "⤞";
var rarrhk = "↪";
var rarrlp = "↬";
var rarrpl = "⥅";
var rarrsim = "⥴";
var Rarrtl = "⤖";
var rarrtl = "↣";
var rarrw = "↝";
var ratail = "⤚";
var rAtail = "⤜";
var ratio = "∶";
var rationals = "ℚ";
var rbarr = "⤍";
var rBarr = "⤏";
var RBarr = "⤐";
var rbbrk = "❳";
var rbrace = "}";
var rbrack = "]";
var rbrke = "⦌";
var rbrksld = "⦎";
var rbrkslu = "⦐";
var Rcaron = "Ř";
var rcaron = "ř";
var Rcedil = "Ŗ";
var rcedil = "ŗ";
var rceil = "⌉";
var rcub = "}";
var Rcy = "Р";
var rcy = "р";
var rdca = "⤷";
var rdldhar = "⥩";
var rdquo = "”";
var rdquor = "”";
var rdsh = "↳";
var real = "ℜ";
var realine = "ℛ";
var realpart = "ℜ";
var reals = "ℝ";
var Re = "ℜ";
var rect = "▭";
var reg = "®";
var REG = "®";
var ReverseElement = "∋";
var ReverseEquilibrium = "⇋";
var ReverseUpEquilibrium = "⥯";
var rfisht = "⥽";
var rfloor = "⌋";
var rfr = "𝔯";
var Rfr = "ℜ";
var rHar = "⥤";
var rhard = "⇁";
var rharu = "⇀";
var rharul = "⥬";
var Rho = "Ρ";
var rho = "ρ";
var rhov = "ϱ";
var RightAngleBracket = "⟩";
var RightArrowBar = "⇥";
var rightarrow = "→";
var RightArrow = "→";
var Rightarrow = "⇒";
var RightArrowLeftArrow = "⇄";
var rightarrowtail = "↣";
var RightCeiling = "⌉";
var RightDoubleBracket = "⟧";
var RightDownTeeVector = "⥝";
var RightDownVectorBar = "⥕";
var RightDownVector = "⇂";
var RightFloor = "⌋";
var rightharpoondown = "⇁";
var rightharpoonup = "⇀";
var rightleftarrows = "⇄";
var rightleftharpoons = "⇌";
var rightrightarrows = "⇉";
var rightsquigarrow = "↝";
var RightTeeArrow = "↦";
var RightTee = "⊢";
var RightTeeVector = "⥛";
var rightthreetimes = "⋌";
var RightTriangleBar = "⧐";
var RightTriangle = "⊳";
var RightTriangleEqual = "⊵";
var RightUpDownVector = "⥏";
var RightUpTeeVector = "⥜";
var RightUpVectorBar = "⥔";
var RightUpVector = "↾";
var RightVectorBar = "⥓";
var RightVector = "⇀";
var ring = "˚";
var risingdotseq = "≓";
var rlarr = "⇄";
var rlhar = "⇌";
var rlm = "‏";
var rmoustache = "⎱";
var rmoust = "⎱";
var rnmid = "⫮";
var roang = "⟭";
var roarr = "⇾";
var robrk = "⟧";
var ropar = "⦆";
var ropf = "𝕣";
var Ropf = "ℝ";
var roplus = "⨮";
var rotimes = "⨵";
var RoundImplies = "⥰";
var rpar = ")";
var rpargt = "⦔";
var rppolint = "⨒";
var rrarr = "⇉";
var Rrightarrow = "⇛";
var rsaquo = "›";
var rscr = "𝓇";
var Rscr = "ℛ";
var rsh = "↱";
var Rsh = "↱";
var rsqb = "]";
var rsquo = "’";
var rsquor = "’";
var rthree = "⋌";
var rtimes = "⋊";
var rtri = "▹";
var rtrie = "⊵";
var rtrif = "▸";
var rtriltri = "⧎";
var RuleDelayed = "⧴";
var ruluhar = "⥨";
var rx = "℞";
var Sacute = "Ś";
var sacute = "ś";
var sbquo = "‚";
var scap = "⪸";
var Scaron = "Š";
var scaron = "š";
var Sc = "⪼";
var sc = "≻";
var sccue = "≽";
var sce = "⪰";
var scE = "⪴";
var Scedil = "Ş";
var scedil = "ş";
var Scirc = "Ŝ";
var scirc = "ŝ";
var scnap = "⪺";
var scnE = "⪶";
var scnsim = "⋩";
var scpolint = "⨓";
var scsim = "≿";
var Scy = "С";
var scy = "с";
var sdotb = "⊡";
var sdot = "⋅";
var sdote = "⩦";
var searhk = "⤥";
var searr = "↘";
var seArr = "⇘";
var searrow = "↘";
var sect = "§";
var semi = ";";
var seswar = "⤩";
var setminus = "∖";
var setmn = "∖";
var sext = "✶";
var Sfr = "𝔖";
var sfr = "𝔰";
var sfrown = "⌢";
var sharp = "♯";
var SHCHcy = "Щ";
var shchcy = "щ";
var SHcy = "Ш";
var shcy = "ш";
var ShortDownArrow = "↓";
var ShortLeftArrow = "←";
var shortmid = "∣";
var shortparallel = "∥";
var ShortRightArrow = "→";
var ShortUpArrow = "↑";
var shy = "­";
var Sigma = "Σ";
var sigma = "σ";
var sigmaf = "ς";
var sigmav = "ς";
var sim = "∼";
var simdot = "⩪";
var sime = "≃";
var simeq = "≃";
var simg = "⪞";
var simgE = "⪠";
var siml = "⪝";
var simlE = "⪟";
var simne = "≆";
var simplus = "⨤";
var simrarr = "⥲";
var slarr = "←";
var SmallCircle = "∘";
var smallsetminus = "∖";
var smashp = "⨳";
var smeparsl = "⧤";
var smid = "∣";
var smile = "⌣";
var smt = "⪪";
var smte = "⪬";
var smtes = "⪬︀";
var SOFTcy = "Ь";
var softcy = "ь";
var solbar = "⌿";
var solb = "⧄";
var sol = "/";
var Sopf = "𝕊";
var sopf = "𝕤";
var spades = "♠";
var spadesuit = "♠";
var spar = "∥";
var sqcap = "⊓";
var sqcaps = "⊓︀";
var sqcup = "⊔";
var sqcups = "⊔︀";
var Sqrt = "√";
var sqsub = "⊏";
var sqsube = "⊑";
var sqsubset = "⊏";
var sqsubseteq = "⊑";
var sqsup = "⊐";
var sqsupe = "⊒";
var sqsupset = "⊐";
var sqsupseteq = "⊒";
var square = "□";
var Square = "□";
var SquareIntersection = "⊓";
var SquareSubset = "⊏";
var SquareSubsetEqual = "⊑";
var SquareSuperset = "⊐";
var SquareSupersetEqual = "⊒";
var SquareUnion = "⊔";
var squarf = "▪";
var squ = "□";
var squf = "▪";
var srarr = "→";
var Sscr = "𝒮";
var sscr = "𝓈";
var ssetmn = "∖";
var ssmile = "⌣";
var sstarf = "⋆";
var Star = "⋆";
var star = "☆";
var starf = "★";
var straightepsilon = "ϵ";
var straightphi = "ϕ";
var strns = "¯";
var sub = "⊂";
var Sub = "⋐";
var subdot = "⪽";
var subE = "⫅";
var sube = "⊆";
var subedot = "⫃";
var submult = "⫁";
var subnE = "⫋";
var subne = "⊊";
var subplus = "⪿";
var subrarr = "⥹";
var subset = "⊂";
var Subset = "⋐";
var subseteq = "⊆";
var subseteqq = "⫅";
var SubsetEqual = "⊆";
var subsetneq = "⊊";
var subsetneqq = "⫋";
var subsim = "⫇";
var subsub = "⫕";
var subsup = "⫓";
var succapprox = "⪸";
var succ = "≻";
var succcurlyeq = "≽";
var Succeeds = "≻";
var SucceedsEqual = "⪰";
var SucceedsSlantEqual = "≽";
var SucceedsTilde = "≿";
var succeq = "⪰";
var succnapprox = "⪺";
var succneqq = "⪶";
var succnsim = "⋩";
var succsim = "≿";
var SuchThat = "∋";
var sum = "∑";
var Sum = "∑";
var sung = "♪";
var sup1 = "¹";
var sup2 = "²";
var sup3 = "³";
var sup = "⊃";
var Sup = "⋑";
var supdot = "⪾";
var supdsub = "⫘";
var supE = "⫆";
var supe = "⊇";
var supedot = "⫄";
var Superset = "⊃";
var SupersetEqual = "⊇";
var suphsol = "⟉";
var suphsub = "⫗";
var suplarr = "⥻";
var supmult = "⫂";
var supnE = "⫌";
var supne = "⊋";
var supplus = "⫀";
var supset = "⊃";
var Supset = "⋑";
var supseteq = "⊇";
var supseteqq = "⫆";
var supsetneq = "⊋";
var supsetneqq = "⫌";
var supsim = "⫈";
var supsub = "⫔";
var supsup = "⫖";
var swarhk = "⤦";
var swarr = "↙";
var swArr = "⇙";
var swarrow = "↙";
var swnwar = "⤪";
var szlig = "ß";
var Tab = "\t";
var target = "⌖";
var Tau = "Τ";
var tau = "τ";
var tbrk = "⎴";
var Tcaron = "Ť";
var tcaron = "ť";
var Tcedil = "Ţ";
var tcedil = "ţ";
var Tcy = "Т";
var tcy = "т";
var tdot = "⃛";
var telrec = "⌕";
var Tfr = "𝔗";
var tfr = "𝔱";
var there4 = "∴";
var therefore = "∴";
var Therefore = "∴";
var Theta = "Θ";
var theta = "θ";
var thetasym = "ϑ";
var thetav = "ϑ";
var thickapprox = "≈";
var thicksim = "∼";
var ThickSpace = "  ";
var ThinSpace = " ";
var thinsp = " ";
var thkap = "≈";
var thksim = "∼";
var THORN = "Þ";
var thorn = "þ";
var tilde = "˜";
var Tilde = "∼";
var TildeEqual = "≃";
var TildeFullEqual = "≅";
var TildeTilde = "≈";
var timesbar = "⨱";
var timesb = "⊠";
var times = "×";
var timesd = "⨰";
var tint = "∭";
var toea = "⤨";
var topbot = "⌶";
var topcir = "⫱";
var top = "⊤";
var Topf = "𝕋";
var topf = "𝕥";
var topfork = "⫚";
var tosa = "⤩";
var tprime = "‴";
var trade = "™";
var TRADE = "™";
var triangle = "▵";
var triangledown = "▿";
var triangleleft = "◃";
var trianglelefteq = "⊴";
var triangleq = "≜";
var triangleright = "▹";
var trianglerighteq = "⊵";
var tridot = "◬";
var trie = "≜";
var triminus = "⨺";
var TripleDot = "⃛";
var triplus = "⨹";
var trisb = "⧍";
var tritime = "⨻";
var trpezium = "⏢";
var Tscr = "𝒯";
var tscr = "𝓉";
var TScy = "Ц";
var tscy = "ц";
var TSHcy = "Ћ";
var tshcy = "ћ";
var Tstrok = "Ŧ";
var tstrok = "ŧ";
var twixt = "≬";
var twoheadleftarrow = "↞";
var twoheadrightarrow = "↠";
var Uacute = "Ú";
var uacute = "ú";
var uarr = "↑";
var Uarr = "↟";
var uArr = "⇑";
var Uarrocir = "⥉";
var Ubrcy = "Ў";
var ubrcy = "ў";
var Ubreve = "Ŭ";
var ubreve = "ŭ";
var Ucirc = "Û";
var ucirc = "û";
var Ucy = "У";
var ucy = "у";
var udarr = "⇅";
var Udblac = "Ű";
var udblac = "ű";
var udhar = "⥮";
var ufisht = "⥾";
var Ufr = "𝔘";
var ufr = "𝔲";
var Ugrave = "Ù";
var ugrave = "ù";
var uHar = "⥣";
var uharl = "↿";
var uharr = "↾";
var uhblk = "▀";
var ulcorn = "⌜";
var ulcorner = "⌜";
var ulcrop = "⌏";
var ultri = "◸";
var Umacr = "Ū";
var umacr = "ū";
var uml = "¨";
var UnderBar = "_";
var UnderBrace = "⏟";
var UnderBracket = "⎵";
var UnderParenthesis = "⏝";
var Union = "⋃";
var UnionPlus = "⊎";
var Uogon = "Ų";
var uogon = "ų";
var Uopf = "𝕌";
var uopf = "𝕦";
var UpArrowBar = "⤒";
var uparrow = "↑";
var UpArrow = "↑";
var Uparrow = "⇑";
var UpArrowDownArrow = "⇅";
var updownarrow = "↕";
var UpDownArrow = "↕";
var Updownarrow = "⇕";
var UpEquilibrium = "⥮";
var upharpoonleft = "↿";
var upharpoonright = "↾";
var uplus = "⊎";
var UpperLeftArrow = "↖";
var UpperRightArrow = "↗";
var upsi = "υ";
var Upsi = "ϒ";
var upsih = "ϒ";
var Upsilon = "Υ";
var upsilon = "υ";
var UpTeeArrow = "↥";
var UpTee = "⊥";
var upuparrows = "⇈";
var urcorn = "⌝";
var urcorner = "⌝";
var urcrop = "⌎";
var Uring = "Ů";
var uring = "ů";
var urtri = "◹";
var Uscr = "𝒰";
var uscr = "𝓊";
var utdot = "⋰";
var Utilde = "Ũ";
var utilde = "ũ";
var utri = "▵";
var utrif = "▴";
var uuarr = "⇈";
var Uuml = "Ü";
var uuml = "ü";
var uwangle = "⦧";
var vangrt = "⦜";
var varepsilon = "ϵ";
var varkappa = "ϰ";
var varnothing = "∅";
var varphi = "ϕ";
var varpi = "ϖ";
var varpropto = "∝";
var varr = "↕";
var vArr = "⇕";
var varrho = "ϱ";
var varsigma = "ς";
var varsubsetneq = "⊊︀";
var varsubsetneqq = "⫋︀";
var varsupsetneq = "⊋︀";
var varsupsetneqq = "⫌︀";
var vartheta = "ϑ";
var vartriangleleft = "⊲";
var vartriangleright = "⊳";
var vBar = "⫨";
var Vbar = "⫫";
var vBarv = "⫩";
var Vcy = "В";
var vcy = "в";
var vdash = "⊢";
var vDash = "⊨";
var Vdash = "⊩";
var VDash = "⊫";
var Vdashl = "⫦";
var veebar = "⊻";
var vee = "∨";
var Vee = "⋁";
var veeeq = "≚";
var vellip = "⋮";
var verbar = "|";
var Verbar = "‖";
var vert = "|";
var Vert = "‖";
var VerticalBar = "∣";
var VerticalLine = "|";
var VerticalSeparator = "❘";
var VerticalTilde = "≀";
var VeryThinSpace = " ";
var Vfr = "𝔙";
var vfr = "𝔳";
var vltri = "⊲";
var vnsub = "⊂⃒";
var vnsup = "⊃⃒";
var Vopf = "𝕍";
var vopf = "𝕧";
var vprop = "∝";
var vrtri = "⊳";
var Vscr = "𝒱";
var vscr = "𝓋";
var vsubnE = "⫋︀";
var vsubne = "⊊︀";
var vsupnE = "⫌︀";
var vsupne = "⊋︀";
var Vvdash = "⊪";
var vzigzag = "⦚";
var Wcirc = "Ŵ";
var wcirc = "ŵ";
var wedbar = "⩟";
var wedge = "∧";
var Wedge = "⋀";
var wedgeq = "≙";
var weierp = "℘";
var Wfr = "𝔚";
var wfr = "𝔴";
var Wopf = "𝕎";
var wopf = "𝕨";
var wp = "℘";
var wr = "≀";
var wreath = "≀";
var Wscr = "𝒲";
var wscr = "𝓌";
var xcap = "⋂";
var xcirc = "◯";
var xcup = "⋃";
var xdtri = "▽";
var Xfr = "𝔛";
var xfr = "𝔵";
var xharr = "⟷";
var xhArr = "⟺";
var Xi = "Ξ";
var xi = "ξ";
var xlarr = "⟵";
var xlArr = "⟸";
var xmap = "⟼";
var xnis = "⋻";
var xodot = "⨀";
var Xopf = "𝕏";
var xopf = "𝕩";
var xoplus = "⨁";
var xotime = "⨂";
var xrarr = "⟶";
var xrArr = "⟹";
var Xscr = "𝒳";
var xscr = "𝓍";
var xsqcup = "⨆";
var xuplus = "⨄";
var xutri = "△";
var xvee = "⋁";
var xwedge = "⋀";
var Yacute = "Ý";
var yacute = "ý";
var YAcy = "Я";
var yacy = "я";
var Ycirc = "Ŷ";
var ycirc = "ŷ";
var Ycy = "Ы";
var ycy = "ы";
var yen = "¥";
var Yfr = "𝔜";
var yfr = "𝔶";
var YIcy = "Ї";
var yicy = "ї";
var Yopf = "𝕐";
var yopf = "𝕪";
var Yscr = "𝒴";
var yscr = "𝓎";
var YUcy = "Ю";
var yucy = "ю";
var yuml = "ÿ";
var Yuml = "Ÿ";
var Zacute = "Ź";
var zacute = "ź";
var Zcaron = "Ž";
var zcaron = "ž";
var Zcy = "З";
var zcy = "з";
var Zdot = "Ż";
var zdot = "ż";
var zeetrf = "ℨ";
var ZeroWidthSpace = "​";
var Zeta = "Ζ";
var zeta = "ζ";
var zfr = "𝔷";
var Zfr = "ℨ";
var ZHcy = "Ж";
var zhcy = "ж";
var zigrarr = "⇝";
var zopf = "𝕫";
var Zopf = "ℤ";
var Zscr = "𝒵";
var zscr = "𝓏";
var zwj = "‍";
var zwnj = "‌";
var entities = {
	Aacute: Aacute,
	aacute: aacute,
	Abreve: Abreve,
	abreve: abreve,
	ac: ac,
	acd: acd,
	acE: acE,
	Acirc: Acirc,
	acirc: acirc,
	acute: acute,
	Acy: Acy,
	acy: acy,
	AElig: AElig,
	aelig: aelig,
	af: af,
	Afr: Afr,
	afr: afr,
	Agrave: Agrave,
	agrave: agrave,
	alefsym: alefsym,
	aleph: aleph,
	Alpha: Alpha,
	alpha: alpha,
	Amacr: Amacr,
	amacr: amacr,
	amalg: amalg,
	amp: amp,
	AMP: AMP,
	andand: andand,
	And: And,
	and: and,
	andd: andd,
	andslope: andslope,
	andv: andv,
	ang: ang,
	ange: ange,
	angle: angle,
	angmsdaa: angmsdaa,
	angmsdab: angmsdab,
	angmsdac: angmsdac,
	angmsdad: angmsdad,
	angmsdae: angmsdae,
	angmsdaf: angmsdaf,
	angmsdag: angmsdag,
	angmsdah: angmsdah,
	angmsd: angmsd,
	angrt: angrt,
	angrtvb: angrtvb,
	angrtvbd: angrtvbd,
	angsph: angsph,
	angst: angst,
	angzarr: angzarr,
	Aogon: Aogon,
	aogon: aogon,
	Aopf: Aopf,
	aopf: aopf,
	apacir: apacir,
	ap: ap,
	apE: apE,
	ape: ape,
	apid: apid,
	apos: apos,
	ApplyFunction: ApplyFunction,
	approx: approx,
	approxeq: approxeq,
	Aring: Aring,
	aring: aring,
	Ascr: Ascr,
	ascr: ascr,
	Assign: Assign,
	ast: ast,
	asymp: asymp,
	asympeq: asympeq,
	Atilde: Atilde,
	atilde: atilde,
	Auml: Auml,
	auml: auml,
	awconint: awconint,
	awint: awint,
	backcong: backcong,
	backepsilon: backepsilon,
	backprime: backprime,
	backsim: backsim,
	backsimeq: backsimeq,
	Backslash: Backslash,
	Barv: Barv,
	barvee: barvee,
	barwed: barwed,
	Barwed: Barwed,
	barwedge: barwedge,
	bbrk: bbrk,
	bbrktbrk: bbrktbrk,
	bcong: bcong,
	Bcy: Bcy,
	bcy: bcy,
	bdquo: bdquo,
	becaus: becaus,
	because: because,
	Because: Because,
	bemptyv: bemptyv,
	bepsi: bepsi,
	bernou: bernou,
	Bernoullis: Bernoullis,
	Beta: Beta,
	beta: beta,
	beth: beth,
	between: between,
	Bfr: Bfr,
	bfr: bfr,
	bigcap: bigcap,
	bigcirc: bigcirc,
	bigcup: bigcup,
	bigodot: bigodot,
	bigoplus: bigoplus,
	bigotimes: bigotimes,
	bigsqcup: bigsqcup,
	bigstar: bigstar,
	bigtriangledown: bigtriangledown,
	bigtriangleup: bigtriangleup,
	biguplus: biguplus,
	bigvee: bigvee,
	bigwedge: bigwedge,
	bkarow: bkarow,
	blacklozenge: blacklozenge,
	blacksquare: blacksquare,
	blacktriangle: blacktriangle,
	blacktriangledown: blacktriangledown,
	blacktriangleleft: blacktriangleleft,
	blacktriangleright: blacktriangleright,
	blank: blank,
	blk12: blk12,
	blk14: blk14,
	blk34: blk34,
	block: block,
	bne: bne,
	bnequiv: bnequiv,
	bNot: bNot,
	bnot: bnot,
	Bopf: Bopf,
	bopf: bopf,
	bot: bot,
	bottom: bottom,
	bowtie: bowtie,
	boxbox: boxbox,
	boxdl: boxdl,
	boxdL: boxdL,
	boxDl: boxDl,
	boxDL: boxDL,
	boxdr: boxdr,
	boxdR: boxdR,
	boxDr: boxDr,
	boxDR: boxDR,
	boxh: boxh,
	boxH: boxH,
	boxhd: boxhd,
	boxHd: boxHd,
	boxhD: boxhD,
	boxHD: boxHD,
	boxhu: boxhu,
	boxHu: boxHu,
	boxhU: boxhU,
	boxHU: boxHU,
	boxminus: boxminus,
	boxplus: boxplus,
	boxtimes: boxtimes,
	boxul: boxul,
	boxuL: boxuL,
	boxUl: boxUl,
	boxUL: boxUL,
	boxur: boxur,
	boxuR: boxuR,
	boxUr: boxUr,
	boxUR: boxUR,
	boxv: boxv,
	boxV: boxV,
	boxvh: boxvh,
	boxvH: boxvH,
	boxVh: boxVh,
	boxVH: boxVH,
	boxvl: boxvl,
	boxvL: boxvL,
	boxVl: boxVl,
	boxVL: boxVL,
	boxvr: boxvr,
	boxvR: boxvR,
	boxVr: boxVr,
	boxVR: boxVR,
	bprime: bprime,
	breve: breve,
	Breve: Breve,
	brvbar: brvbar,
	bscr: bscr,
	Bscr: Bscr,
	bsemi: bsemi,
	bsim: bsim,
	bsime: bsime,
	bsolb: bsolb,
	bsol: bsol,
	bsolhsub: bsolhsub,
	bull: bull,
	bullet: bullet,
	bump: bump,
	bumpE: bumpE,
	bumpe: bumpe,
	Bumpeq: Bumpeq,
	bumpeq: bumpeq,
	Cacute: Cacute,
	cacute: cacute,
	capand: capand,
	capbrcup: capbrcup,
	capcap: capcap,
	cap: cap,
	Cap: Cap,
	capcup: capcup,
	capdot: capdot,
	CapitalDifferentialD: CapitalDifferentialD,
	caps: caps,
	caret: caret,
	caron: caron,
	Cayleys: Cayleys,
	ccaps: ccaps,
	Ccaron: Ccaron,
	ccaron: ccaron,
	Ccedil: Ccedil,
	ccedil: ccedil,
	Ccirc: Ccirc,
	ccirc: ccirc,
	Cconint: Cconint,
	ccups: ccups,
	ccupssm: ccupssm,
	Cdot: Cdot,
	cdot: cdot,
	cedil: cedil,
	Cedilla: Cedilla,
	cemptyv: cemptyv,
	cent: cent,
	centerdot: centerdot,
	CenterDot: CenterDot,
	cfr: cfr,
	Cfr: Cfr,
	CHcy: CHcy,
	chcy: chcy,
	check: check,
	checkmark: checkmark,
	Chi: Chi,
	chi: chi,
	circ: circ,
	circeq: circeq,
	circlearrowleft: circlearrowleft,
	circlearrowright: circlearrowright,
	circledast: circledast,
	circledcirc: circledcirc,
	circleddash: circleddash,
	CircleDot: CircleDot,
	circledR: circledR,
	circledS: circledS,
	CircleMinus: CircleMinus,
	CirclePlus: CirclePlus,
	CircleTimes: CircleTimes,
	cir: cir,
	cirE: cirE,
	cire: cire,
	cirfnint: cirfnint,
	cirmid: cirmid,
	cirscir: cirscir,
	ClockwiseContourIntegral: ClockwiseContourIntegral,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
	CloseCurlyQuote: CloseCurlyQuote,
	clubs: clubs,
	clubsuit: clubsuit,
	colon: colon,
	Colon: Colon,
	Colone: Colone,
	colone: colone,
	coloneq: coloneq,
	comma: comma,
	commat: commat,
	comp: comp,
	compfn: compfn,
	complement: complement,
	complexes: complexes,
	cong: cong,
	congdot: congdot,
	Congruent: Congruent,
	conint: conint,
	Conint: Conint,
	ContourIntegral: ContourIntegral,
	copf: copf,
	Copf: Copf,
	coprod: coprod,
	Coproduct: Coproduct,
	copy: copy,
	COPY: COPY,
	copysr: copysr,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
	crarr: crarr,
	cross: cross,
	Cross: Cross,
	Cscr: Cscr,
	cscr: cscr,
	csub: csub,
	csube: csube,
	csup: csup,
	csupe: csupe,
	ctdot: ctdot,
	cudarrl: cudarrl,
	cudarrr: cudarrr,
	cuepr: cuepr,
	cuesc: cuesc,
	cularr: cularr,
	cularrp: cularrp,
	cupbrcap: cupbrcap,
	cupcap: cupcap,
	CupCap: CupCap,
	cup: cup,
	Cup: Cup,
	cupcup: cupcup,
	cupdot: cupdot,
	cupor: cupor,
	cups: cups,
	curarr: curarr,
	curarrm: curarrm,
	curlyeqprec: curlyeqprec,
	curlyeqsucc: curlyeqsucc,
	curlyvee: curlyvee,
	curlywedge: curlywedge,
	curren: curren,
	curvearrowleft: curvearrowleft,
	curvearrowright: curvearrowright,
	cuvee: cuvee,
	cuwed: cuwed,
	cwconint: cwconint,
	cwint: cwint,
	cylcty: cylcty,
	dagger: dagger,
	Dagger: Dagger,
	daleth: daleth,
	darr: darr,
	Darr: Darr,
	dArr: dArr,
	dash: dash,
	Dashv: Dashv,
	dashv: dashv,
	dbkarow: dbkarow,
	dblac: dblac,
	Dcaron: Dcaron,
	dcaron: dcaron,
	Dcy: Dcy,
	dcy: dcy,
	ddagger: ddagger,
	ddarr: ddarr,
	DD: DD,
	dd: dd,
	DDotrahd: DDotrahd,
	ddotseq: ddotseq,
	deg: deg,
	Del: Del,
	Delta: Delta,
	delta: delta,
	demptyv: demptyv,
	dfisht: dfisht,
	Dfr: Dfr,
	dfr: dfr,
	dHar: dHar,
	dharl: dharl,
	dharr: dharr,
	DiacriticalAcute: DiacriticalAcute,
	DiacriticalDot: DiacriticalDot,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
	DiacriticalGrave: DiacriticalGrave,
	DiacriticalTilde: DiacriticalTilde,
	diam: diam,
	diamond: diamond,
	Diamond: Diamond,
	diamondsuit: diamondsuit,
	diams: diams,
	die: die,
	DifferentialD: DifferentialD,
	digamma: digamma,
	disin: disin,
	div: div,
	divide: divide,
	divideontimes: divideontimes,
	divonx: divonx,
	DJcy: DJcy,
	djcy: djcy,
	dlcorn: dlcorn,
	dlcrop: dlcrop,
	dollar: dollar,
	Dopf: Dopf,
	dopf: dopf,
	Dot: Dot,
	dot: dot,
	DotDot: DotDot,
	doteq: doteq,
	doteqdot: doteqdot,
	DotEqual: DotEqual,
	dotminus: dotminus,
	dotplus: dotplus,
	dotsquare: dotsquare,
	doublebarwedge: doublebarwedge,
	DoubleContourIntegral: DoubleContourIntegral,
	DoubleDot: DoubleDot,
	DoubleDownArrow: DoubleDownArrow,
	DoubleLeftArrow: DoubleLeftArrow,
	DoubleLeftRightArrow: DoubleLeftRightArrow,
	DoubleLeftTee: DoubleLeftTee,
	DoubleLongLeftArrow: DoubleLongLeftArrow,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
	DoubleLongRightArrow: DoubleLongRightArrow,
	DoubleRightArrow: DoubleRightArrow,
	DoubleRightTee: DoubleRightTee,
	DoubleUpArrow: DoubleUpArrow,
	DoubleUpDownArrow: DoubleUpDownArrow,
	DoubleVerticalBar: DoubleVerticalBar,
	DownArrowBar: DownArrowBar,
	downarrow: downarrow,
	DownArrow: DownArrow,
	Downarrow: Downarrow,
	DownArrowUpArrow: DownArrowUpArrow,
	DownBreve: DownBreve,
	downdownarrows: downdownarrows,
	downharpoonleft: downharpoonleft,
	downharpoonright: downharpoonright,
	DownLeftRightVector: DownLeftRightVector,
	DownLeftTeeVector: DownLeftTeeVector,
	DownLeftVectorBar: DownLeftVectorBar,
	DownLeftVector: DownLeftVector,
	DownRightTeeVector: DownRightTeeVector,
	DownRightVectorBar: DownRightVectorBar,
	DownRightVector: DownRightVector,
	DownTeeArrow: DownTeeArrow,
	DownTee: DownTee,
	drbkarow: drbkarow,
	drcorn: drcorn,
	drcrop: drcrop,
	Dscr: Dscr,
	dscr: dscr,
	DScy: DScy,
	dscy: dscy,
	dsol: dsol,
	Dstrok: Dstrok,
	dstrok: dstrok,
	dtdot: dtdot,
	dtri: dtri,
	dtrif: dtrif,
	duarr: duarr,
	duhar: duhar,
	dwangle: dwangle,
	DZcy: DZcy,
	dzcy: dzcy,
	dzigrarr: dzigrarr,
	Eacute: Eacute,
	eacute: eacute,
	easter: easter,
	Ecaron: Ecaron,
	ecaron: ecaron,
	Ecirc: Ecirc,
	ecirc: ecirc,
	ecir: ecir,
	ecolon: ecolon,
	Ecy: Ecy,
	ecy: ecy,
	eDDot: eDDot,
	Edot: Edot,
	edot: edot,
	eDot: eDot,
	ee: ee,
	efDot: efDot,
	Efr: Efr,
	efr: efr,
	eg: eg,
	Egrave: Egrave,
	egrave: egrave,
	egs: egs,
	egsdot: egsdot,
	el: el,
	Element: Element,
	elinters: elinters,
	ell: ell,
	els: els,
	elsdot: elsdot,
	Emacr: Emacr,
	emacr: emacr,
	empty: empty,
	emptyset: emptyset,
	EmptySmallSquare: EmptySmallSquare,
	emptyv: emptyv,
	EmptyVerySmallSquare: EmptyVerySmallSquare,
	emsp13: emsp13,
	emsp14: emsp14,
	emsp: emsp,
	ENG: ENG,
	eng: eng,
	ensp: ensp,
	Eogon: Eogon,
	eogon: eogon,
	Eopf: Eopf,
	eopf: eopf,
	epar: epar,
	eparsl: eparsl,
	eplus: eplus,
	epsi: epsi,
	Epsilon: Epsilon,
	epsilon: epsilon,
	epsiv: epsiv,
	eqcirc: eqcirc,
	eqcolon: eqcolon,
	eqsim: eqsim,
	eqslantgtr: eqslantgtr,
	eqslantless: eqslantless,
	Equal: Equal,
	equals: equals,
	EqualTilde: EqualTilde,
	equest: equest,
	Equilibrium: Equilibrium,
	equiv: equiv,
	equivDD: equivDD,
	eqvparsl: eqvparsl,
	erarr: erarr,
	erDot: erDot,
	escr: escr,
	Escr: Escr,
	esdot: esdot,
	Esim: Esim,
	esim: esim,
	Eta: Eta,
	eta: eta,
	ETH: ETH,
	eth: eth,
	Euml: Euml,
	euml: euml,
	euro: euro,
	excl: excl,
	exist: exist,
	Exists: Exists,
	expectation: expectation,
	exponentiale: exponentiale,
	ExponentialE: ExponentialE,
	fallingdotseq: fallingdotseq,
	Fcy: Fcy,
	fcy: fcy,
	female: female,
	ffilig: ffilig,
	fflig: fflig,
	ffllig: ffllig,
	Ffr: Ffr,
	ffr: ffr,
	filig: filig,
	FilledSmallSquare: FilledSmallSquare,
	FilledVerySmallSquare: FilledVerySmallSquare,
	fjlig: fjlig,
	flat: flat,
	fllig: fllig,
	fltns: fltns,
	fnof: fnof,
	Fopf: Fopf,
	fopf: fopf,
	forall: forall,
	ForAll: ForAll,
	fork: fork,
	forkv: forkv,
	Fouriertrf: Fouriertrf,
	fpartint: fpartint,
	frac12: frac12,
	frac13: frac13,
	frac14: frac14,
	frac15: frac15,
	frac16: frac16,
	frac18: frac18,
	frac23: frac23,
	frac25: frac25,
	frac34: frac34,
	frac35: frac35,
	frac38: frac38,
	frac45: frac45,
	frac56: frac56,
	frac58: frac58,
	frac78: frac78,
	frasl: frasl,
	frown: frown,
	fscr: fscr,
	Fscr: Fscr,
	gacute: gacute,
	Gamma: Gamma,
	gamma: gamma,
	Gammad: Gammad,
	gammad: gammad,
	gap: gap,
	Gbreve: Gbreve,
	gbreve: gbreve,
	Gcedil: Gcedil,
	Gcirc: Gcirc,
	gcirc: gcirc,
	Gcy: Gcy,
	gcy: gcy,
	Gdot: Gdot,
	gdot: gdot,
	ge: ge,
	gE: gE,
	gEl: gEl,
	gel: gel,
	geq: geq,
	geqq: geqq,
	geqslant: geqslant,
	gescc: gescc,
	ges: ges,
	gesdot: gesdot,
	gesdoto: gesdoto,
	gesdotol: gesdotol,
	gesl: gesl,
	gesles: gesles,
	Gfr: Gfr,
	gfr: gfr,
	gg: gg,
	Gg: Gg,
	ggg: ggg,
	gimel: gimel,
	GJcy: GJcy,
	gjcy: gjcy,
	gla: gla,
	gl: gl,
	glE: glE,
	glj: glj,
	gnap: gnap,
	gnapprox: gnapprox,
	gne: gne,
	gnE: gnE,
	gneq: gneq,
	gneqq: gneqq,
	gnsim: gnsim,
	Gopf: Gopf,
	gopf: gopf,
	grave: grave,
	GreaterEqual: GreaterEqual,
	GreaterEqualLess: GreaterEqualLess,
	GreaterFullEqual: GreaterFullEqual,
	GreaterGreater: GreaterGreater,
	GreaterLess: GreaterLess,
	GreaterSlantEqual: GreaterSlantEqual,
	GreaterTilde: GreaterTilde,
	Gscr: Gscr,
	gscr: gscr,
	gsim: gsim,
	gsime: gsime,
	gsiml: gsiml,
	gtcc: gtcc,
	gtcir: gtcir,
	gt: gt,
	GT: GT,
	Gt: Gt,
	gtdot: gtdot,
	gtlPar: gtlPar,
	gtquest: gtquest,
	gtrapprox: gtrapprox,
	gtrarr: gtrarr,
	gtrdot: gtrdot,
	gtreqless: gtreqless,
	gtreqqless: gtreqqless,
	gtrless: gtrless,
	gtrsim: gtrsim,
	gvertneqq: gvertneqq,
	gvnE: gvnE,
	Hacek: Hacek,
	hairsp: hairsp,
	half: half,
	hamilt: hamilt,
	HARDcy: HARDcy,
	hardcy: hardcy,
	harrcir: harrcir,
	harr: harr,
	hArr: hArr,
	harrw: harrw,
	Hat: Hat,
	hbar: hbar,
	Hcirc: Hcirc,
	hcirc: hcirc,
	hearts: hearts,
	heartsuit: heartsuit,
	hellip: hellip,
	hercon: hercon,
	hfr: hfr,
	Hfr: Hfr,
	HilbertSpace: HilbertSpace,
	hksearow: hksearow,
	hkswarow: hkswarow,
	hoarr: hoarr,
	homtht: homtht,
	hookleftarrow: hookleftarrow,
	hookrightarrow: hookrightarrow,
	hopf: hopf,
	Hopf: Hopf,
	horbar: horbar,
	HorizontalLine: HorizontalLine,
	hscr: hscr,
	Hscr: Hscr,
	hslash: hslash,
	Hstrok: Hstrok,
	hstrok: hstrok,
	HumpDownHump: HumpDownHump,
	HumpEqual: HumpEqual,
	hybull: hybull,
	hyphen: hyphen,
	Iacute: Iacute,
	iacute: iacute,
	ic: ic,
	Icirc: Icirc,
	icirc: icirc,
	Icy: Icy,
	icy: icy,
	Idot: Idot,
	IEcy: IEcy,
	iecy: iecy,
	iexcl: iexcl,
	iff: iff,
	ifr: ifr,
	Ifr: Ifr,
	Igrave: Igrave,
	igrave: igrave,
	ii: ii,
	iiiint: iiiint,
	iiint: iiint,
	iinfin: iinfin,
	iiota: iiota,
	IJlig: IJlig,
	ijlig: ijlig,
	Imacr: Imacr,
	imacr: imacr,
	image: image,
	ImaginaryI: ImaginaryI,
	imagline: imagline,
	imagpart: imagpart,
	imath: imath,
	Im: Im,
	imof: imof,
	imped: imped,
	Implies: Implies,
	incare: incare,
	"in": "∈",
	infin: infin,
	infintie: infintie,
	inodot: inodot,
	intcal: intcal,
	int: int,
	Int: Int,
	integers: integers,
	Integral: Integral,
	intercal: intercal,
	Intersection: Intersection,
	intlarhk: intlarhk,
	intprod: intprod,
	InvisibleComma: InvisibleComma,
	InvisibleTimes: InvisibleTimes,
	IOcy: IOcy,
	iocy: iocy,
	Iogon: Iogon,
	iogon: iogon,
	Iopf: Iopf,
	iopf: iopf,
	Iota: Iota,
	iota: iota,
	iprod: iprod,
	iquest: iquest,
	iscr: iscr,
	Iscr: Iscr,
	isin: isin,
	isindot: isindot,
	isinE: isinE,
	isins: isins,
	isinsv: isinsv,
	isinv: isinv,
	it: it,
	Itilde: Itilde,
	itilde: itilde,
	Iukcy: Iukcy,
	iukcy: iukcy,
	Iuml: Iuml,
	iuml: iuml,
	Jcirc: Jcirc,
	jcirc: jcirc,
	Jcy: Jcy,
	jcy: jcy,
	Jfr: Jfr,
	jfr: jfr,
	jmath: jmath,
	Jopf: Jopf,
	jopf: jopf,
	Jscr: Jscr,
	jscr: jscr,
	Jsercy: Jsercy,
	jsercy: jsercy,
	Jukcy: Jukcy,
	jukcy: jukcy,
	Kappa: Kappa,
	kappa: kappa,
	kappav: kappav,
	Kcedil: Kcedil,
	kcedil: kcedil,
	Kcy: Kcy,
	kcy: kcy,
	Kfr: Kfr,
	kfr: kfr,
	kgreen: kgreen,
	KHcy: KHcy,
	khcy: khcy,
	KJcy: KJcy,
	kjcy: kjcy,
	Kopf: Kopf,
	kopf: kopf,
	Kscr: Kscr,
	kscr: kscr,
	lAarr: lAarr,
	Lacute: Lacute,
	lacute: lacute,
	laemptyv: laemptyv,
	lagran: lagran,
	Lambda: Lambda,
	lambda: lambda,
	lang: lang,
	Lang: Lang,
	langd: langd,
	langle: langle,
	lap: lap,
	Laplacetrf: Laplacetrf,
	laquo: laquo,
	larrb: larrb,
	larrbfs: larrbfs,
	larr: larr,
	Larr: Larr,
	lArr: lArr,
	larrfs: larrfs,
	larrhk: larrhk,
	larrlp: larrlp,
	larrpl: larrpl,
	larrsim: larrsim,
	larrtl: larrtl,
	latail: latail,
	lAtail: lAtail,
	lat: lat,
	late: late,
	lates: lates,
	lbarr: lbarr,
	lBarr: lBarr,
	lbbrk: lbbrk,
	lbrace: lbrace,
	lbrack: lbrack,
	lbrke: lbrke,
	lbrksld: lbrksld,
	lbrkslu: lbrkslu,
	Lcaron: Lcaron,
	lcaron: lcaron,
	Lcedil: Lcedil,
	lcedil: lcedil,
	lceil: lceil,
	lcub: lcub,
	Lcy: Lcy,
	lcy: lcy,
	ldca: ldca,
	ldquo: ldquo,
	ldquor: ldquor,
	ldrdhar: ldrdhar,
	ldrushar: ldrushar,
	ldsh: ldsh,
	le: le,
	lE: lE,
	LeftAngleBracket: LeftAngleBracket,
	LeftArrowBar: LeftArrowBar,
	leftarrow: leftarrow,
	LeftArrow: LeftArrow,
	Leftarrow: Leftarrow,
	LeftArrowRightArrow: LeftArrowRightArrow,
	leftarrowtail: leftarrowtail,
	LeftCeiling: LeftCeiling,
	LeftDoubleBracket: LeftDoubleBracket,
	LeftDownTeeVector: LeftDownTeeVector,
	LeftDownVectorBar: LeftDownVectorBar,
	LeftDownVector: LeftDownVector,
	LeftFloor: LeftFloor,
	leftharpoondown: leftharpoondown,
	leftharpoonup: leftharpoonup,
	leftleftarrows: leftleftarrows,
	leftrightarrow: leftrightarrow,
	LeftRightArrow: LeftRightArrow,
	Leftrightarrow: Leftrightarrow,
	leftrightarrows: leftrightarrows,
	leftrightharpoons: leftrightharpoons,
	leftrightsquigarrow: leftrightsquigarrow,
	LeftRightVector: LeftRightVector,
	LeftTeeArrow: LeftTeeArrow,
	LeftTee: LeftTee,
	LeftTeeVector: LeftTeeVector,
	leftthreetimes: leftthreetimes,
	LeftTriangleBar: LeftTriangleBar,
	LeftTriangle: LeftTriangle,
	LeftTriangleEqual: LeftTriangleEqual,
	LeftUpDownVector: LeftUpDownVector,
	LeftUpTeeVector: LeftUpTeeVector,
	LeftUpVectorBar: LeftUpVectorBar,
	LeftUpVector: LeftUpVector,
	LeftVectorBar: LeftVectorBar,
	LeftVector: LeftVector,
	lEg: lEg,
	leg: leg,
	leq: leq,
	leqq: leqq,
	leqslant: leqslant,
	lescc: lescc,
	les: les,
	lesdot: lesdot,
	lesdoto: lesdoto,
	lesdotor: lesdotor,
	lesg: lesg,
	lesges: lesges,
	lessapprox: lessapprox,
	lessdot: lessdot,
	lesseqgtr: lesseqgtr,
	lesseqqgtr: lesseqqgtr,
	LessEqualGreater: LessEqualGreater,
	LessFullEqual: LessFullEqual,
	LessGreater: LessGreater,
	lessgtr: lessgtr,
	LessLess: LessLess,
	lesssim: lesssim,
	LessSlantEqual: LessSlantEqual,
	LessTilde: LessTilde,
	lfisht: lfisht,
	lfloor: lfloor,
	Lfr: Lfr,
	lfr: lfr,
	lg: lg,
	lgE: lgE,
	lHar: lHar,
	lhard: lhard,
	lharu: lharu,
	lharul: lharul,
	lhblk: lhblk,
	LJcy: LJcy,
	ljcy: ljcy,
	llarr: llarr,
	ll: ll,
	Ll: Ll,
	llcorner: llcorner,
	Lleftarrow: Lleftarrow,
	llhard: llhard,
	lltri: lltri,
	Lmidot: Lmidot,
	lmidot: lmidot,
	lmoustache: lmoustache,
	lmoust: lmoust,
	lnap: lnap,
	lnapprox: lnapprox,
	lne: lne,
	lnE: lnE,
	lneq: lneq,
	lneqq: lneqq,
	lnsim: lnsim,
	loang: loang,
	loarr: loarr,
	lobrk: lobrk,
	longleftarrow: longleftarrow,
	LongLeftArrow: LongLeftArrow,
	Longleftarrow: Longleftarrow,
	longleftrightarrow: longleftrightarrow,
	LongLeftRightArrow: LongLeftRightArrow,
	Longleftrightarrow: Longleftrightarrow,
	longmapsto: longmapsto,
	longrightarrow: longrightarrow,
	LongRightArrow: LongRightArrow,
	Longrightarrow: Longrightarrow,
	looparrowleft: looparrowleft,
	looparrowright: looparrowright,
	lopar: lopar,
	Lopf: Lopf,
	lopf: lopf,
	loplus: loplus,
	lotimes: lotimes,
	lowast: lowast,
	lowbar: lowbar,
	LowerLeftArrow: LowerLeftArrow,
	LowerRightArrow: LowerRightArrow,
	loz: loz,
	lozenge: lozenge,
	lozf: lozf,
	lpar: lpar,
	lparlt: lparlt,
	lrarr: lrarr,
	lrcorner: lrcorner,
	lrhar: lrhar,
	lrhard: lrhard,
	lrm: lrm,
	lrtri: lrtri,
	lsaquo: lsaquo,
	lscr: lscr,
	Lscr: Lscr,
	lsh: lsh,
	Lsh: Lsh,
	lsim: lsim,
	lsime: lsime,
	lsimg: lsimg,
	lsqb: lsqb,
	lsquo: lsquo,
	lsquor: lsquor,
	Lstrok: Lstrok,
	lstrok: lstrok,
	ltcc: ltcc,
	ltcir: ltcir,
	lt: lt,
	LT: LT,
	Lt: Lt,
	ltdot: ltdot,
	lthree: lthree,
	ltimes: ltimes,
	ltlarr: ltlarr,
	ltquest: ltquest,
	ltri: ltri,
	ltrie: ltrie,
	ltrif: ltrif,
	ltrPar: ltrPar,
	lurdshar: lurdshar,
	luruhar: luruhar,
	lvertneqq: lvertneqq,
	lvnE: lvnE,
	macr: macr,
	male: male,
	malt: malt,
	maltese: maltese,
	"Map": "⤅",
	map: map,
	mapsto: mapsto,
	mapstodown: mapstodown,
	mapstoleft: mapstoleft,
	mapstoup: mapstoup,
	marker: marker,
	mcomma: mcomma,
	Mcy: Mcy,
	mcy: mcy,
	mdash: mdash,
	mDDot: mDDot,
	measuredangle: measuredangle,
	MediumSpace: MediumSpace,
	Mellintrf: Mellintrf,
	Mfr: Mfr,
	mfr: mfr,
	mho: mho,
	micro: micro,
	midast: midast,
	midcir: midcir,
	mid: mid,
	middot: middot,
	minusb: minusb,
	minus: minus,
	minusd: minusd,
	minusdu: minusdu,
	MinusPlus: MinusPlus,
	mlcp: mlcp,
	mldr: mldr,
	mnplus: mnplus,
	models: models,
	Mopf: Mopf,
	mopf: mopf,
	mp: mp,
	mscr: mscr,
	Mscr: Mscr,
	mstpos: mstpos,
	Mu: Mu,
	mu: mu,
	multimap: multimap,
	mumap: mumap,
	nabla: nabla,
	Nacute: Nacute,
	nacute: nacute,
	nang: nang,
	nap: nap,
	napE: napE,
	napid: napid,
	napos: napos,
	napprox: napprox,
	natural: natural,
	naturals: naturals,
	natur: natur,
	nbsp: nbsp,
	nbump: nbump,
	nbumpe: nbumpe,
	ncap: ncap,
	Ncaron: Ncaron,
	ncaron: ncaron,
	Ncedil: Ncedil,
	ncedil: ncedil,
	ncong: ncong,
	ncongdot: ncongdot,
	ncup: ncup,
	Ncy: Ncy,
	ncy: ncy,
	ndash: ndash,
	nearhk: nearhk,
	nearr: nearr,
	neArr: neArr,
	nearrow: nearrow,
	ne: ne,
	nedot: nedot,
	NegativeMediumSpace: NegativeMediumSpace,
	NegativeThickSpace: NegativeThickSpace,
	NegativeThinSpace: NegativeThinSpace,
	NegativeVeryThinSpace: NegativeVeryThinSpace,
	nequiv: nequiv,
	nesear: nesear,
	nesim: nesim,
	NestedGreaterGreater: NestedGreaterGreater,
	NestedLessLess: NestedLessLess,
	NewLine: NewLine,
	nexist: nexist,
	nexists: nexists,
	Nfr: Nfr,
	nfr: nfr,
	ngE: ngE,
	nge: nge,
	ngeq: ngeq,
	ngeqq: ngeqq,
	ngeqslant: ngeqslant,
	nges: nges,
	nGg: nGg,
	ngsim: ngsim,
	nGt: nGt,
	ngt: ngt,
	ngtr: ngtr,
	nGtv: nGtv,
	nharr: nharr,
	nhArr: nhArr,
	nhpar: nhpar,
	ni: ni,
	nis: nis,
	nisd: nisd,
	niv: niv,
	NJcy: NJcy,
	njcy: njcy,
	nlarr: nlarr,
	nlArr: nlArr,
	nldr: nldr,
	nlE: nlE,
	nle: nle,
	nleftarrow: nleftarrow,
	nLeftarrow: nLeftarrow,
	nleftrightarrow: nleftrightarrow,
	nLeftrightarrow: nLeftrightarrow,
	nleq: nleq,
	nleqq: nleqq,
	nleqslant: nleqslant,
	nles: nles,
	nless: nless,
	nLl: nLl,
	nlsim: nlsim,
	nLt: nLt,
	nlt: nlt,
	nltri: nltri,
	nltrie: nltrie,
	nLtv: nLtv,
	nmid: nmid,
	NoBreak: NoBreak,
	NonBreakingSpace: NonBreakingSpace,
	nopf: nopf,
	Nopf: Nopf,
	Not: Not,
	not: not,
	NotCongruent: NotCongruent,
	NotCupCap: NotCupCap,
	NotDoubleVerticalBar: NotDoubleVerticalBar,
	NotElement: NotElement,
	NotEqual: NotEqual,
	NotEqualTilde: NotEqualTilde,
	NotExists: NotExists,
	NotGreater: NotGreater,
	NotGreaterEqual: NotGreaterEqual,
	NotGreaterFullEqual: NotGreaterFullEqual,
	NotGreaterGreater: NotGreaterGreater,
	NotGreaterLess: NotGreaterLess,
	NotGreaterSlantEqual: NotGreaterSlantEqual,
	NotGreaterTilde: NotGreaterTilde,
	NotHumpDownHump: NotHumpDownHump,
	NotHumpEqual: NotHumpEqual,
	notin: notin,
	notindot: notindot,
	notinE: notinE,
	notinva: notinva,
	notinvb: notinvb,
	notinvc: notinvc,
	NotLeftTriangleBar: NotLeftTriangleBar,
	NotLeftTriangle: NotLeftTriangle,
	NotLeftTriangleEqual: NotLeftTriangleEqual,
	NotLess: NotLess,
	NotLessEqual: NotLessEqual,
	NotLessGreater: NotLessGreater,
	NotLessLess: NotLessLess,
	NotLessSlantEqual: NotLessSlantEqual,
	NotLessTilde: NotLessTilde,
	NotNestedGreaterGreater: NotNestedGreaterGreater,
	NotNestedLessLess: NotNestedLessLess,
	notni: notni,
	notniva: notniva,
	notnivb: notnivb,
	notnivc: notnivc,
	NotPrecedes: NotPrecedes,
	NotPrecedesEqual: NotPrecedesEqual,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
	NotReverseElement: NotReverseElement,
	NotRightTriangleBar: NotRightTriangleBar,
	NotRightTriangle: NotRightTriangle,
	NotRightTriangleEqual: NotRightTriangleEqual,
	NotSquareSubset: NotSquareSubset,
	NotSquareSubsetEqual: NotSquareSubsetEqual,
	NotSquareSuperset: NotSquareSuperset,
	NotSquareSupersetEqual: NotSquareSupersetEqual,
	NotSubset: NotSubset,
	NotSubsetEqual: NotSubsetEqual,
	NotSucceeds: NotSucceeds,
	NotSucceedsEqual: NotSucceedsEqual,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
	NotSucceedsTilde: NotSucceedsTilde,
	NotSuperset: NotSuperset,
	NotSupersetEqual: NotSupersetEqual,
	NotTilde: NotTilde,
	NotTildeEqual: NotTildeEqual,
	NotTildeFullEqual: NotTildeFullEqual,
	NotTildeTilde: NotTildeTilde,
	NotVerticalBar: NotVerticalBar,
	nparallel: nparallel,
	npar: npar,
	nparsl: nparsl,
	npart: npart,
	npolint: npolint,
	npr: npr,
	nprcue: nprcue,
	nprec: nprec,
	npreceq: npreceq,
	npre: npre,
	nrarrc: nrarrc,
	nrarr: nrarr,
	nrArr: nrArr,
	nrarrw: nrarrw,
	nrightarrow: nrightarrow,
	nRightarrow: nRightarrow,
	nrtri: nrtri,
	nrtrie: nrtrie,
	nsc: nsc,
	nsccue: nsccue,
	nsce: nsce,
	Nscr: Nscr,
	nscr: nscr,
	nshortmid: nshortmid,
	nshortparallel: nshortparallel,
	nsim: nsim,
	nsime: nsime,
	nsimeq: nsimeq,
	nsmid: nsmid,
	nspar: nspar,
	nsqsube: nsqsube,
	nsqsupe: nsqsupe,
	nsub: nsub,
	nsubE: nsubE,
	nsube: nsube,
	nsubset: nsubset,
	nsubseteq: nsubseteq,
	nsubseteqq: nsubseteqq,
	nsucc: nsucc,
	nsucceq: nsucceq,
	nsup: nsup,
	nsupE: nsupE,
	nsupe: nsupe,
	nsupset: nsupset,
	nsupseteq: nsupseteq,
	nsupseteqq: nsupseteqq,
	ntgl: ntgl,
	Ntilde: Ntilde,
	ntilde: ntilde,
	ntlg: ntlg,
	ntriangleleft: ntriangleleft,
	ntrianglelefteq: ntrianglelefteq,
	ntriangleright: ntriangleright,
	ntrianglerighteq: ntrianglerighteq,
	Nu: Nu,
	nu: nu,
	num: num,
	numero: numero,
	numsp: numsp,
	nvap: nvap,
	nvdash: nvdash,
	nvDash: nvDash,
	nVdash: nVdash,
	nVDash: nVDash,
	nvge: nvge,
	nvgt: nvgt,
	nvHarr: nvHarr,
	nvinfin: nvinfin,
	nvlArr: nvlArr,
	nvle: nvle,
	nvlt: nvlt,
	nvltrie: nvltrie,
	nvrArr: nvrArr,
	nvrtrie: nvrtrie,
	nvsim: nvsim,
	nwarhk: nwarhk,
	nwarr: nwarr,
	nwArr: nwArr,
	nwarrow: nwarrow,
	nwnear: nwnear,
	Oacute: Oacute,
	oacute: oacute,
	oast: oast,
	Ocirc: Ocirc,
	ocirc: ocirc,
	ocir: ocir,
	Ocy: Ocy,
	ocy: ocy,
	odash: odash,
	Odblac: Odblac,
	odblac: odblac,
	odiv: odiv,
	odot: odot,
	odsold: odsold,
	OElig: OElig,
	oelig: oelig,
	ofcir: ofcir,
	Ofr: Ofr,
	ofr: ofr,
	ogon: ogon,
	Ograve: Ograve,
	ograve: ograve,
	ogt: ogt,
	ohbar: ohbar,
	ohm: ohm,
	oint: oint,
	olarr: olarr,
	olcir: olcir,
	olcross: olcross,
	oline: oline,
	olt: olt,
	Omacr: Omacr,
	omacr: omacr,
	Omega: Omega,
	omega: omega,
	Omicron: Omicron,
	omicron: omicron,
	omid: omid,
	ominus: ominus,
	Oopf: Oopf,
	oopf: oopf,
	opar: opar,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
	OpenCurlyQuote: OpenCurlyQuote,
	operp: operp,
	oplus: oplus,
	orarr: orarr,
	Or: Or,
	or: or,
	ord: ord,
	order: order,
	orderof: orderof,
	ordf: ordf,
	ordm: ordm,
	origof: origof,
	oror: oror,
	orslope: orslope,
	orv: orv,
	oS: oS,
	Oscr: Oscr,
	oscr: oscr,
	Oslash: Oslash,
	oslash: oslash,
	osol: osol,
	Otilde: Otilde,
	otilde: otilde,
	otimesas: otimesas,
	Otimes: Otimes,
	otimes: otimes,
	Ouml: Ouml,
	ouml: ouml,
	ovbar: ovbar,
	OverBar: OverBar,
	OverBrace: OverBrace,
	OverBracket: OverBracket,
	OverParenthesis: OverParenthesis,
	para: para,
	parallel: parallel,
	par: par,
	parsim: parsim,
	parsl: parsl,
	part: part,
	PartialD: PartialD,
	Pcy: Pcy,
	pcy: pcy,
	percnt: percnt,
	period: period,
	permil: permil,
	perp: perp,
	pertenk: pertenk,
	Pfr: Pfr,
	pfr: pfr,
	Phi: Phi,
	phi: phi,
	phiv: phiv,
	phmmat: phmmat,
	phone: phone,
	Pi: Pi,
	pi: pi,
	pitchfork: pitchfork,
	piv: piv,
	planck: planck,
	planckh: planckh,
	plankv: plankv,
	plusacir: plusacir,
	plusb: plusb,
	pluscir: pluscir,
	plus: plus,
	plusdo: plusdo,
	plusdu: plusdu,
	pluse: pluse,
	PlusMinus: PlusMinus,
	plusmn: plusmn,
	plussim: plussim,
	plustwo: plustwo,
	pm: pm,
	Poincareplane: Poincareplane,
	pointint: pointint,
	popf: popf,
	Popf: Popf,
	pound: pound,
	prap: prap,
	Pr: Pr,
	pr: pr,
	prcue: prcue,
	precapprox: precapprox,
	prec: prec,
	preccurlyeq: preccurlyeq,
	Precedes: Precedes,
	PrecedesEqual: PrecedesEqual,
	PrecedesSlantEqual: PrecedesSlantEqual,
	PrecedesTilde: PrecedesTilde,
	preceq: preceq,
	precnapprox: precnapprox,
	precneqq: precneqq,
	precnsim: precnsim,
	pre: pre,
	prE: prE,
	precsim: precsim,
	prime: prime,
	Prime: Prime,
	primes: primes,
	prnap: prnap,
	prnE: prnE,
	prnsim: prnsim,
	prod: prod,
	Product: Product,
	profalar: profalar,
	profline: profline,
	profsurf: profsurf,
	prop: prop,
	Proportional: Proportional,
	Proportion: Proportion,
	propto: propto,
	prsim: prsim,
	prurel: prurel,
	Pscr: Pscr,
	pscr: pscr,
	Psi: Psi,
	psi: psi,
	puncsp: puncsp,
	Qfr: Qfr,
	qfr: qfr,
	qint: qint,
	qopf: qopf,
	Qopf: Qopf,
	qprime: qprime,
	Qscr: Qscr,
	qscr: qscr,
	quaternions: quaternions,
	quatint: quatint,
	quest: quest,
	questeq: questeq,
	quot: quot,
	QUOT: QUOT,
	rAarr: rAarr,
	race: race,
	Racute: Racute,
	racute: racute,
	radic: radic,
	raemptyv: raemptyv,
	rang: rang,
	Rang: Rang,
	rangd: rangd,
	range: range,
	rangle: rangle,
	raquo: raquo,
	rarrap: rarrap,
	rarrb: rarrb,
	rarrbfs: rarrbfs,
	rarrc: rarrc,
	rarr: rarr,
	Rarr: Rarr,
	rArr: rArr,
	rarrfs: rarrfs,
	rarrhk: rarrhk,
	rarrlp: rarrlp,
	rarrpl: rarrpl,
	rarrsim: rarrsim,
	Rarrtl: Rarrtl,
	rarrtl: rarrtl,
	rarrw: rarrw,
	ratail: ratail,
	rAtail: rAtail,
	ratio: ratio,
	rationals: rationals,
	rbarr: rbarr,
	rBarr: rBarr,
	RBarr: RBarr,
	rbbrk: rbbrk,
	rbrace: rbrace,
	rbrack: rbrack,
	rbrke: rbrke,
	rbrksld: rbrksld,
	rbrkslu: rbrkslu,
	Rcaron: Rcaron,
	rcaron: rcaron,
	Rcedil: Rcedil,
	rcedil: rcedil,
	rceil: rceil,
	rcub: rcub,
	Rcy: Rcy,
	rcy: rcy,
	rdca: rdca,
	rdldhar: rdldhar,
	rdquo: rdquo,
	rdquor: rdquor,
	rdsh: rdsh,
	real: real,
	realine: realine,
	realpart: realpart,
	reals: reals,
	Re: Re,
	rect: rect,
	reg: reg,
	REG: REG,
	ReverseElement: ReverseElement,
	ReverseEquilibrium: ReverseEquilibrium,
	ReverseUpEquilibrium: ReverseUpEquilibrium,
	rfisht: rfisht,
	rfloor: rfloor,
	rfr: rfr,
	Rfr: Rfr,
	rHar: rHar,
	rhard: rhard,
	rharu: rharu,
	rharul: rharul,
	Rho: Rho,
	rho: rho,
	rhov: rhov,
	RightAngleBracket: RightAngleBracket,
	RightArrowBar: RightArrowBar,
	rightarrow: rightarrow,
	RightArrow: RightArrow,
	Rightarrow: Rightarrow,
	RightArrowLeftArrow: RightArrowLeftArrow,
	rightarrowtail: rightarrowtail,
	RightCeiling: RightCeiling,
	RightDoubleBracket: RightDoubleBracket,
	RightDownTeeVector: RightDownTeeVector,
	RightDownVectorBar: RightDownVectorBar,
	RightDownVector: RightDownVector,
	RightFloor: RightFloor,
	rightharpoondown: rightharpoondown,
	rightharpoonup: rightharpoonup,
	rightleftarrows: rightleftarrows,
	rightleftharpoons: rightleftharpoons,
	rightrightarrows: rightrightarrows,
	rightsquigarrow: rightsquigarrow,
	RightTeeArrow: RightTeeArrow,
	RightTee: RightTee,
	RightTeeVector: RightTeeVector,
	rightthreetimes: rightthreetimes,
	RightTriangleBar: RightTriangleBar,
	RightTriangle: RightTriangle,
	RightTriangleEqual: RightTriangleEqual,
	RightUpDownVector: RightUpDownVector,
	RightUpTeeVector: RightUpTeeVector,
	RightUpVectorBar: RightUpVectorBar,
	RightUpVector: RightUpVector,
	RightVectorBar: RightVectorBar,
	RightVector: RightVector,
	ring: ring,
	risingdotseq: risingdotseq,
	rlarr: rlarr,
	rlhar: rlhar,
	rlm: rlm,
	rmoustache: rmoustache,
	rmoust: rmoust,
	rnmid: rnmid,
	roang: roang,
	roarr: roarr,
	robrk: robrk,
	ropar: ropar,
	ropf: ropf,
	Ropf: Ropf,
	roplus: roplus,
	rotimes: rotimes,
	RoundImplies: RoundImplies,
	rpar: rpar,
	rpargt: rpargt,
	rppolint: rppolint,
	rrarr: rrarr,
	Rrightarrow: Rrightarrow,
	rsaquo: rsaquo,
	rscr: rscr,
	Rscr: Rscr,
	rsh: rsh,
	Rsh: Rsh,
	rsqb: rsqb,
	rsquo: rsquo,
	rsquor: rsquor,
	rthree: rthree,
	rtimes: rtimes,
	rtri: rtri,
	rtrie: rtrie,
	rtrif: rtrif,
	rtriltri: rtriltri,
	RuleDelayed: RuleDelayed,
	ruluhar: ruluhar,
	rx: rx,
	Sacute: Sacute,
	sacute: sacute,
	sbquo: sbquo,
	scap: scap,
	Scaron: Scaron,
	scaron: scaron,
	Sc: Sc,
	sc: sc,
	sccue: sccue,
	sce: sce,
	scE: scE,
	Scedil: Scedil,
	scedil: scedil,
	Scirc: Scirc,
	scirc: scirc,
	scnap: scnap,
	scnE: scnE,
	scnsim: scnsim,
	scpolint: scpolint,
	scsim: scsim,
	Scy: Scy,
	scy: scy,
	sdotb: sdotb,
	sdot: sdot,
	sdote: sdote,
	searhk: searhk,
	searr: searr,
	seArr: seArr,
	searrow: searrow,
	sect: sect,
	semi: semi,
	seswar: seswar,
	setminus: setminus,
	setmn: setmn,
	sext: sext,
	Sfr: Sfr,
	sfr: sfr,
	sfrown: sfrown,
	sharp: sharp,
	SHCHcy: SHCHcy,
	shchcy: shchcy,
	SHcy: SHcy,
	shcy: shcy,
	ShortDownArrow: ShortDownArrow,
	ShortLeftArrow: ShortLeftArrow,
	shortmid: shortmid,
	shortparallel: shortparallel,
	ShortRightArrow: ShortRightArrow,
	ShortUpArrow: ShortUpArrow,
	shy: shy,
	Sigma: Sigma,
	sigma: sigma,
	sigmaf: sigmaf,
	sigmav: sigmav,
	sim: sim,
	simdot: simdot,
	sime: sime,
	simeq: simeq,
	simg: simg,
	simgE: simgE,
	siml: siml,
	simlE: simlE,
	simne: simne,
	simplus: simplus,
	simrarr: simrarr,
	slarr: slarr,
	SmallCircle: SmallCircle,
	smallsetminus: smallsetminus,
	smashp: smashp,
	smeparsl: smeparsl,
	smid: smid,
	smile: smile,
	smt: smt,
	smte: smte,
	smtes: smtes,
	SOFTcy: SOFTcy,
	softcy: softcy,
	solbar: solbar,
	solb: solb,
	sol: sol,
	Sopf: Sopf,
	sopf: sopf,
	spades: spades,
	spadesuit: spadesuit,
	spar: spar,
	sqcap: sqcap,
	sqcaps: sqcaps,
	sqcup: sqcup,
	sqcups: sqcups,
	Sqrt: Sqrt,
	sqsub: sqsub,
	sqsube: sqsube,
	sqsubset: sqsubset,
	sqsubseteq: sqsubseteq,
	sqsup: sqsup,
	sqsupe: sqsupe,
	sqsupset: sqsupset,
	sqsupseteq: sqsupseteq,
	square: square,
	Square: Square,
	SquareIntersection: SquareIntersection,
	SquareSubset: SquareSubset,
	SquareSubsetEqual: SquareSubsetEqual,
	SquareSuperset: SquareSuperset,
	SquareSupersetEqual: SquareSupersetEqual,
	SquareUnion: SquareUnion,
	squarf: squarf,
	squ: squ,
	squf: squf,
	srarr: srarr,
	Sscr: Sscr,
	sscr: sscr,
	ssetmn: ssetmn,
	ssmile: ssmile,
	sstarf: sstarf,
	Star: Star,
	star: star,
	starf: starf,
	straightepsilon: straightepsilon,
	straightphi: straightphi,
	strns: strns,
	sub: sub,
	Sub: Sub,
	subdot: subdot,
	subE: subE,
	sube: sube,
	subedot: subedot,
	submult: submult,
	subnE: subnE,
	subne: subne,
	subplus: subplus,
	subrarr: subrarr,
	subset: subset,
	Subset: Subset,
	subseteq: subseteq,
	subseteqq: subseteqq,
	SubsetEqual: SubsetEqual,
	subsetneq: subsetneq,
	subsetneqq: subsetneqq,
	subsim: subsim,
	subsub: subsub,
	subsup: subsup,
	succapprox: succapprox,
	succ: succ,
	succcurlyeq: succcurlyeq,
	Succeeds: Succeeds,
	SucceedsEqual: SucceedsEqual,
	SucceedsSlantEqual: SucceedsSlantEqual,
	SucceedsTilde: SucceedsTilde,
	succeq: succeq,
	succnapprox: succnapprox,
	succneqq: succneqq,
	succnsim: succnsim,
	succsim: succsim,
	SuchThat: SuchThat,
	sum: sum,
	Sum: Sum,
	sung: sung,
	sup1: sup1,
	sup2: sup2,
	sup3: sup3,
	sup: sup,
	Sup: Sup,
	supdot: supdot,
	supdsub: supdsub,
	supE: supE,
	supe: supe,
	supedot: supedot,
	Superset: Superset,
	SupersetEqual: SupersetEqual,
	suphsol: suphsol,
	suphsub: suphsub,
	suplarr: suplarr,
	supmult: supmult,
	supnE: supnE,
	supne: supne,
	supplus: supplus,
	supset: supset,
	Supset: Supset,
	supseteq: supseteq,
	supseteqq: supseteqq,
	supsetneq: supsetneq,
	supsetneqq: supsetneqq,
	supsim: supsim,
	supsub: supsub,
	supsup: supsup,
	swarhk: swarhk,
	swarr: swarr,
	swArr: swArr,
	swarrow: swarrow,
	swnwar: swnwar,
	szlig: szlig,
	Tab: Tab,
	target: target,
	Tau: Tau,
	tau: tau,
	tbrk: tbrk,
	Tcaron: Tcaron,
	tcaron: tcaron,
	Tcedil: Tcedil,
	tcedil: tcedil,
	Tcy: Tcy,
	tcy: tcy,
	tdot: tdot,
	telrec: telrec,
	Tfr: Tfr,
	tfr: tfr,
	there4: there4,
	therefore: therefore,
	Therefore: Therefore,
	Theta: Theta,
	theta: theta,
	thetasym: thetasym,
	thetav: thetav,
	thickapprox: thickapprox,
	thicksim: thicksim,
	ThickSpace: ThickSpace,
	ThinSpace: ThinSpace,
	thinsp: thinsp,
	thkap: thkap,
	thksim: thksim,
	THORN: THORN,
	thorn: thorn,
	tilde: tilde,
	Tilde: Tilde,
	TildeEqual: TildeEqual,
	TildeFullEqual: TildeFullEqual,
	TildeTilde: TildeTilde,
	timesbar: timesbar,
	timesb: timesb,
	times: times,
	timesd: timesd,
	tint: tint,
	toea: toea,
	topbot: topbot,
	topcir: topcir,
	top: top,
	Topf: Topf,
	topf: topf,
	topfork: topfork,
	tosa: tosa,
	tprime: tprime,
	trade: trade,
	TRADE: TRADE,
	triangle: triangle,
	triangledown: triangledown,
	triangleleft: triangleleft,
	trianglelefteq: trianglelefteq,
	triangleq: triangleq,
	triangleright: triangleright,
	trianglerighteq: trianglerighteq,
	tridot: tridot,
	trie: trie,
	triminus: triminus,
	TripleDot: TripleDot,
	triplus: triplus,
	trisb: trisb,
	tritime: tritime,
	trpezium: trpezium,
	Tscr: Tscr,
	tscr: tscr,
	TScy: TScy,
	tscy: tscy,
	TSHcy: TSHcy,
	tshcy: tshcy,
	Tstrok: Tstrok,
	tstrok: tstrok,
	twixt: twixt,
	twoheadleftarrow: twoheadleftarrow,
	twoheadrightarrow: twoheadrightarrow,
	Uacute: Uacute,
	uacute: uacute,
	uarr: uarr,
	Uarr: Uarr,
	uArr: uArr,
	Uarrocir: Uarrocir,
	Ubrcy: Ubrcy,
	ubrcy: ubrcy,
	Ubreve: Ubreve,
	ubreve: ubreve,
	Ucirc: Ucirc,
	ucirc: ucirc,
	Ucy: Ucy,
	ucy: ucy,
	udarr: udarr,
	Udblac: Udblac,
	udblac: udblac,
	udhar: udhar,
	ufisht: ufisht,
	Ufr: Ufr,
	ufr: ufr,
	Ugrave: Ugrave,
	ugrave: ugrave,
	uHar: uHar,
	uharl: uharl,
	uharr: uharr,
	uhblk: uhblk,
	ulcorn: ulcorn,
	ulcorner: ulcorner,
	ulcrop: ulcrop,
	ultri: ultri,
	Umacr: Umacr,
	umacr: umacr,
	uml: uml,
	UnderBar: UnderBar,
	UnderBrace: UnderBrace,
	UnderBracket: UnderBracket,
	UnderParenthesis: UnderParenthesis,
	Union: Union,
	UnionPlus: UnionPlus,
	Uogon: Uogon,
	uogon: uogon,
	Uopf: Uopf,
	uopf: uopf,
	UpArrowBar: UpArrowBar,
	uparrow: uparrow,
	UpArrow: UpArrow,
	Uparrow: Uparrow,
	UpArrowDownArrow: UpArrowDownArrow,
	updownarrow: updownarrow,
	UpDownArrow: UpDownArrow,
	Updownarrow: Updownarrow,
	UpEquilibrium: UpEquilibrium,
	upharpoonleft: upharpoonleft,
	upharpoonright: upharpoonright,
	uplus: uplus,
	UpperLeftArrow: UpperLeftArrow,
	UpperRightArrow: UpperRightArrow,
	upsi: upsi,
	Upsi: Upsi,
	upsih: upsih,
	Upsilon: Upsilon,
	upsilon: upsilon,
	UpTeeArrow: UpTeeArrow,
	UpTee: UpTee,
	upuparrows: upuparrows,
	urcorn: urcorn,
	urcorner: urcorner,
	urcrop: urcrop,
	Uring: Uring,
	uring: uring,
	urtri: urtri,
	Uscr: Uscr,
	uscr: uscr,
	utdot: utdot,
	Utilde: Utilde,
	utilde: utilde,
	utri: utri,
	utrif: utrif,
	uuarr: uuarr,
	Uuml: Uuml,
	uuml: uuml,
	uwangle: uwangle,
	vangrt: vangrt,
	varepsilon: varepsilon,
	varkappa: varkappa,
	varnothing: varnothing,
	varphi: varphi,
	varpi: varpi,
	varpropto: varpropto,
	varr: varr,
	vArr: vArr,
	varrho: varrho,
	varsigma: varsigma,
	varsubsetneq: varsubsetneq,
	varsubsetneqq: varsubsetneqq,
	varsupsetneq: varsupsetneq,
	varsupsetneqq: varsupsetneqq,
	vartheta: vartheta,
	vartriangleleft: vartriangleleft,
	vartriangleright: vartriangleright,
	vBar: vBar,
	Vbar: Vbar,
	vBarv: vBarv,
	Vcy: Vcy,
	vcy: vcy,
	vdash: vdash,
	vDash: vDash,
	Vdash: Vdash,
	VDash: VDash,
	Vdashl: Vdashl,
	veebar: veebar,
	vee: vee,
	Vee: Vee,
	veeeq: veeeq,
	vellip: vellip,
	verbar: verbar,
	Verbar: Verbar,
	vert: vert,
	Vert: Vert,
	VerticalBar: VerticalBar,
	VerticalLine: VerticalLine,
	VerticalSeparator: VerticalSeparator,
	VerticalTilde: VerticalTilde,
	VeryThinSpace: VeryThinSpace,
	Vfr: Vfr,
	vfr: vfr,
	vltri: vltri,
	vnsub: vnsub,
	vnsup: vnsup,
	Vopf: Vopf,
	vopf: vopf,
	vprop: vprop,
	vrtri: vrtri,
	Vscr: Vscr,
	vscr: vscr,
	vsubnE: vsubnE,
	vsubne: vsubne,
	vsupnE: vsupnE,
	vsupne: vsupne,
	Vvdash: Vvdash,
	vzigzag: vzigzag,
	Wcirc: Wcirc,
	wcirc: wcirc,
	wedbar: wedbar,
	wedge: wedge,
	Wedge: Wedge,
	wedgeq: wedgeq,
	weierp: weierp,
	Wfr: Wfr,
	wfr: wfr,
	Wopf: Wopf,
	wopf: wopf,
	wp: wp,
	wr: wr,
	wreath: wreath,
	Wscr: Wscr,
	wscr: wscr,
	xcap: xcap,
	xcirc: xcirc,
	xcup: xcup,
	xdtri: xdtri,
	Xfr: Xfr,
	xfr: xfr,
	xharr: xharr,
	xhArr: xhArr,
	Xi: Xi,
	xi: xi,
	xlarr: xlarr,
	xlArr: xlArr,
	xmap: xmap,
	xnis: xnis,
	xodot: xodot,
	Xopf: Xopf,
	xopf: xopf,
	xoplus: xoplus,
	xotime: xotime,
	xrarr: xrarr,
	xrArr: xrArr,
	Xscr: Xscr,
	xscr: xscr,
	xsqcup: xsqcup,
	xuplus: xuplus,
	xutri: xutri,
	xvee: xvee,
	xwedge: xwedge,
	Yacute: Yacute,
	yacute: yacute,
	YAcy: YAcy,
	yacy: yacy,
	Ycirc: Ycirc,
	ycirc: ycirc,
	Ycy: Ycy,
	ycy: ycy,
	yen: yen,
	Yfr: Yfr,
	yfr: yfr,
	YIcy: YIcy,
	yicy: yicy,
	Yopf: Yopf,
	yopf: yopf,
	Yscr: Yscr,
	yscr: yscr,
	YUcy: YUcy,
	yucy: yucy,
	yuml: yuml,
	Yuml: Yuml,
	Zacute: Zacute,
	zacute: zacute,
	Zcaron: Zcaron,
	zcaron: zcaron,
	Zcy: Zcy,
	zcy: zcy,
	Zdot: Zdot,
	zdot: zdot,
	zeetrf: zeetrf,
	ZeroWidthSpace: ZeroWidthSpace,
	Zeta: Zeta,
	zeta: zeta,
	zfr: zfr,
	Zfr: Zfr,
	ZHcy: ZHcy,
	zhcy: zhcy,
	zigrarr: zigrarr,
	zopf: zopf,
	Zopf: Zopf,
	Zscr: Zscr,
	zscr: zscr,
	zwj: zwj,
	zwnj: zwnj
};

var entities$1 = /*#__PURE__*/Object.freeze({
    Aacute: Aacute,
    aacute: aacute,
    Abreve: Abreve,
    abreve: abreve,
    ac: ac,
    acd: acd,
    acE: acE,
    Acirc: Acirc,
    acirc: acirc,
    acute: acute,
    Acy: Acy,
    acy: acy,
    AElig: AElig,
    aelig: aelig,
    af: af,
    Afr: Afr,
    afr: afr,
    Agrave: Agrave,
    agrave: agrave,
    alefsym: alefsym,
    aleph: aleph,
    Alpha: Alpha,
    alpha: alpha,
    Amacr: Amacr,
    amacr: amacr,
    amalg: amalg,
    amp: amp,
    AMP: AMP,
    andand: andand,
    And: And,
    and: and,
    andd: andd,
    andslope: andslope,
    andv: andv,
    ang: ang,
    ange: ange,
    angle: angle,
    angmsdaa: angmsdaa,
    angmsdab: angmsdab,
    angmsdac: angmsdac,
    angmsdad: angmsdad,
    angmsdae: angmsdae,
    angmsdaf: angmsdaf,
    angmsdag: angmsdag,
    angmsdah: angmsdah,
    angmsd: angmsd,
    angrt: angrt,
    angrtvb: angrtvb,
    angrtvbd: angrtvbd,
    angsph: angsph,
    angst: angst,
    angzarr: angzarr,
    Aogon: Aogon,
    aogon: aogon,
    Aopf: Aopf,
    aopf: aopf,
    apacir: apacir,
    ap: ap,
    apE: apE,
    ape: ape,
    apid: apid,
    apos: apos,
    ApplyFunction: ApplyFunction,
    approx: approx,
    approxeq: approxeq,
    Aring: Aring,
    aring: aring,
    Ascr: Ascr,
    ascr: ascr,
    Assign: Assign,
    ast: ast,
    asymp: asymp,
    asympeq: asympeq,
    Atilde: Atilde,
    atilde: atilde,
    Auml: Auml,
    auml: auml,
    awconint: awconint,
    awint: awint,
    backcong: backcong,
    backepsilon: backepsilon,
    backprime: backprime,
    backsim: backsim,
    backsimeq: backsimeq,
    Backslash: Backslash,
    Barv: Barv,
    barvee: barvee,
    barwed: barwed,
    Barwed: Barwed,
    barwedge: barwedge,
    bbrk: bbrk,
    bbrktbrk: bbrktbrk,
    bcong: bcong,
    Bcy: Bcy,
    bcy: bcy,
    bdquo: bdquo,
    becaus: becaus,
    because: because,
    Because: Because,
    bemptyv: bemptyv,
    bepsi: bepsi,
    bernou: bernou,
    Bernoullis: Bernoullis,
    Beta: Beta,
    beta: beta,
    beth: beth,
    between: between,
    Bfr: Bfr,
    bfr: bfr,
    bigcap: bigcap,
    bigcirc: bigcirc,
    bigcup: bigcup,
    bigodot: bigodot,
    bigoplus: bigoplus,
    bigotimes: bigotimes,
    bigsqcup: bigsqcup,
    bigstar: bigstar,
    bigtriangledown: bigtriangledown,
    bigtriangleup: bigtriangleup,
    biguplus: biguplus,
    bigvee: bigvee,
    bigwedge: bigwedge,
    bkarow: bkarow,
    blacklozenge: blacklozenge,
    blacksquare: blacksquare,
    blacktriangle: blacktriangle,
    blacktriangledown: blacktriangledown,
    blacktriangleleft: blacktriangleleft,
    blacktriangleright: blacktriangleright,
    blank: blank,
    blk12: blk12,
    blk14: blk14,
    blk34: blk34,
    block: block,
    bne: bne,
    bnequiv: bnequiv,
    bNot: bNot,
    bnot: bnot,
    Bopf: Bopf,
    bopf: bopf,
    bot: bot,
    bottom: bottom,
    bowtie: bowtie,
    boxbox: boxbox,
    boxdl: boxdl,
    boxdL: boxdL,
    boxDl: boxDl,
    boxDL: boxDL,
    boxdr: boxdr,
    boxdR: boxdR,
    boxDr: boxDr,
    boxDR: boxDR,
    boxh: boxh,
    boxH: boxH,
    boxhd: boxhd,
    boxHd: boxHd,
    boxhD: boxhD,
    boxHD: boxHD,
    boxhu: boxhu,
    boxHu: boxHu,
    boxhU: boxhU,
    boxHU: boxHU,
    boxminus: boxminus,
    boxplus: boxplus,
    boxtimes: boxtimes,
    boxul: boxul,
    boxuL: boxuL,
    boxUl: boxUl,
    boxUL: boxUL,
    boxur: boxur,
    boxuR: boxuR,
    boxUr: boxUr,
    boxUR: boxUR,
    boxv: boxv,
    boxV: boxV,
    boxvh: boxvh,
    boxvH: boxvH,
    boxVh: boxVh,
    boxVH: boxVH,
    boxvl: boxvl,
    boxvL: boxvL,
    boxVl: boxVl,
    boxVL: boxVL,
    boxvr: boxvr,
    boxvR: boxvR,
    boxVr: boxVr,
    boxVR: boxVR,
    bprime: bprime,
    breve: breve,
    Breve: Breve,
    brvbar: brvbar,
    bscr: bscr,
    Bscr: Bscr,
    bsemi: bsemi,
    bsim: bsim,
    bsime: bsime,
    bsolb: bsolb,
    bsol: bsol,
    bsolhsub: bsolhsub,
    bull: bull,
    bullet: bullet,
    bump: bump,
    bumpE: bumpE,
    bumpe: bumpe,
    Bumpeq: Bumpeq,
    bumpeq: bumpeq,
    Cacute: Cacute,
    cacute: cacute,
    capand: capand,
    capbrcup: capbrcup,
    capcap: capcap,
    cap: cap,
    Cap: Cap,
    capcup: capcup,
    capdot: capdot,
    CapitalDifferentialD: CapitalDifferentialD,
    caps: caps,
    caret: caret,
    caron: caron,
    Cayleys: Cayleys,
    ccaps: ccaps,
    Ccaron: Ccaron,
    ccaron: ccaron,
    Ccedil: Ccedil,
    ccedil: ccedil,
    Ccirc: Ccirc,
    ccirc: ccirc,
    Cconint: Cconint,
    ccups: ccups,
    ccupssm: ccupssm,
    Cdot: Cdot,
    cdot: cdot,
    cedil: cedil,
    Cedilla: Cedilla,
    cemptyv: cemptyv,
    cent: cent,
    centerdot: centerdot,
    CenterDot: CenterDot,
    cfr: cfr,
    Cfr: Cfr,
    CHcy: CHcy,
    chcy: chcy,
    check: check,
    checkmark: checkmark,
    Chi: Chi,
    chi: chi,
    circ: circ,
    circeq: circeq,
    circlearrowleft: circlearrowleft,
    circlearrowright: circlearrowright,
    circledast: circledast,
    circledcirc: circledcirc,
    circleddash: circleddash,
    CircleDot: CircleDot,
    circledR: circledR,
    circledS: circledS,
    CircleMinus: CircleMinus,
    CirclePlus: CirclePlus,
    CircleTimes: CircleTimes,
    cir: cir,
    cirE: cirE,
    cire: cire,
    cirfnint: cirfnint,
    cirmid: cirmid,
    cirscir: cirscir,
    ClockwiseContourIntegral: ClockwiseContourIntegral,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    CloseCurlyQuote: CloseCurlyQuote,
    clubs: clubs,
    clubsuit: clubsuit,
    colon: colon,
    Colon: Colon,
    Colone: Colone,
    colone: colone,
    coloneq: coloneq,
    comma: comma,
    commat: commat,
    comp: comp,
    compfn: compfn,
    complement: complement,
    complexes: complexes,
    cong: cong,
    congdot: congdot,
    Congruent: Congruent,
    conint: conint,
    Conint: Conint,
    ContourIntegral: ContourIntegral,
    copf: copf,
    Copf: Copf,
    coprod: coprod,
    Coproduct: Coproduct,
    copy: copy,
    COPY: COPY,
    copysr: copysr,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    crarr: crarr,
    cross: cross,
    Cross: Cross,
    Cscr: Cscr,
    cscr: cscr,
    csub: csub,
    csube: csube,
    csup: csup,
    csupe: csupe,
    ctdot: ctdot,
    cudarrl: cudarrl,
    cudarrr: cudarrr,
    cuepr: cuepr,
    cuesc: cuesc,
    cularr: cularr,
    cularrp: cularrp,
    cupbrcap: cupbrcap,
    cupcap: cupcap,
    CupCap: CupCap,
    cup: cup,
    Cup: Cup,
    cupcup: cupcup,
    cupdot: cupdot,
    cupor: cupor,
    cups: cups,
    curarr: curarr,
    curarrm: curarrm,
    curlyeqprec: curlyeqprec,
    curlyeqsucc: curlyeqsucc,
    curlyvee: curlyvee,
    curlywedge: curlywedge,
    curren: curren,
    curvearrowleft: curvearrowleft,
    curvearrowright: curvearrowright,
    cuvee: cuvee,
    cuwed: cuwed,
    cwconint: cwconint,
    cwint: cwint,
    cylcty: cylcty,
    dagger: dagger,
    Dagger: Dagger,
    daleth: daleth,
    darr: darr,
    Darr: Darr,
    dArr: dArr,
    dash: dash,
    Dashv: Dashv,
    dashv: dashv,
    dbkarow: dbkarow,
    dblac: dblac,
    Dcaron: Dcaron,
    dcaron: dcaron,
    Dcy: Dcy,
    dcy: dcy,
    ddagger: ddagger,
    ddarr: ddarr,
    DD: DD,
    dd: dd,
    DDotrahd: DDotrahd,
    ddotseq: ddotseq,
    deg: deg,
    Del: Del,
    Delta: Delta,
    delta: delta,
    demptyv: demptyv,
    dfisht: dfisht,
    Dfr: Dfr,
    dfr: dfr,
    dHar: dHar,
    dharl: dharl,
    dharr: dharr,
    DiacriticalAcute: DiacriticalAcute,
    DiacriticalDot: DiacriticalDot,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    DiacriticalGrave: DiacriticalGrave,
    DiacriticalTilde: DiacriticalTilde,
    diam: diam,
    diamond: diamond,
    Diamond: Diamond,
    diamondsuit: diamondsuit,
    diams: diams,
    die: die,
    DifferentialD: DifferentialD,
    digamma: digamma,
    disin: disin,
    div: div,
    divide: divide,
    divideontimes: divideontimes,
    divonx: divonx,
    DJcy: DJcy,
    djcy: djcy,
    dlcorn: dlcorn,
    dlcrop: dlcrop,
    dollar: dollar,
    Dopf: Dopf,
    dopf: dopf,
    Dot: Dot,
    dot: dot,
    DotDot: DotDot,
    doteq: doteq,
    doteqdot: doteqdot,
    DotEqual: DotEqual,
    dotminus: dotminus,
    dotplus: dotplus,
    dotsquare: dotsquare,
    doublebarwedge: doublebarwedge,
    DoubleContourIntegral: DoubleContourIntegral,
    DoubleDot: DoubleDot,
    DoubleDownArrow: DoubleDownArrow,
    DoubleLeftArrow: DoubleLeftArrow,
    DoubleLeftRightArrow: DoubleLeftRightArrow,
    DoubleLeftTee: DoubleLeftTee,
    DoubleLongLeftArrow: DoubleLongLeftArrow,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    DoubleLongRightArrow: DoubleLongRightArrow,
    DoubleRightArrow: DoubleRightArrow,
    DoubleRightTee: DoubleRightTee,
    DoubleUpArrow: DoubleUpArrow,
    DoubleUpDownArrow: DoubleUpDownArrow,
    DoubleVerticalBar: DoubleVerticalBar,
    DownArrowBar: DownArrowBar,
    downarrow: downarrow,
    DownArrow: DownArrow,
    Downarrow: Downarrow,
    DownArrowUpArrow: DownArrowUpArrow,
    DownBreve: DownBreve,
    downdownarrows: downdownarrows,
    downharpoonleft: downharpoonleft,
    downharpoonright: downharpoonright,
    DownLeftRightVector: DownLeftRightVector,
    DownLeftTeeVector: DownLeftTeeVector,
    DownLeftVectorBar: DownLeftVectorBar,
    DownLeftVector: DownLeftVector,
    DownRightTeeVector: DownRightTeeVector,
    DownRightVectorBar: DownRightVectorBar,
    DownRightVector: DownRightVector,
    DownTeeArrow: DownTeeArrow,
    DownTee: DownTee,
    drbkarow: drbkarow,
    drcorn: drcorn,
    drcrop: drcrop,
    Dscr: Dscr,
    dscr: dscr,
    DScy: DScy,
    dscy: dscy,
    dsol: dsol,
    Dstrok: Dstrok,
    dstrok: dstrok,
    dtdot: dtdot,
    dtri: dtri,
    dtrif: dtrif,
    duarr: duarr,
    duhar: duhar,
    dwangle: dwangle,
    DZcy: DZcy,
    dzcy: dzcy,
    dzigrarr: dzigrarr,
    Eacute: Eacute,
    eacute: eacute,
    easter: easter,
    Ecaron: Ecaron,
    ecaron: ecaron,
    Ecirc: Ecirc,
    ecirc: ecirc,
    ecir: ecir,
    ecolon: ecolon,
    Ecy: Ecy,
    ecy: ecy,
    eDDot: eDDot,
    Edot: Edot,
    edot: edot,
    eDot: eDot,
    ee: ee,
    efDot: efDot,
    Efr: Efr,
    efr: efr,
    eg: eg,
    Egrave: Egrave,
    egrave: egrave,
    egs: egs,
    egsdot: egsdot,
    el: el,
    Element: Element,
    elinters: elinters,
    ell: ell,
    els: els,
    elsdot: elsdot,
    Emacr: Emacr,
    emacr: emacr,
    empty: empty,
    emptyset: emptyset,
    EmptySmallSquare: EmptySmallSquare,
    emptyv: emptyv,
    EmptyVerySmallSquare: EmptyVerySmallSquare,
    emsp13: emsp13,
    emsp14: emsp14,
    emsp: emsp,
    ENG: ENG,
    eng: eng,
    ensp: ensp,
    Eogon: Eogon,
    eogon: eogon,
    Eopf: Eopf,
    eopf: eopf,
    epar: epar,
    eparsl: eparsl,
    eplus: eplus,
    epsi: epsi,
    Epsilon: Epsilon,
    epsilon: epsilon,
    epsiv: epsiv,
    eqcirc: eqcirc,
    eqcolon: eqcolon,
    eqsim: eqsim,
    eqslantgtr: eqslantgtr,
    eqslantless: eqslantless,
    Equal: Equal,
    equals: equals,
    EqualTilde: EqualTilde,
    equest: equest,
    Equilibrium: Equilibrium,
    equiv: equiv,
    equivDD: equivDD,
    eqvparsl: eqvparsl,
    erarr: erarr,
    erDot: erDot,
    escr: escr,
    Escr: Escr,
    esdot: esdot,
    Esim: Esim,
    esim: esim,
    Eta: Eta,
    eta: eta,
    ETH: ETH,
    eth: eth,
    Euml: Euml,
    euml: euml,
    euro: euro,
    excl: excl,
    exist: exist,
    Exists: Exists,
    expectation: expectation,
    exponentiale: exponentiale,
    ExponentialE: ExponentialE,
    fallingdotseq: fallingdotseq,
    Fcy: Fcy,
    fcy: fcy,
    female: female,
    ffilig: ffilig,
    fflig: fflig,
    ffllig: ffllig,
    Ffr: Ffr,
    ffr: ffr,
    filig: filig,
    FilledSmallSquare: FilledSmallSquare,
    FilledVerySmallSquare: FilledVerySmallSquare,
    fjlig: fjlig,
    flat: flat,
    fllig: fllig,
    fltns: fltns,
    fnof: fnof,
    Fopf: Fopf,
    fopf: fopf,
    forall: forall,
    ForAll: ForAll,
    fork: fork,
    forkv: forkv,
    Fouriertrf: Fouriertrf,
    fpartint: fpartint,
    frac12: frac12,
    frac13: frac13,
    frac14: frac14,
    frac15: frac15,
    frac16: frac16,
    frac18: frac18,
    frac23: frac23,
    frac25: frac25,
    frac34: frac34,
    frac35: frac35,
    frac38: frac38,
    frac45: frac45,
    frac56: frac56,
    frac58: frac58,
    frac78: frac78,
    frasl: frasl,
    frown: frown,
    fscr: fscr,
    Fscr: Fscr,
    gacute: gacute,
    Gamma: Gamma,
    gamma: gamma,
    Gammad: Gammad,
    gammad: gammad,
    gap: gap,
    Gbreve: Gbreve,
    gbreve: gbreve,
    Gcedil: Gcedil,
    Gcirc: Gcirc,
    gcirc: gcirc,
    Gcy: Gcy,
    gcy: gcy,
    Gdot: Gdot,
    gdot: gdot,
    ge: ge,
    gE: gE,
    gEl: gEl,
    gel: gel,
    geq: geq,
    geqq: geqq,
    geqslant: geqslant,
    gescc: gescc,
    ges: ges,
    gesdot: gesdot,
    gesdoto: gesdoto,
    gesdotol: gesdotol,
    gesl: gesl,
    gesles: gesles,
    Gfr: Gfr,
    gfr: gfr,
    gg: gg,
    Gg: Gg,
    ggg: ggg,
    gimel: gimel,
    GJcy: GJcy,
    gjcy: gjcy,
    gla: gla,
    gl: gl,
    glE: glE,
    glj: glj,
    gnap: gnap,
    gnapprox: gnapprox,
    gne: gne,
    gnE: gnE,
    gneq: gneq,
    gneqq: gneqq,
    gnsim: gnsim,
    Gopf: Gopf,
    gopf: gopf,
    grave: grave,
    GreaterEqual: GreaterEqual,
    GreaterEqualLess: GreaterEqualLess,
    GreaterFullEqual: GreaterFullEqual,
    GreaterGreater: GreaterGreater,
    GreaterLess: GreaterLess,
    GreaterSlantEqual: GreaterSlantEqual,
    GreaterTilde: GreaterTilde,
    Gscr: Gscr,
    gscr: gscr,
    gsim: gsim,
    gsime: gsime,
    gsiml: gsiml,
    gtcc: gtcc,
    gtcir: gtcir,
    gt: gt,
    GT: GT,
    Gt: Gt,
    gtdot: gtdot,
    gtlPar: gtlPar,
    gtquest: gtquest,
    gtrapprox: gtrapprox,
    gtrarr: gtrarr,
    gtrdot: gtrdot,
    gtreqless: gtreqless,
    gtreqqless: gtreqqless,
    gtrless: gtrless,
    gtrsim: gtrsim,
    gvertneqq: gvertneqq,
    gvnE: gvnE,
    Hacek: Hacek,
    hairsp: hairsp,
    half: half,
    hamilt: hamilt,
    HARDcy: HARDcy,
    hardcy: hardcy,
    harrcir: harrcir,
    harr: harr,
    hArr: hArr,
    harrw: harrw,
    Hat: Hat,
    hbar: hbar,
    Hcirc: Hcirc,
    hcirc: hcirc,
    hearts: hearts,
    heartsuit: heartsuit,
    hellip: hellip,
    hercon: hercon,
    hfr: hfr,
    Hfr: Hfr,
    HilbertSpace: HilbertSpace,
    hksearow: hksearow,
    hkswarow: hkswarow,
    hoarr: hoarr,
    homtht: homtht,
    hookleftarrow: hookleftarrow,
    hookrightarrow: hookrightarrow,
    hopf: hopf,
    Hopf: Hopf,
    horbar: horbar,
    HorizontalLine: HorizontalLine,
    hscr: hscr,
    Hscr: Hscr,
    hslash: hslash,
    Hstrok: Hstrok,
    hstrok: hstrok,
    HumpDownHump: HumpDownHump,
    HumpEqual: HumpEqual,
    hybull: hybull,
    hyphen: hyphen,
    Iacute: Iacute,
    iacute: iacute,
    ic: ic,
    Icirc: Icirc,
    icirc: icirc,
    Icy: Icy,
    icy: icy,
    Idot: Idot,
    IEcy: IEcy,
    iecy: iecy,
    iexcl: iexcl,
    iff: iff,
    ifr: ifr,
    Ifr: Ifr,
    Igrave: Igrave,
    igrave: igrave,
    ii: ii,
    iiiint: iiiint,
    iiint: iiint,
    iinfin: iinfin,
    iiota: iiota,
    IJlig: IJlig,
    ijlig: ijlig,
    Imacr: Imacr,
    imacr: imacr,
    image: image,
    ImaginaryI: ImaginaryI,
    imagline: imagline,
    imagpart: imagpart,
    imath: imath,
    Im: Im,
    imof: imof,
    imped: imped,
    Implies: Implies,
    incare: incare,
    infin: infin,
    infintie: infintie,
    inodot: inodot,
    intcal: intcal,
    int: int,
    Int: Int,
    integers: integers,
    Integral: Integral,
    intercal: intercal,
    Intersection: Intersection,
    intlarhk: intlarhk,
    intprod: intprod,
    InvisibleComma: InvisibleComma,
    InvisibleTimes: InvisibleTimes,
    IOcy: IOcy,
    iocy: iocy,
    Iogon: Iogon,
    iogon: iogon,
    Iopf: Iopf,
    iopf: iopf,
    Iota: Iota,
    iota: iota,
    iprod: iprod,
    iquest: iquest,
    iscr: iscr,
    Iscr: Iscr,
    isin: isin,
    isindot: isindot,
    isinE: isinE,
    isins: isins,
    isinsv: isinsv,
    isinv: isinv,
    it: it,
    Itilde: Itilde,
    itilde: itilde,
    Iukcy: Iukcy,
    iukcy: iukcy,
    Iuml: Iuml,
    iuml: iuml,
    Jcirc: Jcirc,
    jcirc: jcirc,
    Jcy: Jcy,
    jcy: jcy,
    Jfr: Jfr,
    jfr: jfr,
    jmath: jmath,
    Jopf: Jopf,
    jopf: jopf,
    Jscr: Jscr,
    jscr: jscr,
    Jsercy: Jsercy,
    jsercy: jsercy,
    Jukcy: Jukcy,
    jukcy: jukcy,
    Kappa: Kappa,
    kappa: kappa,
    kappav: kappav,
    Kcedil: Kcedil,
    kcedil: kcedil,
    Kcy: Kcy,
    kcy: kcy,
    Kfr: Kfr,
    kfr: kfr,
    kgreen: kgreen,
    KHcy: KHcy,
    khcy: khcy,
    KJcy: KJcy,
    kjcy: kjcy,
    Kopf: Kopf,
    kopf: kopf,
    Kscr: Kscr,
    kscr: kscr,
    lAarr: lAarr,
    Lacute: Lacute,
    lacute: lacute,
    laemptyv: laemptyv,
    lagran: lagran,
    Lambda: Lambda,
    lambda: lambda,
    lang: lang,
    Lang: Lang,
    langd: langd,
    langle: langle,
    lap: lap,
    Laplacetrf: Laplacetrf,
    laquo: laquo,
    larrb: larrb,
    larrbfs: larrbfs,
    larr: larr,
    Larr: Larr,
    lArr: lArr,
    larrfs: larrfs,
    larrhk: larrhk,
    larrlp: larrlp,
    larrpl: larrpl,
    larrsim: larrsim,
    larrtl: larrtl,
    latail: latail,
    lAtail: lAtail,
    lat: lat,
    late: late,
    lates: lates,
    lbarr: lbarr,
    lBarr: lBarr,
    lbbrk: lbbrk,
    lbrace: lbrace,
    lbrack: lbrack,
    lbrke: lbrke,
    lbrksld: lbrksld,
    lbrkslu: lbrkslu,
    Lcaron: Lcaron,
    lcaron: lcaron,
    Lcedil: Lcedil,
    lcedil: lcedil,
    lceil: lceil,
    lcub: lcub,
    Lcy: Lcy,
    lcy: lcy,
    ldca: ldca,
    ldquo: ldquo,
    ldquor: ldquor,
    ldrdhar: ldrdhar,
    ldrushar: ldrushar,
    ldsh: ldsh,
    le: le,
    lE: lE,
    LeftAngleBracket: LeftAngleBracket,
    LeftArrowBar: LeftArrowBar,
    leftarrow: leftarrow,
    LeftArrow: LeftArrow,
    Leftarrow: Leftarrow,
    LeftArrowRightArrow: LeftArrowRightArrow,
    leftarrowtail: leftarrowtail,
    LeftCeiling: LeftCeiling,
    LeftDoubleBracket: LeftDoubleBracket,
    LeftDownTeeVector: LeftDownTeeVector,
    LeftDownVectorBar: LeftDownVectorBar,
    LeftDownVector: LeftDownVector,
    LeftFloor: LeftFloor,
    leftharpoondown: leftharpoondown,
    leftharpoonup: leftharpoonup,
    leftleftarrows: leftleftarrows,
    leftrightarrow: leftrightarrow,
    LeftRightArrow: LeftRightArrow,
    Leftrightarrow: Leftrightarrow,
    leftrightarrows: leftrightarrows,
    leftrightharpoons: leftrightharpoons,
    leftrightsquigarrow: leftrightsquigarrow,
    LeftRightVector: LeftRightVector,
    LeftTeeArrow: LeftTeeArrow,
    LeftTee: LeftTee,
    LeftTeeVector: LeftTeeVector,
    leftthreetimes: leftthreetimes,
    LeftTriangleBar: LeftTriangleBar,
    LeftTriangle: LeftTriangle,
    LeftTriangleEqual: LeftTriangleEqual,
    LeftUpDownVector: LeftUpDownVector,
    LeftUpTeeVector: LeftUpTeeVector,
    LeftUpVectorBar: LeftUpVectorBar,
    LeftUpVector: LeftUpVector,
    LeftVectorBar: LeftVectorBar,
    LeftVector: LeftVector,
    lEg: lEg,
    leg: leg,
    leq: leq,
    leqq: leqq,
    leqslant: leqslant,
    lescc: lescc,
    les: les,
    lesdot: lesdot,
    lesdoto: lesdoto,
    lesdotor: lesdotor,
    lesg: lesg,
    lesges: lesges,
    lessapprox: lessapprox,
    lessdot: lessdot,
    lesseqgtr: lesseqgtr,
    lesseqqgtr: lesseqqgtr,
    LessEqualGreater: LessEqualGreater,
    LessFullEqual: LessFullEqual,
    LessGreater: LessGreater,
    lessgtr: lessgtr,
    LessLess: LessLess,
    lesssim: lesssim,
    LessSlantEqual: LessSlantEqual,
    LessTilde: LessTilde,
    lfisht: lfisht,
    lfloor: lfloor,
    Lfr: Lfr,
    lfr: lfr,
    lg: lg,
    lgE: lgE,
    lHar: lHar,
    lhard: lhard,
    lharu: lharu,
    lharul: lharul,
    lhblk: lhblk,
    LJcy: LJcy,
    ljcy: ljcy,
    llarr: llarr,
    ll: ll,
    Ll: Ll,
    llcorner: llcorner,
    Lleftarrow: Lleftarrow,
    llhard: llhard,
    lltri: lltri,
    Lmidot: Lmidot,
    lmidot: lmidot,
    lmoustache: lmoustache,
    lmoust: lmoust,
    lnap: lnap,
    lnapprox: lnapprox,
    lne: lne,
    lnE: lnE,
    lneq: lneq,
    lneqq: lneqq,
    lnsim: lnsim,
    loang: loang,
    loarr: loarr,
    lobrk: lobrk,
    longleftarrow: longleftarrow,
    LongLeftArrow: LongLeftArrow,
    Longleftarrow: Longleftarrow,
    longleftrightarrow: longleftrightarrow,
    LongLeftRightArrow: LongLeftRightArrow,
    Longleftrightarrow: Longleftrightarrow,
    longmapsto: longmapsto,
    longrightarrow: longrightarrow,
    LongRightArrow: LongRightArrow,
    Longrightarrow: Longrightarrow,
    looparrowleft: looparrowleft,
    looparrowright: looparrowright,
    lopar: lopar,
    Lopf: Lopf,
    lopf: lopf,
    loplus: loplus,
    lotimes: lotimes,
    lowast: lowast,
    lowbar: lowbar,
    LowerLeftArrow: LowerLeftArrow,
    LowerRightArrow: LowerRightArrow,
    loz: loz,
    lozenge: lozenge,
    lozf: lozf,
    lpar: lpar,
    lparlt: lparlt,
    lrarr: lrarr,
    lrcorner: lrcorner,
    lrhar: lrhar,
    lrhard: lrhard,
    lrm: lrm,
    lrtri: lrtri,
    lsaquo: lsaquo,
    lscr: lscr,
    Lscr: Lscr,
    lsh: lsh,
    Lsh: Lsh,
    lsim: lsim,
    lsime: lsime,
    lsimg: lsimg,
    lsqb: lsqb,
    lsquo: lsquo,
    lsquor: lsquor,
    Lstrok: Lstrok,
    lstrok: lstrok,
    ltcc: ltcc,
    ltcir: ltcir,
    lt: lt,
    LT: LT,
    Lt: Lt,
    ltdot: ltdot,
    lthree: lthree,
    ltimes: ltimes,
    ltlarr: ltlarr,
    ltquest: ltquest,
    ltri: ltri,
    ltrie: ltrie,
    ltrif: ltrif,
    ltrPar: ltrPar,
    lurdshar: lurdshar,
    luruhar: luruhar,
    lvertneqq: lvertneqq,
    lvnE: lvnE,
    macr: macr,
    male: male,
    malt: malt,
    maltese: maltese,
    map: map,
    mapsto: mapsto,
    mapstodown: mapstodown,
    mapstoleft: mapstoleft,
    mapstoup: mapstoup,
    marker: marker,
    mcomma: mcomma,
    Mcy: Mcy,
    mcy: mcy,
    mdash: mdash,
    mDDot: mDDot,
    measuredangle: measuredangle,
    MediumSpace: MediumSpace,
    Mellintrf: Mellintrf,
    Mfr: Mfr,
    mfr: mfr,
    mho: mho,
    micro: micro,
    midast: midast,
    midcir: midcir,
    mid: mid,
    middot: middot,
    minusb: minusb,
    minus: minus,
    minusd: minusd,
    minusdu: minusdu,
    MinusPlus: MinusPlus,
    mlcp: mlcp,
    mldr: mldr,
    mnplus: mnplus,
    models: models,
    Mopf: Mopf,
    mopf: mopf,
    mp: mp,
    mscr: mscr,
    Mscr: Mscr,
    mstpos: mstpos,
    Mu: Mu,
    mu: mu,
    multimap: multimap,
    mumap: mumap,
    nabla: nabla,
    Nacute: Nacute,
    nacute: nacute,
    nang: nang,
    nap: nap,
    napE: napE,
    napid: napid,
    napos: napos,
    napprox: napprox,
    natural: natural,
    naturals: naturals,
    natur: natur,
    nbsp: nbsp,
    nbump: nbump,
    nbumpe: nbumpe,
    ncap: ncap,
    Ncaron: Ncaron,
    ncaron: ncaron,
    Ncedil: Ncedil,
    ncedil: ncedil,
    ncong: ncong,
    ncongdot: ncongdot,
    ncup: ncup,
    Ncy: Ncy,
    ncy: ncy,
    ndash: ndash,
    nearhk: nearhk,
    nearr: nearr,
    neArr: neArr,
    nearrow: nearrow,
    ne: ne,
    nedot: nedot,
    NegativeMediumSpace: NegativeMediumSpace,
    NegativeThickSpace: NegativeThickSpace,
    NegativeThinSpace: NegativeThinSpace,
    NegativeVeryThinSpace: NegativeVeryThinSpace,
    nequiv: nequiv,
    nesear: nesear,
    nesim: nesim,
    NestedGreaterGreater: NestedGreaterGreater,
    NestedLessLess: NestedLessLess,
    NewLine: NewLine,
    nexist: nexist,
    nexists: nexists,
    Nfr: Nfr,
    nfr: nfr,
    ngE: ngE,
    nge: nge,
    ngeq: ngeq,
    ngeqq: ngeqq,
    ngeqslant: ngeqslant,
    nges: nges,
    nGg: nGg,
    ngsim: ngsim,
    nGt: nGt,
    ngt: ngt,
    ngtr: ngtr,
    nGtv: nGtv,
    nharr: nharr,
    nhArr: nhArr,
    nhpar: nhpar,
    ni: ni,
    nis: nis,
    nisd: nisd,
    niv: niv,
    NJcy: NJcy,
    njcy: njcy,
    nlarr: nlarr,
    nlArr: nlArr,
    nldr: nldr,
    nlE: nlE,
    nle: nle,
    nleftarrow: nleftarrow,
    nLeftarrow: nLeftarrow,
    nleftrightarrow: nleftrightarrow,
    nLeftrightarrow: nLeftrightarrow,
    nleq: nleq,
    nleqq: nleqq,
    nleqslant: nleqslant,
    nles: nles,
    nless: nless,
    nLl: nLl,
    nlsim: nlsim,
    nLt: nLt,
    nlt: nlt,
    nltri: nltri,
    nltrie: nltrie,
    nLtv: nLtv,
    nmid: nmid,
    NoBreak: NoBreak,
    NonBreakingSpace: NonBreakingSpace,
    nopf: nopf,
    Nopf: Nopf,
    Not: Not,
    not: not,
    NotCongruent: NotCongruent,
    NotCupCap: NotCupCap,
    NotDoubleVerticalBar: NotDoubleVerticalBar,
    NotElement: NotElement,
    NotEqual: NotEqual,
    NotEqualTilde: NotEqualTilde,
    NotExists: NotExists,
    NotGreater: NotGreater,
    NotGreaterEqual: NotGreaterEqual,
    NotGreaterFullEqual: NotGreaterFullEqual,
    NotGreaterGreater: NotGreaterGreater,
    NotGreaterLess: NotGreaterLess,
    NotGreaterSlantEqual: NotGreaterSlantEqual,
    NotGreaterTilde: NotGreaterTilde,
    NotHumpDownHump: NotHumpDownHump,
    NotHumpEqual: NotHumpEqual,
    notin: notin,
    notindot: notindot,
    notinE: notinE,
    notinva: notinva,
    notinvb: notinvb,
    notinvc: notinvc,
    NotLeftTriangleBar: NotLeftTriangleBar,
    NotLeftTriangle: NotLeftTriangle,
    NotLeftTriangleEqual: NotLeftTriangleEqual,
    NotLess: NotLess,
    NotLessEqual: NotLessEqual,
    NotLessGreater: NotLessGreater,
    NotLessLess: NotLessLess,
    NotLessSlantEqual: NotLessSlantEqual,
    NotLessTilde: NotLessTilde,
    NotNestedGreaterGreater: NotNestedGreaterGreater,
    NotNestedLessLess: NotNestedLessLess,
    notni: notni,
    notniva: notniva,
    notnivb: notnivb,
    notnivc: notnivc,
    NotPrecedes: NotPrecedes,
    NotPrecedesEqual: NotPrecedesEqual,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    NotReverseElement: NotReverseElement,
    NotRightTriangleBar: NotRightTriangleBar,
    NotRightTriangle: NotRightTriangle,
    NotRightTriangleEqual: NotRightTriangleEqual,
    NotSquareSubset: NotSquareSubset,
    NotSquareSubsetEqual: NotSquareSubsetEqual,
    NotSquareSuperset: NotSquareSuperset,
    NotSquareSupersetEqual: NotSquareSupersetEqual,
    NotSubset: NotSubset,
    NotSubsetEqual: NotSubsetEqual,
    NotSucceeds: NotSucceeds,
    NotSucceedsEqual: NotSucceedsEqual,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    NotSucceedsTilde: NotSucceedsTilde,
    NotSuperset: NotSuperset,
    NotSupersetEqual: NotSupersetEqual,
    NotTilde: NotTilde,
    NotTildeEqual: NotTildeEqual,
    NotTildeFullEqual: NotTildeFullEqual,
    NotTildeTilde: NotTildeTilde,
    NotVerticalBar: NotVerticalBar,
    nparallel: nparallel,
    npar: npar,
    nparsl: nparsl,
    npart: npart,
    npolint: npolint,
    npr: npr,
    nprcue: nprcue,
    nprec: nprec,
    npreceq: npreceq,
    npre: npre,
    nrarrc: nrarrc,
    nrarr: nrarr,
    nrArr: nrArr,
    nrarrw: nrarrw,
    nrightarrow: nrightarrow,
    nRightarrow: nRightarrow,
    nrtri: nrtri,
    nrtrie: nrtrie,
    nsc: nsc,
    nsccue: nsccue,
    nsce: nsce,
    Nscr: Nscr,
    nscr: nscr,
    nshortmid: nshortmid,
    nshortparallel: nshortparallel,
    nsim: nsim,
    nsime: nsime,
    nsimeq: nsimeq,
    nsmid: nsmid,
    nspar: nspar,
    nsqsube: nsqsube,
    nsqsupe: nsqsupe,
    nsub: nsub,
    nsubE: nsubE,
    nsube: nsube,
    nsubset: nsubset,
    nsubseteq: nsubseteq,
    nsubseteqq: nsubseteqq,
    nsucc: nsucc,
    nsucceq: nsucceq,
    nsup: nsup,
    nsupE: nsupE,
    nsupe: nsupe,
    nsupset: nsupset,
    nsupseteq: nsupseteq,
    nsupseteqq: nsupseteqq,
    ntgl: ntgl,
    Ntilde: Ntilde,
    ntilde: ntilde,
    ntlg: ntlg,
    ntriangleleft: ntriangleleft,
    ntrianglelefteq: ntrianglelefteq,
    ntriangleright: ntriangleright,
    ntrianglerighteq: ntrianglerighteq,
    Nu: Nu,
    nu: nu,
    num: num,
    numero: numero,
    numsp: numsp,
    nvap: nvap,
    nvdash: nvdash,
    nvDash: nvDash,
    nVdash: nVdash,
    nVDash: nVDash,
    nvge: nvge,
    nvgt: nvgt,
    nvHarr: nvHarr,
    nvinfin: nvinfin,
    nvlArr: nvlArr,
    nvle: nvle,
    nvlt: nvlt,
    nvltrie: nvltrie,
    nvrArr: nvrArr,
    nvrtrie: nvrtrie,
    nvsim: nvsim,
    nwarhk: nwarhk,
    nwarr: nwarr,
    nwArr: nwArr,
    nwarrow: nwarrow,
    nwnear: nwnear,
    Oacute: Oacute,
    oacute: oacute,
    oast: oast,
    Ocirc: Ocirc,
    ocirc: ocirc,
    ocir: ocir,
    Ocy: Ocy,
    ocy: ocy,
    odash: odash,
    Odblac: Odblac,
    odblac: odblac,
    odiv: odiv,
    odot: odot,
    odsold: odsold,
    OElig: OElig,
    oelig: oelig,
    ofcir: ofcir,
    Ofr: Ofr,
    ofr: ofr,
    ogon: ogon,
    Ograve: Ograve,
    ograve: ograve,
    ogt: ogt,
    ohbar: ohbar,
    ohm: ohm,
    oint: oint,
    olarr: olarr,
    olcir: olcir,
    olcross: olcross,
    oline: oline,
    olt: olt,
    Omacr: Omacr,
    omacr: omacr,
    Omega: Omega,
    omega: omega,
    Omicron: Omicron,
    omicron: omicron,
    omid: omid,
    ominus: ominus,
    Oopf: Oopf,
    oopf: oopf,
    opar: opar,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    OpenCurlyQuote: OpenCurlyQuote,
    operp: operp,
    oplus: oplus,
    orarr: orarr,
    Or: Or,
    or: or,
    ord: ord,
    order: order,
    orderof: orderof,
    ordf: ordf,
    ordm: ordm,
    origof: origof,
    oror: oror,
    orslope: orslope,
    orv: orv,
    oS: oS,
    Oscr: Oscr,
    oscr: oscr,
    Oslash: Oslash,
    oslash: oslash,
    osol: osol,
    Otilde: Otilde,
    otilde: otilde,
    otimesas: otimesas,
    Otimes: Otimes,
    otimes: otimes,
    Ouml: Ouml,
    ouml: ouml,
    ovbar: ovbar,
    OverBar: OverBar,
    OverBrace: OverBrace,
    OverBracket: OverBracket,
    OverParenthesis: OverParenthesis,
    para: para,
    parallel: parallel,
    par: par,
    parsim: parsim,
    parsl: parsl,
    part: part,
    PartialD: PartialD,
    Pcy: Pcy,
    pcy: pcy,
    percnt: percnt,
    period: period,
    permil: permil,
    perp: perp,
    pertenk: pertenk,
    Pfr: Pfr,
    pfr: pfr,
    Phi: Phi,
    phi: phi,
    phiv: phiv,
    phmmat: phmmat,
    phone: phone,
    Pi: Pi,
    pi: pi,
    pitchfork: pitchfork,
    piv: piv,
    planck: planck,
    planckh: planckh,
    plankv: plankv,
    plusacir: plusacir,
    plusb: plusb,
    pluscir: pluscir,
    plus: plus,
    plusdo: plusdo,
    plusdu: plusdu,
    pluse: pluse,
    PlusMinus: PlusMinus,
    plusmn: plusmn,
    plussim: plussim,
    plustwo: plustwo,
    pm: pm,
    Poincareplane: Poincareplane,
    pointint: pointint,
    popf: popf,
    Popf: Popf,
    pound: pound,
    prap: prap,
    Pr: Pr,
    pr: pr,
    prcue: prcue,
    precapprox: precapprox,
    prec: prec,
    preccurlyeq: preccurlyeq,
    Precedes: Precedes,
    PrecedesEqual: PrecedesEqual,
    PrecedesSlantEqual: PrecedesSlantEqual,
    PrecedesTilde: PrecedesTilde,
    preceq: preceq,
    precnapprox: precnapprox,
    precneqq: precneqq,
    precnsim: precnsim,
    pre: pre,
    prE: prE,
    precsim: precsim,
    prime: prime,
    Prime: Prime,
    primes: primes,
    prnap: prnap,
    prnE: prnE,
    prnsim: prnsim,
    prod: prod,
    Product: Product,
    profalar: profalar,
    profline: profline,
    profsurf: profsurf,
    prop: prop,
    Proportional: Proportional,
    Proportion: Proportion,
    propto: propto,
    prsim: prsim,
    prurel: prurel,
    Pscr: Pscr,
    pscr: pscr,
    Psi: Psi,
    psi: psi,
    puncsp: puncsp,
    Qfr: Qfr,
    qfr: qfr,
    qint: qint,
    qopf: qopf,
    Qopf: Qopf,
    qprime: qprime,
    Qscr: Qscr,
    qscr: qscr,
    quaternions: quaternions,
    quatint: quatint,
    quest: quest,
    questeq: questeq,
    quot: quot,
    QUOT: QUOT,
    rAarr: rAarr,
    race: race,
    Racute: Racute,
    racute: racute,
    radic: radic,
    raemptyv: raemptyv,
    rang: rang,
    Rang: Rang,
    rangd: rangd,
    range: range,
    rangle: rangle,
    raquo: raquo,
    rarrap: rarrap,
    rarrb: rarrb,
    rarrbfs: rarrbfs,
    rarrc: rarrc,
    rarr: rarr,
    Rarr: Rarr,
    rArr: rArr,
    rarrfs: rarrfs,
    rarrhk: rarrhk,
    rarrlp: rarrlp,
    rarrpl: rarrpl,
    rarrsim: rarrsim,
    Rarrtl: Rarrtl,
    rarrtl: rarrtl,
    rarrw: rarrw,
    ratail: ratail,
    rAtail: rAtail,
    ratio: ratio,
    rationals: rationals,
    rbarr: rbarr,
    rBarr: rBarr,
    RBarr: RBarr,
    rbbrk: rbbrk,
    rbrace: rbrace,
    rbrack: rbrack,
    rbrke: rbrke,
    rbrksld: rbrksld,
    rbrkslu: rbrkslu,
    Rcaron: Rcaron,
    rcaron: rcaron,
    Rcedil: Rcedil,
    rcedil: rcedil,
    rceil: rceil,
    rcub: rcub,
    Rcy: Rcy,
    rcy: rcy,
    rdca: rdca,
    rdldhar: rdldhar,
    rdquo: rdquo,
    rdquor: rdquor,
    rdsh: rdsh,
    real: real,
    realine: realine,
    realpart: realpart,
    reals: reals,
    Re: Re,
    rect: rect,
    reg: reg,
    REG: REG,
    ReverseElement: ReverseElement,
    ReverseEquilibrium: ReverseEquilibrium,
    ReverseUpEquilibrium: ReverseUpEquilibrium,
    rfisht: rfisht,
    rfloor: rfloor,
    rfr: rfr,
    Rfr: Rfr,
    rHar: rHar,
    rhard: rhard,
    rharu: rharu,
    rharul: rharul,
    Rho: Rho,
    rho: rho,
    rhov: rhov,
    RightAngleBracket: RightAngleBracket,
    RightArrowBar: RightArrowBar,
    rightarrow: rightarrow,
    RightArrow: RightArrow,
    Rightarrow: Rightarrow,
    RightArrowLeftArrow: RightArrowLeftArrow,
    rightarrowtail: rightarrowtail,
    RightCeiling: RightCeiling,
    RightDoubleBracket: RightDoubleBracket,
    RightDownTeeVector: RightDownTeeVector,
    RightDownVectorBar: RightDownVectorBar,
    RightDownVector: RightDownVector,
    RightFloor: RightFloor,
    rightharpoondown: rightharpoondown,
    rightharpoonup: rightharpoonup,
    rightleftarrows: rightleftarrows,
    rightleftharpoons: rightleftharpoons,
    rightrightarrows: rightrightarrows,
    rightsquigarrow: rightsquigarrow,
    RightTeeArrow: RightTeeArrow,
    RightTee: RightTee,
    RightTeeVector: RightTeeVector,
    rightthreetimes: rightthreetimes,
    RightTriangleBar: RightTriangleBar,
    RightTriangle: RightTriangle,
    RightTriangleEqual: RightTriangleEqual,
    RightUpDownVector: RightUpDownVector,
    RightUpTeeVector: RightUpTeeVector,
    RightUpVectorBar: RightUpVectorBar,
    RightUpVector: RightUpVector,
    RightVectorBar: RightVectorBar,
    RightVector: RightVector,
    ring: ring,
    risingdotseq: risingdotseq,
    rlarr: rlarr,
    rlhar: rlhar,
    rlm: rlm,
    rmoustache: rmoustache,
    rmoust: rmoust,
    rnmid: rnmid,
    roang: roang,
    roarr: roarr,
    robrk: robrk,
    ropar: ropar,
    ropf: ropf,
    Ropf: Ropf,
    roplus: roplus,
    rotimes: rotimes,
    RoundImplies: RoundImplies,
    rpar: rpar,
    rpargt: rpargt,
    rppolint: rppolint,
    rrarr: rrarr,
    Rrightarrow: Rrightarrow,
    rsaquo: rsaquo,
    rscr: rscr,
    Rscr: Rscr,
    rsh: rsh,
    Rsh: Rsh,
    rsqb: rsqb,
    rsquo: rsquo,
    rsquor: rsquor,
    rthree: rthree,
    rtimes: rtimes,
    rtri: rtri,
    rtrie: rtrie,
    rtrif: rtrif,
    rtriltri: rtriltri,
    RuleDelayed: RuleDelayed,
    ruluhar: ruluhar,
    rx: rx,
    Sacute: Sacute,
    sacute: sacute,
    sbquo: sbquo,
    scap: scap,
    Scaron: Scaron,
    scaron: scaron,
    Sc: Sc,
    sc: sc,
    sccue: sccue,
    sce: sce,
    scE: scE,
    Scedil: Scedil,
    scedil: scedil,
    Scirc: Scirc,
    scirc: scirc,
    scnap: scnap,
    scnE: scnE,
    scnsim: scnsim,
    scpolint: scpolint,
    scsim: scsim,
    Scy: Scy,
    scy: scy,
    sdotb: sdotb,
    sdot: sdot,
    sdote: sdote,
    searhk: searhk,
    searr: searr,
    seArr: seArr,
    searrow: searrow,
    sect: sect,
    semi: semi,
    seswar: seswar,
    setminus: setminus,
    setmn: setmn,
    sext: sext,
    Sfr: Sfr,
    sfr: sfr,
    sfrown: sfrown,
    sharp: sharp,
    SHCHcy: SHCHcy,
    shchcy: shchcy,
    SHcy: SHcy,
    shcy: shcy,
    ShortDownArrow: ShortDownArrow,
    ShortLeftArrow: ShortLeftArrow,
    shortmid: shortmid,
    shortparallel: shortparallel,
    ShortRightArrow: ShortRightArrow,
    ShortUpArrow: ShortUpArrow,
    shy: shy,
    Sigma: Sigma,
    sigma: sigma,
    sigmaf: sigmaf,
    sigmav: sigmav,
    sim: sim,
    simdot: simdot,
    sime: sime,
    simeq: simeq,
    simg: simg,
    simgE: simgE,
    siml: siml,
    simlE: simlE,
    simne: simne,
    simplus: simplus,
    simrarr: simrarr,
    slarr: slarr,
    SmallCircle: SmallCircle,
    smallsetminus: smallsetminus,
    smashp: smashp,
    smeparsl: smeparsl,
    smid: smid,
    smile: smile,
    smt: smt,
    smte: smte,
    smtes: smtes,
    SOFTcy: SOFTcy,
    softcy: softcy,
    solbar: solbar,
    solb: solb,
    sol: sol,
    Sopf: Sopf,
    sopf: sopf,
    spades: spades,
    spadesuit: spadesuit,
    spar: spar,
    sqcap: sqcap,
    sqcaps: sqcaps,
    sqcup: sqcup,
    sqcups: sqcups,
    Sqrt: Sqrt,
    sqsub: sqsub,
    sqsube: sqsube,
    sqsubset: sqsubset,
    sqsubseteq: sqsubseteq,
    sqsup: sqsup,
    sqsupe: sqsupe,
    sqsupset: sqsupset,
    sqsupseteq: sqsupseteq,
    square: square,
    Square: Square,
    SquareIntersection: SquareIntersection,
    SquareSubset: SquareSubset,
    SquareSubsetEqual: SquareSubsetEqual,
    SquareSuperset: SquareSuperset,
    SquareSupersetEqual: SquareSupersetEqual,
    SquareUnion: SquareUnion,
    squarf: squarf,
    squ: squ,
    squf: squf,
    srarr: srarr,
    Sscr: Sscr,
    sscr: sscr,
    ssetmn: ssetmn,
    ssmile: ssmile,
    sstarf: sstarf,
    Star: Star,
    star: star,
    starf: starf,
    straightepsilon: straightepsilon,
    straightphi: straightphi,
    strns: strns,
    sub: sub,
    Sub: Sub,
    subdot: subdot,
    subE: subE,
    sube: sube,
    subedot: subedot,
    submult: submult,
    subnE: subnE,
    subne: subne,
    subplus: subplus,
    subrarr: subrarr,
    subset: subset,
    Subset: Subset,
    subseteq: subseteq,
    subseteqq: subseteqq,
    SubsetEqual: SubsetEqual,
    subsetneq: subsetneq,
    subsetneqq: subsetneqq,
    subsim: subsim,
    subsub: subsub,
    subsup: subsup,
    succapprox: succapprox,
    succ: succ,
    succcurlyeq: succcurlyeq,
    Succeeds: Succeeds,
    SucceedsEqual: SucceedsEqual,
    SucceedsSlantEqual: SucceedsSlantEqual,
    SucceedsTilde: SucceedsTilde,
    succeq: succeq,
    succnapprox: succnapprox,
    succneqq: succneqq,
    succnsim: succnsim,
    succsim: succsim,
    SuchThat: SuchThat,
    sum: sum,
    Sum: Sum,
    sung: sung,
    sup1: sup1,
    sup2: sup2,
    sup3: sup3,
    sup: sup,
    Sup: Sup,
    supdot: supdot,
    supdsub: supdsub,
    supE: supE,
    supe: supe,
    supedot: supedot,
    Superset: Superset,
    SupersetEqual: SupersetEqual,
    suphsol: suphsol,
    suphsub: suphsub,
    suplarr: suplarr,
    supmult: supmult,
    supnE: supnE,
    supne: supne,
    supplus: supplus,
    supset: supset,
    Supset: Supset,
    supseteq: supseteq,
    supseteqq: supseteqq,
    supsetneq: supsetneq,
    supsetneqq: supsetneqq,
    supsim: supsim,
    supsub: supsub,
    supsup: supsup,
    swarhk: swarhk,
    swarr: swarr,
    swArr: swArr,
    swarrow: swarrow,
    swnwar: swnwar,
    szlig: szlig,
    Tab: Tab,
    target: target,
    Tau: Tau,
    tau: tau,
    tbrk: tbrk,
    Tcaron: Tcaron,
    tcaron: tcaron,
    Tcedil: Tcedil,
    tcedil: tcedil,
    Tcy: Tcy,
    tcy: tcy,
    tdot: tdot,
    telrec: telrec,
    Tfr: Tfr,
    tfr: tfr,
    there4: there4,
    therefore: therefore,
    Therefore: Therefore,
    Theta: Theta,
    theta: theta,
    thetasym: thetasym,
    thetav: thetav,
    thickapprox: thickapprox,
    thicksim: thicksim,
    ThickSpace: ThickSpace,
    ThinSpace: ThinSpace,
    thinsp: thinsp,
    thkap: thkap,
    thksim: thksim,
    THORN: THORN,
    thorn: thorn,
    tilde: tilde,
    Tilde: Tilde,
    TildeEqual: TildeEqual,
    TildeFullEqual: TildeFullEqual,
    TildeTilde: TildeTilde,
    timesbar: timesbar,
    timesb: timesb,
    times: times,
    timesd: timesd,
    tint: tint,
    toea: toea,
    topbot: topbot,
    topcir: topcir,
    top: top,
    Topf: Topf,
    topf: topf,
    topfork: topfork,
    tosa: tosa,
    tprime: tprime,
    trade: trade,
    TRADE: TRADE,
    triangle: triangle,
    triangledown: triangledown,
    triangleleft: triangleleft,
    trianglelefteq: trianglelefteq,
    triangleq: triangleq,
    triangleright: triangleright,
    trianglerighteq: trianglerighteq,
    tridot: tridot,
    trie: trie,
    triminus: triminus,
    TripleDot: TripleDot,
    triplus: triplus,
    trisb: trisb,
    tritime: tritime,
    trpezium: trpezium,
    Tscr: Tscr,
    tscr: tscr,
    TScy: TScy,
    tscy: tscy,
    TSHcy: TSHcy,
    tshcy: tshcy,
    Tstrok: Tstrok,
    tstrok: tstrok,
    twixt: twixt,
    twoheadleftarrow: twoheadleftarrow,
    twoheadrightarrow: twoheadrightarrow,
    Uacute: Uacute,
    uacute: uacute,
    uarr: uarr,
    Uarr: Uarr,
    uArr: uArr,
    Uarrocir: Uarrocir,
    Ubrcy: Ubrcy,
    ubrcy: ubrcy,
    Ubreve: Ubreve,
    ubreve: ubreve,
    Ucirc: Ucirc,
    ucirc: ucirc,
    Ucy: Ucy,
    ucy: ucy,
    udarr: udarr,
    Udblac: Udblac,
    udblac: udblac,
    udhar: udhar,
    ufisht: ufisht,
    Ufr: Ufr,
    ufr: ufr,
    Ugrave: Ugrave,
    ugrave: ugrave,
    uHar: uHar,
    uharl: uharl,
    uharr: uharr,
    uhblk: uhblk,
    ulcorn: ulcorn,
    ulcorner: ulcorner,
    ulcrop: ulcrop,
    ultri: ultri,
    Umacr: Umacr,
    umacr: umacr,
    uml: uml,
    UnderBar: UnderBar,
    UnderBrace: UnderBrace,
    UnderBracket: UnderBracket,
    UnderParenthesis: UnderParenthesis,
    Union: Union,
    UnionPlus: UnionPlus,
    Uogon: Uogon,
    uogon: uogon,
    Uopf: Uopf,
    uopf: uopf,
    UpArrowBar: UpArrowBar,
    uparrow: uparrow,
    UpArrow: UpArrow,
    Uparrow: Uparrow,
    UpArrowDownArrow: UpArrowDownArrow,
    updownarrow: updownarrow,
    UpDownArrow: UpDownArrow,
    Updownarrow: Updownarrow,
    UpEquilibrium: UpEquilibrium,
    upharpoonleft: upharpoonleft,
    upharpoonright: upharpoonright,
    uplus: uplus,
    UpperLeftArrow: UpperLeftArrow,
    UpperRightArrow: UpperRightArrow,
    upsi: upsi,
    Upsi: Upsi,
    upsih: upsih,
    Upsilon: Upsilon,
    upsilon: upsilon,
    UpTeeArrow: UpTeeArrow,
    UpTee: UpTee,
    upuparrows: upuparrows,
    urcorn: urcorn,
    urcorner: urcorner,
    urcrop: urcrop,
    Uring: Uring,
    uring: uring,
    urtri: urtri,
    Uscr: Uscr,
    uscr: uscr,
    utdot: utdot,
    Utilde: Utilde,
    utilde: utilde,
    utri: utri,
    utrif: utrif,
    uuarr: uuarr,
    Uuml: Uuml,
    uuml: uuml,
    uwangle: uwangle,
    vangrt: vangrt,
    varepsilon: varepsilon,
    varkappa: varkappa,
    varnothing: varnothing,
    varphi: varphi,
    varpi: varpi,
    varpropto: varpropto,
    varr: varr,
    vArr: vArr,
    varrho: varrho,
    varsigma: varsigma,
    varsubsetneq: varsubsetneq,
    varsubsetneqq: varsubsetneqq,
    varsupsetneq: varsupsetneq,
    varsupsetneqq: varsupsetneqq,
    vartheta: vartheta,
    vartriangleleft: vartriangleleft,
    vartriangleright: vartriangleright,
    vBar: vBar,
    Vbar: Vbar,
    vBarv: vBarv,
    Vcy: Vcy,
    vcy: vcy,
    vdash: vdash,
    vDash: vDash,
    Vdash: Vdash,
    VDash: VDash,
    Vdashl: Vdashl,
    veebar: veebar,
    vee: vee,
    Vee: Vee,
    veeeq: veeeq,
    vellip: vellip,
    verbar: verbar,
    Verbar: Verbar,
    vert: vert,
    Vert: Vert,
    VerticalBar: VerticalBar,
    VerticalLine: VerticalLine,
    VerticalSeparator: VerticalSeparator,
    VerticalTilde: VerticalTilde,
    VeryThinSpace: VeryThinSpace,
    Vfr: Vfr,
    vfr: vfr,
    vltri: vltri,
    vnsub: vnsub,
    vnsup: vnsup,
    Vopf: Vopf,
    vopf: vopf,
    vprop: vprop,
    vrtri: vrtri,
    Vscr: Vscr,
    vscr: vscr,
    vsubnE: vsubnE,
    vsubne: vsubne,
    vsupnE: vsupnE,
    vsupne: vsupne,
    Vvdash: Vvdash,
    vzigzag: vzigzag,
    Wcirc: Wcirc,
    wcirc: wcirc,
    wedbar: wedbar,
    wedge: wedge,
    Wedge: Wedge,
    wedgeq: wedgeq,
    weierp: weierp,
    Wfr: Wfr,
    wfr: wfr,
    Wopf: Wopf,
    wopf: wopf,
    wp: wp,
    wr: wr,
    wreath: wreath,
    Wscr: Wscr,
    wscr: wscr,
    xcap: xcap,
    xcirc: xcirc,
    xcup: xcup,
    xdtri: xdtri,
    Xfr: Xfr,
    xfr: xfr,
    xharr: xharr,
    xhArr: xhArr,
    Xi: Xi,
    xi: xi,
    xlarr: xlarr,
    xlArr: xlArr,
    xmap: xmap,
    xnis: xnis,
    xodot: xodot,
    Xopf: Xopf,
    xopf: xopf,
    xoplus: xoplus,
    xotime: xotime,
    xrarr: xrarr,
    xrArr: xrArr,
    Xscr: Xscr,
    xscr: xscr,
    xsqcup: xsqcup,
    xuplus: xuplus,
    xutri: xutri,
    xvee: xvee,
    xwedge: xwedge,
    Yacute: Yacute,
    yacute: yacute,
    YAcy: YAcy,
    yacy: yacy,
    Ycirc: Ycirc,
    ycirc: ycirc,
    Ycy: Ycy,
    ycy: ycy,
    yen: yen,
    Yfr: Yfr,
    yfr: yfr,
    YIcy: YIcy,
    yicy: yicy,
    Yopf: Yopf,
    yopf: yopf,
    Yscr: Yscr,
    yscr: yscr,
    YUcy: YUcy,
    yucy: yucy,
    yuml: yuml,
    Yuml: Yuml,
    Zacute: Zacute,
    zacute: zacute,
    Zcaron: Zcaron,
    zcaron: zcaron,
    Zcy: Zcy,
    zcy: zcy,
    Zdot: Zdot,
    zdot: zdot,
    zeetrf: zeetrf,
    ZeroWidthSpace: ZeroWidthSpace,
    Zeta: Zeta,
    zeta: zeta,
    zfr: zfr,
    Zfr: Zfr,
    ZHcy: ZHcy,
    zhcy: zhcy,
    zigrarr: zigrarr,
    zopf: zopf,
    Zopf: Zopf,
    Zscr: Zscr,
    zscr: zscr,
    zwj: zwj,
    zwnj: zwnj,
    default: entities
});

var Aacute$1 = "Á";
var aacute$1 = "á";
var Acirc$1 = "Â";
var acirc$1 = "â";
var acute$1 = "´";
var AElig$1 = "Æ";
var aelig$1 = "æ";
var Agrave$1 = "À";
var agrave$1 = "à";
var amp$1 = "&";
var AMP$1 = "&";
var Aring$1 = "Å";
var aring$1 = "å";
var Atilde$1 = "Ã";
var atilde$1 = "ã";
var Auml$1 = "Ä";
var auml$1 = "ä";
var brvbar$1 = "¦";
var Ccedil$1 = "Ç";
var ccedil$1 = "ç";
var cedil$1 = "¸";
var cent$1 = "¢";
var copy$1 = "©";
var COPY$1 = "©";
var curren$1 = "¤";
var deg$1 = "°";
var divide$1 = "÷";
var Eacute$1 = "É";
var eacute$1 = "é";
var Ecirc$1 = "Ê";
var ecirc$1 = "ê";
var Egrave$1 = "È";
var egrave$1 = "è";
var ETH$1 = "Ð";
var eth$1 = "ð";
var Euml$1 = "Ë";
var euml$1 = "ë";
var frac12$1 = "½";
var frac14$1 = "¼";
var frac34$1 = "¾";
var gt$1 = ">";
var GT$1 = ">";
var Iacute$1 = "Í";
var iacute$1 = "í";
var Icirc$1 = "Î";
var icirc$1 = "î";
var iexcl$1 = "¡";
var Igrave$1 = "Ì";
var igrave$1 = "ì";
var iquest$1 = "¿";
var Iuml$1 = "Ï";
var iuml$1 = "ï";
var laquo$1 = "«";
var lt$1 = "<";
var LT$1 = "<";
var macr$1 = "¯";
var micro$1 = "µ";
var middot$1 = "·";
var nbsp$1 = " ";
var not$1 = "¬";
var Ntilde$1 = "Ñ";
var ntilde$1 = "ñ";
var Oacute$1 = "Ó";
var oacute$1 = "ó";
var Ocirc$1 = "Ô";
var ocirc$1 = "ô";
var Ograve$1 = "Ò";
var ograve$1 = "ò";
var ordf$1 = "ª";
var ordm$1 = "º";
var Oslash$1 = "Ø";
var oslash$1 = "ø";
var Otilde$1 = "Õ";
var otilde$1 = "õ";
var Ouml$1 = "Ö";
var ouml$1 = "ö";
var para$1 = "¶";
var plusmn$1 = "±";
var pound$1 = "£";
var quot$1 = "\"";
var QUOT$1 = "\"";
var raquo$1 = "»";
var reg$1 = "®";
var REG$1 = "®";
var sect$1 = "§";
var shy$1 = "­";
var sup1$1 = "¹";
var sup2$1 = "²";
var sup3$1 = "³";
var szlig$1 = "ß";
var THORN$1 = "Þ";
var thorn$1 = "þ";
var times$1 = "×";
var Uacute$1 = "Ú";
var uacute$1 = "ú";
var Ucirc$1 = "Û";
var ucirc$1 = "û";
var Ugrave$1 = "Ù";
var ugrave$1 = "ù";
var uml$1 = "¨";
var Uuml$1 = "Ü";
var uuml$1 = "ü";
var Yacute$1 = "Ý";
var yacute$1 = "ý";
var yen$1 = "¥";
var yuml$1 = "ÿ";
var legacy = {
	Aacute: Aacute$1,
	aacute: aacute$1,
	Acirc: Acirc$1,
	acirc: acirc$1,
	acute: acute$1,
	AElig: AElig$1,
	aelig: aelig$1,
	Agrave: Agrave$1,
	agrave: agrave$1,
	amp: amp$1,
	AMP: AMP$1,
	Aring: Aring$1,
	aring: aring$1,
	Atilde: Atilde$1,
	atilde: atilde$1,
	Auml: Auml$1,
	auml: auml$1,
	brvbar: brvbar$1,
	Ccedil: Ccedil$1,
	ccedil: ccedil$1,
	cedil: cedil$1,
	cent: cent$1,
	copy: copy$1,
	COPY: COPY$1,
	curren: curren$1,
	deg: deg$1,
	divide: divide$1,
	Eacute: Eacute$1,
	eacute: eacute$1,
	Ecirc: Ecirc$1,
	ecirc: ecirc$1,
	Egrave: Egrave$1,
	egrave: egrave$1,
	ETH: ETH$1,
	eth: eth$1,
	Euml: Euml$1,
	euml: euml$1,
	frac12: frac12$1,
	frac14: frac14$1,
	frac34: frac34$1,
	gt: gt$1,
	GT: GT$1,
	Iacute: Iacute$1,
	iacute: iacute$1,
	Icirc: Icirc$1,
	icirc: icirc$1,
	iexcl: iexcl$1,
	Igrave: Igrave$1,
	igrave: igrave$1,
	iquest: iquest$1,
	Iuml: Iuml$1,
	iuml: iuml$1,
	laquo: laquo$1,
	lt: lt$1,
	LT: LT$1,
	macr: macr$1,
	micro: micro$1,
	middot: middot$1,
	nbsp: nbsp$1,
	not: not$1,
	Ntilde: Ntilde$1,
	ntilde: ntilde$1,
	Oacute: Oacute$1,
	oacute: oacute$1,
	Ocirc: Ocirc$1,
	ocirc: ocirc$1,
	Ograve: Ograve$1,
	ograve: ograve$1,
	ordf: ordf$1,
	ordm: ordm$1,
	Oslash: Oslash$1,
	oslash: oslash$1,
	Otilde: Otilde$1,
	otilde: otilde$1,
	Ouml: Ouml$1,
	ouml: ouml$1,
	para: para$1,
	plusmn: plusmn$1,
	pound: pound$1,
	quot: quot$1,
	QUOT: QUOT$1,
	raquo: raquo$1,
	reg: reg$1,
	REG: REG$1,
	sect: sect$1,
	shy: shy$1,
	sup1: sup1$1,
	sup2: sup2$1,
	sup3: sup3$1,
	szlig: szlig$1,
	THORN: THORN$1,
	thorn: thorn$1,
	times: times$1,
	Uacute: Uacute$1,
	uacute: uacute$1,
	Ucirc: Ucirc$1,
	ucirc: ucirc$1,
	Ugrave: Ugrave$1,
	ugrave: ugrave$1,
	uml: uml$1,
	Uuml: Uuml$1,
	uuml: uuml$1,
	Yacute: Yacute$1,
	yacute: yacute$1,
	yen: yen$1,
	yuml: yuml$1
};

var legacy$1 = /*#__PURE__*/Object.freeze({
    Aacute: Aacute$1,
    aacute: aacute$1,
    Acirc: Acirc$1,
    acirc: acirc$1,
    acute: acute$1,
    AElig: AElig$1,
    aelig: aelig$1,
    Agrave: Agrave$1,
    agrave: agrave$1,
    amp: amp$1,
    AMP: AMP$1,
    Aring: Aring$1,
    aring: aring$1,
    Atilde: Atilde$1,
    atilde: atilde$1,
    Auml: Auml$1,
    auml: auml$1,
    brvbar: brvbar$1,
    Ccedil: Ccedil$1,
    ccedil: ccedil$1,
    cedil: cedil$1,
    cent: cent$1,
    copy: copy$1,
    COPY: COPY$1,
    curren: curren$1,
    deg: deg$1,
    divide: divide$1,
    Eacute: Eacute$1,
    eacute: eacute$1,
    Ecirc: Ecirc$1,
    ecirc: ecirc$1,
    Egrave: Egrave$1,
    egrave: egrave$1,
    ETH: ETH$1,
    eth: eth$1,
    Euml: Euml$1,
    euml: euml$1,
    frac12: frac12$1,
    frac14: frac14$1,
    frac34: frac34$1,
    gt: gt$1,
    GT: GT$1,
    Iacute: Iacute$1,
    iacute: iacute$1,
    Icirc: Icirc$1,
    icirc: icirc$1,
    iexcl: iexcl$1,
    Igrave: Igrave$1,
    igrave: igrave$1,
    iquest: iquest$1,
    Iuml: Iuml$1,
    iuml: iuml$1,
    laquo: laquo$1,
    lt: lt$1,
    LT: LT$1,
    macr: macr$1,
    micro: micro$1,
    middot: middot$1,
    nbsp: nbsp$1,
    not: not$1,
    Ntilde: Ntilde$1,
    ntilde: ntilde$1,
    Oacute: Oacute$1,
    oacute: oacute$1,
    Ocirc: Ocirc$1,
    ocirc: ocirc$1,
    Ograve: Ograve$1,
    ograve: ograve$1,
    ordf: ordf$1,
    ordm: ordm$1,
    Oslash: Oslash$1,
    oslash: oslash$1,
    Otilde: Otilde$1,
    otilde: otilde$1,
    Ouml: Ouml$1,
    ouml: ouml$1,
    para: para$1,
    plusmn: plusmn$1,
    pound: pound$1,
    quot: quot$1,
    QUOT: QUOT$1,
    raquo: raquo$1,
    reg: reg$1,
    REG: REG$1,
    sect: sect$1,
    shy: shy$1,
    sup1: sup1$1,
    sup2: sup2$1,
    sup3: sup3$1,
    szlig: szlig$1,
    THORN: THORN$1,
    thorn: thorn$1,
    times: times$1,
    Uacute: Uacute$1,
    uacute: uacute$1,
    Ucirc: Ucirc$1,
    ucirc: ucirc$1,
    Ugrave: Ugrave$1,
    ugrave: ugrave$1,
    uml: uml$1,
    Uuml: Uuml$1,
    uuml: uuml$1,
    Yacute: Yacute$1,
    yacute: yacute$1,
    yen: yen$1,
    yuml: yuml$1,
    default: legacy
});

var amp$2 = "&";
var apos$1 = "'";
var gt$2 = ">";
var lt$2 = "<";
var quot$2 = "\"";
var xml = {
	amp: amp$2,
	apos: apos$1,
	gt: gt$2,
	lt: lt$2,
	quot: quot$2
};

var xml$1 = /*#__PURE__*/Object.freeze({
    amp: amp$2,
    apos: apos$1,
    gt: gt$2,
    lt: lt$2,
    quot: quot$2,
    default: xml
});

var entityMap = getCjsExportFromNamespace(entities$1);

var legacyMap = getCjsExportFromNamespace(legacy$1);

var xmlMap = getCjsExportFromNamespace(xml$1);

var Tokenizer_1 = Tokenizer;






var i = 0;

var TEXT = i++;
var BEFORE_TAG_NAME = i++; //after <
var IN_TAG_NAME = i++;
var IN_SELF_CLOSING_TAG = i++;
var BEFORE_CLOSING_TAG_NAME = i++;
var IN_CLOSING_TAG_NAME = i++;
var AFTER_CLOSING_TAG_NAME = i++;

//attributes
var BEFORE_ATTRIBUTE_NAME = i++;
var IN_ATTRIBUTE_NAME = i++;
var AFTER_ATTRIBUTE_NAME = i++;
var BEFORE_ATTRIBUTE_VALUE = i++;
var IN_ATTRIBUTE_VALUE_DQ = i++; // "
var IN_ATTRIBUTE_VALUE_SQ = i++; // '
var IN_ATTRIBUTE_VALUE_NQ = i++;

//declarations
var BEFORE_DECLARATION = i++; // !
var IN_DECLARATION = i++;

//processing instructions
var IN_PROCESSING_INSTRUCTION = i++; // ?

//comments
var BEFORE_COMMENT = i++;
var IN_COMMENT = i++;
var AFTER_COMMENT_1 = i++;
var AFTER_COMMENT_2 = i++;

//cdata
var BEFORE_CDATA_1 = i++; // [
var BEFORE_CDATA_2 = i++; // C
var BEFORE_CDATA_3 = i++; // D
var BEFORE_CDATA_4 = i++; // A
var BEFORE_CDATA_5 = i++; // T
var BEFORE_CDATA_6 = i++; // A
var IN_CDATA = i++; // [
var AFTER_CDATA_1 = i++; // ]
var AFTER_CDATA_2 = i++; // ]

//special tags
var BEFORE_SPECIAL = i++; //S
var BEFORE_SPECIAL_END = i++; //S

var BEFORE_SCRIPT_1 = i++; //C
var BEFORE_SCRIPT_2 = i++; //R
var BEFORE_SCRIPT_3 = i++; //I
var BEFORE_SCRIPT_4 = i++; //P
var BEFORE_SCRIPT_5 = i++; //T
var AFTER_SCRIPT_1 = i++; //C
var AFTER_SCRIPT_2 = i++; //R
var AFTER_SCRIPT_3 = i++; //I
var AFTER_SCRIPT_4 = i++; //P
var AFTER_SCRIPT_5 = i++; //T

var BEFORE_STYLE_1 = i++; //T
var BEFORE_STYLE_2 = i++; //Y
var BEFORE_STYLE_3 = i++; //L
var BEFORE_STYLE_4 = i++; //E
var AFTER_STYLE_1 = i++; //T
var AFTER_STYLE_2 = i++; //Y
var AFTER_STYLE_3 = i++; //L
var AFTER_STYLE_4 = i++; //E

var BEFORE_ENTITY = i++; //&
var BEFORE_NUMERIC_ENTITY = i++; //#
var IN_NAMED_ENTITY = i++;
var IN_NUMERIC_ENTITY = i++;
var IN_HEX_ENTITY = i++; //X

var j = 0;

var SPECIAL_NONE = j++;
var SPECIAL_SCRIPT = j++;
var SPECIAL_STYLE = j++;

function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();

    if (upper === lower) {
        return function(c) {
            if (c === lower) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    } else {
        return function(c) {
            if (c === lower || c === upper) {
                this._state = SUCCESS;
            } else {
                this._state = FAILURE;
                this._index--;
            }
        };
    }
}

function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();

    return function(c) {
        if (c === lower || c === upper) {
            this._state = NEXT_STATE;
        } else {
            this._state = IN_TAG_NAME;
            this._index--; //consume the token again
        }
    };
}

function Tokenizer(options, cbs) {
    this._state = TEXT;
    this._buffer = "";
    this._sectionStart = 0;
    this._index = 0;
    this._bufferOffset = 0; //chars removed from _buffer
    this._baseState = TEXT;
    this._special = SPECIAL_NONE;
    this._cbs = cbs;
    this._running = true;
    this._ended = false;
    this._xmlMode = !!(options && options.xmlMode);
    this._decodeEntities = !!(options && options.decodeEntities);
}

Tokenizer.prototype._stateText = function(c) {
    if (c === "<") {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._state = BEFORE_TAG_NAME;
        this._sectionStart = this._index;
    } else if (
        this._decodeEntities &&
        this._special === SPECIAL_NONE &&
        c === "&"
    ) {
        if (this._index > this._sectionStart) {
            this._cbs.ontext(this._getSection());
        }
        this._baseState = TEXT;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeTagName = function(c) {
    if (c === "/") {
        this._state = BEFORE_CLOSING_TAG_NAME;
    } else if (c === "<") {
        this._cbs.ontext(this._getSection());
        this._sectionStart = this._index;
    } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
        this._state = TEXT;
    } else if (c === "!") {
        this._state = BEFORE_DECLARATION;
        this._sectionStart = this._index + 1;
    } else if (c === "?") {
        this._state = IN_PROCESSING_INSTRUCTION;
        this._sectionStart = this._index + 1;
    } else {
        this._state =
            !this._xmlMode && (c === "s" || c === "S")
                ? BEFORE_SPECIAL
                : IN_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInTagName = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._emitToken("onopentagname");
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
    if (whitespace(c));
    else if (c === ">") {
        this._state = TEXT;
    } else if (this._special !== SPECIAL_NONE) {
        if (c === "s" || c === "S") {
            this._state = BEFORE_SPECIAL_END;
        } else {
            this._state = TEXT;
            this._index--;
        }
    } else {
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInCloseingTagName = function(c) {
    if (c === ">" || whitespace(c)) {
        this._emitToken("onclosetag");
        this._state = AFTER_CLOSING_TAG_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
    //skip everything until ">"
    if (c === ">") {
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeAttributeName = function(c) {
    if (c === ">") {
        this._cbs.onopentagend();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c === "/") {
        this._state = IN_SELF_CLOSING_TAG;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInSelfClosingTag = function(c) {
    if (c === ">") {
        this._cbs.onselfclosingtag();
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateInAttributeName = function(c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
        this._cbs.onattribname(this._getSection());
        this._sectionStart = -1;
        this._state = AFTER_ATTRIBUTE_NAME;
        this._index--;
    }
};

Tokenizer.prototype._stateAfterAttributeName = function(c) {
    if (c === "=") {
        this._state = BEFORE_ATTRIBUTE_VALUE;
    } else if (c === "/" || c === ">") {
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (!whitespace(c)) {
        this._cbs.onattribend();
        this._state = IN_ATTRIBUTE_NAME;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
    if (c === '"') {
        this._state = IN_ATTRIBUTE_VALUE_DQ;
        this._sectionStart = this._index + 1;
    } else if (c === "'") {
        this._state = IN_ATTRIBUTE_VALUE_SQ;
        this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
        this._state = IN_ATTRIBUTE_VALUE_NQ;
        this._sectionStart = this._index;
        this._index--; //reconsume token
    }
};

Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
    if (c === '"') {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
    if (c === "'") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
    if (whitespace(c) || c === ">") {
        this._emitToken("onattribdata");
        this._cbs.onattribend();
        this._state = BEFORE_ATTRIBUTE_NAME;
        this._index--;
    } else if (this._decodeEntities && c === "&") {
        this._emitToken("onattribdata");
        this._baseState = this._state;
        this._state = BEFORE_ENTITY;
        this._sectionStart = this._index;
    }
};

Tokenizer.prototype._stateBeforeDeclaration = function(c) {
    this._state =
        c === "["
            ? BEFORE_CDATA_1
            : c === "-"
                ? BEFORE_COMMENT
                : IN_DECLARATION;
};

Tokenizer.prototype._stateInDeclaration = function(c) {
    if (c === ">") {
        this._cbs.ondeclaration(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateInProcessingInstruction = function(c) {
    if (c === ">") {
        this._cbs.onprocessinginstruction(this._getSection());
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    }
};

Tokenizer.prototype._stateBeforeComment = function(c) {
    if (c === "-") {
        this._state = IN_COMMENT;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
    }
};

Tokenizer.prototype._stateInComment = function(c) {
    if (c === "-") this._state = AFTER_COMMENT_1;
};

Tokenizer.prototype._stateAfterComment1 = function(c) {
    if (c === "-") {
        this._state = AFTER_COMMENT_2;
    } else {
        this._state = IN_COMMENT;
    }
};

Tokenizer.prototype._stateAfterComment2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncomment(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "-") {
        this._state = IN_COMMENT;
    }
    // else: stay in AFTER_COMMENT_2 (`--->`)
};

Tokenizer.prototype._stateBeforeCdata1 = ifElseState(
    "C",
    BEFORE_CDATA_2,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata2 = ifElseState(
    "D",
    BEFORE_CDATA_3,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata3 = ifElseState(
    "A",
    BEFORE_CDATA_4,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata4 = ifElseState(
    "T",
    BEFORE_CDATA_5,
    IN_DECLARATION
);
Tokenizer.prototype._stateBeforeCdata5 = ifElseState(
    "A",
    BEFORE_CDATA_6,
    IN_DECLARATION
);

Tokenizer.prototype._stateBeforeCdata6 = function(c) {
    if (c === "[") {
        this._state = IN_CDATA;
        this._sectionStart = this._index + 1;
    } else {
        this._state = IN_DECLARATION;
        this._index--;
    }
};

Tokenizer.prototype._stateInCdata = function(c) {
    if (c === "]") this._state = AFTER_CDATA_1;
};

Tokenizer.prototype._stateAfterCdata1 = function(c) {
    if (c === "]") this._state = AFTER_CDATA_2;
    else this._state = IN_CDATA;
};

Tokenizer.prototype._stateAfterCdata2 = function(c) {
    if (c === ">") {
        //remove 2 trailing chars
        this._cbs.oncdata(
            this._buffer.substring(this._sectionStart, this._index - 2)
        );
        this._state = TEXT;
        this._sectionStart = this._index + 1;
    } else if (c !== "]") {
        this._state = IN_CDATA;
    }
    //else: stay in AFTER_CDATA_2 (`]]]>`)
};

Tokenizer.prototype._stateBeforeSpecial = function(c) {
    if (c === "c" || c === "C") {
        this._state = BEFORE_SCRIPT_1;
    } else if (c === "t" || c === "T") {
        this._state = BEFORE_STYLE_1;
    } else {
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
    }
};

Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
    if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
        this._state = AFTER_SCRIPT_1;
    } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
        this._state = AFTER_STYLE_1;
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar(
    "R",
    BEFORE_SCRIPT_2
);
Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar(
    "I",
    BEFORE_SCRIPT_3
);
Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar(
    "P",
    BEFORE_SCRIPT_4
);
Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar(
    "T",
    BEFORE_SCRIPT_5
);

Tokenizer.prototype._stateBeforeScript5 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_SCRIPT;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

Tokenizer.prototype._stateAfterScript5 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 6;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
    "Y",
    BEFORE_STYLE_2
);
Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
    "L",
    BEFORE_STYLE_3
);
Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
    "E",
    BEFORE_STYLE_4
);

Tokenizer.prototype._stateBeforeStyle4 = function(c) {
    if (c === "/" || c === ">" || whitespace(c)) {
        this._special = SPECIAL_STYLE;
    }
    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

Tokenizer.prototype._stateAfterStyle4 = function(c) {
    if (c === ">" || whitespace(c)) {
        this._special = SPECIAL_NONE;
        this._state = IN_CLOSING_TAG_NAME;
        this._sectionStart = this._index - 5;
        this._index--; //reconsume the token
    } else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeEntity = ifElseState(
    "#",
    BEFORE_NUMERIC_ENTITY,
    IN_NAMED_ENTITY
);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
    "X",
    IN_HEX_ENTITY,
    IN_NUMERIC_ENTITY
);

//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict = function() {
    //offset = 1
    if (this._sectionStart + 1 < this._index) {
        var entity = this._buffer.substring(
                this._sectionStart + 1,
                this._index
            ),
            map = this._xmlMode ? xmlMap : entityMap;

        if (map.hasOwnProperty(entity)) {
            this._emitPartial(map[entity]);
            this._sectionStart = this._index + 1;
        }
    }
};

//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity = function() {
    var start = this._sectionStart + 1,
        limit = this._index - start;

    if (limit > 6) limit = 6; //the max length of legacy entities is 6

    while (limit >= 2) {
        //the min length of legacy entities is 2
        var entity = this._buffer.substr(start, limit);

        if (legacyMap.hasOwnProperty(entity)) {
            this._emitPartial(legacyMap[entity]);
            this._sectionStart += limit + 1;
            return;
        } else {
            limit--;
        }
    }
};

Tokenizer.prototype._stateInNamedEntity = function(c) {
    if (c === ";") {
        this._parseNamedEntityStrict();
        if (this._sectionStart + 1 < this._index && !this._xmlMode) {
            this._parseLegacyEntity();
        }
        this._state = this._baseState;
    } else if (
        (c < "a" || c > "z") &&
        (c < "A" || c > "Z") &&
        (c < "0" || c > "9")
    ) {
        if (this._xmlMode);
        else if (this._sectionStart + 1 === this._index);
        else if (this._baseState !== TEXT) {
            if (c !== "=") {
                this._parseNamedEntityStrict();
            }
        } else {
            this._parseLegacyEntity();
        }

        this._state = this._baseState;
        this._index--;
    }
};

Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
    var sectionStart = this._sectionStart + offset;

    if (sectionStart !== this._index) {
        //parse entity
        var entity = this._buffer.substring(sectionStart, this._index);
        var parsed = parseInt(entity, base);

        this._emitPartial(decode_codepoint(parsed));
        this._sectionStart = this._index;
    } else {
        this._sectionStart--;
    }

    this._state = this._baseState;
};

Tokenizer.prototype._stateInNumericEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(2, 10);
        this._sectionStart++;
    } else if (c < "0" || c > "9") {
        if (!this._xmlMode) {
            this._decodeNumericEntity(2, 10);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._stateInHexEntity = function(c) {
    if (c === ";") {
        this._decodeNumericEntity(3, 16);
        this._sectionStart++;
    } else if (
        (c < "a" || c > "f") &&
        (c < "A" || c > "F") &&
        (c < "0" || c > "9")
    ) {
        if (!this._xmlMode) {
            this._decodeNumericEntity(3, 16);
        } else {
            this._state = this._baseState;
        }
        this._index--;
    }
};

Tokenizer.prototype._cleanup = function() {
    if (this._sectionStart < 0) {
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
    } else if (this._running) {
        if (this._state === TEXT) {
            if (this._sectionStart !== this._index) {
                this._cbs.ontext(this._buffer.substr(this._sectionStart));
            }
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else if (this._sectionStart === this._index) {
            //the section just started
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else {
            //remove everything unnecessary
            this._buffer = this._buffer.substr(this._sectionStart);
            this._index -= this._sectionStart;
            this._bufferOffset += this._sectionStart;
        }

        this._sectionStart = 0;
    }
};

//TODO make events conditional
Tokenizer.prototype.write = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".write() after done!"));

    this._buffer += chunk;
    this._parse();
};

Tokenizer.prototype._parse = function() {
    while (this._index < this._buffer.length && this._running) {
        var c = this._buffer.charAt(this._index);
        if (this._state === TEXT) {
            this._stateText(c);
        } else if (this._state === BEFORE_TAG_NAME) {
            this._stateBeforeTagName(c);
        } else if (this._state === IN_TAG_NAME) {
            this._stateInTagName(c);
        } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
            this._stateBeforeCloseingTagName(c);
        } else if (this._state === IN_CLOSING_TAG_NAME) {
            this._stateInCloseingTagName(c);
        } else if (this._state === AFTER_CLOSING_TAG_NAME) {
            this._stateAfterCloseingTagName(c);
        } else if (this._state === IN_SELF_CLOSING_TAG) {
            this._stateInSelfClosingTag(c);
        } else if (this._state === BEFORE_ATTRIBUTE_NAME) {

        /*
		*	attributes
		*/
            this._stateBeforeAttributeName(c);
        } else if (this._state === IN_ATTRIBUTE_NAME) {
            this._stateInAttributeName(c);
        } else if (this._state === AFTER_ATTRIBUTE_NAME) {
            this._stateAfterAttributeName(c);
        } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
            this._stateBeforeAttributeValue(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
            this._stateInAttributeValueDoubleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
            this._stateInAttributeValueSingleQuotes(c);
        } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
            this._stateInAttributeValueNoQuotes(c);
        } else if (this._state === BEFORE_DECLARATION) {

        /*
		*	declarations
		*/
            this._stateBeforeDeclaration(c);
        } else if (this._state === IN_DECLARATION) {
            this._stateInDeclaration(c);
        } else if (this._state === IN_PROCESSING_INSTRUCTION) {

        /*
		*	processing instructions
		*/
            this._stateInProcessingInstruction(c);
        } else if (this._state === BEFORE_COMMENT) {

        /*
		*	comments
		*/
            this._stateBeforeComment(c);
        } else if (this._state === IN_COMMENT) {
            this._stateInComment(c);
        } else if (this._state === AFTER_COMMENT_1) {
            this._stateAfterComment1(c);
        } else if (this._state === AFTER_COMMENT_2) {
            this._stateAfterComment2(c);
        } else if (this._state === BEFORE_CDATA_1) {

        /*
		*	cdata
		*/
            this._stateBeforeCdata1(c);
        } else if (this._state === BEFORE_CDATA_2) {
            this._stateBeforeCdata2(c);
        } else if (this._state === BEFORE_CDATA_3) {
            this._stateBeforeCdata3(c);
        } else if (this._state === BEFORE_CDATA_4) {
            this._stateBeforeCdata4(c);
        } else if (this._state === BEFORE_CDATA_5) {
            this._stateBeforeCdata5(c);
        } else if (this._state === BEFORE_CDATA_6) {
            this._stateBeforeCdata6(c);
        } else if (this._state === IN_CDATA) {
            this._stateInCdata(c);
        } else if (this._state === AFTER_CDATA_1) {
            this._stateAfterCdata1(c);
        } else if (this._state === AFTER_CDATA_2) {
            this._stateAfterCdata2(c);
        } else if (this._state === BEFORE_SPECIAL) {

        /*
		* special tags
		*/
            this._stateBeforeSpecial(c);
        } else if (this._state === BEFORE_SPECIAL_END) {
            this._stateBeforeSpecialEnd(c);
        } else if (this._state === BEFORE_SCRIPT_1) {

        /*
		* script
		*/
            this._stateBeforeScript1(c);
        } else if (this._state === BEFORE_SCRIPT_2) {
            this._stateBeforeScript2(c);
        } else if (this._state === BEFORE_SCRIPT_3) {
            this._stateBeforeScript3(c);
        } else if (this._state === BEFORE_SCRIPT_4) {
            this._stateBeforeScript4(c);
        } else if (this._state === BEFORE_SCRIPT_5) {
            this._stateBeforeScript5(c);
        } else if (this._state === AFTER_SCRIPT_1) {
            this._stateAfterScript1(c);
        } else if (this._state === AFTER_SCRIPT_2) {
            this._stateAfterScript2(c);
        } else if (this._state === AFTER_SCRIPT_3) {
            this._stateAfterScript3(c);
        } else if (this._state === AFTER_SCRIPT_4) {
            this._stateAfterScript4(c);
        } else if (this._state === AFTER_SCRIPT_5) {
            this._stateAfterScript5(c);
        } else if (this._state === BEFORE_STYLE_1) {

        /*
		* style
		*/
            this._stateBeforeStyle1(c);
        } else if (this._state === BEFORE_STYLE_2) {
            this._stateBeforeStyle2(c);
        } else if (this._state === BEFORE_STYLE_3) {
            this._stateBeforeStyle3(c);
        } else if (this._state === BEFORE_STYLE_4) {
            this._stateBeforeStyle4(c);
        } else if (this._state === AFTER_STYLE_1) {
            this._stateAfterStyle1(c);
        } else if (this._state === AFTER_STYLE_2) {
            this._stateAfterStyle2(c);
        } else if (this._state === AFTER_STYLE_3) {
            this._stateAfterStyle3(c);
        } else if (this._state === AFTER_STYLE_4) {
            this._stateAfterStyle4(c);
        } else if (this._state === BEFORE_ENTITY) {

        /*
		* entities
		*/
            this._stateBeforeEntity(c);
        } else if (this._state === BEFORE_NUMERIC_ENTITY) {
            this._stateBeforeNumericEntity(c);
        } else if (this._state === IN_NAMED_ENTITY) {
            this._stateInNamedEntity(c);
        } else if (this._state === IN_NUMERIC_ENTITY) {
            this._stateInNumericEntity(c);
        } else if (this._state === IN_HEX_ENTITY) {
            this._stateInHexEntity(c);
        } else {
            this._cbs.onerror(Error("unknown _state"), this._state);
        }

        this._index++;
    }

    this._cleanup();
};

Tokenizer.prototype.pause = function() {
    this._running = false;
};
Tokenizer.prototype.resume = function() {
    this._running = true;

    if (this._index < this._buffer.length) {
        this._parse();
    }
    if (this._ended) {
        this._finish();
    }
};

Tokenizer.prototype.end = function(chunk) {
    if (this._ended) this._cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);

    this._ended = true;

    if (this._running) this._finish();
};

Tokenizer.prototype._finish = function() {
    //if there is remaining data, emit it in a reasonable way
    if (this._sectionStart < this._index) {
        this._handleTrailingData();
    }

    this._cbs.onend();
};

Tokenizer.prototype._handleTrailingData = function() {
    var data = this._buffer.substr(this._sectionStart);

    if (
        this._state === IN_CDATA ||
        this._state === AFTER_CDATA_1 ||
        this._state === AFTER_CDATA_2
    ) {
        this._cbs.oncdata(data);
    } else if (
        this._state === IN_COMMENT ||
        this._state === AFTER_COMMENT_1 ||
        this._state === AFTER_COMMENT_2
    ) {
        this._cbs.oncomment(data);
    } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
        this._parseLegacyEntity();
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(2, 10);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
        this._decodeNumericEntity(3, 16);
        if (this._sectionStart < this._index) {
            this._state = this._baseState;
            this._handleTrailingData();
        }
    } else if (
        this._state !== IN_TAG_NAME &&
        this._state !== BEFORE_ATTRIBUTE_NAME &&
        this._state !== BEFORE_ATTRIBUTE_VALUE &&
        this._state !== AFTER_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_NAME &&
        this._state !== IN_ATTRIBUTE_VALUE_SQ &&
        this._state !== IN_ATTRIBUTE_VALUE_DQ &&
        this._state !== IN_ATTRIBUTE_VALUE_NQ &&
        this._state !== IN_CLOSING_TAG_NAME
    ) {
        this._cbs.ontext(data);
    }
    //else, ignore remaining data
    //TODO add a way to remove current tag
};

Tokenizer.prototype.reset = function() {
    Tokenizer.call(
        this,
        { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
        this._cbs
    );
};

Tokenizer.prototype.getAbsoluteIndex = function() {
    return this._bufferOffset + this._index;
};

Tokenizer.prototype._getSection = function() {
    return this._buffer.substring(this._sectionStart, this._index);
};

Tokenizer.prototype._emitToken = function(name) {
    this._cbs[name](this._getSection());
    this._sectionStart = -1;
};

Tokenizer.prototype._emitPartial = function(value) {
    if (this._baseState !== TEXT) {
        this._cbs.onattribdata(value); //TODO implement the new event
    } else {
        this._cbs.ontext(value);
    }
};

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
});

var inherits = createCommonjsModule(function (module) {
try {
  var util$$1 = util;
  /* istanbul ignore next */
  if (typeof util$$1.inherits !== 'function') throw '';
  module.exports = util$$1.inherits;
} catch (e) {
  /* istanbul ignore next */
  module.exports = inherits_browser;
}
});

var Tokenizer$1 = Tokenizer_1;

/*
	Options:

	xmlMode: Disables the special behavior for script/style tags (false by default)
	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
*/

/*
	Callbacks:

	oncdataend,
	oncdatastart,
	onclosetag,
	oncomment,
	oncommentend,
	onerror,
	onopentag,
	onprocessinginstruction,
	onreset,
	ontext
*/

var formTags = {
    input: true,
    option: true,
    optgroup: true,
    select: true,
    button: true,
    datalist: true,
    textarea: true
};

var openImpliesClose = {
    tr: { tr: true, th: true, td: true },
    th: { th: true },
    td: { thead: true, th: true, td: true },
    body: { head: true, link: true, script: true },
    li: { li: true },
    p: { p: true },
    h1: { p: true },
    h2: { p: true },
    h3: { p: true },
    h4: { p: true },
    h5: { p: true },
    h6: { p: true },
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: { option: true },
    optgroup: { optgroup: true }
};

var voidElements = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};

var foreignContextElements = {
    __proto__: null,
    math: true,
    svg: true
};
var htmlIntegrationElements = {
    __proto__: null,
    mi: true,
    mo: true,
    mn: true,
    ms: true,
    mtext: true,
    "annotation-xml": true,
    foreignObject: true,
    desc: true,
    title: true
};

var re_nameEnd = /\s|\//;

function Parser(cbs, options) {
    this._options = options || {};
    this._cbs = cbs || {};

    this._tagname = "";
    this._attribname = "";
    this._attribvalue = "";
    this._attribs = null;
    this._stack = [];
    this._foreignContext = [];

    this.startIndex = 0;
    this.endIndex = null;

    this._lowerCaseTagNames =
        "lowerCaseTags" in this._options
            ? !!this._options.lowerCaseTags
            : !this._options.xmlMode;
    this._lowerCaseAttributeNames =
        "lowerCaseAttributeNames" in this._options
            ? !!this._options.lowerCaseAttributeNames
            : !this._options.xmlMode;

    if (this._options.Tokenizer) {
        Tokenizer$1 = this._options.Tokenizer;
    }
    this._tokenizer = new Tokenizer$1(this._options, this);

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
}

inherits(Parser, events.EventEmitter);

Parser.prototype._updatePosition = function(initialOffset) {
    if (this.endIndex === null) {
        if (this._tokenizer._sectionStart <= initialOffset) {
            this.startIndex = 0;
        } else {
            this.startIndex = this._tokenizer._sectionStart - initialOffset;
        }
    } else this.startIndex = this.endIndex + 1;
    this.endIndex = this._tokenizer.getAbsoluteIndex();
};

//Tokenizer event handlers
Parser.prototype.ontext = function(data) {
    this._updatePosition(1);
    this.endIndex--;

    if (this._cbs.ontext) this._cbs.ontext(data);
};

Parser.prototype.onopentagname = function(name) {
    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    this._tagname = name;

    if (!this._options.xmlMode && name in openImpliesClose) {
        for (
            var el;
            (el = this._stack[this._stack.length - 1]) in
            openImpliesClose[name];
            this.onclosetag(el)
        );
    }

    if (this._options.xmlMode || !(name in voidElements)) {
        this._stack.push(name);
        if (name in foreignContextElements) this._foreignContext.push(true);
        else if (name in htmlIntegrationElements)
            this._foreignContext.push(false);
    }

    if (this._cbs.onopentagname) this._cbs.onopentagname(name);
    if (this._cbs.onopentag) this._attribs = {};
};

Parser.prototype.onopentagend = function() {
    this._updatePosition(1);

    if (this._attribs) {
        if (this._cbs.onopentag)
            this._cbs.onopentag(this._tagname, this._attribs);
        this._attribs = null;
    }

    if (
        !this._options.xmlMode &&
        this._cbs.onclosetag &&
        this._tagname in voidElements
    ) {
        this._cbs.onclosetag(this._tagname);
    }

    this._tagname = "";
};

Parser.prototype.onclosetag = function(name) {
    this._updatePosition(1);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }
    
    if (name in foreignContextElements || name in htmlIntegrationElements) {
        this._foreignContext.pop();
    }

    if (
        this._stack.length &&
        (!(name in voidElements) || this._options.xmlMode)
    ) {
        var pos = this._stack.lastIndexOf(name);
        if (pos !== -1) {
            if (this._cbs.onclosetag) {
                pos = this._stack.length - pos;
                while (pos--) this._cbs.onclosetag(this._stack.pop());
            } else this._stack.length = pos;
        } else if (name === "p" && !this._options.xmlMode) {
            this.onopentagname(name);
            this._closeCurrentTag();
        }
    } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
        this.onopentagname(name);
        this._closeCurrentTag();
    }
};

Parser.prototype.onselfclosingtag = function() {
    if (
        this._options.xmlMode ||
        this._options.recognizeSelfClosing ||
        this._foreignContext[this._foreignContext.length - 1]
    ) {
        this._closeCurrentTag();
    } else {
        this.onopentagend();
    }
};

Parser.prototype._closeCurrentTag = function() {
    var name = this._tagname;

    this.onopentagend();

    //self-closing tags will be on the top of the stack
    //(cheaper check than in onclosetag)
    if (this._stack[this._stack.length - 1] === name) {
        if (this._cbs.onclosetag) {
            this._cbs.onclosetag(name);
        }
        this._stack.pop();
        
    }
};

Parser.prototype.onattribname = function(name) {
    if (this._lowerCaseAttributeNames) {
        name = name.toLowerCase();
    }
    this._attribname = name;
};

Parser.prototype.onattribdata = function(value) {
    this._attribvalue += value;
};

Parser.prototype.onattribend = function() {
    if (this._cbs.onattribute)
        this._cbs.onattribute(this._attribname, this._attribvalue);
    if (
        this._attribs &&
        !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
    ) {
        this._attribs[this._attribname] = this._attribvalue;
    }
    this._attribname = "";
    this._attribvalue = "";
};

Parser.prototype._getInstructionName = function(value) {
    var idx = value.search(re_nameEnd),
        name = idx < 0 ? value : value.substr(0, idx);

    if (this._lowerCaseTagNames) {
        name = name.toLowerCase();
    }

    return name;
};

Parser.prototype.ondeclaration = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("!" + name, "!" + value);
    }
};

Parser.prototype.onprocessinginstruction = function(value) {
    if (this._cbs.onprocessinginstruction) {
        var name = this._getInstructionName(value);
        this._cbs.onprocessinginstruction("?" + name, "?" + value);
    }
};

Parser.prototype.oncomment = function(value) {
    this._updatePosition(4);

    if (this._cbs.oncomment) this._cbs.oncomment(value);
    if (this._cbs.oncommentend) this._cbs.oncommentend();
};

Parser.prototype.oncdata = function(value) {
    this._updatePosition(1);

    if (this._options.xmlMode || this._options.recognizeCDATA) {
        if (this._cbs.oncdatastart) this._cbs.oncdatastart();
        if (this._cbs.ontext) this._cbs.ontext(value);
        if (this._cbs.oncdataend) this._cbs.oncdataend();
    } else {
        this.oncomment("[CDATA[" + value + "]]");
    }
};

Parser.prototype.onerror = function(err) {
    if (this._cbs.onerror) this._cbs.onerror(err);
};

Parser.prototype.onend = function() {
    if (this._cbs.onclosetag) {
        for (
            var i = this._stack.length;
            i > 0;
            this._cbs.onclosetag(this._stack[--i])
        );
    }
    if (this._cbs.onend) this._cbs.onend();
};

//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset = function() {
    if (this._cbs.onreset) this._cbs.onreset();
    this._tokenizer.reset();

    this._tagname = "";
    this._attribname = "";
    this._attribs = null;
    this._stack = [];

    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
};

//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete = function(data) {
    this.reset();
    this.end(data);
};

Parser.prototype.write = function(chunk) {
    this._tokenizer.write(chunk);
};

Parser.prototype.end = function(chunk) {
    this._tokenizer.end(chunk);
};

Parser.prototype.pause = function() {
    this._tokenizer.pause();
};

Parser.prototype.resume = function() {
    this._tokenizer.resume();
};

//alias for backwards compat
Parser.prototype.parseChunk = Parser.prototype.write;
Parser.prototype.done = Parser.prototype.end;

var Parser_1 = Parser;

//Types of elements found in the DOM
var domelementtype = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};

var node = createCommonjsModule(function (module) {
// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var NodePrototype = module.exports = {
	get firstChild() {
		var children = this.children;
		return children && children[0] || null;
	},
	get lastChild() {
		var children = this.children;
		return children && children[children.length - 1] || null;
	},
	get nodeType() {
		return nodeTypes[this.type] || nodeTypes.element;
	}
};

var domLvl1 = {
	tagName: "name",
	childNodes: "children",
	parentNode: "parent",
	previousSibling: "prev",
	nextSibling: "next",
	nodeValue: "data"
};

var nodeTypes = {
	element: 1,
	text: 3,
	cdata: 4,
	comment: 8
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(NodePrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});
});
var node_1 = node.firstChild;
var node_2 = node.lastChild;
var node_3 = node.nodeType;

var element = createCommonjsModule(function (module) {
// DOM-Level-1-compliant structure

var ElementPrototype = module.exports = Object.create(node);

var domLvl1 = {
	tagName: "name"
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(ElementPrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});
});

var re_whitespace = /\s+/g;



function DomHandler(callback, options, elementCB){
	if(typeof callback === "object"){
		elementCB = options;
		options = callback;
		callback = null;
	} else if(typeof options === "function"){
		elementCB = options;
		options = defaultOpts;
	}
	this._callback = callback;
	this._options = options || defaultOpts;
	this._elementCB = elementCB;
	this.dom = [];
	this._done = false;
	this._tagStack = [];
	this._parser = this._parser || null;
}

//default options
var defaultOpts = {
	normalizeWhitespace: false, //Replace all whitespace with single spaces
	withStartIndices: false, //Add startIndex properties to nodes
	withEndIndices: false, //Add endIndex properties to nodes
};

DomHandler.prototype.onparserinit = function(parser){
	this._parser = parser;
};

//Resets the handler back to starting state
DomHandler.prototype.onreset = function(){
	DomHandler.call(this, this._callback, this._options, this._elementCB);
};

//Signals the handler that parsing is done
DomHandler.prototype.onend = function(){
	if(this._done) return;
	this._done = true;
	this._parser = null;
	this._handleCallback(null);
};

DomHandler.prototype._handleCallback =
DomHandler.prototype.onerror = function(error){
	if(typeof this._callback === "function"){
		this._callback(error, this.dom);
	} else {
		if(error) throw error;
	}
};

DomHandler.prototype.onclosetag = function(){
	//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
	
	var elem = this._tagStack.pop();

	if(this._options.withEndIndices && elem){
		elem.endIndex = this._parser.endIndex;
	}

	if(this._elementCB) this._elementCB(elem);
};

DomHandler.prototype._createDomElement = function(properties){
	if (!this._options.withDomLvl1) return properties;

	var element$$1;
	if (properties.type === "tag") {
		element$$1 = Object.create(element);
	} else {
		element$$1 = Object.create(node);
	}

	for (var key in properties) {
		if (properties.hasOwnProperty(key)) {
			element$$1[key] = properties[key];
		}
	}

	return element$$1;
};

DomHandler.prototype._addDomElement = function(element$$1){
	var parent = this._tagStack[this._tagStack.length - 1];
	var siblings = parent ? parent.children : this.dom;
	var previousSibling = siblings[siblings.length - 1];

	element$$1.next = null;

	if(this._options.withStartIndices){
		element$$1.startIndex = this._parser.startIndex;
	}
	if(this._options.withEndIndices){
		element$$1.endIndex = this._parser.endIndex;
	}

	if(previousSibling){
		element$$1.prev = previousSibling;
		previousSibling.next = element$$1;
	} else {
		element$$1.prev = null;
	}

	siblings.push(element$$1);
	element$$1.parent = parent || null;
};

DomHandler.prototype.onopentag = function(name, attribs){
	var properties = {
		type: name === "script" ? domelementtype.Script : name === "style" ? domelementtype.Style : domelementtype.Tag,
		name: name,
		attribs: attribs,
		children: []
	};

	var element$$1 = this._createDomElement(properties);

	this._addDomElement(element$$1);

	this._tagStack.push(element$$1);
};

DomHandler.prototype.ontext = function(data){
	//the ignoreWhitespace is officially dropped, but for now,
	//it's an alias for normalizeWhitespace
	var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

	var lastTag;

	if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === domelementtype.Text){
		if(normalize){
			lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
		} else {
			lastTag.data += data;
		}
	} else {
		if(
			this._tagStack.length &&
			(lastTag = this._tagStack[this._tagStack.length - 1]) &&
			(lastTag = lastTag.children[lastTag.children.length - 1]) &&
			lastTag.type === domelementtype.Text
		){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(normalize){
				data = data.replace(re_whitespace, " ");
			}

			var element$$1 = this._createDomElement({
				data: data,
				type: domelementtype.Text
			});

			this._addDomElement(element$$1);
		}
	}
};

DomHandler.prototype.oncomment = function(data){
	var lastTag = this._tagStack[this._tagStack.length - 1];

	if(lastTag && lastTag.type === domelementtype.Comment){
		lastTag.data += data;
		return;
	}

	var properties = {
		data: data,
		type: domelementtype.Comment
	};

	var element$$1 = this._createDomElement(properties);

	this._addDomElement(element$$1);
	this._tagStack.push(element$$1);
};

DomHandler.prototype.oncdatastart = function(){
	var properties = {
		children: [{
			data: "",
			type: domelementtype.Text
		}],
		type: domelementtype.CDATA
	};

	var element$$1 = this._createDomElement(properties);

	this._addDomElement(element$$1);
	this._tagStack.push(element$$1);
};

DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
	this._tagStack.pop();
};

DomHandler.prototype.onprocessinginstruction = function(name, data){
	var element$$1 = this._createDomElement({
		name: name,
		data: data,
		type: domelementtype.Directive
	});

	this._addDomElement(element$$1);
};

var domhandler = DomHandler;

var lib = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = void 0;
/**
 * Tests whether an element is a tag or not.
 *
 * @param elem Element to test
 */
function isTag(elem) {
    return (elem.type === "tag" /* Tag */ ||
        elem.type === "script" /* Script */ ||
        elem.type === "style" /* Style */);
}
exports.isTag = isTag;
// Exports for backwards compatibility
/** Type for the root element of a document */
exports.Root = "root" /* Root */;
/** Type for Text */
exports.Text = "text" /* Text */;
/** Type for <? ... ?> */
exports.Directive = "directive" /* Directive */;
/** Type for <!-- ... --> */
exports.Comment = "comment" /* Comment */;
/** Type for <script> tags */
exports.Script = "script" /* Script */;
/** Type for <style> tags */
exports.Style = "style" /* Style */;
/** Type for Any tag */
exports.Tag = "tag" /* Tag */;
/** Type for <![CDATA[ ... ]]> */
exports.CDATA = "cdata" /* CDATA */;
/** Type for <!doctype ...> */
exports.Doctype = "doctype" /* Doctype */;
});

unwrapExports(lib);
var lib_1 = lib.Doctype;
var lib_2 = lib.CDATA;
var lib_3 = lib.Tag;
var lib_4 = lib.Style;
var lib_5 = lib.Script;
var lib_6 = lib.Comment;
var lib_7 = lib.Directive;
var lib_8 = lib.Text;
var lib_9 = lib.Root;
var lib_10 = lib.isTag;

var Aacute$2 = "Á";
var aacute$2 = "á";
var Abreve$1 = "Ă";
var abreve$1 = "ă";
var ac$1 = "∾";
var acd$1 = "∿";
var acE$1 = "∾̳";
var Acirc$2 = "Â";
var acirc$2 = "â";
var acute$2 = "´";
var Acy$1 = "А";
var acy$1 = "а";
var AElig$2 = "Æ";
var aelig$2 = "æ";
var af$1 = "⁡";
var Afr$1 = "𝔄";
var afr$1 = "𝔞";
var Agrave$2 = "À";
var agrave$2 = "à";
var alefsym$1 = "ℵ";
var aleph$1 = "ℵ";
var Alpha$1 = "Α";
var alpha$1 = "α";
var Amacr$1 = "Ā";
var amacr$1 = "ā";
var amalg$1 = "⨿";
var amp$3 = "&";
var AMP$2 = "&";
var andand$1 = "⩕";
var And$1 = "⩓";
var and$1 = "∧";
var andd$1 = "⩜";
var andslope$1 = "⩘";
var andv$1 = "⩚";
var ang$1 = "∠";
var ange$1 = "⦤";
var angle$1 = "∠";
var angmsdaa$1 = "⦨";
var angmsdab$1 = "⦩";
var angmsdac$1 = "⦪";
var angmsdad$1 = "⦫";
var angmsdae$1 = "⦬";
var angmsdaf$1 = "⦭";
var angmsdag$1 = "⦮";
var angmsdah$1 = "⦯";
var angmsd$1 = "∡";
var angrt$1 = "∟";
var angrtvb$1 = "⊾";
var angrtvbd$1 = "⦝";
var angsph$1 = "∢";
var angst$1 = "Å";
var angzarr$1 = "⍼";
var Aogon$1 = "Ą";
var aogon$1 = "ą";
var Aopf$1 = "𝔸";
var aopf$1 = "𝕒";
var apacir$1 = "⩯";
var ap$1 = "≈";
var apE$1 = "⩰";
var ape$1 = "≊";
var apid$1 = "≋";
var apos$2 = "'";
var ApplyFunction$1 = "⁡";
var approx$1 = "≈";
var approxeq$1 = "≊";
var Aring$2 = "Å";
var aring$2 = "å";
var Ascr$1 = "𝒜";
var ascr$1 = "𝒶";
var Assign$1 = "≔";
var ast$1 = "*";
var asymp$1 = "≈";
var asympeq$1 = "≍";
var Atilde$2 = "Ã";
var atilde$2 = "ã";
var Auml$2 = "Ä";
var auml$2 = "ä";
var awconint$1 = "∳";
var awint$1 = "⨑";
var backcong$1 = "≌";
var backepsilon$1 = "϶";
var backprime$1 = "‵";
var backsim$1 = "∽";
var backsimeq$1 = "⋍";
var Backslash$1 = "∖";
var Barv$1 = "⫧";
var barvee$1 = "⊽";
var barwed$1 = "⌅";
var Barwed$1 = "⌆";
var barwedge$1 = "⌅";
var bbrk$1 = "⎵";
var bbrktbrk$1 = "⎶";
var bcong$1 = "≌";
var Bcy$1 = "Б";
var bcy$1 = "б";
var bdquo$1 = "„";
var becaus$1 = "∵";
var because$1 = "∵";
var Because$1 = "∵";
var bemptyv$1 = "⦰";
var bepsi$1 = "϶";
var bernou$1 = "ℬ";
var Bernoullis$1 = "ℬ";
var Beta$1 = "Β";
var beta$1 = "β";
var beth$1 = "ℶ";
var between$1 = "≬";
var Bfr$1 = "𝔅";
var bfr$1 = "𝔟";
var bigcap$1 = "⋂";
var bigcirc$1 = "◯";
var bigcup$1 = "⋃";
var bigodot$1 = "⨀";
var bigoplus$1 = "⨁";
var bigotimes$1 = "⨂";
var bigsqcup$1 = "⨆";
var bigstar$1 = "★";
var bigtriangledown$1 = "▽";
var bigtriangleup$1 = "△";
var biguplus$1 = "⨄";
var bigvee$1 = "⋁";
var bigwedge$1 = "⋀";
var bkarow$1 = "⤍";
var blacklozenge$1 = "⧫";
var blacksquare$1 = "▪";
var blacktriangle$1 = "▴";
var blacktriangledown$1 = "▾";
var blacktriangleleft$1 = "◂";
var blacktriangleright$1 = "▸";
var blank$1 = "␣";
var blk12$1 = "▒";
var blk14$1 = "░";
var blk34$1 = "▓";
var block$1 = "█";
var bne$1 = "=⃥";
var bnequiv$1 = "≡⃥";
var bNot$1 = "⫭";
var bnot$1 = "⌐";
var Bopf$1 = "𝔹";
var bopf$1 = "𝕓";
var bot$1 = "⊥";
var bottom$1 = "⊥";
var bowtie$1 = "⋈";
var boxbox$1 = "⧉";
var boxdl$1 = "┐";
var boxdL$1 = "╕";
var boxDl$1 = "╖";
var boxDL$1 = "╗";
var boxdr$1 = "┌";
var boxdR$1 = "╒";
var boxDr$1 = "╓";
var boxDR$1 = "╔";
var boxh$1 = "─";
var boxH$1 = "═";
var boxhd$1 = "┬";
var boxHd$1 = "╤";
var boxhD$1 = "╥";
var boxHD$1 = "╦";
var boxhu$1 = "┴";
var boxHu$1 = "╧";
var boxhU$1 = "╨";
var boxHU$1 = "╩";
var boxminus$1 = "⊟";
var boxplus$1 = "⊞";
var boxtimes$1 = "⊠";
var boxul$1 = "┘";
var boxuL$1 = "╛";
var boxUl$1 = "╜";
var boxUL$1 = "╝";
var boxur$1 = "└";
var boxuR$1 = "╘";
var boxUr$1 = "╙";
var boxUR$1 = "╚";
var boxv$1 = "│";
var boxV$1 = "║";
var boxvh$1 = "┼";
var boxvH$1 = "╪";
var boxVh$1 = "╫";
var boxVH$1 = "╬";
var boxvl$1 = "┤";
var boxvL$1 = "╡";
var boxVl$1 = "╢";
var boxVL$1 = "╣";
var boxvr$1 = "├";
var boxvR$1 = "╞";
var boxVr$1 = "╟";
var boxVR$1 = "╠";
var bprime$1 = "‵";
var breve$1 = "˘";
var Breve$1 = "˘";
var brvbar$2 = "¦";
var bscr$1 = "𝒷";
var Bscr$1 = "ℬ";
var bsemi$1 = "⁏";
var bsim$1 = "∽";
var bsime$1 = "⋍";
var bsolb$1 = "⧅";
var bsol$1 = "\\";
var bsolhsub$1 = "⟈";
var bull$1 = "•";
var bullet$1 = "•";
var bump$1 = "≎";
var bumpE$1 = "⪮";
var bumpe$1 = "≏";
var Bumpeq$1 = "≎";
var bumpeq$1 = "≏";
var Cacute$1 = "Ć";
var cacute$1 = "ć";
var capand$1 = "⩄";
var capbrcup$1 = "⩉";
var capcap$1 = "⩋";
var cap$1 = "∩";
var Cap$1 = "⋒";
var capcup$1 = "⩇";
var capdot$1 = "⩀";
var CapitalDifferentialD$1 = "ⅅ";
var caps$1 = "∩︀";
var caret$1 = "⁁";
var caron$1 = "ˇ";
var Cayleys$1 = "ℭ";
var ccaps$1 = "⩍";
var Ccaron$1 = "Č";
var ccaron$1 = "č";
var Ccedil$2 = "Ç";
var ccedil$2 = "ç";
var Ccirc$1 = "Ĉ";
var ccirc$1 = "ĉ";
var Cconint$1 = "∰";
var ccups$1 = "⩌";
var ccupssm$1 = "⩐";
var Cdot$1 = "Ċ";
var cdot$1 = "ċ";
var cedil$2 = "¸";
var Cedilla$1 = "¸";
var cemptyv$1 = "⦲";
var cent$2 = "¢";
var centerdot$1 = "·";
var CenterDot$1 = "·";
var cfr$1 = "𝔠";
var Cfr$1 = "ℭ";
var CHcy$1 = "Ч";
var chcy$1 = "ч";
var check$1 = "✓";
var checkmark$1 = "✓";
var Chi$1 = "Χ";
var chi$1 = "χ";
var circ$1 = "ˆ";
var circeq$1 = "≗";
var circlearrowleft$1 = "↺";
var circlearrowright$1 = "↻";
var circledast$1 = "⊛";
var circledcirc$1 = "⊚";
var circleddash$1 = "⊝";
var CircleDot$1 = "⊙";
var circledR$1 = "®";
var circledS$1 = "Ⓢ";
var CircleMinus$1 = "⊖";
var CirclePlus$1 = "⊕";
var CircleTimes$1 = "⊗";
var cir$1 = "○";
var cirE$1 = "⧃";
var cire$1 = "≗";
var cirfnint$1 = "⨐";
var cirmid$1 = "⫯";
var cirscir$1 = "⧂";
var ClockwiseContourIntegral$1 = "∲";
var CloseCurlyDoubleQuote$1 = "”";
var CloseCurlyQuote$1 = "’";
var clubs$1 = "♣";
var clubsuit$1 = "♣";
var colon$1 = ":";
var Colon$1 = "∷";
var Colone$1 = "⩴";
var colone$1 = "≔";
var coloneq$1 = "≔";
var comma$1 = ",";
var commat$1 = "@";
var comp$1 = "∁";
var compfn$1 = "∘";
var complement$1 = "∁";
var complexes$1 = "ℂ";
var cong$1 = "≅";
var congdot$1 = "⩭";
var Congruent$1 = "≡";
var conint$1 = "∮";
var Conint$1 = "∯";
var ContourIntegral$1 = "∮";
var copf$1 = "𝕔";
var Copf$1 = "ℂ";
var coprod$1 = "∐";
var Coproduct$1 = "∐";
var copy$2 = "©";
var COPY$2 = "©";
var copysr$1 = "℗";
var CounterClockwiseContourIntegral$1 = "∳";
var crarr$1 = "↵";
var cross$1 = "✗";
var Cross$1 = "⨯";
var Cscr$1 = "𝒞";
var cscr$1 = "𝒸";
var csub$1 = "⫏";
var csube$1 = "⫑";
var csup$1 = "⫐";
var csupe$1 = "⫒";
var ctdot$1 = "⋯";
var cudarrl$1 = "⤸";
var cudarrr$1 = "⤵";
var cuepr$1 = "⋞";
var cuesc$1 = "⋟";
var cularr$1 = "↶";
var cularrp$1 = "⤽";
var cupbrcap$1 = "⩈";
var cupcap$1 = "⩆";
var CupCap$1 = "≍";
var cup$1 = "∪";
var Cup$1 = "⋓";
var cupcup$1 = "⩊";
var cupdot$1 = "⊍";
var cupor$1 = "⩅";
var cups$1 = "∪︀";
var curarr$1 = "↷";
var curarrm$1 = "⤼";
var curlyeqprec$1 = "⋞";
var curlyeqsucc$1 = "⋟";
var curlyvee$1 = "⋎";
var curlywedge$1 = "⋏";
var curren$2 = "¤";
var curvearrowleft$1 = "↶";
var curvearrowright$1 = "↷";
var cuvee$1 = "⋎";
var cuwed$1 = "⋏";
var cwconint$1 = "∲";
var cwint$1 = "∱";
var cylcty$1 = "⌭";
var dagger$1 = "†";
var Dagger$1 = "‡";
var daleth$1 = "ℸ";
var darr$1 = "↓";
var Darr$1 = "↡";
var dArr$1 = "⇓";
var dash$1 = "‐";
var Dashv$1 = "⫤";
var dashv$1 = "⊣";
var dbkarow$1 = "⤏";
var dblac$1 = "˝";
var Dcaron$1 = "Ď";
var dcaron$1 = "ď";
var Dcy$1 = "Д";
var dcy$1 = "д";
var ddagger$1 = "‡";
var ddarr$1 = "⇊";
var DD$1 = "ⅅ";
var dd$1 = "ⅆ";
var DDotrahd$1 = "⤑";
var ddotseq$1 = "⩷";
var deg$2 = "°";
var Del$1 = "∇";
var Delta$1 = "Δ";
var delta$1 = "δ";
var demptyv$1 = "⦱";
var dfisht$1 = "⥿";
var Dfr$1 = "𝔇";
var dfr$1 = "𝔡";
var dHar$1 = "⥥";
var dharl$1 = "⇃";
var dharr$1 = "⇂";
var DiacriticalAcute$1 = "´";
var DiacriticalDot$1 = "˙";
var DiacriticalDoubleAcute$1 = "˝";
var DiacriticalGrave$1 = "`";
var DiacriticalTilde$1 = "˜";
var diam$1 = "⋄";
var diamond$1 = "⋄";
var Diamond$1 = "⋄";
var diamondsuit$1 = "♦";
var diams$1 = "♦";
var die$1 = "¨";
var DifferentialD$1 = "ⅆ";
var digamma$1 = "ϝ";
var disin$1 = "⋲";
var div$1 = "÷";
var divide$2 = "÷";
var divideontimes$1 = "⋇";
var divonx$1 = "⋇";
var DJcy$1 = "Ђ";
var djcy$1 = "ђ";
var dlcorn$1 = "⌞";
var dlcrop$1 = "⌍";
var dollar$1 = "$";
var Dopf$1 = "𝔻";
var dopf$1 = "𝕕";
var Dot$1 = "¨";
var dot$1 = "˙";
var DotDot$1 = "⃜";
var doteq$1 = "≐";
var doteqdot$1 = "≑";
var DotEqual$1 = "≐";
var dotminus$1 = "∸";
var dotplus$1 = "∔";
var dotsquare$1 = "⊡";
var doublebarwedge$1 = "⌆";
var DoubleContourIntegral$1 = "∯";
var DoubleDot$1 = "¨";
var DoubleDownArrow$1 = "⇓";
var DoubleLeftArrow$1 = "⇐";
var DoubleLeftRightArrow$1 = "⇔";
var DoubleLeftTee$1 = "⫤";
var DoubleLongLeftArrow$1 = "⟸";
var DoubleLongLeftRightArrow$1 = "⟺";
var DoubleLongRightArrow$1 = "⟹";
var DoubleRightArrow$1 = "⇒";
var DoubleRightTee$1 = "⊨";
var DoubleUpArrow$1 = "⇑";
var DoubleUpDownArrow$1 = "⇕";
var DoubleVerticalBar$1 = "∥";
var DownArrowBar$1 = "⤓";
var downarrow$1 = "↓";
var DownArrow$1 = "↓";
var Downarrow$1 = "⇓";
var DownArrowUpArrow$1 = "⇵";
var DownBreve$1 = "̑";
var downdownarrows$1 = "⇊";
var downharpoonleft$1 = "⇃";
var downharpoonright$1 = "⇂";
var DownLeftRightVector$1 = "⥐";
var DownLeftTeeVector$1 = "⥞";
var DownLeftVectorBar$1 = "⥖";
var DownLeftVector$1 = "↽";
var DownRightTeeVector$1 = "⥟";
var DownRightVectorBar$1 = "⥗";
var DownRightVector$1 = "⇁";
var DownTeeArrow$1 = "↧";
var DownTee$1 = "⊤";
var drbkarow$1 = "⤐";
var drcorn$1 = "⌟";
var drcrop$1 = "⌌";
var Dscr$1 = "𝒟";
var dscr$1 = "𝒹";
var DScy$1 = "Ѕ";
var dscy$1 = "ѕ";
var dsol$1 = "⧶";
var Dstrok$1 = "Đ";
var dstrok$1 = "đ";
var dtdot$1 = "⋱";
var dtri$1 = "▿";
var dtrif$1 = "▾";
var duarr$1 = "⇵";
var duhar$1 = "⥯";
var dwangle$1 = "⦦";
var DZcy$1 = "Џ";
var dzcy$1 = "џ";
var dzigrarr$1 = "⟿";
var Eacute$2 = "É";
var eacute$2 = "é";
var easter$1 = "⩮";
var Ecaron$1 = "Ě";
var ecaron$1 = "ě";
var Ecirc$2 = "Ê";
var ecirc$2 = "ê";
var ecir$1 = "≖";
var ecolon$1 = "≕";
var Ecy$1 = "Э";
var ecy$1 = "э";
var eDDot$1 = "⩷";
var Edot$1 = "Ė";
var edot$1 = "ė";
var eDot$1 = "≑";
var ee$1 = "ⅇ";
var efDot$1 = "≒";
var Efr$1 = "𝔈";
var efr$1 = "𝔢";
var eg$1 = "⪚";
var Egrave$2 = "È";
var egrave$2 = "è";
var egs$1 = "⪖";
var egsdot$1 = "⪘";
var el$1 = "⪙";
var Element$1 = "∈";
var elinters$1 = "⏧";
var ell$1 = "ℓ";
var els$1 = "⪕";
var elsdot$1 = "⪗";
var Emacr$1 = "Ē";
var emacr$1 = "ē";
var empty$1 = "∅";
var emptyset$1 = "∅";
var EmptySmallSquare$1 = "◻";
var emptyv$1 = "∅";
var EmptyVerySmallSquare$1 = "▫";
var emsp13$1 = " ";
var emsp14$1 = " ";
var emsp$1 = " ";
var ENG$1 = "Ŋ";
var eng$1 = "ŋ";
var ensp$1 = " ";
var Eogon$1 = "Ę";
var eogon$1 = "ę";
var Eopf$1 = "𝔼";
var eopf$1 = "𝕖";
var epar$1 = "⋕";
var eparsl$1 = "⧣";
var eplus$1 = "⩱";
var epsi$1 = "ε";
var Epsilon$1 = "Ε";
var epsilon$1 = "ε";
var epsiv$1 = "ϵ";
var eqcirc$1 = "≖";
var eqcolon$1 = "≕";
var eqsim$1 = "≂";
var eqslantgtr$1 = "⪖";
var eqslantless$1 = "⪕";
var Equal$1 = "⩵";
var equals$1 = "=";
var EqualTilde$1 = "≂";
var equest$1 = "≟";
var Equilibrium$1 = "⇌";
var equiv$1 = "≡";
var equivDD$1 = "⩸";
var eqvparsl$1 = "⧥";
var erarr$1 = "⥱";
var erDot$1 = "≓";
var escr$1 = "ℯ";
var Escr$1 = "ℰ";
var esdot$1 = "≐";
var Esim$1 = "⩳";
var esim$1 = "≂";
var Eta$1 = "Η";
var eta$1 = "η";
var ETH$2 = "Ð";
var eth$2 = "ð";
var Euml$2 = "Ë";
var euml$2 = "ë";
var euro$1 = "€";
var excl$1 = "!";
var exist$1 = "∃";
var Exists$1 = "∃";
var expectation$1 = "ℰ";
var exponentiale$1 = "ⅇ";
var ExponentialE$1 = "ⅇ";
var fallingdotseq$1 = "≒";
var Fcy$1 = "Ф";
var fcy$1 = "ф";
var female$1 = "♀";
var ffilig$1 = "ﬃ";
var fflig$1 = "ﬀ";
var ffllig$1 = "ﬄ";
var Ffr$1 = "𝔉";
var ffr$1 = "𝔣";
var filig$1 = "ﬁ";
var FilledSmallSquare$1 = "◼";
var FilledVerySmallSquare$1 = "▪";
var fjlig$1 = "fj";
var flat$1 = "♭";
var fllig$1 = "ﬂ";
var fltns$1 = "▱";
var fnof$1 = "ƒ";
var Fopf$1 = "𝔽";
var fopf$1 = "𝕗";
var forall$1 = "∀";
var ForAll$1 = "∀";
var fork$1 = "⋔";
var forkv$1 = "⫙";
var Fouriertrf$1 = "ℱ";
var fpartint$1 = "⨍";
var frac12$2 = "½";
var frac13$1 = "⅓";
var frac14$2 = "¼";
var frac15$1 = "⅕";
var frac16$1 = "⅙";
var frac18$1 = "⅛";
var frac23$1 = "⅔";
var frac25$1 = "⅖";
var frac34$2 = "¾";
var frac35$1 = "⅗";
var frac38$1 = "⅜";
var frac45$1 = "⅘";
var frac56$1 = "⅚";
var frac58$1 = "⅝";
var frac78$1 = "⅞";
var frasl$1 = "⁄";
var frown$1 = "⌢";
var fscr$1 = "𝒻";
var Fscr$1 = "ℱ";
var gacute$1 = "ǵ";
var Gamma$1 = "Γ";
var gamma$1 = "γ";
var Gammad$1 = "Ϝ";
var gammad$1 = "ϝ";
var gap$1 = "⪆";
var Gbreve$1 = "Ğ";
var gbreve$1 = "ğ";
var Gcedil$1 = "Ģ";
var Gcirc$1 = "Ĝ";
var gcirc$1 = "ĝ";
var Gcy$1 = "Г";
var gcy$1 = "г";
var Gdot$1 = "Ġ";
var gdot$1 = "ġ";
var ge$1 = "≥";
var gE$1 = "≧";
var gEl$1 = "⪌";
var gel$1 = "⋛";
var geq$1 = "≥";
var geqq$1 = "≧";
var geqslant$1 = "⩾";
var gescc$1 = "⪩";
var ges$1 = "⩾";
var gesdot$1 = "⪀";
var gesdoto$1 = "⪂";
var gesdotol$1 = "⪄";
var gesl$1 = "⋛︀";
var gesles$1 = "⪔";
var Gfr$1 = "𝔊";
var gfr$1 = "𝔤";
var gg$1 = "≫";
var Gg$1 = "⋙";
var ggg$1 = "⋙";
var gimel$1 = "ℷ";
var GJcy$1 = "Ѓ";
var gjcy$1 = "ѓ";
var gla$1 = "⪥";
var gl$1 = "≷";
var glE$1 = "⪒";
var glj$1 = "⪤";
var gnap$1 = "⪊";
var gnapprox$1 = "⪊";
var gne$1 = "⪈";
var gnE$1 = "≩";
var gneq$1 = "⪈";
var gneqq$1 = "≩";
var gnsim$1 = "⋧";
var Gopf$1 = "𝔾";
var gopf$1 = "𝕘";
var grave$1 = "`";
var GreaterEqual$1 = "≥";
var GreaterEqualLess$1 = "⋛";
var GreaterFullEqual$1 = "≧";
var GreaterGreater$1 = "⪢";
var GreaterLess$1 = "≷";
var GreaterSlantEqual$1 = "⩾";
var GreaterTilde$1 = "≳";
var Gscr$1 = "𝒢";
var gscr$1 = "ℊ";
var gsim$1 = "≳";
var gsime$1 = "⪎";
var gsiml$1 = "⪐";
var gtcc$1 = "⪧";
var gtcir$1 = "⩺";
var gt$3 = ">";
var GT$2 = ">";
var Gt$1 = "≫";
var gtdot$1 = "⋗";
var gtlPar$1 = "⦕";
var gtquest$1 = "⩼";
var gtrapprox$1 = "⪆";
var gtrarr$1 = "⥸";
var gtrdot$1 = "⋗";
var gtreqless$1 = "⋛";
var gtreqqless$1 = "⪌";
var gtrless$1 = "≷";
var gtrsim$1 = "≳";
var gvertneqq$1 = "≩︀";
var gvnE$1 = "≩︀";
var Hacek$1 = "ˇ";
var hairsp$1 = " ";
var half$1 = "½";
var hamilt$1 = "ℋ";
var HARDcy$1 = "Ъ";
var hardcy$1 = "ъ";
var harrcir$1 = "⥈";
var harr$1 = "↔";
var hArr$1 = "⇔";
var harrw$1 = "↭";
var Hat$1 = "^";
var hbar$1 = "ℏ";
var Hcirc$1 = "Ĥ";
var hcirc$1 = "ĥ";
var hearts$1 = "♥";
var heartsuit$1 = "♥";
var hellip$1 = "…";
var hercon$1 = "⊹";
var hfr$1 = "𝔥";
var Hfr$1 = "ℌ";
var HilbertSpace$1 = "ℋ";
var hksearow$1 = "⤥";
var hkswarow$1 = "⤦";
var hoarr$1 = "⇿";
var homtht$1 = "∻";
var hookleftarrow$1 = "↩";
var hookrightarrow$1 = "↪";
var hopf$1 = "𝕙";
var Hopf$1 = "ℍ";
var horbar$1 = "―";
var HorizontalLine$1 = "─";
var hscr$1 = "𝒽";
var Hscr$1 = "ℋ";
var hslash$1 = "ℏ";
var Hstrok$1 = "Ħ";
var hstrok$1 = "ħ";
var HumpDownHump$1 = "≎";
var HumpEqual$1 = "≏";
var hybull$1 = "⁃";
var hyphen$1 = "‐";
var Iacute$2 = "Í";
var iacute$2 = "í";
var ic$1 = "⁣";
var Icirc$2 = "Î";
var icirc$2 = "î";
var Icy$1 = "И";
var icy$1 = "и";
var Idot$1 = "İ";
var IEcy$1 = "Е";
var iecy$1 = "е";
var iexcl$2 = "¡";
var iff$1 = "⇔";
var ifr$1 = "𝔦";
var Ifr$1 = "ℑ";
var Igrave$2 = "Ì";
var igrave$2 = "ì";
var ii$1 = "ⅈ";
var iiiint$1 = "⨌";
var iiint$1 = "∭";
var iinfin$1 = "⧜";
var iiota$1 = "℩";
var IJlig$1 = "Ĳ";
var ijlig$1 = "ĳ";
var Imacr$1 = "Ī";
var imacr$1 = "ī";
var image$1 = "ℑ";
var ImaginaryI$1 = "ⅈ";
var imagline$1 = "ℐ";
var imagpart$1 = "ℑ";
var imath$1 = "ı";
var Im$1 = "ℑ";
var imof$1 = "⊷";
var imped$1 = "Ƶ";
var Implies$1 = "⇒";
var incare$1 = "℅";
var infin$1 = "∞";
var infintie$1 = "⧝";
var inodot$1 = "ı";
var intcal$1 = "⊺";
var int$1 = "∫";
var Int$1 = "∬";
var integers$1 = "ℤ";
var Integral$1 = "∫";
var intercal$1 = "⊺";
var Intersection$1 = "⋂";
var intlarhk$1 = "⨗";
var intprod$1 = "⨼";
var InvisibleComma$1 = "⁣";
var InvisibleTimes$1 = "⁢";
var IOcy$1 = "Ё";
var iocy$1 = "ё";
var Iogon$1 = "Į";
var iogon$1 = "į";
var Iopf$1 = "𝕀";
var iopf$1 = "𝕚";
var Iota$1 = "Ι";
var iota$1 = "ι";
var iprod$1 = "⨼";
var iquest$2 = "¿";
var iscr$1 = "𝒾";
var Iscr$1 = "ℐ";
var isin$1 = "∈";
var isindot$1 = "⋵";
var isinE$1 = "⋹";
var isins$1 = "⋴";
var isinsv$1 = "⋳";
var isinv$1 = "∈";
var it$1 = "⁢";
var Itilde$1 = "Ĩ";
var itilde$1 = "ĩ";
var Iukcy$1 = "І";
var iukcy$1 = "і";
var Iuml$2 = "Ï";
var iuml$2 = "ï";
var Jcirc$1 = "Ĵ";
var jcirc$1 = "ĵ";
var Jcy$1 = "Й";
var jcy$1 = "й";
var Jfr$1 = "𝔍";
var jfr$1 = "𝔧";
var jmath$1 = "ȷ";
var Jopf$1 = "𝕁";
var jopf$1 = "𝕛";
var Jscr$1 = "𝒥";
var jscr$1 = "𝒿";
var Jsercy$1 = "Ј";
var jsercy$1 = "ј";
var Jukcy$1 = "Є";
var jukcy$1 = "є";
var Kappa$1 = "Κ";
var kappa$1 = "κ";
var kappav$1 = "ϰ";
var Kcedil$1 = "Ķ";
var kcedil$1 = "ķ";
var Kcy$1 = "К";
var kcy$1 = "к";
var Kfr$1 = "𝔎";
var kfr$1 = "𝔨";
var kgreen$1 = "ĸ";
var KHcy$1 = "Х";
var khcy$1 = "х";
var KJcy$1 = "Ќ";
var kjcy$1 = "ќ";
var Kopf$1 = "𝕂";
var kopf$1 = "𝕜";
var Kscr$1 = "𝒦";
var kscr$1 = "𝓀";
var lAarr$1 = "⇚";
var Lacute$1 = "Ĺ";
var lacute$1 = "ĺ";
var laemptyv$1 = "⦴";
var lagran$1 = "ℒ";
var Lambda$1 = "Λ";
var lambda$1 = "λ";
var lang$1 = "⟨";
var Lang$1 = "⟪";
var langd$1 = "⦑";
var langle$1 = "⟨";
var lap$1 = "⪅";
var Laplacetrf$1 = "ℒ";
var laquo$2 = "«";
var larrb$1 = "⇤";
var larrbfs$1 = "⤟";
var larr$1 = "←";
var Larr$1 = "↞";
var lArr$1 = "⇐";
var larrfs$1 = "⤝";
var larrhk$1 = "↩";
var larrlp$1 = "↫";
var larrpl$1 = "⤹";
var larrsim$1 = "⥳";
var larrtl$1 = "↢";
var latail$1 = "⤙";
var lAtail$1 = "⤛";
var lat$1 = "⪫";
var late$1 = "⪭";
var lates$1 = "⪭︀";
var lbarr$1 = "⤌";
var lBarr$1 = "⤎";
var lbbrk$1 = "❲";
var lbrace$1 = "{";
var lbrack$1 = "[";
var lbrke$1 = "⦋";
var lbrksld$1 = "⦏";
var lbrkslu$1 = "⦍";
var Lcaron$1 = "Ľ";
var lcaron$1 = "ľ";
var Lcedil$1 = "Ļ";
var lcedil$1 = "ļ";
var lceil$1 = "⌈";
var lcub$1 = "{";
var Lcy$1 = "Л";
var lcy$1 = "л";
var ldca$1 = "⤶";
var ldquo$1 = "“";
var ldquor$1 = "„";
var ldrdhar$1 = "⥧";
var ldrushar$1 = "⥋";
var ldsh$1 = "↲";
var le$1 = "≤";
var lE$1 = "≦";
var LeftAngleBracket$1 = "⟨";
var LeftArrowBar$1 = "⇤";
var leftarrow$1 = "←";
var LeftArrow$1 = "←";
var Leftarrow$1 = "⇐";
var LeftArrowRightArrow$1 = "⇆";
var leftarrowtail$1 = "↢";
var LeftCeiling$1 = "⌈";
var LeftDoubleBracket$1 = "⟦";
var LeftDownTeeVector$1 = "⥡";
var LeftDownVectorBar$1 = "⥙";
var LeftDownVector$1 = "⇃";
var LeftFloor$1 = "⌊";
var leftharpoondown$1 = "↽";
var leftharpoonup$1 = "↼";
var leftleftarrows$1 = "⇇";
var leftrightarrow$1 = "↔";
var LeftRightArrow$1 = "↔";
var Leftrightarrow$1 = "⇔";
var leftrightarrows$1 = "⇆";
var leftrightharpoons$1 = "⇋";
var leftrightsquigarrow$1 = "↭";
var LeftRightVector$1 = "⥎";
var LeftTeeArrow$1 = "↤";
var LeftTee$1 = "⊣";
var LeftTeeVector$1 = "⥚";
var leftthreetimes$1 = "⋋";
var LeftTriangleBar$1 = "⧏";
var LeftTriangle$1 = "⊲";
var LeftTriangleEqual$1 = "⊴";
var LeftUpDownVector$1 = "⥑";
var LeftUpTeeVector$1 = "⥠";
var LeftUpVectorBar$1 = "⥘";
var LeftUpVector$1 = "↿";
var LeftVectorBar$1 = "⥒";
var LeftVector$1 = "↼";
var lEg$1 = "⪋";
var leg$1 = "⋚";
var leq$1 = "≤";
var leqq$1 = "≦";
var leqslant$1 = "⩽";
var lescc$1 = "⪨";
var les$1 = "⩽";
var lesdot$1 = "⩿";
var lesdoto$1 = "⪁";
var lesdotor$1 = "⪃";
var lesg$1 = "⋚︀";
var lesges$1 = "⪓";
var lessapprox$1 = "⪅";
var lessdot$1 = "⋖";
var lesseqgtr$1 = "⋚";
var lesseqqgtr$1 = "⪋";
var LessEqualGreater$1 = "⋚";
var LessFullEqual$1 = "≦";
var LessGreater$1 = "≶";
var lessgtr$1 = "≶";
var LessLess$1 = "⪡";
var lesssim$1 = "≲";
var LessSlantEqual$1 = "⩽";
var LessTilde$1 = "≲";
var lfisht$1 = "⥼";
var lfloor$1 = "⌊";
var Lfr$1 = "𝔏";
var lfr$1 = "𝔩";
var lg$1 = "≶";
var lgE$1 = "⪑";
var lHar$1 = "⥢";
var lhard$1 = "↽";
var lharu$1 = "↼";
var lharul$1 = "⥪";
var lhblk$1 = "▄";
var LJcy$1 = "Љ";
var ljcy$1 = "љ";
var llarr$1 = "⇇";
var ll$1 = "≪";
var Ll$1 = "⋘";
var llcorner$1 = "⌞";
var Lleftarrow$1 = "⇚";
var llhard$1 = "⥫";
var lltri$1 = "◺";
var Lmidot$1 = "Ŀ";
var lmidot$1 = "ŀ";
var lmoustache$1 = "⎰";
var lmoust$1 = "⎰";
var lnap$1 = "⪉";
var lnapprox$1 = "⪉";
var lne$1 = "⪇";
var lnE$1 = "≨";
var lneq$1 = "⪇";
var lneqq$1 = "≨";
var lnsim$1 = "⋦";
var loang$1 = "⟬";
var loarr$1 = "⇽";
var lobrk$1 = "⟦";
var longleftarrow$1 = "⟵";
var LongLeftArrow$1 = "⟵";
var Longleftarrow$1 = "⟸";
var longleftrightarrow$1 = "⟷";
var LongLeftRightArrow$1 = "⟷";
var Longleftrightarrow$1 = "⟺";
var longmapsto$1 = "⟼";
var longrightarrow$1 = "⟶";
var LongRightArrow$1 = "⟶";
var Longrightarrow$1 = "⟹";
var looparrowleft$1 = "↫";
var looparrowright$1 = "↬";
var lopar$1 = "⦅";
var Lopf$1 = "𝕃";
var lopf$1 = "𝕝";
var loplus$1 = "⨭";
var lotimes$1 = "⨴";
var lowast$1 = "∗";
var lowbar$1 = "_";
var LowerLeftArrow$1 = "↙";
var LowerRightArrow$1 = "↘";
var loz$1 = "◊";
var lozenge$1 = "◊";
var lozf$1 = "⧫";
var lpar$1 = "(";
var lparlt$1 = "⦓";
var lrarr$1 = "⇆";
var lrcorner$1 = "⌟";
var lrhar$1 = "⇋";
var lrhard$1 = "⥭";
var lrm$1 = "‎";
var lrtri$1 = "⊿";
var lsaquo$1 = "‹";
var lscr$1 = "𝓁";
var Lscr$1 = "ℒ";
var lsh$1 = "↰";
var Lsh$1 = "↰";
var lsim$1 = "≲";
var lsime$1 = "⪍";
var lsimg$1 = "⪏";
var lsqb$1 = "[";
var lsquo$1 = "‘";
var lsquor$1 = "‚";
var Lstrok$1 = "Ł";
var lstrok$1 = "ł";
var ltcc$1 = "⪦";
var ltcir$1 = "⩹";
var lt$3 = "<";
var LT$2 = "<";
var Lt$1 = "≪";
var ltdot$1 = "⋖";
var lthree$1 = "⋋";
var ltimes$1 = "⋉";
var ltlarr$1 = "⥶";
var ltquest$1 = "⩻";
var ltri$1 = "◃";
var ltrie$1 = "⊴";
var ltrif$1 = "◂";
var ltrPar$1 = "⦖";
var lurdshar$1 = "⥊";
var luruhar$1 = "⥦";
var lvertneqq$1 = "≨︀";
var lvnE$1 = "≨︀";
var macr$2 = "¯";
var male$1 = "♂";
var malt$1 = "✠";
var maltese$1 = "✠";
var map$1 = "↦";
var mapsto$1 = "↦";
var mapstodown$1 = "↧";
var mapstoleft$1 = "↤";
var mapstoup$1 = "↥";
var marker$1 = "▮";
var mcomma$1 = "⨩";
var Mcy$1 = "М";
var mcy$1 = "м";
var mdash$1 = "—";
var mDDot$1 = "∺";
var measuredangle$1 = "∡";
var MediumSpace$1 = " ";
var Mellintrf$1 = "ℳ";
var Mfr$1 = "𝔐";
var mfr$1 = "𝔪";
var mho$1 = "℧";
var micro$2 = "µ";
var midast$1 = "*";
var midcir$1 = "⫰";
var mid$1 = "∣";
var middot$2 = "·";
var minusb$1 = "⊟";
var minus$1 = "−";
var minusd$1 = "∸";
var minusdu$1 = "⨪";
var MinusPlus$1 = "∓";
var mlcp$1 = "⫛";
var mldr$1 = "…";
var mnplus$1 = "∓";
var models$1 = "⊧";
var Mopf$1 = "𝕄";
var mopf$1 = "𝕞";
var mp$1 = "∓";
var mscr$1 = "𝓂";
var Mscr$1 = "ℳ";
var mstpos$1 = "∾";
var Mu$1 = "Μ";
var mu$1 = "μ";
var multimap$1 = "⊸";
var mumap$1 = "⊸";
var nabla$1 = "∇";
var Nacute$1 = "Ń";
var nacute$1 = "ń";
var nang$1 = "∠⃒";
var nap$1 = "≉";
var napE$1 = "⩰̸";
var napid$1 = "≋̸";
var napos$1 = "ŉ";
var napprox$1 = "≉";
var natural$1 = "♮";
var naturals$1 = "ℕ";
var natur$1 = "♮";
var nbsp$2 = " ";
var nbump$1 = "≎̸";
var nbumpe$1 = "≏̸";
var ncap$1 = "⩃";
var Ncaron$1 = "Ň";
var ncaron$1 = "ň";
var Ncedil$1 = "Ņ";
var ncedil$1 = "ņ";
var ncong$1 = "≇";
var ncongdot$1 = "⩭̸";
var ncup$1 = "⩂";
var Ncy$1 = "Н";
var ncy$1 = "н";
var ndash$1 = "–";
var nearhk$1 = "⤤";
var nearr$1 = "↗";
var neArr$1 = "⇗";
var nearrow$1 = "↗";
var ne$1 = "≠";
var nedot$1 = "≐̸";
var NegativeMediumSpace$1 = "​";
var NegativeThickSpace$1 = "​";
var NegativeThinSpace$1 = "​";
var NegativeVeryThinSpace$1 = "​";
var nequiv$1 = "≢";
var nesear$1 = "⤨";
var nesim$1 = "≂̸";
var NestedGreaterGreater$1 = "≫";
var NestedLessLess$1 = "≪";
var NewLine$1 = "\n";
var nexist$1 = "∄";
var nexists$1 = "∄";
var Nfr$1 = "𝔑";
var nfr$1 = "𝔫";
var ngE$1 = "≧̸";
var nge$1 = "≱";
var ngeq$1 = "≱";
var ngeqq$1 = "≧̸";
var ngeqslant$1 = "⩾̸";
var nges$1 = "⩾̸";
var nGg$1 = "⋙̸";
var ngsim$1 = "≵";
var nGt$1 = "≫⃒";
var ngt$1 = "≯";
var ngtr$1 = "≯";
var nGtv$1 = "≫̸";
var nharr$1 = "↮";
var nhArr$1 = "⇎";
var nhpar$1 = "⫲";
var ni$1 = "∋";
var nis$1 = "⋼";
var nisd$1 = "⋺";
var niv$1 = "∋";
var NJcy$1 = "Њ";
var njcy$1 = "њ";
var nlarr$1 = "↚";
var nlArr$1 = "⇍";
var nldr$1 = "‥";
var nlE$1 = "≦̸";
var nle$1 = "≰";
var nleftarrow$1 = "↚";
var nLeftarrow$1 = "⇍";
var nleftrightarrow$1 = "↮";
var nLeftrightarrow$1 = "⇎";
var nleq$1 = "≰";
var nleqq$1 = "≦̸";
var nleqslant$1 = "⩽̸";
var nles$1 = "⩽̸";
var nless$1 = "≮";
var nLl$1 = "⋘̸";
var nlsim$1 = "≴";
var nLt$1 = "≪⃒";
var nlt$1 = "≮";
var nltri$1 = "⋪";
var nltrie$1 = "⋬";
var nLtv$1 = "≪̸";
var nmid$1 = "∤";
var NoBreak$1 = "⁠";
var NonBreakingSpace$1 = " ";
var nopf$1 = "𝕟";
var Nopf$1 = "ℕ";
var Not$1 = "⫬";
var not$2 = "¬";
var NotCongruent$1 = "≢";
var NotCupCap$1 = "≭";
var NotDoubleVerticalBar$1 = "∦";
var NotElement$1 = "∉";
var NotEqual$1 = "≠";
var NotEqualTilde$1 = "≂̸";
var NotExists$1 = "∄";
var NotGreater$1 = "≯";
var NotGreaterEqual$1 = "≱";
var NotGreaterFullEqual$1 = "≧̸";
var NotGreaterGreater$1 = "≫̸";
var NotGreaterLess$1 = "≹";
var NotGreaterSlantEqual$1 = "⩾̸";
var NotGreaterTilde$1 = "≵";
var NotHumpDownHump$1 = "≎̸";
var NotHumpEqual$1 = "≏̸";
var notin$1 = "∉";
var notindot$1 = "⋵̸";
var notinE$1 = "⋹̸";
var notinva$1 = "∉";
var notinvb$1 = "⋷";
var notinvc$1 = "⋶";
var NotLeftTriangleBar$1 = "⧏̸";
var NotLeftTriangle$1 = "⋪";
var NotLeftTriangleEqual$1 = "⋬";
var NotLess$1 = "≮";
var NotLessEqual$1 = "≰";
var NotLessGreater$1 = "≸";
var NotLessLess$1 = "≪̸";
var NotLessSlantEqual$1 = "⩽̸";
var NotLessTilde$1 = "≴";
var NotNestedGreaterGreater$1 = "⪢̸";
var NotNestedLessLess$1 = "⪡̸";
var notni$1 = "∌";
var notniva$1 = "∌";
var notnivb$1 = "⋾";
var notnivc$1 = "⋽";
var NotPrecedes$1 = "⊀";
var NotPrecedesEqual$1 = "⪯̸";
var NotPrecedesSlantEqual$1 = "⋠";
var NotReverseElement$1 = "∌";
var NotRightTriangleBar$1 = "⧐̸";
var NotRightTriangle$1 = "⋫";
var NotRightTriangleEqual$1 = "⋭";
var NotSquareSubset$1 = "⊏̸";
var NotSquareSubsetEqual$1 = "⋢";
var NotSquareSuperset$1 = "⊐̸";
var NotSquareSupersetEqual$1 = "⋣";
var NotSubset$1 = "⊂⃒";
var NotSubsetEqual$1 = "⊈";
var NotSucceeds$1 = "⊁";
var NotSucceedsEqual$1 = "⪰̸";
var NotSucceedsSlantEqual$1 = "⋡";
var NotSucceedsTilde$1 = "≿̸";
var NotSuperset$1 = "⊃⃒";
var NotSupersetEqual$1 = "⊉";
var NotTilde$1 = "≁";
var NotTildeEqual$1 = "≄";
var NotTildeFullEqual$1 = "≇";
var NotTildeTilde$1 = "≉";
var NotVerticalBar$1 = "∤";
var nparallel$1 = "∦";
var npar$1 = "∦";
var nparsl$1 = "⫽⃥";
var npart$1 = "∂̸";
var npolint$1 = "⨔";
var npr$1 = "⊀";
var nprcue$1 = "⋠";
var nprec$1 = "⊀";
var npreceq$1 = "⪯̸";
var npre$1 = "⪯̸";
var nrarrc$1 = "⤳̸";
var nrarr$1 = "↛";
var nrArr$1 = "⇏";
var nrarrw$1 = "↝̸";
var nrightarrow$1 = "↛";
var nRightarrow$1 = "⇏";
var nrtri$1 = "⋫";
var nrtrie$1 = "⋭";
var nsc$1 = "⊁";
var nsccue$1 = "⋡";
var nsce$1 = "⪰̸";
var Nscr$1 = "𝒩";
var nscr$1 = "𝓃";
var nshortmid$1 = "∤";
var nshortparallel$1 = "∦";
var nsim$1 = "≁";
var nsime$1 = "≄";
var nsimeq$1 = "≄";
var nsmid$1 = "∤";
var nspar$1 = "∦";
var nsqsube$1 = "⋢";
var nsqsupe$1 = "⋣";
var nsub$1 = "⊄";
var nsubE$1 = "⫅̸";
var nsube$1 = "⊈";
var nsubset$1 = "⊂⃒";
var nsubseteq$1 = "⊈";
var nsubseteqq$1 = "⫅̸";
var nsucc$1 = "⊁";
var nsucceq$1 = "⪰̸";
var nsup$1 = "⊅";
var nsupE$1 = "⫆̸";
var nsupe$1 = "⊉";
var nsupset$1 = "⊃⃒";
var nsupseteq$1 = "⊉";
var nsupseteqq$1 = "⫆̸";
var ntgl$1 = "≹";
var Ntilde$2 = "Ñ";
var ntilde$2 = "ñ";
var ntlg$1 = "≸";
var ntriangleleft$1 = "⋪";
var ntrianglelefteq$1 = "⋬";
var ntriangleright$1 = "⋫";
var ntrianglerighteq$1 = "⋭";
var Nu$1 = "Ν";
var nu$1 = "ν";
var num$1 = "#";
var numero$1 = "№";
var numsp$1 = " ";
var nvap$1 = "≍⃒";
var nvdash$1 = "⊬";
var nvDash$1 = "⊭";
var nVdash$1 = "⊮";
var nVDash$1 = "⊯";
var nvge$1 = "≥⃒";
var nvgt$1 = ">⃒";
var nvHarr$1 = "⤄";
var nvinfin$1 = "⧞";
var nvlArr$1 = "⤂";
var nvle$1 = "≤⃒";
var nvlt$1 = "<⃒";
var nvltrie$1 = "⊴⃒";
var nvrArr$1 = "⤃";
var nvrtrie$1 = "⊵⃒";
var nvsim$1 = "∼⃒";
var nwarhk$1 = "⤣";
var nwarr$1 = "↖";
var nwArr$1 = "⇖";
var nwarrow$1 = "↖";
var nwnear$1 = "⤧";
var Oacute$2 = "Ó";
var oacute$2 = "ó";
var oast$1 = "⊛";
var Ocirc$2 = "Ô";
var ocirc$2 = "ô";
var ocir$1 = "⊚";
var Ocy$1 = "О";
var ocy$1 = "о";
var odash$1 = "⊝";
var Odblac$1 = "Ő";
var odblac$1 = "ő";
var odiv$1 = "⨸";
var odot$1 = "⊙";
var odsold$1 = "⦼";
var OElig$1 = "Œ";
var oelig$1 = "œ";
var ofcir$1 = "⦿";
var Ofr$1 = "𝔒";
var ofr$1 = "𝔬";
var ogon$1 = "˛";
var Ograve$2 = "Ò";
var ograve$2 = "ò";
var ogt$1 = "⧁";
var ohbar$1 = "⦵";
var ohm$1 = "Ω";
var oint$1 = "∮";
var olarr$1 = "↺";
var olcir$1 = "⦾";
var olcross$1 = "⦻";
var oline$1 = "‾";
var olt$1 = "⧀";
var Omacr$1 = "Ō";
var omacr$1 = "ō";
var Omega$1 = "Ω";
var omega$1 = "ω";
var Omicron$1 = "Ο";
var omicron$1 = "ο";
var omid$1 = "⦶";
var ominus$1 = "⊖";
var Oopf$1 = "𝕆";
var oopf$1 = "𝕠";
var opar$1 = "⦷";
var OpenCurlyDoubleQuote$1 = "“";
var OpenCurlyQuote$1 = "‘";
var operp$1 = "⦹";
var oplus$1 = "⊕";
var orarr$1 = "↻";
var Or$1 = "⩔";
var or$1 = "∨";
var ord$1 = "⩝";
var order$1 = "ℴ";
var orderof$1 = "ℴ";
var ordf$2 = "ª";
var ordm$2 = "º";
var origof$1 = "⊶";
var oror$1 = "⩖";
var orslope$1 = "⩗";
var orv$1 = "⩛";
var oS$1 = "Ⓢ";
var Oscr$1 = "𝒪";
var oscr$1 = "ℴ";
var Oslash$2 = "Ø";
var oslash$2 = "ø";
var osol$1 = "⊘";
var Otilde$2 = "Õ";
var otilde$2 = "õ";
var otimesas$1 = "⨶";
var Otimes$1 = "⨷";
var otimes$1 = "⊗";
var Ouml$2 = "Ö";
var ouml$2 = "ö";
var ovbar$1 = "⌽";
var OverBar$1 = "‾";
var OverBrace$1 = "⏞";
var OverBracket$1 = "⎴";
var OverParenthesis$1 = "⏜";
var para$2 = "¶";
var parallel$1 = "∥";
var par$1 = "∥";
var parsim$1 = "⫳";
var parsl$1 = "⫽";
var part$1 = "∂";
var PartialD$1 = "∂";
var Pcy$1 = "П";
var pcy$1 = "п";
var percnt$1 = "%";
var period$1 = ".";
var permil$1 = "‰";
var perp$1 = "⊥";
var pertenk$1 = "‱";
var Pfr$1 = "𝔓";
var pfr$1 = "𝔭";
var Phi$1 = "Φ";
var phi$1 = "φ";
var phiv$1 = "ϕ";
var phmmat$1 = "ℳ";
var phone$1 = "☎";
var Pi$1 = "Π";
var pi$1 = "π";
var pitchfork$1 = "⋔";
var piv$1 = "ϖ";
var planck$1 = "ℏ";
var planckh$1 = "ℎ";
var plankv$1 = "ℏ";
var plusacir$1 = "⨣";
var plusb$1 = "⊞";
var pluscir$1 = "⨢";
var plus$1 = "+";
var plusdo$1 = "∔";
var plusdu$1 = "⨥";
var pluse$1 = "⩲";
var PlusMinus$1 = "±";
var plusmn$2 = "±";
var plussim$1 = "⨦";
var plustwo$1 = "⨧";
var pm$1 = "±";
var Poincareplane$1 = "ℌ";
var pointint$1 = "⨕";
var popf$1 = "𝕡";
var Popf$1 = "ℙ";
var pound$2 = "£";
var prap$1 = "⪷";
var Pr$1 = "⪻";
var pr$1 = "≺";
var prcue$1 = "≼";
var precapprox$1 = "⪷";
var prec$1 = "≺";
var preccurlyeq$1 = "≼";
var Precedes$1 = "≺";
var PrecedesEqual$1 = "⪯";
var PrecedesSlantEqual$1 = "≼";
var PrecedesTilde$1 = "≾";
var preceq$1 = "⪯";
var precnapprox$1 = "⪹";
var precneqq$1 = "⪵";
var precnsim$1 = "⋨";
var pre$1 = "⪯";
var prE$1 = "⪳";
var precsim$1 = "≾";
var prime$1 = "′";
var Prime$1 = "″";
var primes$1 = "ℙ";
var prnap$1 = "⪹";
var prnE$1 = "⪵";
var prnsim$1 = "⋨";
var prod$1 = "∏";
var Product$1 = "∏";
var profalar$1 = "⌮";
var profline$1 = "⌒";
var profsurf$1 = "⌓";
var prop$1 = "∝";
var Proportional$1 = "∝";
var Proportion$1 = "∷";
var propto$1 = "∝";
var prsim$1 = "≾";
var prurel$1 = "⊰";
var Pscr$1 = "𝒫";
var pscr$1 = "𝓅";
var Psi$1 = "Ψ";
var psi$1 = "ψ";
var puncsp$1 = " ";
var Qfr$1 = "𝔔";
var qfr$1 = "𝔮";
var qint$1 = "⨌";
var qopf$1 = "𝕢";
var Qopf$1 = "ℚ";
var qprime$1 = "⁗";
var Qscr$1 = "𝒬";
var qscr$1 = "𝓆";
var quaternions$1 = "ℍ";
var quatint$1 = "⨖";
var quest$1 = "?";
var questeq$1 = "≟";
var quot$3 = "\"";
var QUOT$2 = "\"";
var rAarr$1 = "⇛";
var race$1 = "∽̱";
var Racute$1 = "Ŕ";
var racute$1 = "ŕ";
var radic$1 = "√";
var raemptyv$1 = "⦳";
var rang$1 = "⟩";
var Rang$1 = "⟫";
var rangd$1 = "⦒";
var range$1 = "⦥";
var rangle$1 = "⟩";
var raquo$2 = "»";
var rarrap$1 = "⥵";
var rarrb$1 = "⇥";
var rarrbfs$1 = "⤠";
var rarrc$1 = "⤳";
var rarr$1 = "→";
var Rarr$1 = "↠";
var rArr$1 = "⇒";
var rarrfs$1 = "⤞";
var rarrhk$1 = "↪";
var rarrlp$1 = "↬";
var rarrpl$1 = "⥅";
var rarrsim$1 = "⥴";
var Rarrtl$1 = "⤖";
var rarrtl$1 = "↣";
var rarrw$1 = "↝";
var ratail$1 = "⤚";
var rAtail$1 = "⤜";
var ratio$1 = "∶";
var rationals$1 = "ℚ";
var rbarr$1 = "⤍";
var rBarr$1 = "⤏";
var RBarr$1 = "⤐";
var rbbrk$1 = "❳";
var rbrace$1 = "}";
var rbrack$1 = "]";
var rbrke$1 = "⦌";
var rbrksld$1 = "⦎";
var rbrkslu$1 = "⦐";
var Rcaron$1 = "Ř";
var rcaron$1 = "ř";
var Rcedil$1 = "Ŗ";
var rcedil$1 = "ŗ";
var rceil$1 = "⌉";
var rcub$1 = "}";
var Rcy$1 = "Р";
var rcy$1 = "р";
var rdca$1 = "⤷";
var rdldhar$1 = "⥩";
var rdquo$1 = "”";
var rdquor$1 = "”";
var rdsh$1 = "↳";
var real$1 = "ℜ";
var realine$1 = "ℛ";
var realpart$1 = "ℜ";
var reals$1 = "ℝ";
var Re$1 = "ℜ";
var rect$1 = "▭";
var reg$2 = "®";
var REG$2 = "®";
var ReverseElement$1 = "∋";
var ReverseEquilibrium$1 = "⇋";
var ReverseUpEquilibrium$1 = "⥯";
var rfisht$1 = "⥽";
var rfloor$1 = "⌋";
var rfr$1 = "𝔯";
var Rfr$1 = "ℜ";
var rHar$1 = "⥤";
var rhard$1 = "⇁";
var rharu$1 = "⇀";
var rharul$1 = "⥬";
var Rho$1 = "Ρ";
var rho$1 = "ρ";
var rhov$1 = "ϱ";
var RightAngleBracket$1 = "⟩";
var RightArrowBar$1 = "⇥";
var rightarrow$1 = "→";
var RightArrow$1 = "→";
var Rightarrow$1 = "⇒";
var RightArrowLeftArrow$1 = "⇄";
var rightarrowtail$1 = "↣";
var RightCeiling$1 = "⌉";
var RightDoubleBracket$1 = "⟧";
var RightDownTeeVector$1 = "⥝";
var RightDownVectorBar$1 = "⥕";
var RightDownVector$1 = "⇂";
var RightFloor$1 = "⌋";
var rightharpoondown$1 = "⇁";
var rightharpoonup$1 = "⇀";
var rightleftarrows$1 = "⇄";
var rightleftharpoons$1 = "⇌";
var rightrightarrows$1 = "⇉";
var rightsquigarrow$1 = "↝";
var RightTeeArrow$1 = "↦";
var RightTee$1 = "⊢";
var RightTeeVector$1 = "⥛";
var rightthreetimes$1 = "⋌";
var RightTriangleBar$1 = "⧐";
var RightTriangle$1 = "⊳";
var RightTriangleEqual$1 = "⊵";
var RightUpDownVector$1 = "⥏";
var RightUpTeeVector$1 = "⥜";
var RightUpVectorBar$1 = "⥔";
var RightUpVector$1 = "↾";
var RightVectorBar$1 = "⥓";
var RightVector$1 = "⇀";
var ring$1 = "˚";
var risingdotseq$1 = "≓";
var rlarr$1 = "⇄";
var rlhar$1 = "⇌";
var rlm$1 = "‏";
var rmoustache$1 = "⎱";
var rmoust$1 = "⎱";
var rnmid$1 = "⫮";
var roang$1 = "⟭";
var roarr$1 = "⇾";
var robrk$1 = "⟧";
var ropar$1 = "⦆";
var ropf$1 = "𝕣";
var Ropf$1 = "ℝ";
var roplus$1 = "⨮";
var rotimes$1 = "⨵";
var RoundImplies$1 = "⥰";
var rpar$1 = ")";
var rpargt$1 = "⦔";
var rppolint$1 = "⨒";
var rrarr$1 = "⇉";
var Rrightarrow$1 = "⇛";
var rsaquo$1 = "›";
var rscr$1 = "𝓇";
var Rscr$1 = "ℛ";
var rsh$1 = "↱";
var Rsh$1 = "↱";
var rsqb$1 = "]";
var rsquo$1 = "’";
var rsquor$1 = "’";
var rthree$1 = "⋌";
var rtimes$1 = "⋊";
var rtri$1 = "▹";
var rtrie$1 = "⊵";
var rtrif$1 = "▸";
var rtriltri$1 = "⧎";
var RuleDelayed$1 = "⧴";
var ruluhar$1 = "⥨";
var rx$1 = "℞";
var Sacute$1 = "Ś";
var sacute$1 = "ś";
var sbquo$1 = "‚";
var scap$1 = "⪸";
var Scaron$1 = "Š";
var scaron$1 = "š";
var Sc$1 = "⪼";
var sc$1 = "≻";
var sccue$1 = "≽";
var sce$1 = "⪰";
var scE$1 = "⪴";
var Scedil$1 = "Ş";
var scedil$1 = "ş";
var Scirc$1 = "Ŝ";
var scirc$1 = "ŝ";
var scnap$1 = "⪺";
var scnE$1 = "⪶";
var scnsim$1 = "⋩";
var scpolint$1 = "⨓";
var scsim$1 = "≿";
var Scy$1 = "С";
var scy$1 = "с";
var sdotb$1 = "⊡";
var sdot$1 = "⋅";
var sdote$1 = "⩦";
var searhk$1 = "⤥";
var searr$1 = "↘";
var seArr$1 = "⇘";
var searrow$1 = "↘";
var sect$2 = "§";
var semi$1 = ";";
var seswar$1 = "⤩";
var setminus$1 = "∖";
var setmn$1 = "∖";
var sext$1 = "✶";
var Sfr$1 = "𝔖";
var sfr$1 = "𝔰";
var sfrown$1 = "⌢";
var sharp$1 = "♯";
var SHCHcy$1 = "Щ";
var shchcy$1 = "щ";
var SHcy$1 = "Ш";
var shcy$1 = "ш";
var ShortDownArrow$1 = "↓";
var ShortLeftArrow$1 = "←";
var shortmid$1 = "∣";
var shortparallel$1 = "∥";
var ShortRightArrow$1 = "→";
var ShortUpArrow$1 = "↑";
var shy$2 = "­";
var Sigma$1 = "Σ";
var sigma$1 = "σ";
var sigmaf$1 = "ς";
var sigmav$1 = "ς";
var sim$1 = "∼";
var simdot$1 = "⩪";
var sime$1 = "≃";
var simeq$1 = "≃";
var simg$1 = "⪞";
var simgE$1 = "⪠";
var siml$1 = "⪝";
var simlE$1 = "⪟";
var simne$1 = "≆";
var simplus$1 = "⨤";
var simrarr$1 = "⥲";
var slarr$1 = "←";
var SmallCircle$1 = "∘";
var smallsetminus$1 = "∖";
var smashp$1 = "⨳";
var smeparsl$1 = "⧤";
var smid$1 = "∣";
var smile$1 = "⌣";
var smt$1 = "⪪";
var smte$1 = "⪬";
var smtes$1 = "⪬︀";
var SOFTcy$1 = "Ь";
var softcy$1 = "ь";
var solbar$1 = "⌿";
var solb$1 = "⧄";
var sol$1 = "/";
var Sopf$1 = "𝕊";
var sopf$1 = "𝕤";
var spades$1 = "♠";
var spadesuit$1 = "♠";
var spar$1 = "∥";
var sqcap$1 = "⊓";
var sqcaps$1 = "⊓︀";
var sqcup$1 = "⊔";
var sqcups$1 = "⊔︀";
var Sqrt$1 = "√";
var sqsub$1 = "⊏";
var sqsube$1 = "⊑";
var sqsubset$1 = "⊏";
var sqsubseteq$1 = "⊑";
var sqsup$1 = "⊐";
var sqsupe$1 = "⊒";
var sqsupset$1 = "⊐";
var sqsupseteq$1 = "⊒";
var square$1 = "□";
var Square$1 = "□";
var SquareIntersection$1 = "⊓";
var SquareSubset$1 = "⊏";
var SquareSubsetEqual$1 = "⊑";
var SquareSuperset$1 = "⊐";
var SquareSupersetEqual$1 = "⊒";
var SquareUnion$1 = "⊔";
var squarf$1 = "▪";
var squ$1 = "□";
var squf$1 = "▪";
var srarr$1 = "→";
var Sscr$1 = "𝒮";
var sscr$1 = "𝓈";
var ssetmn$1 = "∖";
var ssmile$1 = "⌣";
var sstarf$1 = "⋆";
var Star$1 = "⋆";
var star$1 = "☆";
var starf$1 = "★";
var straightepsilon$1 = "ϵ";
var straightphi$1 = "ϕ";
var strns$1 = "¯";
var sub$1 = "⊂";
var Sub$1 = "⋐";
var subdot$1 = "⪽";
var subE$1 = "⫅";
var sube$1 = "⊆";
var subedot$1 = "⫃";
var submult$1 = "⫁";
var subnE$1 = "⫋";
var subne$1 = "⊊";
var subplus$1 = "⪿";
var subrarr$1 = "⥹";
var subset$1 = "⊂";
var Subset$1 = "⋐";
var subseteq$1 = "⊆";
var subseteqq$1 = "⫅";
var SubsetEqual$1 = "⊆";
var subsetneq$1 = "⊊";
var subsetneqq$1 = "⫋";
var subsim$1 = "⫇";
var subsub$1 = "⫕";
var subsup$1 = "⫓";
var succapprox$1 = "⪸";
var succ$1 = "≻";
var succcurlyeq$1 = "≽";
var Succeeds$1 = "≻";
var SucceedsEqual$1 = "⪰";
var SucceedsSlantEqual$1 = "≽";
var SucceedsTilde$1 = "≿";
var succeq$1 = "⪰";
var succnapprox$1 = "⪺";
var succneqq$1 = "⪶";
var succnsim$1 = "⋩";
var succsim$1 = "≿";
var SuchThat$1 = "∋";
var sum$1 = "∑";
var Sum$1 = "∑";
var sung$1 = "♪";
var sup1$2 = "¹";
var sup2$2 = "²";
var sup3$2 = "³";
var sup$1 = "⊃";
var Sup$1 = "⋑";
var supdot$1 = "⪾";
var supdsub$1 = "⫘";
var supE$1 = "⫆";
var supe$1 = "⊇";
var supedot$1 = "⫄";
var Superset$1 = "⊃";
var SupersetEqual$1 = "⊇";
var suphsol$1 = "⟉";
var suphsub$1 = "⫗";
var suplarr$1 = "⥻";
var supmult$1 = "⫂";
var supnE$1 = "⫌";
var supne$1 = "⊋";
var supplus$1 = "⫀";
var supset$1 = "⊃";
var Supset$1 = "⋑";
var supseteq$1 = "⊇";
var supseteqq$1 = "⫆";
var supsetneq$1 = "⊋";
var supsetneqq$1 = "⫌";
var supsim$1 = "⫈";
var supsub$1 = "⫔";
var supsup$1 = "⫖";
var swarhk$1 = "⤦";
var swarr$1 = "↙";
var swArr$1 = "⇙";
var swarrow$1 = "↙";
var swnwar$1 = "⤪";
var szlig$2 = "ß";
var Tab$1 = "\t";
var target$1 = "⌖";
var Tau$1 = "Τ";
var tau$1 = "τ";
var tbrk$1 = "⎴";
var Tcaron$1 = "Ť";
var tcaron$1 = "ť";
var Tcedil$1 = "Ţ";
var tcedil$1 = "ţ";
var Tcy$1 = "Т";
var tcy$1 = "т";
var tdot$1 = "⃛";
var telrec$1 = "⌕";
var Tfr$1 = "𝔗";
var tfr$1 = "𝔱";
var there4$1 = "∴";
var therefore$1 = "∴";
var Therefore$1 = "∴";
var Theta$1 = "Θ";
var theta$1 = "θ";
var thetasym$1 = "ϑ";
var thetav$1 = "ϑ";
var thickapprox$1 = "≈";
var thicksim$1 = "∼";
var ThickSpace$1 = "  ";
var ThinSpace$1 = " ";
var thinsp$1 = " ";
var thkap$1 = "≈";
var thksim$1 = "∼";
var THORN$2 = "Þ";
var thorn$2 = "þ";
var tilde$1 = "˜";
var Tilde$1 = "∼";
var TildeEqual$1 = "≃";
var TildeFullEqual$1 = "≅";
var TildeTilde$1 = "≈";
var timesbar$1 = "⨱";
var timesb$1 = "⊠";
var times$2 = "×";
var timesd$1 = "⨰";
var tint$1 = "∭";
var toea$1 = "⤨";
var topbot$1 = "⌶";
var topcir$1 = "⫱";
var top$1 = "⊤";
var Topf$1 = "𝕋";
var topf$1 = "𝕥";
var topfork$1 = "⫚";
var tosa$1 = "⤩";
var tprime$1 = "‴";
var trade$1 = "™";
var TRADE$1 = "™";
var triangle$1 = "▵";
var triangledown$1 = "▿";
var triangleleft$1 = "◃";
var trianglelefteq$1 = "⊴";
var triangleq$1 = "≜";
var triangleright$1 = "▹";
var trianglerighteq$1 = "⊵";
var tridot$1 = "◬";
var trie$1 = "≜";
var triminus$1 = "⨺";
var TripleDot$1 = "⃛";
var triplus$1 = "⨹";
var trisb$1 = "⧍";
var tritime$1 = "⨻";
var trpezium$1 = "⏢";
var Tscr$1 = "𝒯";
var tscr$1 = "𝓉";
var TScy$1 = "Ц";
var tscy$1 = "ц";
var TSHcy$1 = "Ћ";
var tshcy$1 = "ћ";
var Tstrok$1 = "Ŧ";
var tstrok$1 = "ŧ";
var twixt$1 = "≬";
var twoheadleftarrow$1 = "↞";
var twoheadrightarrow$1 = "↠";
var Uacute$2 = "Ú";
var uacute$2 = "ú";
var uarr$1 = "↑";
var Uarr$1 = "↟";
var uArr$1 = "⇑";
var Uarrocir$1 = "⥉";
var Ubrcy$1 = "Ў";
var ubrcy$1 = "ў";
var Ubreve$1 = "Ŭ";
var ubreve$1 = "ŭ";
var Ucirc$2 = "Û";
var ucirc$2 = "û";
var Ucy$1 = "У";
var ucy$1 = "у";
var udarr$1 = "⇅";
var Udblac$1 = "Ű";
var udblac$1 = "ű";
var udhar$1 = "⥮";
var ufisht$1 = "⥾";
var Ufr$1 = "𝔘";
var ufr$1 = "𝔲";
var Ugrave$2 = "Ù";
var ugrave$2 = "ù";
var uHar$1 = "⥣";
var uharl$1 = "↿";
var uharr$1 = "↾";
var uhblk$1 = "▀";
var ulcorn$1 = "⌜";
var ulcorner$1 = "⌜";
var ulcrop$1 = "⌏";
var ultri$1 = "◸";
var Umacr$1 = "Ū";
var umacr$1 = "ū";
var uml$2 = "¨";
var UnderBar$1 = "_";
var UnderBrace$1 = "⏟";
var UnderBracket$1 = "⎵";
var UnderParenthesis$1 = "⏝";
var Union$1 = "⋃";
var UnionPlus$1 = "⊎";
var Uogon$1 = "Ų";
var uogon$1 = "ų";
var Uopf$1 = "𝕌";
var uopf$1 = "𝕦";
var UpArrowBar$1 = "⤒";
var uparrow$1 = "↑";
var UpArrow$1 = "↑";
var Uparrow$1 = "⇑";
var UpArrowDownArrow$1 = "⇅";
var updownarrow$1 = "↕";
var UpDownArrow$1 = "↕";
var Updownarrow$1 = "⇕";
var UpEquilibrium$1 = "⥮";
var upharpoonleft$1 = "↿";
var upharpoonright$1 = "↾";
var uplus$1 = "⊎";
var UpperLeftArrow$1 = "↖";
var UpperRightArrow$1 = "↗";
var upsi$1 = "υ";
var Upsi$1 = "ϒ";
var upsih$1 = "ϒ";
var Upsilon$1 = "Υ";
var upsilon$1 = "υ";
var UpTeeArrow$1 = "↥";
var UpTee$1 = "⊥";
var upuparrows$1 = "⇈";
var urcorn$1 = "⌝";
var urcorner$1 = "⌝";
var urcrop$1 = "⌎";
var Uring$1 = "Ů";
var uring$1 = "ů";
var urtri$1 = "◹";
var Uscr$1 = "𝒰";
var uscr$1 = "𝓊";
var utdot$1 = "⋰";
var Utilde$1 = "Ũ";
var utilde$1 = "ũ";
var utri$1 = "▵";
var utrif$1 = "▴";
var uuarr$1 = "⇈";
var Uuml$2 = "Ü";
var uuml$2 = "ü";
var uwangle$1 = "⦧";
var vangrt$1 = "⦜";
var varepsilon$1 = "ϵ";
var varkappa$1 = "ϰ";
var varnothing$1 = "∅";
var varphi$1 = "ϕ";
var varpi$1 = "ϖ";
var varpropto$1 = "∝";
var varr$1 = "↕";
var vArr$1 = "⇕";
var varrho$1 = "ϱ";
var varsigma$1 = "ς";
var varsubsetneq$1 = "⊊︀";
var varsubsetneqq$1 = "⫋︀";
var varsupsetneq$1 = "⊋︀";
var varsupsetneqq$1 = "⫌︀";
var vartheta$1 = "ϑ";
var vartriangleleft$1 = "⊲";
var vartriangleright$1 = "⊳";
var vBar$1 = "⫨";
var Vbar$1 = "⫫";
var vBarv$1 = "⫩";
var Vcy$1 = "В";
var vcy$1 = "в";
var vdash$1 = "⊢";
var vDash$1 = "⊨";
var Vdash$1 = "⊩";
var VDash$1 = "⊫";
var Vdashl$1 = "⫦";
var veebar$1 = "⊻";
var vee$1 = "∨";
var Vee$1 = "⋁";
var veeeq$1 = "≚";
var vellip$1 = "⋮";
var verbar$1 = "|";
var Verbar$1 = "‖";
var vert$1 = "|";
var Vert$1 = "‖";
var VerticalBar$1 = "∣";
var VerticalLine$1 = "|";
var VerticalSeparator$1 = "❘";
var VerticalTilde$1 = "≀";
var VeryThinSpace$1 = " ";
var Vfr$1 = "𝔙";
var vfr$1 = "𝔳";
var vltri$1 = "⊲";
var vnsub$1 = "⊂⃒";
var vnsup$1 = "⊃⃒";
var Vopf$1 = "𝕍";
var vopf$1 = "𝕧";
var vprop$1 = "∝";
var vrtri$1 = "⊳";
var Vscr$1 = "𝒱";
var vscr$1 = "𝓋";
var vsubnE$1 = "⫋︀";
var vsubne$1 = "⊊︀";
var vsupnE$1 = "⫌︀";
var vsupne$1 = "⊋︀";
var Vvdash$1 = "⊪";
var vzigzag$1 = "⦚";
var Wcirc$1 = "Ŵ";
var wcirc$1 = "ŵ";
var wedbar$1 = "⩟";
var wedge$1 = "∧";
var Wedge$1 = "⋀";
var wedgeq$1 = "≙";
var weierp$1 = "℘";
var Wfr$1 = "𝔚";
var wfr$1 = "𝔴";
var Wopf$1 = "𝕎";
var wopf$1 = "𝕨";
var wp$1 = "℘";
var wr$1 = "≀";
var wreath$1 = "≀";
var Wscr$1 = "𝒲";
var wscr$1 = "𝓌";
var xcap$1 = "⋂";
var xcirc$1 = "◯";
var xcup$1 = "⋃";
var xdtri$1 = "▽";
var Xfr$1 = "𝔛";
var xfr$1 = "𝔵";
var xharr$1 = "⟷";
var xhArr$1 = "⟺";
var Xi$1 = "Ξ";
var xi$1 = "ξ";
var xlarr$1 = "⟵";
var xlArr$1 = "⟸";
var xmap$1 = "⟼";
var xnis$1 = "⋻";
var xodot$1 = "⨀";
var Xopf$1 = "𝕏";
var xopf$1 = "𝕩";
var xoplus$1 = "⨁";
var xotime$1 = "⨂";
var xrarr$1 = "⟶";
var xrArr$1 = "⟹";
var Xscr$1 = "𝒳";
var xscr$1 = "𝓍";
var xsqcup$1 = "⨆";
var xuplus$1 = "⨄";
var xutri$1 = "△";
var xvee$1 = "⋁";
var xwedge$1 = "⋀";
var Yacute$2 = "Ý";
var yacute$2 = "ý";
var YAcy$1 = "Я";
var yacy$1 = "я";
var Ycirc$1 = "Ŷ";
var ycirc$1 = "ŷ";
var Ycy$1 = "Ы";
var ycy$1 = "ы";
var yen$2 = "¥";
var Yfr$1 = "𝔜";
var yfr$1 = "𝔶";
var YIcy$1 = "Ї";
var yicy$1 = "ї";
var Yopf$1 = "𝕐";
var yopf$1 = "𝕪";
var Yscr$1 = "𝒴";
var yscr$1 = "𝓎";
var YUcy$1 = "Ю";
var yucy$1 = "ю";
var yuml$2 = "ÿ";
var Yuml$1 = "Ÿ";
var Zacute$1 = "Ź";
var zacute$1 = "ź";
var Zcaron$1 = "Ž";
var zcaron$1 = "ž";
var Zcy$1 = "З";
var zcy$1 = "з";
var Zdot$1 = "Ż";
var zdot$1 = "ż";
var zeetrf$1 = "ℨ";
var ZeroWidthSpace$1 = "​";
var Zeta$1 = "Ζ";
var zeta$1 = "ζ";
var zfr$1 = "𝔷";
var Zfr$1 = "ℨ";
var ZHcy$1 = "Ж";
var zhcy$1 = "ж";
var zigrarr$1 = "⇝";
var zopf$1 = "𝕫";
var Zopf$1 = "ℤ";
var Zscr$1 = "𝒵";
var zscr$1 = "𝓏";
var zwj$1 = "‍";
var zwnj$1 = "‌";
var entities$2 = {
	Aacute: Aacute$2,
	aacute: aacute$2,
	Abreve: Abreve$1,
	abreve: abreve$1,
	ac: ac$1,
	acd: acd$1,
	acE: acE$1,
	Acirc: Acirc$2,
	acirc: acirc$2,
	acute: acute$2,
	Acy: Acy$1,
	acy: acy$1,
	AElig: AElig$2,
	aelig: aelig$2,
	af: af$1,
	Afr: Afr$1,
	afr: afr$1,
	Agrave: Agrave$2,
	agrave: agrave$2,
	alefsym: alefsym$1,
	aleph: aleph$1,
	Alpha: Alpha$1,
	alpha: alpha$1,
	Amacr: Amacr$1,
	amacr: amacr$1,
	amalg: amalg$1,
	amp: amp$3,
	AMP: AMP$2,
	andand: andand$1,
	And: And$1,
	and: and$1,
	andd: andd$1,
	andslope: andslope$1,
	andv: andv$1,
	ang: ang$1,
	ange: ange$1,
	angle: angle$1,
	angmsdaa: angmsdaa$1,
	angmsdab: angmsdab$1,
	angmsdac: angmsdac$1,
	angmsdad: angmsdad$1,
	angmsdae: angmsdae$1,
	angmsdaf: angmsdaf$1,
	angmsdag: angmsdag$1,
	angmsdah: angmsdah$1,
	angmsd: angmsd$1,
	angrt: angrt$1,
	angrtvb: angrtvb$1,
	angrtvbd: angrtvbd$1,
	angsph: angsph$1,
	angst: angst$1,
	angzarr: angzarr$1,
	Aogon: Aogon$1,
	aogon: aogon$1,
	Aopf: Aopf$1,
	aopf: aopf$1,
	apacir: apacir$1,
	ap: ap$1,
	apE: apE$1,
	ape: ape$1,
	apid: apid$1,
	apos: apos$2,
	ApplyFunction: ApplyFunction$1,
	approx: approx$1,
	approxeq: approxeq$1,
	Aring: Aring$2,
	aring: aring$2,
	Ascr: Ascr$1,
	ascr: ascr$1,
	Assign: Assign$1,
	ast: ast$1,
	asymp: asymp$1,
	asympeq: asympeq$1,
	Atilde: Atilde$2,
	atilde: atilde$2,
	Auml: Auml$2,
	auml: auml$2,
	awconint: awconint$1,
	awint: awint$1,
	backcong: backcong$1,
	backepsilon: backepsilon$1,
	backprime: backprime$1,
	backsim: backsim$1,
	backsimeq: backsimeq$1,
	Backslash: Backslash$1,
	Barv: Barv$1,
	barvee: barvee$1,
	barwed: barwed$1,
	Barwed: Barwed$1,
	barwedge: barwedge$1,
	bbrk: bbrk$1,
	bbrktbrk: bbrktbrk$1,
	bcong: bcong$1,
	Bcy: Bcy$1,
	bcy: bcy$1,
	bdquo: bdquo$1,
	becaus: becaus$1,
	because: because$1,
	Because: Because$1,
	bemptyv: bemptyv$1,
	bepsi: bepsi$1,
	bernou: bernou$1,
	Bernoullis: Bernoullis$1,
	Beta: Beta$1,
	beta: beta$1,
	beth: beth$1,
	between: between$1,
	Bfr: Bfr$1,
	bfr: bfr$1,
	bigcap: bigcap$1,
	bigcirc: bigcirc$1,
	bigcup: bigcup$1,
	bigodot: bigodot$1,
	bigoplus: bigoplus$1,
	bigotimes: bigotimes$1,
	bigsqcup: bigsqcup$1,
	bigstar: bigstar$1,
	bigtriangledown: bigtriangledown$1,
	bigtriangleup: bigtriangleup$1,
	biguplus: biguplus$1,
	bigvee: bigvee$1,
	bigwedge: bigwedge$1,
	bkarow: bkarow$1,
	blacklozenge: blacklozenge$1,
	blacksquare: blacksquare$1,
	blacktriangle: blacktriangle$1,
	blacktriangledown: blacktriangledown$1,
	blacktriangleleft: blacktriangleleft$1,
	blacktriangleright: blacktriangleright$1,
	blank: blank$1,
	blk12: blk12$1,
	blk14: blk14$1,
	blk34: blk34$1,
	block: block$1,
	bne: bne$1,
	bnequiv: bnequiv$1,
	bNot: bNot$1,
	bnot: bnot$1,
	Bopf: Bopf$1,
	bopf: bopf$1,
	bot: bot$1,
	bottom: bottom$1,
	bowtie: bowtie$1,
	boxbox: boxbox$1,
	boxdl: boxdl$1,
	boxdL: boxdL$1,
	boxDl: boxDl$1,
	boxDL: boxDL$1,
	boxdr: boxdr$1,
	boxdR: boxdR$1,
	boxDr: boxDr$1,
	boxDR: boxDR$1,
	boxh: boxh$1,
	boxH: boxH$1,
	boxhd: boxhd$1,
	boxHd: boxHd$1,
	boxhD: boxhD$1,
	boxHD: boxHD$1,
	boxhu: boxhu$1,
	boxHu: boxHu$1,
	boxhU: boxhU$1,
	boxHU: boxHU$1,
	boxminus: boxminus$1,
	boxplus: boxplus$1,
	boxtimes: boxtimes$1,
	boxul: boxul$1,
	boxuL: boxuL$1,
	boxUl: boxUl$1,
	boxUL: boxUL$1,
	boxur: boxur$1,
	boxuR: boxuR$1,
	boxUr: boxUr$1,
	boxUR: boxUR$1,
	boxv: boxv$1,
	boxV: boxV$1,
	boxvh: boxvh$1,
	boxvH: boxvH$1,
	boxVh: boxVh$1,
	boxVH: boxVH$1,
	boxvl: boxvl$1,
	boxvL: boxvL$1,
	boxVl: boxVl$1,
	boxVL: boxVL$1,
	boxvr: boxvr$1,
	boxvR: boxvR$1,
	boxVr: boxVr$1,
	boxVR: boxVR$1,
	bprime: bprime$1,
	breve: breve$1,
	Breve: Breve$1,
	brvbar: brvbar$2,
	bscr: bscr$1,
	Bscr: Bscr$1,
	bsemi: bsemi$1,
	bsim: bsim$1,
	bsime: bsime$1,
	bsolb: bsolb$1,
	bsol: bsol$1,
	bsolhsub: bsolhsub$1,
	bull: bull$1,
	bullet: bullet$1,
	bump: bump$1,
	bumpE: bumpE$1,
	bumpe: bumpe$1,
	Bumpeq: Bumpeq$1,
	bumpeq: bumpeq$1,
	Cacute: Cacute$1,
	cacute: cacute$1,
	capand: capand$1,
	capbrcup: capbrcup$1,
	capcap: capcap$1,
	cap: cap$1,
	Cap: Cap$1,
	capcup: capcup$1,
	capdot: capdot$1,
	CapitalDifferentialD: CapitalDifferentialD$1,
	caps: caps$1,
	caret: caret$1,
	caron: caron$1,
	Cayleys: Cayleys$1,
	ccaps: ccaps$1,
	Ccaron: Ccaron$1,
	ccaron: ccaron$1,
	Ccedil: Ccedil$2,
	ccedil: ccedil$2,
	Ccirc: Ccirc$1,
	ccirc: ccirc$1,
	Cconint: Cconint$1,
	ccups: ccups$1,
	ccupssm: ccupssm$1,
	Cdot: Cdot$1,
	cdot: cdot$1,
	cedil: cedil$2,
	Cedilla: Cedilla$1,
	cemptyv: cemptyv$1,
	cent: cent$2,
	centerdot: centerdot$1,
	CenterDot: CenterDot$1,
	cfr: cfr$1,
	Cfr: Cfr$1,
	CHcy: CHcy$1,
	chcy: chcy$1,
	check: check$1,
	checkmark: checkmark$1,
	Chi: Chi$1,
	chi: chi$1,
	circ: circ$1,
	circeq: circeq$1,
	circlearrowleft: circlearrowleft$1,
	circlearrowright: circlearrowright$1,
	circledast: circledast$1,
	circledcirc: circledcirc$1,
	circleddash: circleddash$1,
	CircleDot: CircleDot$1,
	circledR: circledR$1,
	circledS: circledS$1,
	CircleMinus: CircleMinus$1,
	CirclePlus: CirclePlus$1,
	CircleTimes: CircleTimes$1,
	cir: cir$1,
	cirE: cirE$1,
	cire: cire$1,
	cirfnint: cirfnint$1,
	cirmid: cirmid$1,
	cirscir: cirscir$1,
	ClockwiseContourIntegral: ClockwiseContourIntegral$1,
	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote$1,
	CloseCurlyQuote: CloseCurlyQuote$1,
	clubs: clubs$1,
	clubsuit: clubsuit$1,
	colon: colon$1,
	Colon: Colon$1,
	Colone: Colone$1,
	colone: colone$1,
	coloneq: coloneq$1,
	comma: comma$1,
	commat: commat$1,
	comp: comp$1,
	compfn: compfn$1,
	complement: complement$1,
	complexes: complexes$1,
	cong: cong$1,
	congdot: congdot$1,
	Congruent: Congruent$1,
	conint: conint$1,
	Conint: Conint$1,
	ContourIntegral: ContourIntegral$1,
	copf: copf$1,
	Copf: Copf$1,
	coprod: coprod$1,
	Coproduct: Coproduct$1,
	copy: copy$2,
	COPY: COPY$2,
	copysr: copysr$1,
	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral$1,
	crarr: crarr$1,
	cross: cross$1,
	Cross: Cross$1,
	Cscr: Cscr$1,
	cscr: cscr$1,
	csub: csub$1,
	csube: csube$1,
	csup: csup$1,
	csupe: csupe$1,
	ctdot: ctdot$1,
	cudarrl: cudarrl$1,
	cudarrr: cudarrr$1,
	cuepr: cuepr$1,
	cuesc: cuesc$1,
	cularr: cularr$1,
	cularrp: cularrp$1,
	cupbrcap: cupbrcap$1,
	cupcap: cupcap$1,
	CupCap: CupCap$1,
	cup: cup$1,
	Cup: Cup$1,
	cupcup: cupcup$1,
	cupdot: cupdot$1,
	cupor: cupor$1,
	cups: cups$1,
	curarr: curarr$1,
	curarrm: curarrm$1,
	curlyeqprec: curlyeqprec$1,
	curlyeqsucc: curlyeqsucc$1,
	curlyvee: curlyvee$1,
	curlywedge: curlywedge$1,
	curren: curren$2,
	curvearrowleft: curvearrowleft$1,
	curvearrowright: curvearrowright$1,
	cuvee: cuvee$1,
	cuwed: cuwed$1,
	cwconint: cwconint$1,
	cwint: cwint$1,
	cylcty: cylcty$1,
	dagger: dagger$1,
	Dagger: Dagger$1,
	daleth: daleth$1,
	darr: darr$1,
	Darr: Darr$1,
	dArr: dArr$1,
	dash: dash$1,
	Dashv: Dashv$1,
	dashv: dashv$1,
	dbkarow: dbkarow$1,
	dblac: dblac$1,
	Dcaron: Dcaron$1,
	dcaron: dcaron$1,
	Dcy: Dcy$1,
	dcy: dcy$1,
	ddagger: ddagger$1,
	ddarr: ddarr$1,
	DD: DD$1,
	dd: dd$1,
	DDotrahd: DDotrahd$1,
	ddotseq: ddotseq$1,
	deg: deg$2,
	Del: Del$1,
	Delta: Delta$1,
	delta: delta$1,
	demptyv: demptyv$1,
	dfisht: dfisht$1,
	Dfr: Dfr$1,
	dfr: dfr$1,
	dHar: dHar$1,
	dharl: dharl$1,
	dharr: dharr$1,
	DiacriticalAcute: DiacriticalAcute$1,
	DiacriticalDot: DiacriticalDot$1,
	DiacriticalDoubleAcute: DiacriticalDoubleAcute$1,
	DiacriticalGrave: DiacriticalGrave$1,
	DiacriticalTilde: DiacriticalTilde$1,
	diam: diam$1,
	diamond: diamond$1,
	Diamond: Diamond$1,
	diamondsuit: diamondsuit$1,
	diams: diams$1,
	die: die$1,
	DifferentialD: DifferentialD$1,
	digamma: digamma$1,
	disin: disin$1,
	div: div$1,
	divide: divide$2,
	divideontimes: divideontimes$1,
	divonx: divonx$1,
	DJcy: DJcy$1,
	djcy: djcy$1,
	dlcorn: dlcorn$1,
	dlcrop: dlcrop$1,
	dollar: dollar$1,
	Dopf: Dopf$1,
	dopf: dopf$1,
	Dot: Dot$1,
	dot: dot$1,
	DotDot: DotDot$1,
	doteq: doteq$1,
	doteqdot: doteqdot$1,
	DotEqual: DotEqual$1,
	dotminus: dotminus$1,
	dotplus: dotplus$1,
	dotsquare: dotsquare$1,
	doublebarwedge: doublebarwedge$1,
	DoubleContourIntegral: DoubleContourIntegral$1,
	DoubleDot: DoubleDot$1,
	DoubleDownArrow: DoubleDownArrow$1,
	DoubleLeftArrow: DoubleLeftArrow$1,
	DoubleLeftRightArrow: DoubleLeftRightArrow$1,
	DoubleLeftTee: DoubleLeftTee$1,
	DoubleLongLeftArrow: DoubleLongLeftArrow$1,
	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow$1,
	DoubleLongRightArrow: DoubleLongRightArrow$1,
	DoubleRightArrow: DoubleRightArrow$1,
	DoubleRightTee: DoubleRightTee$1,
	DoubleUpArrow: DoubleUpArrow$1,
	DoubleUpDownArrow: DoubleUpDownArrow$1,
	DoubleVerticalBar: DoubleVerticalBar$1,
	DownArrowBar: DownArrowBar$1,
	downarrow: downarrow$1,
	DownArrow: DownArrow$1,
	Downarrow: Downarrow$1,
	DownArrowUpArrow: DownArrowUpArrow$1,
	DownBreve: DownBreve$1,
	downdownarrows: downdownarrows$1,
	downharpoonleft: downharpoonleft$1,
	downharpoonright: downharpoonright$1,
	DownLeftRightVector: DownLeftRightVector$1,
	DownLeftTeeVector: DownLeftTeeVector$1,
	DownLeftVectorBar: DownLeftVectorBar$1,
	DownLeftVector: DownLeftVector$1,
	DownRightTeeVector: DownRightTeeVector$1,
	DownRightVectorBar: DownRightVectorBar$1,
	DownRightVector: DownRightVector$1,
	DownTeeArrow: DownTeeArrow$1,
	DownTee: DownTee$1,
	drbkarow: drbkarow$1,
	drcorn: drcorn$1,
	drcrop: drcrop$1,
	Dscr: Dscr$1,
	dscr: dscr$1,
	DScy: DScy$1,
	dscy: dscy$1,
	dsol: dsol$1,
	Dstrok: Dstrok$1,
	dstrok: dstrok$1,
	dtdot: dtdot$1,
	dtri: dtri$1,
	dtrif: dtrif$1,
	duarr: duarr$1,
	duhar: duhar$1,
	dwangle: dwangle$1,
	DZcy: DZcy$1,
	dzcy: dzcy$1,
	dzigrarr: dzigrarr$1,
	Eacute: Eacute$2,
	eacute: eacute$2,
	easter: easter$1,
	Ecaron: Ecaron$1,
	ecaron: ecaron$1,
	Ecirc: Ecirc$2,
	ecirc: ecirc$2,
	ecir: ecir$1,
	ecolon: ecolon$1,
	Ecy: Ecy$1,
	ecy: ecy$1,
	eDDot: eDDot$1,
	Edot: Edot$1,
	edot: edot$1,
	eDot: eDot$1,
	ee: ee$1,
	efDot: efDot$1,
	Efr: Efr$1,
	efr: efr$1,
	eg: eg$1,
	Egrave: Egrave$2,
	egrave: egrave$2,
	egs: egs$1,
	egsdot: egsdot$1,
	el: el$1,
	Element: Element$1,
	elinters: elinters$1,
	ell: ell$1,
	els: els$1,
	elsdot: elsdot$1,
	Emacr: Emacr$1,
	emacr: emacr$1,
	empty: empty$1,
	emptyset: emptyset$1,
	EmptySmallSquare: EmptySmallSquare$1,
	emptyv: emptyv$1,
	EmptyVerySmallSquare: EmptyVerySmallSquare$1,
	emsp13: emsp13$1,
	emsp14: emsp14$1,
	emsp: emsp$1,
	ENG: ENG$1,
	eng: eng$1,
	ensp: ensp$1,
	Eogon: Eogon$1,
	eogon: eogon$1,
	Eopf: Eopf$1,
	eopf: eopf$1,
	epar: epar$1,
	eparsl: eparsl$1,
	eplus: eplus$1,
	epsi: epsi$1,
	Epsilon: Epsilon$1,
	epsilon: epsilon$1,
	epsiv: epsiv$1,
	eqcirc: eqcirc$1,
	eqcolon: eqcolon$1,
	eqsim: eqsim$1,
	eqslantgtr: eqslantgtr$1,
	eqslantless: eqslantless$1,
	Equal: Equal$1,
	equals: equals$1,
	EqualTilde: EqualTilde$1,
	equest: equest$1,
	Equilibrium: Equilibrium$1,
	equiv: equiv$1,
	equivDD: equivDD$1,
	eqvparsl: eqvparsl$1,
	erarr: erarr$1,
	erDot: erDot$1,
	escr: escr$1,
	Escr: Escr$1,
	esdot: esdot$1,
	Esim: Esim$1,
	esim: esim$1,
	Eta: Eta$1,
	eta: eta$1,
	ETH: ETH$2,
	eth: eth$2,
	Euml: Euml$2,
	euml: euml$2,
	euro: euro$1,
	excl: excl$1,
	exist: exist$1,
	Exists: Exists$1,
	expectation: expectation$1,
	exponentiale: exponentiale$1,
	ExponentialE: ExponentialE$1,
	fallingdotseq: fallingdotseq$1,
	Fcy: Fcy$1,
	fcy: fcy$1,
	female: female$1,
	ffilig: ffilig$1,
	fflig: fflig$1,
	ffllig: ffllig$1,
	Ffr: Ffr$1,
	ffr: ffr$1,
	filig: filig$1,
	FilledSmallSquare: FilledSmallSquare$1,
	FilledVerySmallSquare: FilledVerySmallSquare$1,
	fjlig: fjlig$1,
	flat: flat$1,
	fllig: fllig$1,
	fltns: fltns$1,
	fnof: fnof$1,
	Fopf: Fopf$1,
	fopf: fopf$1,
	forall: forall$1,
	ForAll: ForAll$1,
	fork: fork$1,
	forkv: forkv$1,
	Fouriertrf: Fouriertrf$1,
	fpartint: fpartint$1,
	frac12: frac12$2,
	frac13: frac13$1,
	frac14: frac14$2,
	frac15: frac15$1,
	frac16: frac16$1,
	frac18: frac18$1,
	frac23: frac23$1,
	frac25: frac25$1,
	frac34: frac34$2,
	frac35: frac35$1,
	frac38: frac38$1,
	frac45: frac45$1,
	frac56: frac56$1,
	frac58: frac58$1,
	frac78: frac78$1,
	frasl: frasl$1,
	frown: frown$1,
	fscr: fscr$1,
	Fscr: Fscr$1,
	gacute: gacute$1,
	Gamma: Gamma$1,
	gamma: gamma$1,
	Gammad: Gammad$1,
	gammad: gammad$1,
	gap: gap$1,
	Gbreve: Gbreve$1,
	gbreve: gbreve$1,
	Gcedil: Gcedil$1,
	Gcirc: Gcirc$1,
	gcirc: gcirc$1,
	Gcy: Gcy$1,
	gcy: gcy$1,
	Gdot: Gdot$1,
	gdot: gdot$1,
	ge: ge$1,
	gE: gE$1,
	gEl: gEl$1,
	gel: gel$1,
	geq: geq$1,
	geqq: geqq$1,
	geqslant: geqslant$1,
	gescc: gescc$1,
	ges: ges$1,
	gesdot: gesdot$1,
	gesdoto: gesdoto$1,
	gesdotol: gesdotol$1,
	gesl: gesl$1,
	gesles: gesles$1,
	Gfr: Gfr$1,
	gfr: gfr$1,
	gg: gg$1,
	Gg: Gg$1,
	ggg: ggg$1,
	gimel: gimel$1,
	GJcy: GJcy$1,
	gjcy: gjcy$1,
	gla: gla$1,
	gl: gl$1,
	glE: glE$1,
	glj: glj$1,
	gnap: gnap$1,
	gnapprox: gnapprox$1,
	gne: gne$1,
	gnE: gnE$1,
	gneq: gneq$1,
	gneqq: gneqq$1,
	gnsim: gnsim$1,
	Gopf: Gopf$1,
	gopf: gopf$1,
	grave: grave$1,
	GreaterEqual: GreaterEqual$1,
	GreaterEqualLess: GreaterEqualLess$1,
	GreaterFullEqual: GreaterFullEqual$1,
	GreaterGreater: GreaterGreater$1,
	GreaterLess: GreaterLess$1,
	GreaterSlantEqual: GreaterSlantEqual$1,
	GreaterTilde: GreaterTilde$1,
	Gscr: Gscr$1,
	gscr: gscr$1,
	gsim: gsim$1,
	gsime: gsime$1,
	gsiml: gsiml$1,
	gtcc: gtcc$1,
	gtcir: gtcir$1,
	gt: gt$3,
	GT: GT$2,
	Gt: Gt$1,
	gtdot: gtdot$1,
	gtlPar: gtlPar$1,
	gtquest: gtquest$1,
	gtrapprox: gtrapprox$1,
	gtrarr: gtrarr$1,
	gtrdot: gtrdot$1,
	gtreqless: gtreqless$1,
	gtreqqless: gtreqqless$1,
	gtrless: gtrless$1,
	gtrsim: gtrsim$1,
	gvertneqq: gvertneqq$1,
	gvnE: gvnE$1,
	Hacek: Hacek$1,
	hairsp: hairsp$1,
	half: half$1,
	hamilt: hamilt$1,
	HARDcy: HARDcy$1,
	hardcy: hardcy$1,
	harrcir: harrcir$1,
	harr: harr$1,
	hArr: hArr$1,
	harrw: harrw$1,
	Hat: Hat$1,
	hbar: hbar$1,
	Hcirc: Hcirc$1,
	hcirc: hcirc$1,
	hearts: hearts$1,
	heartsuit: heartsuit$1,
	hellip: hellip$1,
	hercon: hercon$1,
	hfr: hfr$1,
	Hfr: Hfr$1,
	HilbertSpace: HilbertSpace$1,
	hksearow: hksearow$1,
	hkswarow: hkswarow$1,
	hoarr: hoarr$1,
	homtht: homtht$1,
	hookleftarrow: hookleftarrow$1,
	hookrightarrow: hookrightarrow$1,
	hopf: hopf$1,
	Hopf: Hopf$1,
	horbar: horbar$1,
	HorizontalLine: HorizontalLine$1,
	hscr: hscr$1,
	Hscr: Hscr$1,
	hslash: hslash$1,
	Hstrok: Hstrok$1,
	hstrok: hstrok$1,
	HumpDownHump: HumpDownHump$1,
	HumpEqual: HumpEqual$1,
	hybull: hybull$1,
	hyphen: hyphen$1,
	Iacute: Iacute$2,
	iacute: iacute$2,
	ic: ic$1,
	Icirc: Icirc$2,
	icirc: icirc$2,
	Icy: Icy$1,
	icy: icy$1,
	Idot: Idot$1,
	IEcy: IEcy$1,
	iecy: iecy$1,
	iexcl: iexcl$2,
	iff: iff$1,
	ifr: ifr$1,
	Ifr: Ifr$1,
	Igrave: Igrave$2,
	igrave: igrave$2,
	ii: ii$1,
	iiiint: iiiint$1,
	iiint: iiint$1,
	iinfin: iinfin$1,
	iiota: iiota$1,
	IJlig: IJlig$1,
	ijlig: ijlig$1,
	Imacr: Imacr$1,
	imacr: imacr$1,
	image: image$1,
	ImaginaryI: ImaginaryI$1,
	imagline: imagline$1,
	imagpart: imagpart$1,
	imath: imath$1,
	Im: Im$1,
	imof: imof$1,
	imped: imped$1,
	Implies: Implies$1,
	incare: incare$1,
	"in": "∈",
	infin: infin$1,
	infintie: infintie$1,
	inodot: inodot$1,
	intcal: intcal$1,
	int: int$1,
	Int: Int$1,
	integers: integers$1,
	Integral: Integral$1,
	intercal: intercal$1,
	Intersection: Intersection$1,
	intlarhk: intlarhk$1,
	intprod: intprod$1,
	InvisibleComma: InvisibleComma$1,
	InvisibleTimes: InvisibleTimes$1,
	IOcy: IOcy$1,
	iocy: iocy$1,
	Iogon: Iogon$1,
	iogon: iogon$1,
	Iopf: Iopf$1,
	iopf: iopf$1,
	Iota: Iota$1,
	iota: iota$1,
	iprod: iprod$1,
	iquest: iquest$2,
	iscr: iscr$1,
	Iscr: Iscr$1,
	isin: isin$1,
	isindot: isindot$1,
	isinE: isinE$1,
	isins: isins$1,
	isinsv: isinsv$1,
	isinv: isinv$1,
	it: it$1,
	Itilde: Itilde$1,
	itilde: itilde$1,
	Iukcy: Iukcy$1,
	iukcy: iukcy$1,
	Iuml: Iuml$2,
	iuml: iuml$2,
	Jcirc: Jcirc$1,
	jcirc: jcirc$1,
	Jcy: Jcy$1,
	jcy: jcy$1,
	Jfr: Jfr$1,
	jfr: jfr$1,
	jmath: jmath$1,
	Jopf: Jopf$1,
	jopf: jopf$1,
	Jscr: Jscr$1,
	jscr: jscr$1,
	Jsercy: Jsercy$1,
	jsercy: jsercy$1,
	Jukcy: Jukcy$1,
	jukcy: jukcy$1,
	Kappa: Kappa$1,
	kappa: kappa$1,
	kappav: kappav$1,
	Kcedil: Kcedil$1,
	kcedil: kcedil$1,
	Kcy: Kcy$1,
	kcy: kcy$1,
	Kfr: Kfr$1,
	kfr: kfr$1,
	kgreen: kgreen$1,
	KHcy: KHcy$1,
	khcy: khcy$1,
	KJcy: KJcy$1,
	kjcy: kjcy$1,
	Kopf: Kopf$1,
	kopf: kopf$1,
	Kscr: Kscr$1,
	kscr: kscr$1,
	lAarr: lAarr$1,
	Lacute: Lacute$1,
	lacute: lacute$1,
	laemptyv: laemptyv$1,
	lagran: lagran$1,
	Lambda: Lambda$1,
	lambda: lambda$1,
	lang: lang$1,
	Lang: Lang$1,
	langd: langd$1,
	langle: langle$1,
	lap: lap$1,
	Laplacetrf: Laplacetrf$1,
	laquo: laquo$2,
	larrb: larrb$1,
	larrbfs: larrbfs$1,
	larr: larr$1,
	Larr: Larr$1,
	lArr: lArr$1,
	larrfs: larrfs$1,
	larrhk: larrhk$1,
	larrlp: larrlp$1,
	larrpl: larrpl$1,
	larrsim: larrsim$1,
	larrtl: larrtl$1,
	latail: latail$1,
	lAtail: lAtail$1,
	lat: lat$1,
	late: late$1,
	lates: lates$1,
	lbarr: lbarr$1,
	lBarr: lBarr$1,
	lbbrk: lbbrk$1,
	lbrace: lbrace$1,
	lbrack: lbrack$1,
	lbrke: lbrke$1,
	lbrksld: lbrksld$1,
	lbrkslu: lbrkslu$1,
	Lcaron: Lcaron$1,
	lcaron: lcaron$1,
	Lcedil: Lcedil$1,
	lcedil: lcedil$1,
	lceil: lceil$1,
	lcub: lcub$1,
	Lcy: Lcy$1,
	lcy: lcy$1,
	ldca: ldca$1,
	ldquo: ldquo$1,
	ldquor: ldquor$1,
	ldrdhar: ldrdhar$1,
	ldrushar: ldrushar$1,
	ldsh: ldsh$1,
	le: le$1,
	lE: lE$1,
	LeftAngleBracket: LeftAngleBracket$1,
	LeftArrowBar: LeftArrowBar$1,
	leftarrow: leftarrow$1,
	LeftArrow: LeftArrow$1,
	Leftarrow: Leftarrow$1,
	LeftArrowRightArrow: LeftArrowRightArrow$1,
	leftarrowtail: leftarrowtail$1,
	LeftCeiling: LeftCeiling$1,
	LeftDoubleBracket: LeftDoubleBracket$1,
	LeftDownTeeVector: LeftDownTeeVector$1,
	LeftDownVectorBar: LeftDownVectorBar$1,
	LeftDownVector: LeftDownVector$1,
	LeftFloor: LeftFloor$1,
	leftharpoondown: leftharpoondown$1,
	leftharpoonup: leftharpoonup$1,
	leftleftarrows: leftleftarrows$1,
	leftrightarrow: leftrightarrow$1,
	LeftRightArrow: LeftRightArrow$1,
	Leftrightarrow: Leftrightarrow$1,
	leftrightarrows: leftrightarrows$1,
	leftrightharpoons: leftrightharpoons$1,
	leftrightsquigarrow: leftrightsquigarrow$1,
	LeftRightVector: LeftRightVector$1,
	LeftTeeArrow: LeftTeeArrow$1,
	LeftTee: LeftTee$1,
	LeftTeeVector: LeftTeeVector$1,
	leftthreetimes: leftthreetimes$1,
	LeftTriangleBar: LeftTriangleBar$1,
	LeftTriangle: LeftTriangle$1,
	LeftTriangleEqual: LeftTriangleEqual$1,
	LeftUpDownVector: LeftUpDownVector$1,
	LeftUpTeeVector: LeftUpTeeVector$1,
	LeftUpVectorBar: LeftUpVectorBar$1,
	LeftUpVector: LeftUpVector$1,
	LeftVectorBar: LeftVectorBar$1,
	LeftVector: LeftVector$1,
	lEg: lEg$1,
	leg: leg$1,
	leq: leq$1,
	leqq: leqq$1,
	leqslant: leqslant$1,
	lescc: lescc$1,
	les: les$1,
	lesdot: lesdot$1,
	lesdoto: lesdoto$1,
	lesdotor: lesdotor$1,
	lesg: lesg$1,
	lesges: lesges$1,
	lessapprox: lessapprox$1,
	lessdot: lessdot$1,
	lesseqgtr: lesseqgtr$1,
	lesseqqgtr: lesseqqgtr$1,
	LessEqualGreater: LessEqualGreater$1,
	LessFullEqual: LessFullEqual$1,
	LessGreater: LessGreater$1,
	lessgtr: lessgtr$1,
	LessLess: LessLess$1,
	lesssim: lesssim$1,
	LessSlantEqual: LessSlantEqual$1,
	LessTilde: LessTilde$1,
	lfisht: lfisht$1,
	lfloor: lfloor$1,
	Lfr: Lfr$1,
	lfr: lfr$1,
	lg: lg$1,
	lgE: lgE$1,
	lHar: lHar$1,
	lhard: lhard$1,
	lharu: lharu$1,
	lharul: lharul$1,
	lhblk: lhblk$1,
	LJcy: LJcy$1,
	ljcy: ljcy$1,
	llarr: llarr$1,
	ll: ll$1,
	Ll: Ll$1,
	llcorner: llcorner$1,
	Lleftarrow: Lleftarrow$1,
	llhard: llhard$1,
	lltri: lltri$1,
	Lmidot: Lmidot$1,
	lmidot: lmidot$1,
	lmoustache: lmoustache$1,
	lmoust: lmoust$1,
	lnap: lnap$1,
	lnapprox: lnapprox$1,
	lne: lne$1,
	lnE: lnE$1,
	lneq: lneq$1,
	lneqq: lneqq$1,
	lnsim: lnsim$1,
	loang: loang$1,
	loarr: loarr$1,
	lobrk: lobrk$1,
	longleftarrow: longleftarrow$1,
	LongLeftArrow: LongLeftArrow$1,
	Longleftarrow: Longleftarrow$1,
	longleftrightarrow: longleftrightarrow$1,
	LongLeftRightArrow: LongLeftRightArrow$1,
	Longleftrightarrow: Longleftrightarrow$1,
	longmapsto: longmapsto$1,
	longrightarrow: longrightarrow$1,
	LongRightArrow: LongRightArrow$1,
	Longrightarrow: Longrightarrow$1,
	looparrowleft: looparrowleft$1,
	looparrowright: looparrowright$1,
	lopar: lopar$1,
	Lopf: Lopf$1,
	lopf: lopf$1,
	loplus: loplus$1,
	lotimes: lotimes$1,
	lowast: lowast$1,
	lowbar: lowbar$1,
	LowerLeftArrow: LowerLeftArrow$1,
	LowerRightArrow: LowerRightArrow$1,
	loz: loz$1,
	lozenge: lozenge$1,
	lozf: lozf$1,
	lpar: lpar$1,
	lparlt: lparlt$1,
	lrarr: lrarr$1,
	lrcorner: lrcorner$1,
	lrhar: lrhar$1,
	lrhard: lrhard$1,
	lrm: lrm$1,
	lrtri: lrtri$1,
	lsaquo: lsaquo$1,
	lscr: lscr$1,
	Lscr: Lscr$1,
	lsh: lsh$1,
	Lsh: Lsh$1,
	lsim: lsim$1,
	lsime: lsime$1,
	lsimg: lsimg$1,
	lsqb: lsqb$1,
	lsquo: lsquo$1,
	lsquor: lsquor$1,
	Lstrok: Lstrok$1,
	lstrok: lstrok$1,
	ltcc: ltcc$1,
	ltcir: ltcir$1,
	lt: lt$3,
	LT: LT$2,
	Lt: Lt$1,
	ltdot: ltdot$1,
	lthree: lthree$1,
	ltimes: ltimes$1,
	ltlarr: ltlarr$1,
	ltquest: ltquest$1,
	ltri: ltri$1,
	ltrie: ltrie$1,
	ltrif: ltrif$1,
	ltrPar: ltrPar$1,
	lurdshar: lurdshar$1,
	luruhar: luruhar$1,
	lvertneqq: lvertneqq$1,
	lvnE: lvnE$1,
	macr: macr$2,
	male: male$1,
	malt: malt$1,
	maltese: maltese$1,
	"Map": "⤅",
	map: map$1,
	mapsto: mapsto$1,
	mapstodown: mapstodown$1,
	mapstoleft: mapstoleft$1,
	mapstoup: mapstoup$1,
	marker: marker$1,
	mcomma: mcomma$1,
	Mcy: Mcy$1,
	mcy: mcy$1,
	mdash: mdash$1,
	mDDot: mDDot$1,
	measuredangle: measuredangle$1,
	MediumSpace: MediumSpace$1,
	Mellintrf: Mellintrf$1,
	Mfr: Mfr$1,
	mfr: mfr$1,
	mho: mho$1,
	micro: micro$2,
	midast: midast$1,
	midcir: midcir$1,
	mid: mid$1,
	middot: middot$2,
	minusb: minusb$1,
	minus: minus$1,
	minusd: minusd$1,
	minusdu: minusdu$1,
	MinusPlus: MinusPlus$1,
	mlcp: mlcp$1,
	mldr: mldr$1,
	mnplus: mnplus$1,
	models: models$1,
	Mopf: Mopf$1,
	mopf: mopf$1,
	mp: mp$1,
	mscr: mscr$1,
	Mscr: Mscr$1,
	mstpos: mstpos$1,
	Mu: Mu$1,
	mu: mu$1,
	multimap: multimap$1,
	mumap: mumap$1,
	nabla: nabla$1,
	Nacute: Nacute$1,
	nacute: nacute$1,
	nang: nang$1,
	nap: nap$1,
	napE: napE$1,
	napid: napid$1,
	napos: napos$1,
	napprox: napprox$1,
	natural: natural$1,
	naturals: naturals$1,
	natur: natur$1,
	nbsp: nbsp$2,
	nbump: nbump$1,
	nbumpe: nbumpe$1,
	ncap: ncap$1,
	Ncaron: Ncaron$1,
	ncaron: ncaron$1,
	Ncedil: Ncedil$1,
	ncedil: ncedil$1,
	ncong: ncong$1,
	ncongdot: ncongdot$1,
	ncup: ncup$1,
	Ncy: Ncy$1,
	ncy: ncy$1,
	ndash: ndash$1,
	nearhk: nearhk$1,
	nearr: nearr$1,
	neArr: neArr$1,
	nearrow: nearrow$1,
	ne: ne$1,
	nedot: nedot$1,
	NegativeMediumSpace: NegativeMediumSpace$1,
	NegativeThickSpace: NegativeThickSpace$1,
	NegativeThinSpace: NegativeThinSpace$1,
	NegativeVeryThinSpace: NegativeVeryThinSpace$1,
	nequiv: nequiv$1,
	nesear: nesear$1,
	nesim: nesim$1,
	NestedGreaterGreater: NestedGreaterGreater$1,
	NestedLessLess: NestedLessLess$1,
	NewLine: NewLine$1,
	nexist: nexist$1,
	nexists: nexists$1,
	Nfr: Nfr$1,
	nfr: nfr$1,
	ngE: ngE$1,
	nge: nge$1,
	ngeq: ngeq$1,
	ngeqq: ngeqq$1,
	ngeqslant: ngeqslant$1,
	nges: nges$1,
	nGg: nGg$1,
	ngsim: ngsim$1,
	nGt: nGt$1,
	ngt: ngt$1,
	ngtr: ngtr$1,
	nGtv: nGtv$1,
	nharr: nharr$1,
	nhArr: nhArr$1,
	nhpar: nhpar$1,
	ni: ni$1,
	nis: nis$1,
	nisd: nisd$1,
	niv: niv$1,
	NJcy: NJcy$1,
	njcy: njcy$1,
	nlarr: nlarr$1,
	nlArr: nlArr$1,
	nldr: nldr$1,
	nlE: nlE$1,
	nle: nle$1,
	nleftarrow: nleftarrow$1,
	nLeftarrow: nLeftarrow$1,
	nleftrightarrow: nleftrightarrow$1,
	nLeftrightarrow: nLeftrightarrow$1,
	nleq: nleq$1,
	nleqq: nleqq$1,
	nleqslant: nleqslant$1,
	nles: nles$1,
	nless: nless$1,
	nLl: nLl$1,
	nlsim: nlsim$1,
	nLt: nLt$1,
	nlt: nlt$1,
	nltri: nltri$1,
	nltrie: nltrie$1,
	nLtv: nLtv$1,
	nmid: nmid$1,
	NoBreak: NoBreak$1,
	NonBreakingSpace: NonBreakingSpace$1,
	nopf: nopf$1,
	Nopf: Nopf$1,
	Not: Not$1,
	not: not$2,
	NotCongruent: NotCongruent$1,
	NotCupCap: NotCupCap$1,
	NotDoubleVerticalBar: NotDoubleVerticalBar$1,
	NotElement: NotElement$1,
	NotEqual: NotEqual$1,
	NotEqualTilde: NotEqualTilde$1,
	NotExists: NotExists$1,
	NotGreater: NotGreater$1,
	NotGreaterEqual: NotGreaterEqual$1,
	NotGreaterFullEqual: NotGreaterFullEqual$1,
	NotGreaterGreater: NotGreaterGreater$1,
	NotGreaterLess: NotGreaterLess$1,
	NotGreaterSlantEqual: NotGreaterSlantEqual$1,
	NotGreaterTilde: NotGreaterTilde$1,
	NotHumpDownHump: NotHumpDownHump$1,
	NotHumpEqual: NotHumpEqual$1,
	notin: notin$1,
	notindot: notindot$1,
	notinE: notinE$1,
	notinva: notinva$1,
	notinvb: notinvb$1,
	notinvc: notinvc$1,
	NotLeftTriangleBar: NotLeftTriangleBar$1,
	NotLeftTriangle: NotLeftTriangle$1,
	NotLeftTriangleEqual: NotLeftTriangleEqual$1,
	NotLess: NotLess$1,
	NotLessEqual: NotLessEqual$1,
	NotLessGreater: NotLessGreater$1,
	NotLessLess: NotLessLess$1,
	NotLessSlantEqual: NotLessSlantEqual$1,
	NotLessTilde: NotLessTilde$1,
	NotNestedGreaterGreater: NotNestedGreaterGreater$1,
	NotNestedLessLess: NotNestedLessLess$1,
	notni: notni$1,
	notniva: notniva$1,
	notnivb: notnivb$1,
	notnivc: notnivc$1,
	NotPrecedes: NotPrecedes$1,
	NotPrecedesEqual: NotPrecedesEqual$1,
	NotPrecedesSlantEqual: NotPrecedesSlantEqual$1,
	NotReverseElement: NotReverseElement$1,
	NotRightTriangleBar: NotRightTriangleBar$1,
	NotRightTriangle: NotRightTriangle$1,
	NotRightTriangleEqual: NotRightTriangleEqual$1,
	NotSquareSubset: NotSquareSubset$1,
	NotSquareSubsetEqual: NotSquareSubsetEqual$1,
	NotSquareSuperset: NotSquareSuperset$1,
	NotSquareSupersetEqual: NotSquareSupersetEqual$1,
	NotSubset: NotSubset$1,
	NotSubsetEqual: NotSubsetEqual$1,
	NotSucceeds: NotSucceeds$1,
	NotSucceedsEqual: NotSucceedsEqual$1,
	NotSucceedsSlantEqual: NotSucceedsSlantEqual$1,
	NotSucceedsTilde: NotSucceedsTilde$1,
	NotSuperset: NotSuperset$1,
	NotSupersetEqual: NotSupersetEqual$1,
	NotTilde: NotTilde$1,
	NotTildeEqual: NotTildeEqual$1,
	NotTildeFullEqual: NotTildeFullEqual$1,
	NotTildeTilde: NotTildeTilde$1,
	NotVerticalBar: NotVerticalBar$1,
	nparallel: nparallel$1,
	npar: npar$1,
	nparsl: nparsl$1,
	npart: npart$1,
	npolint: npolint$1,
	npr: npr$1,
	nprcue: nprcue$1,
	nprec: nprec$1,
	npreceq: npreceq$1,
	npre: npre$1,
	nrarrc: nrarrc$1,
	nrarr: nrarr$1,
	nrArr: nrArr$1,
	nrarrw: nrarrw$1,
	nrightarrow: nrightarrow$1,
	nRightarrow: nRightarrow$1,
	nrtri: nrtri$1,
	nrtrie: nrtrie$1,
	nsc: nsc$1,
	nsccue: nsccue$1,
	nsce: nsce$1,
	Nscr: Nscr$1,
	nscr: nscr$1,
	nshortmid: nshortmid$1,
	nshortparallel: nshortparallel$1,
	nsim: nsim$1,
	nsime: nsime$1,
	nsimeq: nsimeq$1,
	nsmid: nsmid$1,
	nspar: nspar$1,
	nsqsube: nsqsube$1,
	nsqsupe: nsqsupe$1,
	nsub: nsub$1,
	nsubE: nsubE$1,
	nsube: nsube$1,
	nsubset: nsubset$1,
	nsubseteq: nsubseteq$1,
	nsubseteqq: nsubseteqq$1,
	nsucc: nsucc$1,
	nsucceq: nsucceq$1,
	nsup: nsup$1,
	nsupE: nsupE$1,
	nsupe: nsupe$1,
	nsupset: nsupset$1,
	nsupseteq: nsupseteq$1,
	nsupseteqq: nsupseteqq$1,
	ntgl: ntgl$1,
	Ntilde: Ntilde$2,
	ntilde: ntilde$2,
	ntlg: ntlg$1,
	ntriangleleft: ntriangleleft$1,
	ntrianglelefteq: ntrianglelefteq$1,
	ntriangleright: ntriangleright$1,
	ntrianglerighteq: ntrianglerighteq$1,
	Nu: Nu$1,
	nu: nu$1,
	num: num$1,
	numero: numero$1,
	numsp: numsp$1,
	nvap: nvap$1,
	nvdash: nvdash$1,
	nvDash: nvDash$1,
	nVdash: nVdash$1,
	nVDash: nVDash$1,
	nvge: nvge$1,
	nvgt: nvgt$1,
	nvHarr: nvHarr$1,
	nvinfin: nvinfin$1,
	nvlArr: nvlArr$1,
	nvle: nvle$1,
	nvlt: nvlt$1,
	nvltrie: nvltrie$1,
	nvrArr: nvrArr$1,
	nvrtrie: nvrtrie$1,
	nvsim: nvsim$1,
	nwarhk: nwarhk$1,
	nwarr: nwarr$1,
	nwArr: nwArr$1,
	nwarrow: nwarrow$1,
	nwnear: nwnear$1,
	Oacute: Oacute$2,
	oacute: oacute$2,
	oast: oast$1,
	Ocirc: Ocirc$2,
	ocirc: ocirc$2,
	ocir: ocir$1,
	Ocy: Ocy$1,
	ocy: ocy$1,
	odash: odash$1,
	Odblac: Odblac$1,
	odblac: odblac$1,
	odiv: odiv$1,
	odot: odot$1,
	odsold: odsold$1,
	OElig: OElig$1,
	oelig: oelig$1,
	ofcir: ofcir$1,
	Ofr: Ofr$1,
	ofr: ofr$1,
	ogon: ogon$1,
	Ograve: Ograve$2,
	ograve: ograve$2,
	ogt: ogt$1,
	ohbar: ohbar$1,
	ohm: ohm$1,
	oint: oint$1,
	olarr: olarr$1,
	olcir: olcir$1,
	olcross: olcross$1,
	oline: oline$1,
	olt: olt$1,
	Omacr: Omacr$1,
	omacr: omacr$1,
	Omega: Omega$1,
	omega: omega$1,
	Omicron: Omicron$1,
	omicron: omicron$1,
	omid: omid$1,
	ominus: ominus$1,
	Oopf: Oopf$1,
	oopf: oopf$1,
	opar: opar$1,
	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote$1,
	OpenCurlyQuote: OpenCurlyQuote$1,
	operp: operp$1,
	oplus: oplus$1,
	orarr: orarr$1,
	Or: Or$1,
	or: or$1,
	ord: ord$1,
	order: order$1,
	orderof: orderof$1,
	ordf: ordf$2,
	ordm: ordm$2,
	origof: origof$1,
	oror: oror$1,
	orslope: orslope$1,
	orv: orv$1,
	oS: oS$1,
	Oscr: Oscr$1,
	oscr: oscr$1,
	Oslash: Oslash$2,
	oslash: oslash$2,
	osol: osol$1,
	Otilde: Otilde$2,
	otilde: otilde$2,
	otimesas: otimesas$1,
	Otimes: Otimes$1,
	otimes: otimes$1,
	Ouml: Ouml$2,
	ouml: ouml$2,
	ovbar: ovbar$1,
	OverBar: OverBar$1,
	OverBrace: OverBrace$1,
	OverBracket: OverBracket$1,
	OverParenthesis: OverParenthesis$1,
	para: para$2,
	parallel: parallel$1,
	par: par$1,
	parsim: parsim$1,
	parsl: parsl$1,
	part: part$1,
	PartialD: PartialD$1,
	Pcy: Pcy$1,
	pcy: pcy$1,
	percnt: percnt$1,
	period: period$1,
	permil: permil$1,
	perp: perp$1,
	pertenk: pertenk$1,
	Pfr: Pfr$1,
	pfr: pfr$1,
	Phi: Phi$1,
	phi: phi$1,
	phiv: phiv$1,
	phmmat: phmmat$1,
	phone: phone$1,
	Pi: Pi$1,
	pi: pi$1,
	pitchfork: pitchfork$1,
	piv: piv$1,
	planck: planck$1,
	planckh: planckh$1,
	plankv: plankv$1,
	plusacir: plusacir$1,
	plusb: plusb$1,
	pluscir: pluscir$1,
	plus: plus$1,
	plusdo: plusdo$1,
	plusdu: plusdu$1,
	pluse: pluse$1,
	PlusMinus: PlusMinus$1,
	plusmn: plusmn$2,
	plussim: plussim$1,
	plustwo: plustwo$1,
	pm: pm$1,
	Poincareplane: Poincareplane$1,
	pointint: pointint$1,
	popf: popf$1,
	Popf: Popf$1,
	pound: pound$2,
	prap: prap$1,
	Pr: Pr$1,
	pr: pr$1,
	prcue: prcue$1,
	precapprox: precapprox$1,
	prec: prec$1,
	preccurlyeq: preccurlyeq$1,
	Precedes: Precedes$1,
	PrecedesEqual: PrecedesEqual$1,
	PrecedesSlantEqual: PrecedesSlantEqual$1,
	PrecedesTilde: PrecedesTilde$1,
	preceq: preceq$1,
	precnapprox: precnapprox$1,
	precneqq: precneqq$1,
	precnsim: precnsim$1,
	pre: pre$1,
	prE: prE$1,
	precsim: precsim$1,
	prime: prime$1,
	Prime: Prime$1,
	primes: primes$1,
	prnap: prnap$1,
	prnE: prnE$1,
	prnsim: prnsim$1,
	prod: prod$1,
	Product: Product$1,
	profalar: profalar$1,
	profline: profline$1,
	profsurf: profsurf$1,
	prop: prop$1,
	Proportional: Proportional$1,
	Proportion: Proportion$1,
	propto: propto$1,
	prsim: prsim$1,
	prurel: prurel$1,
	Pscr: Pscr$1,
	pscr: pscr$1,
	Psi: Psi$1,
	psi: psi$1,
	puncsp: puncsp$1,
	Qfr: Qfr$1,
	qfr: qfr$1,
	qint: qint$1,
	qopf: qopf$1,
	Qopf: Qopf$1,
	qprime: qprime$1,
	Qscr: Qscr$1,
	qscr: qscr$1,
	quaternions: quaternions$1,
	quatint: quatint$1,
	quest: quest$1,
	questeq: questeq$1,
	quot: quot$3,
	QUOT: QUOT$2,
	rAarr: rAarr$1,
	race: race$1,
	Racute: Racute$1,
	racute: racute$1,
	radic: radic$1,
	raemptyv: raemptyv$1,
	rang: rang$1,
	Rang: Rang$1,
	rangd: rangd$1,
	range: range$1,
	rangle: rangle$1,
	raquo: raquo$2,
	rarrap: rarrap$1,
	rarrb: rarrb$1,
	rarrbfs: rarrbfs$1,
	rarrc: rarrc$1,
	rarr: rarr$1,
	Rarr: Rarr$1,
	rArr: rArr$1,
	rarrfs: rarrfs$1,
	rarrhk: rarrhk$1,
	rarrlp: rarrlp$1,
	rarrpl: rarrpl$1,
	rarrsim: rarrsim$1,
	Rarrtl: Rarrtl$1,
	rarrtl: rarrtl$1,
	rarrw: rarrw$1,
	ratail: ratail$1,
	rAtail: rAtail$1,
	ratio: ratio$1,
	rationals: rationals$1,
	rbarr: rbarr$1,
	rBarr: rBarr$1,
	RBarr: RBarr$1,
	rbbrk: rbbrk$1,
	rbrace: rbrace$1,
	rbrack: rbrack$1,
	rbrke: rbrke$1,
	rbrksld: rbrksld$1,
	rbrkslu: rbrkslu$1,
	Rcaron: Rcaron$1,
	rcaron: rcaron$1,
	Rcedil: Rcedil$1,
	rcedil: rcedil$1,
	rceil: rceil$1,
	rcub: rcub$1,
	Rcy: Rcy$1,
	rcy: rcy$1,
	rdca: rdca$1,
	rdldhar: rdldhar$1,
	rdquo: rdquo$1,
	rdquor: rdquor$1,
	rdsh: rdsh$1,
	real: real$1,
	realine: realine$1,
	realpart: realpart$1,
	reals: reals$1,
	Re: Re$1,
	rect: rect$1,
	reg: reg$2,
	REG: REG$2,
	ReverseElement: ReverseElement$1,
	ReverseEquilibrium: ReverseEquilibrium$1,
	ReverseUpEquilibrium: ReverseUpEquilibrium$1,
	rfisht: rfisht$1,
	rfloor: rfloor$1,
	rfr: rfr$1,
	Rfr: Rfr$1,
	rHar: rHar$1,
	rhard: rhard$1,
	rharu: rharu$1,
	rharul: rharul$1,
	Rho: Rho$1,
	rho: rho$1,
	rhov: rhov$1,
	RightAngleBracket: RightAngleBracket$1,
	RightArrowBar: RightArrowBar$1,
	rightarrow: rightarrow$1,
	RightArrow: RightArrow$1,
	Rightarrow: Rightarrow$1,
	RightArrowLeftArrow: RightArrowLeftArrow$1,
	rightarrowtail: rightarrowtail$1,
	RightCeiling: RightCeiling$1,
	RightDoubleBracket: RightDoubleBracket$1,
	RightDownTeeVector: RightDownTeeVector$1,
	RightDownVectorBar: RightDownVectorBar$1,
	RightDownVector: RightDownVector$1,
	RightFloor: RightFloor$1,
	rightharpoondown: rightharpoondown$1,
	rightharpoonup: rightharpoonup$1,
	rightleftarrows: rightleftarrows$1,
	rightleftharpoons: rightleftharpoons$1,
	rightrightarrows: rightrightarrows$1,
	rightsquigarrow: rightsquigarrow$1,
	RightTeeArrow: RightTeeArrow$1,
	RightTee: RightTee$1,
	RightTeeVector: RightTeeVector$1,
	rightthreetimes: rightthreetimes$1,
	RightTriangleBar: RightTriangleBar$1,
	RightTriangle: RightTriangle$1,
	RightTriangleEqual: RightTriangleEqual$1,
	RightUpDownVector: RightUpDownVector$1,
	RightUpTeeVector: RightUpTeeVector$1,
	RightUpVectorBar: RightUpVectorBar$1,
	RightUpVector: RightUpVector$1,
	RightVectorBar: RightVectorBar$1,
	RightVector: RightVector$1,
	ring: ring$1,
	risingdotseq: risingdotseq$1,
	rlarr: rlarr$1,
	rlhar: rlhar$1,
	rlm: rlm$1,
	rmoustache: rmoustache$1,
	rmoust: rmoust$1,
	rnmid: rnmid$1,
	roang: roang$1,
	roarr: roarr$1,
	robrk: robrk$1,
	ropar: ropar$1,
	ropf: ropf$1,
	Ropf: Ropf$1,
	roplus: roplus$1,
	rotimes: rotimes$1,
	RoundImplies: RoundImplies$1,
	rpar: rpar$1,
	rpargt: rpargt$1,
	rppolint: rppolint$1,
	rrarr: rrarr$1,
	Rrightarrow: Rrightarrow$1,
	rsaquo: rsaquo$1,
	rscr: rscr$1,
	Rscr: Rscr$1,
	rsh: rsh$1,
	Rsh: Rsh$1,
	rsqb: rsqb$1,
	rsquo: rsquo$1,
	rsquor: rsquor$1,
	rthree: rthree$1,
	rtimes: rtimes$1,
	rtri: rtri$1,
	rtrie: rtrie$1,
	rtrif: rtrif$1,
	rtriltri: rtriltri$1,
	RuleDelayed: RuleDelayed$1,
	ruluhar: ruluhar$1,
	rx: rx$1,
	Sacute: Sacute$1,
	sacute: sacute$1,
	sbquo: sbquo$1,
	scap: scap$1,
	Scaron: Scaron$1,
	scaron: scaron$1,
	Sc: Sc$1,
	sc: sc$1,
	sccue: sccue$1,
	sce: sce$1,
	scE: scE$1,
	Scedil: Scedil$1,
	scedil: scedil$1,
	Scirc: Scirc$1,
	scirc: scirc$1,
	scnap: scnap$1,
	scnE: scnE$1,
	scnsim: scnsim$1,
	scpolint: scpolint$1,
	scsim: scsim$1,
	Scy: Scy$1,
	scy: scy$1,
	sdotb: sdotb$1,
	sdot: sdot$1,
	sdote: sdote$1,
	searhk: searhk$1,
	searr: searr$1,
	seArr: seArr$1,
	searrow: searrow$1,
	sect: sect$2,
	semi: semi$1,
	seswar: seswar$1,
	setminus: setminus$1,
	setmn: setmn$1,
	sext: sext$1,
	Sfr: Sfr$1,
	sfr: sfr$1,
	sfrown: sfrown$1,
	sharp: sharp$1,
	SHCHcy: SHCHcy$1,
	shchcy: shchcy$1,
	SHcy: SHcy$1,
	shcy: shcy$1,
	ShortDownArrow: ShortDownArrow$1,
	ShortLeftArrow: ShortLeftArrow$1,
	shortmid: shortmid$1,
	shortparallel: shortparallel$1,
	ShortRightArrow: ShortRightArrow$1,
	ShortUpArrow: ShortUpArrow$1,
	shy: shy$2,
	Sigma: Sigma$1,
	sigma: sigma$1,
	sigmaf: sigmaf$1,
	sigmav: sigmav$1,
	sim: sim$1,
	simdot: simdot$1,
	sime: sime$1,
	simeq: simeq$1,
	simg: simg$1,
	simgE: simgE$1,
	siml: siml$1,
	simlE: simlE$1,
	simne: simne$1,
	simplus: simplus$1,
	simrarr: simrarr$1,
	slarr: slarr$1,
	SmallCircle: SmallCircle$1,
	smallsetminus: smallsetminus$1,
	smashp: smashp$1,
	smeparsl: smeparsl$1,
	smid: smid$1,
	smile: smile$1,
	smt: smt$1,
	smte: smte$1,
	smtes: smtes$1,
	SOFTcy: SOFTcy$1,
	softcy: softcy$1,
	solbar: solbar$1,
	solb: solb$1,
	sol: sol$1,
	Sopf: Sopf$1,
	sopf: sopf$1,
	spades: spades$1,
	spadesuit: spadesuit$1,
	spar: spar$1,
	sqcap: sqcap$1,
	sqcaps: sqcaps$1,
	sqcup: sqcup$1,
	sqcups: sqcups$1,
	Sqrt: Sqrt$1,
	sqsub: sqsub$1,
	sqsube: sqsube$1,
	sqsubset: sqsubset$1,
	sqsubseteq: sqsubseteq$1,
	sqsup: sqsup$1,
	sqsupe: sqsupe$1,
	sqsupset: sqsupset$1,
	sqsupseteq: sqsupseteq$1,
	square: square$1,
	Square: Square$1,
	SquareIntersection: SquareIntersection$1,
	SquareSubset: SquareSubset$1,
	SquareSubsetEqual: SquareSubsetEqual$1,
	SquareSuperset: SquareSuperset$1,
	SquareSupersetEqual: SquareSupersetEqual$1,
	SquareUnion: SquareUnion$1,
	squarf: squarf$1,
	squ: squ$1,
	squf: squf$1,
	srarr: srarr$1,
	Sscr: Sscr$1,
	sscr: sscr$1,
	ssetmn: ssetmn$1,
	ssmile: ssmile$1,
	sstarf: sstarf$1,
	Star: Star$1,
	star: star$1,
	starf: starf$1,
	straightepsilon: straightepsilon$1,
	straightphi: straightphi$1,
	strns: strns$1,
	sub: sub$1,
	Sub: Sub$1,
	subdot: subdot$1,
	subE: subE$1,
	sube: sube$1,
	subedot: subedot$1,
	submult: submult$1,
	subnE: subnE$1,
	subne: subne$1,
	subplus: subplus$1,
	subrarr: subrarr$1,
	subset: subset$1,
	Subset: Subset$1,
	subseteq: subseteq$1,
	subseteqq: subseteqq$1,
	SubsetEqual: SubsetEqual$1,
	subsetneq: subsetneq$1,
	subsetneqq: subsetneqq$1,
	subsim: subsim$1,
	subsub: subsub$1,
	subsup: subsup$1,
	succapprox: succapprox$1,
	succ: succ$1,
	succcurlyeq: succcurlyeq$1,
	Succeeds: Succeeds$1,
	SucceedsEqual: SucceedsEqual$1,
	SucceedsSlantEqual: SucceedsSlantEqual$1,
	SucceedsTilde: SucceedsTilde$1,
	succeq: succeq$1,
	succnapprox: succnapprox$1,
	succneqq: succneqq$1,
	succnsim: succnsim$1,
	succsim: succsim$1,
	SuchThat: SuchThat$1,
	sum: sum$1,
	Sum: Sum$1,
	sung: sung$1,
	sup1: sup1$2,
	sup2: sup2$2,
	sup3: sup3$2,
	sup: sup$1,
	Sup: Sup$1,
	supdot: supdot$1,
	supdsub: supdsub$1,
	supE: supE$1,
	supe: supe$1,
	supedot: supedot$1,
	Superset: Superset$1,
	SupersetEqual: SupersetEqual$1,
	suphsol: suphsol$1,
	suphsub: suphsub$1,
	suplarr: suplarr$1,
	supmult: supmult$1,
	supnE: supnE$1,
	supne: supne$1,
	supplus: supplus$1,
	supset: supset$1,
	Supset: Supset$1,
	supseteq: supseteq$1,
	supseteqq: supseteqq$1,
	supsetneq: supsetneq$1,
	supsetneqq: supsetneqq$1,
	supsim: supsim$1,
	supsub: supsub$1,
	supsup: supsup$1,
	swarhk: swarhk$1,
	swarr: swarr$1,
	swArr: swArr$1,
	swarrow: swarrow$1,
	swnwar: swnwar$1,
	szlig: szlig$2,
	Tab: Tab$1,
	target: target$1,
	Tau: Tau$1,
	tau: tau$1,
	tbrk: tbrk$1,
	Tcaron: Tcaron$1,
	tcaron: tcaron$1,
	Tcedil: Tcedil$1,
	tcedil: tcedil$1,
	Tcy: Tcy$1,
	tcy: tcy$1,
	tdot: tdot$1,
	telrec: telrec$1,
	Tfr: Tfr$1,
	tfr: tfr$1,
	there4: there4$1,
	therefore: therefore$1,
	Therefore: Therefore$1,
	Theta: Theta$1,
	theta: theta$1,
	thetasym: thetasym$1,
	thetav: thetav$1,
	thickapprox: thickapprox$1,
	thicksim: thicksim$1,
	ThickSpace: ThickSpace$1,
	ThinSpace: ThinSpace$1,
	thinsp: thinsp$1,
	thkap: thkap$1,
	thksim: thksim$1,
	THORN: THORN$2,
	thorn: thorn$2,
	tilde: tilde$1,
	Tilde: Tilde$1,
	TildeEqual: TildeEqual$1,
	TildeFullEqual: TildeFullEqual$1,
	TildeTilde: TildeTilde$1,
	timesbar: timesbar$1,
	timesb: timesb$1,
	times: times$2,
	timesd: timesd$1,
	tint: tint$1,
	toea: toea$1,
	topbot: topbot$1,
	topcir: topcir$1,
	top: top$1,
	Topf: Topf$1,
	topf: topf$1,
	topfork: topfork$1,
	tosa: tosa$1,
	tprime: tprime$1,
	trade: trade$1,
	TRADE: TRADE$1,
	triangle: triangle$1,
	triangledown: triangledown$1,
	triangleleft: triangleleft$1,
	trianglelefteq: trianglelefteq$1,
	triangleq: triangleq$1,
	triangleright: triangleright$1,
	trianglerighteq: trianglerighteq$1,
	tridot: tridot$1,
	trie: trie$1,
	triminus: triminus$1,
	TripleDot: TripleDot$1,
	triplus: triplus$1,
	trisb: trisb$1,
	tritime: tritime$1,
	trpezium: trpezium$1,
	Tscr: Tscr$1,
	tscr: tscr$1,
	TScy: TScy$1,
	tscy: tscy$1,
	TSHcy: TSHcy$1,
	tshcy: tshcy$1,
	Tstrok: Tstrok$1,
	tstrok: tstrok$1,
	twixt: twixt$1,
	twoheadleftarrow: twoheadleftarrow$1,
	twoheadrightarrow: twoheadrightarrow$1,
	Uacute: Uacute$2,
	uacute: uacute$2,
	uarr: uarr$1,
	Uarr: Uarr$1,
	uArr: uArr$1,
	Uarrocir: Uarrocir$1,
	Ubrcy: Ubrcy$1,
	ubrcy: ubrcy$1,
	Ubreve: Ubreve$1,
	ubreve: ubreve$1,
	Ucirc: Ucirc$2,
	ucirc: ucirc$2,
	Ucy: Ucy$1,
	ucy: ucy$1,
	udarr: udarr$1,
	Udblac: Udblac$1,
	udblac: udblac$1,
	udhar: udhar$1,
	ufisht: ufisht$1,
	Ufr: Ufr$1,
	ufr: ufr$1,
	Ugrave: Ugrave$2,
	ugrave: ugrave$2,
	uHar: uHar$1,
	uharl: uharl$1,
	uharr: uharr$1,
	uhblk: uhblk$1,
	ulcorn: ulcorn$1,
	ulcorner: ulcorner$1,
	ulcrop: ulcrop$1,
	ultri: ultri$1,
	Umacr: Umacr$1,
	umacr: umacr$1,
	uml: uml$2,
	UnderBar: UnderBar$1,
	UnderBrace: UnderBrace$1,
	UnderBracket: UnderBracket$1,
	UnderParenthesis: UnderParenthesis$1,
	Union: Union$1,
	UnionPlus: UnionPlus$1,
	Uogon: Uogon$1,
	uogon: uogon$1,
	Uopf: Uopf$1,
	uopf: uopf$1,
	UpArrowBar: UpArrowBar$1,
	uparrow: uparrow$1,
	UpArrow: UpArrow$1,
	Uparrow: Uparrow$1,
	UpArrowDownArrow: UpArrowDownArrow$1,
	updownarrow: updownarrow$1,
	UpDownArrow: UpDownArrow$1,
	Updownarrow: Updownarrow$1,
	UpEquilibrium: UpEquilibrium$1,
	upharpoonleft: upharpoonleft$1,
	upharpoonright: upharpoonright$1,
	uplus: uplus$1,
	UpperLeftArrow: UpperLeftArrow$1,
	UpperRightArrow: UpperRightArrow$1,
	upsi: upsi$1,
	Upsi: Upsi$1,
	upsih: upsih$1,
	Upsilon: Upsilon$1,
	upsilon: upsilon$1,
	UpTeeArrow: UpTeeArrow$1,
	UpTee: UpTee$1,
	upuparrows: upuparrows$1,
	urcorn: urcorn$1,
	urcorner: urcorner$1,
	urcrop: urcrop$1,
	Uring: Uring$1,
	uring: uring$1,
	urtri: urtri$1,
	Uscr: Uscr$1,
	uscr: uscr$1,
	utdot: utdot$1,
	Utilde: Utilde$1,
	utilde: utilde$1,
	utri: utri$1,
	utrif: utrif$1,
	uuarr: uuarr$1,
	Uuml: Uuml$2,
	uuml: uuml$2,
	uwangle: uwangle$1,
	vangrt: vangrt$1,
	varepsilon: varepsilon$1,
	varkappa: varkappa$1,
	varnothing: varnothing$1,
	varphi: varphi$1,
	varpi: varpi$1,
	varpropto: varpropto$1,
	varr: varr$1,
	vArr: vArr$1,
	varrho: varrho$1,
	varsigma: varsigma$1,
	varsubsetneq: varsubsetneq$1,
	varsubsetneqq: varsubsetneqq$1,
	varsupsetneq: varsupsetneq$1,
	varsupsetneqq: varsupsetneqq$1,
	vartheta: vartheta$1,
	vartriangleleft: vartriangleleft$1,
	vartriangleright: vartriangleright$1,
	vBar: vBar$1,
	Vbar: Vbar$1,
	vBarv: vBarv$1,
	Vcy: Vcy$1,
	vcy: vcy$1,
	vdash: vdash$1,
	vDash: vDash$1,
	Vdash: Vdash$1,
	VDash: VDash$1,
	Vdashl: Vdashl$1,
	veebar: veebar$1,
	vee: vee$1,
	Vee: Vee$1,
	veeeq: veeeq$1,
	vellip: vellip$1,
	verbar: verbar$1,
	Verbar: Verbar$1,
	vert: vert$1,
	Vert: Vert$1,
	VerticalBar: VerticalBar$1,
	VerticalLine: VerticalLine$1,
	VerticalSeparator: VerticalSeparator$1,
	VerticalTilde: VerticalTilde$1,
	VeryThinSpace: VeryThinSpace$1,
	Vfr: Vfr$1,
	vfr: vfr$1,
	vltri: vltri$1,
	vnsub: vnsub$1,
	vnsup: vnsup$1,
	Vopf: Vopf$1,
	vopf: vopf$1,
	vprop: vprop$1,
	vrtri: vrtri$1,
	Vscr: Vscr$1,
	vscr: vscr$1,
	vsubnE: vsubnE$1,
	vsubne: vsubne$1,
	vsupnE: vsupnE$1,
	vsupne: vsupne$1,
	Vvdash: Vvdash$1,
	vzigzag: vzigzag$1,
	Wcirc: Wcirc$1,
	wcirc: wcirc$1,
	wedbar: wedbar$1,
	wedge: wedge$1,
	Wedge: Wedge$1,
	wedgeq: wedgeq$1,
	weierp: weierp$1,
	Wfr: Wfr$1,
	wfr: wfr$1,
	Wopf: Wopf$1,
	wopf: wopf$1,
	wp: wp$1,
	wr: wr$1,
	wreath: wreath$1,
	Wscr: Wscr$1,
	wscr: wscr$1,
	xcap: xcap$1,
	xcirc: xcirc$1,
	xcup: xcup$1,
	xdtri: xdtri$1,
	Xfr: Xfr$1,
	xfr: xfr$1,
	xharr: xharr$1,
	xhArr: xhArr$1,
	Xi: Xi$1,
	xi: xi$1,
	xlarr: xlarr$1,
	xlArr: xlArr$1,
	xmap: xmap$1,
	xnis: xnis$1,
	xodot: xodot$1,
	Xopf: Xopf$1,
	xopf: xopf$1,
	xoplus: xoplus$1,
	xotime: xotime$1,
	xrarr: xrarr$1,
	xrArr: xrArr$1,
	Xscr: Xscr$1,
	xscr: xscr$1,
	xsqcup: xsqcup$1,
	xuplus: xuplus$1,
	xutri: xutri$1,
	xvee: xvee$1,
	xwedge: xwedge$1,
	Yacute: Yacute$2,
	yacute: yacute$2,
	YAcy: YAcy$1,
	yacy: yacy$1,
	Ycirc: Ycirc$1,
	ycirc: ycirc$1,
	Ycy: Ycy$1,
	ycy: ycy$1,
	yen: yen$2,
	Yfr: Yfr$1,
	yfr: yfr$1,
	YIcy: YIcy$1,
	yicy: yicy$1,
	Yopf: Yopf$1,
	yopf: yopf$1,
	Yscr: Yscr$1,
	yscr: yscr$1,
	YUcy: YUcy$1,
	yucy: yucy$1,
	yuml: yuml$2,
	Yuml: Yuml$1,
	Zacute: Zacute$1,
	zacute: zacute$1,
	Zcaron: Zcaron$1,
	zcaron: zcaron$1,
	Zcy: Zcy$1,
	zcy: zcy$1,
	Zdot: Zdot$1,
	zdot: zdot$1,
	zeetrf: zeetrf$1,
	ZeroWidthSpace: ZeroWidthSpace$1,
	Zeta: Zeta$1,
	zeta: zeta$1,
	zfr: zfr$1,
	Zfr: Zfr$1,
	ZHcy: ZHcy$1,
	zhcy: zhcy$1,
	zigrarr: zigrarr$1,
	zopf: zopf$1,
	Zopf: Zopf$1,
	Zscr: Zscr$1,
	zscr: zscr$1,
	zwj: zwj$1,
	zwnj: zwnj$1
};

var entities$3 = /*#__PURE__*/Object.freeze({
    Aacute: Aacute$2,
    aacute: aacute$2,
    Abreve: Abreve$1,
    abreve: abreve$1,
    ac: ac$1,
    acd: acd$1,
    acE: acE$1,
    Acirc: Acirc$2,
    acirc: acirc$2,
    acute: acute$2,
    Acy: Acy$1,
    acy: acy$1,
    AElig: AElig$2,
    aelig: aelig$2,
    af: af$1,
    Afr: Afr$1,
    afr: afr$1,
    Agrave: Agrave$2,
    agrave: agrave$2,
    alefsym: alefsym$1,
    aleph: aleph$1,
    Alpha: Alpha$1,
    alpha: alpha$1,
    Amacr: Amacr$1,
    amacr: amacr$1,
    amalg: amalg$1,
    amp: amp$3,
    AMP: AMP$2,
    andand: andand$1,
    And: And$1,
    and: and$1,
    andd: andd$1,
    andslope: andslope$1,
    andv: andv$1,
    ang: ang$1,
    ange: ange$1,
    angle: angle$1,
    angmsdaa: angmsdaa$1,
    angmsdab: angmsdab$1,
    angmsdac: angmsdac$1,
    angmsdad: angmsdad$1,
    angmsdae: angmsdae$1,
    angmsdaf: angmsdaf$1,
    angmsdag: angmsdag$1,
    angmsdah: angmsdah$1,
    angmsd: angmsd$1,
    angrt: angrt$1,
    angrtvb: angrtvb$1,
    angrtvbd: angrtvbd$1,
    angsph: angsph$1,
    angst: angst$1,
    angzarr: angzarr$1,
    Aogon: Aogon$1,
    aogon: aogon$1,
    Aopf: Aopf$1,
    aopf: aopf$1,
    apacir: apacir$1,
    ap: ap$1,
    apE: apE$1,
    ape: ape$1,
    apid: apid$1,
    apos: apos$2,
    ApplyFunction: ApplyFunction$1,
    approx: approx$1,
    approxeq: approxeq$1,
    Aring: Aring$2,
    aring: aring$2,
    Ascr: Ascr$1,
    ascr: ascr$1,
    Assign: Assign$1,
    ast: ast$1,
    asymp: asymp$1,
    asympeq: asympeq$1,
    Atilde: Atilde$2,
    atilde: atilde$2,
    Auml: Auml$2,
    auml: auml$2,
    awconint: awconint$1,
    awint: awint$1,
    backcong: backcong$1,
    backepsilon: backepsilon$1,
    backprime: backprime$1,
    backsim: backsim$1,
    backsimeq: backsimeq$1,
    Backslash: Backslash$1,
    Barv: Barv$1,
    barvee: barvee$1,
    barwed: barwed$1,
    Barwed: Barwed$1,
    barwedge: barwedge$1,
    bbrk: bbrk$1,
    bbrktbrk: bbrktbrk$1,
    bcong: bcong$1,
    Bcy: Bcy$1,
    bcy: bcy$1,
    bdquo: bdquo$1,
    becaus: becaus$1,
    because: because$1,
    Because: Because$1,
    bemptyv: bemptyv$1,
    bepsi: bepsi$1,
    bernou: bernou$1,
    Bernoullis: Bernoullis$1,
    Beta: Beta$1,
    beta: beta$1,
    beth: beth$1,
    between: between$1,
    Bfr: Bfr$1,
    bfr: bfr$1,
    bigcap: bigcap$1,
    bigcirc: bigcirc$1,
    bigcup: bigcup$1,
    bigodot: bigodot$1,
    bigoplus: bigoplus$1,
    bigotimes: bigotimes$1,
    bigsqcup: bigsqcup$1,
    bigstar: bigstar$1,
    bigtriangledown: bigtriangledown$1,
    bigtriangleup: bigtriangleup$1,
    biguplus: biguplus$1,
    bigvee: bigvee$1,
    bigwedge: bigwedge$1,
    bkarow: bkarow$1,
    blacklozenge: blacklozenge$1,
    blacksquare: blacksquare$1,
    blacktriangle: blacktriangle$1,
    blacktriangledown: blacktriangledown$1,
    blacktriangleleft: blacktriangleleft$1,
    blacktriangleright: blacktriangleright$1,
    blank: blank$1,
    blk12: blk12$1,
    blk14: blk14$1,
    blk34: blk34$1,
    block: block$1,
    bne: bne$1,
    bnequiv: bnequiv$1,
    bNot: bNot$1,
    bnot: bnot$1,
    Bopf: Bopf$1,
    bopf: bopf$1,
    bot: bot$1,
    bottom: bottom$1,
    bowtie: bowtie$1,
    boxbox: boxbox$1,
    boxdl: boxdl$1,
    boxdL: boxdL$1,
    boxDl: boxDl$1,
    boxDL: boxDL$1,
    boxdr: boxdr$1,
    boxdR: boxdR$1,
    boxDr: boxDr$1,
    boxDR: boxDR$1,
    boxh: boxh$1,
    boxH: boxH$1,
    boxhd: boxhd$1,
    boxHd: boxHd$1,
    boxhD: boxhD$1,
    boxHD: boxHD$1,
    boxhu: boxhu$1,
    boxHu: boxHu$1,
    boxhU: boxhU$1,
    boxHU: boxHU$1,
    boxminus: boxminus$1,
    boxplus: boxplus$1,
    boxtimes: boxtimes$1,
    boxul: boxul$1,
    boxuL: boxuL$1,
    boxUl: boxUl$1,
    boxUL: boxUL$1,
    boxur: boxur$1,
    boxuR: boxuR$1,
    boxUr: boxUr$1,
    boxUR: boxUR$1,
    boxv: boxv$1,
    boxV: boxV$1,
    boxvh: boxvh$1,
    boxvH: boxvH$1,
    boxVh: boxVh$1,
    boxVH: boxVH$1,
    boxvl: boxvl$1,
    boxvL: boxvL$1,
    boxVl: boxVl$1,
    boxVL: boxVL$1,
    boxvr: boxvr$1,
    boxvR: boxvR$1,
    boxVr: boxVr$1,
    boxVR: boxVR$1,
    bprime: bprime$1,
    breve: breve$1,
    Breve: Breve$1,
    brvbar: brvbar$2,
    bscr: bscr$1,
    Bscr: Bscr$1,
    bsemi: bsemi$1,
    bsim: bsim$1,
    bsime: bsime$1,
    bsolb: bsolb$1,
    bsol: bsol$1,
    bsolhsub: bsolhsub$1,
    bull: bull$1,
    bullet: bullet$1,
    bump: bump$1,
    bumpE: bumpE$1,
    bumpe: bumpe$1,
    Bumpeq: Bumpeq$1,
    bumpeq: bumpeq$1,
    Cacute: Cacute$1,
    cacute: cacute$1,
    capand: capand$1,
    capbrcup: capbrcup$1,
    capcap: capcap$1,
    cap: cap$1,
    Cap: Cap$1,
    capcup: capcup$1,
    capdot: capdot$1,
    CapitalDifferentialD: CapitalDifferentialD$1,
    caps: caps$1,
    caret: caret$1,
    caron: caron$1,
    Cayleys: Cayleys$1,
    ccaps: ccaps$1,
    Ccaron: Ccaron$1,
    ccaron: ccaron$1,
    Ccedil: Ccedil$2,
    ccedil: ccedil$2,
    Ccirc: Ccirc$1,
    ccirc: ccirc$1,
    Cconint: Cconint$1,
    ccups: ccups$1,
    ccupssm: ccupssm$1,
    Cdot: Cdot$1,
    cdot: cdot$1,
    cedil: cedil$2,
    Cedilla: Cedilla$1,
    cemptyv: cemptyv$1,
    cent: cent$2,
    centerdot: centerdot$1,
    CenterDot: CenterDot$1,
    cfr: cfr$1,
    Cfr: Cfr$1,
    CHcy: CHcy$1,
    chcy: chcy$1,
    check: check$1,
    checkmark: checkmark$1,
    Chi: Chi$1,
    chi: chi$1,
    circ: circ$1,
    circeq: circeq$1,
    circlearrowleft: circlearrowleft$1,
    circlearrowright: circlearrowright$1,
    circledast: circledast$1,
    circledcirc: circledcirc$1,
    circleddash: circleddash$1,
    CircleDot: CircleDot$1,
    circledR: circledR$1,
    circledS: circledS$1,
    CircleMinus: CircleMinus$1,
    CirclePlus: CirclePlus$1,
    CircleTimes: CircleTimes$1,
    cir: cir$1,
    cirE: cirE$1,
    cire: cire$1,
    cirfnint: cirfnint$1,
    cirmid: cirmid$1,
    cirscir: cirscir$1,
    ClockwiseContourIntegral: ClockwiseContourIntegral$1,
    CloseCurlyDoubleQuote: CloseCurlyDoubleQuote$1,
    CloseCurlyQuote: CloseCurlyQuote$1,
    clubs: clubs$1,
    clubsuit: clubsuit$1,
    colon: colon$1,
    Colon: Colon$1,
    Colone: Colone$1,
    colone: colone$1,
    coloneq: coloneq$1,
    comma: comma$1,
    commat: commat$1,
    comp: comp$1,
    compfn: compfn$1,
    complement: complement$1,
    complexes: complexes$1,
    cong: cong$1,
    congdot: congdot$1,
    Congruent: Congruent$1,
    conint: conint$1,
    Conint: Conint$1,
    ContourIntegral: ContourIntegral$1,
    copf: copf$1,
    Copf: Copf$1,
    coprod: coprod$1,
    Coproduct: Coproduct$1,
    copy: copy$2,
    COPY: COPY$2,
    copysr: copysr$1,
    CounterClockwiseContourIntegral: CounterClockwiseContourIntegral$1,
    crarr: crarr$1,
    cross: cross$1,
    Cross: Cross$1,
    Cscr: Cscr$1,
    cscr: cscr$1,
    csub: csub$1,
    csube: csube$1,
    csup: csup$1,
    csupe: csupe$1,
    ctdot: ctdot$1,
    cudarrl: cudarrl$1,
    cudarrr: cudarrr$1,
    cuepr: cuepr$1,
    cuesc: cuesc$1,
    cularr: cularr$1,
    cularrp: cularrp$1,
    cupbrcap: cupbrcap$1,
    cupcap: cupcap$1,
    CupCap: CupCap$1,
    cup: cup$1,
    Cup: Cup$1,
    cupcup: cupcup$1,
    cupdot: cupdot$1,
    cupor: cupor$1,
    cups: cups$1,
    curarr: curarr$1,
    curarrm: curarrm$1,
    curlyeqprec: curlyeqprec$1,
    curlyeqsucc: curlyeqsucc$1,
    curlyvee: curlyvee$1,
    curlywedge: curlywedge$1,
    curren: curren$2,
    curvearrowleft: curvearrowleft$1,
    curvearrowright: curvearrowright$1,
    cuvee: cuvee$1,
    cuwed: cuwed$1,
    cwconint: cwconint$1,
    cwint: cwint$1,
    cylcty: cylcty$1,
    dagger: dagger$1,
    Dagger: Dagger$1,
    daleth: daleth$1,
    darr: darr$1,
    Darr: Darr$1,
    dArr: dArr$1,
    dash: dash$1,
    Dashv: Dashv$1,
    dashv: dashv$1,
    dbkarow: dbkarow$1,
    dblac: dblac$1,
    Dcaron: Dcaron$1,
    dcaron: dcaron$1,
    Dcy: Dcy$1,
    dcy: dcy$1,
    ddagger: ddagger$1,
    ddarr: ddarr$1,
    DD: DD$1,
    dd: dd$1,
    DDotrahd: DDotrahd$1,
    ddotseq: ddotseq$1,
    deg: deg$2,
    Del: Del$1,
    Delta: Delta$1,
    delta: delta$1,
    demptyv: demptyv$1,
    dfisht: dfisht$1,
    Dfr: Dfr$1,
    dfr: dfr$1,
    dHar: dHar$1,
    dharl: dharl$1,
    dharr: dharr$1,
    DiacriticalAcute: DiacriticalAcute$1,
    DiacriticalDot: DiacriticalDot$1,
    DiacriticalDoubleAcute: DiacriticalDoubleAcute$1,
    DiacriticalGrave: DiacriticalGrave$1,
    DiacriticalTilde: DiacriticalTilde$1,
    diam: diam$1,
    diamond: diamond$1,
    Diamond: Diamond$1,
    diamondsuit: diamondsuit$1,
    diams: diams$1,
    die: die$1,
    DifferentialD: DifferentialD$1,
    digamma: digamma$1,
    disin: disin$1,
    div: div$1,
    divide: divide$2,
    divideontimes: divideontimes$1,
    divonx: divonx$1,
    DJcy: DJcy$1,
    djcy: djcy$1,
    dlcorn: dlcorn$1,
    dlcrop: dlcrop$1,
    dollar: dollar$1,
    Dopf: Dopf$1,
    dopf: dopf$1,
    Dot: Dot$1,
    dot: dot$1,
    DotDot: DotDot$1,
    doteq: doteq$1,
    doteqdot: doteqdot$1,
    DotEqual: DotEqual$1,
    dotminus: dotminus$1,
    dotplus: dotplus$1,
    dotsquare: dotsquare$1,
    doublebarwedge: doublebarwedge$1,
    DoubleContourIntegral: DoubleContourIntegral$1,
    DoubleDot: DoubleDot$1,
    DoubleDownArrow: DoubleDownArrow$1,
    DoubleLeftArrow: DoubleLeftArrow$1,
    DoubleLeftRightArrow: DoubleLeftRightArrow$1,
    DoubleLeftTee: DoubleLeftTee$1,
    DoubleLongLeftArrow: DoubleLongLeftArrow$1,
    DoubleLongLeftRightArrow: DoubleLongLeftRightArrow$1,
    DoubleLongRightArrow: DoubleLongRightArrow$1,
    DoubleRightArrow: DoubleRightArrow$1,
    DoubleRightTee: DoubleRightTee$1,
    DoubleUpArrow: DoubleUpArrow$1,
    DoubleUpDownArrow: DoubleUpDownArrow$1,
    DoubleVerticalBar: DoubleVerticalBar$1,
    DownArrowBar: DownArrowBar$1,
    downarrow: downarrow$1,
    DownArrow: DownArrow$1,
    Downarrow: Downarrow$1,
    DownArrowUpArrow: DownArrowUpArrow$1,
    DownBreve: DownBreve$1,
    downdownarrows: downdownarrows$1,
    downharpoonleft: downharpoonleft$1,
    downharpoonright: downharpoonright$1,
    DownLeftRightVector: DownLeftRightVector$1,
    DownLeftTeeVector: DownLeftTeeVector$1,
    DownLeftVectorBar: DownLeftVectorBar$1,
    DownLeftVector: DownLeftVector$1,
    DownRightTeeVector: DownRightTeeVector$1,
    DownRightVectorBar: DownRightVectorBar$1,
    DownRightVector: DownRightVector$1,
    DownTeeArrow: DownTeeArrow$1,
    DownTee: DownTee$1,
    drbkarow: drbkarow$1,
    drcorn: drcorn$1,
    drcrop: drcrop$1,
    Dscr: Dscr$1,
    dscr: dscr$1,
    DScy: DScy$1,
    dscy: dscy$1,
    dsol: dsol$1,
    Dstrok: Dstrok$1,
    dstrok: dstrok$1,
    dtdot: dtdot$1,
    dtri: dtri$1,
    dtrif: dtrif$1,
    duarr: duarr$1,
    duhar: duhar$1,
    dwangle: dwangle$1,
    DZcy: DZcy$1,
    dzcy: dzcy$1,
    dzigrarr: dzigrarr$1,
    Eacute: Eacute$2,
    eacute: eacute$2,
    easter: easter$1,
    Ecaron: Ecaron$1,
    ecaron: ecaron$1,
    Ecirc: Ecirc$2,
    ecirc: ecirc$2,
    ecir: ecir$1,
    ecolon: ecolon$1,
    Ecy: Ecy$1,
    ecy: ecy$1,
    eDDot: eDDot$1,
    Edot: Edot$1,
    edot: edot$1,
    eDot: eDot$1,
    ee: ee$1,
    efDot: efDot$1,
    Efr: Efr$1,
    efr: efr$1,
    eg: eg$1,
    Egrave: Egrave$2,
    egrave: egrave$2,
    egs: egs$1,
    egsdot: egsdot$1,
    el: el$1,
    Element: Element$1,
    elinters: elinters$1,
    ell: ell$1,
    els: els$1,
    elsdot: elsdot$1,
    Emacr: Emacr$1,
    emacr: emacr$1,
    empty: empty$1,
    emptyset: emptyset$1,
    EmptySmallSquare: EmptySmallSquare$1,
    emptyv: emptyv$1,
    EmptyVerySmallSquare: EmptyVerySmallSquare$1,
    emsp13: emsp13$1,
    emsp14: emsp14$1,
    emsp: emsp$1,
    ENG: ENG$1,
    eng: eng$1,
    ensp: ensp$1,
    Eogon: Eogon$1,
    eogon: eogon$1,
    Eopf: Eopf$1,
    eopf: eopf$1,
    epar: epar$1,
    eparsl: eparsl$1,
    eplus: eplus$1,
    epsi: epsi$1,
    Epsilon: Epsilon$1,
    epsilon: epsilon$1,
    epsiv: epsiv$1,
    eqcirc: eqcirc$1,
    eqcolon: eqcolon$1,
    eqsim: eqsim$1,
    eqslantgtr: eqslantgtr$1,
    eqslantless: eqslantless$1,
    Equal: Equal$1,
    equals: equals$1,
    EqualTilde: EqualTilde$1,
    equest: equest$1,
    Equilibrium: Equilibrium$1,
    equiv: equiv$1,
    equivDD: equivDD$1,
    eqvparsl: eqvparsl$1,
    erarr: erarr$1,
    erDot: erDot$1,
    escr: escr$1,
    Escr: Escr$1,
    esdot: esdot$1,
    Esim: Esim$1,
    esim: esim$1,
    Eta: Eta$1,
    eta: eta$1,
    ETH: ETH$2,
    eth: eth$2,
    Euml: Euml$2,
    euml: euml$2,
    euro: euro$1,
    excl: excl$1,
    exist: exist$1,
    Exists: Exists$1,
    expectation: expectation$1,
    exponentiale: exponentiale$1,
    ExponentialE: ExponentialE$1,
    fallingdotseq: fallingdotseq$1,
    Fcy: Fcy$1,
    fcy: fcy$1,
    female: female$1,
    ffilig: ffilig$1,
    fflig: fflig$1,
    ffllig: ffllig$1,
    Ffr: Ffr$1,
    ffr: ffr$1,
    filig: filig$1,
    FilledSmallSquare: FilledSmallSquare$1,
    FilledVerySmallSquare: FilledVerySmallSquare$1,
    fjlig: fjlig$1,
    flat: flat$1,
    fllig: fllig$1,
    fltns: fltns$1,
    fnof: fnof$1,
    Fopf: Fopf$1,
    fopf: fopf$1,
    forall: forall$1,
    ForAll: ForAll$1,
    fork: fork$1,
    forkv: forkv$1,
    Fouriertrf: Fouriertrf$1,
    fpartint: fpartint$1,
    frac12: frac12$2,
    frac13: frac13$1,
    frac14: frac14$2,
    frac15: frac15$1,
    frac16: frac16$1,
    frac18: frac18$1,
    frac23: frac23$1,
    frac25: frac25$1,
    frac34: frac34$2,
    frac35: frac35$1,
    frac38: frac38$1,
    frac45: frac45$1,
    frac56: frac56$1,
    frac58: frac58$1,
    frac78: frac78$1,
    frasl: frasl$1,
    frown: frown$1,
    fscr: fscr$1,
    Fscr: Fscr$1,
    gacute: gacute$1,
    Gamma: Gamma$1,
    gamma: gamma$1,
    Gammad: Gammad$1,
    gammad: gammad$1,
    gap: gap$1,
    Gbreve: Gbreve$1,
    gbreve: gbreve$1,
    Gcedil: Gcedil$1,
    Gcirc: Gcirc$1,
    gcirc: gcirc$1,
    Gcy: Gcy$1,
    gcy: gcy$1,
    Gdot: Gdot$1,
    gdot: gdot$1,
    ge: ge$1,
    gE: gE$1,
    gEl: gEl$1,
    gel: gel$1,
    geq: geq$1,
    geqq: geqq$1,
    geqslant: geqslant$1,
    gescc: gescc$1,
    ges: ges$1,
    gesdot: gesdot$1,
    gesdoto: gesdoto$1,
    gesdotol: gesdotol$1,
    gesl: gesl$1,
    gesles: gesles$1,
    Gfr: Gfr$1,
    gfr: gfr$1,
    gg: gg$1,
    Gg: Gg$1,
    ggg: ggg$1,
    gimel: gimel$1,
    GJcy: GJcy$1,
    gjcy: gjcy$1,
    gla: gla$1,
    gl: gl$1,
    glE: glE$1,
    glj: glj$1,
    gnap: gnap$1,
    gnapprox: gnapprox$1,
    gne: gne$1,
    gnE: gnE$1,
    gneq: gneq$1,
    gneqq: gneqq$1,
    gnsim: gnsim$1,
    Gopf: Gopf$1,
    gopf: gopf$1,
    grave: grave$1,
    GreaterEqual: GreaterEqual$1,
    GreaterEqualLess: GreaterEqualLess$1,
    GreaterFullEqual: GreaterFullEqual$1,
    GreaterGreater: GreaterGreater$1,
    GreaterLess: GreaterLess$1,
    GreaterSlantEqual: GreaterSlantEqual$1,
    GreaterTilde: GreaterTilde$1,
    Gscr: Gscr$1,
    gscr: gscr$1,
    gsim: gsim$1,
    gsime: gsime$1,
    gsiml: gsiml$1,
    gtcc: gtcc$1,
    gtcir: gtcir$1,
    gt: gt$3,
    GT: GT$2,
    Gt: Gt$1,
    gtdot: gtdot$1,
    gtlPar: gtlPar$1,
    gtquest: gtquest$1,
    gtrapprox: gtrapprox$1,
    gtrarr: gtrarr$1,
    gtrdot: gtrdot$1,
    gtreqless: gtreqless$1,
    gtreqqless: gtreqqless$1,
    gtrless: gtrless$1,
    gtrsim: gtrsim$1,
    gvertneqq: gvertneqq$1,
    gvnE: gvnE$1,
    Hacek: Hacek$1,
    hairsp: hairsp$1,
    half: half$1,
    hamilt: hamilt$1,
    HARDcy: HARDcy$1,
    hardcy: hardcy$1,
    harrcir: harrcir$1,
    harr: harr$1,
    hArr: hArr$1,
    harrw: harrw$1,
    Hat: Hat$1,
    hbar: hbar$1,
    Hcirc: Hcirc$1,
    hcirc: hcirc$1,
    hearts: hearts$1,
    heartsuit: heartsuit$1,
    hellip: hellip$1,
    hercon: hercon$1,
    hfr: hfr$1,
    Hfr: Hfr$1,
    HilbertSpace: HilbertSpace$1,
    hksearow: hksearow$1,
    hkswarow: hkswarow$1,
    hoarr: hoarr$1,
    homtht: homtht$1,
    hookleftarrow: hookleftarrow$1,
    hookrightarrow: hookrightarrow$1,
    hopf: hopf$1,
    Hopf: Hopf$1,
    horbar: horbar$1,
    HorizontalLine: HorizontalLine$1,
    hscr: hscr$1,
    Hscr: Hscr$1,
    hslash: hslash$1,
    Hstrok: Hstrok$1,
    hstrok: hstrok$1,
    HumpDownHump: HumpDownHump$1,
    HumpEqual: HumpEqual$1,
    hybull: hybull$1,
    hyphen: hyphen$1,
    Iacute: Iacute$2,
    iacute: iacute$2,
    ic: ic$1,
    Icirc: Icirc$2,
    icirc: icirc$2,
    Icy: Icy$1,
    icy: icy$1,
    Idot: Idot$1,
    IEcy: IEcy$1,
    iecy: iecy$1,
    iexcl: iexcl$2,
    iff: iff$1,
    ifr: ifr$1,
    Ifr: Ifr$1,
    Igrave: Igrave$2,
    igrave: igrave$2,
    ii: ii$1,
    iiiint: iiiint$1,
    iiint: iiint$1,
    iinfin: iinfin$1,
    iiota: iiota$1,
    IJlig: IJlig$1,
    ijlig: ijlig$1,
    Imacr: Imacr$1,
    imacr: imacr$1,
    image: image$1,
    ImaginaryI: ImaginaryI$1,
    imagline: imagline$1,
    imagpart: imagpart$1,
    imath: imath$1,
    Im: Im$1,
    imof: imof$1,
    imped: imped$1,
    Implies: Implies$1,
    incare: incare$1,
    infin: infin$1,
    infintie: infintie$1,
    inodot: inodot$1,
    intcal: intcal$1,
    int: int$1,
    Int: Int$1,
    integers: integers$1,
    Integral: Integral$1,
    intercal: intercal$1,
    Intersection: Intersection$1,
    intlarhk: intlarhk$1,
    intprod: intprod$1,
    InvisibleComma: InvisibleComma$1,
    InvisibleTimes: InvisibleTimes$1,
    IOcy: IOcy$1,
    iocy: iocy$1,
    Iogon: Iogon$1,
    iogon: iogon$1,
    Iopf: Iopf$1,
    iopf: iopf$1,
    Iota: Iota$1,
    iota: iota$1,
    iprod: iprod$1,
    iquest: iquest$2,
    iscr: iscr$1,
    Iscr: Iscr$1,
    isin: isin$1,
    isindot: isindot$1,
    isinE: isinE$1,
    isins: isins$1,
    isinsv: isinsv$1,
    isinv: isinv$1,
    it: it$1,
    Itilde: Itilde$1,
    itilde: itilde$1,
    Iukcy: Iukcy$1,
    iukcy: iukcy$1,
    Iuml: Iuml$2,
    iuml: iuml$2,
    Jcirc: Jcirc$1,
    jcirc: jcirc$1,
    Jcy: Jcy$1,
    jcy: jcy$1,
    Jfr: Jfr$1,
    jfr: jfr$1,
    jmath: jmath$1,
    Jopf: Jopf$1,
    jopf: jopf$1,
    Jscr: Jscr$1,
    jscr: jscr$1,
    Jsercy: Jsercy$1,
    jsercy: jsercy$1,
    Jukcy: Jukcy$1,
    jukcy: jukcy$1,
    Kappa: Kappa$1,
    kappa: kappa$1,
    kappav: kappav$1,
    Kcedil: Kcedil$1,
    kcedil: kcedil$1,
    Kcy: Kcy$1,
    kcy: kcy$1,
    Kfr: Kfr$1,
    kfr: kfr$1,
    kgreen: kgreen$1,
    KHcy: KHcy$1,
    khcy: khcy$1,
    KJcy: KJcy$1,
    kjcy: kjcy$1,
    Kopf: Kopf$1,
    kopf: kopf$1,
    Kscr: Kscr$1,
    kscr: kscr$1,
    lAarr: lAarr$1,
    Lacute: Lacute$1,
    lacute: lacute$1,
    laemptyv: laemptyv$1,
    lagran: lagran$1,
    Lambda: Lambda$1,
    lambda: lambda$1,
    lang: lang$1,
    Lang: Lang$1,
    langd: langd$1,
    langle: langle$1,
    lap: lap$1,
    Laplacetrf: Laplacetrf$1,
    laquo: laquo$2,
    larrb: larrb$1,
    larrbfs: larrbfs$1,
    larr: larr$1,
    Larr: Larr$1,
    lArr: lArr$1,
    larrfs: larrfs$1,
    larrhk: larrhk$1,
    larrlp: larrlp$1,
    larrpl: larrpl$1,
    larrsim: larrsim$1,
    larrtl: larrtl$1,
    latail: latail$1,
    lAtail: lAtail$1,
    lat: lat$1,
    late: late$1,
    lates: lates$1,
    lbarr: lbarr$1,
    lBarr: lBarr$1,
    lbbrk: lbbrk$1,
    lbrace: lbrace$1,
    lbrack: lbrack$1,
    lbrke: lbrke$1,
    lbrksld: lbrksld$1,
    lbrkslu: lbrkslu$1,
    Lcaron: Lcaron$1,
    lcaron: lcaron$1,
    Lcedil: Lcedil$1,
    lcedil: lcedil$1,
    lceil: lceil$1,
    lcub: lcub$1,
    Lcy: Lcy$1,
    lcy: lcy$1,
    ldca: ldca$1,
    ldquo: ldquo$1,
    ldquor: ldquor$1,
    ldrdhar: ldrdhar$1,
    ldrushar: ldrushar$1,
    ldsh: ldsh$1,
    le: le$1,
    lE: lE$1,
    LeftAngleBracket: LeftAngleBracket$1,
    LeftArrowBar: LeftArrowBar$1,
    leftarrow: leftarrow$1,
    LeftArrow: LeftArrow$1,
    Leftarrow: Leftarrow$1,
    LeftArrowRightArrow: LeftArrowRightArrow$1,
    leftarrowtail: leftarrowtail$1,
    LeftCeiling: LeftCeiling$1,
    LeftDoubleBracket: LeftDoubleBracket$1,
    LeftDownTeeVector: LeftDownTeeVector$1,
    LeftDownVectorBar: LeftDownVectorBar$1,
    LeftDownVector: LeftDownVector$1,
    LeftFloor: LeftFloor$1,
    leftharpoondown: leftharpoondown$1,
    leftharpoonup: leftharpoonup$1,
    leftleftarrows: leftleftarrows$1,
    leftrightarrow: leftrightarrow$1,
    LeftRightArrow: LeftRightArrow$1,
    Leftrightarrow: Leftrightarrow$1,
    leftrightarrows: leftrightarrows$1,
    leftrightharpoons: leftrightharpoons$1,
    leftrightsquigarrow: leftrightsquigarrow$1,
    LeftRightVector: LeftRightVector$1,
    LeftTeeArrow: LeftTeeArrow$1,
    LeftTee: LeftTee$1,
    LeftTeeVector: LeftTeeVector$1,
    leftthreetimes: leftthreetimes$1,
    LeftTriangleBar: LeftTriangleBar$1,
    LeftTriangle: LeftTriangle$1,
    LeftTriangleEqual: LeftTriangleEqual$1,
    LeftUpDownVector: LeftUpDownVector$1,
    LeftUpTeeVector: LeftUpTeeVector$1,
    LeftUpVectorBar: LeftUpVectorBar$1,
    LeftUpVector: LeftUpVector$1,
    LeftVectorBar: LeftVectorBar$1,
    LeftVector: LeftVector$1,
    lEg: lEg$1,
    leg: leg$1,
    leq: leq$1,
    leqq: leqq$1,
    leqslant: leqslant$1,
    lescc: lescc$1,
    les: les$1,
    lesdot: lesdot$1,
    lesdoto: lesdoto$1,
    lesdotor: lesdotor$1,
    lesg: lesg$1,
    lesges: lesges$1,
    lessapprox: lessapprox$1,
    lessdot: lessdot$1,
    lesseqgtr: lesseqgtr$1,
    lesseqqgtr: lesseqqgtr$1,
    LessEqualGreater: LessEqualGreater$1,
    LessFullEqual: LessFullEqual$1,
    LessGreater: LessGreater$1,
    lessgtr: lessgtr$1,
    LessLess: LessLess$1,
    lesssim: lesssim$1,
    LessSlantEqual: LessSlantEqual$1,
    LessTilde: LessTilde$1,
    lfisht: lfisht$1,
    lfloor: lfloor$1,
    Lfr: Lfr$1,
    lfr: lfr$1,
    lg: lg$1,
    lgE: lgE$1,
    lHar: lHar$1,
    lhard: lhard$1,
    lharu: lharu$1,
    lharul: lharul$1,
    lhblk: lhblk$1,
    LJcy: LJcy$1,
    ljcy: ljcy$1,
    llarr: llarr$1,
    ll: ll$1,
    Ll: Ll$1,
    llcorner: llcorner$1,
    Lleftarrow: Lleftarrow$1,
    llhard: llhard$1,
    lltri: lltri$1,
    Lmidot: Lmidot$1,
    lmidot: lmidot$1,
    lmoustache: lmoustache$1,
    lmoust: lmoust$1,
    lnap: lnap$1,
    lnapprox: lnapprox$1,
    lne: lne$1,
    lnE: lnE$1,
    lneq: lneq$1,
    lneqq: lneqq$1,
    lnsim: lnsim$1,
    loang: loang$1,
    loarr: loarr$1,
    lobrk: lobrk$1,
    longleftarrow: longleftarrow$1,
    LongLeftArrow: LongLeftArrow$1,
    Longleftarrow: Longleftarrow$1,
    longleftrightarrow: longleftrightarrow$1,
    LongLeftRightArrow: LongLeftRightArrow$1,
    Longleftrightarrow: Longleftrightarrow$1,
    longmapsto: longmapsto$1,
    longrightarrow: longrightarrow$1,
    LongRightArrow: LongRightArrow$1,
    Longrightarrow: Longrightarrow$1,
    looparrowleft: looparrowleft$1,
    looparrowright: looparrowright$1,
    lopar: lopar$1,
    Lopf: Lopf$1,
    lopf: lopf$1,
    loplus: loplus$1,
    lotimes: lotimes$1,
    lowast: lowast$1,
    lowbar: lowbar$1,
    LowerLeftArrow: LowerLeftArrow$1,
    LowerRightArrow: LowerRightArrow$1,
    loz: loz$1,
    lozenge: lozenge$1,
    lozf: lozf$1,
    lpar: lpar$1,
    lparlt: lparlt$1,
    lrarr: lrarr$1,
    lrcorner: lrcorner$1,
    lrhar: lrhar$1,
    lrhard: lrhard$1,
    lrm: lrm$1,
    lrtri: lrtri$1,
    lsaquo: lsaquo$1,
    lscr: lscr$1,
    Lscr: Lscr$1,
    lsh: lsh$1,
    Lsh: Lsh$1,
    lsim: lsim$1,
    lsime: lsime$1,
    lsimg: lsimg$1,
    lsqb: lsqb$1,
    lsquo: lsquo$1,
    lsquor: lsquor$1,
    Lstrok: Lstrok$1,
    lstrok: lstrok$1,
    ltcc: ltcc$1,
    ltcir: ltcir$1,
    lt: lt$3,
    LT: LT$2,
    Lt: Lt$1,
    ltdot: ltdot$1,
    lthree: lthree$1,
    ltimes: ltimes$1,
    ltlarr: ltlarr$1,
    ltquest: ltquest$1,
    ltri: ltri$1,
    ltrie: ltrie$1,
    ltrif: ltrif$1,
    ltrPar: ltrPar$1,
    lurdshar: lurdshar$1,
    luruhar: luruhar$1,
    lvertneqq: lvertneqq$1,
    lvnE: lvnE$1,
    macr: macr$2,
    male: male$1,
    malt: malt$1,
    maltese: maltese$1,
    map: map$1,
    mapsto: mapsto$1,
    mapstodown: mapstodown$1,
    mapstoleft: mapstoleft$1,
    mapstoup: mapstoup$1,
    marker: marker$1,
    mcomma: mcomma$1,
    Mcy: Mcy$1,
    mcy: mcy$1,
    mdash: mdash$1,
    mDDot: mDDot$1,
    measuredangle: measuredangle$1,
    MediumSpace: MediumSpace$1,
    Mellintrf: Mellintrf$1,
    Mfr: Mfr$1,
    mfr: mfr$1,
    mho: mho$1,
    micro: micro$2,
    midast: midast$1,
    midcir: midcir$1,
    mid: mid$1,
    middot: middot$2,
    minusb: minusb$1,
    minus: minus$1,
    minusd: minusd$1,
    minusdu: minusdu$1,
    MinusPlus: MinusPlus$1,
    mlcp: mlcp$1,
    mldr: mldr$1,
    mnplus: mnplus$1,
    models: models$1,
    Mopf: Mopf$1,
    mopf: mopf$1,
    mp: mp$1,
    mscr: mscr$1,
    Mscr: Mscr$1,
    mstpos: mstpos$1,
    Mu: Mu$1,
    mu: mu$1,
    multimap: multimap$1,
    mumap: mumap$1,
    nabla: nabla$1,
    Nacute: Nacute$1,
    nacute: nacute$1,
    nang: nang$1,
    nap: nap$1,
    napE: napE$1,
    napid: napid$1,
    napos: napos$1,
    napprox: napprox$1,
    natural: natural$1,
    naturals: naturals$1,
    natur: natur$1,
    nbsp: nbsp$2,
    nbump: nbump$1,
    nbumpe: nbumpe$1,
    ncap: ncap$1,
    Ncaron: Ncaron$1,
    ncaron: ncaron$1,
    Ncedil: Ncedil$1,
    ncedil: ncedil$1,
    ncong: ncong$1,
    ncongdot: ncongdot$1,
    ncup: ncup$1,
    Ncy: Ncy$1,
    ncy: ncy$1,
    ndash: ndash$1,
    nearhk: nearhk$1,
    nearr: nearr$1,
    neArr: neArr$1,
    nearrow: nearrow$1,
    ne: ne$1,
    nedot: nedot$1,
    NegativeMediumSpace: NegativeMediumSpace$1,
    NegativeThickSpace: NegativeThickSpace$1,
    NegativeThinSpace: NegativeThinSpace$1,
    NegativeVeryThinSpace: NegativeVeryThinSpace$1,
    nequiv: nequiv$1,
    nesear: nesear$1,
    nesim: nesim$1,
    NestedGreaterGreater: NestedGreaterGreater$1,
    NestedLessLess: NestedLessLess$1,
    NewLine: NewLine$1,
    nexist: nexist$1,
    nexists: nexists$1,
    Nfr: Nfr$1,
    nfr: nfr$1,
    ngE: ngE$1,
    nge: nge$1,
    ngeq: ngeq$1,
    ngeqq: ngeqq$1,
    ngeqslant: ngeqslant$1,
    nges: nges$1,
    nGg: nGg$1,
    ngsim: ngsim$1,
    nGt: nGt$1,
    ngt: ngt$1,
    ngtr: ngtr$1,
    nGtv: nGtv$1,
    nharr: nharr$1,
    nhArr: nhArr$1,
    nhpar: nhpar$1,
    ni: ni$1,
    nis: nis$1,
    nisd: nisd$1,
    niv: niv$1,
    NJcy: NJcy$1,
    njcy: njcy$1,
    nlarr: nlarr$1,
    nlArr: nlArr$1,
    nldr: nldr$1,
    nlE: nlE$1,
    nle: nle$1,
    nleftarrow: nleftarrow$1,
    nLeftarrow: nLeftarrow$1,
    nleftrightarrow: nleftrightarrow$1,
    nLeftrightarrow: nLeftrightarrow$1,
    nleq: nleq$1,
    nleqq: nleqq$1,
    nleqslant: nleqslant$1,
    nles: nles$1,
    nless: nless$1,
    nLl: nLl$1,
    nlsim: nlsim$1,
    nLt: nLt$1,
    nlt: nlt$1,
    nltri: nltri$1,
    nltrie: nltrie$1,
    nLtv: nLtv$1,
    nmid: nmid$1,
    NoBreak: NoBreak$1,
    NonBreakingSpace: NonBreakingSpace$1,
    nopf: nopf$1,
    Nopf: Nopf$1,
    Not: Not$1,
    not: not$2,
    NotCongruent: NotCongruent$1,
    NotCupCap: NotCupCap$1,
    NotDoubleVerticalBar: NotDoubleVerticalBar$1,
    NotElement: NotElement$1,
    NotEqual: NotEqual$1,
    NotEqualTilde: NotEqualTilde$1,
    NotExists: NotExists$1,
    NotGreater: NotGreater$1,
    NotGreaterEqual: NotGreaterEqual$1,
    NotGreaterFullEqual: NotGreaterFullEqual$1,
    NotGreaterGreater: NotGreaterGreater$1,
    NotGreaterLess: NotGreaterLess$1,
    NotGreaterSlantEqual: NotGreaterSlantEqual$1,
    NotGreaterTilde: NotGreaterTilde$1,
    NotHumpDownHump: NotHumpDownHump$1,
    NotHumpEqual: NotHumpEqual$1,
    notin: notin$1,
    notindot: notindot$1,
    notinE: notinE$1,
    notinva: notinva$1,
    notinvb: notinvb$1,
    notinvc: notinvc$1,
    NotLeftTriangleBar: NotLeftTriangleBar$1,
    NotLeftTriangle: NotLeftTriangle$1,
    NotLeftTriangleEqual: NotLeftTriangleEqual$1,
    NotLess: NotLess$1,
    NotLessEqual: NotLessEqual$1,
    NotLessGreater: NotLessGreater$1,
    NotLessLess: NotLessLess$1,
    NotLessSlantEqual: NotLessSlantEqual$1,
    NotLessTilde: NotLessTilde$1,
    NotNestedGreaterGreater: NotNestedGreaterGreater$1,
    NotNestedLessLess: NotNestedLessLess$1,
    notni: notni$1,
    notniva: notniva$1,
    notnivb: notnivb$1,
    notnivc: notnivc$1,
    NotPrecedes: NotPrecedes$1,
    NotPrecedesEqual: NotPrecedesEqual$1,
    NotPrecedesSlantEqual: NotPrecedesSlantEqual$1,
    NotReverseElement: NotReverseElement$1,
    NotRightTriangleBar: NotRightTriangleBar$1,
    NotRightTriangle: NotRightTriangle$1,
    NotRightTriangleEqual: NotRightTriangleEqual$1,
    NotSquareSubset: NotSquareSubset$1,
    NotSquareSubsetEqual: NotSquareSubsetEqual$1,
    NotSquareSuperset: NotSquareSuperset$1,
    NotSquareSupersetEqual: NotSquareSupersetEqual$1,
    NotSubset: NotSubset$1,
    NotSubsetEqual: NotSubsetEqual$1,
    NotSucceeds: NotSucceeds$1,
    NotSucceedsEqual: NotSucceedsEqual$1,
    NotSucceedsSlantEqual: NotSucceedsSlantEqual$1,
    NotSucceedsTilde: NotSucceedsTilde$1,
    NotSuperset: NotSuperset$1,
    NotSupersetEqual: NotSupersetEqual$1,
    NotTilde: NotTilde$1,
    NotTildeEqual: NotTildeEqual$1,
    NotTildeFullEqual: NotTildeFullEqual$1,
    NotTildeTilde: NotTildeTilde$1,
    NotVerticalBar: NotVerticalBar$1,
    nparallel: nparallel$1,
    npar: npar$1,
    nparsl: nparsl$1,
    npart: npart$1,
    npolint: npolint$1,
    npr: npr$1,
    nprcue: nprcue$1,
    nprec: nprec$1,
    npreceq: npreceq$1,
    npre: npre$1,
    nrarrc: nrarrc$1,
    nrarr: nrarr$1,
    nrArr: nrArr$1,
    nrarrw: nrarrw$1,
    nrightarrow: nrightarrow$1,
    nRightarrow: nRightarrow$1,
    nrtri: nrtri$1,
    nrtrie: nrtrie$1,
    nsc: nsc$1,
    nsccue: nsccue$1,
    nsce: nsce$1,
    Nscr: Nscr$1,
    nscr: nscr$1,
    nshortmid: nshortmid$1,
    nshortparallel: nshortparallel$1,
    nsim: nsim$1,
    nsime: nsime$1,
    nsimeq: nsimeq$1,
    nsmid: nsmid$1,
    nspar: nspar$1,
    nsqsube: nsqsube$1,
    nsqsupe: nsqsupe$1,
    nsub: nsub$1,
    nsubE: nsubE$1,
    nsube: nsube$1,
    nsubset: nsubset$1,
    nsubseteq: nsubseteq$1,
    nsubseteqq: nsubseteqq$1,
    nsucc: nsucc$1,
    nsucceq: nsucceq$1,
    nsup: nsup$1,
    nsupE: nsupE$1,
    nsupe: nsupe$1,
    nsupset: nsupset$1,
    nsupseteq: nsupseteq$1,
    nsupseteqq: nsupseteqq$1,
    ntgl: ntgl$1,
    Ntilde: Ntilde$2,
    ntilde: ntilde$2,
    ntlg: ntlg$1,
    ntriangleleft: ntriangleleft$1,
    ntrianglelefteq: ntrianglelefteq$1,
    ntriangleright: ntriangleright$1,
    ntrianglerighteq: ntrianglerighteq$1,
    Nu: Nu$1,
    nu: nu$1,
    num: num$1,
    numero: numero$1,
    numsp: numsp$1,
    nvap: nvap$1,
    nvdash: nvdash$1,
    nvDash: nvDash$1,
    nVdash: nVdash$1,
    nVDash: nVDash$1,
    nvge: nvge$1,
    nvgt: nvgt$1,
    nvHarr: nvHarr$1,
    nvinfin: nvinfin$1,
    nvlArr: nvlArr$1,
    nvle: nvle$1,
    nvlt: nvlt$1,
    nvltrie: nvltrie$1,
    nvrArr: nvrArr$1,
    nvrtrie: nvrtrie$1,
    nvsim: nvsim$1,
    nwarhk: nwarhk$1,
    nwarr: nwarr$1,
    nwArr: nwArr$1,
    nwarrow: nwarrow$1,
    nwnear: nwnear$1,
    Oacute: Oacute$2,
    oacute: oacute$2,
    oast: oast$1,
    Ocirc: Ocirc$2,
    ocirc: ocirc$2,
    ocir: ocir$1,
    Ocy: Ocy$1,
    ocy: ocy$1,
    odash: odash$1,
    Odblac: Odblac$1,
    odblac: odblac$1,
    odiv: odiv$1,
    odot: odot$1,
    odsold: odsold$1,
    OElig: OElig$1,
    oelig: oelig$1,
    ofcir: ofcir$1,
    Ofr: Ofr$1,
    ofr: ofr$1,
    ogon: ogon$1,
    Ograve: Ograve$2,
    ograve: ograve$2,
    ogt: ogt$1,
    ohbar: ohbar$1,
    ohm: ohm$1,
    oint: oint$1,
    olarr: olarr$1,
    olcir: olcir$1,
    olcross: olcross$1,
    oline: oline$1,
    olt: olt$1,
    Omacr: Omacr$1,
    omacr: omacr$1,
    Omega: Omega$1,
    omega: omega$1,
    Omicron: Omicron$1,
    omicron: omicron$1,
    omid: omid$1,
    ominus: ominus$1,
    Oopf: Oopf$1,
    oopf: oopf$1,
    opar: opar$1,
    OpenCurlyDoubleQuote: OpenCurlyDoubleQuote$1,
    OpenCurlyQuote: OpenCurlyQuote$1,
    operp: operp$1,
    oplus: oplus$1,
    orarr: orarr$1,
    Or: Or$1,
    or: or$1,
    ord: ord$1,
    order: order$1,
    orderof: orderof$1,
    ordf: ordf$2,
    ordm: ordm$2,
    origof: origof$1,
    oror: oror$1,
    orslope: orslope$1,
    orv: orv$1,
    oS: oS$1,
    Oscr: Oscr$1,
    oscr: oscr$1,
    Oslash: Oslash$2,
    oslash: oslash$2,
    osol: osol$1,
    Otilde: Otilde$2,
    otilde: otilde$2,
    otimesas: otimesas$1,
    Otimes: Otimes$1,
    otimes: otimes$1,
    Ouml: Ouml$2,
    ouml: ouml$2,
    ovbar: ovbar$1,
    OverBar: OverBar$1,
    OverBrace: OverBrace$1,
    OverBracket: OverBracket$1,
    OverParenthesis: OverParenthesis$1,
    para: para$2,
    parallel: parallel$1,
    par: par$1,
    parsim: parsim$1,
    parsl: parsl$1,
    part: part$1,
    PartialD: PartialD$1,
    Pcy: Pcy$1,
    pcy: pcy$1,
    percnt: percnt$1,
    period: period$1,
    permil: permil$1,
    perp: perp$1,
    pertenk: pertenk$1,
    Pfr: Pfr$1,
    pfr: pfr$1,
    Phi: Phi$1,
    phi: phi$1,
    phiv: phiv$1,
    phmmat: phmmat$1,
    phone: phone$1,
    Pi: Pi$1,
    pi: pi$1,
    pitchfork: pitchfork$1,
    piv: piv$1,
    planck: planck$1,
    planckh: planckh$1,
    plankv: plankv$1,
    plusacir: plusacir$1,
    plusb: plusb$1,
    pluscir: pluscir$1,
    plus: plus$1,
    plusdo: plusdo$1,
    plusdu: plusdu$1,
    pluse: pluse$1,
    PlusMinus: PlusMinus$1,
    plusmn: plusmn$2,
    plussim: plussim$1,
    plustwo: plustwo$1,
    pm: pm$1,
    Poincareplane: Poincareplane$1,
    pointint: pointint$1,
    popf: popf$1,
    Popf: Popf$1,
    pound: pound$2,
    prap: prap$1,
    Pr: Pr$1,
    pr: pr$1,
    prcue: prcue$1,
    precapprox: precapprox$1,
    prec: prec$1,
    preccurlyeq: preccurlyeq$1,
    Precedes: Precedes$1,
    PrecedesEqual: PrecedesEqual$1,
    PrecedesSlantEqual: PrecedesSlantEqual$1,
    PrecedesTilde: PrecedesTilde$1,
    preceq: preceq$1,
    precnapprox: precnapprox$1,
    precneqq: precneqq$1,
    precnsim: precnsim$1,
    pre: pre$1,
    prE: prE$1,
    precsim: precsim$1,
    prime: prime$1,
    Prime: Prime$1,
    primes: primes$1,
    prnap: prnap$1,
    prnE: prnE$1,
    prnsim: prnsim$1,
    prod: prod$1,
    Product: Product$1,
    profalar: profalar$1,
    profline: profline$1,
    profsurf: profsurf$1,
    prop: prop$1,
    Proportional: Proportional$1,
    Proportion: Proportion$1,
    propto: propto$1,
    prsim: prsim$1,
    prurel: prurel$1,
    Pscr: Pscr$1,
    pscr: pscr$1,
    Psi: Psi$1,
    psi: psi$1,
    puncsp: puncsp$1,
    Qfr: Qfr$1,
    qfr: qfr$1,
    qint: qint$1,
    qopf: qopf$1,
    Qopf: Qopf$1,
    qprime: qprime$1,
    Qscr: Qscr$1,
    qscr: qscr$1,
    quaternions: quaternions$1,
    quatint: quatint$1,
    quest: quest$1,
    questeq: questeq$1,
    quot: quot$3,
    QUOT: QUOT$2,
    rAarr: rAarr$1,
    race: race$1,
    Racute: Racute$1,
    racute: racute$1,
    radic: radic$1,
    raemptyv: raemptyv$1,
    rang: rang$1,
    Rang: Rang$1,
    rangd: rangd$1,
    range: range$1,
    rangle: rangle$1,
    raquo: raquo$2,
    rarrap: rarrap$1,
    rarrb: rarrb$1,
    rarrbfs: rarrbfs$1,
    rarrc: rarrc$1,
    rarr: rarr$1,
    Rarr: Rarr$1,
    rArr: rArr$1,
    rarrfs: rarrfs$1,
    rarrhk: rarrhk$1,
    rarrlp: rarrlp$1,
    rarrpl: rarrpl$1,
    rarrsim: rarrsim$1,
    Rarrtl: Rarrtl$1,
    rarrtl: rarrtl$1,
    rarrw: rarrw$1,
    ratail: ratail$1,
    rAtail: rAtail$1,
    ratio: ratio$1,
    rationals: rationals$1,
    rbarr: rbarr$1,
    rBarr: rBarr$1,
    RBarr: RBarr$1,
    rbbrk: rbbrk$1,
    rbrace: rbrace$1,
    rbrack: rbrack$1,
    rbrke: rbrke$1,
    rbrksld: rbrksld$1,
    rbrkslu: rbrkslu$1,
    Rcaron: Rcaron$1,
    rcaron: rcaron$1,
    Rcedil: Rcedil$1,
    rcedil: rcedil$1,
    rceil: rceil$1,
    rcub: rcub$1,
    Rcy: Rcy$1,
    rcy: rcy$1,
    rdca: rdca$1,
    rdldhar: rdldhar$1,
    rdquo: rdquo$1,
    rdquor: rdquor$1,
    rdsh: rdsh$1,
    real: real$1,
    realine: realine$1,
    realpart: realpart$1,
    reals: reals$1,
    Re: Re$1,
    rect: rect$1,
    reg: reg$2,
    REG: REG$2,
    ReverseElement: ReverseElement$1,
    ReverseEquilibrium: ReverseEquilibrium$1,
    ReverseUpEquilibrium: ReverseUpEquilibrium$1,
    rfisht: rfisht$1,
    rfloor: rfloor$1,
    rfr: rfr$1,
    Rfr: Rfr$1,
    rHar: rHar$1,
    rhard: rhard$1,
    rharu: rharu$1,
    rharul: rharul$1,
    Rho: Rho$1,
    rho: rho$1,
    rhov: rhov$1,
    RightAngleBracket: RightAngleBracket$1,
    RightArrowBar: RightArrowBar$1,
    rightarrow: rightarrow$1,
    RightArrow: RightArrow$1,
    Rightarrow: Rightarrow$1,
    RightArrowLeftArrow: RightArrowLeftArrow$1,
    rightarrowtail: rightarrowtail$1,
    RightCeiling: RightCeiling$1,
    RightDoubleBracket: RightDoubleBracket$1,
    RightDownTeeVector: RightDownTeeVector$1,
    RightDownVectorBar: RightDownVectorBar$1,
    RightDownVector: RightDownVector$1,
    RightFloor: RightFloor$1,
    rightharpoondown: rightharpoondown$1,
    rightharpoonup: rightharpoonup$1,
    rightleftarrows: rightleftarrows$1,
    rightleftharpoons: rightleftharpoons$1,
    rightrightarrows: rightrightarrows$1,
    rightsquigarrow: rightsquigarrow$1,
    RightTeeArrow: RightTeeArrow$1,
    RightTee: RightTee$1,
    RightTeeVector: RightTeeVector$1,
    rightthreetimes: rightthreetimes$1,
    RightTriangleBar: RightTriangleBar$1,
    RightTriangle: RightTriangle$1,
    RightTriangleEqual: RightTriangleEqual$1,
    RightUpDownVector: RightUpDownVector$1,
    RightUpTeeVector: RightUpTeeVector$1,
    RightUpVectorBar: RightUpVectorBar$1,
    RightUpVector: RightUpVector$1,
    RightVectorBar: RightVectorBar$1,
    RightVector: RightVector$1,
    ring: ring$1,
    risingdotseq: risingdotseq$1,
    rlarr: rlarr$1,
    rlhar: rlhar$1,
    rlm: rlm$1,
    rmoustache: rmoustache$1,
    rmoust: rmoust$1,
    rnmid: rnmid$1,
    roang: roang$1,
    roarr: roarr$1,
    robrk: robrk$1,
    ropar: ropar$1,
    ropf: ropf$1,
    Ropf: Ropf$1,
    roplus: roplus$1,
    rotimes: rotimes$1,
    RoundImplies: RoundImplies$1,
    rpar: rpar$1,
    rpargt: rpargt$1,
    rppolint: rppolint$1,
    rrarr: rrarr$1,
    Rrightarrow: Rrightarrow$1,
    rsaquo: rsaquo$1,
    rscr: rscr$1,
    Rscr: Rscr$1,
    rsh: rsh$1,
    Rsh: Rsh$1,
    rsqb: rsqb$1,
    rsquo: rsquo$1,
    rsquor: rsquor$1,
    rthree: rthree$1,
    rtimes: rtimes$1,
    rtri: rtri$1,
    rtrie: rtrie$1,
    rtrif: rtrif$1,
    rtriltri: rtriltri$1,
    RuleDelayed: RuleDelayed$1,
    ruluhar: ruluhar$1,
    rx: rx$1,
    Sacute: Sacute$1,
    sacute: sacute$1,
    sbquo: sbquo$1,
    scap: scap$1,
    Scaron: Scaron$1,
    scaron: scaron$1,
    Sc: Sc$1,
    sc: sc$1,
    sccue: sccue$1,
    sce: sce$1,
    scE: scE$1,
    Scedil: Scedil$1,
    scedil: scedil$1,
    Scirc: Scirc$1,
    scirc: scirc$1,
    scnap: scnap$1,
    scnE: scnE$1,
    scnsim: scnsim$1,
    scpolint: scpolint$1,
    scsim: scsim$1,
    Scy: Scy$1,
    scy: scy$1,
    sdotb: sdotb$1,
    sdot: sdot$1,
    sdote: sdote$1,
    searhk: searhk$1,
    searr: searr$1,
    seArr: seArr$1,
    searrow: searrow$1,
    sect: sect$2,
    semi: semi$1,
    seswar: seswar$1,
    setminus: setminus$1,
    setmn: setmn$1,
    sext: sext$1,
    Sfr: Sfr$1,
    sfr: sfr$1,
    sfrown: sfrown$1,
    sharp: sharp$1,
    SHCHcy: SHCHcy$1,
    shchcy: shchcy$1,
    SHcy: SHcy$1,
    shcy: shcy$1,
    ShortDownArrow: ShortDownArrow$1,
    ShortLeftArrow: ShortLeftArrow$1,
    shortmid: shortmid$1,
    shortparallel: shortparallel$1,
    ShortRightArrow: ShortRightArrow$1,
    ShortUpArrow: ShortUpArrow$1,
    shy: shy$2,
    Sigma: Sigma$1,
    sigma: sigma$1,
    sigmaf: sigmaf$1,
    sigmav: sigmav$1,
    sim: sim$1,
    simdot: simdot$1,
    sime: sime$1,
    simeq: simeq$1,
    simg: simg$1,
    simgE: simgE$1,
    siml: siml$1,
    simlE: simlE$1,
    simne: simne$1,
    simplus: simplus$1,
    simrarr: simrarr$1,
    slarr: slarr$1,
    SmallCircle: SmallCircle$1,
    smallsetminus: smallsetminus$1,
    smashp: smashp$1,
    smeparsl: smeparsl$1,
    smid: smid$1,
    smile: smile$1,
    smt: smt$1,
    smte: smte$1,
    smtes: smtes$1,
    SOFTcy: SOFTcy$1,
    softcy: softcy$1,
    solbar: solbar$1,
    solb: solb$1,
    sol: sol$1,
    Sopf: Sopf$1,
    sopf: sopf$1,
    spades: spades$1,
    spadesuit: spadesuit$1,
    spar: spar$1,
    sqcap: sqcap$1,
    sqcaps: sqcaps$1,
    sqcup: sqcup$1,
    sqcups: sqcups$1,
    Sqrt: Sqrt$1,
    sqsub: sqsub$1,
    sqsube: sqsube$1,
    sqsubset: sqsubset$1,
    sqsubseteq: sqsubseteq$1,
    sqsup: sqsup$1,
    sqsupe: sqsupe$1,
    sqsupset: sqsupset$1,
    sqsupseteq: sqsupseteq$1,
    square: square$1,
    Square: Square$1,
    SquareIntersection: SquareIntersection$1,
    SquareSubset: SquareSubset$1,
    SquareSubsetEqual: SquareSubsetEqual$1,
    SquareSuperset: SquareSuperset$1,
    SquareSupersetEqual: SquareSupersetEqual$1,
    SquareUnion: SquareUnion$1,
    squarf: squarf$1,
    squ: squ$1,
    squf: squf$1,
    srarr: srarr$1,
    Sscr: Sscr$1,
    sscr: sscr$1,
    ssetmn: ssetmn$1,
    ssmile: ssmile$1,
    sstarf: sstarf$1,
    Star: Star$1,
    star: star$1,
    starf: starf$1,
    straightepsilon: straightepsilon$1,
    straightphi: straightphi$1,
    strns: strns$1,
    sub: sub$1,
    Sub: Sub$1,
    subdot: subdot$1,
    subE: subE$1,
    sube: sube$1,
    subedot: subedot$1,
    submult: submult$1,
    subnE: subnE$1,
    subne: subne$1,
    subplus: subplus$1,
    subrarr: subrarr$1,
    subset: subset$1,
    Subset: Subset$1,
    subseteq: subseteq$1,
    subseteqq: subseteqq$1,
    SubsetEqual: SubsetEqual$1,
    subsetneq: subsetneq$1,
    subsetneqq: subsetneqq$1,
    subsim: subsim$1,
    subsub: subsub$1,
    subsup: subsup$1,
    succapprox: succapprox$1,
    succ: succ$1,
    succcurlyeq: succcurlyeq$1,
    Succeeds: Succeeds$1,
    SucceedsEqual: SucceedsEqual$1,
    SucceedsSlantEqual: SucceedsSlantEqual$1,
    SucceedsTilde: SucceedsTilde$1,
    succeq: succeq$1,
    succnapprox: succnapprox$1,
    succneqq: succneqq$1,
    succnsim: succnsim$1,
    succsim: succsim$1,
    SuchThat: SuchThat$1,
    sum: sum$1,
    Sum: Sum$1,
    sung: sung$1,
    sup1: sup1$2,
    sup2: sup2$2,
    sup3: sup3$2,
    sup: sup$1,
    Sup: Sup$1,
    supdot: supdot$1,
    supdsub: supdsub$1,
    supE: supE$1,
    supe: supe$1,
    supedot: supedot$1,
    Superset: Superset$1,
    SupersetEqual: SupersetEqual$1,
    suphsol: suphsol$1,
    suphsub: suphsub$1,
    suplarr: suplarr$1,
    supmult: supmult$1,
    supnE: supnE$1,
    supne: supne$1,
    supplus: supplus$1,
    supset: supset$1,
    Supset: Supset$1,
    supseteq: supseteq$1,
    supseteqq: supseteqq$1,
    supsetneq: supsetneq$1,
    supsetneqq: supsetneqq$1,
    supsim: supsim$1,
    supsub: supsub$1,
    supsup: supsup$1,
    swarhk: swarhk$1,
    swarr: swarr$1,
    swArr: swArr$1,
    swarrow: swarrow$1,
    swnwar: swnwar$1,
    szlig: szlig$2,
    Tab: Tab$1,
    target: target$1,
    Tau: Tau$1,
    tau: tau$1,
    tbrk: tbrk$1,
    Tcaron: Tcaron$1,
    tcaron: tcaron$1,
    Tcedil: Tcedil$1,
    tcedil: tcedil$1,
    Tcy: Tcy$1,
    tcy: tcy$1,
    tdot: tdot$1,
    telrec: telrec$1,
    Tfr: Tfr$1,
    tfr: tfr$1,
    there4: there4$1,
    therefore: therefore$1,
    Therefore: Therefore$1,
    Theta: Theta$1,
    theta: theta$1,
    thetasym: thetasym$1,
    thetav: thetav$1,
    thickapprox: thickapprox$1,
    thicksim: thicksim$1,
    ThickSpace: ThickSpace$1,
    ThinSpace: ThinSpace$1,
    thinsp: thinsp$1,
    thkap: thkap$1,
    thksim: thksim$1,
    THORN: THORN$2,
    thorn: thorn$2,
    tilde: tilde$1,
    Tilde: Tilde$1,
    TildeEqual: TildeEqual$1,
    TildeFullEqual: TildeFullEqual$1,
    TildeTilde: TildeTilde$1,
    timesbar: timesbar$1,
    timesb: timesb$1,
    times: times$2,
    timesd: timesd$1,
    tint: tint$1,
    toea: toea$1,
    topbot: topbot$1,
    topcir: topcir$1,
    top: top$1,
    Topf: Topf$1,
    topf: topf$1,
    topfork: topfork$1,
    tosa: tosa$1,
    tprime: tprime$1,
    trade: trade$1,
    TRADE: TRADE$1,
    triangle: triangle$1,
    triangledown: triangledown$1,
    triangleleft: triangleleft$1,
    trianglelefteq: trianglelefteq$1,
    triangleq: triangleq$1,
    triangleright: triangleright$1,
    trianglerighteq: trianglerighteq$1,
    tridot: tridot$1,
    trie: trie$1,
    triminus: triminus$1,
    TripleDot: TripleDot$1,
    triplus: triplus$1,
    trisb: trisb$1,
    tritime: tritime$1,
    trpezium: trpezium$1,
    Tscr: Tscr$1,
    tscr: tscr$1,
    TScy: TScy$1,
    tscy: tscy$1,
    TSHcy: TSHcy$1,
    tshcy: tshcy$1,
    Tstrok: Tstrok$1,
    tstrok: tstrok$1,
    twixt: twixt$1,
    twoheadleftarrow: twoheadleftarrow$1,
    twoheadrightarrow: twoheadrightarrow$1,
    Uacute: Uacute$2,
    uacute: uacute$2,
    uarr: uarr$1,
    Uarr: Uarr$1,
    uArr: uArr$1,
    Uarrocir: Uarrocir$1,
    Ubrcy: Ubrcy$1,
    ubrcy: ubrcy$1,
    Ubreve: Ubreve$1,
    ubreve: ubreve$1,
    Ucirc: Ucirc$2,
    ucirc: ucirc$2,
    Ucy: Ucy$1,
    ucy: ucy$1,
    udarr: udarr$1,
    Udblac: Udblac$1,
    udblac: udblac$1,
    udhar: udhar$1,
    ufisht: ufisht$1,
    Ufr: Ufr$1,
    ufr: ufr$1,
    Ugrave: Ugrave$2,
    ugrave: ugrave$2,
    uHar: uHar$1,
    uharl: uharl$1,
    uharr: uharr$1,
    uhblk: uhblk$1,
    ulcorn: ulcorn$1,
    ulcorner: ulcorner$1,
    ulcrop: ulcrop$1,
    ultri: ultri$1,
    Umacr: Umacr$1,
    umacr: umacr$1,
    uml: uml$2,
    UnderBar: UnderBar$1,
    UnderBrace: UnderBrace$1,
    UnderBracket: UnderBracket$1,
    UnderParenthesis: UnderParenthesis$1,
    Union: Union$1,
    UnionPlus: UnionPlus$1,
    Uogon: Uogon$1,
    uogon: uogon$1,
    Uopf: Uopf$1,
    uopf: uopf$1,
    UpArrowBar: UpArrowBar$1,
    uparrow: uparrow$1,
    UpArrow: UpArrow$1,
    Uparrow: Uparrow$1,
    UpArrowDownArrow: UpArrowDownArrow$1,
    updownarrow: updownarrow$1,
    UpDownArrow: UpDownArrow$1,
    Updownarrow: Updownarrow$1,
    UpEquilibrium: UpEquilibrium$1,
    upharpoonleft: upharpoonleft$1,
    upharpoonright: upharpoonright$1,
    uplus: uplus$1,
    UpperLeftArrow: UpperLeftArrow$1,
    UpperRightArrow: UpperRightArrow$1,
    upsi: upsi$1,
    Upsi: Upsi$1,
    upsih: upsih$1,
    Upsilon: Upsilon$1,
    upsilon: upsilon$1,
    UpTeeArrow: UpTeeArrow$1,
    UpTee: UpTee$1,
    upuparrows: upuparrows$1,
    urcorn: urcorn$1,
    urcorner: urcorner$1,
    urcrop: urcrop$1,
    Uring: Uring$1,
    uring: uring$1,
    urtri: urtri$1,
    Uscr: Uscr$1,
    uscr: uscr$1,
    utdot: utdot$1,
    Utilde: Utilde$1,
    utilde: utilde$1,
    utri: utri$1,
    utrif: utrif$1,
    uuarr: uuarr$1,
    Uuml: Uuml$2,
    uuml: uuml$2,
    uwangle: uwangle$1,
    vangrt: vangrt$1,
    varepsilon: varepsilon$1,
    varkappa: varkappa$1,
    varnothing: varnothing$1,
    varphi: varphi$1,
    varpi: varpi$1,
    varpropto: varpropto$1,
    varr: varr$1,
    vArr: vArr$1,
    varrho: varrho$1,
    varsigma: varsigma$1,
    varsubsetneq: varsubsetneq$1,
    varsubsetneqq: varsubsetneqq$1,
    varsupsetneq: varsupsetneq$1,
    varsupsetneqq: varsupsetneqq$1,
    vartheta: vartheta$1,
    vartriangleleft: vartriangleleft$1,
    vartriangleright: vartriangleright$1,
    vBar: vBar$1,
    Vbar: Vbar$1,
    vBarv: vBarv$1,
    Vcy: Vcy$1,
    vcy: vcy$1,
    vdash: vdash$1,
    vDash: vDash$1,
    Vdash: Vdash$1,
    VDash: VDash$1,
    Vdashl: Vdashl$1,
    veebar: veebar$1,
    vee: vee$1,
    Vee: Vee$1,
    veeeq: veeeq$1,
    vellip: vellip$1,
    verbar: verbar$1,
    Verbar: Verbar$1,
    vert: vert$1,
    Vert: Vert$1,
    VerticalBar: VerticalBar$1,
    VerticalLine: VerticalLine$1,
    VerticalSeparator: VerticalSeparator$1,
    VerticalTilde: VerticalTilde$1,
    VeryThinSpace: VeryThinSpace$1,
    Vfr: Vfr$1,
    vfr: vfr$1,
    vltri: vltri$1,
    vnsub: vnsub$1,
    vnsup: vnsup$1,
    Vopf: Vopf$1,
    vopf: vopf$1,
    vprop: vprop$1,
    vrtri: vrtri$1,
    Vscr: Vscr$1,
    vscr: vscr$1,
    vsubnE: vsubnE$1,
    vsubne: vsubne$1,
    vsupnE: vsupnE$1,
    vsupne: vsupne$1,
    Vvdash: Vvdash$1,
    vzigzag: vzigzag$1,
    Wcirc: Wcirc$1,
    wcirc: wcirc$1,
    wedbar: wedbar$1,
    wedge: wedge$1,
    Wedge: Wedge$1,
    wedgeq: wedgeq$1,
    weierp: weierp$1,
    Wfr: Wfr$1,
    wfr: wfr$1,
    Wopf: Wopf$1,
    wopf: wopf$1,
    wp: wp$1,
    wr: wr$1,
    wreath: wreath$1,
    Wscr: Wscr$1,
    wscr: wscr$1,
    xcap: xcap$1,
    xcirc: xcirc$1,
    xcup: xcup$1,
    xdtri: xdtri$1,
    Xfr: Xfr$1,
    xfr: xfr$1,
    xharr: xharr$1,
    xhArr: xhArr$1,
    Xi: Xi$1,
    xi: xi$1,
    xlarr: xlarr$1,
    xlArr: xlArr$1,
    xmap: xmap$1,
    xnis: xnis$1,
    xodot: xodot$1,
    Xopf: Xopf$1,
    xopf: xopf$1,
    xoplus: xoplus$1,
    xotime: xotime$1,
    xrarr: xrarr$1,
    xrArr: xrArr$1,
    Xscr: Xscr$1,
    xscr: xscr$1,
    xsqcup: xsqcup$1,
    xuplus: xuplus$1,
    xutri: xutri$1,
    xvee: xvee$1,
    xwedge: xwedge$1,
    Yacute: Yacute$2,
    yacute: yacute$2,
    YAcy: YAcy$1,
    yacy: yacy$1,
    Ycirc: Ycirc$1,
    ycirc: ycirc$1,
    Ycy: Ycy$1,
    ycy: ycy$1,
    yen: yen$2,
    Yfr: Yfr$1,
    yfr: yfr$1,
    YIcy: YIcy$1,
    yicy: yicy$1,
    Yopf: Yopf$1,
    yopf: yopf$1,
    Yscr: Yscr$1,
    yscr: yscr$1,
    YUcy: YUcy$1,
    yucy: yucy$1,
    yuml: yuml$2,
    Yuml: Yuml$1,
    Zacute: Zacute$1,
    zacute: zacute$1,
    Zcaron: Zcaron$1,
    zcaron: zcaron$1,
    Zcy: Zcy$1,
    zcy: zcy$1,
    Zdot: Zdot$1,
    zdot: zdot$1,
    zeetrf: zeetrf$1,
    ZeroWidthSpace: ZeroWidthSpace$1,
    Zeta: Zeta$1,
    zeta: zeta$1,
    zfr: zfr$1,
    Zfr: Zfr$1,
    ZHcy: ZHcy$1,
    zhcy: zhcy$1,
    zigrarr: zigrarr$1,
    zopf: zopf$1,
    Zopf: Zopf$1,
    Zscr: Zscr$1,
    zscr: zscr$1,
    zwj: zwj$1,
    zwnj: zwnj$1,
    default: entities$2
});

var Aacute$3 = "Á";
var aacute$3 = "á";
var Acirc$3 = "Â";
var acirc$3 = "â";
var acute$3 = "´";
var AElig$3 = "Æ";
var aelig$3 = "æ";
var Agrave$3 = "À";
var agrave$3 = "à";
var amp$4 = "&";
var AMP$3 = "&";
var Aring$3 = "Å";
var aring$3 = "å";
var Atilde$3 = "Ã";
var atilde$3 = "ã";
var Auml$3 = "Ä";
var auml$3 = "ä";
var brvbar$3 = "¦";
var Ccedil$3 = "Ç";
var ccedil$3 = "ç";
var cedil$3 = "¸";
var cent$3 = "¢";
var copy$3 = "©";
var COPY$3 = "©";
var curren$3 = "¤";
var deg$3 = "°";
var divide$3 = "÷";
var Eacute$3 = "É";
var eacute$3 = "é";
var Ecirc$3 = "Ê";
var ecirc$3 = "ê";
var Egrave$3 = "È";
var egrave$3 = "è";
var ETH$3 = "Ð";
var eth$3 = "ð";
var Euml$3 = "Ë";
var euml$3 = "ë";
var frac12$3 = "½";
var frac14$3 = "¼";
var frac34$3 = "¾";
var gt$4 = ">";
var GT$3 = ">";
var Iacute$3 = "Í";
var iacute$3 = "í";
var Icirc$3 = "Î";
var icirc$3 = "î";
var iexcl$3 = "¡";
var Igrave$3 = "Ì";
var igrave$3 = "ì";
var iquest$3 = "¿";
var Iuml$3 = "Ï";
var iuml$3 = "ï";
var laquo$3 = "«";
var lt$4 = "<";
var LT$3 = "<";
var macr$3 = "¯";
var micro$3 = "µ";
var middot$3 = "·";
var nbsp$3 = " ";
var not$3 = "¬";
var Ntilde$3 = "Ñ";
var ntilde$3 = "ñ";
var Oacute$3 = "Ó";
var oacute$3 = "ó";
var Ocirc$3 = "Ô";
var ocirc$3 = "ô";
var Ograve$3 = "Ò";
var ograve$3 = "ò";
var ordf$3 = "ª";
var ordm$3 = "º";
var Oslash$3 = "Ø";
var oslash$3 = "ø";
var Otilde$3 = "Õ";
var otilde$3 = "õ";
var Ouml$3 = "Ö";
var ouml$3 = "ö";
var para$3 = "¶";
var plusmn$3 = "±";
var pound$3 = "£";
var quot$4 = "\"";
var QUOT$3 = "\"";
var raquo$3 = "»";
var reg$3 = "®";
var REG$3 = "®";
var sect$3 = "§";
var shy$3 = "­";
var sup1$3 = "¹";
var sup2$3 = "²";
var sup3$3 = "³";
var szlig$3 = "ß";
var THORN$3 = "Þ";
var thorn$3 = "þ";
var times$3 = "×";
var Uacute$3 = "Ú";
var uacute$3 = "ú";
var Ucirc$3 = "Û";
var ucirc$3 = "û";
var Ugrave$3 = "Ù";
var ugrave$3 = "ù";
var uml$3 = "¨";
var Uuml$3 = "Ü";
var uuml$3 = "ü";
var Yacute$3 = "Ý";
var yacute$3 = "ý";
var yen$3 = "¥";
var yuml$3 = "ÿ";
var legacy$2 = {
	Aacute: Aacute$3,
	aacute: aacute$3,
	Acirc: Acirc$3,
	acirc: acirc$3,
	acute: acute$3,
	AElig: AElig$3,
	aelig: aelig$3,
	Agrave: Agrave$3,
	agrave: agrave$3,
	amp: amp$4,
	AMP: AMP$3,
	Aring: Aring$3,
	aring: aring$3,
	Atilde: Atilde$3,
	atilde: atilde$3,
	Auml: Auml$3,
	auml: auml$3,
	brvbar: brvbar$3,
	Ccedil: Ccedil$3,
	ccedil: ccedil$3,
	cedil: cedil$3,
	cent: cent$3,
	copy: copy$3,
	COPY: COPY$3,
	curren: curren$3,
	deg: deg$3,
	divide: divide$3,
	Eacute: Eacute$3,
	eacute: eacute$3,
	Ecirc: Ecirc$3,
	ecirc: ecirc$3,
	Egrave: Egrave$3,
	egrave: egrave$3,
	ETH: ETH$3,
	eth: eth$3,
	Euml: Euml$3,
	euml: euml$3,
	frac12: frac12$3,
	frac14: frac14$3,
	frac34: frac34$3,
	gt: gt$4,
	GT: GT$3,
	Iacute: Iacute$3,
	iacute: iacute$3,
	Icirc: Icirc$3,
	icirc: icirc$3,
	iexcl: iexcl$3,
	Igrave: Igrave$3,
	igrave: igrave$3,
	iquest: iquest$3,
	Iuml: Iuml$3,
	iuml: iuml$3,
	laquo: laquo$3,
	lt: lt$4,
	LT: LT$3,
	macr: macr$3,
	micro: micro$3,
	middot: middot$3,
	nbsp: nbsp$3,
	not: not$3,
	Ntilde: Ntilde$3,
	ntilde: ntilde$3,
	Oacute: Oacute$3,
	oacute: oacute$3,
	Ocirc: Ocirc$3,
	ocirc: ocirc$3,
	Ograve: Ograve$3,
	ograve: ograve$3,
	ordf: ordf$3,
	ordm: ordm$3,
	Oslash: Oslash$3,
	oslash: oslash$3,
	Otilde: Otilde$3,
	otilde: otilde$3,
	Ouml: Ouml$3,
	ouml: ouml$3,
	para: para$3,
	plusmn: plusmn$3,
	pound: pound$3,
	quot: quot$4,
	QUOT: QUOT$3,
	raquo: raquo$3,
	reg: reg$3,
	REG: REG$3,
	sect: sect$3,
	shy: shy$3,
	sup1: sup1$3,
	sup2: sup2$3,
	sup3: sup3$3,
	szlig: szlig$3,
	THORN: THORN$3,
	thorn: thorn$3,
	times: times$3,
	Uacute: Uacute$3,
	uacute: uacute$3,
	Ucirc: Ucirc$3,
	ucirc: ucirc$3,
	Ugrave: Ugrave$3,
	ugrave: ugrave$3,
	uml: uml$3,
	Uuml: Uuml$3,
	uuml: uuml$3,
	Yacute: Yacute$3,
	yacute: yacute$3,
	yen: yen$3,
	yuml: yuml$3
};

var legacy$3 = /*#__PURE__*/Object.freeze({
    Aacute: Aacute$3,
    aacute: aacute$3,
    Acirc: Acirc$3,
    acirc: acirc$3,
    acute: acute$3,
    AElig: AElig$3,
    aelig: aelig$3,
    Agrave: Agrave$3,
    agrave: agrave$3,
    amp: amp$4,
    AMP: AMP$3,
    Aring: Aring$3,
    aring: aring$3,
    Atilde: Atilde$3,
    atilde: atilde$3,
    Auml: Auml$3,
    auml: auml$3,
    brvbar: brvbar$3,
    Ccedil: Ccedil$3,
    ccedil: ccedil$3,
    cedil: cedil$3,
    cent: cent$3,
    copy: copy$3,
    COPY: COPY$3,
    curren: curren$3,
    deg: deg$3,
    divide: divide$3,
    Eacute: Eacute$3,
    eacute: eacute$3,
    Ecirc: Ecirc$3,
    ecirc: ecirc$3,
    Egrave: Egrave$3,
    egrave: egrave$3,
    ETH: ETH$3,
    eth: eth$3,
    Euml: Euml$3,
    euml: euml$3,
    frac12: frac12$3,
    frac14: frac14$3,
    frac34: frac34$3,
    gt: gt$4,
    GT: GT$3,
    Iacute: Iacute$3,
    iacute: iacute$3,
    Icirc: Icirc$3,
    icirc: icirc$3,
    iexcl: iexcl$3,
    Igrave: Igrave$3,
    igrave: igrave$3,
    iquest: iquest$3,
    Iuml: Iuml$3,
    iuml: iuml$3,
    laquo: laquo$3,
    lt: lt$4,
    LT: LT$3,
    macr: macr$3,
    micro: micro$3,
    middot: middot$3,
    nbsp: nbsp$3,
    not: not$3,
    Ntilde: Ntilde$3,
    ntilde: ntilde$3,
    Oacute: Oacute$3,
    oacute: oacute$3,
    Ocirc: Ocirc$3,
    ocirc: ocirc$3,
    Ograve: Ograve$3,
    ograve: ograve$3,
    ordf: ordf$3,
    ordm: ordm$3,
    Oslash: Oslash$3,
    oslash: oslash$3,
    Otilde: Otilde$3,
    otilde: otilde$3,
    Ouml: Ouml$3,
    ouml: ouml$3,
    para: para$3,
    plusmn: plusmn$3,
    pound: pound$3,
    quot: quot$4,
    QUOT: QUOT$3,
    raquo: raquo$3,
    reg: reg$3,
    REG: REG$3,
    sect: sect$3,
    shy: shy$3,
    sup1: sup1$3,
    sup2: sup2$3,
    sup3: sup3$3,
    szlig: szlig$3,
    THORN: THORN$3,
    thorn: thorn$3,
    times: times$3,
    Uacute: Uacute$3,
    uacute: uacute$3,
    Ucirc: Ucirc$3,
    ucirc: ucirc$3,
    Ugrave: Ugrave$3,
    ugrave: ugrave$3,
    uml: uml$3,
    Uuml: Uuml$3,
    uuml: uuml$3,
    Yacute: Yacute$3,
    yacute: yacute$3,
    yen: yen$3,
    yuml: yuml$3,
    default: legacy$2
});

var amp$5 = "&";
var apos$3 = "'";
var gt$5 = ">";
var lt$5 = "<";
var quot$5 = "\"";
var xml$2 = {
	amp: amp$5,
	apos: apos$3,
	gt: gt$5,
	lt: lt$5,
	quot: quot$5
};

var xml$3 = /*#__PURE__*/Object.freeze({
    amp: amp$5,
    apos: apos$3,
    gt: gt$5,
    lt: lt$5,
    quot: quot$5,
    default: xml$2
});

var decode$2 = {
	"0": 65533,
	"128": 8364,
	"130": 8218,
	"131": 402,
	"132": 8222,
	"133": 8230,
	"134": 8224,
	"135": 8225,
	"136": 710,
	"137": 8240,
	"138": 352,
	"139": 8249,
	"140": 338,
	"142": 381,
	"145": 8216,
	"146": 8217,
	"147": 8220,
	"148": 8221,
	"149": 8226,
	"150": 8211,
	"151": 8212,
	"152": 732,
	"153": 8482,
	"154": 353,
	"155": 8250,
	"156": 339,
	"158": 382,
	"159": 376
};

var decode$3 = /*#__PURE__*/Object.freeze({
    default: decode$2
});

var require$$0 = getCjsExportFromNamespace(decode$3);

var decode_codepoint$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(require$$0);
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;
});

unwrapExports(decode_codepoint$1);

var require$$1 = getCjsExportFromNamespace(entities$3);

var require$$1$1 = getCjsExportFromNamespace(legacy$3);

var require$$0$1 = getCjsExportFromNamespace(xml$3);

var decode$4 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(require$$1);
var legacy_json_1 = __importDefault(require$$1$1);
var xml_json_1 = __importDefault(require$$0$1);
var decode_codepoint_1 = __importDefault(decode_codepoint$1);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}
});

unwrapExports(decode$4);
var decode_1 = decode$4.decodeHTML;
var decode_2 = decode$4.decodeHTMLStrict;
var decode_3 = decode$4.decodeXML;

var encode = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require$$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}
});

unwrapExports(encode);
var encode_1 = encode.escapeUTF8;
var encode_2 = encode.escape;
var encode_3 = encode.encodeNonAsciiHTML;
var encode_4 = encode.encodeHTML;
var encode_5 = encode.encodeXML;

var lib$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;


/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode$4.decodeXML : decode$4.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode$4.decodeXML : decode$4.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode$$1(data, level) {
    return (!level || level <= 0 ? encode.encodeXML : encode.encodeHTML)(data);
}
exports.encode = encode$$1;
var encode_2 = encode;
Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
var decode_2 = decode$4;
Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });
});

unwrapExports(lib$1);
var lib_1$1 = lib$1.decodeXMLStrict;
var lib_2$1 = lib$1.decodeHTML5Strict;
var lib_3$1 = lib$1.decodeHTML4Strict;
var lib_4$1 = lib$1.decodeHTML5;
var lib_5$1 = lib$1.decodeHTML4;
var lib_6$1 = lib$1.decodeHTMLStrict;
var lib_7$1 = lib$1.decodeHTML;
var lib_8$1 = lib$1.decodeXML;
var lib_9$1 = lib$1.encodeHTML5;
var lib_10$1 = lib$1.encodeHTML4;
var lib_11 = lib$1.escapeUTF8;
var lib_12 = lib$1.escape;
var lib_13 = lib$1.encodeNonAsciiHTML;
var lib_14 = lib$1.encodeHTML;
var lib_15 = lib$1.encodeXML;
var lib_16 = lib$1.encode;
var lib_17 = lib$1.decodeStrict;
var lib_18 = lib$1.decode;

var elementNames = {
	altglyph: "altGlyph",
	altglyphdef: "altGlyphDef",
	altglyphitem: "altGlyphItem",
	animatecolor: "animateColor",
	animatemotion: "animateMotion",
	animatetransform: "animateTransform",
	clippath: "clipPath",
	feblend: "feBlend",
	fecolormatrix: "feColorMatrix",
	fecomponenttransfer: "feComponentTransfer",
	fecomposite: "feComposite",
	feconvolvematrix: "feConvolveMatrix",
	fediffuselighting: "feDiffuseLighting",
	fedisplacementmap: "feDisplacementMap",
	fedistantlight: "feDistantLight",
	fedropshadow: "feDropShadow",
	feflood: "feFlood",
	fefunca: "feFuncA",
	fefuncb: "feFuncB",
	fefuncg: "feFuncG",
	fefuncr: "feFuncR",
	fegaussianblur: "feGaussianBlur",
	feimage: "feImage",
	femerge: "feMerge",
	femergenode: "feMergeNode",
	femorphology: "feMorphology",
	feoffset: "feOffset",
	fepointlight: "fePointLight",
	fespecularlighting: "feSpecularLighting",
	fespotlight: "feSpotLight",
	fetile: "feTile",
	feturbulence: "feTurbulence",
	foreignobject: "foreignObject",
	glyphref: "glyphRef",
	lineargradient: "linearGradient",
	radialgradient: "radialGradient",
	textpath: "textPath"
};
var attributeNames = {
	definitionurl: "definitionURL",
	attributename: "attributeName",
	attributetype: "attributeType",
	basefrequency: "baseFrequency",
	baseprofile: "baseProfile",
	calcmode: "calcMode",
	clippathunits: "clipPathUnits",
	diffuseconstant: "diffuseConstant",
	edgemode: "edgeMode",
	filterunits: "filterUnits",
	glyphref: "glyphRef",
	gradienttransform: "gradientTransform",
	gradientunits: "gradientUnits",
	kernelmatrix: "kernelMatrix",
	kernelunitlength: "kernelUnitLength",
	keypoints: "keyPoints",
	keysplines: "keySplines",
	keytimes: "keyTimes",
	lengthadjust: "lengthAdjust",
	limitingconeangle: "limitingConeAngle",
	markerheight: "markerHeight",
	markerunits: "markerUnits",
	markerwidth: "markerWidth",
	maskcontentunits: "maskContentUnits",
	maskunits: "maskUnits",
	numoctaves: "numOctaves",
	pathlength: "pathLength",
	patterncontentunits: "patternContentUnits",
	patterntransform: "patternTransform",
	patternunits: "patternUnits",
	pointsatx: "pointsAtX",
	pointsaty: "pointsAtY",
	pointsatz: "pointsAtZ",
	preservealpha: "preserveAlpha",
	preserveaspectratio: "preserveAspectRatio",
	primitiveunits: "primitiveUnits",
	refx: "refX",
	refy: "refY",
	repeatcount: "repeatCount",
	repeatdur: "repeatDur",
	requiredextensions: "requiredExtensions",
	requiredfeatures: "requiredFeatures",
	specularconstant: "specularConstant",
	specularexponent: "specularExponent",
	spreadmethod: "spreadMethod",
	startoffset: "startOffset",
	stddeviation: "stdDeviation",
	stitchtiles: "stitchTiles",
	surfacescale: "surfaceScale",
	systemlanguage: "systemLanguage",
	tablevalues: "tableValues",
	targetx: "targetX",
	targety: "targetY",
	textlength: "textLength",
	viewbox: "viewBox",
	viewtarget: "viewTarget",
	xchannelselector: "xChannelSelector",
	ychannelselector: "yChannelSelector",
	zoomandpan: "zoomAndPan"
};
var foreignNames = {
	elementNames: elementNames,
	attributeNames: attributeNames
};

var foreignNames$1 = /*#__PURE__*/Object.freeze({
    elementNames: elementNames,
    attributeNames: attributeNames,
    default: foreignNames
});

var foreignNames$2 = getCjsExportFromNamespace(foreignNames$1);

var domSerializer = createCommonjsModule(function (module) {
/*
  Module dependencies
*/



/* mixed-case SVG and MathML tags & attributes
   recognized by the HTML parser, see
   https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
*/

foreignNames$2.elementNames.__proto__ = null; /* use as a simple dictionary */
foreignNames$2.attributeNames.__proto__ = null;

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '';
  var value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case attribute names */
      key = foreignNames$2.attributeNames[key] || key;
    }
    output += key;
    if ((value !== null && value !== '') || opts.xmlMode) {
      output +=
        '="' +
        (opts.decodeEntities
          ? lib$1.encodeXML(value)
          : value.replace(/\"/g, '&quot;')) +
        '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};

var render = (module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for (var i = 0; i < dom.length; i++) {
    var elem = dom[i];

    if (elem.type === 'root') output += render(elem.children, opts);
    else if (lib.isTag(elem)) output += renderTag(elem, opts);
    else if (elem.type === lib.Directive)
      output += renderDirective(elem);
    else if (elem.type === lib.Comment) output += renderComment(elem);
    else if (elem.type === lib.CDATA) output += renderCdata(elem);
    else output += renderText(elem, opts);
  }

  return output;
});

var foreignModeIntegrationPoints = [
  'mi',
  'mo',
  'mn',
  'ms',
  'mtext',
  'annotation-xml',
  'foreignObject',
  'desc',
  'title'
];

function renderTag(elem, opts) {
  // Handle SVG / MathML in HTML
  if (opts.xmlMode === 'foreign') {
    /* fix up mixed-case element names */
    elem.name = foreignNames$2.elementNames[elem.name] || elem.name;
    /* exit foreign mode at integration points */
    if (
      elem.parent &&
      foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0
    )
      opts = Object.assign({}, opts, { xmlMode: false });
  }
  if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
    opts = Object.assign({}, opts, { xmlMode: 'foreign' });
  }

  var tag = '<' + elem.name;
  var attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (
    opts.decodeEntities &&
    !(elem.parent && elem.parent.name in unencodedElements)
  ) {
    data = lib$1.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}
});

var isTag = domelementtype.isTag;

var stringify = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: domSerializer,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return domSerializer(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
	if(elem.type === domelementtype.CDATA) return getText(elem.children);
	if(elem.type === domelementtype.Text) return elem.data;
	return "";
}

var traversal = createCommonjsModule(function (module, exports) {
var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};
});
var traversal_1 = traversal.getChildren;
var traversal_2 = traversal.getParent;
var traversal_3 = traversal.getSiblings;
var traversal_4 = traversal.getAttributeValue;
var traversal_5 = traversal.hasAttrib;
var traversal_6 = traversal.getName;

var removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

var replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

var appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

var append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

var prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};

var manipulation = {
	removeElement: removeElement,
	replaceElement: replaceElement,
	appendChild: appendChild,
	append: append,
	prepend: prepend
};

var isTag$1 = domelementtype.isTag;

var querying = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag$1(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag$1(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, rootElems){
	var result = [];
	var stack = rootElems.slice();
	while(stack.length){
		var elem = stack.shift();
		if(!isTag$1(elem)) continue;
		if (elem.children && elem.children.length > 0) {
			stack.unshift.apply(stack, elem.children);
		}
		if(test(elem)) result.push(elem);
	}
	return result;
}

var legacy$4 = createCommonjsModule(function (module, exports) {
var isTag = exports.isTag = domelementtype.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};
});
var legacy_1 = legacy$4.isTag;
var legacy_2 = legacy$4.testElement;
var legacy_3 = legacy$4.getElements;
var legacy_4 = legacy$4.getElementById;
var legacy_5 = legacy$4.getElementsByTagName;
var legacy_6 = legacy$4.getElementsByTagType;

var helpers = createCommonjsModule(function (module, exports) {
// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};
});
var helpers_1 = helpers.removeSubsets;
var helpers_2 = helpers.compareDocumentPosition;
var helpers_3 = helpers.uniqueSort;

var domutils = createCommonjsModule(function (module) {
var DomUtils = module.exports;

[
	stringify,
	traversal,
	manipulation,
	querying,
	legacy$4,
	helpers
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});
});

//TODO: make this a streamable handler
function FeedHandler(callback, options) {
    this.init(callback, options);
}

inherits(FeedHandler, domhandler);

FeedHandler.prototype.init = domhandler;

function getElements(what, where) {
    return domutils.getElementsByTagName(what, where, true);
}
function getOneElement(what, where) {
    return domutils.getElementsByTagName(what, where, true, 1)[0];
}
function fetch(what, where, recurse) {
    return domutils.getText(
        domutils.getElementsByTagName(what, where, recurse, 1)
    ).trim();
}

function addConditionally(obj, prop, what, where, recurse) {
    var tmp = fetch(what, where, recurse);
    if (tmp) obj[prop] = tmp;
}

var isValidFeed = function(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
};

FeedHandler.prototype.onend = function() {
    var feed = {},
        feedRoot = getOneElement(isValidFeed, this.dom),
        tmp,
        childs;

    if (feedRoot) {
        if (feedRoot.name === "feed") {
            childs = feedRoot.children;

            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            if (
                (tmp = getOneElement("link", childs)) &&
                (tmp = tmp.attribs) &&
                (tmp = tmp.href)
            )
                feed.link = tmp;
            addConditionally(feed, "description", "subtitle", childs);
            if ((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
            addConditionally(feed, "author", "email", childs, true);

            feed.items = getElements("entry", childs).map(function(item) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "id", item);
                addConditionally(entry, "title", "title", item);
                if (
                    (tmp = getOneElement("link", item)) &&
                    (tmp = tmp.attribs) &&
                    (tmp = tmp.href)
                )
                    entry.link = tmp;
                if ((tmp = fetch("summary", item) || fetch("content", item)))
                    entry.description = tmp;
                if ((tmp = fetch("updated", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        } else {
            childs = getOneElement("channel", feedRoot.children).children;

            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            if ((tmp = fetch("lastBuildDate", childs)))
                feed.updated = new Date(tmp);
            addConditionally(feed, "author", "managingEditor", childs, true);

            feed.items = getElements("item", feedRoot.children).map(function(
                item
            ) {
                var entry = {},
                    tmp;

                item = item.children;

                addConditionally(entry, "id", "guid", item);
                addConditionally(entry, "title", "title", item);
                addConditionally(entry, "link", "link", item);
                addConditionally(entry, "description", "description", item);
                if ((tmp = fetch("pubDate", item)))
                    entry.pubDate = new Date(tmp);
                return entry;
            });
        }
    }
    this.dom = feed;
    domhandler.prototype._handleCallback.call(
        this,
        feedRoot ? null : Error("couldn't find root of feed")
    );
};

var FeedHandler_1 = FeedHandler;

var stream$1 = stream;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Buffer = buffer.Buffer;

var inspect = util.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

var buffer_list =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream$$1, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream$$1._readableState;
  var wState = stream$$1._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream$$1.destroy(err);else stream$$1.emit('error', err);
}

var destroy_1 = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};

const codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage (arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message
    } else {
      return message(arg1, arg2, arg3)
    }
  }

  class NodeError extends Base {
    constructor (arg1, arg2, arg3) {
      super(getMessage(arg1, arg2, arg3));
    }
  }

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;

  codes[code] = NodeError;
}

// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    const len = expected.length;
    expected = expected.map((i) => String(i));
    if (len > 2) {
      return `one of ${thing} ${expected.slice(0, len - 1).join(', ')}, or ` +
             expected[len - 1];
    } else if (len === 2) {
      return `one of ${thing} ${expected[0]} or ${expected[1]}`;
    } else {
      return `of ${thing} ${expected[0]}`;
    }
  } else {
    return `of ${thing} ${String(expected)}`;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
function startsWith(str, search, pos) {
	return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
function endsWith(str, search, this_len) {
	if (this_len === undefined || this_len > str.length) {
		this_len = str.length;
	}
	return str.substring(this_len - search.length, this_len) === search;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"'
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  let determiner;
  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  let msg;
  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = `The ${name} ${determiner} ${oneOf(expected, 'type')}`;
  } else {
    const type = includes(name, '.') ? 'property' : 'argument';
    msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, 'type')}`;
  }

  msg += `. Received type ${typeof actual}`;
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented'
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');

var codes_1 = codes;

var errors = {
	codes: codes_1
};

var ERR_INVALID_OPT_VALUE = errors.codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

var state = {
  getHighWaterMark: getHighWaterMark
};

/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

var node$1 = util.deprecate;

var _stream_writable = Writable;
// there will be only 2 of these for each stream


function CorkedRequest(state$$1) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state$$1);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: node$1
};
/*</replacement>*/

/*<replacement>*/


/*</replacement>*/


var Buffer$1 = buffer.Buffer;

var OurUint8Array = commonjsGlobal.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer$1.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer$1.isBuffer(obj) || obj instanceof OurUint8Array;
}



var getHighWaterMark$1 = state.getHighWaterMark;

var _require$codes = errors.codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy$1 = destroy_1.errorOrDestroy;

inherits(Writable, stream$1);

function nop() {}

function WritableState(options, stream$$1, isDuplex) {
  Duplex = Duplex || _stream_duplex;
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream$$1 instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark$1(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream$$1, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || _stream_duplex; // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  stream$1.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy$1(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream$$1, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy$1(stream$$1, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream$$1, state$$1, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state$$1.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy$1(stream$$1, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state$$1 = this._writableState;
  var ret = false;

  var isBuf = !state$$1.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer$1.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state$$1.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state$$1.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state$$1, chunk, cb)) {
    state$$1.pendingcb++;
    ret = writeOrBuffer(this, state$$1, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state$$1 = this._writableState;

  if (state$$1.corked) {
    state$$1.corked--;
    if (!state$$1.writing && !state$$1.corked && !state$$1.bufferProcessing && state$$1.bufferedRequest) clearBuffer(this, state$$1);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state$$1, chunk, encoding) {
  if (!state$$1.objectMode && state$$1.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer$1.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream$$1, state$$1, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state$$1, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state$$1.objectMode ? 1 : chunk.length;
  state$$1.length += len;
  var ret = state$$1.length < state$$1.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state$$1.needDrain = true;

  if (state$$1.writing || state$$1.corked) {
    var last = state$$1.lastBufferedRequest;
    state$$1.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state$$1.lastBufferedRequest;
    } else {
      state$$1.bufferedRequest = state$$1.lastBufferedRequest;
    }

    state$$1.bufferedRequestCount += 1;
  } else {
    doWrite(stream$$1, state$$1, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream$$1, state$$1, writev, len, chunk, encoding, cb) {
  state$$1.writelen = len;
  state$$1.writecb = cb;
  state$$1.writing = true;
  state$$1.sync = true;
  if (state$$1.destroyed) state$$1.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream$$1._writev(chunk, state$$1.onwrite);else stream$$1._write(chunk, encoding, state$$1.onwrite);
  state$$1.sync = false;
}

function onwriteError(stream$$1, state$$1, sync, er, cb) {
  --state$$1.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream$$1, state$$1);
    stream$$1._writableState.errorEmitted = true;
    errorOrDestroy$1(stream$$1, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream$$1._writableState.errorEmitted = true;
    errorOrDestroy$1(stream$$1, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream$$1, state$$1);
  }
}

function onwriteStateUpdate(state$$1) {
  state$$1.writing = false;
  state$$1.writecb = null;
  state$$1.length -= state$$1.writelen;
  state$$1.writelen = 0;
}

function onwrite(stream$$1, er) {
  var state$$1 = stream$$1._writableState;
  var sync = state$$1.sync;
  var cb = state$$1.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state$$1);
  if (er) onwriteError(stream$$1, state$$1, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state$$1) || stream$$1.destroyed;

    if (!finished && !state$$1.corked && !state$$1.bufferProcessing && state$$1.bufferedRequest) {
      clearBuffer(stream$$1, state$$1);
    }

    if (sync) {
      process.nextTick(afterWrite, stream$$1, state$$1, finished, cb);
    } else {
      afterWrite(stream$$1, state$$1, finished, cb);
    }
  }
}

function afterWrite(stream$$1, state$$1, finished, cb) {
  if (!finished) onwriteDrain(stream$$1, state$$1);
  state$$1.pendingcb--;
  cb();
  finishMaybe(stream$$1, state$$1);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream$$1, state$$1) {
  if (state$$1.length === 0 && state$$1.needDrain) {
    state$$1.needDrain = false;
    stream$$1.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream$$1, state$$1) {
  state$$1.bufferProcessing = true;
  var entry = state$$1.bufferedRequest;

  if (stream$$1._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state$$1.bufferedRequestCount;
    var buffer$$1 = new Array(l);
    var holder = state$$1.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer$$1[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer$$1.allBuffers = allBuffers;
    doWrite(stream$$1, state$$1, true, state$$1.length, buffer$$1, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state$$1.pendingcb++;
    state$$1.lastBufferedRequest = null;

    if (holder.next) {
      state$$1.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state$$1.corkedRequestsFree = new CorkedRequest(state$$1);
    }

    state$$1.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state$$1.objectMode ? 1 : chunk.length;
      doWrite(stream$$1, state$$1, false, len, chunk, encoding, cb);
      entry = entry.next;
      state$$1.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state$$1.writing) {
        break;
      }
    }

    if (entry === null) state$$1.lastBufferedRequest = null;
  }

  state$$1.bufferedRequest = entry;
  state$$1.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state$$1 = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state$$1.corked) {
    state$$1.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state$$1.ending) endWritable(this, state$$1, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state$$1) {
  return state$$1.ending && state$$1.length === 0 && state$$1.bufferedRequest === null && !state$$1.finished && !state$$1.writing;
}

function callFinal(stream$$1, state$$1) {
  stream$$1._final(function (err) {
    state$$1.pendingcb--;

    if (err) {
      errorOrDestroy$1(stream$$1, err);
    }

    state$$1.prefinished = true;
    stream$$1.emit('prefinish');
    finishMaybe(stream$$1, state$$1);
  });
}

function prefinish(stream$$1, state$$1) {
  if (!state$$1.prefinished && !state$$1.finalCalled) {
    if (typeof stream$$1._final === 'function' && !state$$1.destroyed) {
      state$$1.pendingcb++;
      state$$1.finalCalled = true;
      process.nextTick(callFinal, stream$$1, state$$1);
    } else {
      state$$1.prefinished = true;
      stream$$1.emit('prefinish');
    }
  }
}

function finishMaybe(stream$$1, state$$1) {
  var need = needFinish(state$$1);

  if (need) {
    prefinish(stream$$1, state$$1);

    if (state$$1.pendingcb === 0) {
      state$$1.finished = true;
      stream$$1.emit('finish');

      if (state$$1.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream$$1._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream$$1.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream$$1, state$$1, cb) {
  state$$1.ending = true;
  finishMaybe(stream$$1, state$$1);

  if (cb) {
    if (state$$1.finished) process.nextTick(cb);else stream$$1.once('finish', cb);
  }

  state$$1.ended = true;
  stream$$1.writable = false;
}

function onCorkedFinish(corkReq, state$$1, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state$$1.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state$$1.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroy_1.destroy;
Writable.prototype._undestroy = destroy_1.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


var _stream_duplex = Duplex$1;





inherits(Duplex$1, _stream_readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(_stream_writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex$1.prototype[method]) Duplex$1.prototype[method] = _stream_writable.prototype[method];
  }
}

function Duplex$1(options) {
  if (!(this instanceof Duplex$1)) return new Duplex$1(options);
  _stream_readable.call(this, options);
  _stream_writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex$1.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex$1.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex$1.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex$1.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

var safeBuffer = createCommonjsModule(function (module, exports) {
/* eslint-disable node/no-deprecated-api */

var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
};
});
var safeBuffer_1 = safeBuffer.Buffer;

/*<replacement>*/

var Buffer$2 = safeBuffer.Buffer;
/*</replacement>*/

var isEncoding = Buffer$2.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}
// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer$2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var StringDecoder_1 = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$2.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

var string_decoder = {
	StringDecoder: StringDecoder_1
};

var ERR_STREAM_PREMATURE_CLOSE = errors.codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream$$1) {
  return stream$$1.setHeader && typeof stream$$1.abort === 'function';
}

function eos(stream$$1, opts, callback) {
  if (typeof opts === 'function') return eos(stream$$1, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream$$1.readable;
  var writable = opts.writable || opts.writable !== false && stream$$1.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream$$1.writable) onfinish();
  };

  var writableEnded = stream$$1._writableState && stream$$1._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream$$1);
  };

  var readableEnded = stream$$1._readableState && stream$$1._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream$$1);
  };

  var onerror = function onerror(err) {
    callback.call(stream$$1, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream$$1._readableState || !stream$$1._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream$$1, err);
    }

    if (writable && !writableEnded) {
      if (!stream$$1._writableState || !stream$$1._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream$$1, err);
    }
  };

  var onrequest = function onrequest() {
    stream$$1.req.on('finish', onfinish);
  };

  if (isRequest(stream$$1)) {
    stream$$1.on('complete', onfinish);
    stream$$1.on('abort', onclose);
    if (stream$$1.req) onrequest();else stream$$1.on('request', onrequest);
  } else if (writable && !stream$$1._writableState) {
    // legacy streams
    stream$$1.on('end', onlegacyfinish);
    stream$$1.on('close', onlegacyfinish);
  }

  stream$$1.on('end', onend);
  stream$$1.on('finish', onfinish);
  if (opts.error !== false) stream$$1.on('error', onerror);
  stream$$1.on('close', onclose);
  return function () {
    stream$$1.removeListener('complete', onfinish);
    stream$$1.removeListener('abort', onclose);
    stream$$1.removeListener('request', onrequest);
    if (stream$$1.req) stream$$1.req.removeListener('finish', onfinish);
    stream$$1.removeListener('end', onlegacyfinish);
    stream$$1.removeListener('close', onlegacyfinish);
    stream$$1.removeListener('finish', onfinish);
    stream$$1.removeListener('end', onend);
    stream$$1.removeListener('error', onerror);
    stream$$1.removeListener('close', onclose);
  };
}

var endOfStream = eos;

var _Object$setPrototypeO;

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty$1(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty$1(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream$$1) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty$1(_Object$create, kStream, {
    value: stream$$1,
    writable: true
  }), _defineProperty$1(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty$1(_Object$create, kEnded, {
    value: stream$$1._readableState.endEmitted,
    writable: true
  }), _defineProperty$1(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  endOfStream(stream$$1, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream$$1.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

var async_iterator = createReadableStreamAsyncIterator;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ERR_INVALID_ARG_TYPE$1 = errors.codes.ERR_INVALID_ARG_TYPE;

function from(Readable, iterable, opts) {
  var iterator;

  if (iterable && typeof iterable.next === 'function') {
    iterator = iterable;
  } else if (iterable && iterable[Symbol.asyncIterator]) iterator = iterable[Symbol.asyncIterator]();else if (iterable && iterable[Symbol.iterator]) iterator = iterable[Symbol.iterator]();else throw new ERR_INVALID_ARG_TYPE$1('iterable', ['Iterable'], iterable);

  var readable = new Readable(_objectSpread$1({
    objectMode: true
  }, opts)); // Reading boolean to protect against _read
  // being called before last iteration completion.

  var reading = false;

  readable._read = function () {
    if (!reading) {
      reading = true;
      next();
    }
  };

  function next() {
    return _next2.apply(this, arguments);
  }

  function _next2() {
    _next2 = _asyncToGenerator(function* () {
      try {
        var _ref = yield iterator.next(),
            value = _ref.value,
            done = _ref.done;

        if (done) {
          readable.push(null);
        } else if (readable.push((yield value))) {
          next();
        } else {
          reading = false;
        }
      } catch (err) {
        readable.destroy(err);
      }
    });
    return _next2.apply(this, arguments);
  }

  return readable;
}

var from_1 = from;

var _stream_readable = Readable;
/*<replacement>*/

var Duplex$2;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = events.EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/



/*</replacement>*/


var Buffer$3 = buffer.Buffer;

var OurUint8Array$1 = commonjsGlobal.Uint8Array || function () {};

function _uint8ArrayToBuffer$1(chunk) {
  return Buffer$3.from(chunk);
}

function _isUint8Array$1(obj) {
  return Buffer$3.isBuffer(obj) || obj instanceof OurUint8Array$1;
}
/*<replacement>*/




var debug;

if (util && util.debuglog) {
  debug = util.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/






var getHighWaterMark$2 = state.getHighWaterMark;

var _require$codes$1 = errors.codes,
    ERR_INVALID_ARG_TYPE$2 = _require$codes$1.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes$1.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED$1 = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes$1.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder$1;
var createReadableStreamAsyncIterator$1;
var from$1;

inherits(Readable, stream$1);

var errorOrDestroy$2 = destroy_1.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream$$1, isDuplex) {
  Duplex$2 = Duplex$2 || _stream_duplex;
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream$$1 instanceof Duplex$2; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark$2(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new buffer_list();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder$1) StringDecoder$1 = string_decoder.StringDecoder;
    this.decoder = new StringDecoder$1(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex$2 = Duplex$2 || _stream_duplex;
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex$2;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  stream$1.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroy_1.destroy;
Readable.prototype._undestroy = destroy_1.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state$$1 = this._readableState;
  var skipChunkCheck;

  if (!state$$1.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state$$1.defaultEncoding;

      if (encoding !== state$$1.encoding) {
        chunk = Buffer$3.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream$$1, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state$$1 = stream$$1._readableState;

  if (chunk === null) {
    state$$1.reading = false;
    onEofChunk(stream$$1, state$$1);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state$$1, chunk);

    if (er) {
      errorOrDestroy$2(stream$$1, er);
    } else if (state$$1.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state$$1.objectMode && Object.getPrototypeOf(chunk) !== Buffer$3.prototype) {
        chunk = _uint8ArrayToBuffer$1(chunk);
      }

      if (addToFront) {
        if (state$$1.endEmitted) errorOrDestroy$2(stream$$1, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream$$1, state$$1, chunk, true);
      } else if (state$$1.ended) {
        errorOrDestroy$2(stream$$1, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state$$1.destroyed) {
        return false;
      } else {
        state$$1.reading = false;

        if (state$$1.decoder && !encoding) {
          chunk = state$$1.decoder.write(chunk);
          if (state$$1.objectMode || chunk.length !== 0) addChunk(stream$$1, state$$1, chunk, false);else maybeReadMore(stream$$1, state$$1);
        } else {
          addChunk(stream$$1, state$$1, chunk, false);
        }
      }
    } else if (!addToFront) {
      state$$1.reading = false;
      maybeReadMore(stream$$1, state$$1);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state$$1.ended && (state$$1.length < state$$1.highWaterMark || state$$1.length === 0);
}

function addChunk(stream$$1, state$$1, chunk, addToFront) {
  if (state$$1.flowing && state$$1.length === 0 && !state$$1.sync) {
    state$$1.awaitDrain = 0;
    stream$$1.emit('data', chunk);
  } else {
    // update the buffer info.
    state$$1.length += state$$1.objectMode ? 1 : chunk.length;
    if (addToFront) state$$1.buffer.unshift(chunk);else state$$1.buffer.push(chunk);
    if (state$$1.needReadable) emitReadable(stream$$1);
  }

  maybeReadMore(stream$$1, state$$1);
}

function chunkInvalid(state$$1, chunk) {
  var er;

  if (!_isUint8Array$1(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state$$1.objectMode) {
    er = new ERR_INVALID_ARG_TYPE$2('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder$1) StringDecoder$1 = string_decoder.StringDecoder;
  var decoder = new StringDecoder$1(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state$$1) {
  if (n <= 0 || state$$1.length === 0 && state$$1.ended) return 0;
  if (state$$1.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state$$1.flowing && state$$1.length) return state$$1.buffer.head.data.length;else return state$$1.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state$$1.highWaterMark) state$$1.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state$$1.length) return n; // Don't have enough

  if (!state$$1.ended) {
    state$$1.needReadable = true;
    return 0;
  }

  return state$$1.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state$$1 = this._readableState;
  var nOrig = n;
  if (n !== 0) state$$1.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state$$1.needReadable && ((state$$1.highWaterMark !== 0 ? state$$1.length >= state$$1.highWaterMark : state$$1.length > 0) || state$$1.ended)) {
    debug('read: emitReadable', state$$1.length, state$$1.ended);
    if (state$$1.length === 0 && state$$1.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state$$1); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state$$1.ended) {
    if (state$$1.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state$$1.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state$$1.length === 0 || state$$1.length - n < state$$1.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state$$1.ended || state$$1.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state$$1.reading = true;
    state$$1.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state$$1.length === 0) state$$1.needReadable = true; // call internal read method

    this._read(state$$1.highWaterMark);

    state$$1.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state$$1.reading) n = howMuchToRead(nOrig, state$$1);
  }

  var ret;
  if (n > 0) ret = fromList(n, state$$1);else ret = null;

  if (ret === null) {
    state$$1.needReadable = state$$1.length <= state$$1.highWaterMark;
    n = 0;
  } else {
    state$$1.length -= n;
    state$$1.awaitDrain = 0;
  }

  if (state$$1.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state$$1.ended) state$$1.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state$$1.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream$$1, state$$1) {
  debug('onEofChunk');
  if (state$$1.ended) return;

  if (state$$1.decoder) {
    var chunk = state$$1.decoder.end();

    if (chunk && chunk.length) {
      state$$1.buffer.push(chunk);
      state$$1.length += state$$1.objectMode ? 1 : chunk.length;
    }
  }

  state$$1.ended = true;

  if (state$$1.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream$$1);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state$$1.needReadable = false;

    if (!state$$1.emittedReadable) {
      state$$1.emittedReadable = true;
      emitReadable_(stream$$1);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream$$1) {
  var state$$1 = stream$$1._readableState;
  debug('emitReadable', state$$1.needReadable, state$$1.emittedReadable);
  state$$1.needReadable = false;

  if (!state$$1.emittedReadable) {
    debug('emitReadable', state$$1.flowing);
    state$$1.emittedReadable = true;
    process.nextTick(emitReadable_, stream$$1);
  }
}

function emitReadable_(stream$$1) {
  var state$$1 = stream$$1._readableState;
  debug('emitReadable_', state$$1.destroyed, state$$1.length, state$$1.ended);

  if (!state$$1.destroyed && (state$$1.length || state$$1.ended)) {
    stream$$1.emit('readable');
    state$$1.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state$$1.needReadable = !state$$1.flowing && !state$$1.ended && state$$1.length <= state$$1.highWaterMark;
  flow(stream$$1);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream$$1, state$$1) {
  if (!state$$1.readingMore) {
    state$$1.readingMore = true;
    process.nextTick(maybeReadMore_, stream$$1, state$$1);
  }
}

function maybeReadMore_(stream$$1, state$$1) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state$$1.reading && !state$$1.ended && (state$$1.length < state$$1.highWaterMark || state$$1.flowing && state$$1.length === 0)) {
    var len = state$$1.length;
    debug('maybeReadMore read 0');
    stream$$1.read(0);
    if (len === state$$1.length) // didn't get any data, stop spinning.
      break;
  }

  state$$1.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy$2(this, new ERR_METHOD_NOT_IMPLEMENTED$1('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state$$1 = this._readableState;

  switch (state$$1.pipesCount) {
    case 0:
      state$$1.pipes = dest;
      break;

    case 1:
      state$$1.pipes = [state$$1.pipes, dest];
      break;

    default:
      state$$1.pipes.push(dest);
      break;
  }

  state$$1.pipesCount += 1;
  debug('pipe count=%d opts=%j', state$$1.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state$$1.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state$$1.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state$$1.pipesCount === 1 && state$$1.pipes === dest || state$$1.pipesCount > 1 && indexOf(state$$1.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state$$1.awaitDrain);
        state$$1.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy$2(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state$$1.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state$$1 = src._readableState;
    debug('pipeOnDrain', state$$1.awaitDrain);
    if (state$$1.awaitDrain) state$$1.awaitDrain--;

    if (state$$1.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state$$1.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state$$1 = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state$$1.pipesCount === 0) return this; // just one destination.  most common case.

  if (state$$1.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state$$1.pipes) return this;
    if (!dest) dest = state$$1.pipes; // got a match.

    state$$1.pipes = null;
    state$$1.pipesCount = 0;
    state$$1.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state$$1.pipes;
    var len = state$$1.pipesCount;
    state$$1.pipes = null;
    state$$1.pipesCount = 0;
    state$$1.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state$$1.pipes, dest);
  if (index === -1) return this;
  state$$1.pipes.splice(index, 1);
  state$$1.pipesCount -= 1;
  if (state$$1.pipesCount === 1) state$$1.pipes = state$$1.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = stream$1.prototype.on.call(this, ev, fn);
  var state$$1 = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state$$1.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state$$1.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state$$1.endEmitted && !state$$1.readableListening) {
      state$$1.readableListening = state$$1.needReadable = true;
      state$$1.flowing = false;
      state$$1.emittedReadable = false;
      debug('on readable', state$$1.length, state$$1.reading);

      if (state$$1.length) {
        emitReadable(this);
      } else if (!state$$1.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = stream$1.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = stream$1.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state$$1 = self._readableState;
  state$$1.readableListening = self.listenerCount('readable') > 0;

  if (state$$1.resumeScheduled && !state$$1.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state$$1.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state$$1 = this._readableState;

  if (!state$$1.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state$$1.flowing = !state$$1.readableListening;
    resume(this, state$$1);
  }

  state$$1.paused = false;
  return this;
};

function resume(stream$$1, state$$1) {
  if (!state$$1.resumeScheduled) {
    state$$1.resumeScheduled = true;
    process.nextTick(resume_, stream$$1, state$$1);
  }
}

function resume_(stream$$1, state$$1) {
  debug('resume', state$$1.reading);

  if (!state$$1.reading) {
    stream$$1.read(0);
  }

  state$$1.resumeScheduled = false;
  stream$$1.emit('resume');
  flow(stream$$1);
  if (state$$1.flowing && !state$$1.reading) stream$$1.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream$$1) {
  var state$$1 = stream$$1._readableState;
  debug('flow', state$$1.flowing);

  while (state$$1.flowing && stream$$1.read() !== null) {
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream$$1) {
  var _this = this;

  var state$$1 = this._readableState;
  var paused = false;
  stream$$1.on('end', function () {
    debug('wrapped end');

    if (state$$1.decoder && !state$$1.ended) {
      var chunk = state$$1.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream$$1.on('data', function (chunk) {
    debug('wrapped data');
    if (state$$1.decoder) chunk = state$$1.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state$$1.objectMode && (chunk === null || chunk === undefined)) return;else if (!state$$1.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream$$1.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream$$1) {
    if (this[i] === undefined && typeof stream$$1[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream$$1[method].apply(stream$$1, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream$$1.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream$$1.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator$1 === undefined) {
      createReadableStreamAsyncIterator$1 = async_iterator;
    }

    return createReadableStreamAsyncIterator$1(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state$$1) {
    if (this._readableState) {
      this._readableState.flowing = state$$1;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state$$1) {
  // nothing buffered
  if (state$$1.length === 0) return null;
  var ret;
  if (state$$1.objectMode) ret = state$$1.buffer.shift();else if (!n || n >= state$$1.length) {
    // read it all, truncate the list
    if (state$$1.decoder) ret = state$$1.buffer.join('');else if (state$$1.buffer.length === 1) ret = state$$1.buffer.first();else ret = state$$1.buffer.concat(state$$1.length);
    state$$1.buffer.clear();
  } else {
    // read part of list
    ret = state$$1.buffer.consume(n, state$$1.decoder);
  }
  return ret;
}

function endReadable(stream$$1) {
  var state$$1 = stream$$1._readableState;
  debug('endReadable', state$$1.endEmitted);

  if (!state$$1.endEmitted) {
    state$$1.ended = true;
    process.nextTick(endReadableNT, state$$1, stream$$1);
  }
}

function endReadableNT(state$$1, stream$$1) {
  debug('endReadableNT', state$$1.endEmitted, state$$1.length); // Check that we didn't get one last unshift.

  if (!state$$1.endEmitted && state$$1.length === 0) {
    state$$1.endEmitted = true;
    stream$$1.readable = false;
    stream$$1.emit('end');

    if (state$$1.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream$$1._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream$$1.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from$1 === undefined) {
      from$1 = from_1;
    }

    return from$1(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}

var _stream_transform = Transform;

var _require$codes$2 = errors.codes,
    ERR_METHOD_NOT_IMPLEMENTED$2 = _require$codes$2.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK$1 = _require$codes$2.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$2.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$2.ERR_TRANSFORM_WITH_LENGTH_0;



inherits(Transform, _stream_duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK$1());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  _stream_duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish$1);
}

function prefinish$1() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return _stream_duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED$2('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  _stream_duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream$$1, er, data) {
  if (er) return stream$$1.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream$$1.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream$$1._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream$$1._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream$$1.push(null);
}

var _stream_passthrough = PassThrough;



inherits(PassThrough, _stream_transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  _stream_transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

var eos$1;

function once$1(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes$3 = errors.codes,
    ERR_MISSING_ARGS = _require$codes$3.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED$1 = _require$codes$3.ERR_STREAM_DESTROYED;

function noop$1(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest$1(stream$$1) {
  return stream$$1.setHeader && typeof stream$$1.abort === 'function';
}

function destroyer(stream$$1, reading, writing, callback) {
  callback = once$1(callback);
  var closed = false;
  stream$$1.on('close', function () {
    closed = true;
  });
  if (eos$1 === undefined) eos$1 = endOfStream;
  eos$1(stream$$1, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest$1(stream$$1)) return stream$$1.abort();
    if (typeof stream$$1.destroy === 'function') return stream$$1.destroy();
    callback(err || new ERR_STREAM_DESTROYED$1('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop$1;
  if (typeof streams[streams.length - 1] !== 'function') return noop$1;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream$$1, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream$$1, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

var pipeline_1 = pipeline;

var readable = createCommonjsModule(function (module, exports) {
if (process.env.READABLE_STREAM === 'disable' && stream) {
  module.exports = stream.Readable;
  Object.assign(module.exports, stream);
  module.exports.Stream = stream;
} else {
  exports = module.exports = _stream_readable;
  exports.Stream = stream || exports;
  exports.Readable = exports;
  exports.Writable = _stream_writable;
  exports.Duplex = _stream_duplex;
  exports.Transform = _stream_transform;
  exports.PassThrough = _stream_passthrough;
  exports.finished = endOfStream;
  exports.pipeline = pipeline_1;
}
});
var readable_1 = readable.Stream;
var readable_2 = readable.Readable;
var readable_3 = readable.Writable;
var readable_4 = readable.Duplex;
var readable_5 = readable.Transform;
var readable_6 = readable.PassThrough;
var readable_7 = readable.finished;
var readable_8 = readable.pipeline;

var WritableStream_1 = Stream;


var WritableStream = readable.Writable;
var StringDecoder$2 = string_decoder.StringDecoder;
var Buffer$4 = buffer.Buffer;

function Stream(cbs, options) {
    var parser = (this._parser = new Parser_1(cbs, options));
    var decoder = (this._decoder = new StringDecoder$2());

    WritableStream.call(this, { decodeStrings: false });

    this.once("finish", function() {
        parser.end(decoder.end());
    });
}

inherits(Stream, WritableStream);

Stream.prototype._write = function(chunk, encoding, cb) {
    if (chunk instanceof Buffer$4) chunk = this._decoder.write(chunk);
    this._parser.write(chunk);
    cb();
};

var Stream_1 = Stream$1;



function Stream$1(options) {
    WritableStream_1.call(this, new Cbs(this), options);
}

inherits(Stream$1, WritableStream_1);

Stream$1.prototype.readable = true;

function Cbs(scope) {
    this.scope = scope;
}

var EVENTS = lib$2.EVENTS;

Object.keys(EVENTS).forEach(function(name) {
    if (EVENTS[name] === 0) {
        Cbs.prototype["on" + name] = function() {
            this.scope.emit(name);
        };
    } else if (EVENTS[name] === 1) {
        Cbs.prototype["on" + name] = function(a) {
            this.scope.emit(name, a);
        };
    } else if (EVENTS[name] === 2) {
        Cbs.prototype["on" + name] = function(a, b) {
            this.scope.emit(name, a, b);
        };
    } else {
        throw Error("wrong number of arguments!");
    }
});

var ProxyHandler_1 = ProxyHandler;

function ProxyHandler(cbs) {
    this._cbs = cbs || {};
}

var EVENTS$1 = lib$2.EVENTS;
Object.keys(EVENTS$1).forEach(function(name) {
    if (EVENTS$1[name] === 0) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function() {
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS$1[name] === 1) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a) {
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS$1[name] === 2) {
        name = "on" + name;
        ProxyHandler.prototype[name] = function(a, b) {
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

var CollectingHandler_1 = CollectingHandler;

function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
}

var EVENTS$2 = lib$2.EVENTS;
Object.keys(EVENTS$2).forEach(function(name) {
    if (EVENTS$2[name] === 0) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function() {
            this.events.push([name]);
            if (this._cbs[name]) this._cbs[name]();
        };
    } else if (EVENTS$2[name] === 1) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a) {
            this.events.push([name, a]);
            if (this._cbs[name]) this._cbs[name](a);
        };
    } else if (EVENTS$2[name] === 2) {
        name = "on" + name;
        CollectingHandler.prototype[name] = function(a, b) {
            this.events.push([name, a, b]);
            if (this._cbs[name]) this._cbs[name](a, b);
        };
    } else {
        throw Error("wrong number of arguments");
    }
});

CollectingHandler.prototype.onreset = function() {
    this.events = [];
    if (this._cbs.onreset) this._cbs.onreset();
};

CollectingHandler.prototype.restart = function() {
    if (this._cbs.onreset) this._cbs.onreset();

    for (var i = 0, len = this.events.length; i < len; i++) {
        if (this._cbs[this.events[i][0]]) {
            var num = this.events[i].length;

            if (num === 1) {
                this._cbs[this.events[i][0]]();
            } else if (num === 2) {
                this._cbs[this.events[i][0]](this.events[i][1]);
            } else {
                this._cbs[this.events[i][0]](
                    this.events[i][1],
                    this.events[i][2]
                );
            }
        }
    }
};

var lib$2 = createCommonjsModule(function (module) {
function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
}

module.exports = {
    Parser: Parser_1,
    Tokenizer: Tokenizer_1,
    ElementType: domelementtype,
    DomHandler: domhandler,
    get FeedHandler() {
        return defineProp("FeedHandler", FeedHandler_1);
    },
    get Stream() {
        return defineProp("Stream", Stream_1);
    },
    get WritableStream() {
        return defineProp("WritableStream", WritableStream_1);
    },
    get ProxyHandler() {
        return defineProp("ProxyHandler", ProxyHandler_1);
    },
    get DomUtils() {
        return defineProp("DomUtils", domutils);
    },
    get CollectingHandler() {
        return defineProp(
            "CollectingHandler",
            CollectingHandler_1
        );
    },
    // For legacy support
    DefaultHandler: domhandler,
    get RssHandler() {
        return defineProp("RssHandler", this.FeedHandler);
    },
    //helper methods
    parseDOM: function(data, options) {
        var handler = new domhandler(options);
        new Parser_1(handler, options).end(data);
        return handler.dom;
    },
    parseFeed: function(feed, options) {
        var handler = new module.exports.FeedHandler(options);
        new Parser_1(handler, options).end(feed);
        return handler.dom;
    },
    createDomStream: function(cb, options, elementCb) {
        var handler = new domhandler(cb, options, elementCb);
        return new Parser_1(handler, options);
    },
    // List of all events that the parser emits
    EVENTS: {
        /* Format: eventname: number of arguments */
        attribute: 2,
        cdatastart: 0,
        cdataend: 0,
        text: 1,
        processinginstruction: 2,
        comment: 1,
        commentend: 0,
        closetag: 1,
        opentag: 2,
        opentagname: 1,
        error: 1,
        end: 0
    }
};
});
var lib_1$2 = lib$2.Parser;
var lib_2$2 = lib$2.Tokenizer;
var lib_3$2 = lib$2.ElementType;
var lib_4$2 = lib$2.DomHandler;
var lib_5$2 = lib$2.FeedHandler;
var lib_6$2 = lib$2.Stream;
var lib_7$2 = lib$2.WritableStream;
var lib_8$2 = lib$2.ProxyHandler;
var lib_9$2 = lib$2.DomUtils;
var lib_10$2 = lib$2.CollectingHandler;
var lib_11$1 = lib$2.DefaultHandler;
var lib_12$1 = lib$2.RssHandler;
var lib_13$1 = lib$2.parseDOM;
var lib_14$1 = lib$2.parseFeed;
var lib_15$1 = lib$2.createDomStream;
var lib_16$1 = lib$2.EVENTS;

var parse_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _htmlparser22 = _interopRequireDefault(lib$2);

/**
 * @param {String} html
 * @param {Node} node
 */

function parse(html, node) {
    var stack = [node];
    var last = function last() {
        return stack.length === 0 ? null : stack[stack.length - 1];
    };

    var document = node.ownerDocument;

    var parser = new _htmlparser22['default'].Parser({
        onopentagname: function onopentagname(name) {
            var elt = document.createElement(name);
            stack.push(elt);
        },

        onattribute: function onattribute(name, value) {
            last().setAttribute(name, value);
        },

        ontext: function ontext(text) {
            last().appendChild(document.createTextNode(text));
        },

        onclosetag: function onclosetag(name) {
            var elt = stack.pop();
            last().appendChild(elt);
        },

        oncomment: function oncomment(data) {
            last().appendChild(document.createComment(data));
        }
    }, { recognizeSelfClosing: true });
    parser.write(html);
    parser.end();
}

module.exports = exports['default'];

});

unwrapExports(parse_1);

var ParentNode_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _Node3 = _interopRequireDefault(Node_1);



var _parse2 = _interopRequireDefault(parse_1);

/**
 * The ParentNode interface contains methods that are particular to Node objects that can have children.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/ParentNode
 * @class ParentNode
 * @extends Node
 */

var ParentNode = (function (_Node) {
    function ParentNode() {
        _classCallCheck(this, ParentNode);

        _get(Object.getPrototypeOf(ParentNode.prototype), 'constructor', this).call(this);
        this._childNodes = [];
    }

    _inherits(ParentNode, _Node);

    _createClass(ParentNode, [{
        key: '_childNodesRecursiveForEach',
        value: function _childNodesRecursiveForEach(callback) {
            this._childNodes.forEach(function (node) {
                callback(node);
                if (node instanceof ParentNode) {
                    node._childNodesRecursiveForEach(callback);
                }
            });
        }
    }, {
        key: '_childNodesRecursiveFind',
        value: function _childNodesRecursiveFind(callback) {
            var result = undefined;
            this._childNodes.some(function (node) {
                if (callback(node)) {
                    result = node;
                    return true;
                }

                if (node instanceof ParentNode) {
                    result = node._childNodesRecursiveFind(callback);
                    if (result !== undefined) {
                        return true;
                    }
                }
            });
            return result;
        }
    }, {
        key: 'appendChild',

        /**
         * @method ParentNode#appendChild
         * @param {Node} child
         * @return {Node}
         */
        value: function appendChild(child) {
            if (!(child instanceof _Node3['default'])) {
                throw new Error('Trying to add non node element');
            }

            if (child._parentNode) {
                child._parentNode.removeChild(child);
            }

            if (child.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var childNode = undefined;

                while (childNode = child.firstChild) {
                    child.removeChild(childNode);
                    this.appendChild(childNode);
                }

                return child;
            }

            child._parentNode = this;
            this._childNodes.push(child);
            return child;
        }
    }, {
        key: 'replaceChild',

        /**
         * @method ParentNode#replaceChild
         * @param {Node} newChild
         * @param {Node} oldChild
         * @return {Node}
         */
        value: function replaceChild(newChild, oldChild) {
            var index = this._childNodes.indexOf(oldChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            if (newChild._parentNode) {
                newChild._parentNode.removeChild(newChild);
            }

            if (newChild.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var newChildren = [];
                var childNode = undefined;

                while (childNode = newChild.firstChild) {
                    newChild.removeChild(childNode);
                    childNode._parentNode = this;
                    newChildren.push(childNode);
                }

                this._childNodes.splice.bind(this._childNodes, index, 1).apply(null, newChildren);
            } else {
                newChild._parentNode = this;
                this._childNodes[index] = newChild;
            }

            delete oldChild._parentNode;
            return oldChild;
        }
    }, {
        key: 'removeChild',

        /**
         * @method ParentNode#removeChild
         * @param {Node} toRemoveChild
         * @return {Node}
         */
        value: function removeChild(toRemoveChild) {
            var index = this._childNodes.indexOf(toRemoveChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            this._childNodes.splice(index, 1);
            delete toRemoveChild._parentNode;
            return toRemoveChild;
        }
    }, {
        key: 'insertBefore',

        /**
         * @method ParentNode#insertBefore
         * @param {Node} child
         * @param {Node} existingChild
         * @return {Node}
         */
        value: function insertBefore(child, existingChild) {
            var index = this._childNodes.indexOf(existingChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            if (child._parentNode) {
                child._parentNode.removeChild(child);
            }

            if (child.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var children = [];
                var childNode = undefined;

                while (childNode = child.firstChild) {
                    child.removeChild(childNode);
                    childNode._parentNode = this;
                    children.push(childNode);
                }

                this._childNodes.splice.bind(this._childNodes, index, 0).apply(null, children);
            } else {
                child._parentNode = this;
                this._childNodes.splice(index, 0, child);
            }

            return child;
        }
    }, {
        key: 'childNodes',

        /**
         * TODO return {HTMLCollection}
         * @member {String} ParentNode#childNodes
         * @readonly
         */
        get: function get() {
            return this._childNodes;
        }
    }, {
        key: 'parentNode',

        /**
         * @member {Node|null} ParentNode#parentNode
         * @readonly
         */
        get: function get() {
            return this._parentNode || null;
        }
    }, {
        key: 'firstChild',

        /**
         * @member {Node|null} ParentNode#firstChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[0] || null;
        }
    }, {
        key: 'lastChild',

        /**
         * @member {Node|null} ParentNode#lastChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[this._childNodes.length - 1] || null;
        }
    }, {
        key: 'previousSibling',

        /**
         * @member {Node|null} ParentNode#previousSibling
         * @readonly
         */
        get: function get() {
            var indexInParent = this.parentNode._childNodes.indexOf(this);
            if (indexInParent === -1) {
                throw new Error('Unexpected state: this node is not in the parent');
            }

            return indexInParent !== 0 && this.parentNode._childNodes[indexInParent - 1] || null;
        }
    }, {
        key: 'nextSibling',

        /**
         * @member {Node|null} ParentNode#nextSibling
         * @readonly
         */
        get: function get() {
            var indexInParent = this.parentNode._childNodes.indexOf(this);
            if (indexInParent === -1) {
                throw new Error('Unexpected state: this node is not in the parent');
            }

            return this.parentNode._childNodes[indexInParent + 1] || null;
        }
    }, {
        key: 'innerHTML',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            return this._childNodes.reduce(function (value, node) {
                return value + node._toHTML();
            }, '');
        },

        /**
         * @ignore
         * @param {String} html
         */
        set: function set(html) {
            this._childNodes = [];
            (0, _parse2['default'])(html, this);
        }
    }, {
        key: 'textContent',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            return this._childNodes.reduce(function (value, node) {
                return value + node.textContent;
            }, '');
        }
    }]);

    return ParentNode;
})(_Node3['default']);

exports['default'] = ParentNode;
module.exports = exports['default'];

});

unwrapExports(ParentNode_1);

var DocumentFragment_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _Node2 = _interopRequireDefault(Node_1);



var _ParentNode3 = _interopRequireDefault(ParentNode_1);

/**
 * The DocumentFragment interface represents a minimal document object that has no parent. It is used as
 * a light-weight version of Document to store well-formed or potentially non-well-formed fragments of XML.
 *
  * @see https://developer.mozilla.org/en/docs/Web/API/DocumentFragment
  * @class DocumentFragment
  * @extends ParentNode
 */

var DocumentFragment = (function (_ParentNode) {
  function DocumentFragment() {
    _classCallCheck(this, DocumentFragment);

    _get(Object.getPrototypeOf(DocumentFragment.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(DocumentFragment, _ParentNode);

  _createClass(DocumentFragment, [{
    key: 'outerHTML',

    /**
     * @inheritdoc
     */
    get: function get() {
      return this.innerHTML;
    }
  }]);

  return DocumentFragment;
})(_ParentNode3['default']);

exports['default'] = DocumentFragment;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(DocumentFragment.prototype, 'nodeType', { value: _Node2['default'].DOCUMENT_FRAGMENT_NODE });
module.exports = exports['default'];

});

unwrapExports(DocumentFragment_1);

var Element_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _Node2 = _interopRequireDefault(Node_1);



var _ParentNode3 = _interopRequireDefault(ParentNode_1);

/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/Element
 * @class Element
 * @extends ParentNode
 */
/**
 * The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 * @member {String} Element#innerHTML
 */
/**
 * The outerHTML attribute of the element DOM interface gets the serialized HTML fragment
 * describing the element including its descendants.
 * It can be set to replace the element with nodes parsed from the given string.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
 * @member {String} Element#outerHTML
 */

var Element = (function (_ParentNode) {
    function Element() {
        _classCallCheck(this, Element);

        _get(Object.getPrototypeOf(Element.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(Element, _ParentNode);

    _createClass(Element, [{
        key: 'getElementById',

        /**
         * Returns a reference to the element by its ID.
         *
         * @method Element#getElementById
         * @param {String} id case-sensitive string representing the unique ID of the element being sought
         * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
         */
        value: function getElementById(id) {
            return this._childNodesRecursiveFind(function (e) {
                return e instanceof Element && e.getAttribute('id') === id;
            }) || null;
        }
    }, {
        key: 'getElementsByTagName',

        /**
         * Returns an HTMLCollection of elements with the given tag name.
         * The complete document is searched, including the root node.
         * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
         * with the DOM treewithout having to call document.getElementsByTagName() again.
         *
         * @method Element#getElementsByTagName
         * @param {String} tagName
         * @return {HTMLCollection}
         */
        value: function getElementsByTagName(tagName, _array) {
            if (!tagName) {
                return !_array ? this.children.slice() : _array.push.apply(_array, this.children);
            }

            _array = _array || [];
            tagName = tagName.toLowerCase();
            this.children.forEach(function (e) {
                if (e.nodeName.toLowerCase() === tagName) {
                    _array.push(e);
                }
            });
            return _array;
        }
    }, {
        key: 'id',

        /**
         * The id of the element.
         *
         * @member {String} Element#id
         */
        get: function get() {
            return this.getAttribute('id');
        },

        /**
         * @ignore
         * @param {String} id
         */
        set: function set(id) {
            this.setAttribute('id', id);
        }
    }, {
        key: 'tagName',

        /**
         * The tag name of the element.
         *
         * @member {String} Element#tagName
         * @readonly
         */
        get: function get() {
            return this.nodeName;
        }
    }, {
        key: 'children',

        /**
         * Returns a live {@link HTMLCollection} containing all objects of type {@link Element}
         * that are children of this ParentNode.
         *
         * Note: this currently returns a non-live array.
         *
         * later type {HTMLCollection}
         *
         * @member {Array.<Element>} Element#children
         * @readonly
         */
        get: function get() {
            return this._childNodes.filter(function (n) {
                return n instanceof Element;
            });
        }
    }, {
        key: 'firstElementChild',

        /**
         * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
         *
         * @member {Element} Element#firstElementChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[0] || null;
        }
    }, {
        key: 'lastElementChild',

        /**
         * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
         *
         * @member {Element} Element#lastElementChild
         * @readonly
         */
        get: function get() {
            return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length - 1];
        }
    }, {
        key: 'childElementCount',

        /**
         * Returns an unsigned long giving the amount of children that the object has.
         *
         * @member {Number} Element#childElementCount
         * @readonly
         */
        get: function get() {
            return this._childNodes.length;
        }
    }]);

    return Element;
})(_ParentNode3['default']);

exports['default'] = Element;

/**
 * @constant {string} Comment#nodeType
 */
Object.defineProperty(Element.prototype, 'nodeType', { value: _Node2['default'].ELEMENT_NODE });
module.exports = exports['default'];

});

unwrapExports(Element_1);

var AbstractCSSStyleDeclaration_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CSSStyleRule = function CSSStyleRule(propertyName /*: string*/, value /*: string*/, important /*: boolean*/) {
    _classCallCheck(this, CSSStyleRule);

    this.name = propertyName;
    this.value = value;
    this.important = important;
};

/**
 * CSSStyleDeclaration represents a collection of CSS property-value pairs. It is used in a few APIs
 *
 * - HTMLElement.style - to manipulate the style of a single element (<elem style="...">);
 * - (TODO: reword) is an interface to the declaration block returned by the style
 * property of a cssRule in a stylesheet, when the rule is a CSSStyleRule.
 * - CSSStyleDeclaration is also a read-only interface to the result of window.getComputedStyle().
 */

var AbstractCSSStyleDeclaration = (function () {
    function AbstractCSSStyleDeclaration() {
        _classCallCheck(this, AbstractCSSStyleDeclaration);
    }

    _createClass(AbstractCSSStyleDeclaration, [{
        key: '_parse',

        /**
         * Parse style
         *
         * @internal
         * @param {String} style
         */
        value: function _parse(style) {
            var _this = this;

            this._properties = [];
            this._propertiesMap = {};
            style.split(';').forEach(function (part) {
                part = part.trim();
                if (!part) {
                    return;
                }

                var important = !!part.match(/!important$/);
                if (important) {
                    part = part.slice(0, -'!important'.length);
                }

                var splitPoint = part.indexOf(':');
                if (splitPoint) {
                    var key = part.slice(0, splitPoint).trim();
                    var value = part.slice(splitPoint + 1).trim();
                    _this._setProperty(key, value, important && 'important');
                }
            });
            this._stringify();
        }
    }, {
        key: '_stringify',

        /**
         * Parse style
         *
         * @internal
         */
        value: function _stringify() {
            var stylified = '';
            this._properties.forEach(function (s) {
                stylified += s.name + ':' + s.value + (s.important && '!important' || '') + ';';
            });
            this._value = stylified;
        }
    }, {
        key: 'getPropertyPriority',

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {String} propertyName
         * @param {String|undefined|false} important
         */
        value: function getPropertyPriority(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].important && 'important';
        }
    }, {
        key: 'getPropertyValue',

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {String} propertyName
         * @return {*} propertyValue
         */
        value: function getPropertyValue(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].value;
        }
    }, {
        key: 'item',

        /**
         * Returns a property name. Example: nameString= styleObj.item(0) Alternative: nameString= styleObj[0]
         *
         * @param {Number} index
         * @return {String} propertyName
         */
        value: function item(index) {
            return this._properties[index] && this._properties[index].name;
        }
    }, {
        key: 'removeProperty',

        /**
         * Returns the value deleted. Example: valString= styleObj.removeProperty('color')
         *
         * @param {String} propertyName
         * @return {*} propertyValue
         */
        value: function removeProperty(propertyName) {
            if (this._propertiesMap[propertyName]) {
                var value = this._propertiesMap[propertyName];
                this._properties.splice(this._properties.indexOf(value), 1);
                delete this._propertiesMap[propertyName];
                this._stringify();
                return value.value;
            }
        }
    }, {
        key: 'setProperty',

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {String} propertyName
         * @param {String} value
         * @param {String} important
         */
        value: function setProperty(propertyName, value, important) {
            this._setProperty(propertyName, value, important);
            this._stringify();
        }
    }, {
        key: '_setProperty',

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {String} propertyName
         * @param {String} value
         * @param {String} important
         */
        value: function _setProperty(propertyName, value, important) {
            if (!propertyName.match(/^[a-z\-]+$/)) {
                throw new Error('Not valid property name: ' + propertyName);
            }

            var cssRule = new CSSStyleRule(propertyName, value, important === 'important');
            if (this._propertiesMap[propertyName]) {
                this._properties.splice(this._properties.indexOf(this._propertiesMap[propertyName]), 1, cssRule);
            } else {
                this._properties.push(cssRule);
            }

            this._propertiesMap[propertyName] = cssRule;
        }
    }, {
        key: 'cssText',

        /**
         * @type {String}
         */
        get: function get() {
            return this._value;
        },

        /**
         * @param {String} style
         */
        set: function set(style) {
            this._parse(style);
        }
    }]);

    return AbstractCSSStyleDeclaration;
})();

exports['default'] = AbstractCSSStyleDeclaration;
module.exports = exports['default'];

});

unwrapExports(AbstractCSSStyleDeclaration_1);

var CSSStyleDeclaration_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _AbstractAbstractCSSStyleDeclaration2 = _interopRequireDefault(AbstractCSSStyleDeclaration_1);

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/CSSStyleDeclaration
 * @class CSSStyleDeclaration
 * @param {HTMLElement} element
 */

var CSSStyleDeclaration = (function (_AbstractCSSStyleDeclaration) {
    /**
     * @param {HTMLElement} element
     */

    function CSSStyleDeclaration(element) {
        _classCallCheck(this, CSSStyleDeclaration);

        _get(Object.getPrototypeOf(CSSStyleDeclaration.prototype), 'constructor', this).call(this);
        this._element = element;
    }

    _inherits(CSSStyleDeclaration, _AbstractCSSStyleDeclaration);

    _createClass(CSSStyleDeclaration, [{
        key: '_stringify',
        value: function _stringify() {
            _get(Object.getPrototypeOf(CSSStyleDeclaration.prototype), '_stringify', this).call(this);
            this._element._setAttribute('style', this.cssText);
        }
    }]);

    return CSSStyleDeclaration;
})(_AbstractAbstractCSSStyleDeclaration2['default']);

exports['default'] = CSSStyleDeclaration;
module.exports = exports['default'];

});

unwrapExports(CSSStyleDeclaration_1);

var ClassList_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClassList = (function () {
    /**
     * @param {HTMLElement} element
     */

    function ClassList(element) {
        _classCallCheck(this, ClassList);

        this._element = element;
        this.tokens = [];
    }

    _createClass(ClassList, [{
        key: '_parse',

        /**
         *
         */
        value: function _parse(tokens) {
            this.tokens = tokens.split(' ');
        }
    }, {
        key: '_stringify',

        /**
         *
         */
        value: function _stringify() {
            this._element._setAttribute('class', this.tokens.join(' '));
        }
    }, {
        key: 'add',

        /**
         * Adds a class to an element's list of classes
         *
         * @method ClassList#add
         * @param {...string} className
         *
         */
        value: function add() {
            var _this = this;

            var updated = false;
            Array.prototype.forEach.call(arguments, function (token) {
                token = String(token);
                if (_this.tokens.indexOf(token) === -1) {
                    _this.tokens.push(token);
                    updated = true;
                }
            });
            if (updated) {
                this._stringify();
            }
        }
    }, {
        key: 'remove',

        /**
         * Removes a class from an element's list of classes
         *
         * @method ClassList#remove
         * @param {...string} token
         */
        value: function remove() {
            var _this2 = this;

            var updated = false;
            Array.prototype.forEach.call(arguments, function (token) {
                var index = _this2.tokens.indexOf(token);
                if (index !== -1) {
                    _this2.tokens.splice(index, 1);
                    updated = true;
                }
            });
            if (updated) {
                this._stringify();
            }
        }
    }, {
        key: 'toggle',

        /**
         * Toggles the existence of a class in an element's list of classes
         *
         * @method ClassList#toggle
         * @param {String} token
         * @param {Boolean} force
         * @return {Boolean} if the token was added
         *
         */
        value: function toggle(token, force) {
            var result = this.contains(token);
            var method = result ? force !== true && 'remove' : force !== false && 'add';

            if (method) {
                this[method](token);
            }

            return !result;
        }
    }, {
        key: 'contains',

        /**
         * Checks if an element's list of classes contains a specific class
         *
         * @method ClassList#contains
         * @param {String} token
         * @return {Boolean} if the token is present
         */
        value: function contains(token) {
            return this.tokens.indexOf(token) !== -1;
        }
    }, {
        key: 'length',

        /**
         * @member {Number} ClassList#length
         * @readonly
         */
        get: function get() {
            return this.tokens.length;
        }
    }]);

    return ClassList;
})();

exports['default'] = ClassList;
module.exports = exports['default'];

});

unwrapExports(ClassList_1);

var escapeAttribute_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = escapeAttribute;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _escapeHTML2 = _interopRequireDefault(escapeHTML_1);

function escapeAttribute(string) {
    return (0, _escapeHTML2['default'])(string).replace(/"/g, '&quot;');
}

module.exports = exports['default'];

});

unwrapExports(escapeAttribute_1);

var HTMLElement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _Element3 = _interopRequireDefault(Element_1);



var _HTMLElementCSSStyleDeclaration2 = _interopRequireDefault(CSSStyleDeclaration_1);



var _HTMLElementClassList2 = _interopRequireDefault(ClassList_1);



var _utilsEscapeAttribute2 = _interopRequireDefault(escapeAttribute_1);

var voidElements = 'area base br col embed hr img input keygen link meta param source track wbr'.split(' ');

/**
 * The HTMLElement interface represents any HTML element.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLElement
 * @class HTMLElement
 * @extends Element
 */

var HTMLElement = (function (_Element) {
    function HTMLElement() {
        _classCallCheck(this, HTMLElement);

        _get(Object.getPrototypeOf(HTMLElement.prototype), 'constructor', this).call(this);
        /**
         * returns a token list of the class attribute of the element
         * @member {CSSStyleDeclaration} HTMLElement#style
         * @readonly
         */
        this.style = new _HTMLElementCSSStyleDeclaration2['default'](this);
        /**
         * returns a token list of the class attribute of the element
         * @member {ClassList} HTMLElement#classList
         * @readonly
         */
        this.classList = new _HTMLElementClassList2['default'](this);
    }

    _inherits(HTMLElement, _Element);

    _createClass(HTMLElement, [{
        key: '_updatedAttribute',
        value: function _updatedAttribute(attributeName, value) {
            if (attributeName === 'style') {
                this.style.cssText = value || '';
            }

            if (attributeName === 'class') {
                this.classList._parse(value || '');
            }
        }
    }, {
        key: 'className',

        /**
         * The class of the element.
         *
         * @member {String} HTMLElement#className
         */
        get: function get() {
            return this.getAttribute('class');
        },

        /**
         * @ignore
         * @param {String} className
         */
        set: function set(className) {
            this.setAttribute('class', className);
        }
    }, {
        key: 'outerHTML',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            var _this = this;

            return '<' + this.nodeName + Object.keys(this._attributes).reduce(function (value, attributeName) {
                return value + ' ' + attributeName + '="' + (0, _utilsEscapeAttribute2['default'])(_this._attributes[attributeName]) + '"';
            }, '') + '>' + (voidElements.indexOf(this.nodeName) !== -1 ? '' : this.innerHTML + '</' + this.nodeName + '>');
        }
    }]);

    return HTMLElement;
})(_Element3['default']);

exports['default'] = HTMLElement;
module.exports = exports['default'];

});

unwrapExports(HTMLElement_1);

var Text_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _utilsEscapeHTML2 = _interopRequireDefault(escapeHTML_1);



var _Node3 = _interopRequireDefault(Node_1);

/**
* @see https://developer.mozilla.org/en/docs/Web/API/Text
* @class Text
* @extends Node
* @param {String} textContent
* @property {String} textContent
*/

var Text = (function (_Node) {
    function Text(textContent) {
        _classCallCheck(this, Text);

        _get(Object.getPrototypeOf(Text.prototype), 'constructor', this).call(this);
        this.value = textContent;
    }

    _inherits(Text, _Node);

    _createClass(Text, [{
        key: '_toHTML',
        value: function _toHTML() {
            return (0, _utilsEscapeHTML2['default'])(this.value);
        }
    }, {
        key: 'textContent',
        get: function get() {
            return this.value;
        },
        set: function set(textContent) {
            this.value = textContent;
        }
    }]);

    return Text;
})(_Node3['default']);

exports['default'] = Text;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Text.prototype, 'nodeType', { value: _Node3['default'].TEXT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Text.prototype, 'nodeName', { value: '#text' });
module.exports = exports['default'];

});

unwrapExports(Text_1);

var HTMLOptionElement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _HTMLElement3 = _interopRequireDefault(HTMLElement_1);

/**
 * The HTMLOptionElement interface represents option elements
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLOptionElement
 * @class HTMLOptionElement
 */

var HTMLOptionElement = (function (_HTMLElement) {
    function HTMLOptionElement() {
        _classCallCheck(this, HTMLOptionElement);

        _get(Object.getPrototypeOf(HTMLOptionElement.prototype), 'constructor', this).call(this);
    }

    _inherits(HTMLOptionElement, _HTMLElement);

    _createClass(HTMLOptionElement, [{
        key: 'defaultSelected',

        /**
         * Contains the initial value of the selected HTML attribute,
         * indicating whether the option is selected by default or not.
         *
         * @member {Boolean} HTMLOptionElement#defaultSelected
         * @ignore Unsuported
         */
        get: function get() {
            throw new Error('Unsuported');
        },

        /**
         * @ignore
         * @param {Boolean} selected
         */
        set: function set(selected) {
            throw new Error('Unsuported');
        }
    }, {
        key: 'disabled',

        /**
         * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
         * An option can also be disabled if it is a child of an optgroup element that is disabled.
         *
         * @member {Boolean} HTMLOptionElement#disabled
         */
        get: function get() {
            return !!this.getAttribute('disabled') && (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
        },

        /**
         * @ignore
         * @param {Boolean} disabled
         */
        set: function set(disabled) {
            if (disabled) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }
    }, {
        key: 'form',

        /**
         * If the option is a descendent of a select element, then this property has the same value as
         * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
         *
         * @member {HTMLFormElement} HTMLOptionElement#form
         * @readonly
         */
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         */
        set: function set(value) {
            throw new Error('form is read only');
        }
    }, {
        key: 'index',

        /**
         * The position of the option within the list of options it belongs to, in tree-order.
         * If the option is not part of a list of options, like when it is part of the datalist element, the value is 0.
         *
         * @member {Number} HTMLOptionElement#index
         * @readonly
         * @ignore Unsuported
         */
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         * @param {Number} value
         */
        set: function set(value) {
            throw new Error('index is read only');
        }
    }, {
        key: 'label',

        /**
         * Reflects the value of the label HTML attribute, which provides a label for the option.
         * If this attribute isn't specifically set, reading it returns the element's text content.
         *
         * @member {String} HTMLOptionElement#label
         * @ignore Not implemented
         */
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         * @param {String} label
         */
        set: function set(label) {
            throw new Error('Not implemented');
        }
    }, {
        key: '_select',
        get: function get() {
            // jscs:disable safeContextKeyword
            var node = this;

            // jscs:enable safeContextKeyword

            while (node = node.parentNode) {
                if (node.nodeName === 'select') {
                    return node;
                }
            }

            return null;
        }
    }, {
        key: 'selected',

        /**
         * Indicates whether the option is currently selected.
         *
         * @member {Boolean} HTMLOptionElement#selected
         */
        get: function get() {
            return !!this.getAttribute('selected');
        },

        /**
         * @ignore
         * @param {Boolean} selected
         */
        set: function set(selected) {
            if (selected) {
                var selectElement = this._select;
                if (!selectElement.multiple) {
                    var selectedOption = selectElement.selectedOption;
                    if (selectedOption) {
                        selectedOption.selected = false;
                    }
                }

                this.setAttribute('selected', 'selected');
            } else {
                this.removeAttribute('selected');
            }
        }
    }, {
        key: 'text',

        /**
         * Contains the text content of the element.
         *
         * @member {String} HTMLOptionElement#text
         */
        get: function get() {
            return this.textContent;
        },

        /**
         * @ignore
         */
        set: function set(text) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }

            this.appendChild(this.ownerDocument.createTextNode(text));
        }
    }, {
        key: 'value',

        /**
         * Reflects the value of the value HTML attribute, if it exists;
         * otherwise reflects value of the Node.textContent property.
         *
         * @member {String} HTMLOptionElement#value
         */
        get: function get() {
            var value = this.getAttribute('value');
            return value === null ? this.textContent : value;
        },

        /**
         * @ignore
         * @param {String} value
         */
        set: function set(value) {
            if (value) {
                this.setAttribute('value', value);
            } else {
                this.removeAttribute('value');
            }
        }
    }]);

    return HTMLOptionElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLOptionElement;

/**
 * @constant {string} HTMLOptionElement#nodeName option
 */
Object.defineProperty(HTMLOptionElement.prototype, 'nodeName', { value: 'option' });
module.exports = exports['default'];

});

unwrapExports(HTMLOptionElement_1);

var HTMLSelectElement_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _HTMLElement3 = _interopRequireDefault(HTMLElement_1);

/**
 * HTML select elements share all of the properties and methods
 * of other HTML elements described in the element section.
 * They also have the specialized interface HTMLSelectElement.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLSelectElement
 * @class HTMLSelectElement
 *
 */

var HTMLSelectElement = (function (_HTMLElement) {
    function HTMLSelectElement() {
        _classCallCheck(this, HTMLSelectElement);

        _get(Object.getPrototypeOf(HTMLSelectElement.prototype), 'constructor', this).call(this);
    }

    _inherits(HTMLSelectElement, _HTMLElement);

    _createClass(HTMLSelectElement, [{
        key: 'item',

        /**
         * Gets an item from the options collection for this select element.
         *
         * @param {Number} index
         * @ return {HTMLSelectElement}
         */
        value: function item(index) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'namedItem',

        /**
         * Gets the item in the options collection with the specified name.
         * The name string can match either the id or the name attribute of an option node
         *
         * @ignore Not implemented
         * @method HTMLSelectElement#namedItem
         * @param {String} name
         * @ return {HTMLSelectElement}
         */
        value: function namedItem(name) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'remove',

        /**
         * Removes the element at the specified index from the options collection for this select element.
         *
         * @ignore Not implemented
         * @method HTMLSelectElement#remove
         * @param {Number} index
         */
        value: function remove(index) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'autoFocus',
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'form',

        /**
         * The form that this element is associated with. If this element is a descendant of a form element,
         * then this attribute is the ID of that form element.
         * If the element is not a descendant of a form element, then:
         * The attribute can be the ID of any form element in the same document.
         *
         * @type {HTMLFormElement}
         * @ignore Not implemented
         */
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('form is read only');
        }
    }, {
        key: 'labels',
        get: function get() {
            throw new Error('Not implemented');
        }
    }, {
        key: 'disabled',

        /**
         * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
         * If it is disabled, it does not accept clicks.
         *
         * @member {Boolean} HTMLSelectElement#disabled
         */
        get: function get() {
            return !!this.getAttribute('disabled');
        },

        /**
         * @ignore
         * @param {Boolean} disabled
         */
        set: function set(disabled) {
            if (disabled) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }
    }, {
        key: 'length',

        /**
         * The number of option elements in this select element.
         *
         * @member {Number} HTMLSelectElement#length
         * @readonly
         */
        get: function get() {
            return this.options.length;
        },
        set: function set(value) {
            throw new Error('Length is read only');
        }
    }, {
        key: 'multiple',

        /**
         * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
         *
         * @member {Boolean} HTMLSelectElement#multiple
         */
        get: function get() {
            return !!this.getAttribute('multiple');
        },

        /**
         * @ignore
         * @param {Boolean} multiple
         */
        set: function set(multiple) {
            if (multiple) {
                this.setAttribute('multiple', 'multiple');
            } else {
                this.removeAttribute('multiple');
            }
        }
    }, {
        key: 'name',

        /**
         * Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
         *
         * @member {String} HTMLSelectElement#name
         */
        get: function get() {
            return this.getAttribute('name');
        },

        /**
         * @ignore
         * @param {String} name
         */
        set: function set(name) {
            this.setAttribute('name', name);
        }
    }, {
        key: 'options',

        /**
         * The set of option elements contained by this element.
         *
         * @member {Array.<Element>} HTMLSelectElement#options
         * @readonly
         */
        get: function get() {
            return this.getElementsByTagName('option');
        },
        set: function set(value) {
            throw new Error('options is read only');
        }
    }, {
        key: 'required',

        /**
         * Reflects the required HTML attribute, which indicates whether the user is required
         * to select a value before submitting the form
         *
         * @member {Boolean} HTMLSelectElement#required
         */
        get: function get() {
            return !!this.getAttribute('required');
        },

        /**
         * @ignore
         * @param {Boolean} required
         */
        set: function set(required) {
            if (required) {
                this.setAttribute('required', 'required');
            } else {
                this.removeAttribute('required');
            }
        }
    }, {
        key: 'selectedIndex',

        /**
         * The index of the first selected option element. The value -1 is returned if no element is selected.
         *
         * @member {Number} HTMLSelectElement#selectedIndex
         */
        get: function get() {
            var index = -1;
            var options = this.options;

            if (!options.length) {
                return index;
            }

            options.some(function (option, i) {
                if (option.selected) {
                    index = i;
                    return true;
                }
            });

            if (index === -1 && !this.multiple) {
                options.some(function (option, i) {
                    if (option.value === '') {
                        index = i;
                        return true;
                    }
                });

                if (index === -1) {
                    return 0;
                }
            }

            return index;
        },

        /**
         * @ignore
         * @param {Number} index
         */
        set: function set(index) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'selectedOptions',

        /**
         * The set of options that are selected.
         *
         * @member {Array.<Element>} HTMLSelectElement#selectedOptions
         * @readonly
         */
        get: function get() {
            return this.options.filter(function (option) {
                return option.selected;
            });
        }
    }, {
        key: 'selectedOption',

        /**
         * The first selected option.
         *
         * @member {Array.<Element>} HTMLSelectElement#selectedOptions
         * @readonly
         */
        get: function get() {
            var selectedOption = undefined;
            this.options.some(function (option) {
                if (option.selected) {
                    selectedOption = option;
                    return true;
                }
            });
            return selectedOption;
        }
    }, {
        key: 'size',

        /**
         * Reflects the size HTML attribute, which contains the number of visible items in the control.
         * The default is 1, unless multiple is true, in which case it is 4.
         *
         * @member {Number} HTMLSelectElement#size
         */
        get: function get() {
            return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
        },

        /**
         * @ignore
         * @param {String} size
         */
        set: function set(size) {
            this.setAttribute('size', size);
        }
    }, {
        key: 'tabIndex',
        get: function get() {
            throw new Error('Obsolete since HTML5');
        }
    }, {
        key: 'type',

        /**
         * The form control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one.
         * Read only.
         *
         * @member {Number} HTMLSelectElement#size
         * @readonly
         */
        get: function get() {
            return this.multiple ? 'select-multiple' : 'select-one';
        },
        set: function set(value) {
            throw new Error('type is read only');
        }
    }, {
        key: 'validationMessage',
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('validationMessage is read only');
        }
    }, {
        key: 'validity',
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('validity is read only');
        }
    }, {
        key: 'value',

        /**
         * The value of this form control, that is, of the first selected option.
         *
         * @member {String} HTMLSelectElement#value
         */
        get: function get() {
            return this.selectedOption && this.selectedOption.value;
        },

        /**
         * @ignore
         * @param {String} value
         */
        set: function set(value) {
            this.selectedOption.value = value;
            return value;
        }
    }, {
        key: 'willValidate',
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('willValidate is read only');
        }
    }]);

    return HTMLSelectElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLSelectElement;

/**
 * @constant {string} HTMLSelectElement#nodeName option
 */
Object.defineProperty(HTMLSelectElement.prototype, 'nodeName', { value: 'select' });
module.exports = exports['default'];

});

unwrapExports(HTMLSelectElement_1);

var Document_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }



var _Node3 = _interopRequireDefault(Node_1);



var _Comment2 = _interopRequireDefault(Comment_1);



var _DocumentFragment2 = _interopRequireDefault(DocumentFragment_1);



var _HTMLElement2 = _interopRequireDefault(HTMLElement_1);



var _Text2 = _interopRequireDefault(Text_1);

// HTML Elements



var _HTMLElementElementsHTMLOptionElement2 = _interopRequireDefault(HTMLOptionElement_1);



var _HTMLElementElementsHTMLSelectElement2 = _interopRequireDefault(HTMLSelectElement_1);

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/Document
 * @class Document
 * @extends Node
 */

var Document = (function (_Node) {
    /*
     * @constructs Document
     */

    function Document() {
        _classCallCheck(this, Document);

        _get(Object.getPrototypeOf(Document.prototype), 'constructor', this).call(this);
        this.documentElement = this.createElement('html');
        this.head = this.createElement('head');
        this.documentElement.appendChild(this.head);
        this.body = this.createElement('body');
        this.documentElement.appendChild(this.body);
    }

    _inherits(Document, _Node);

    _createClass(Document, [{
        key: 'createComment',

        /**
         * Creates a new {@link Comment}.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createComment
         *
         * @method Document#createComment
         * @param {String} data
         * @return {Comment}
        */
        value: function createComment(data /*: string*/) {
            var comment = new _Comment2['default'](data);
            comment.ownerDocument = this;
            return comment;
        }
    }, {
        key: 'createDocumentFragment',

        /**
         * Creates a new empty {@link DocumentFragment}.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment
         *
         * @method Document#createDocumentFragment
         * @return {DocumentFragment}
        */
        value: function createDocumentFragment() {
            var fragment = new _DocumentFragment2['default']();
            fragment.ownerDocument = this;
            return fragment;
        }
    }, {
        key: 'createElement',

        /**
         * Creates a new element with the given tag name.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createElement
         *
         * @method Document#createElement
         * @param {String} name
         * @return {HTMLElement}
        */
        value: function createElement(name /*: string*/) {
            var element = undefined;
            switch (name.toLowerCase()) {
                case 'select':
                    element = new _HTMLElementElementsHTMLSelectElement2['default']();
                    break;
                case 'option':
                    element = new _HTMLElementElementsHTMLOptionElement2['default']();
                    break;
                default:
                    element = new _HTMLElement2['default']();
                    element.nodeName = name;
            }
            element.ownerDocument = this;
            return element;
        }
    }, {
        key: 'createTextNode',

        /**
         * Creates a text node.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createTextNode
         *
         * @method Document#createTextNode
         * @param {String} textContent
         * @return {Text}
        */
        value: function createTextNode(textContent) {
            var text = new _Text2['default'](textContent);
            text.ownerDocument = this;
            return text;
        }
    }, {
        key: 'getElementById',

        /**
         * Returns a reference to the element by its ID.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementById
         *
         * @method Document#getElementById
         * @param {String} id case-sensitive string representing the unique ID of the element being sought
         * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
         */
        value: function getElementById(id) {
            return this.documentElement.getElementById(id);
        }
    }, {
        key: 'getElementsByTagName',

        /**
         * Returns an HTMLCollection of elements with the given tag name.
         * The complete document is searched, including the root node.
         * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
         * with the DOM treewithout having to call document.getElementsByTagName() again.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByTagName
         *
         * @method Document#getElementsByTagName
         * @param {String} tagName
         * @return {HTMLCollection}
         */
        value: function getElementsByTagName(tagName, _array) {
            return this.documentElement.getElementsByTagName(tagName, _array);
        }
    }, {
        key: 'getElementsByClassName',
        value: function getElementsByClassName(className) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelector',
        value: function querySelector() {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll() {
            throw new Error('Not implemented');
        }
    }]);

    return Document;
})(_Node3['default']);

exports['default'] = Document;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Document.prototype, 'nodeType', { value: _Node3['default'].DOCUMENT_NODE });
module.exports = exports['default'];

});

unwrapExports(Document_1);

var global_1 = createCommonjsModule(function (module) {

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var _Node2 = _interopRequireDefault(Node_1);



var _Event2 = _interopRequireDefault(Event_1);



var _Document2 = _interopRequireDefault(Document_1);



var _DocumentFragment2 = _interopRequireDefault(DocumentFragment_1);

commonjsGlobal.window = commonjsGlobal;
commonjsGlobal.document = new _Document2['default']();
commonjsGlobal.Event = _Event2['default'];
commonjsGlobal.Node = _Node2['default'];
commonjsGlobal.Document = _Document2['default'];
commonjsGlobal.DocumentFragment = _DocumentFragment2['default'];

});

unwrapExports(global_1);

function applyNodeStyle(node, style) {
    for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        node.style.setProperty(key, value);
    }
}
var ObjectDom = /** @class */ (function () {
    function ObjectDom() {
        var _this = this;
        this.update = function () { };
        this.toHtml = function () { return _this.build().node.outerHTML; };
    }
    return ObjectDom;
}());
var CoreDom = /** @class */ (function (_super) {
    __extends(CoreDom, _super);
    function CoreDom(props) {
        var _this = _super.call(this) || this;
        _this.build = function () { return _this; };
        _this._node = props.node;
        _this._style = props.style;
        _this._children = [];
        _this._classList = [];
        _this.id = props.id;
        if (props === null || props === void 0 ? void 0 : props.text)
            _this.node.innerText = props.text;
        if (props === null || props === void 0 ? void 0 : props.className) {
            if (typeof props.className === 'string') {
                _this.addClassName(props.className);
            }
            else {
                props.className.forEach(function (e) { return _this.addClassName(e); });
            }
        }
        if (_this.style)
            applyNodeStyle(_this.node, _this.style);
        if (props === null || props === void 0 ? void 0 : props.children)
            for (var _i = 0, _a = props.children; _i < _a.length; _i++) {
                var child = _a[_i];
                _this.addChild(child);
            }
        return _this;
    }
    Object.defineProperty(CoreDom.prototype, "classList", {
        get: function () {
            return this._classList;
        },
        enumerable: false,
        configurable: true
    });
    CoreDom.prototype.addClassName = function (val) {
        this._classList.push(val);
        this.node.classList.add(val);
    };
    Object.defineProperty(CoreDom.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
            if (value)
                this.node.id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "node", {
        get: function () {
            return this._node;
        },
        set: function (value) {
            this._node = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            this._style = value;
            if (this.style)
                applyNodeStyle(this.node, this.style);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CoreDom.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    CoreDom.prototype.addChild = function (value) {
        this._children.push(value);
        if (value instanceof ObjectDom) {
            this._node.append(value.build().node);
        }
        else {
            this._node.append(value);
        }
    };
    return CoreDom;
}(ObjectDom));

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('div') }, props)) || this;
    }
    return Div;
}(CoreDom));
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
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'block', props) || this;
    }
    return Block;
}(Display));
var Inline = /** @class */ (function (_super) {
    __extends(Inline, _super);
    function Inline(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline', props) || this;
    }
    return Inline;
}(Display));
var InlineBlock = /** @class */ (function (_super) {
    __extends(InlineBlock, _super);
    function InlineBlock(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'inline-block', props) || this;
    }
    return InlineBlock;
}(Display));
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'flex', props) || this;
    }
    return Flex;
}(Display));
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

var Text$1 = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(tag, props) {
        var _this = _super.call(this, __assign({ node: document.createElement(tag) }, props)) || this;
        _this.text = props.text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (text)
                this.node.innerText = text;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(CoreDom));
var Span = /** @class */ (function (_super) {
    __extends(Span, _super);
    function Span(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'span', props) || this;
    }
    return Span;
}(Text$1));
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'p', props) || this;
    }
    return Paragraph;
}(Text$1));
var Bold = /** @class */ (function (_super) {
    __extends(Bold, _super);
    function Bold(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'b', props) || this;
    }
    return Bold;
}(Text$1));
var Strong = /** @class */ (function (_super) {
    __extends(Strong, _super);
    function Strong(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'strong', props) || this;
    }
    return Strong;
}(Text$1));
var Italic = /** @class */ (function (_super) {
    __extends(Italic, _super);
    function Italic(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'i', props) || this;
    }
    return Italic;
}(Text$1));
var Emphasized = /** @class */ (function (_super) {
    __extends(Emphasized, _super);
    function Emphasized(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'em', props) || this;
    }
    return Emphasized;
}(Text$1));
var Marked = /** @class */ (function (_super) {
    __extends(Marked, _super);
    function Marked(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'mark', props) || this;
    }
    return Marked;
}(Text$1));
var Smaller = /** @class */ (function (_super) {
    __extends(Smaller, _super);
    function Smaller(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'small', props) || this;
    }
    return Smaller;
}(Text$1));
var Deleted = /** @class */ (function (_super) {
    __extends(Deleted, _super);
    function Deleted(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'del', props) || this;
    }
    return Deleted;
}(Text$1));
var Inserted = /** @class */ (function (_super) {
    __extends(Inserted, _super);
    function Inserted(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'ins', props) || this;
    }
    return Inserted;
}(Text$1));
var Subscript = /** @class */ (function (_super) {
    __extends(Subscript, _super);
    function Subscript(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'sub', props) || this;
    }
    return Subscript;
}(Text$1));
var Superscript = /** @class */ (function (_super) {
    __extends(Superscript, _super);
    function Superscript(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'sup', props) || this;
    }
    return Superscript;
}(Text$1));
var Heading1 = /** @class */ (function (_super) {
    __extends(Heading1, _super);
    function Heading1(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h1', props) || this;
    }
    return Heading1;
}(Text$1));
var Heading2 = /** @class */ (function (_super) {
    __extends(Heading2, _super);
    function Heading2(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h2', props) || this;
    }
    return Heading2;
}(Text$1));
var Heading3 = /** @class */ (function (_super) {
    __extends(Heading3, _super);
    function Heading3(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h3', props) || this;
    }
    return Heading3;
}(Text$1));
var Heading4 = /** @class */ (function (_super) {
    __extends(Heading4, _super);
    function Heading4(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h4', props) || this;
    }
    return Heading4;
}(Text$1));
var Heading5 = /** @class */ (function (_super) {
    __extends(Heading5, _super);
    function Heading5(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h5', props) || this;
    }
    return Heading5;
}(Text$1));
var Heading6 = /** @class */ (function (_super) {
    __extends(Heading6, _super);
    function Heading6(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h6', props) || this;
    }
    return Heading6;
}(Text$1));

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, __assign({ node: document.createElement('button') }, props)) || this;
        _this.onClick = function () { };
        if (props === null || props === void 0 ? void 0 : props.onClick)
            _this.onClick = props.onClick;
        _this.node.addEventListener('click', function () { return _this.onClick(); });
        _this.text = props.text;
        return _this;
    }
    Object.defineProperty(Button.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (text)
                this.node.innerText = text;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(CoreDom));

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
}(CoreDom));
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
}(CoreDom));
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
}(CoreDom));
var SubmitInput = /** @class */ (function (_super) {
    __extends(SubmitInput, _super);
    function SubmitInput(props) {
        return _super.call(this, 'submit', props) || this;
    }
    return SubmitInput;
}(Input));
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        return _super.call(this, 'text', props) || this;
    }
    return TextInput;
}(Input));
var FileInput = /** @class */ (function (_super) {
    __extends(FileInput, _super);
    function FileInput(props) {
        return _super.call(this, 'file', props) || this;
    }
    return FileInput;
}(Input));
var NumberInput = /** @class */ (function (_super) {
    __extends(NumberInput, _super);
    function NumberInput(props) {
        return _super.call(this, 'number', props) || this;
    }
    return NumberInput;
}(Input));
var PhoneInput = /** @class */ (function (_super) {
    __extends(PhoneInput, _super);
    function PhoneInput(props) {
        return _super.call(this, 'tel', props) || this;
    }
    return PhoneInput;
}(Input));
var EmailInput = /** @class */ (function (_super) {
    __extends(EmailInput, _super);
    function EmailInput(props) {
        return _super.call(this, 'email', props) || this;
    }
    return EmailInput;
}(Input));
var ColorInput = /** @class */ (function (_super) {
    __extends(ColorInput, _super);
    function ColorInput(props) {
        return _super.call(this, 'color', props) || this;
    }
    return ColorInput;
}(Input));
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
}(Div));

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(props) {
        return _super.call(this, __assign({ node: document.createElement('table') }, props)) || this;
    }
    return Table;
}(CoreDom));
var TableRow = /** @class */ (function (_super) {
    __extends(TableRow, _super);
    function TableRow(props) {
        return _super.call(this, __assign({ node: document.createElement('tr') }, props)) || this;
    }
    return TableRow;
}(CoreDom));
var Section = /** @class */ (function (_super) {
    __extends(Section, _super);
    function Section(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Section;
}(CoreDom));
var TableHeader = /** @class */ (function (_super) {
    __extends(TableHeader, _super);
    function TableHeader(props) {
        return _super.call(this, document.createElement('thead'), props) || this;
    }
    return TableHeader;
}(Section));
var TableFooter = /** @class */ (function (_super) {
    __extends(TableFooter, _super);
    function TableFooter(props) {
        return _super.call(this, document.createElement('tfoot'), props) || this;
    }
    return TableFooter;
}(Section));
var TableBody = /** @class */ (function (_super) {
    __extends(TableBody, _super);
    function TableBody(props) {
        return _super.call(this, document.createElement('tbody'), props) || this;
    }
    return TableBody;
}(Section));
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
}(CoreDom));
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(props) {
        return _super.call(this, __assign({ node: document.createElement('td') }, props)) || this;
    }
    return Cell;
}(CoreDom));
var Caption = /** @class */ (function (_super) {
    __extends(Caption, _super);
    function Caption(props) {
        return _super.call(this, __assign({ node: document.createElement('caption') }, props)) || this;
    }
    return Caption;
}(CoreDom));
var Col = /** @class */ (function (_super) {
    __extends(Col, _super);
    function Col(node, props) {
        return _super.call(this, __assign({ node: node }, props)) || this;
    }
    return Col;
}(CoreDom));
var TableColumn = /** @class */ (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(props) {
        return _super.call(this, document.createElement('col'), props) || this;
    }
    return TableColumn;
}(Col));
var TableColumnGroup = /** @class */ (function (_super) {
    __extends(TableColumnGroup, _super);
    function TableColumnGroup(props) {
        return _super.call(this, document.createElement('colgroup'), props) || this;
    }
    return TableColumnGroup;
}(Col));

var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('html') }, props)) || this;
    }
    return Html;
}(CoreDom));
var Head = /** @class */ (function (_super) {
    __extends(Head, _super);
    function Head(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('head') }, props)) || this;
    }
    return Head;
}(CoreDom));
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('body') }, props)) || this;
    }
    return Body;
}(CoreDom));
var Script = /** @class */ (function (_super) {
    __extends(Script, _super);
    function Script(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('script') }, props)) || this;
    }
    return Script;
}(CoreDom));
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('style') }, props)) || this;
    }
    return Style;
}(CoreDom));
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('link') }, props)) || this;
    }
    return Link;
}(CoreDom));
var Meta = /** @class */ (function (_super) {
    __extends(Meta, _super);
    function Meta(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('meta') }, props)) || this;
    }
    return Meta;
}(CoreDom));
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('title') }, props)) || this;
    }
    return Title;
}(CoreDom));

var Custom = /** @class */ (function (_super) {
    __extends(Custom, _super);
    function Custom(tag, props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement(tag) }, props)) || this;
    }
    return Custom;
}(CoreDom));
var Break = /** @class */ (function (_super) {
    __extends(Break, _super);
    function Break(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, __assign({ node: document.createElement('br') }, props)) || this;
    }
    return Break;
}(CoreDom));

export { ObjectDom, CoreDom, Div, Grid, Block, Inline, InlineBlock, Flex, Row, Column, Wrap, Text$1 as Text, Span, Paragraph, Bold, Strong, Italic, Emphasized, Marked, Smaller, Deleted, Inserted, Subscript, Superscript, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Button, Form, Label, Input, SubmitInput, TextInput, FileInput, NumberInput, PhoneInput, EmailInput, ColorInput, InputGroup, Table, TableRow, TableHeader, TableFooter, TableBody, HeaderCell, Cell, Caption, TableColumn, TableColumnGroup, Html, Head, Body, Script, Style, Link, Meta, Title, Custom, Break };
//# sourceMappingURL=object-dom.es5.js.map
