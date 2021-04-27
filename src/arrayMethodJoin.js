'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

const source = [false, null, 1, undefined, 0, NaN, ''];

applyCustomJoin();

source.join2(',');

module.exports = applyCustomJoin;
