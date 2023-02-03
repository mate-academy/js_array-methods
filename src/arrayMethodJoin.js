'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let likeJoin = '';
    const sep = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        likeJoin += this[i];
      }

      if (i < this.length - 1) {
        likeJoin += sep;
      }
    }

    return likeJoin;
  };
}

module.exports = applyCustomJoin;
