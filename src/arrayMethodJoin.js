'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    if (this[this.length - 1]) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
