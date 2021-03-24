import { ObjectDom, Style, NodeArray } from '../base'

export class Div extends ObjectDom<HTMLDivElement> {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? [])
  }
}

export class Flex extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'flex'
  }
}

export class Row extends Flex {
  constructor(props: { style?: Style; children?: NodeArray; reversed?: boolean } = {}) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'row-reversed' : 'row'
  }
}

export class Column extends Flex {
  constructor(props: { style?: Style; children?: NodeArray; reversed?: boolean } = {}) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'column-reversed' : 'column'
  }
}

export class Wrap extends Flex {
  constructor(
    props: { style?: Style; children?: NodeArray; reversed?: boolean; none?: boolean } = {}
  ) {
    super(props)
    this.node.style.flexWrap = props?.none ? 'nowrap' : props?.reversed ? 'wrap-reversed' : 'wrap'
  }
}

export class Grid extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'grid'
  }
}

export class Block extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'block'
  }
}

export class Inline extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'inline'
  }
}

export class InlineBlock extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'inline-block'
  }
}
