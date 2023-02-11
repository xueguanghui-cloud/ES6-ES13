class Person {
  constructor(name, age) {
    this.myName = name;
    this.age = age;
  }

  say() {
    console.log('this.name,this.age',this.name,this.age)
  }

  get name() {
    return this.myName;
  }
  set name(name) {
    this.myName = name;
  }
}

let obj = new Person("kerwin", 29);
console.log('obj.get',obj.get)
obj.set = 'codexgh'