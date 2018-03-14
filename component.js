const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const program = require('commander');
const { stripIndent } = require('common-tags');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

const BASE_PATH = path.join(__dirname, 'src', 'components');
const getPathName = (name) => {
    return path.join(BASE_PATH, name);
}

program
    .version ('0.0.1')
    .option ('-n, --name [component name]', 'component name')
    .parse(process.argv);

const componentName = program.name;

if (!componentName) {
    return console.error('Should component name provide')
};

const indexContent = (componentName) => `export { default } from './${componentName}';`;

const jsContent = (componentName) => stripIndent`
    import React, { Component }  from 'react';

    import './${componentName}.css';

    const ${componentName} = (props) => {};
    class ${componentName} extends Component {};

    export default ${componentName};`;

const cssContent = (componentName) => `.${componentName} {}`;

(async () => {
    try {
        const fileOptions = {
            encoding: 'utf-8',
            flag: 'w+'
        };
        const folder = getPathName(componentName);
        await (fs.existsSync(folder) ? Promise.resolve() : mkdir(folder));
        await writeFile(`${folder}/index.js`, indexContent(componentName), fileOptions);
        await writeFile(`${folder}/${componentName}.js`, jsContent(componentName), fileOptions);
        await writeFile(`${folder}/${componentName}.css`, cssContent(componentName), fileOptions);
    } catch (e) {
        console.error(e);
    }
})();
