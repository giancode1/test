function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function divide2(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
module.exports = {
  sum,
  multiply,
  divide,
  divide2,
};
