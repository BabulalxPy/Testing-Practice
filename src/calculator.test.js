const calculator = require("./calculator");

test("45 + 43 equals 88", () => {
  expect(calculator.add(45, 43)).toBe(88);
});

test("12 - 8 equals 4", () => {
  expect(calculator.subtract(12, 8)).toBe(4);
});

test("56 / 7 equals 8", () => {
  expect(calculator.divide(56, 7)).toBe(8);
});

test("12 * 12 equals 144", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});
