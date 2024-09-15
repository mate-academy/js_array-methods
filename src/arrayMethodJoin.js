'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        finalString += this[i];
      }

      if (i !== this.length - 1) {
        finalString += separator;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
