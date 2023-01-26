'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1) {
        joined += this[i];
        break;
      }

      if (isNaN(separator)) {
        joined += this[i] + ',';
      }

      if (this[i] === undefined && i + 1 === this.length) {
        break;
      } else if (i + 1 === this.length) {
        joined += this[i];
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        joined += '' + separator;
      } else if (this[i] !== null || this[i] !== undefined) {
        joined += this[i] + separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
