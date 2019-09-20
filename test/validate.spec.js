const validate = require('../src/validate.js');

const array = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', route: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];

describe('Validate link', () => {
  it('Debería retornar function', (done) => {
    expect(typeof validate.validateLink).toBe('function');
    done();
  });
  it('Deberia retornar status 200 para un link disponible', (done) => {
    validate.validateLink(array).then((response) => {
      expect(response[0].status).toBe(200);
      done();
    });
  });
  it('Deberia retornar status 404 para un link no disponible', (done) => {
    validate.validateLink(array).then((response) => {
      expect(response[1].status).toBe(403);
      done();
    });
  });
  it('Deberia retornar status 404 para un link no disponible', (done) => {
    validate.validateLink(array).then((response) => {
      expect(response[2].status).toBe('ERR');
      done();
    });
  });
});
