'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resStr += this[i];
      }

      if (i < this.length - 1) {
        resStr += separator;
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
