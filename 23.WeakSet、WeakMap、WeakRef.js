// WeakSet、WeakMap、WeakRef



// 只能是复杂类型
/* 
let obj = {
  name: "kerwin"
}
let weakSet = new WeakSet();
weakSet.add(obj)
obj = null */


let obj = {
  name: "kerwin"
}
let weakMap = new WeakMap()
weakMap.set(obj, 3421)
obj = null
console.log(weakMap);

console.log();