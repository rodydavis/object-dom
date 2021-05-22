const fs = require("fs");
const p = require("path");
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const HtmlTableToJson = require("html-table-to-json");
const { pascalCase, camelCase } = require('change-case');

const All_TAGS = "https://www.w3schools.com/TAGS/default.asp";
const TAG_LINK_PREFIX = "https://www.w3schools.com/TAGS/tag_";
const Tags_Location = "src/dom/_tags";

async function main() {
    if (!fs.existsSync(".cache")) fs.mkdirSync(".cache");
    const dom = await downloadWebpage(All_TAGS, "tags");
    const doc = dom.window.document;
    const root = doc.querySelector("#htmltags");
    for (const item of tableToJson(root.innerHTML)) {
        if (item.Tag.startsWith("<!")) continue;
        await processTag(item);
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
    const tagName = Tag.replace("<", "").replace(">", "");
    const url = `${TAG_LINK_PREFIX}${tagName}.asp`;
    const dom = await downloadWebpage(url, tagName);
    const template = await tagTemplate(tagName, Description, url, dom);
    const tagPath = p.join(Tags_Location, `${tagName}.ts`);
    fs.writeFileSync(tagPath, template);
}



/**
 * @param {string} name
 * @param {string} desc
 */
async function tagTemplate(name, desc, url, dom) {
    const tagName = name;
    const className = pascalCase(name);
    const description = desc.replace("<", "`<").replace(">", ">`");
    const browserSupport = getBrowserSupport(dom.window.document.querySelector("table.browserref"));
    const attributes = [];
    const attrs = tableToJson(dom.window.document.querySelector("table.w3-table-all")?.outerHTML);
    if (attrs[0]?.Attribute) {
        for (const attr of attrs) {
            const attrName = attr.Attribute;
            const TAG_ATTR_URL = `https://www.w3schools.com/TAGS/att_${tagName}_${attrName}.asp`;
            const attrDom = await downloadWebpage(TAG_ATTR_URL, `${tagName}-${attrName}`);
            const attrSupport = getBrowserSupport(attrDom.window.document.querySelector("table.browserref"));
            const example = attrDom.window.document.querySelector("div.w3-code")?.textContent;
            const attrValues = tableToJson(attrDom.window.document.querySelector("table.w3-table-all")?.outerHTML);
            const values = [];
            if (attrValues && attrValues.length > 0 && attrValues[0]?.Value) {
                for (const val of attrValues) {
                    const { Value, Description } = val;
                    values.push(`${commentTemplate({
                        description: Description
                    })} "${Value}"`);
                }
            }
            attributes.push(`
            ${commentTemplate({
                name: `\`<${tagName} ${attrName}>\``,
                description: attr.Description,
                url: TAG_ATTR_URL,
                example,
                ...attrSupport,
            })}
            ${camelCase(attrName)}?: ${values.length > 1 ? values.join(' | ') : 'string'};`);
        }
    }
    return `
    import type { NodeProps, PossibleAttr } from "../../object-dom";
    import { GlobalDom } from "../../object-dom";

    export interface ${className}Props extends NodeProps<HTMLElement> {
        attributes?: {
            ${attributes.join("\n")}
            [key: string]: PossibleAttr;
        }
    }
    
    ${commentTemplate({
        name: `\`<${tagName}>\``,
        description,
        url,
        ...browserSupport,
    })}
    export class ${className} extends GlobalDom<HTMLElement> {
      constructor(props: ${className}Props = {}) {
        super({ node: document.createElement("${tagName}"), ...props });
      }
    }    
    `;
}

function getBrowserSupport(query) {
    const s = { chrome: "Yes", edge: "Yes", firefox: "Yes", safari: "Yes" };
    const bs = tableToJson(query?.outerHTML);
    if (bs[0]) {
        const { 2: Chrome, 3: Edge, 4: Firefox, 5: Safari } = bs[0];
        s.chrome = Chrome;
        s.edge = Edge;
        s.firefox = Firefox;
        s.safari = Safari;
    }
    return s;
}

function commentTemplate(options) {
    const sb = [`/**`];
    if (options.name) {
        sb.push(`* ${options.name}`);
        sb.push(`* `);
    }
    if (options.description) {
        sb.push(`* ${options.description}`);
        sb.push(`* `);
    }
    if (options.chrome && options.firefox && options.safari && options.edge) {
        sb.push(`* |  Chrome  | Firefox |  Safari   |  Edge  |`);
        sb.push(`* | :------: | :-----: | :-------: | :----: |`);
        sb.push(`* |  **${options.chrome}**  | **${options.firefox}**  |   **${options.safari}**   | **${options.edge}** |`);
        sb.push(`* `);
    }
    if (options.example) {
        sb.push(`Example: \`${options.example.trim()}\``);
        sb.push(`* `);
    }
    if (options.url) {
        sb.push(`@see ${options.url}`);
    }
    sb.push(`*/`);
    return sb.join('\n');
}

main();
