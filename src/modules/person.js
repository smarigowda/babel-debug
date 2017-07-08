export default class Person {
  constructor(name = 'Not Known At the moment...') {
    this.name = name;
  }

  speak() {
    console.log(this.name);
  }
}