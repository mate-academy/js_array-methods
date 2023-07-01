'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let complete = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        complete += separator !== undefined ? separator : ',';
      }

      if (this[i] !== null && this[i] !== undefined) {
        complete += this[i];
      }
    }

    return complete;
  };
}

module.exports = applyCustomJoin;
