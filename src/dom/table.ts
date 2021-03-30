import { GlobalDom, NodeProps } from '../base';

export class Table extends GlobalDom<HTMLTableElement> {
  constructor(props: NodeProps<HTMLTableElement> = {}) {
    super({ node: document.createElement('table'), ...props });
  }
}

export class TableRow extends GlobalDom<HTMLTableRowElement> {
  constructor(props: NodeProps<HTMLTableRowElement> = {}) {
    super({ node: document.createElement('tr'), ...props });
  }
}

class Section extends GlobalDom<HTMLTableSectionElement> {
  constructor(node: HTMLTableSectionElement, props: NodeProps<HTMLTableSectionElement> = {}) {
    super({ node, ...props });
  }
}

export class TableHeader extends Section {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super(document.createElement('thead'), props);
  }
}

export class TableFooter extends Section {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super(document.createElement('tfoot'), props);
  }
}

export class TableBody extends Section {
  constructor(props: NodeProps<HTMLTableSectionElement> = {}) {
    super(document.createElement('tbody'), props);
  }
}

export interface HeaderNodeProps extends NodeProps<HTMLTableHeaderCellElement> {
  colspan?: number;
  rowspan?: number;
}

export class HeaderCell extends GlobalDom<HTMLTableHeaderCellElement> {
  constructor(props: HeaderNodeProps = {}) {
    super({ node: document.createElement('th'), ...props });
    if (props?.colspan) this.node.colSpan = props.colspan;
    if (props?.rowspan) this.node.rowSpan = props.rowspan;
    if (props?.text) this.node.innerText = props.text;
  }
}

export class Cell extends GlobalDom<HTMLTableCellElement> {
  constructor(props: NodeProps<HTMLTableCellElement> = {}) {
    super({ node: document.createElement('td'), ...props });
  }
}

export class Caption extends GlobalDom<HTMLTableCaptionElement> {
  constructor(props: NodeProps<HTMLTableCaptionElement> = {}) {
    super({ node: document.createElement('caption'), ...props });
  }
}

class Col extends GlobalDom<HTMLTableColElement> {
  constructor(node: HTMLTableColElement, props: NodeProps<HTMLTableColElement> = {}) {
    super({ node, ...props });
  }
}

export class TableColumn extends Col {
  constructor(props: NodeProps<HTMLTableColElement> = {}) {
    super(document.createElement('col'), props);
  }
}

export class TableColumnGroup extends Col {
  constructor(props: NodeProps<HTMLTableColElement> = {}) {
    super(document.createElement('colgroup'), props);
  }
}
