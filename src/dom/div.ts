import { ObjectDom, Style } from '../base'

class Div extends ObjectDom<HTMLDivElement> {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? [])
  }
}

class Flex extends Div {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.display = 'flex'
  }
}

class Row extends Flex {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.flexDirection = 'row'
  }
}

class Column extends Flex {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.flexDirection = 'column'
  }
}

class Grid extends Div {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.display = 'grid'
  }
}

class Block extends Div {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.display = 'block'
  }
}

class Inline extends Div {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.display = 'inline'
  }
}

class InlineBlock extends Div {
  constructor(
    props: { style: Style; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(props)
    this.node.style.display = 'inline-block'
  }
}

export { Div, Flex, Row, Column, Grid, Block, Inline, InlineBlock }
