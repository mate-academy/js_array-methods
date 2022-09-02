'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      result += chek(this[i]);
      result += sep;
    }

    result += chek(this[this.length - 1]);

    return result;
  };
}

function chek(element) {
  if (element === undefined || element == null) {
    return '';
  }

  return element;
}

module.exports = applyCustomJoin;
