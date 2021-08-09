'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArr = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedArr += this[i];
      }

      if (i < this.length - 1) {
        joinedArr += separator;
      }
    }

    return joinedArr;
  };
}

module.exports = applyCustomJoin;
