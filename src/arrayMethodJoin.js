'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      let currentElement = this[i];

      if (currentElement === undefined || currentElement === null) {
        currentElement = '';
      }

      resultStr += currentElement;

      if (i !== this.length - 1) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
