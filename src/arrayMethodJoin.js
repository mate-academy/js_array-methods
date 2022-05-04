'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separ = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        result += separ;
        continue;
      }

      result += String(this[i]);

      if (i !== this.length - 1) {
        result += separ;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
