const { generateManyBook } = require('../fakes/book.fake');
const BookService = require('./books.service');

const mockGetAll = jest.fn(BookService, 'getBooks'); // realmente es un spy pero hay que manejar la sintaxis de jest

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
      const fakeBooks = generateManyBook(10);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book', async () => {
      // no se conecta a la base de datos, hace mock de la base de datos
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
// unit test, pruebas aisladas al código, lo que este relacionado con dependencias generamos mock
// pnpm test

// ahora ya tenemos un mock o estamos inyectando datafake en cada escenario de prueba
