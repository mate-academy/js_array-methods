'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';
    let element;
    const separatorCopy = separator + '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (Object.is(element, NaN)) {
        element = 'NaN';
      }

      if (i === 0) {
        joinResult += element;
      } else {
        joinResult += separatorCopy + element;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
