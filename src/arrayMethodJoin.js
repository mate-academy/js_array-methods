'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    if (this[0] !== undefined && this[0] !== null) {
      result += `${this[0]}`;
    } else {
      result += '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += `${separator}${this[i]}`;
      } else {
        result += ',';
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;

// const source = [0, 1, 2, 3];
// applyCustomJoin();
// console.log(source.join2('-'));
