'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    const sep = separator === undefined
      ? ','
      : separator;

    for (const item of this) {
      if (item === this[this.length - 1]) {
        string += `${item}`;
        continue;
      }

      if (item === null || item === undefined) {
        string += `${sep}`;
      } else {
        string += `${item}${sep}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
