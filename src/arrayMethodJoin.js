'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      let elementItem = this[i];

      if (elementItem === null || elementItem === undefined) {
        elementItem = '';
      }

      if (i === this.length - 1) {
        resultingString = resultingString + elementItem;
      } else {
        resultingString = resultingString + elementItem + separator;
      }
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
