'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length && i !== 0) {
        resultString += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
