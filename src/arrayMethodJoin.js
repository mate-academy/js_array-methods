'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const resultArray = [];
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === (this.length - 1)) {
        resultArray.push(this[i]);
      } else {
        if (this[i] === undefined || this[i] === null) {
          resultArray.push(separator);
        } else {
          resultArray.push(this[i]);
          resultArray.push(separator);
        }
      }
    }

    for (const el of resultArray) {
      result += el;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
