/* function A1() {
  console.log("A1");
}

function A2() {
  console.log('A2');
}

function _a1() {
  console.log('_a1');
}

module.exports = {A1, A2} */

function A1() {
  console.log("A1");
}

function A2() {
  console.log('A2');
}

function _a1() {
  console.log('_a1');
}

exports.A1 = A1
exports.A2 = A2