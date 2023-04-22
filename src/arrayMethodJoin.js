'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        arrJoin += this[i];
      }

      if (i !== this.length - 1) {
        arrJoin += separator;
      }
    }

    return arrJoin;
  };
};
// }

module.exports = applyCustomJoin;
