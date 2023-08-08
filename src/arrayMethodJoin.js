'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnString = '';
    const valueSeparatore = separator;

    for (let i = 0; i < this.length; i++) {
      const part = this[i];

      if (i > 0) {
        returnString += valueSeparatore;
      }

      if (part !== undefined && part !== null) {
        returnString += part;
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
