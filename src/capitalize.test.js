const capitalize = require("./capitalize");

test("make babulal to Babulal", () => {
  expect(capitalize("babulal")).toBe("Babulal");
});

test("make Hello to Hello", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("make b to B", () => {
  expect(capitalize("b")).toBe("B");
});

test("make to ", () => {
  expect(capitalize("")).toBe("");
});

test("make 123blal", () => {
  expect(capitalize("123blal")).toBe("123blal");
});

test("make hELLO to HELLO", () => {
  expect(capitalize("hELLO")).toBe("HELLO");
});
