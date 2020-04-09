document.write('hello world')
class Rectangle {

  constructor() {    
    this.height = 1;
    this.width = 2;
  }
  seek() {
    return this.height + this.width
  }
}
const a = new Rectangle()
console.log(a.seek())