'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatenatedString = '';
    const nullSeparator = 'null';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        concatenatedString += separator;
        continue;
      }

      if (this.length - i === 1) {
        concatenatedString += this[i];
        continue;
      }

      if (separator === null) {
        concatenatedString += this[i] + nullSeparator;
        continue;
      }
      concatenatedString += this[i] + separator;
    }

    return concatenatedString;
  };
}

module.exports = applyCustomJoin;
