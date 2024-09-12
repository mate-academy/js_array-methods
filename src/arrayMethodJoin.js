'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const eliminator = (separator === null) ? 'null'
      : separator;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        resultString += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        resultString += eliminator;
      } else {
        resultString += this[i] + eliminator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
