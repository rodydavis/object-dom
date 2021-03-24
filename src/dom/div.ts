import { ObjectDom, Styles } from '../base'

class Div extends ObjectDom<HTMLDivElement> {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    super(document.createElement('div'), props?.style ?? {}, props?.children ?? [])
  }
}

class Flex extends Div {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.display = 'flex'
    super(props)
  }
}

class Row extends Flex {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.flexDirection = 'row'
    super(props)
  }
}

class Column extends Flex {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.flexDirection = 'column'
    super(props)
  }
}

class Grid extends Div {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.display = 'grid'
    super(props)
  }
}

class Block extends Div {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.display = 'block'
    super(props)
  }
}

class Inline extends Div {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.display = 'inline'
    super(props)
  }
}

class InlineBlock extends Div {
  constructor(
    props: { style: Styles; children: Array<ObjectDom<HTMLElement>> } = { style: {}, children: [] }
  ) {
    props.style.display = 'inline-block'
    super(props)
  }
}

export { Div, Flex, Row, Column, Grid, Block, Inline, InlineBlock }
