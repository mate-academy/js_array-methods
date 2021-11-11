'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const strSeparator = typeof separator === 'string'
      ? separator
      : separator + '';

    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      if (i !== this.length - 1) {
        joinedStr += element + strSeparator;
      } else {
        joinedStr += element;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
