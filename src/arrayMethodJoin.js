'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';
    const coma = ',';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joined += this[i];
      }

      if (i !== this.length - 1 && separator !== undefined) {
        joined += separator;
      }

      if (i !== this.length - 1 && separator === undefined) {
        joined += coma;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
// git push origin develop --no-verify
