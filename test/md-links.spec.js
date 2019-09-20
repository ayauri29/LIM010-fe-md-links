const path = require('path');
const mdLinks = require('../src/md-links.js');

const output1 = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: '1',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: '2',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://eswikipedia.org/wiki/Markdown',
    text: '3',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
    status: 'ERR',
    statusText: 'FAIL',
  }];

const output2 = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: '1',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: '2',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
  },
  {
    href: 'https://eswikipedia.org/wiki/Markdown',
    text: '3',
    path:
      'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
  }];

describe('Md links', () => {
  it('Debería retornar function', () => {
    expect(typeof mdLinks.mdLinks).toBe('function');
  });
  it('Debería retornar el link del primer elemento del array de links', () => {
    mdLinks.mdLinks(path.join(process.cwd(), 'dir test'), { validate: true }).then((response) => {
      expect(response).toBe(output1);
    });
  });
  it('Debería retornar el link del primer elemento del array de links', () => {
    mdLinks.mdLinks('dir test', { validate: true }).then((response) => {
      expect(response).toBe(output1);
    });
  });
  it('Debería retornar el link del primer elemento del array de links', () => {
    mdLinks.mdLinks(path.join(process.cwd(), 'dir test'), '').then((response) => {
      expect(response).toBe(output2);
    });
  });
  it('Debería retornar el link del primer elemento del array de links', () => {
    mdLinks.mdLinks(path.join(process.cwd(), 'dir test', 'subdir', 'vacio'), '').then((response) => {
      expect(response).toBe('');
    });
  });
});
