'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let separateSign = separator === undefined ? ',' : separator;

    if (separateSign === null) {
      separateSign = 'null';
    } else if (typeof separateSign === 'object') {
      separateSign = '[object Object]';
    }

    let returnedValue = '';

    for (let i = 0; i < this.length; i++) {

      if (this[i] === undefined || this[i] === null) {
        returnedValue += i === this.length - 1 ? '' : separateSign;
      } else if (i === this.length - 1) {
        returnedValue += this[i];
      } else {
        returnedValue += this[i] + separateSign;
      }
    }

    return returnedValue;
  };
}

module.exports = applyCustomJoin;
