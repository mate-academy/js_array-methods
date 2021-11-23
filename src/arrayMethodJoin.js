'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        str += this[i];
        break;
      }

      if (this[this.length - 1] === undefined) {
        this[this.length - 1] = '';
      }

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === undefined) {
        str += this[i] + ',';
      } else {
        str += this[i] + String(separator);
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
