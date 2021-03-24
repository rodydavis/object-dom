import { ObjectDom, Style, NodeArray } from '../base'

class Div extends ObjectDom<HTMLDivElement> {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? [])
  }
}

class Flex extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'flex'
  }
}

class Row extends Flex {
  constructor(props: { style?: Style; children?: NodeArray; reversed?: boolean } = {}) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'row-reversed' : 'row'
  }
}

class Column extends Flex {
  constructor(props: { style?: Style; children?: NodeArray; reversed?: boolean } = {}) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'column-reversed' : 'column'
  }
}

class Wrap extends Flex {
  constructor(
    props: { style?: Style; children?: NodeArray; reversed?: boolean; none?: boolean } = {}
  ) {
    super(props)
    this.node.style.flexWrap = props?.none ? 'nowrap' : props?.reversed ? 'wrap-reversed' : 'wrap'
  }
}

class Grid extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'grid'
  }
}

class Block extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'block'
  }
}

class Inline extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'inline'
  }
}

class InlineBlock extends Div {
  constructor(props: { style?: Style; children?: NodeArray } = {}) {
    super(props)
    this.node.style.display = 'inline-block'
  }
}

export { Div, Flex, Row, Column, Wrap, Grid, Block, Inline, InlineBlock }
