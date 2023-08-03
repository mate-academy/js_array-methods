'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringAfterJoin = '';
    const copyArray = this.slice();
    let finallySeparator = separator;

    if (this.length === 0) {
      return '';
    }

    if (finallySeparator === null) {
      finallySeparator = 'null';
    }

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === undefined || copyArray[i] === null) {
        copyArray[i] = '';
      }

      if (i === copyArray.length - 1) {
        stringAfterJoin += copyArray[i];
      } else {
        stringAfterJoin += copyArray[i] + finallySeparator;
      }
    }

    return stringAfterJoin;
  };
}

module.exports = applyCustomJoin;
