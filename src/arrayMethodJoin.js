'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === null || this[i] === undefined) {
        item = '';
      };

      if (i === 0) {
        resultStr += item;
      } else {
        resultStr += separator + '' + item;
      }
    };

    return resultStr;
  };
}

module.exports = applyCustomJoin;
