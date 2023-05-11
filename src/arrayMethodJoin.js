'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let result;

    if (sep === null) {
      sep = 'null';
    }

    switch (true) {
      case (this[0] === null || this[0] === undefined || !this):
        result = '';
        break;
      case (typeof (this[0]) === 'number'):
        result = this[0].toString();
        break;
      default:
        result = this[0];
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i + 1] === null || this[i + 1] === undefined) {
        result += sep + '';
        continue;
      }
      result += sep + this[i + 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
