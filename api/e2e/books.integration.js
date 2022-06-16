const mockGetAll = jest.fn(); // realmente es un spy pero hay que manejar la sintaxis de jest

const request = require('supertest');

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books"', () => {
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
      // siempre pon / al inicio de la ruta
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
// pnpm test:e2e
// en este punto no solo estamos haciendo la prueba a una unidad, aun
// metodo en especifico sino como funciona toda nuestra aplicacion
// incluyendo routing, servicios, toda la arquitectura de nuestra aplicacion
// la unica parte que obviamos es la conexion a la base de datos
// se esta haciendo una prueba a todos los elementos
// por ende seria una prueba de integracion
