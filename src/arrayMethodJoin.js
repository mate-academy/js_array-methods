'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    for (let i = 0; i < this.length; i++) {
      const item = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      output += (i !== this.length - 1)
        ? item + `${separator}`
        : item;
    }

    return output;
  };
}

module.exports = applyCustomJoin;
