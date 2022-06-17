'use strict';

/**
 * Implement method join
 */
/*eslint-disable*/
function applyCustomJoin() {
  [].__proto__.join2 = function(separator ) {
    // write code here
    let sep = separator;

    if(separator === undefined) {
      sep = ','
    }
    let string = '';

    for (const el of this) {
      let insert = '';

      if (el !== null && el !== undefined) {
        insert = el;
      }

      if (el === this[this.length - 1]) {
        string += '' + insert;
      } else {
        string += '' + insert + sep;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
