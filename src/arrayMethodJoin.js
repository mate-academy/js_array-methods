'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    function inputTest(input) {
      if (input === null || input === undefined) {
        return '';
      } else {
        return input;
      }
    };

    function separatorTest(inputSeparator) {
      if (inputSeparator === null) {
        return 'null';
      } else {
        return inputSeparator;
      }
    };

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1) {
        result += inputTest(this[i]) + separatorTest(separator);
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
