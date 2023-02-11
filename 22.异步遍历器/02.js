/* let arr = [1, 2, 3]
let i =  arr[Symbol.iterator]()
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());

for (const item of object) {
console.log(i)
} */

function *fn() {
  yield new Promise(resolve=>resolve("1111"))
  yield new Promise(resolve=>resolve("2222"))
}

const syncI = fn()
syncI.next().value.then(res=> {console.log(res);})
syncI.next().value.then(res=> {console.log(res);})