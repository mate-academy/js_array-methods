'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let separateSign = separator;

    if (separateSign === undefined) {
      separateSign = ',';
    } else if (separateSign === null) {
      separateSign = 'null';
    }

    let returnedValue = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        returnedValue += (i === this.length - 1) ? '' : separateSign;
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
