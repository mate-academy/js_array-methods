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

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case undefined:
        case null:
          retVal += (i < this.length - 1) ? sep : '';
          break;
        default:
          retVal = (retVal += this[i]) + ((i < this.length - 1) ? sep : '');
      }
    }

    return retVal;
  };
}

module.exports = applyCustomJoin;
