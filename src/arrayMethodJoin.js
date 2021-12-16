'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let innerSeparator = separator;

    if (separator === undefined) {
      innerSeparator = ',';
    }

    for (const key of this) {
      if (key === undefined || key === null) {
        if (this.indexOf(key) !== (this.length) - 1) {
          str += innerSeparator;
        }
        continue;
      } else {
        str += key;

        if (this.indexOf(key) !== (this.length) - 1) {
          str += innerSeparator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
