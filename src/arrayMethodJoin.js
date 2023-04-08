'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';

    switch (this.length) {
      case (!this.length):
        return '';
      case 1:
        res += `${this[0]}`;

        return res;
    };

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case (i === this.length - 1 && this[i] === undefined):
          continue;
        case (this[i] === undefined || this[i] === null):
          res += `${separator}`;
          continue;
        case (i === this.length - 1):
          res += `${this[i]}`;

          return res;
        default:
          res += `${this[i]}${separator}`;
      };
    };

    return res;
  };
}

module.exports = applyCustomJoin;
