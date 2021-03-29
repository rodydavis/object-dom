import { NodeProps } from '../base';
import { Cell, HeaderCell, Table, TableHeader, TableRow } from '../dom';

export interface TableJsonProps {
  table?: NodeProps<HTMLTableElement>;
  header?: TableHeader;
  body?: TableHeader;
  headerRow?: NodeProps<HTMLTableRowElement>;
  tableRow?: NodeProps<HTMLTableRowElement>;
}

export function jsonTable(data: Object[], props: TableJsonProps = {}): Table {
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
