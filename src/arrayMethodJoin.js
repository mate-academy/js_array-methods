'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';
    let sepInsert = separator;

    if (separator === undefined) {
      sepInsert = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === undefined || element == null) {
        element = '';
      }

      if (i !== this.length - 1) {
        resultString += `${element}${sepInsert}`;
      } else {
        resultString += `${element}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
