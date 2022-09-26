'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const checkNull = function(element) {
      if ((element === null) || (element === undefined)) {
        return '';
      }

      return element;
    };
    let adjustedSeparator = separator;
    let concatenatedString = '';
    const lastArrElement = checkNull(this[this.length - 1]);
    
    switch (separator) {
      case undefined:
        adjustedSeparator = ',';
        break;

      case null:
        adjustedSeparator = 'null';
        break;
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      const joinPart = checkNull(this[i]);

      concatenatedString += joinPart + adjustedSeparator;
    }

    concatenatedString += lastArrElement;

    return concatenatedString;
  };
}

module.exports = applyCustomJoin;
