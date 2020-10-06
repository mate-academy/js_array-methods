'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let element = 0; element < this.length; element++) {
      if (this[element] !== null && this[element] !== undefined) {
        joinedString += this[element];
      }

      if (element !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
