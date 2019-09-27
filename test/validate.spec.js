const fetchMock = require('../__mocks__/node-fetch.js');
const validate = require('../src/validate.js');

const route = 'dir-test';
const output = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown', path: 'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md', status: 200, statusText: 'OK', text: '1',
  },
  {
    href: 'https://github.com', path: 'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md', status: 200, statusText: 'OK', text: '2',
  },
  {
    href: 'https://eswikipedia.org/wiki/Markdown', path: 'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md', status: 200, statusText: 'OK', text: '3',
  },
  {
    href: 'http://www.wheresrhys.co.uk/fetch-mock_reset', path: 'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md', status: 404, statusText: 'FAIL', text: '4',
  }];

describe('Validate link', () => {
  fetchMock
    .mock('https://es.wikipedia.org/wiki/Markdown', 200)
    .mock('https://github.com', 200)
    .mock('https://eswikipedia.org/wiki/Markdown', 'ERR')
    .mock('http://www.wheresrhys.co.uk/fetch-mock_reset', 404);
  it('Debería retornar function', (done) => {
    expect(typeof validate.validateLink).toBe('function');
    done();
  });
  it('Deberia retornar status 200 para un link disponible', (done) => {
    validate.validateLink(route)
      .then((response) => {
        expect(response).toStrictEqual(output);
        done();
      });
  });
});
