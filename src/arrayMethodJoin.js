'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let separatorCorrect;
    let result = '';

    if (separator === null) {
      separatorCorrect = 'null';
    } else if (separator === undefined) {
      separatorCorrect = ',';
    } else {
      separatorCorrect = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
        result += this[i];
      }

      if (i === this.length - 1) {
        result += this[i];
        continue;
      }
      result += this[i] + separatorCorrect;
    }

    return result;
  };
};

module.exports = applyCustomJoin;
