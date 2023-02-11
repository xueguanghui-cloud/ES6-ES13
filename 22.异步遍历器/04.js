/* function timer(time) {
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve("data-" + time)
    }, time);
  })
  }
  
  async function *gen() {  
    yield timer(1000)
    yield timer(2000)
    yield timer(3000)
  }
  
  async function test(){
    let g = gen();
    let arr = [g.next(), g.next(), g.next()]
    
    for await(let item of arr) {
      console.log('start-', Date.now());
      console.log(item);
      console.log('end-', Date.now());
    }
  }
  
  test() */

  // 传统写法
  function main(inputFilePath){
    const readStream = fs.createReadStream(
      inputFilePath,
      { encoding: 'utf8', highwaterMark: 1024 }
    );
    readStream.on('data', (chunk)=>{
      console.log('>>>' + chunk);
    })
    readStream.on("end", ()=>{
      console.log("### DONE ###" );
    })
  }

// 异步遍历器
function main(inputFilePath) {
  const readStream = fs.createReadStream(
    inputFilePath,
    { encoding: 'utf8', highwaterMark: 1024 }
  );

  for await(const chunk of readStream) {
    console.log(">>>" + chunk);
  }
  console.log('### DONE ###')
} 