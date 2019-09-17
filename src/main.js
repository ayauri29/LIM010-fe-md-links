const marked = require('marked');
const path = require('path');
const fs = require('fs');
const { XMLHttpRequest } = require('xmlhttprequest');

const getAbsolutePath = (route) => {
  if (path.isAbsolute(route)) {
    return route;
  }
  return path.resolve(route);
};

const isDirectory = (route) => {
  if (fs.statSync(route).isDirectory()) {
    return true;
  }
  return false;
};

const isFile = (route) => {
  if (fs.statSync(route).isFile()) {
    return true;
  }
  return false;
};

const isMd = (route) => {
  if (path.extname(route) === '.md') {
    return true;
  }
  return false;
};

const loopArray = (routeFile) => {
  const route = getAbsolutePath(routeFile);
  let arrayFileMd = [];
  if (isFile(route)) {
    if (isMd(route)) {
      arrayFileMd.push(route);
    }
  } else {
    const listOfFiles = fs.readdirSync(route);
    listOfFiles.forEach((file) => {
      arrayFileMd = arrayFileMd.concat(loopArray(path.join(route, file)));
    });
  }
  return arrayFileMd;
};

const saveLinks = (arrayOfRoutes) => {
  const arrayofLinks = [];
  const render = new marked.Renderer();
  // Recorrer el array de rutas
  arrayOfRoutes.forEach((route) => {
    // Leer el archivo de la ruta
    const file = fs.readFileSync(route);
    // Buscar los links de cada archivo
    render.link = (hrefFile, titleFile, textFile) => {
      // Guardar los links en un array de objetos
      arrayofLinks.push({
        href: hrefFile, title: titleFile, text: textFile, path: route,
      });
    };
    marked(file.toString(), {
      renderer: render,
    });
  });
  return arrayofLinks;
};

module.exports = {
  getAbsolutePath,
  isDirectory,
  isFile,
  isMd,
  loopArray,
  saveLinks,
};
