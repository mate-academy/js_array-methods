'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newSeparator = separator;

    if (separator === null) {
      newSeparator = 'null';
    }

    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === 0) {
        joined += this[i];
      } else {
        joined += newSeparator + this[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
