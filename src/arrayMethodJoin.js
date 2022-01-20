'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let correctedSeparator = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      correctedSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if ([null, undefined].includes(this[i])) {
        this[i] = '';
      }
    }

    let joinedString = `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      if ([null, undefined].includes(this[i])) {
        this[i] = '';
      }
      joinedString += correctedSeparator + this[i];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
