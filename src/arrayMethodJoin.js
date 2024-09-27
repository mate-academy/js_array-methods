'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatorCopy = separator;
    const thisCopy = [...this];
    let stringResult = '';

    if (separatorCopy === null) {
      separatorCopy = 'null';
    };

    for (let i = 0; i < thisCopy.length; i++) {
      if (i === thisCopy.length - 1) {
        separatorCopy = '';
      };

      if (thisCopy[i] === null || thisCopy[i] === undefined) {
        thisCopy[i] = '';
      };

      stringResult += thisCopy[i] + separatorCopy;
    };

    return stringResult;
  };
};

module.exports = applyCustomJoin;
