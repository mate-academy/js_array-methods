'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[this.length - 1] === undefined
        && this[this.length - 1] === this[i]) {
        continue;
      }

      if (i === this.length - 1) {
        result += this[i];
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        result += '' + String(separator);
        continue;
      }

      if (separator === '') {
        result += this[i];
        continue;
      }

      result += this[i] + String(separator);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
