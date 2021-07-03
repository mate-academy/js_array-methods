'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let join = this[0] === null || this[0] === undefined ? '' : this[0];
    const separatorClean = separator === undefined ? ',' : separator;

    for (let i = 1; i < this.length; i++) {
      join = `${join}${separatorClean}${
        this[i] === null || this[i] === undefined ? '' : this[i]}`;
    }

    return String(join);
  };
}

module.exports = applyCustomJoin;
