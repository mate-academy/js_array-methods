'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let sep = (separator === undefined) ? ',' : separator;
    let retVal = '';

    sep = (separator === '') ? '' : sep;

    for (let i = 0; i < this.length - 1; i++) {
      switch (this[i]) {
        case undefined:
        case null:
          retVal += sep;
          break;
        default:
          retVal = (retVal += this[i]) + sep;
      }
    }

    switch (this[this.length - 1]) {
      case undefined:
      case null:
        break;
      default:
        retVal += this[this.length - 1];
    }

    return retVal;
  };
}

module.exports = applyCustomJoin;
