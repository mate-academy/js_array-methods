'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    // let join = separator;

    // if (separator === undefined) {
    //   join = ',';
    // }

    // if (separator === null) {
    //   join = 'null';
    // }

    // if (this.length === 0) {
    //   result = '';
    // }

    // if (this.length === 1) {
    //   return this[0].toString();
    // }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        result += this[i] + `${separator}`;
      } else {
        result += this[i];
      }
    }

    return result.toString();
  };
}

module.exports = applyCustomJoin;
