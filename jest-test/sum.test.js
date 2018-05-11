const sum = require("./sum");

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const n = 0;
  expect(n).not.toBeNull();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
  expect(n).not.toBeUndefined();
  expect(n).toBeDefined();
})

// function compileAndroidCode() {
//   throw new ConfigError('you are using the wrong JDK');
// }
// 
// test('compiling android goes as expected', () => {
//   expect(compileAndroidCode).toThrow();
//   // expect(compileAndroidCode).toThrow(ConfigError);
// 
//   // You can also use the exact error message or a regexp
//   expect(compileAndroidCode).toThrow('you are using the wrong JDK');
//   expect(compileAndroidCode).toThrow(/JDK/);
// });



const diff = require('jest-diff');

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);

// print diff
console.log(result);