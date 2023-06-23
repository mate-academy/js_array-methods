'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const result = [...this].toString();

    switch (separator) {
      case null:
        return result.replaceAll(',', 'null');
      case '':
        return result.replaceAll(',', '');
      case undefined:
        return result;
      default:
        return result.replaceAll(',', `${separator}`);
    }
  };
}

module.exports = applyCustomJoin;
