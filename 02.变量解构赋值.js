/* let arr = [1, 2, 3, 4, 5]
let [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); */

/* let x = 1;
let y = 2;
[y, x] = [x, y];
console.log(x, y); */

/* let arr = [1, 2, 3, 4, 5]
let [, b, , , e] = arr;
console.log(b, e); */

/*
let arr = [1, 2, 3, 4, 5]
let b = [...arr]
console.log(b);
b[1] = 10
console.log("arr:" + arr);
console.log("b:" + b); 
*/

/* let obj = {
  name: "codexgh",
  age: 100
}
let {name, age} = obj;
console.log(name, age);
 */

// 设置默认值
/* let { name, age, gender="男" } = {
  name: "codexgh",
  age: 100
};
console.log(name, age, gender); */

// 解构赋值是深拷贝还是浅拷贝？

let obj1 = {
  name: "codexgh",
  age: 100,
  data: {
    message: "加油加油"
  }
};
let obj2 = { ...obj1 };
obj2.data.message = "OKOK"
console.log("obj1: ", obj1); // obj1:  {name: 'codexgh', age: 100, data: { message: 'OKOK' }}
console.log("obj2: " , obj2); // obj2:  {name: 'codexgh', age: 100, data: { message: 'OKOK' }}