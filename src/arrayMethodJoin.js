'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const [...elements] = this;

    if (elements.length === 0) {
      return '';
    }

    if (elements.length === 1) {
      return elements[0] + '';
    }

    let string = '';

    for (let i = 0; i < elements.length; i++) {
      if (typeof separator === 'string') {
        if ((elements[i] === undefined) || (elements[i] === null)) {
          elements[i] = '';
        }
      }

      if (i === elements.length - 1) {
        string += elements[i];
      } else {
        string += elements[i] + `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
