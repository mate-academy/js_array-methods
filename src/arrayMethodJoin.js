'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const strSeparator = String(separator);
    let result = '';

    for (const el of this) {
      let strEl = el;

      if (el === undefined || el === null) {
        strEl = '';
      }

      result += strEl + strSeparator;
    }

    return result.slice(0, result.length - strSeparator.length);
  };
}

module.exports = applyCustomJoin;
