const route = require('../src/main.js');
// const validate = require('../src/validate.js');

const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (route.getAbsolutePath(path) && options === true) {
    // validar los links
    resolve();
  } else {
    // mostrar los links  y texto
    // saveLinks
    reject();
  }
});

module.exports = {
  mdLinks,
};
