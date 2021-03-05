'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedStr = '';
    let sepCopy = separator;

    for (let element of this) {
      if (typeof sepCopy === 'undefined') {
        sepCopy = ',';
      };

      if (typeof element === 'undefined') {
        element = '';
      } else if (`${element}` === 'null') {
        element = '';
      };
      joinedStr += `${element}` + `${sepCopy}`;
    };

    if (sepCopy === '') {
      return joinedStr;
    };

    return joinedStr.slice(0, -`${sepCopy}`.length);
  };
};

module.exports = applyCustomJoin;
