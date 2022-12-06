'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newString = '';
    let cloneSeparator = separator;

    if (cloneSeparator === undefined) {
      cloneSeparator = ',';
    }

    if (cloneSeparator === null) {
      cloneSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined) {
          break;
        }
        newString += this[i];
        break;
      }

      if (Number.isNaN(this[i])) {
        newString += 'NaN' + cloneSeparator;
      }

      if (this[i] === undefined || this[i] === null) {
        newString += cloneSeparator;
        continue;
      }

      if (this[i + 1] || this[i + 1] === undefined || this[i + 1] === null
        || isNaN(this[i + 1])) {
        newString += this[i] + cloneSeparator;
      }
    };

    return newString;
  };
}

module.exports = applyCustomJoin;
