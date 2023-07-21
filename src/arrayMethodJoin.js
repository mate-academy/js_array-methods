'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    // const join2 = [...this];
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        if (this[i] === undefined || this[i] === null) {
          result += '';
        } else {
          result += this[i];
        }
      }

      if (i > 0) {
        if (this[i] === undefined || this[i] === null) {
          result = result + separator + '';
        } else {
          result = result + separator + this[i];
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
