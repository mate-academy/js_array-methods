'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let separatorCopy = separator;

    for (let element of this) {
      if (typeof separatorCopy === 'undefined') {
        separatorCopy = ',';
      };

      if (typeof element === 'undefined') {
        element = '';
      } else if (`${element}` === 'null') {
        element = '';
      };
      joinedString += `${element}` + `${separatorCopy}`;
    };

    if (separatorCopy === '') {
      return joinedString;
    };

    return joinedString.slice(0, -`${separatorCopy}`.length);
  };
};

module.exports = applyCustomJoin;
