'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let sep = separator;

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        if (i >= this.length - 1) {
          string += this[i];
          continue;
        }
        string += (this[i] + sep);
        continue;
      } else {
        if (i >= this.length - 1) {
          continue;
        }
        string += sep;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
