'use strict';

const marked = require('marked');

const path = require('path');

const fs = require('fs');

const getAbsolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));

const isDirectory = (route) => fs.statSync(route).isDirectory();

const isFile = (route) => fs.statSync(route).isFile();

const isMd = (route) => path.extname(route) === '.md';

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
  const render = new marked.Renderer(); // Recorrer el array de rutas

  arrayOfRoutes.forEach((route) => {
    // Leer el archivo de la ruta
    const file = fs.readFileSync(route); // Buscar los links de cada archivo

    render.link = (hrefFile, titleFile, textFile) => {
      // Guardar los links en un array de objetos
      arrayofLinks.push({
        href: hrefFile,
        title: titleFile,
        text: textFile,
        path: route,
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