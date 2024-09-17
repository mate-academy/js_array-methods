'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    if (this[0] !== null && this.length > 0) {
      joinedString = '' + this[0];
    }

    for (let i = 1; i < this.length; i++) {
      joinedString += '' + separator;

      switch (this[i]) {
        case undefined:

          break;

        case NaN:
          joinedString += 'NaN';
          break;

        case false:
          joinedString += 'false';
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
