/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
const removeNodes = (container, start, end = null) => {
  while (start !== end) {
    const n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
const boundAttributeSuffix = "$lit$";
class Template {
  constructor(result, element) {
    this.parts = [];
    this.element = element;
    const nodesToRemove = [];
    const stack = [];
    const walker = document.createTreeWalker(element.content, 133, null, false);
    let lastPartIndex = 0;
    let index = -1;
    let partIndex = 0;
    const {strings, values: {length}} = result;
    while (partIndex < length) {
      const node = walker.nextNode();
      if (node === null) {
        walker.currentNode = stack.pop();
        continue;
      }
      index++;
      if (node.nodeType === 1) {
        if (node.hasAttributes()) {
          const attributes = node.attributes;
          const {length: length2} = attributes;
          let count = 0;
          for (let i = 0; i < length2; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }
          while (count-- > 0) {
            const stringForPart = strings[partIndex];
            const name = lastAttributeNameRegex.exec(stringForPart)[2];
            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            const attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            const statics = attributeValue.split(markerRegex);
            this.parts.push({type: "attribute", index, name, strings: statics});
            partIndex += statics.length - 1;
          }
        }
        if (node.tagName === "TEMPLATE") {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3) {
        const data = node.data;
        if (data.indexOf(marker) >= 0) {
          const parent = node.parentNode;
          const strings2 = data.split(markerRegex);
          const lastIndex = strings2.length - 1;
          for (let i = 0; i < lastIndex; i++) {
            let insert;
            let s = strings2[i];
            if (s === "") {
              insert = createMarker();
            } else {
              const match = lastAttributeNameRegex.exec(s);
              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }
              insert = document.createTextNode(s);
            }
            parent.insertBefore(insert, node);
            this.parts.push({type: "node", index: ++index});
          }
          if (strings2[lastIndex] === "") {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = strings2[lastIndex];
          }
          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8) {
        if (node.data === marker) {
          const parent = node.parentNode;
          if (node.previousSibling === null || index === lastPartIndex) {
            index++;
            parent.insertBefore(createMarker(), node);
          }
          lastPartIndex = index;
          this.parts.push({type: "node", index});
          if (node.nextSibling === null) {
            node.data = "";
          } else {
            nodesToRemove.push(node);
            index--;
          }
          partIndex++;
        } else {
          let i = -1;
          while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
            this.parts.push({type: "node", index: -1});
            partIndex++;
          }
        }
      }
    }
    for (const n of nodesToRemove) {
      n.parentNode.removeChild(n);
    }
  }
}
const endsWith = (str, suffix) => {
  const index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
const createMarker = () => document.createComment("");
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const walkerNodeFilter = 133;
function removeNodesFromTemplate(template, nodesToRemove) {
  const {element: {content}, parts: parts2} = template;
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts2);
  let part = parts2[partIndex];
  let nodeIndex = -1;
  let removeCount = 0;
  const nodesToRemoveInTemplate = [];
  let currentRemovingNode = null;
  while (walker.nextNode()) {
    nodeIndex++;
    const node = walker.currentNode;
    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    }
    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node);
      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    }
    if (currentRemovingNode !== null) {
      removeCount++;
    }
    while (part !== void 0 && part.index === nodeIndex) {
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
      partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
      part = parts2[partIndex];
    }
  }
  nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
}
const countNodes = (node) => {
  let count = node.nodeType === 11 ? 0 : 1;
  const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
  while (walker.nextNode()) {
    count++;
  }
  return count;
};
const nextActiveIndexInTemplateParts = (parts2, startIndex = -1) => {
  for (let i = startIndex + 1; i < parts2.length; i++) {
    const part = parts2[i];
    if (isTemplatePartActive(part)) {
      return i;
    }
  }
  return -1;
};
function insertNodeIntoTemplate(template, node, refNode = null) {
  const {element: {content}, parts: parts2} = template;
  if (refNode === null || refNode === void 0) {
    content.appendChild(node);
    return;
  }
  const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  let partIndex = nextActiveIndexInTemplateParts(parts2);
  let insertCount = 0;
  let walkerIndex = -1;
  while (walker.nextNode()) {
    walkerIndex++;
    const walkerNode = walker.currentNode;
    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }
    while (partIndex !== -1 && parts2[partIndex].index === walkerIndex) {
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts2[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
        }
        return;
      }
      partIndex = nextActiveIndexInTemplateParts(parts2, partIndex);
    }
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
const isDirective = (o) => {
  return typeof o === "function" && directives.has(o);
};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const noChange = {};
const nothing = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class TemplateInstance {
  constructor(template, processor, options) {
    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }
  update(values) {
    let i = 0;
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.setValue(values[i]);
      }
      i++;
    }
    for (const part of this.__parts) {
      if (part !== void 0) {
        part.commit();
      }
    }
  }
  _clone() {
    const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
    const stack = [];
    const parts2 = this.template.parts;
    const walker = document.createTreeWalker(fragment, 133, null, false);
    let partIndex = 0;
    let nodeIndex = 0;
    let part;
    let node = walker.nextNode();
    while (partIndex < parts2.length) {
      part = parts2[partIndex];
      if (!isTemplatePartActive(part)) {
        this.__parts.push(void 0);
        partIndex++;
        continue;
      }
      while (nodeIndex < part.index) {
        nodeIndex++;
        if (node.nodeName === "TEMPLATE") {
          stack.push(node);
          walker.currentNode = node.content;
        }
        if ((node = walker.nextNode()) === null) {
          walker.currentNode = stack.pop();
          node = walker.nextNode();
        }
      }
      if (part.type === "node") {
        const part2 = this.processor.handleTextExpression(this.options);
        part2.insertAfterNode(node.previousSibling);
        this.__parts.push(part2);
      } else {
        this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
      }
      partIndex++;
    }
    if (isCEPolyfill) {
      document.adoptNode(fragment);
      customElements.upgrade(fragment);
    }
    return fragment;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {createHTML: (s) => s});
const commentMarker = ` ${marker} `;
class TemplateResult {
  constructor(strings, values, type, processor) {
    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  getHTML() {
    const l = this.strings.length - 1;
    let html2 = "";
    let isCommentBinding = false;
    for (let i = 0; i < l; i++) {
      const s = this.strings[i];
      const commentOpen = s.lastIndexOf("<!--");
      isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf("-->", commentOpen + 1) === -1;
      const attributeMatch = lastAttributeNameRegex.exec(s);
      if (attributeMatch === null) {
        html2 += s + (isCommentBinding ? commentMarker : nodeMarker);
      } else {
        html2 += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
      }
    }
    html2 += this.strings[l];
    return html2;
  }
  getTemplateElement() {
    const template = document.createElement("template");
    let value = this.getHTML();
    if (policy !== void 0) {
      value = policy.createHTML(value);
    }
    template.innerHTML = value;
    return template;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
  return value === null || !(typeof value === "object" || typeof value === "function");
};
const isIterable = (value) => {
  return Array.isArray(value) || !!(value && value[Symbol.iterator]);
};
class AttributeCommitter {
  constructor(element, name, strings) {
    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];
    for (let i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  _createPart() {
    return new AttributePart(this);
  }
  _getValue() {
    const strings = this.strings;
    const l = strings.length - 1;
    const parts2 = this.parts;
    if (l === 1 && strings[0] === "" && strings[1] === "") {
      const v = parts2[0].value;
      if (typeof v === "symbol") {
        return String(v);
      }
      if (typeof v === "string" || !isIterable(v)) {
        return v;
      }
    }
    let text = "";
    for (let i = 0; i < l; i++) {
      text += strings[i];
      const part = parts2[i];
      if (part !== void 0) {
        const v = part.value;
        if (isPrimitive(v) || !isIterable(v)) {
          text += typeof v === "string" ? v : String(v);
        } else {
          for (const t of v) {
            text += typeof t === "string" ? t : String(t);
          }
        }
      }
    }
    text += strings[l];
    return text;
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element.setAttribute(this.name, this._getValue());
    }
  }
}
class AttributePart {
  constructor(committer) {
    this.value = void 0;
    this.committer = committer;
  }
  setValue(value) {
    if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
      this.value = value;
      if (!isDirective(value)) {
        this.committer.dirty = true;
      }
    }
  }
  commit() {
    while (isDirective(this.value)) {
      const directive = this.value;
      this.value = noChange;
      directive(this);
    }
    if (this.value === noChange) {
      return;
    }
    this.committer.commit();
  }
}
class NodePart {
  constructor(options) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.options = options;
  }
  appendInto(container) {
    this.startNode = container.appendChild(createMarker());
    this.endNode = container.appendChild(createMarker());
  }
  insertAfterNode(ref) {
    this.startNode = ref;
    this.endNode = ref.nextSibling;
  }
  appendIntoPart(part) {
    part.__insert(this.startNode = createMarker());
    part.__insert(this.endNode = createMarker());
  }
  insertAfterPart(ref) {
    ref.__insert(this.startNode = createMarker());
    this.endNode = ref.endNode;
    ref.endNode = this.startNode;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    if (this.startNode.parentNode === null) {
      return;
    }
    while (isDirective(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = noChange;
      directive(this);
    }
    const value = this.__pendingValue;
    if (value === noChange) {
      return;
    }
    if (isPrimitive(value)) {
      if (value !== this.value) {
        this.__commitText(value);
      }
    } else if (value instanceof TemplateResult) {
      this.__commitTemplateResult(value);
    } else if (value instanceof Node) {
      this.__commitNode(value);
    } else if (isIterable(value)) {
      this.__commitIterable(value);
    } else if (value === nothing) {
      this.value = nothing;
      this.clear();
    } else {
      this.__commitText(value);
    }
  }
  __insert(node) {
    this.endNode.parentNode.insertBefore(node, this.endNode);
  }
  __commitNode(value) {
    if (this.value === value) {
      return;
    }
    this.clear();
    this.__insert(value);
    this.value = value;
  }
  __commitText(value) {
    const node = this.startNode.nextSibling;
    value = value == null ? "" : value;
    const valueAsString = typeof value === "string" ? value : String(value);
    if (node === this.endNode.previousSibling && node.nodeType === 3) {
      node.data = valueAsString;
    } else {
      this.__commitNode(document.createTextNode(valueAsString));
    }
    this.value = value;
  }
  __commitTemplateResult(value) {
    const template = this.options.templateFactory(value);
    if (this.value instanceof TemplateInstance && this.value.template === template) {
      this.value.update(value.values);
    } else {
      const instance = new TemplateInstance(template, value.processor, this.options);
      const fragment = instance._clone();
      instance.update(value.values);
      this.__commitNode(fragment);
      this.value = instance;
    }
  }
  __commitIterable(value) {
    if (!Array.isArray(this.value)) {
      this.value = [];
      this.clear();
    }
    const itemParts = this.value;
    let partIndex = 0;
    let itemPart;
    for (const item of value) {
      itemPart = itemParts[partIndex];
      if (itemPart === void 0) {
        itemPart = new NodePart(this.options);
        itemParts.push(itemPart);
        if (partIndex === 0) {
          itemPart.appendIntoPart(this);
        } else {
          itemPart.insertAfterPart(itemParts[partIndex - 1]);
        }
      }
      itemPart.setValue(item);
      itemPart.commit();
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      itemParts.length = partIndex;
      this.clear(itemPart && itemPart.endNode);
    }
  }
  clear(startNode = this.startNode) {
    removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
  }
}
class BooleanAttributePart {
  constructor(element, name, strings) {
    this.value = void 0;
    this.__pendingValue = void 0;
    if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
      throw new Error("Boolean attributes can only contain a single expression");
    }
    this.element = element;
    this.name = name;
    this.strings = strings;
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = noChange;
      directive(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const value = !!this.__pendingValue;
    if (this.value !== value) {
      if (value) {
        this.element.setAttribute(this.name, "");
      } else {
        this.element.removeAttribute(this.name);
      }
      this.value = value;
    }
    this.__pendingValue = noChange;
  }
}
class PropertyCommitter extends AttributeCommitter {
  constructor(element, name, strings) {
    super(element, name, strings);
    this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
  }
  _createPart() {
    return new PropertyPart(this);
  }
  _getValue() {
    if (this.single) {
      return this.parts[0].value;
    }
    return super._getValue();
  }
  commit() {
    if (this.dirty) {
      this.dirty = false;
      this.element[this.name] = this._getValue();
    }
  }
}
class PropertyPart extends AttributePart {
}
let eventOptionsSupported = false;
(() => {
  try {
    const options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }
    };
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (_e) {
  }
})();
class EventPart {
  constructor(element, eventName, eventContext) {
    this.value = void 0;
    this.__pendingValue = void 0;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;
    this.__boundHandleEvent = (e) => this.handleEvent(e);
  }
  setValue(value) {
    this.__pendingValue = value;
  }
  commit() {
    while (isDirective(this.__pendingValue)) {
      const directive = this.__pendingValue;
      this.__pendingValue = noChange;
      directive(this);
    }
    if (this.__pendingValue === noChange) {
      return;
    }
    const newListener = this.__pendingValue;
    const oldListener = this.value;
    const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
    const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    if (shouldAddListener) {
      this.__options = getOptions(newListener);
      this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
    }
    this.value = newListener;
    this.__pendingValue = noChange;
  }
  handleEvent(event) {
    if (typeof this.value === "function") {
      this.value.call(this.eventContext || this.element, event);
    } else {
      this.value.handleEvent(event);
    }
  }
}
const getOptions = (o) => o && (eventOptionsSupported ? {capture: o.capture, passive: o.passive, once: o.once} : o.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function templateFactory(result) {
  let templateCache = templateCaches.get(result.type);
  if (templateCache === void 0) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== void 0) {
    return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === void 0) {
    template = new Template(result, result.getTemplateElement());
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
}
const templateCaches = new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
const render$1 = (result, container, options) => {
  let part = parts.get(container);
  if (part === void 0) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({templateFactory}, options)));
    part.appendInto(container);
  }
  part.setValue(result);
  part.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class DefaultTemplateProcessor {
  handleAttributeExpressions(element, name, strings, options) {
    const prefix = name[0];
    if (prefix === ".") {
      const committer2 = new PropertyCommitter(element, name.slice(1), strings);
      return committer2.parts;
    }
    if (prefix === "@") {
      return [new EventPart(element, name.slice(1), options.eventContext)];
    }
    if (prefix === "?") {
      return [new BooleanAttributePart(element, name.slice(1), strings)];
    }
    const committer = new AttributeCommitter(element, name, strings);
    return committer.parts;
  }
  handleTextExpression(options) {
    return new NodePart(options);
  }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
if (typeof window !== "undefined") {
  (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.4.1");
}
const html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === "undefined") {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === "undefined") {
  console.warn(`Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1.`);
  compatibleShadyCSSVersion = false;
}
const shadyTemplateFactory = (scopeName) => (result) => {
  const cacheKey = getTemplateCacheKey(result.type, scopeName);
  let templateCache = templateCaches.get(cacheKey);
  if (templateCache === void 0) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(cacheKey, templateCache);
  }
  let template = templateCache.stringsArray.get(result.strings);
  if (template !== void 0) {
    return template;
  }
  const key = result.strings.join(marker);
  template = templateCache.keyString.get(key);
  if (template === void 0) {
    const element = result.getTemplateElement();
    if (compatibleShadyCSSVersion) {
      window.ShadyCSS.prepareTemplateDom(element, scopeName);
    }
    template = new Template(result, element);
    templateCache.keyString.set(key, template);
  }
  templateCache.stringsArray.set(result.strings, template);
  return template;
};
const TEMPLATE_TYPES = ["html", "svg"];
const removeStylesFromLitTemplates = (scopeName) => {
  TEMPLATE_TYPES.forEach((type) => {
    const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
    if (templates !== void 0) {
      templates.keyString.forEach((template) => {
        const {element: {content}} = template;
        const styles = new Set();
        Array.from(content.querySelectorAll("style")).forEach((s) => {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};
const shadyRenderSet = new Set();
const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
  shadyRenderSet.add(scopeName);
  const templateElement = !!template ? template.element : document.createElement("template");
  const styles = renderedDOM.querySelectorAll("style");
  const {length} = styles;
  if (length === 0) {
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }
  const condensedStyle = document.createElement("style");
  for (let i = 0; i < length; i++) {
    const style2 = styles[i];
    style2.parentNode.removeChild(style2);
    condensedStyle.textContent += style2.textContent;
  }
  removeStylesFromLitTemplates(scopeName);
  const content = templateElement.content;
  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  }
  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  const style = content.querySelector("style");
  if (window.ShadyCSS.nativeShadow && style !== null) {
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    content.insertBefore(condensedStyle, content.firstChild);
    const removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
const render = (result, container, options) => {
  if (!options || typeof options !== "object" || !options.scopeName) {
    throw new Error("The `scopeName` option is required.");
  }
  const scopeName = options.scopeName;
  const hasRendered = parts.has(container);
  const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 && !!container.host;
  const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
  const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render$1(result, renderContainer, Object.assign({templateFactory: shadyTemplateFactory(scopeName)}, options));
  if (firstScopeRender) {
    const part = parts.get(renderContainer);
    parts.delete(renderContainer);
    const template = part.value instanceof TemplateInstance ? part.value.template : void 0;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  }
  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
window.JSCompiler_renameProperty = (prop, _obj) => prop;
const defaultConverter = {
  toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? "" : null;
      case Object:
      case Array:
        return value == null ? value : JSON.stringify(value);
    }
    return value;
  },
  fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;
      case Number:
        return value === null ? null : Number(value);
      case Object:
      case Array:
        return JSON.parse(value);
    }
    return value;
  }
};
const notEqual = (value, old) => {
  return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 1 << 2;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
const finalized = "finalized";
class UpdatingElement extends HTMLElement {
  constructor() {
    super();
    this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const attributes = [];
    this._classProperties.forEach((v, p) => {
      const attr = this._attributeNameForProperty(p, v);
      if (attr !== void 0) {
        this._attributeToPropertyMap.set(attr, p);
        attributes.push(attr);
      }
    });
    return attributes;
  }
  static _ensureClassProperties() {
    if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
      this._classProperties = new Map();
      const superProperties = Object.getPrototypeOf(this)._classProperties;
      if (superProperties !== void 0) {
        superProperties.forEach((v, k) => this._classProperties.set(k, v));
      }
    }
  }
  static createProperty(name, options = defaultPropertyDeclaration) {
    this._ensureClassProperties();
    this._classProperties.set(name, options);
    if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
      return;
    }
    const key = typeof name === "symbol" ? Symbol() : `__${name}`;
    const descriptor = this.getPropertyDescriptor(name, key, options);
    if (descriptor !== void 0) {
      Object.defineProperty(this.prototype, name, descriptor);
    }
  }
  static getPropertyDescriptor(name, key, options) {
    return {
      get() {
        return this[key];
      },
      set(value) {
        const oldValue = this[name];
        this[key] = value;
        this.requestUpdateInternal(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(name) {
    return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
  }
  static finalize() {
    const superCtor = Object.getPrototypeOf(this);
    if (!superCtor.hasOwnProperty(finalized)) {
      superCtor.finalize();
    }
    this[finalized] = true;
    this._ensureClassProperties();
    this._attributeToPropertyMap = new Map();
    if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
      const props = this.properties;
      const propKeys = [
        ...Object.getOwnPropertyNames(props),
        ...typeof Object.getOwnPropertySymbols === "function" ? Object.getOwnPropertySymbols(props) : []
      ];
      for (const p of propKeys) {
        this.createProperty(p, props[p]);
      }
    }
  }
  static _attributeNameForProperty(name, options) {
    const attribute = options.attribute;
    return attribute === false ? void 0 : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : void 0;
  }
  static _valueHasChanged(value, old, hasChanged = notEqual) {
    return hasChanged(value, old);
  }
  static _propertyValueFromAttribute(value, options) {
    const type = options.type;
    const converter = options.converter || defaultConverter;
    const fromAttribute = typeof converter === "function" ? converter : converter.fromAttribute;
    return fromAttribute ? fromAttribute(value, type) : value;
  }
  static _propertyValueToAttribute(value, options) {
    if (options.reflect === void 0) {
      return;
    }
    const type = options.type;
    const converter = options.converter;
    const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
    return toAttribute(value, type);
  }
  initialize() {
    this._updateState = 0;
    this._updatePromise = new Promise((res) => this._enableUpdatingResolver = res);
    this._changedProperties = new Map();
    this._saveInstanceProperties();
    this.requestUpdateInternal();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((_v, p) => {
      if (this.hasOwnProperty(p)) {
        const value = this[p];
        delete this[p];
        if (!this._instanceProperties) {
          this._instanceProperties = new Map();
        }
        this._instanceProperties.set(p, value);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((v, p) => this[p] = v);
    this._instanceProperties = void 0;
  }
  connectedCallback() {
    this.enableUpdating();
  }
  enableUpdating() {
    if (this._enableUpdatingResolver !== void 0) {
      this._enableUpdatingResolver();
      this._enableUpdatingResolver = void 0;
    }
  }
  disconnectedCallback() {
  }
  attributeChangedCallback(name, old, value) {
    if (old !== value) {
      this._attributeToProperty(name, value);
    }
  }
  _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
    const ctor = this.constructor;
    const attr = ctor._attributeNameForProperty(name, options);
    if (attr !== void 0) {
      const attrValue = ctor._propertyValueToAttribute(value, options);
      if (attrValue === void 0) {
        return;
      }
      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
    }
  }
  _attributeToProperty(name, value) {
    if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
      return;
    }
    const ctor = this.constructor;
    const propName = ctor._attributeToPropertyMap.get(name);
    if (propName !== void 0) {
      const options = ctor.getPropertyOptions(propName);
      this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
      this[propName] = ctor._propertyValueFromAttribute(value, options);
      this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
    }
  }
  requestUpdateInternal(name, oldValue, options) {
    let shouldRequestUpdate = true;
    if (name !== void 0) {
      const ctor = this.constructor;
      options = options || ctor.getPropertyOptions(name);
      if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
        if (!this._changedProperties.has(name)) {
          this._changedProperties.set(name, oldValue);
        }
        if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
          if (this._reflectingProperties === void 0) {
            this._reflectingProperties = new Map();
          }
          this._reflectingProperties.set(name, options);
        }
      } else {
        shouldRequestUpdate = false;
      }
    }
    if (!this._hasRequestedUpdate && shouldRequestUpdate) {
      this._updatePromise = this._enqueueUpdate();
    }
  }
  requestUpdate(name, oldValue) {
    this.requestUpdateInternal(name, oldValue);
    return this.updateComplete;
  }
  async _enqueueUpdate() {
    this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
    try {
      await this._updatePromise;
    } catch (e) {
    }
    const result = this.performUpdate();
    if (result != null) {
      await result;
    }
    return !this._hasRequestedUpdate;
  }
  get _hasRequestedUpdate() {
    return this._updateState & STATE_UPDATE_REQUESTED;
  }
  get hasUpdated() {
    return this._updateState & STATE_HAS_UPDATED;
  }
  performUpdate() {
    if (!this._hasRequestedUpdate) {
      return;
    }
    if (this._instanceProperties) {
      this._applyInstanceProperties();
    }
    let shouldUpdate = false;
    const changedProperties = this._changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        this.update(changedProperties);
      } else {
        this._markUpdated();
      }
    } catch (e) {
      shouldUpdate = false;
      this._markUpdated();
      throw e;
    }
    if (shouldUpdate) {
      if (!(this._updateState & STATE_HAS_UPDATED)) {
        this._updateState = this._updateState | STATE_HAS_UPDATED;
        this.firstUpdated(changedProperties);
      }
      this.updated(changedProperties);
    }
  }
  _markUpdated() {
    this._changedProperties = new Map();
    this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(_changedProperties) {
    return true;
  }
  update(_changedProperties) {
    if (this._reflectingProperties !== void 0 && this._reflectingProperties.size > 0) {
      this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
      this._reflectingProperties = void 0;
    }
    this._markUpdated();
  }
  updated(_changedProperties) {
  }
  firstUpdated(_changedProperties) {
  }
}
_a = finalized;
UpdatingElement[_a] = true;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const legacyCustomElement = (tagName, clazz) => {
  window.customElements.define(tagName, clazz);
  return clazz;
};
const standardCustomElement = (tagName, descriptor) => {
  const {kind, elements} = descriptor;
  return {
    kind,
    elements,
    finisher(clazz) {
      window.customElements.define(tagName, clazz);
    }
  };
};
const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
function query(selector, cache) {
  return (protoOrDescriptor, name) => {
    const descriptor = {
      get() {
        return this.renderRoot.querySelector(selector);
      },
      enumerable: true,
      configurable: true
    };
    if (cache) {
      const prop = name !== void 0 ? name : protoOrDescriptor.key;
      const key = typeof prop === "symbol" ? Symbol() : `__${prop}`;
      descriptor.get = function() {
        if (this[key] === void 0) {
          this[key] = this.renderRoot.querySelector(selector);
        }
        return this[key];
      };
    }
    return name !== void 0 ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
  };
}
const legacyQuery = (descriptor, proto, name) => {
  Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element) => ({
  kind: "method",
  placement: "prototype",
  key: element.key,
  descriptor
});
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const constructionToken = Symbol();
class CSSResult {
  constructor(cssText, safeToken) {
    if (safeToken !== constructionToken) {
      throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    }
    this.cssText = cssText;
  }
  get styleSheet() {
    if (this._styleSheet === void 0) {
      if (supportsAdoptingStyleSheets) {
        this._styleSheet = new CSSStyleSheet();
        this._styleSheet.replaceSync(this.cssText);
      } else {
        this._styleSheet = null;
      }
    }
    return this._styleSheet;
  }
  toString() {
    return this.cssText;
  }
}
const unsafeCSS = (value) => {
  return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value) => {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === "number") {
    return value;
  } else {
    throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
const css = (strings, ...values) => {
  const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
  return new CSSResult(cssText, constructionToken);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window["litElementVersions"] || (window["litElementVersions"] = [])).push("2.5.1");
const renderNotImplemented = {};
class LitElement extends UpdatingElement {
  static getStyles() {
    return this.styles;
  }
  static _getUniqueStyles() {
    if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) {
      return;
    }
    const userStyles = this.getStyles();
    if (Array.isArray(userStyles)) {
      const addStyles = (styles2, set2) => styles2.reduceRight((set3, s) => Array.isArray(s) ? addStyles(s, set3) : (set3.add(s), set3), set2);
      const set = addStyles(userStyles, new Set());
      const styles = [];
      set.forEach((v) => styles.unshift(v));
      this._styles = styles;
    } else {
      this._styles = userStyles === void 0 ? [] : [userStyles];
    }
    this._styles = this._styles.map((s) => {
      if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
        const cssText = Array.prototype.slice.call(s.cssRules).reduce((css2, rule) => css2 + rule.cssText, "");
        return unsafeCSS(cssText);
      }
      return s;
    });
  }
  initialize() {
    super.initialize();
    this.constructor._getUniqueStyles();
    this.renderRoot = this.createRenderRoot();
    if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
      this.adoptStyles();
    }
  }
  createRenderRoot() {
    return this.attachShadow(this.constructor.shadowRootOptions);
  }
  adoptStyles() {
    const styles = this.constructor._styles;
    if (styles.length === 0) {
      return;
    }
    if (window.ShadyCSS !== void 0 && !window.ShadyCSS.nativeShadow) {
      window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
    } else if (supportsAdoptingStyleSheets) {
      this.renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
    } else {
      this._needsShimAdoptedStyleSheets = true;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated && window.ShadyCSS !== void 0) {
      window.ShadyCSS.styleElement(this);
    }
  }
  update(changedProperties) {
    const templateResult = this.render();
    super.update(changedProperties);
    if (templateResult !== renderNotImplemented) {
      this.constructor.render(templateResult, this.renderRoot, {scopeName: this.localName, eventContext: this});
    }
    if (this._needsShimAdoptedStyleSheets) {
      this._needsShimAdoptedStyleSheets = false;
      this.constructor._styles.forEach((s) => {
        const style = document.createElement("style");
        style.textContent = s.cssText;
        this.renderRoot.appendChild(style);
      });
    }
  }
  render() {
    return renderNotImplemented;
  }
}
LitElement["finalized"] = true;
LitElement.render = render;
LitElement.shadowRootOptions = {mode: "open"};
export {LitElement as L, customElement as a, css as c, html as h, query as q};
