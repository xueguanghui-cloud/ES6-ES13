/* let obj = {}
Object.defineProperty(obj, "data", {
  get(){
    console.log("get");
  },
  set(){
    console.log("set");
  }
}) */

/* let obj = {}
let proxy = new Proxy(obj, {
  get(target, key){
    console.log("get:", target[key]);
    return target[key]
  },
  set(target, key, value){
    console.log("set", target, key, value);
    target[key] = value;
  },
  has() {

  }
}); */


const set = new Set();
let proxy = new Proxy(set, {
  get(target, key){
    // 判断如果是方法，修正this指向
    let value = target[key];
    if(value instanceof Function){
      return value.bind(target)
    }
    return value
  },
  set(target, key, value){
    console.log("set", target, key, value);
    target[key] = value;
  }
});

console.log();