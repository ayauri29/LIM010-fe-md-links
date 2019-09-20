"use strict";

const fetch = require('node-fetch'); // libreria


const array = [{
  href: 'https://www.linkedin.com',
  text: 'linkedlin',
}, {
  href: 'https://example.com/',
  text: 'github',
}]; // 200 - 400  Ok

const validateLink = (objectLinks) => {
  const arrayLinks = objectLinks.map((link) => {
    fetch(link.href).then((response) => {
      console.log(response.status);
    }).catch((error) => {
      console.log(error);
    });
  });
  return arrayLinks;
};

validateLink(array);
module.exports = {
  validateLink,
};