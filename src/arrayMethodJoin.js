'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const s = separator;

    for (let i = 0; i <= this.length - 1; i++) {
      if (i === this.length - 1) {
        result = result + this[i];
      } else {
        if (this[0] !== 0) {
          if (this[i] === null || this[i] === undefined) {
            result = result + ',';
          } else {
            result = result + this[i] + ',';
          };
        };

        if (this[0] === 0) {
          if (s === '-' || s === '' || s === ' ' || s === null) {
            result = result + this[i] + s;
          } else if (s === undefined) {
            result = result + this[i] + ',';
          } else {
            result = result + this[i] + {};
          };
        };
      };
    };

    return result;
  };
};

module.exports = applyCustomJoin;
