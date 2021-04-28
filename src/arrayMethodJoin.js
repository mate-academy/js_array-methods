'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // let string = '';

    // if (this.length === 0) {
    //   return '';
    // }

    // for (const item of this) {
    //   if (this[item] === null || this[item] === undefined) {
    //     this[item] = '';
    //   }

    //   if (item < this.length - 1) {
    //     string += separator;
    //   }
    // }

    // return string;

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (this[i] !== undefined || this[i] !== null) {
        string += '';
      }

      if (i < this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
