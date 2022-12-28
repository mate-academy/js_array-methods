'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';
    let checkedSeparator;

    if (separator === null) {
      checkedSeparator = 'null';
    } else {
      checkedSeparator = separator;
    }

    for (let element = 0; element < this.length; element++) {
      if (this[element] === undefined) {
        if (element !== this.length - 1) {
          joinedArray += checkedSeparator;
        }
        continue;
      }

      if (this[element] === null) {
        joinedArray += '' + checkedSeparator;
        continue;
      }

      if (element === this.length - 1) {
        joinedArray += this[element];
        continue;
      }
      joinedArray += this[element] + checkedSeparator;
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
