'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separatorValue = separator;

    if (separatorValue === undefined) {
      separatorValue = ',';
    }

    const arr = this;
    let result = '';

    if (arr.length === 0) {
      return '';
    }

    for (const element of arr) {
      const str = element === null
      || element === undefined ? '' : element.toString();

      result += str;

      if (arr.indexOf(element) < arr.length - 1) {
        if (separatorValue === null) {
          separatorValue = 'null';
        }
        result += separatorValue.toString();
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
