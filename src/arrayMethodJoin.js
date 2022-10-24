'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const separatorToString = String(separator);

    for (const item of this) {
      if (item === null || item === undefined) {
        joinedString += '' + separatorToString;
      } else {
        joinedString += item + separatorToString;
      }
    }

    // eslint-disable-next-line max-len
    return joinedString.slice(0, joinedString.length - separatorToString.length);
  };
}

module.exports = applyCustomJoin;
