'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let sep;

    if (separator === null) {
      sep = 'null';
    } else {
      sep = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          resultString += '';
        } else {
          resultString += this[i];
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          resultString += '' + sep;
        } else {
          resultString += this[i] + sep;
        }
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
