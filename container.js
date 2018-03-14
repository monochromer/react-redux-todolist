const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const program = require('commander');
const { stripIndent } = require('common-tags');

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

const BASE_PATH = path.join(__dirname, 'src', 'containers');
const getPathName = (name) => {
    return path.join(BASE_PATH, name);
}

program
    .version ('0.0.1')
    .option ('-n, --name [container name]', 'container name')
    .parse(process.argv);

const containerName = program.name;

if (!containerName) {
    return console.error('Should container name provide')
};

const indexContent = (containerName) => `export { default } from './${containerName}';`;

const jsContent = (containerName) => stripIndent`
    import React, { Component }  from 'react';
    import { connect } from 'react-redux';

    class ${containerName} extends Component {};

    const mapStateToProps = (state, ownProps) => ({
        data: fn(state, ownProps)
    });

    const mapDispatchToProps = (dispatch, ownProps) => ({
        fnName: (arg) => dispatch(action(arg))
    });

    export default connect(mapStateToProps, mapDispatchToProps)(${containerName});`;

(async () => {
    try {
        const fileOptions = {
            encoding: 'utf-8',
            flag: 'w+'
        };
        const folder = getPathName(containerName);
        await (fs.existsSync(folder) ? Promise.resolve() : mkdir(folder));
        await writeFile(`${folder}/index.js`, indexContent(containerName), fileOptions);
        await writeFile(`${folder}/${containerName}.js`, jsContent(containerName), fileOptions);
    } catch (e) {
        console.error(e);
    }
})();
