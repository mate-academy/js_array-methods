'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // eslint-disable-next-line max-len
    const getElement = element => (element === null || element === undefined) ? '' : element;
    let string = `${getElement(this[0])}`;

    for (let i = 1; i < this.length; i++) {
      string += `${separator}${getElement(this[i])}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
