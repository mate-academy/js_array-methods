'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let copyOfSeparator = separator;
    let joinedStr = '';

    if (copyOfSeparator === undefined) {
      copyOfSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1
          && (this[i] === null || this[i] === undefined)) {
        joinedStr += '';
        continue;
      }

      if (i === this.length - 1) {
        joinedStr += this[i].toString();
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        joinedStr += '' + copyOfSeparator;
      } else {
        joinedStr += this[i].toString() + copyOfSeparator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
