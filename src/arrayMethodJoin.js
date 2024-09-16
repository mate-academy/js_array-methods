'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== this.length - 1 && separator !== undefined) {
        result += separator;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
