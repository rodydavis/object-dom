import type { NodeProps } from "../base";
import { Td, Th, Table, Thead, Tr } from "../dom";

export interface TableJsonProps {
  table?: NodeProps<HTMLTableElement>;
  header?: Thead;
  body?: Thead;
  headerRow?: NodeProps<HTMLTableRowElement>;
  tableRow?: NodeProps<HTMLTableRowElement>;
}

export function jsonTable(data: Object[], props: TableJsonProps = {}): Table {
  const table = new Table(props?.table ?? {});
  let index = 0;
  const headerRow = new Tr(props?.headerRow ?? props?.tableRow ?? {});
  for (const item of data) {
    const row = new Tr(props?.tableRow ?? {});
    for (const [key, value] of Object.entries(item)) {
      if (index === 0) {
        const cell = new Th({ text: key });
        headerRow.addChild(cell);
      }
      const cell = new Td({ text: value });
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
