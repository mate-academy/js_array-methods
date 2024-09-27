'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        res += this[i];
      }

      if (i !== this.length - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
