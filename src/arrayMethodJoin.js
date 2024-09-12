'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;

    if (arrayLength === 0) {
      return '';
    }

    const finalSeparator = separator === null ? 'null' : separator;
    let joinedString = '';

    if (arrayLength === 1) {
      return joinedString + elementToString(this[0]);
    }

    for (let i = 0; i < arrayLength - 1; i++) {
      joinedString += elementToString(this[i]) + finalSeparator;
    }

    joinedString += elementToString(this[arrayLength - 1]);

    function elementToString(element) {
      return element === undefined || element === null ? '' : String(element);
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
