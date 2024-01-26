'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += separator;
      } else {
        string += `${this[i]}` + separator;
      }
    }

    if (this[this.length - 1]) {
      string += this[this.length - 1];
    }

    return string;
  };
}

module.exports = applyCustomJoin;
