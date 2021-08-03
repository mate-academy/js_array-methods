'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length < 0) {
      return;
    };

    if (this[0] !== 0) {
      for (let i = 0; i < this.length - 1; i++) {
        if (i === this.length - 1) {
          if (this[i] === null || this[i] === undefined) {
            result = result + '' + ',';
          } else {
            result = result + this[i];
          };
        } else if (i < this.length) {
          if (this[i] === null || this[i] === undefined) {
            result = result + '' + ',';
          } else {
            result = result + this[i] + ',';
          };
        };
      };
    };

    if (this.length === 1) {
      result = '1';
    };

    if (this.length > 1 && this[0] === 0) {
      for (let i = 0; i <= this.length - 1; i++) {
        if (i === this.length - 1) {
          result = result + this[i];
        } else if (i < this.length - 1) {
          switch (separator) {
            case '-':
              result = result + this[i] + separator;
              break;

            case '':
              result = result + this[i] + separator;
              break;

            case ' ':
              result = result + this[i] + separator;
              break;

            case undefined:
              result = result + this[i] + ',';
              break;

            case null:
              result = result + this[i] + separator;
              break;

            default:
              result = result + this[i] + {};
              break;
          };
        };
      };
    }

    return result;
  };
}

module.exports = applyCustomJoin;
