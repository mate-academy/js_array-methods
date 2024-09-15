'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 0) {
      return string;
    };

    if (this.length === 1) {
      string += this[0];

      return string;
    };

    for (const item of this) {
      if (item === this[this.length - 1] && item !== undefined) {
        string += item;

        break;
      };

      if (item === this[this.length - 1] && item === undefined) {
        string += '';

        break;
      };

      if (item === undefined || item === null) {
        string += String(separator);

        continue;
      };

      string += item + String(separator);
    }

    return string;
  };
}

module.exports = applyCustomJoin;
