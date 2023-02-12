'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stroke = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        stroke += this[i];
      }

      if (i !== this.length - 1) {
        stroke += separator;
      }
    }

    return stroke;
  };
}

module.exports = applyCustomJoin;
