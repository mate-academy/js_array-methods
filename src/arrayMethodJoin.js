'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let anwser = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        anwser += this[i];
      }

      if (i < this.length - 1) {
        anwser += separator;
      }
    }

    return anwser;
  };
}

module.exports = applyCustomJoin;
