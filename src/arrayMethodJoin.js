'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let secondJoin = '';

    const separatorNew = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        secondJoin += this[i];
      }

      if (i !== this.length - 1) {
        secondJoin += separatorNew;
      }
    }

    return secondJoin;
  };
}

module.exports = applyCustomJoin;
