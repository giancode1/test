const { sum, multiply, divide, divide2 } = require("./02-math");

test("adds 1 + 3 should equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});

test("multiply 2 * 3 should equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide 6 / 2 should equal 3", () => {
  expect(divide(6, 2)).toBe(3);
});

test("divide for zero", () => {
  expect(divide(6, 0)).toBeNull();
});

test("divide2 for zero", () => {
  expect(() => divide2(6, 0)).toThrowError("Division by zero");
});


//pnpm test   //hace la prueba de todos los archivos de la carpeta
//pnpm test src/02-math.test.js



