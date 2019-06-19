'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = ``;

    if (separator === undefined) {
      resultString = `${this}`;
    } else {
      resultString = `${this}`.replace(/,/g, separator);
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
