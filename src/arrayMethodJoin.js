'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let likeJoin = '';
    const sep = separator;

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        likeJoin += this[i];
      }
      likeJoin += sep;
    }

    if (this[this.length - 1]) {
      likeJoin += this[this.length - 1];
    }

    return likeJoin;
  };
}

module.exports = applyCustomJoin;
