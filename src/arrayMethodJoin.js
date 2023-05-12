'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const delimiter = separator;

    let output = '';

    for (let i = 0; i < this.length; i++) {
      const current = _isValidItem(this[i]) ? this[i] : '';
      const part = !_isLastIndex(this, i)
        ? current.toString() + delimiter
        : current;

      output += part;
    }

    return output;
  };
}

function _isValidItem(item) {
  return item !== undefined && item !== null;
}

function _isLastIndex(array, index) {
  return index === array.length - 1;
}

module.exports = applyCustomJoin;
