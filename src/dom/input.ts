import { ObjectDom, NodeProps } from '../base';
import { Div } from './div';

export interface FormProps extends NodeProps {
  method: 'post' | 'get' | 'dialog';
  action: string;
  acceptCharset: string;
  target: '_self' | '_blank' | '_parent' | '_top';
  autocomplete: boolean;
  novalidate: boolean;
}

export class Form extends ObjectDom<HTMLFormElement> {
  constructor(type: string, props: FormProps) {
    super({ node: document.createElement('form'), ...props });
    this.node.addEventListener('change', () => this.onChange());
    this.node.type = type;
    if (props?.target) this.node.target = props.target;
    if (props?.acceptCharset) this.node.acceptCharset = props.acceptCharset;
    if (props?.method) this.node.method = props.method;
    if (props?.action) this.node.action = props.action;
    if (props?.novalidate) this.node.noValidate = props.novalidate;
    if (props?.autocomplete) this.node.autocomplete = props.autocomplete ? 'on' : 'off';
  }

  onChange: Function = () => {};
}

export interface LabelProps extends NodeProps {
  value?: string;
  input?: string;
}

export class Label extends ObjectDom<HTMLLabelElement> {
  constructor(props: LabelProps) {
    super({ node: document.createElement('label'), ...props });
    if (props?.value) this.value = props.value;
    if (props?.input) this.node.htmlFor = props.input;
  }

  public set value(val: string | undefined) {
    this.node.innerText = val ?? '';
  }
}

export interface InputProps extends NodeProps {
  value?: string;
  name?: string;
  required?: boolean;
}

export class Input extends ObjectDom<HTMLInputElement> {
  constructor(type: string, props: InputProps) {
    super({ node: document.createElement('input'), ...props });
    this.node.addEventListener('change', val => this.onChange(val));
    this.node.type = type;
    if (props?.name) this.node.name = props.name;
    if (props?.required) this.node.required = props.required;
  }

  public get value(): string | undefined {
    return this.node.value ?? '';
  }
  public set value(val: string | undefined) {
    this.node.value = val ?? '';
  }

  onChange: Function = (val: string) => {};
}

export class SubmitInput extends Input {
  constructor(props: InputProps) {
    super('submit', props);
  }
}

export class TextInput extends Input {
  constructor(props: InputProps) {
    super('text', props);
  }
}

export class FileInput extends Input {
  constructor(props: InputProps) {
    super('file', props);
  }
}

export class NumberInput extends Input {
  constructor(props: InputProps) {
    super('number', props);
  }
}

export class PhoneInput extends Input {
  constructor(props: InputProps) {
    super('tel', props);
  }
}

export class EmailInput extends Input {
  constructor(props: InputProps) {
    super('email', props);
  }
}

export class ColorInput extends Input {
  constructor(props: InputProps) {
    super('color', props);
  }
}

export interface InputGroupProps extends NodeProps {
  input?: InputProps;
  label?: LabelProps;
}

export class InputGroup extends Div {
  constructor(id: string, type: string, props: InputGroupProps = {}) {
    super({ style: props?.style });
    let children = [
      new Label({
        input: id,
        ...props?.label
      }),
      new Input(type, {
        id,
        ...props?.input
      })
    ];
    for (const child of children) {
      this.addChild(child);
    }
  }
}
