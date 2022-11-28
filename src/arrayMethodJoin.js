'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';
    let divider = separator;

    if (separator === undefined) {
      divider = ',';
    }

    const dividerLength = `${divider}`.length;

    for (let part of this) {
      if (part == null) { // instead of (part === null || part === undefined)
        part = '';
      }
      joined += part + `${divider}`;
    }

    if (dividerLength === 0) {
      return joined;
    }

    return joined.slice(0, -dividerLength);
  };
}

module.exports = applyCustomJoin;
