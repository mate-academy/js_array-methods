'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const sep = separator;
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      result += check(this[i]);
      result += sep;
    }

    result += check(this[this.length - 1]);

    return result;
  };
}

function check(element) {
  if (element === undefined || element === null) {
    return '';
  }

  return element;
}

module.exports = applyCustomJoin;
