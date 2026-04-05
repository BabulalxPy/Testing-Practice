const analyzeArray = require("./analyzeArray");

test("analyze array 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyze array 2", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("analyze array 3", () => {
  expect(analyzeArray([-1, -5, -3])).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 3,
  });
});
