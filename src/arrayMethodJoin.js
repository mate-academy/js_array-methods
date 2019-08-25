'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    }
    let str = '';
    let middleString = '';
    if (this.length === 0) {
      return str;
    };
    if (this.length === 1) {
      str += this[0];
      return str;
    };
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
