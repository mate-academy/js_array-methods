'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';
    let change;

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        change = '';
      } else {
        change = this[i];
      }

      if (i !== this.length - 1) {
        if (separator !== null) {
          joined += change + separator;
        } else {
          joined += change + 'null';
        }
      } else {
        joined += change;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
