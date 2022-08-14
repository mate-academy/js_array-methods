'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  // let str = '';
  // let t = [0, 1, 2, 3];
  // let t = [false, null, 1, undefined, 0, NaN];

  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      // console.log(t[i]);
      if (typeof this[i] === 'undefined' || this[i] === null) {
        str += '';
      } else {
        str += this[i];
      }

      if (i !== this.length - 1) {
      //  console.log("object");
        str += separator;
      }
    }

    return str;
  };
  // console.log(t.join2());
  // return str;
}

// console.log(applyCustomJoin());
// console.log(t);

module.exports = applyCustomJoin;

// function applyCustomJoin() {
//   // let str = '';
//   // let t = [0, 1, 2, 3];

//   [].__proto__.join2 = function(separator = ',') {
//     // if (this.length === 0) {
//     //   return '';
//     // }
//     // if (!this.length) {
//     //   return '';
//     // }

//     let str = '';
//     // return str;
//   };
//   // console.log(t.join2());
//   // return str;
// }
