'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep;

    switch (separator) {
      case undefined:
        sep = ',';
        break;
      case null:
        sep = 'null';
        break;
      default:
        sep = separator.toString();
    };

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null
        || this[i] === undefined) {
        this[i] = '';
      };

      if (i === this.length - 1) {
        sep = '';
      };
      str += this[i] + sep;
    };

    return str;
  };
}

module.exports = applyCustomJoin;
