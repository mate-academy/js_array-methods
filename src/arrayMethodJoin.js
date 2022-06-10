'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const checkSep = separator === undefined ? ',' : String(separator);

    for (let i = 0; i < this.length; i++) {
      const item = checkIfAcceptableValue(this[i]) ? this[i] : '';

      if (i === this.length - 1) {
        result += item;
      } else {
        result += item + checkSep;
      }
    }

    return result;
  };
};

function checkIfAcceptableValue(value) {
  return value !== undefined && value !== null;
}

module.exports = applyCustomJoin;
