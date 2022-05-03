'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const separatorToString = '' + separator;
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      let char = this[i];

      if (this[i] === undefined) {
        char = '';
      } else if (this[i] === null) {
        char = '';
      } else if (isNaN(this[i])) {
        char = 'NaN';
      }

      if (this[i] === 'null') {
        char = 'null';
      }

      result += char + separatorToString;
    }

    if (!!this[this.length - 1]) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
