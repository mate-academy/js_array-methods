'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',' || 'null') {
    if (this.length === 0) {
      return '';
    }

    let joined = '';

    let newSeparator = separator;

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        joined += this[i] || '';
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        joined += '' + newSeparator;
        continue;
      }
      joined += this[i] + newSeparator;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
