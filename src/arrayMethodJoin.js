'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const length = this.length;
    let firstElement = String(this[0]);
    let separatorValue = separator;

    if (length === 0) {
      return '';
    }

    if (firstElement === 'undefined' || firstElement === 'null') {
      firstElement = '';
    }

    if (length === 1) {
      return firstElement;
    }

    if (separatorValue === undefined) {
      separatorValue = ',';
    }

    if (separatorValue === null) {
      separatorValue = 'null';
    }

    let result = firstElement;

    for (let i = 1; i < length; i++) {
      let element = this[i];

      if (element === undefined || element === null) {
        element = '';
      }
      result += separatorValue + element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
