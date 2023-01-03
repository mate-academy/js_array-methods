'use strict';

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
      if (this[element] === null || this[element] === undefined) {
        this[element] = '';
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
