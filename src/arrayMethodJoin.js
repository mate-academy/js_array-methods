'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorNew = separator;

    if (separator === undefined) {
      separatorNew = ',';
    }

    for (let key of this) {
      if (key === null || key === undefined) {
        key = '';
      }
      result += key.toString() + separatorNew;
    }

    switch (true) {
      case (separatorNew === null): return result.slice(0, -4);
      case (result.length > this.length):
        return result.slice(0, -separatorNew.toString().length);
      default: return result;
    }
  };
}

module.exports = applyCustomJoin;
