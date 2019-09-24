// const path = require('path');
const route = require('./main.js');
const validate = require('./validate.js');

/* options: Un objeto con las siguientes propiedades:
validate: Booleano que determina si se desea validar los links encontrados. */

const mdLinks = (inputPath, options) => new Promise((resolve) => {
  const routeAbs = route.getAbsolutePath(inputPath);
  if (options.validate === false) {
    resolve(route.saveLinksMds(routeAbs));
  } else {
    const arrayOfLinks = route.saveLinksMds(routeAbs);
    resolve(validate.validateLink(arrayOfLinks));
  }
});

/* mdLinks(path.join(process.cwd(), 'dir-test'), { validate: true }).then((response) => {
  console.log(response);
});
console.log('Pruebaaaa');
mdLinks(path.join(process.cwd(), 'dir-test'), { validate: false }).then((response) => {
  console.log(response);
}); */
module.exports = {
  mdLinks,
};
