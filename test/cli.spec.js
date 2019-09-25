const cli = require('../src/cli.js');

const output1 = `C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://es.wikipedia.org/wiki/Markdown 1
C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://es.wikipedia.org/wiki/Markdown 2
C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://eswikipedia.org/wiki/Markdown 3
`;
const output2 = 'Total: 3 \nUnique: 2';

const output3 = `C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://es.wikipedia.org/wiki/Markdown 200 OK 1
C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://es.wikipedia.org/wiki/Markdown 200 OK 2
C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir-test\\first.md https://eswikipedia.org/wiki/Markdown ERR FAIL 3
`;

describe('Command line', () => {
  it('Debería retornar function', () => {
    expect(typeof cli.showCli).toBe('function');
  });
  it('Debería retornar la ruta, el link y el texto de todos los archivos MD', (done) => {
    cli.showCli('dir-test', undefined, undefined).then((response) => {
      expect(response).toEqual(output1);
      done();
    });
  });
  it('Debería retornar la cantidad de links y la cantidad de links únicos', (done) => {
    cli.showCli('dir-test', '--stats', undefined).then((response) => {
      expect(response).toBe(output2);
      done();
    });
  });
  it('Debería retornar la ruta, el link, el texto, el status y el statustext de todos los archivos MD', (done) => {
    cli.showCli('dir-test', '--validate', undefined).then((response) => {
      expect(response).toBe(output3);
      done();
    });
  });
  it('Debería retornar la cantidad de links, la cantidad de links únicos y la cantidad de links rotos', (done) => {
    cli.showCli('dir-test', '--stats', '--validate').then((response) => {
      expect(response).toBe('Total: 3 \nUnique: 2 \nBroken: 1');
      done();
    });
  });
  it('Debería retornar no se encontró el comando si la opción es diferente de stats y validate', (done) => {
    cli.showCli('dir-test', 'a', undefined).then((response) => {
      expect(response).toBe('No se encontró el comando.');
      done();
    });
  });
});
