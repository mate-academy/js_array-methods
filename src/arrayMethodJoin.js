'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultingString = '';
    const splitter = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i += 1) {
      const item = this[i] === null || this[i] === undefined ? '' : this[i];

      if (i === this.length - 1) {
        resultingString += `${item}`;
        continue;
      }

      resultingString += `${item}${splitter}`;
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
