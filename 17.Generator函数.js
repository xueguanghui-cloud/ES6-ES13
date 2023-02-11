/* function *gen() {
  console.log(11)
  yield
  console.log(22)
  yield
  console.log(33)
}

let g = gen()
g.next()
g.next()
g.next() */

/* function *gen() {
  console.log(11)
  yield "aaa"
  console.log(22)
  yield "bbb"
  console.log(33)
}

let g = gen()
const res1 = g.next()
const res2 = g.next()
const res3 = g.next()
console.log(res1,res2,res3) */

function *gen() {
  const res1 = yield "aaa"
  console.log('res1',res1)
  const res2 = yield "bbb"
  console.log('res2',res2)
}

let g = gen()
const res1 = g.next("传入-111")
const res2 = g.next("传入-222")
const res3 = g.next("传入-333")