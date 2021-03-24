import { ObjectDom, Props } from '../base'

class Div extends ObjectDom<HTMLDivElement> {
  constructor(props: Props = { style: {}, children: [] }) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? [])
  }
}

class Flex extends Div {
  constructor(props: { style: {}; children: [] }) {
    super(props)
    this.node.style.display = 'flex'
  }
}

class Row extends Flex {
  constructor(props: { style: {}; children: []; reversed?: boolean }) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'row-reversed' : 'row'
  }
}

class Column extends Flex {
  constructor(props: { style: {}; children: []; reversed?: boolean }) {
    super(props)
    this.node.style.flexDirection = props?.reversed ? 'column-reversed' : 'column'
  }
}

class Wrap extends Flex {
  constructor(props: { style: {}; children: []; reversed?: boolean; none?: boolean }) {
    super(props)
    this.node.style.flexWrap = props?.none ? 'nowrap' : props?.reversed ? 'wrap-reversed' : 'wrap'
  }
}

class Grid extends Div {
  constructor(props: Props = { style: {}, children: [] }) {
    super(props)
    this.node.style.display = 'grid'
  }
}

class Block extends Div {
  constructor(props: Props = { style: {}, children: [] }) {
    super(props)
    this.node.style.display = 'block'
  }
}

class Inline extends Div {
  constructor(props: Props = { style: {}, children: [] }) {
    super(props)
    this.node.style.display = 'inline'
  }
}

class InlineBlock extends Div {
  constructor(props: Props = { style: {}, children: [] }) {
    super(props)
    this.node.style.display = 'inline-block'
  }
}

export { Div, Flex, Row, Column, Wrap, Grid, Block, Inline, InlineBlock }
