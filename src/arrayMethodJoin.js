'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let row = '';
    let sep = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        sep = '';
      };

      if (typeof this[i] === 'undefined' || typeof this[i] === 'object') {
        row += '' + sep;
        continue;
      };

      row += this[i] + sep;
    }

    return row;
  };
}

module.exports = applyCustomJoin;
