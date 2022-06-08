// assettions o matchers, resolver lo esperado
test('test object', () => {
  const data = { name: 'gian' };
  expect(data).toEqual({ name: 'gian' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined(); // not undefined
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy(); // 0 es considerado falsy
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('gian').toMatch(/ia/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3];
  expect(numbers).toContain(3);
});
