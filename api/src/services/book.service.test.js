const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Atomic Habits',
  },
];
// suplantacion de la clase
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // no se conecta a la base de datos, hace mock de la base de datos
      // Arrange

      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
    });
  });
});
// unit test, pruebas aisladas al código, lo que este relacionado con dependencias generamos mock
// pnpm test
