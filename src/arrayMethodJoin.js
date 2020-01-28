'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const len = this.length - 1;
    const stringSeparator = String(separator);

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < len; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result = result + this[i] + stringSeparator;
    }

    return result + this[len];
  };
}

module.exports = applyCustomJoin;
