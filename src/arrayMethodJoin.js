'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    if (this.length === 1) {
      joined += this;
    }

    if (this.length > 1) {
      if (this[0] !== null) {
        joined += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (separator === null) {
          joined += null + this[i].toString();
        } else if (this[i] === null || this[i] === undefined) {
          joined += separator;
        } else {
          joined += separator + this[i];
        }
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
