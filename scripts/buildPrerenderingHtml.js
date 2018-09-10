const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '../build/index.html');
const loginAppshell = path.resolve(__dirname, '../build/login-appshell.html');
const mainAppshell = path.resolve(__dirname, '../build/main-appshell.html');

fs.copyFileSync(src, loginAppshell);
fs.copyFileSync(src, mainAppshell);

const mainAppshellHtml = '<div><header class="header"><h1 class="header__title">appshell with edge</h1></header><main class="main"><div class="card"></div></main></div>';

fs.readFile(mainAppshell, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const replacedData = data
    .replace(/<div id=\"root\">.*<\/div>/g, `<div id=\"root\">${mainAppshellHtml}<\/div>`)

  fs.writeFile(mainAppshell, replacedData, 'utf8', (err) => {
    if (err) return console.log(err);
    console.log('Prerendering html has been injected.');
  });
});
