'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1) {
        resultString += nextElement(this[i]) + separator;
      } else {
        resultString += nextElement(this[i]);
      }
    }

    return resultString;
  };
}

function nextElement(item) {
  if (item === null || item === undefined) {
    return '';
  }

  return item + '';
}

module.exports = applyCustomJoin;
