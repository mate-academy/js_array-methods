'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';
    let change;
    let divine = separator;

    if (divine === null) {
      divine = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        change = '';
      } else {
        change = this[i];
      }

      if (i !== this.length - 1) {
        joined += change + divine;
      } else {
        joined += change;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
