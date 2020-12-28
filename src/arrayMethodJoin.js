'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const sep = separator === undefined
      ? ','
      : separator === null
        ? 'null'
        : separator;

    if (this[0] == null || this[0] === undefined) {
      this[0] = '';
    }

    let row = '' + this[0];

    for (let i = 1; i < this.length; i++) {
      if (this[i] == null || this[i] === undefined) {
        this[i] = '';
      }

      row += sep + this[i];
    }

    return row;
  };
}

module.exports = applyCustomJoin;
