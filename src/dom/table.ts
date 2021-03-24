import { ObjectDom, NodeProps } from '../base';

export interface TableJsonProps {
  table?: NodeProps;
  header?: TableHeader;
  body?: TableHeader;
  headerRow?: NodeProps;
  tableRow?: NodeProps;
}

export function tableFromJsonList(data: Object[], props: TableJsonProps = {}): Table {
  const table = new Table(props?.table ?? {});
  let index = 0;
  const headerRow = new TableRow(props?.headerRow ?? props?.tableRow ?? {});
  for (const item of data) {
    const row = new TableRow(props?.tableRow ?? {});
    for (const [key, value] of Object.entries(item)) {
      if (index === 0) {
        const cell = new HeaderCell({ text: key });
        headerRow.addChild(cell);
      }
      const cell = new Cell({ text: value });
      row.addChild(cell);
    }
    if (index === 0) {
      if (props?.header) {
        props.header.addChild(headerRow);
        table.addChild(props.header);
      } else {
        table.addChild(headerRow);
      }
      index++;
    }
    if (props?.body) {
      props.body.addChild(row);
    } else {
      table.addChild(row);
    }
  }
  if (props?.body) {
    table.addChild(props.body);
  }
  return table;
}

export class Table extends ObjectDom<HTMLTableElement> {
  constructor(props: NodeProps) {
    super({ node: document.createElement('table'), ...props });
  }
}

export class TableRow extends ObjectDom<HTMLTableRowElement> {
  constructor(props: NodeProps) {
    super({ node: document.createElement('tr'), ...props });
  }
}

class Section extends ObjectDom<HTMLTableSectionElement> {
  constructor(node: HTMLTableSectionElement, props: NodeProps) {
    super({ node, ...props });
  }
}

export class TableHeader extends Section {
  constructor(props: NodeProps) {
    super(document.createElement('thead'), props);
  }
}

export class TableFooter extends Section {
  constructor(props: NodeProps) {
    super(document.createElement('tfoot'), props);
  }
}

export class TableBody extends Section {
  constructor(props: NodeProps) {
    super(document.createElement('tbody'), props);
  }
}

export interface HeaderNodeProps extends NodeProps {
  colspan?: number;
  rowspan?: number;
}

export class HeaderCell extends ObjectDom<HTMLTableHeaderCellElement> {
  constructor(props: HeaderNodeProps) {
    super({ node: document.createElement('th'), ...props });
    if (props?.colspan) this.node.colSpan = props.colspan;
    if (props?.rowspan) this.node.rowSpan = props.rowspan;
    if (props?.text) this.node.innerText = props.text;
  }
}

export class Cell extends ObjectDom<HTMLTableCellElement> {
  constructor(props: NodeProps) {
    super({ node: document.createElement('td'), ...props });
  }
}

export class Caption extends ObjectDom<HTMLTableCaptionElement> {
  constructor(props: NodeProps) {
    super({ node: document.createElement('caption'), ...props });
  }
}

class Col extends ObjectDom<HTMLTableColElement> {
  constructor(node: HTMLTableColElement, props: NodeProps) {
    super({ node, ...props });
  }
}

export class TableColumn extends Col {
  constructor(props: NodeProps) {
    super(document.createElement('col'), props);
  }
}

export class TableColumnGroup extends Col {
  constructor(props: NodeProps) {
    super(document.createElement('colgroup'), props);
  }
}
