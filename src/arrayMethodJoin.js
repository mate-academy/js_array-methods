'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const currentSeparator = separator;
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }

      if (i !== this.length - 1) {
        resultString += `${element}${currentSeparator}`;
      } else {
        resultString += element;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
