/* async function test() {
console.log('ok')
 return '111'
}

var res = test();
res.then(res=>{
  console.log('res',res)
})
console.log('res',res) */


/* async function test() {
  // var res = await 111;

  var res = await new Promise((resolve, reject) => {
    reject("failed")
    // resolve("success");
  })
  return res
  console.log('ok')
   return '111'
  }
  
  var res = test();
  res.then(res=>{
    console.log('res',res)
  }).catch(err=>{
    console.log('err',err)
  })
  console.log('res',res) */


  function ajax(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true);
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.responseText);
          }
        }
      }
    })
  }

/*   ajax("http://xiongmaoyouxuan.com/api/tabs").then(res => {
    console.log("success: ", res);
  }).catch((err) => {
    console.log("error: ", err);
  }) */

  /* async function getData(){
    var res = await ajax("http://xiongmaoyouxuan.com/api/tabs")
    return res
  }

  getData().then(res=>{
   console.log('res',res)
  }).catch(err=>{
    console.log('err',err)
  }) */

/*   async function getData(){
    var res1 = await ajax(`http://localhost:3000/news?author=${name}`)
    var res2 = await ajax(`http://localhost:3000/comments?newsId=${res1[0].id}`)
    return res2
  }

  getData().then(res=>{
    console.log('res',res)
  }).catch(err=>{
    console.log('err',err)
  }) */

  async function getData(){
    try{
      var res1 = await ajax(`http://localhost:3000/news?author=${name}`)
      var res2 = await ajax(`http://localhost:3000/comments?newsId=${res1[0].id}`)
      console.log('构建也页面',res2)
    }
    catch(err){
      console.log('err', err)
    }
  }

  getData()