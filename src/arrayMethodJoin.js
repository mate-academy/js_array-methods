'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (separator === null) {
      for (const elem of this) {
        result += elem + 'null';
      };

      return result.slice(0, -4);
    }

    if (separator === '') {
      for (const elem of this) {
        result += elem;
      };

      return result;
    }

    if (separator === ' ') {
      for (const elem of this) {
        result += elem + ' ';
      };

      return result.slice(0, -1);
    };

    if (separator === undefined || !separator) {
      for (const elem of this) {
        result += elem + ',';
      };

      return result.slice(0, -1);
    };

    if (typeof separator === 'object') {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          result += i;
          break;
        }

        result += i + separator;
      }

      return result;
    } else {
      for (const elem of this) {
        if (elem === null || elem === undefined) {
          result += ',';
          continue;
        }

        result += elem + separator;
      }

      return result.slice(0, -1);
    }
  };
}

module.exports = applyCustomJoin;
