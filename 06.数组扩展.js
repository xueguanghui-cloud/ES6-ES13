/* let arr = [1, 2, 3]

// 复制
let arr1 = [...arr] // [1, 2, 3]
// 合并数组
let arr2 = [...arr, ...[4, 5, 6]] // [1, 2, 3, 4, 5, 6] */

/* function test() {
  console.log(arguments);
  console.log(Array.from(arguments));
}

test(1, 2, 3, 4, 5, 6) */

/* console.log(Array.of(7));
console.log(Array.of(1, 3, 4, 5, 6)); */

// let arr = [11, 12, 13, 14, 15]
// console.log(arr.find(item => {return item > 13}));
// console.log(arr.findIndex(item => {return item > 13}));
// console.log(arr.findLast(item => {return item > 13})); // 15
// console.log(arr.findLastIndex(item => {return item > 13})); // 4

/* let arr = new Array(5).fill("codexgh")
console.log(arr);

let arr1 = [11, 22, 33]
console.log(arr1.fill("codexgh", 1, 2)); */

/* let arr = [1, 2, 3, 4, ["a", "b", "c"], 5, 6]
console.log(arr.flat()); */

/* let arr = [
  ["安庆", "安阳", "鞍山"],
  ["北京", "保定", "包头"]
]
console.log(arr.flat()); //['安庆', '安阳', '鞍山', '北京', '保定', '包头'] */

let arr = [
  {
    name: "A",
    list: ["安庆", "安阳", "鞍山"],
  },
  {
    name: "B",
    list: ["北京", "保定", "包头"]
  }
]
let res = arr.flatMap(function(item){
  return item.list
})
console.log(res); //['安庆', '安阳', '鞍山', '北京', '保定', '包头']