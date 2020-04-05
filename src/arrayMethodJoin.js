'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let sep = '' + separator;
    let result = '';

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + sep;
      } else {
        result += this[i] + sep;
      }
    }

    return result.substring(0, (result.length - sep.length));
  };
}

module.exports = applyCustomJoin;
