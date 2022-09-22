'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorValue = separator;
    let resultString = '';

    if (separator === null) {
      separatorValue = 'null';
    } else if (separator === '') {
      separatorValue = '';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (this[i] === undefined || this[i] === null) {
        element = '';
      }

      if (i === 0) {
        resultString += element;
      } else {
        resultString += separatorValue + element;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
