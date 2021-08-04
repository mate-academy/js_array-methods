'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const length = this.length;

    if (length === 0) {
      return '';
    }

    return this.reduce((string, current, index) => {
      let currentInner = current;
      const typeofVal = typeof currentInner;

      if (typeofVal === 'undefined' || typeofVal === 'object') {
        currentInner = '';
      }

      if (index === length - 1) {
        return string + currentInner;
      }

      return string + currentInner + separator;
    }, '');
  };
}

module.exports = applyCustomJoin;
