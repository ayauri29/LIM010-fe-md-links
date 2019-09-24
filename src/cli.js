#!/usr/bin/env node
const mdLink = require('../src/md-links.js');
const stat = require('../src/stats.js');

// $ md-links ./some/example.md
// $ md-links ./some/example.md --validate
// $ md-links ./some/example.md --stats
// $ md-links ./some/example.md --stats --validate

const showCli = () => {
  const route = process.argv[2];
  const argv2 = process.argv[3];
  const argv3 = process.argv[4];
  if (argv2 === '--stats' && argv3 === '--validate') {
    mdLink.mdLinks(route, { validate: true })
      .then((response) => {
        // return `Total: ${response.length} \n Unique: ${stat.uniquesLinks(response)} \n Broken: ${stat.brokenLinks(response)}`;
        console.log('Total:', response.length);
        console.log('Unique:', stat.uniquesLinks(response));
        console.log('Broken:', stat.brokenLinks(response));
      });
  } else if (argv2 === '--stats') {
    mdLink.mdLinks(route, { validate: true })
      .then((response) => {
        // return `Total: ${response.length} \n Unique: ${stat.uniquesLinks(response)}`;
        console.log('Total:', response.length);
        console.log('Unique:', stat.uniquesLinks(response));
      });
  } else if (argv2 === '--validate') {
    mdLink.mdLinks(route, { validate: true })
      .then((response) => {
        response.forEach((objectLink) => {
          // return `${objectLink.path} ${objectLink.href} ${objectLink.status} ${objectLink.statusText} ${objectLink.text}`;
          console.log(objectLink.path, objectLink.href, objectLink.status, objectLink.statusText, objectLink.text);
        });
      });
  } else {
    mdLink.mdLinks(route, { validate: false })
      .then((response) => {
        response.forEach((objectLink) => {
          // return `${objectLink.path} ${objectLink.href} ${objectLink.text}`;
          console.log(objectLink.path, objectLink.href, objectLink.text);
        });
      });
  }
};

showCli();

module.exports = {
  showCli,
};
