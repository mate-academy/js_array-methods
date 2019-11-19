'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        switch (this[i]) {
          case null: str += '' + separator; continue;
          case undefined: str += '' + separator; continue;
        }
        str += this[i]; break;
      }
      if (separator === null) {
        str += `${this[i]}null`; continue;
      }
      switch (this[i]) {
        case null: str += '' + separator; continue;
        case undefined: str += '' + separator; continue;
      }
      str += this[i] + separator;
    }
    return str;
  };
}

module.exports = applyCustomJoin;
