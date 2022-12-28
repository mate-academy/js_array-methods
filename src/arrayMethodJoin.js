'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArr = '';

    const sep = `${separator}`;

    for (const item of this) {
      if (item === null || item === undefined) {
        strFromArr += `${sep}`;
      } else {
        strFromArr += item + `${sep}`;
      }
    }

    return strFromArr.slice(0, strFromArr.length - sep.length);
  };
}

module.exports = applyCustomJoin;
