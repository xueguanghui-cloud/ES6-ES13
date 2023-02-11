function ajax(data) {
  return new Promise(resolve => {resolve(data)})
}

// 异步生成器
async function *fn(){
  yield ajax("1111")
  yield ajax("2222")
}

// g 就是一个异步遍历器
let g = fn()
/* g.next().then(res=> {
  console.log(res);
  return g.next()
}).then(res=>{
  console.log(res)
  return g.next()
}).then(res=>{
  console.log(res)
}) */

/* async function test() {
  let res1 = await g.next();
  console.log(res1);
  let res2 = await g.next();
  console.log(res2);
  let res3 = await g.next();
  console.log(res3);
} */


async function test() {
  let list = [g.next(), g.next(), g.next()]
  for await(const i of list) {
    console.log(i);
  }
}
test()