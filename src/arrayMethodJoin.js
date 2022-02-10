'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    const len = this.length;

    for (let n = 0; n < len; n++) {
      const curr = this[n];

      output += curr === null || typeof curr === 'undefined'
        ? ''
        : curr;
      output += n !== len - 1 ? separator : '';
    }

    return output;
  };
}

module.exports = applyCustomJoin;
