// const baseNumberReg =/^(\+|\-)?\d+(\.\d+(e\d+)?)?/
const baseNumberReg = /^(\+|\-)?0|(^([1-9]|\.)[0-9]+?(\.[0-9]+(e(\+|\-)?[0-9]+)?))?/
const testArr = [ '0','+0', '-0', '1', '2', '3', '4.', '4.3', '4.32123123','.1231',1212e12]
function testReg(reg, arr = testArr, ) {
  const isNumber = (num => {
    if (!reg.test(num)) {
      console.log(num)
    }
    return reg.test(num)
  })
  if (arr.every(isNumber)) {
    console.log('success')
    return true
  }
  return false

}
testReg(baseNumberReg)