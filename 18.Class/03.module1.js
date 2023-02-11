const odiv = document.querySelector("div")
console.log('odiv',odiv)


function A1(){
  _a1()
  console.log('A1')
}

function _a1(){
  console.log('a1')
}

function A2(){
  console.log('A2')
}

function test(){
  console.log('module1--test')
}

// 导出01.module1.js
// export default {A1, A2, test};
export {A1, A2, test}