'use strict';

/**
 * Implement method join
 */

// ([null, null, 1, undefined, 0, 'null', NaN, ''].join2(','))
// expected ",,1,,0,null,NaN,"

// ([1, 2, 3, 4, undefined].join2(','))
// expected ('1,2,3,4,')

// ([false, null, 1, undefined, 0, NaN, ''].join2(','))
// expected "false,,1,,0,NaN,"

// (source.join2(undefined))
// Should use comma if undefined is passed as a separator
// "0,1,2,3"

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      // ([false, null, 1, undefined, 0, NaN, ''].join2(','))
      if (this[i] !== undefined && this[i] !== null) {
        str += this[i];
        // "false,,1,,0,NaN,"
      }

      if (i !== this.length - 1) {
        // i = 0/1/2/3/4/5/6
        // this.length = 1/2/3/4/5/6/7
        // i !== this.length - 1
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
