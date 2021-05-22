const fs = require("fs");
const p = require("path");
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const HtmlTableToJson = require("html-table-to-json");
const { pascalCase, camelCase } = require('change-case');

const ALL_CSS = "https://www.w3schools.com/cssref/default.asp";
const All_TAGS = "https://www.w3schools.com/TAGS/default.asp";
const ALL_EVENTS = "https://www.w3schools.com/jsref/dom_obj_event.asp";
const TAG_LINK_PREFIX = "https://www.w3schools.com/TAGS/tag_";
const SRC_LOCATION = "src";
const Tags_Location = `${SRC_LOCATION}/dom/tags`;

async function main() {
    let readme = fs.readFileSync('README.md').toString();
    const start_tag = '<!-- BEGIN_TAGS -->';
    const end_tag = '<!-- END_TAGS -->';
    const startIdx = readme.indexOf(start_tag);
    const endIdx = readme.indexOf(end_tag);
    const prefix = readme.slice(0, startIdx + start_tag.length);
    const suffix = readme.slice(endIdx, readme.length);
    readme = prefix + '\n';
    readme += `
| Tag            | Class      | Description                                                                                              |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------- |`  ;

    if (!fs.existsSync(".cache")) fs.mkdirSync(".cache");
    if (!fs.existsSync(Tags_Location)) fs.mkdirSync(Tags_Location);

    // Process Events
    const eventsDom = await downloadWebpage(ALL_EVENTS, "events");
    const events = [];
    for (const item of tableToJson(eventsDom.window.document.querySelector("table.w3-table-all")?.outerHTML)) {
        const { Event, Description } = item;
        events.push(`
        ${commentTemplate({
            description: Description
        })}
        ${camelCase(Event)}?: EventListenerOrEventListenerObject;
        `);
    }
    await eventsTemplate(events);

    // Process CSS
    const cssDom = await downloadWebpage(ALL_CSS, "css");
    const css = [];
    const sections = cssDom.window.document.querySelectorAll("table.w3-table-all");
    for (const section of sections) {
        for (const item of tableToJson(section?.outerHTML)) {
            const [Name, Description] = Object.values(item);
            const url = `https://www.w3schools.com/cssref/css3_pr_${Name}.asp`;
            const cssDetailsDom = await downloadWebpage(url, `css-${Name}`);
            const cssSupport = getBrowserSupport(cssDetailsDom.window.document.querySelector("table.browserref"));
            const tables = cssDetailsDom.window.document.querySelectorAll("table.w3-table-all");
            const cssProperties = tables[1];
            const values = [];
            if (cssProperties) {
                const cssValues = tableToJson(cssProperties?.outerHTML);
                // console.log(Name, 'cssValues', cssValues);
                if (cssValues && cssValues.length > 0 && cssValues[0]?.Value) {
                    let needsFallback = false;
                    for (const val of cssValues) {
                        const { Value, Description } = val;
                        if (!Value) continue;
                        const ValName = Value.split('\n').join('');
                        if (ValName.includes('(') && ValName.includes(')')) {
                            needsFallback = true;
                            values.push(`
                            ${commentTemplate({
                                example: ValName,
                                description: Description
                            })}
                            ${values.length > 0 ? '|' : ''} "${ValName.split('(')[0]}"
                            `);
                        } else {
                            values.push(`
                            ${commentTemplate({
                                description: Description
                            })}
                            ${values.length > 0 ? '|' : ''} "${ValName}"`);
                        }
                    }
                    if (needsFallback) {
                        values.push(` | PossibleStyle`);
                    }
                }
            }
            css.push(`
            ${commentTemplate({
                name: Name,
                description: Description,
                url,
                ...cssSupport,
            })}
            ${camelCase(Name)}?: ${values.length > 1 ? values.join('\n') : 'PossibleStyle'};
            `);
        }
    }
    await cssTemplate(css);

    const tagsDom = await downloadWebpage(All_TAGS, "tags");
    const tags = [];
    for (const item of tableToJson(tagsDom.window.document.querySelector("#htmltags")?.innerHTML)) {
        if (item.Tag.startsWith("<!")) continue;
        if (item.Description.includes("Not supported")) continue;
        if (item.Tag.includes(" to ")) {
            for (let i = 1; i <= 6; i++) {
                const meta = { Tag: `h${i}`, Description: item.Description };
                await processTag(meta, tags);
            }
            continue;
        }
        await processTag(item, tags);
    }
    for (const item of tags) {
        readme += `
| [\`<${item.tagName}> \`](${item.url}) | ${item.className} | ${item.description} |`;
    }
    readme += '\n' + suffix;
    fs.writeFileSync('README.md', readme);
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

async function processTag(tag, tags) {
    const { Tag, Description } = tag;
    const tagName = Tag.replace("<", "").replace(">", "");
    const url = `${TAG_LINK_PREFIX}${tagName}.asp`;
    const dom = await downloadWebpage(url, tagName);
    const template = await tagTemplate(tagName, Description, url, dom, tags);
    const tagPath = p.join(Tags_Location, `${tagName}.ts`);
    fs.writeFileSync(tagPath, template);
}

async function eventsTemplate(items) {
    const template = `
    export interface NodeEvents {
        ${items.join('\n')}

        [key: string]: EventListenerOrEventListenerObject | undefined;
    }
    `
    fs.writeFileSync(p.join(SRC_LOCATION, 'events.ts'), template);
}

async function cssTemplate(items) {
    const template = `
    import { PossibleStyle } from "./dom/styles";

    export interface CSSStyles {
        ${items.join('\n')}

        [key: string]: PossibleStyle | undefined;
    }
    `
    fs.writeFileSync(p.join(SRC_LOCATION, 'css.ts'), template);
}

/**
 * @param {string} name
 * @param {string} desc
 */
async function tagTemplate(name, desc, url, dom, tags) {
    const tagName = name;
    let className = pascalCase(name);
    if (className === 'Object') className = 'Obj';
    const description = desc.replace("<", "`<").replace(">", ">`");
    tags.push({ tagName, url, description: description.split('\n').join(' '), className })
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
                    if (!Value) continue;
                    values.push(`
                    ${commentTemplate({
                        description: Description
                    })}
                    ${values.length > 0 ? '|' : ''} "${Value}"`);
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
            ${camelCase(attrName)}?: ${values.length > 1 ? values.join('\n') : 'string'};`);
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
