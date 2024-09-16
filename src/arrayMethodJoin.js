'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let joinedArr = '';

    if (sep === null) {
      sep = 'null';
    }
    if (this.length === 0) {
      return joinedArr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }
      if (i === (this.length - 1)) {
        sep = '';
      }
      joinedArr += this[i] + sep;
    }

    return joinedArr;
  };
}

module.exports = applyCustomJoin;
