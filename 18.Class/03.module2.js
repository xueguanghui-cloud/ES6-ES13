import { A2 } from "./03.module1.js";

A2()

function test(){
  console.log('module2--test')
}

function B1(){
  console.log('B1');
}

export default {
  test,
  B1
}