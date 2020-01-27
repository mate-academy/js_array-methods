'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let functionSeparator = separator;

    if (separator === null) {
      functionSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (functionSeparator === null) {
        str += this[i] + 'null';
      } else if (this[i] === null || this[i] === undefined) {
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
