// Setup / Teardown
// Configuracion y scope de pruebas

// describe, para todo un conjunto de pruebas
describe('group 1', () => {
  beforeAll(() => {
    // antes de los escenarios de prueba
    console.log('beforeAll');
    // example:  up db
  });
  afterAll(() => {
    // despues de los escenarios de prueba, al ultimo
    console.log('afterAll');
    // example:  down db
  });

  beforeEach(() => {
    // corre antes de cada prueba
    console.log('beforeEach');
  });

  afterEach(() => {
    // corre despues de cada prueba
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 1).toEqual(2);
  });

  describe('group 2', () => {
    beforeAll(() => {
      // antes de los escenarios de prueba
      console.log('beforeAll 2');
      // example:  up db
    });
    test('case 3', () => {
      console.log('case 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 3).toBe(4);
    });
  });
});

// pnpm test src/05-setup.test.js
