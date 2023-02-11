/* function ajax(url, method = 'get', async = true) {
  console.log(url, method, async);
}

ajax("/aaa", "get", true); ///aaa get true
ajax("/bbb", "get", ); ///bbb get true
ajax("/ccc"); ///ccc get true */


/* function test (x, y,...data) {
  console.log(x, y, data);
}

test(1,2,3,4,5) */

let test = function (data) {
  return data;
}

let fun = (data) => data

// return 对象
let fun1 = () => ({naem: "codexgh", age: 28})


/* let fun2 = () => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined
  console.log("无法访问arguments、无法使用构造函数来进行new")
}
fun2();
new fun2(); // Uncaught TypeError TypeError: fun2 is not a constructor */