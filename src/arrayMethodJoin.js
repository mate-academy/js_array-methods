'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const len = this.length;
    let joinString = '';

    if (len !== 0) {
      for (let i = 0; i < len; i++) {
        let element = this[i];

        if (element === undefined || element === null) {
          element = '';
        }

        if (i !== len - 1) {
          joinString += `${element}${separator}`;
        } else {
          joinString += `${element}`;
        }
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
