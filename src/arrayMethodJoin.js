'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    };
    let newString = '';
    switch (separator) {
      case undefined:
        for (let i = 0; i < this.length - 1; i++) {
          if (this[i] === null || this[i] === undefined) {
            this[i] = '';
          };
          newString += (this[i] + ',');
        };
        break;

      case null:
        for (let i = 0; i < this.length - 1; i++) {
          if (this[i] === null || this[i] === undefined) {
            this[i] = '';
          };
          newString += (this[i] + 'null');
        };
        break;

      default:
        for (let i = 0; i < this.length - 1; i++) {
          if (this[i] === null || this[i] === undefined) {
            this[i] = '';
          };
          newString += (this[i] + separator);
        };
        break;
    };

    return newString + this[this.length - 1];
  };
};

module.exports = applyCustomJoin;
