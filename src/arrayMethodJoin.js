'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const result = this.toString();

    switch (separator) {
      case '-' :
        return result.replace(/,/g, '-');

      case ' ' :
        return result.replace(/,/g, ' ');

      case '' :
        return result.replace(/,/g, '');

      case null :
        return result.replace(/,/g, 'null');
    }

    if (typeof separator === 'object') {
      return result.replace(/,/g, '[object Object]');
    } else {
      return result;
    }
  };
}

module.exports = applyCustomJoin;
