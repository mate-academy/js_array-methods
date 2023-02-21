'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let result = '';

    switch (separator) {
      case undefined:
        for (let i = 0; i < this.length; i++) {
          string += this[i] + ',';
        }

        for (let i = 0; i < string.length - 1; i++) {
          result += string[i];
        }

        return result;

      case '':
        for (let i = 0; i < this.length; i++) {
          string += this[i];
        }

        return string;

      case null:
        for (let i = 0; i < this.length; i++) {
          string += this[i] + 'null';
        }

        for (let i = 0; i < string.length - 4; i++) {
          result += string[i];
        }

        return result;

      default:
        for (let i = 0; i < this.length; i++) {
          if (this[i] === undefined || this[i] === null) {
            string += '' + separator;
            continue;
          }
          string += this[i] + separator;
        }

        for (let i = 0; i < string.length - separator.toString().length; i++) {
          result += string[i];
        }

        return result;
    }
  };
}

module.exports = applyCustomJoin;
