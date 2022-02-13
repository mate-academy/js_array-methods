'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep = ',';
    let checkValue = 0;
    const inputLength = this.length;

    if (separator === null) {
      sep = 'null';
    }

    if (separator || separator === '') {
      sep = separator.toString();
    }

    for (let i = 0; i < inputLength; i++) {
      checkValue = this[i];

      switch (checkValue) {
        case null:
          result += sep;
          break;

        case undefined:
          if (i !== inputLength - 1) {
            result += sep;
          }
          break;

        default:
          if (i !== inputLength - 1) {
            result += checkValue + sep;
          } else {
            result += checkValue;
          }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
