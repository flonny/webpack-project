export function converStringToNumber(string, x = 10) {
  var chars = string.split('');
  let number = 0;
  let i = 0
  while (i < chars.length && chars[i] != '.') {
    number = number * x
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++
  }
  if (chars[i] == '.') {
    i++
  }

  let fraction = 1
  while (i < chars.length) {
    fraction = fraction / x
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++
  }
  return number
}
export function converNumberToString(number, x = 10) {
  var integer = Math.floor(number);
  var fraction = number%1
  let string = ''
  while (integer > 0) {
    string = integer % x + string
    integer = Math.floor(integer / x)
  }
  if (fraction > 0) {
    string += '.'
  }
  while (fraction !== Math.floor(fraction) ) {
    // debugger;
    fraction = fraction * x
    string += Math.floor(fraction%10)+''
  }
  return string
}