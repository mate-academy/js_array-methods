'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const functionSeparator = '' + separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '' + functionSeparator;
      } else if (i !== this.length - 1) {
        str += this[i] + functionSeparator;
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
