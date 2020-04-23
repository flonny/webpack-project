// const baseNumberReg =/^(\+|\-)?\d+(\.\d+(e\d+)?)?/
const baseNumberReg = /^(0$|0?\.|[1-9][0-9]*\.?)[0-9]*([eE][\+\-]?[0-9][0-9]*)?$/;
const testArr = [
  "0",
  "1",
  "2",
  "3",
  "4.",
  "4.3",
  "4.32123123",
  ".1231",
  1212e12,
];
function testReg(reg, arr = testArr) {
  const isNumber = (num) => {
    if (!reg.test(num)) {
      console.log(num);
    }
    return reg.test(num);
  };
  if (arr.every(isNumber)) {
    console.log("success");
    return true;
  }
  return false;
}
https://github.com/flonny/Frontend-01-Template/tree/master/week02
testReg(baseNumberReg)
function UTF8_Encoding(string) {
  const textEncoder = new TextEncoder();
  let encoded = textEncoder.encode(string);
  let encodeValue = "";
  encoded.forEach((Codepoint) => {
    encodeValue += `\\x${Codepoint.toString(16)}`;
  });
  return encodeValue
}
// console.log(UTF8_Encoding("Foo © bar 𝌆 baz ☃ qux", 16));
console.log(UTF8_Encoding("Foo © bar 𝌆 baz ☃ qux"));