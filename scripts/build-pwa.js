const path = require('path');
const fs = require('fs');
const { promisify } = require('util');

const fse = require('fs-extra')
const babel = require("@babel/core");

(async () => {
    try {
        const ROOT_PATH = process.cwd();

        // путь до файла package.json
        const pacakgeFilePath = path.resolve(ROOT_PATH, 'package.json');

        // путь до исходника Service Worker
        const swFilePath = path.resolve(ROOT_PATH, 'src', 'sw.js');

        // путь сохранения собранного файла Service Worker
        const swBuildPath = path.resolve(ROOT_PATH, 'public', 'sw.js');

        // путь хранения всех собранных файлов
        const publicDir = path.resolve(ROOT_PATH, 'public');

        // путь хранения исходников иконок и манифеста
        const iconsSrcDir = path.resolve(ROOT_PATH, 'src', 'icons');

        // путь хранения собранных иконок и манифеста
        const iconsDir = path.resolve(ROOT_PATH, 'public', 'icons');

        const VERSION = require(pacakgeFilePath).version;
        const ServiceWorkerSource = await promisify(fs.readFile)(swFilePath, 'utf8');
        const files = await promisify(fs.readdir)(publicDir);

        await fse.copy(iconsSrcDir, iconsDir);

        const swBuildSource = `
            const CACHE_NAME = '${VERSION}';
            const cacheFiles = ${JSON.stringify(['/', ...files])};
            ${ServiceWorkerSource}
        `;

        const minifiedSource = babel.transform(swBuildSource, {
            presets: ['minify']
        });

        await promisify(fs.writeFile)(swBuildPath, minifiedSource.code, 'utf8');
    } catch(error) {
        console.error(error);
    }
})();
