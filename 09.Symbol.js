/* const name = Symbol();
let obj = {
  [name]: "kerwin",
  getName() {
    console.log(this[name]);
  }
}
console.log(obj);
 */


const keys = {
  name: Symbol(),
  age: Symbol(),
  location: Symbol(),
  test: Symbol(),
}

const obj = {
  [keys.name]: "codexgh",
  [keys.age]: 19,
  [keys.location]: "yadian",
  [keys.test]() {
    console.log("test");
  }
}

console.log(obj);


/* const keys = {
  name: Symbol("name"),
  age: Symbol("age"),
  location: Symbol("location"),
  test: Symbol("test"),
}

const obj = {
  [keys.name]: "codexgh",
  [keys.age]: 19,
  [keys.location]: "yadian",
  [keys.test]() {
    console.log("test");
  }
}

console.log(obj); */


console.log();