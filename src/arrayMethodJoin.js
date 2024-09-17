'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let value = 0; value < this.length; value++) {
      let val = this[value];

      if (this[value] === null || this[value] === undefined) {
        val = '';
      }

      str += val;

      if (value < this.length - 1) {
        str += sep;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
