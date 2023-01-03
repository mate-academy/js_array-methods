'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let args = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (args === undefined) {
        args = ',';
      }

      if (args === null) {
        args = 'null';
      }

      if (i !== this.length - 1) {
        result += this[i] + args;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
