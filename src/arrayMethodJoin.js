'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnedValue = '';

    const sep = (separator === null) ? 'null'
      : (typeof separator === 'object') ? '[object Object]' : separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        returnedValue += (i === this.length - 1) ? '' : sep;
      } else if (i === this.length - 1) {
        returnedValue += `${this[i]}`;
      } else {
        returnedValue += `${this[i]}${sep}`;
      }
    }

    return returnedValue;
  };
}

module.exports = applyCustomJoin;
