const fs = require('fs');
const p = require('path');
const fetch = require('node-fetch');
const jsdom = require("jsdom");
const HtmlTableToJson = require('html-table-to-json');


const All_TAGS = "https://www.w3schools.com/TAGS/default.asp";
const TAG_LINK_PREFIX = "https://www.w3schools.com/TAGS/tag_";
const Tags_Location = "src/dom/_tags";

async function main() {
    if (!fs.existsSync('.cache')) fs.mkdirSync('.cache');
    const dom = await downloadWebpage(All_TAGS, 'tags');
    const doc = dom.window.document;
    const root = doc.querySelector('#htmltags');
    for (const item of tableToJson(root.innerHTML)) {
        if (item.Tag.startsWith('<!')) continue;
        await processTag(item)
    }
}

function tableToJson(content) {
    if (content) {
        const jsonTables = HtmlTableToJson.parse(content);
        const results = jsonTables.results[0];
        if (results) return results;
    }
    return [];
}

/**
 * @param {string} url
 * @param {string} name
 */
async function downloadWebpage(url, name) {
    const cachePath = `.cache/${name}.html`;
    let content;
    if (!fs.existsSync(cachePath)) {
        content = await fetch(url).then((res) => res.text());
        fs.writeFileSync(cachePath, content);
    }
    return jsdom.JSDOM.fromFile(cachePath);
}

async function processTag(tag) {
    const { Tag, Description } = tag;
    const tagName = Tag.replace('<', '').replace('>', '');
    const url = `${TAG_LINK_PREFIX}${tagName}.asp`;

    const dom = await downloadWebpage(url, tagName);
    const doc = dom.window.document;
    const result = tableToJson(doc.querySelector('table.browserref')?.outerHTML);
    const template = tagTemplate(tagName, Description, url, result[0]);
    const tagPath = p.join(Tags_Location, `${tagName}.ts`);
    fs.writeFileSync(tagPath, template);
}

/**
 * @param {string} name
 * @param {string} desc
 */
function tagTemplate(name, desc, url, support) {
    const tagName = name;
    const className = name.charAt(0).toUpperCase() + name.slice(1);
    const description = desc.replace('<', '`<').replace('>', '>`');
    const s = { chrome: 'Yes', edge: 'Yes', firefox: 'Yes', safari: 'Yes'};
    if (support) {
        const { '2': Chrome, '3': Edge, '4': Firefox, '5': Safari } = support;
        s.chrome = Chrome;
        s.edge = Edge;
        s.firefox = Firefox;
        s.safari = Safari;
    }
    return `
    import type { NodeProps } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ${className}Props extends NodeProps<HTMLElement> {

    }
    
    /**
     * HTML tag: \`<${tagName}>\`
     * 
     * ${description}
     *
     * |  Chrome  | Firefox |  Safari   |  Edge  |
     * | :------: | :-----: | :-------: | :----: |
     * |  **${s.chrome}**  | **${s.firefox}**  |   **${s.safari}**   | **${s.edge}** |
     * 
     * @see ${url}
     */
    export class ${className} extends GlobalDom<HTMLElement> {
      constructor(props: ${className}Props = {}) {
        super({ node: document.createElement("${tagName}"), ...props });
      }
    }    
    `;
}

main();