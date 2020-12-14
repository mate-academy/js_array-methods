'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    const testInput = (inputElement) => {
      if (inputElement === null || inputElement === undefined) {
        return '';
      } else {
        return inputElement;
      }
    };

    const testSeparator = (separatorTest) => {
      if (separatorTest === undefined) {
        return ',';
      } else if (separatorTest === null) {
        return 'null';
      } else {
        return separatorTest;
      }
    };

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1) {
        result += testInput(this[i]) + testSeparator(separator).toString();
      } else {
        result += testInput(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
