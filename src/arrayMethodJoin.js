'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outerStr = '';

    for (let i = 0; i < this.length; i++) {
      outerStr += this[i] === null || this[i] === undefined ? '' : this[i];

      if (i !== this.length - 1) {
        outerStr += separator;
      }
    }

    return outerStr;
  };
}

module.exports = applyCustomJoin;
