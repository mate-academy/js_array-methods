'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    let newSep = separator;

    if (separator === null) {
      newSep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        res += this[i] + newSep;
      } else {
        res += this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
