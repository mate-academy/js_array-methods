'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const innerSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i !== (this.length) - 1) {
          str += innerSeparator;
        }
        continue;
      } else {
        str += this[i];

        if (i !== (this.length) - 1) {
          str += innerSeparator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
