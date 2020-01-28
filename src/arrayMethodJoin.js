'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = '';
    const length = this.length - 1;
    const stringSeparator = String(separator);

    for (let i = 0; i < length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result = result + this[i] + stringSeparator;
    }

    return result + this[length];
  };
}

module.exports = applyCustomJoin;
