'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      // for last symbol without separator
      if (i === (this.length - 1) && (this[i] === null || this[i] === undefined)) { // eslint-disable-line
        joinedStr += ``;
        break;
      } else if (i === (this.length - 1)) {
        joinedStr += `${this[i]}`;
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        joinedStr += '' + `${separator}`;
        continue;
      }

      joinedStr += `${this[i]}` + `${separator}`;
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
