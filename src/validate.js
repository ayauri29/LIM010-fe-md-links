const fetch = require('node-fetch');
// const routes = require('../src/main.js');
// libreria

const array = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];


// 200 - 400  Ok
const validateLink = (arrayOfLinks) => {
  const arrayPromises = arrayOfLinks.map((link) => {
    return fetch(link.href)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          link.status = response.status;
          link.statusText = response.statusText;
        } else {
          link.status = response.status;
          link.statusText = 'FAIL';
        }
        return link;
      })
      .catch(() => {
        link.status = 'ERR';
        link.statusText = 'FAIL';
        return link;
      });
  });
  return Promise.all(arrayPromises);
};
/* const validateLink = (objectLinks) => {
  // const arrayLinks = objectLinks.map((links) => links.href);
  const arrayPromises = [];
  objectLinks.forEach((link) => {
    const promise = new Promise((resolve) => {
      return fetch(link.href)
        .then((response) => {
          if (response.status >= 200 && response.status < 400) {
            link.status = response.status;
            link.statusText = response.statusText;
            // console.log(objectLinks);
            resolve(link);
          } else {
            link.status = response.status;
            link.statusText = 'FAIL';
            // console.log(objectLinks);
            resolve(link);
          }
        })
        .catch(() => {
          link.status = 'ERR';
          link.statusText = 'FAIL';
          // console.log(objectLinks);
          resolve(link);
        });
    });
    arrayPromises.push(promise);
  });
  return Promise.all(arrayPromises);
  /* .then((resolve) => {
    console.log(resolve)
  });
}; */

validateLink(array);

module.exports = {
  validateLink,
};
