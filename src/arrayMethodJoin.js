'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let resultString = '';

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      resultString += (i !== this.length - 1) ? this[i] + sep : this[i];
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
