'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let divider = separator;
    let joinedString = '';

    if (separator === null) {
      divider = 'null';
    }

    if (this[0] !== null) {
      joinedString = '' + this[0];
    }

    for (let i = 1; i < this.length; i++) {
      joinedString += '' + divider;

      switch (this[i]) {
        case undefined:

          break;

        case NaN:
          joinedString += 'NaN';
          break;

        case null:
          break;

        default:
          joinedString += '' + this[i];
          break;
      }
    }

    return '' + joinedString;
  };
}

module.exports = applyCustomJoin;
