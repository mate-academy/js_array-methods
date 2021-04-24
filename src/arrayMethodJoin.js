'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let lastIndex;

    for (let i = 0; i < this.length; i++) {
      while (this.length - 1 > i) {
        if (this[i] === null) {
          result += separator;
          break;
        }

        if (this[i] === undefined) {
          result += separator;
          break;
        }
        result += this[i] + separator;
        break;
      }

      lastIndex = this[i];
    }

    result += lastIndex;

    if (this.length === 0) {
      return '';
    }

    if (separator === '') {
      result = '';

      for (let i = 0; i < this.length; i++) {
        if (this[i] === null) {
          result += separator;
          continue;
        }

        if (this[i] === undefined) {
          result += separator;
          continue;
        }
        result += this[i];
      }
    }

    if (typeof separator === 'object') {
      result = '';

      for (let i = 0; i < this.length; i++) {
        while (this.length - 1 > i) {
          if (this[i] === null) {
            result += separator;
          }

          if (this[i] === undefined) {
            result += separator;
          }
          result += this[i] + separator;
          break;
        }

        lastIndex = this[i];
      }

      result += lastIndex;
    }

    if (separator === null) {
      result = '';

      for (let i = 0; i < this.length; i++) {
        while (this.length - 1 > i) {
          if (this[i] === null) {
            result += 'null';
          }

          if (this[i] === undefined) {
            result += 'null';
          }
          result += this[i] + 'null';
          break;
        }

        lastIndex = this[i];
      }

      result += lastIndex;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
