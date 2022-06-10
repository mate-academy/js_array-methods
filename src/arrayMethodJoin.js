'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const copyArray = this;
    let parseSeparator = separator;

    for (let q = 0; q < copyArray.length; q++) {
      if (copyArray[q] === undefined || copyArray[q] === null) {
        copyArray[q] = '';
      }
    }

    if (parseSeparator === null) {
      parseSeparator = 'null';
    }

    let joinArray = '' + copyArray[0];

    for (let i = 1; i < copyArray.length; i++) {
      joinArray += parseSeparator + copyArray[i];
    }

    return joinArray;
  };
}

module.exports = applyCustomJoin;
