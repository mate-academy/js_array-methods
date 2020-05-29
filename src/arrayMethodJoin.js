'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';
    let separatorNew = separator;

    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return this[0].toString();
    }

    if (separator === null) {
      separatorNew = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      resultStr += this[i] + separatorNew;
    }

    resultStr += this[this.length - 1];

    return resultStr;
  };
}

module.exports = applyCustomJoin;
