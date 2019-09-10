import { getAbsolutePath, validatePath } from '../src/main.js';

describe('Validate path', () => {
  it('Debería retornar function', (done) => {
    expect(typeof validatePath).toBe('function');
    done();
  });
  it('Debería retornar true para un path valido', (done) => {
    expect(validatePath('../src/main.js')).toBe(true);
    done();
  });
  it('Debería retornar falso para un path invalido', (done) => {
    expect(validatePath('!foo.js')).toBe(false);
    done();
  });
});

describe('Read the path', () => {
  it('Debería retornar function', (done) => {
    expect(typeof getAbsolutePath).toBe('function');
    done();
  });
});
