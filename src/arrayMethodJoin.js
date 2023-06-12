'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let modSeparator;

    switch (separator) {
      case undefined:
        modSeparator = ',';
        break;
      case null:
        modSeparator = 'null';
        break;
      default:
        modSeparator = separator;
    }

    if (this.length === 0) {
      return result;
    }

    if (this.length === 1) {
      result += this[0];

      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        switch (this[i]) {
          case undefined:
            result += modSeparator;
            break;
          case null:
            result += modSeparator;
            break;
          default:
            result += this[i] + modSeparator;
            break;
        }
      } else {
        switch (this[i]) {
          case undefined:
            break;
          default:
            result += this[i];
            break;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
