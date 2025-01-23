import { capitalize, reverseString } from "./projectTesting";

test("first letter to be capital in string", () => {
  expect(capitalize("banku")).toMatch(/^[A-Z][a-zA-Z\s]*$/);
});

test("return value to be a string ", () => {
  expect(typeof reverseString("rohit")).toBe("string");
});

// test("first char of returned string to be last char of passed string", () => {
//   expect(reverseString(string)[0].toBe(reverseString('string'['string'.length-1])));
// });
test('first char of reversed string matches last char of input', () => {
    expect(reverseString('hello')[0]).toBe('hello'[('hello'.length - 1)]);
  });

  test('Second char of returned string to be second last char of passed string',()=>{
    expect(reverseString('rohit')[1]).toBe('rohit'['rohit'.length-2]);
  });

  test('Objects first function should return sum of two numbers'),()=>{
    expect(Object[0])
  }