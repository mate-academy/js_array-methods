'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';
    let newSeparator = separator;

    if (separator === ',' || separator === undefined) {
      newSeparator = ',';
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i !== this.length - 1) {
          resultString += newSeparator;
        }
        continue;
      }

      if (i !== this.length - 1) {
        resultString += (this[i] + '') + newSeparator;
      } else {
        resultString += this[i];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
