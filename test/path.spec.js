const path = require('path');
const route = require('../src/main.js');

describe('Read the path', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.getAbsolutePath).toBe('function');
    done();
  });
  it('Debería retornar la ruta si ya es absoluta', (done) => {
    expect(route.getAbsolutePath(path.join(process.cwd(), 'src'))).toBe(path.join(process.cwd(), 'src'));
    done();
  });
  it('Debería retornar la ruta absoluta si es relativa', (done) => {
    expect(route.getAbsolutePath('src')).toBe(path.join(process.cwd(), 'src'));
    done();
  });
});

describe('is the path directory?', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.isDirectory).toBe('function');
    done();
  });
  it('Debería retornar true si la ruta absoluta es un directorio', (done) => {
    expect(route.isDirectory(path.join(process.cwd(), 'src'))).toBe(true);
    done();
  });
  it('Debería retornar false si la ruta absoluta no es un directorio', (done) => {
    expect(route.isDirectory(path.join(process.cwd(), 'src', 'main.js'))).toBe(false);
    done();
  });
});

describe('is the path file?', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.isFile).toBe('function');
    done();
  });
  it('Debería retornar false si la ruta absoluta no es un file', (done) => {
    expect(route.isFile(path.join(process.cwd(), 'src'))).toBe(false);
    done();
  });
  it('Debería retornar true si la ruta absoluta es un file', (done) => {
    expect(route.isFile(path.join(process.cwd(), 'src', 'main.js'))).toBe(true);
    done();
  });
});

describe('Is the extension of file .MD?', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.isMd).toBe('function');
    done();
  });
  it('Debería retornar false si el file no tiene extensión MD', (done) => {
    expect(route.isMd(path.join(process.cwd(), 'src'))).toBe(false);
    done();
  });
  it('Debería retornar true si el file tiene extensión MD', (done) => {
    expect(route.isMd(path.join(process.cwd(), 'README.md'))).toBe(true);
    done();
  });
});

describe('Find the MD file', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.loopArray).toBe('function');
    done();
  });
  it('Debería retornar el file con extensión MD', (done) => {
    expect(route.loopArray(path.join(process.cwd(), 'dir test'))[0]).toBe(path.join(process.cwd(), 'dir test', 'first.md'));
    done();
  });
  it('Debería retornar el file con extensión MD de un archivo dentro de otro archivo', (done) => {
    expect(route.loopArray(path.join(process.cwd(), 'dir test'))[2]).toBe(path.join(process.cwd(), 'dir test', 'subdir', 'third.md'));
    done();
  });
});

const arrayOfRoutes = ['C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\first.md',
  'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\second.md',
  'C:\\Users\\albit\\Desktop\\Track front\\LIM010-fe-md-links\\dir test\\subdir\\third.md'];

describe('Save links', () => {
  it('Debería retornar function', (done) => {
    expect(typeof route.saveLinks).toBe('function');
    done();
  });
  it('Debería retornar el link del primer elemento del array de links', (done) => {
    expect(route.saveLinks(arrayOfRoutes)[0].href).toBe('https://es.wikipedia.org/wiki/Markdown');
    done();
  });
  it('Debería retornar el texto del primer elemento del array de links', (done) => {
    expect(route.saveLinks(route.loopArray(path.join(process.cwd(), 'dir test')))[0].text).toBe('1');
    done();
  });
  it('Debería retornar la ruta del primer elemento del array de links', (done) => {
    expect(route.saveLinks(route.loopArray(path.join(process.cwd(), 'dir test')))[0].path).toBe(path.join(process.cwd(), 'dir test', 'first.md'));
    done();
  });
});
