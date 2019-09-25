#!/usr/bin/env node
const mdLink = require('../src/md-links.js');
const stat = require('../src/stats.js');

const showCli = (route, argv2, argv3) => mdLink.mdLinks(route, { validate: true })
  .then((response) => {
    let output = '';
    if (argv2 === '--stats' && argv3 === '--validate') {
      output = `Total: ${response.length} \nUnique: ${stat.uniquesLinks(response)} \nBroken: ${stat.brokenLinks(response)}`;
    } if (argv2 === '--stats' && argv3 === undefined) {
      output = `Total: ${response.length} \nUnique: ${stat.uniquesLinks(response)}`;
    } if (argv2 === '--validate' && argv3 === undefined) {
      response.forEach((objectLink) => {
        if (objectLink.statusText === 'OK') {
          output += `${objectLink.path} ${objectLink.href} ${objectLink.status} ${objectLink.statusText} ${objectLink.text}\n`;
        } else {
          output += `${objectLink.path} ${objectLink.href} ${objectLink.status} ${objectLink.statusText} ${objectLink.text}\n`;
        }
      });
    } if (argv2 === undefined) {
      response.forEach((objectLink) => {
        output += `${objectLink.path} ${objectLink.href} ${objectLink.text}\n`;
      });
    }
    if (argv2 !== '--stats' && argv2 !== '--validate' && argv2 !== undefined) {
      output = 'No se encontró el comando.';
    }
    return output;
  });

const route = process.argv[1];
const argv2 = process.argv[2];
const argv3 = process.argv[3];
showCli(route, argv2, argv3).then((data) => console.log(data));

module.exports = {
  showCli,
};
