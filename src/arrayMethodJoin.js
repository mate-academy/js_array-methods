'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    switch (separator) {
      case undefined:
        for (let i = 0; i < this.length; i++) {
          result += this[i] + ',';
        }

        result = result.slice(0, -1);

        return result;

      case '':
        for (let i = 0; i < this.length; i++) {
          result += this[i];
        }

        return result;

      case null:
        for (let i = 0; i < this.length; i++) {
          result += this[i] + 'null';
        }

        result = result.slice(0, -4);

        return result;

      default:
        for (let i = 0; i < this.length; i++) {
          if (this[i] === undefined || this[i] === null) {
            result += '' + separator;
            continue;
          }
          result += this[i] + separator;
        }

        result = result.slice(0, 0 - separator.toString().length);

        return result;
    }
  };
}

module.exports = applyCustomJoin;
