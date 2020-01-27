'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outStr = '';
    const stringSeparator = String(separator);

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        outStr += stringSeparator;
      } else if (i !== this.length - 1) {
        outStr += this[i] + stringSeparator;
      } else {
        outStr += this[i];
      }
    }

    return outStr;
  };
}

module.exports = applyCustomJoin;
