'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;
    let result = '';

    if (this.length === 0) {
      return result;
    } else if (this.length === 1) {
      result = String(this[0]);

      return result;
    }

    if (sep === undefined) {
      sep = ',';
    }

    for (let inDX = 0; inDX < this.length; inDX++) {
      if (this[inDX] === null || this[inDX] === undefined) {
        result += (inDX === this.length - 1)
          ? `${''}` : `${''}${sep}`;
        continue;
      }

      result += (inDX === this.length - 1)
        ? `${String(this[inDX])}`
        : `${String(this[inDX])}${sep}`;
    }

    return result;
  };
};

module.exports = applyCustomJoin;
