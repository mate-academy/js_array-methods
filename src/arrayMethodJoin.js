'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultOfJoin = '';
    let changedSeparator = separator;

    if (separator === null) {
      changedSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultOfJoin += '' + changedSeparator;
      } else {
        if (i < (this.length - 1)) {
          resultOfJoin += this[i] + changedSeparator;
        } else {
          resultOfJoin += this[i];
        }
      }
    }

    return resultOfJoin;
  };
}

module.exports = applyCustomJoin;
