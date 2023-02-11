/* let obj = {
  name: "kerwin",
  age: 100
}

console.log(Object.values(obj)) */


/* 
let obj = {
  name: "kerwin",
  age: 100
}

console.log(Object.keys(obj));
 */


/* let obj = {
  name: "kerwin",
  age: 100
}

console.log(Object.entries(obj)); */

/* let obj = {
  name: "kerwin",
  age: 100
}
console.log(Object.getOwnPropertyDescriptors(obj));
 */


/* let obj = {
  name: "kerwin",
  age: 100,
  location:"dalian"
}

let {name,...other} = obj
console.log('name:',name)
console.log('other:',other) */


/* let obj1 = {
  name: "kerwin",
  age: 19
}

let obj2 = {
  name: "tiechui"
}

let obj3 = {...obj1, ...obj2}
console.log('obj3',obj3) */

const arr = [["name", "kerwin"], ["age", 100]]
console.log(Object.fromEntries(arr));

const m = new Map();
m.set("name", "tiechui")
m.set("age", 23)
console.log(Object.fromEntries(m));

let str = "name=kerwin&age=100"
let searchParams = new URLSearchParams(str)
console.log(Object.fromEntries(searchParams)); // {name: 'kerwin', age: '100'}

let obj = {
  "A": ["A1", "A2", "A3"],
  "B": ["B1", "B2"],
  "C": ["A1"],
}

let myarr = Object.entries(obj)
let myNewArr = myarr.map(([key, value])=>[key, value.length])
console.log(Object.fromEntries(myNewArr));

console.log();
