'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 0) {
      return resultString;
    }

    if (this.length === 1) {
      resultString += this[0];

      return resultString;
    }

    for (let i = 0; i < this.length; i++) {
      if (separator === '') {
        resultString += this[i];
      } else {
        let currentElement = this[i];

        if (currentElement === null || currentElement === undefined) {
          currentElement = '';
        }

        resultString += currentElement
        + `${this[i] !== this[this.length - 1] ? separator : ''}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
