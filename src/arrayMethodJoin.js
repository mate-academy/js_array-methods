'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sign = separator;
    const length = this.length;

    if (separator === null) {
      sign = 'null';
    }

    for (let item of this) {
      if (item === undefined && this.indexOf(item) === length - 1) {
        return result;
      }

      if (item === null || item === undefined) {
        // eslint-disable-next-line no-new-wrappers
        item = new String();
      }

      if (this.indexOf(item) < length - 1) {
        result += item + sign;
      } else {
        result += item;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
