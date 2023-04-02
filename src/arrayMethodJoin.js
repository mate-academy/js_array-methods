'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let safeSeparator = '';
    let joinedString = '';

    function replaceNullAndUndefinedWithEmptyString(elementToCheck) {
      let element = elementToCheck;

      if (element === undefined || element === null) {
        element = '';
      }

      return element;
    }

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined) {
      safeSeparator = ',';
    }

    if (separator === null) {
      safeSeparator = 'null';
    }

    if (separator) {
      safeSeparator = separator;
    }

    if (this.length === 0) {
      return [];
    }

    if (this.length === 1) {
      return '' + this[0];
    }

    if (!this[1] && this[0]) {
      return this;
    }

    for (let i = 0; i < this.length - 1; i++) {
      joinedString += ''
        + replaceNullAndUndefinedWithEmptyString(this[i])
        + '' + (safeSeparator || '');
    }

    joinedString += ''
      + replaceNullAndUndefinedWithEmptyString(this[this.length - 1]);

    return joinedString;
  };
}

module.exports = applyCustomJoin;
