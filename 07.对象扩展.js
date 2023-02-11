/* const name = "moduleA"
let obj = {
    name: name,
    test1: function() {
        
    },
    test2: function() {
        
    }
} */

// 简写：
/* const name = "moduleA"
let obj = {
    name, // name => name: name
    test1: function() {
        
    },
    test2: function() {
        
    }
} */

/* let name = "moduleA"
let obj = {
  name,
  [name + "test1"]() {

  },
  [name + "test2"]() {

  }
}
console.log(obj); */


/* let obj = {
  name: "codexgh",
  test1: function() {
      
  },
  test2: function() {
      
  }
}

// 复制
let obj1 = {...obj} // {name: 'codexgh', test1: ƒ, test2: ƒ}
// 合并数组
let obj2 = {...obj, ...{ name: "tiechui", age: 19 }} // {name: 'tiechui', test1: ƒ, test2: ƒ, age: 19}
console.log(obj1);
console.log(obj2); */

/* const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source); */

console.log(Object.is(5, 5)); // true
console.log(Object.is(5, '5')); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false
