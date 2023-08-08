'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let mainSeparatorClone = separator;

    if (separator === null) {
      mainSeparatorClone = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)
      && i !== this.length - 1) {
        resultString += '' + mainSeparatorClone;
      } else if (this[i] === null || this[i] === undefined) {
        resultString += '';
      } else if (i === this.length - 1) {
        resultString += this[i];
      } else {
        resultString += this[i] + mainSeparatorClone;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
