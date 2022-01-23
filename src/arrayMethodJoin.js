'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let stringResult = '';
    let separatorElem = ',';

    if (this.length === 0) {
      return '';
    }

    if (separator !== undefined) {
      separatorElem = separator === null ? 'null' : separator;
    }

    if ((this[0] !== null) && (this[0] !== undefined)) {
      stringResult += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        stringResult += separatorElem + '';
        continue;
      }

      stringResult += separatorElem + this[i];
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
