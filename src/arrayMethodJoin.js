'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    const arrLength = this.length;
    let sep = separator;

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      if (i === arrLength - 1) {
        res += this[i].toString();
      } else {
        res += this[i].toString() + sep.toString();
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;

// numbers.push = function() {
//   const argLength = arguments.length;
//   const arreyLength = this.length;

//   for (let i = 0; i < arguments.length; i++) {
//     this[arreyLength + i] = arguments[i];
//   }

//   return this.length;
// };
