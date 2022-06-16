const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books"', async () => {
      // Arrange
      // semilla de información
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 2020,
          author: 'gian',
        },
        {
          name: 'Book 2',
          year: 2022,
          author: 'gian',
        },
      ]);
      console.log(seedData);

      // Act
      return request(app)
      // siempre pon / al inicio de la ruta
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
// pnpm test:e2e
// ya guarda en db real pero db pruebas
// cada vez que se ejecuta este test guarda los datos
// con esta linea:
// await database.dropDatabase();
// al final se borra los datos de la db
