'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const mySeparator = separator;

    if (mySeparator === undefined) {
      return this.toString();
    }

    return this.map(el => el, mySeparator)
      .toString().replace(/,/g, mySeparator);
  };
}

module.exports = applyCustomJoin;
