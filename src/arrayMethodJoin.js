'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnString = '';
    let valueSeparatore = separator;

    if (separator === null) {
      valueSeparatore = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      const part = this[i];
      const arrayElement = part === undefined
        || part === null
        ? ''
        : part;

      if (i < this.length - 1) {
        returnString += arrayElement + valueSeparatore;
      } else {
        returnString += arrayElement;
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
