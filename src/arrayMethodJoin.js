'use strict';

/**
 * Implement method join
 */

const getValidString = (str) => {
  if (str === null || str === undefined) {
    return '';
  }

  return str.toString();
};

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = getValidString(this[0]);

    for (let i = 1; i < this.length; i++) {
      result += separator + getValidString(this[i]);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
