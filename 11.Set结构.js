/* let s1 = new Set([1, 2, 3, 4, 5, 4, 3, 2, 1]);
console.log(s1);

let s2 = new Set();
s2.add(1);
s2.add(2);
s2.add(3);
s2.add(2);
console.log(s2); */

// let s1 = new Set([1, 2, 3, 4, 5, 4, 3, 2, 1]);
/* console.log(s1.size);
console.log(s1.has(5));
s1.delete(5)
console.log(s1);
s1.clear();
console.log(s1); */
/* let s1 = new Set(["aa", "vv", "cc", "ssd", "sdf"]);
for (const iterator of s1.keys()) {
  console.log(iterator);
} */


/* let s1 = new Set(["aa", "vv", "cc", "ssd", "sdf"]);
for (const iterator of s1.values()) {
  console.log(iterator);
} */
/* 
let s1 = new Set(["aa", "vv", "cc", "ssd", "sdf"]);
s1.forEach(item => {
  console.log(item);
}) */

// 数组去重
let list = [1, 2, 2, "aa", "cc", "aa", { name: "codexgh", info: { height: 190, weight: 200 } }, { name: "kerwin", info: { height: 170, weight: 120 } }, { name: "codexgh", info: { height: 190, weight: 200 } }, [1, 2, 3, { name: "codexgh", info: { height: 190, weight: 200 } }], [1, 2, 3, { name: "codexgh", info: { height: 190, weight: 200 } }]]

function duplicateRemoval(arr){
  const result = new Set();
  return arr.filter(item => {
    const id = JSON.stringify(item)
    if(result.has(id)) {
      return false;
    } else {
      result.add(id);
      return true;
    }
  })
}
const res = duplicateRemoval(list)
console.log(res);