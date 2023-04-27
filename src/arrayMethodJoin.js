'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';

    for (let i = 0; i <= this.length - 1; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        break;
      }

      if (i === this.length - 1) {
        joined += this[i];
        break;
      } else if (separator === null) {
        joined += this[i] + 'null';
      } else if (separator === undefined) {
        joined += this[i] + ',';
      } else if (this[i] === null || this[i] === undefined) {
        joined += ',';
      } else {
        joined += this[i] + separator;
      }
    };

    return joined;
  };
}
module.exports = applyCustomJoin;
