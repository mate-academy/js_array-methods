'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // if (this.length === 0) {
    //   return '';
    // }

    // for (let i = 0; i < this.length; i++) {
    //   if (this[i] === undefined || this[i] === null) {
    //     this[i] = '';
    //   }
    // }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (i < this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
