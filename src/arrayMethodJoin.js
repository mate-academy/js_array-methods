'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // if input array is empty - return empty string
    if (this.length === 0) {
      return '';
    }

    // we will return values of input array joined by separator
    // if array.length will be 1,
    // we return one value without any separators
    let joinedString = checkValue(this[0]);

    // add rest of values via separator
    for (let i = 1; i < this.length; i++) {
      joinedString += separator + checkValue(this[i]);
    }

    return joinedString;
  };

  // extra function of checking value, when array has null and undefined
  function checkValue(value) {
    if (value === null || value === undefined) {
      return '';
    }

    return value.toString();
  }
}

module.exports = applyCustomJoin;
