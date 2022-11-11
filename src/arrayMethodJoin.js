'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null) {
        if (this[i] !== undefined) {
          result += this[i];
        }
      }

      if (i !== this.length - 1) {
        if (separator !== undefined) {
          result += separator;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
