'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorSign = separator;

    if (separator === undefined) {
      separatorSign = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === undefined || item === null) {
        item = '';
      }
      result += item;

      if (i !== this.length - 1) {
        result += separatorSign;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
