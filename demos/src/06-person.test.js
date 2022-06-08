const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Juan', 45, 1.70);
  });

  test('should return down', () => {
    person.weight = 45;
    expect(person.calcIMC()).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 61;
    expect(person.calcIMC()).toBe('normal');
  });
});

// pnpm test --06-person
