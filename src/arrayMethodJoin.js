'use strict';

/**
 * Implement method join
 */

// let x = [0];
// function joining(separator) {
//   let str = '';
//   let middleString = '';
//   if (separator !== undefined) {
//     str += x[0];
//     for (let a = 1; a < x.length -  1; a++) {
//       middleString = middleString + separator + x[a];
//     };
//     str = str + middleString + separator + x[x.length - 1];
//   } else {
//     str += x[0];
//     for (let i = 1; i < x.length - 1; i++) {
//       middleString = middleString + ',' + x[i];
//     };
//     str = str + middleString + ',' + x[x.length - 1];
//   }

//   return str;
// }
// console.log(joining());
// let u = [[0]];
// console.log(u.join());

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let middleString = '';
    if (separator !== undefined) {
      str += this[0];
      for (let a = 1; a < this.length - 1; a++) {
        middleString = middleString + separator + this[a];
      };
      str = str + middleString + separator + this[this.length - 1];
    } else {
      str += this[0];
      for (let i = 1; i < this.length - 1; i++) {
        middleString = middleString + ',' + this[i];
      };
      str = str + middleString + ',' + this[this.length - 1];
    }
    return str;
  };
}

module.exports = applyCustomJoin;
