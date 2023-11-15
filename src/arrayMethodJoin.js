'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let newSaparator = separator;

    if (newSaparator === null) {
      newSaparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i + 1 !== this.length) {
        result += newSaparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
