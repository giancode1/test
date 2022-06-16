const BookService = require('./books.service');

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
  });

  describe('test for getBooks', () => {
    test('shoudl return a list book', async () => {
      // no se conecta a la base de datos, hace mock de la base de datos
      // Arrange

      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
  });
});
// unit test, pruebas aisladas al código, lo que este relacionado con dependencias generamos mock
// pnpm test
