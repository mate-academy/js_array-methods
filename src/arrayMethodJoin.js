'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let row = '';
    let sep = String(separator);

    if (separator === undefined) {
      sep = ',';
    };

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined') {
        if (i === this.length - 1) {
          sep = '';
        };
        row += '' + sep;
        continue;
      };

      if (typeof this[i] === 'object') {
        row += '' + sep;
        continue;
      };

      if (i === this.length - 1) {
        sep = '';
      };
      row += this[i] + sep;
    }

    return row;
  };
}

module.exports = applyCustomJoin;
