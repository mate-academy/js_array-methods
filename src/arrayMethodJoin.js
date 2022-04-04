'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
          resultString += '';
          break;

        case null:
          resultString += '';
          break;

        default:
          resultString += this[i];
      }

      if (i + 1 !== this.length) {
        resultString += separator;
      }
    };

    return resultString;
  };
};

module.exports = applyCustomJoin;
