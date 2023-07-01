'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    switch (this[0]) {
      case null:
        break;

      case undefined:
        return result;

      default:
        result += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      switch (separator) {
        case '':
          result += this[i];
          break;

        case null:
          result += 'null';
          result += this[i];
          break;

        case (undefined):
          result += ',';
          result += this[i];
          break;

        default:
          if (this[i] === null || this[i] === undefined) {
            result += separator;
            break;
          }
          result += separator;
          result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
