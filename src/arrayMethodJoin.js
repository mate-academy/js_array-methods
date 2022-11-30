'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'number'
        || typeof this[i] === 'string'
        || typeof this[i] === 'boolean'
      ) {
        str += this[i];
      }

      if (i === this.length - 1) {
        continue;
      }

      str += separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
