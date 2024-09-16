'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newArr = '';

    if (this.length === 0) {
      return newArr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        newArr += this[i];
      }

      if (i !== this.length - 1) {
        newArr += separator;
      }
    }

    return newArr;
  };
}

module.exports = applyCustomJoin;
