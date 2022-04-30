'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';
    let sep = separator;

    if (sep === null) {
      sep = String(sep);
    }

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === undefined || item === null) {
        item = '';
      }

      if (i < this.length - 1) {
        resultStr += item + sep;
      } else {
        resultStr += item;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
