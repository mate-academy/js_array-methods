'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case this[this.length - 1]:
          switch (this[this.length - 1]) {
            case null:
            case undefined:
              string += '';
              break;

            default:
              string += this[this.length - 1];
              break;
          };
          break;

        case null:
        case undefined:
          string += '' + `${separator}`;
          break;

        default:
          string += this[i] + `${separator}`;
          break;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
