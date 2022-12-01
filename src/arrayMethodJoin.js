'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'number'
        || typeof this[i] === 'string'
        || typeof this[i] === 'boolean'
      ) {
        joinedString += this[i];
      }

      if (i !== this.length - 1) {
        joinedString += separator;
      }

      continue;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
