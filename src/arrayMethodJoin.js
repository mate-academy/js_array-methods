'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(str) {
    let string = '';
    if (str === undefined) {
      str = ',';
    }
    if (str === null) {
      str = 'null';
    }
    if (this.length === 0) {
      return string;
    } else {
      this.forEach((currentValue, index, array) => {
        const supplemented = currentValue === undefined || currentValue === null
          ? ''
          : currentValue;
        if (index !== array.length - 1) {
          string += supplemented + str;
        } else {
          string += supplemented;
        }
      });
      return string;
    }
  };
}

module.exports = applyCustomJoin;
