'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    // const delimiter = separator;

    let output = '';

    for (let i = 0; i < this.length; i++) {
      if (isItemValid(this[i])) {
        output += this[i].toString();
      }

      if (!isLastIndex(this, i)) {
        output += separator;
      }
    }

    return output;
  };
}

function isItemValid(item) {
  return item !== undefined && item !== null;
}

function isLastIndex(array, index) {
  return index === array.length - 1;
}

module.exports = applyCustomJoin;
