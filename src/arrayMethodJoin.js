'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const newSeparator = separator === undefined ? ',' : separator;

    let list = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        list += this[i];
      }

      if (this.length - 1 !== i) {
        list += newSeparator;
      }
    }

    return list;
  };
};

module.exports = applyCustomJoin;
