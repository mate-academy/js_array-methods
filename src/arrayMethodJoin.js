'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const len = this.length - 1;

    for (let i = 0; i < len; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        result = result + this[i] + 'null';
      } else if (separator === undefined) {
        result = result + this[i] + ',';
      } else {
        result = result + this[i] + separator;
      }
    }

    if (this.length === 0) {
      return '';
    }

    return result + this[len];
  };
}

module.exports = applyCustomJoin;
