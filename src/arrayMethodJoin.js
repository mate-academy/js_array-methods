'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let mainSeparatorClone = String(separator);

    for (let i = 0; i < this.length; i++) {
      let currentElem = this[i];

      if (currentElem === null || currentElem === undefined) {
        currentElem = '';
      }

      if (i === this.length - 1) {
        mainSeparatorClone = '';
      }
      resultString += currentElem + mainSeparatorClone;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
