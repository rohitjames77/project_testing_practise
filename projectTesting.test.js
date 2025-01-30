import { ceaserCipher } from "./ceaserCipher";
import { capitalize, reverseString, calculator } from "./projectTesting";

test("first letter to be capital in string", () => {
  expect(capitalize("banku")).toMatch(/^[A-Z][a-zA-Z\s]*$/);
});

test("return value to be a string ", () => {
  expect(typeof reverseString("rohit")).toBe("string");
});

test("first char of reversed string matches last char of input", () => {
  expect(reverseString("hello")[0]).toBe("hello"["hello".length - 1]);
});

test("Second char of returned string to be second last char of passed string", () => {
  expect(reverseString("rohit")[1]).toBe("rohit"["rohit".length - 2]);
});

test("Objects first function should return sum of two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Objects second function should return subtraction of two given numbers", () => {
  expect(calculator.subtract(4, 4)).toBe(0);
});

test("Objects third function should return product of two given numbers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("Objects fourth function should return quotient of two given numbers", () => {
  expect(calculator.divide(2, 2)).toBe(0);
});

test ('check if each alphabet is shifted acoording to the shift factor',()=>{
  expect(ceaserCipher('abc')).toBe(ceaserCipher('xyz'))
});

test('check if ceaserCipher returns the string in same pattern case sensitivity as given',()=>{
  expect(ceaserCipher().toBe(ceaserCipher()))
})