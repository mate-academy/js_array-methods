'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let newSeparator = separator;

    if (newSeparator === null) {
      newSeparator = 'null';
    } else {
      newSeparator = separator.toString();
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
      }

      if (i === this.length - 1) {
        resultString += item.toString();
      } else {
        resultString += item.toString() + newSeparator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
