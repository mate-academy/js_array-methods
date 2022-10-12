'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = this[0] === null || typeof this[0]
    === 'undefined' ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        string += separator + '';
      } else {
        string = `${string}${typeof separator === 'undefined'
          ? ','
          : separator}${this[i]}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
