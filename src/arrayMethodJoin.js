'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resultString += separator;
      }

      if (this[i] !== null && typeof this[i] !== 'undefined') {
        resultString += this[i];
      } else {
        resultString += '';
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
