'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const checkSep = (separator === null) ? 'null' : separator;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + checkSep;
      } else {
        result += this[i] + checkSep;
      }
    }

    return (this[this.length - 1] === undefined)
      ? result : result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
