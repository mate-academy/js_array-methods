'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedElements = '';
    const delimiter = separator;

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (![undefined, null].includes(this[i])) {
        joinedElements += this[i];
      }

      if (i !== this.length - 1) {
        joinedElements += delimiter;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
