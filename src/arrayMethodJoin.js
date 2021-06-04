'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (!this.length) {
      return '';
    }

    function checkType(value) {
      const whiteList = ['number', 'object', 'boolean', 'string'];

      return whiteList.includes(typeof value) && value !== null;
    }

    let concated = checkType(this[0]) ? this[0] : '';

    for (let i = 1; i < this.length; i++) {
      const value = checkType(this[i]) ? this[i] : '';

      switch (separator) {
        case '':
          concated = concated + '' + value;
          break;
        case undefined:
          concated = concated + ',' + value;
          break;
        default:
          concated = concated + `${separator}` + value;
      }
    }

    return concated.toString();
  };
}

module.exports = applyCustomJoin;
