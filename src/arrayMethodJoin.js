'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let result = '';
    let element = '';

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        element = '';
      } else {
        element = this[i];
      }

      result += (i !== this.length - 1) ? element + sep : element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
