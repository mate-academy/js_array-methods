'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (this.length !== i + 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
