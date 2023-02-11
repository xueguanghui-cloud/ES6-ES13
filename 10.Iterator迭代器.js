/* let arr = ["kerwin", "tiechui", "stephencurry"]
for (const iterator of arr) {
  console.log(iterator);
} */



/* Iterator 的遍历过程是这样的：
  （1）：创建一个指针对象，指向当前数据结构的起始位置。也即是说，遍历器对象本质上，就是一个指针对象；
  （2）：第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员；
  （3）：第二次调用指针对象的next方法，指针就指向数据结构的第二个成员；
  （4）：不断的调用指针对象的next方法，直到它指向数据结构的结束位置； */

/*   let iter = arr[Symbol.iterator]();
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
 */
  // String
 /*  let str = "codexgh"
  for (const iterator of str) {
    console.log(iterator);
  } */

  // arguments对象
  /* function test(){
    for (const iterator of arguments) {
      console.log(iterator);
    }
  }

  test(1, 2, 3, 5) */

  let res = {
    code: 200,
    name: "codexgh",
    list: ["kerwin", "codexgh", "stephencurry"],
    // 迭代器
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          return {
            value: this.list[index++], 
            done: index === (this.list.length+1) ? true : false
          }
        }
      }
    }
  }

  /* let iter = res[Symbol.iterator]()
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next()); */
  for (const iterator of res) {
    console.log(iterator)
  }