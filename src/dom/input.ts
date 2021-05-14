import { GlobalDom, NodeProps } from '../base';
import { Div } from './div';
import { NodeAttr, InputType, Method, Target } from './attrs';

export interface FormProps extends NodeProps<HTMLFormElement> {
  method?: Method;
  action?: string;
  acceptCharset?: string;
  target?: Target;
  autocomplete?: 'on' | 'off';
  novalidate?: boolean;
}

export class Form extends GlobalDom<HTMLFormElement> {
  constructor(props: FormProps = {}) {
    super({ node: document.createElement('form'), ...props });
    this.node.addEventListener('change', () => this.onChange());
    this.target = new NodeAttr(this, 'target', props?.target);
    this.acceptCharset = new NodeAttr(this, 'accept-charset', props?.acceptCharset);
    this.method = new NodeAttr(this, 'method', props?.method);
    this.action = new NodeAttr(this, 'action', props?.action);
    this.autocomplete = new NodeAttr(this, 'autocomplete', props?.autocomplete);
    this.novalidate = new NodeAttr(this, 'novalidate', props?.novalidate);
  }
  target: NodeAttr<Target>;
  acceptCharset: NodeAttr;
  method: NodeAttr<Method>;
  action: NodeAttr;
  autocomplete: NodeAttr;
  novalidate: NodeAttr<boolean>;

  onChange: Function = () => {};
}

export interface LabelProps extends NodeProps<HTMLLabelElement> {
  value?: string;
  input?: string;
}

export class Label extends GlobalDom<HTMLLabelElement> {
  constructor(props: LabelProps = {}) {
    super({ node: document.createElement('label'), ...props });
    this.value = props.value;
    this.input = new NodeAttr(this, 'for', props?.input);
  }
  input: NodeAttr;

  public get value(): string | undefined {
    return this.node.innerText;
  }
  public set value(val: string | undefined) {
    this.node.innerText = val ?? '';
  }
}

export interface InputProps extends NodeProps<HTMLInputElement> {
  type?: InputType;
  value?: string;
  name?: string;
  required?: boolean;
}

export class Input extends GlobalDom<HTMLInputElement> {
  constructor(props: InputProps = {}) {
    super({ node: document.createElement('input'), ...props });
    this.node.addEventListener('change', val => this.onChange(val));
    this.type = new NodeAttr(this, 'type', props?.type);
    this.name = new NodeAttr(this, 'name', props?.type);
    this.required = new NodeAttr(this, 'required', props?.type);
  }
  type: NodeAttr;
  name: NodeAttr;
  required: NodeAttr;

  public get value(): string | undefined {
    return this.node.value ?? '';
  }
  public set value(val: string | undefined) {
    this.node.value = val ?? '';
  }

  onChange: Function = (val: string) => {
    console.log('input value', val);
  };
}

export interface InputGroupProps extends NodeProps<HTMLDivElement> {
  input?: InputProps;
  label?: LabelProps;
}

export class InputGroup extends Div {
  constructor(id: string, type: InputType, props: InputGroupProps = {}) {
    super({ style: props?.style });
    let children = [
      new Label({
        input: id,
        ...props?.label
      }),
      new Input({
        id,
        type,
        ...props?.input
      })
    ];
    for (const child of children) {
      this.addChild(child);
    }
  }
}
