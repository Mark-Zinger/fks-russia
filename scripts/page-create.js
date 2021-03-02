const fs = require('fs');
const path = require('path');
const pages = require('../pages/pagelist.json');

const scriptDir = __dirname;

const pageName = process.argv[2];
if (!pageName) {
    console.log('Укажите имя страницы');
    return;
}
const pageDir = path.join(__dirname,'../pages', pageName);
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
console.log(pageDir);

pages.push(pageData);
console.log(__dirname);
fs.writeFileSync(path.join(scriptDir,'../pages/pagelist.json'), JSON.stringify(pages, null, 2));
fs.mkdirSync(pageDir);

const pagePugTemplate = fs.readFileSync(path.join(scriptDir,'template', 'page.pugtpl')).toString();
fs.writeFileSync(path.join(pageDir, `${pageName}.pug`), eval('`' + pagePugTemplate + '`'));
const pageJsTemplate = fs.readFileSync(path.join(scriptDir,'template', 'page.jstpl')).toString();

fs.writeFileSync(path.join(pageDir, `${pageName}.js`), eval('`' + pageJsTemplate  + '`'));

fs.writeFileSync(path.join(pageDir, `${pageName}.scss`), `.${pageName} {\n    \n}`);

const commonCssFilePath = path.join(scriptDir,'../pages','common.scss');
let commonCssContent = fs.readFileSync(commonCssFilePath).toString();
    commonCssContent += `@import '../../pages/${pageName}/${pageName}';\n`;
fs.writeFileSync(commonCssFilePath, commonCssContent);

console.log(`Страница ${pageName} создана`);