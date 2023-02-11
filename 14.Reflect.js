// 代替Object某些方法
/* const obj = {}
Reflect.defineProperty(obj, "name", {
  value:"codexgh",
  writable: false
})
console.log(obj); */

// 修改某些Object方法的返回结果
/* try {
  Object.defineProperty(target, property, attributes);
}catch(e) {
  // fail
}

if(Reflect.defineProperty(target, property, attributes)){
  // success
} else {
  // fail
} */

// 命令式变为函数行为
/* const obj1  = {
  name: "codexgh",
}
// 老写法
console.log("name" in obj1); // true
// 新写法
console.log(Reflect.has(obj1, "name")); // true

// 老写法
delete obj1.name
// 新写法
Reflect.deleteProperty(obj1, "name") */



const set = new Set();
let proxy = new Proxy(set, {
  get(target, key){
    // 判断如果是方法，修正this指向
    let value = Reflect.get(target, key);
    if(value instanceof Function){
      return value.bind(target)
    }
    return value
  },
  set(){
    Reflect.set(...arguments)
  }
});

console.log();