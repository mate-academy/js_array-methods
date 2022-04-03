'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.lenght < 2) {
      return this[0];
    }

    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if ((item === undefined || item === null) && i !== this.length - 1) {
        resultStr += `${separator}`;
      } else if (item === undefined && i === this.length - 1) {
        resultStr += '';
      } else if (i === this.length - 1) {
        resultStr += `${item}`;
      } else {
        resultStr += `${item}` + `${separator}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
