'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let mergedStr = '';
    let separatorItem = separator;

    if (separatorItem === null) {
      separatorItem = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      mergedStr += this[i];

      if (i !== this.length - 1) {
        mergedStr += separatorItem;
      }
    }

    return mergedStr;
  };
}

module.exports = applyCustomJoin;
