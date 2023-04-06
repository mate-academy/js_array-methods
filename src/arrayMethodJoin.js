'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let returnedValue = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    } else if (typeof separator === 'object') {
      sep = '[object Object]';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        returnedValue += (i === this.length - 1) ? '' : sep;
      } else if (i === this.length - 1) {
        returnedValue += this[i];
      } else {
        returnedValue += this[i] + sep;
      }
    }

    return returnedValue;
  };
}

module.exports = applyCustomJoin;
