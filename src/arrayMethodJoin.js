'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringJoin = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        stringJoin += this[i];
      }

      if (i !== this.length - 1) {
        stringJoin += separator;
      }
    }

    return stringJoin;
  };
}

module.exports = applyCustomJoin;
