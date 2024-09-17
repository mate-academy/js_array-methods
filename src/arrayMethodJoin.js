'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    let strSeparator = separator;

    if (typeof separator === 'undefined') {
      strSeparator = ',';
    };

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      };
      if (i !== this.length - 1) {
        resultStr = resultStr + this[i] + strSeparator;
      } else {
        resultStr = resultStr + this[i];
      };
    };

    return resultStr;
  };
}

module.exports = applyCustomJoin;
