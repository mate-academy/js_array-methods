'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (typeof item === 'string'
        || typeof item === 'number'
        || typeof item === 'boolean') {
        str += '' + separator + item;
      } else {
        str += '' + separator;
      }
    }

    if (separator !== '') {
      const sep = `${separator}`;

      str = str.substring(sep.length);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
