'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = `${checkNullElement(this[0])}`;

    for (let i = 1; i < this.length; i++) {
      result += String(separator) + checkNullElement(this[i]);
    }

    return result;
  };
}

function checkNullElement(element) {
  if (element === undefined || element == null) {
    return '';
  }

  return element;
}

module.exports = applyCustomJoin;
