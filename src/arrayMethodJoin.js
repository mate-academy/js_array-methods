'use strict';

/**
 * Implement method join
*/

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resulString = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        resulString += isNullOrUndefined(this[i]) + String(separator);
      } else {
        resulString += isNullOrUndefined(this[i]);
      }
    };

    return resulString;
  };
}

function isNullOrUndefined(value) {
  if (value === undefined || value === null) {
    return '';
  }

  return value;
}

module.exports = applyCustomJoin;
