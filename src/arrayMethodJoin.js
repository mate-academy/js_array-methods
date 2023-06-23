'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const sep = separator !== undefined ? separator : ',';

    return this.reduce((acc, curr, index) => {
      let currElement = curr;

      if (currElement === null || currElement === undefined) {
        currElement = '';
      }

      if (index === this.length - 1) {
        return acc + String(currElement);
      } else {
        return acc + String(currElement) + String(sep);
      }
    }, '');
  };
}

module.exports = applyCustomJoin;
