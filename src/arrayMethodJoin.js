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

    // we will process input separator
    let fixedSeparator = separator;

    // process separator: if it is null - change it to string 'null'
    if (separator === null) {
      fixedSeparator = 'null';
    }

    // convert input separator to string
    fixedSeparator = fixedSeparator.toString();

    // we will return values of input array joined by separator
    // if array.length will be 1,
    // we return one value without any separators
    let joinedString = checkValue(this[0]);

    // add rest of values via separator
    for (let i = 1; i < this.length; i++) {
      joinedString += fixedSeparator + checkValue(this[i]);
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
