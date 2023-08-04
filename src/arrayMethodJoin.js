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
      const arrayElement = this[i] === undefined
        || this[i] === null
        ? ''
        : this[i];

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
