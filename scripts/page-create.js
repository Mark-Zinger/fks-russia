const fs = require('fs');
const path = require('path');

const pages = require('../src/pages/pagelist.json');


const scriptDir = __dirname;


const pageName = process.argv[2];
if (!pageName) {
    console.log('Укажите имя страницы');
    return;
}
const pageDir = path.join(__dirname,'../src/pages', pageName);
if (fs.existsSync(pageDir)) {
    console.log(`Страница ${pageName} уже существует`);
    return;
}
const pageTitle = process.argv[3];
if (!pageTitle) {
    console.log('Укажите заголовок страницы');
    return;
}
const pageData = {
    name: pageName,
    title: pageTitle,
};
<<<<<<< HEAD
console.log(pageDir);

pages.push(pageData);
fs.writeFileSync('../pages/pagelist.json', JSON.stringify(pages, null, 2));
fs.mkdirSync(pageDir);

const pagePugTemplate = fs.readFileSync(path.join('scripts','template', 'page.pugtpl')).toString();
fs.writeFileSync(path.join(pageDir, `${pageName}.pug`), eval('`' + pagePugTemplate + '`'));
const pageJsTemplate = fs.readFileSync(path.join('scripts','template', 'page.jstpl')).toString();

fs.writeFileSync(path.join(pageDir, `${pageName}.js`), eval('`' + pageJsTemplate  + '`'));

fs.writeFileSync(path.join(pageDir, `${pageName}.scss`), `.${pageName} {\n    \n}`);

const commonCssFilePath = path.join('pages','common.scss');
=======

pages.push(pageData);

fs.writeFileSync(path.join(scriptDir,'../src/pages/pagelist.json'), JSON.stringify(pages, null, 2));
fs.mkdirSync(pageDir);

const pagePugTemplate = fs.readFileSync(path.join(scriptDir,'template', 'page.pugtpl')).toString();
fs.writeFileSync(path.join(pageDir, `${pageName}.pug`), eval('`' + pagePugTemplate + '`'));
const pageJsTemplate = fs.readFileSync(path.join(scriptDir,'template', 'page.jstpl')).toString();

fs.writeFileSync(path.join(pageDir, `${pageName}.js`), eval('`' + pageJsTemplate  + '`'));

fs.writeFileSync(path.join(pageDir, `${pageName}.scss`), `.${pageName} {\n    \n}`);

const commonCssFilePath = path.join(scriptDir,'../src/scss/main.scss');
>>>>>>> e64f24a287311f5f6f985a5fe8a422d4af8b0134
let commonCssContent = fs.readFileSync(commonCssFilePath).toString();
    commonCssContent += `@import '../../pages/${pageName}/${pageName}';\n`;
fs.writeFileSync(commonCssFilePath, commonCssContent);

console.log(`Страница ${pageName} создана`);