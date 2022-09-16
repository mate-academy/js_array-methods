'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let divider = separator;

    if (divider === undefined) {
      divider = ',';
    }

    if (this.length === 0) {
      return joinedString;
    }

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        joinedString += `${element}`;
      }

      if (i !== this.length - 1) {
        joinedString += `${divider}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
