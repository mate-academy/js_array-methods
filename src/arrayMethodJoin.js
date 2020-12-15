'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinMethod = '';
    let splitter = separator;

    if (splitter === undefined) {
      splitter = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinMethod += this[i];
      }

      if (i !== this.length - 1) {
        joinMethod += splitter;
      }
    }

    return joinMethod;
  };
}

module.exports = applyCustomJoin;
