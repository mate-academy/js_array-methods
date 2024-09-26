'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let newSep = separator;

    if (separator === null) {
      newSep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '' + newSep;
      } else if (i !== this.length - 1) {
        str += this[i] + newSep;
      }

      if (i === this.length - 1) {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
