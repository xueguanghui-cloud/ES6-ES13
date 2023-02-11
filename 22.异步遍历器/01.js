function timer(time) {
return new Promise((resolve)=>{
  setTimeout(() => {
    resolve("data-" + time)
  }, time);
})
}


async function test(){
  let arr = [timer(1000), timer(2000), timer(3000)]
  
  for(let item of arr) {
    console.log(await item);
  }
}

test()