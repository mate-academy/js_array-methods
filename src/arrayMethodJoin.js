'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const length = this.length;
    for (let i = 0; i < length; i++) {
      let item;
      if (this[i] === null || this[i] === undefined) {
        item = '';
      } else {
        item = this[i];
      }
      if (i === 0) {
        resultString += item;
        continue;
      }
      resultString += separator + '' + item;
    }
    return resultString;
  };
}

module.exports = applyCustomJoin;
