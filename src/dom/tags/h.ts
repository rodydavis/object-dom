import { GlobalDom, NodeProps } from "../../object-dom";

export class Heading extends GlobalDom<HTMLHeadingElement> {
  constructor(level: 1 | 2 | 3 | 4 | 5 | 6, props: NodeProps<HTMLHeadingElement> = {}) {
    super({ node: document.createElement(`h${level}`) as HTMLHeadingElement, ...props });
  }
}

/**
 * Defines HTML heading 1.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H1 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(1, props);
  }
}

/**
 * Defines HTML heading 2.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H2 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(2, props);
  }
}

/**
 * Defines HTML heading 3.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H3 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(3, props);
  }
}

/**
 * Defines HTML heading 4.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H4 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(4, props);
  }
}

/**
 * Defines HTML heading 5.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H5 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(5, props);
  }
}

/**
 * Defines HTML heading 6.
 *
 * Reference: https://www.w3schools.com/TAGS/tag_hn.asp
 */
export class H6 extends Heading {
  constructor(props: NodeProps<HTMLHeadingElement> = {}) {
    super(6, props);
  }
}
