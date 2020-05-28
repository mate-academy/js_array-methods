'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedItems = '';
    let separatorValue = separator;

    if (separatorValue === null) {
      separatorValue = 'null';
    }

    for (const item of this) {
      if (this.indexOf(item) === this.length - 1) {
        if (item === null) {
          joinedItems += '';
        } else {
          joinedItems += item;
        }
      } else {
        if (item === null || item === undefined) {
          joinedItems += separatorValue;
        } else {
          joinedItems += item + separatorValue;
        }
      }
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
