const reverseString = require("./reverseString");

test("make fan to naf", () => {
  expect(reverseString("fan")).toBe("naf");
});

test("make face a car to rac a ecaf", () => {
  expect(reverseString("face a car")).toBe("rac a ecaf");
});

test("make rufus to sufur", () => {
  expect(reverseString("rufus")).toBe("sufur");
});

test("make 123 to 321", () => {
  expect(reverseString("123")).toBe("321");
});
