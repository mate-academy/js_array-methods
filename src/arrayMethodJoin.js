'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      switch (this.length - 1) {
        case i:
          if (this[i] !== undefined) {
            str += this[i];
          }

          continue;
      }

      switch (this[i]) {
        case null:
          str += separator;

          continue;

        case undefined:
          str += separator;

          continue;
      }

      switch (separator) {
        case undefined:
          str += this[i] + ',';

          continue;

        case null:
          str += this[i] + 'null';

          continue;
      }

      str += this[i] + separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
