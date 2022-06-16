const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Atomic Habits',
  },
];

const mockGetAll = jest.fn(BookService, 'getBooks'); // realmente es un spy pero hay que manejar la sintaxis de jest

// suplantacion de la clase
const MongoLibStub = {
  // getAll: () => [...fakeBooks],
  getAll: mockGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

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
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // no se conecta a la base de datos, hace mock de la base de datos
      // Arrange
      mockGetAll.mockResolvedValue([{
        _id: 1,
        name: 'Harry Potter 2',
      }]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter 2');
    });
  });
});
// unit test, pruebas aisladas al código, lo que este relacionado con dependencias generamos mock
// pnpm test

// ahora ya tenemos un mock o estamos inyectando datafake en cada escenario de prueba
