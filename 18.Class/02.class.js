class Person {
  static myName = "我是Person类的静态属性"
  static say() {
    console.log("我是Person类的静态方法");
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name, this.age)
  }
}

class Student extends Person {

  static myName = "我是Student类的静态属性"
  static say() {
    console.log("我是Student类的静态方法");
  }
  constructor(name, age, score) {
    super(name, age)
    this.score = score
  }

  say() {
    super.say()
    console.log(this.score)
  }

  getScore() {
    console.log('this.score',this.score)
  }
}

let stu = new Student("kerwin", 19, 123);
stu.say()
console.log(Student.myName);
console.log('stu',stu)