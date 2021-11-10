'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let devider = separator;
    let string = '';

    switch (devider) {
      case undefined:
        devider = ',';
        break;
      case null:
        devider = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
          string += '';
          break;
        case undefined:
          string += '';
          break;
        default:
          string += this[i];
      }

      if (i !== this.length - 1) {
        string += devider;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
