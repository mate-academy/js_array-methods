'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(str = ',') {
    let string = '';
    let separator = str;
    if (separator === null) {
      separator = 'null';
    }
    this.forEach((currentValue, index, array) => {
      const supplemented = currentValue === undefined || currentValue === null
        ? ''
        : currentValue;
      if (index !== array.length - 1) {
        string += supplemented + separator;
      } else {
        string += supplemented;
      }
    });
    return string;
  };
}

module.exports = applyCustomJoin;
