'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let UsedSeparator = separator;

    if (separator === undefined) {
      UsedSeparator = ',';
    }

    for (let key = 0; key < this.length; key++) {
      if (key === this.length - 1) {
        // result = result + this[key];

        if (this[key] === undefined || this[key] === null) {} else {
          result = result + this[key];
        }
        break;
      }

      if (this[key] === undefined || this[key] === null) {
        result = result + `${UsedSeparator}`;
      } else {
        result = result + this[key] + `${UsedSeparator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
