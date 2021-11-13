'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 1) {
      return this.toString();
    }

    let newStr = '';

    for (let n = 0; n < this.length; n++) {
      if (this[n] === '') {
        newStr += '';
      } else if (this[n] === 'null') {
        newStr += 'null';
      } else if (Number.isNaN(this[n])) {
        newStr += 'NaN';
      } else if (this[n] === null || this[n] === undefined) {
        newStr += '';
      } else {
        const value = JSON.stringify(this[n]);

        newStr += value;
      }

      if (n < this.length - 1) {
        if (separator === undefined) {
          newStr += ',';
        } else if (separator === '') {
          newStr += '';
        } else {
          newStr += separator;
        }
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
