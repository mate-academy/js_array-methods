'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (let element = 0; element < this.length; element++) {
      if (this[element] === null || this[element] === undefined) {
        this[element] = '';
      }

      if (element === this.length - 1) {
        joinedArray += this[element];
        continue;
      }
      joinedArray += this[element] + String(separator);
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
