'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromArray = '';
    const separatorForJoin = (separator === null) ? 'null' : separator;

    for (let i = 0; i < this.length; i++) {
      let currentElement = this[i];

      if (currentElement === null
        || currentElement === undefined
        || currentElement === '') {
        currentElement = '';
      }

      (i !== this.length - 1)
        ? stringFromArray += currentElement + separatorForJoin
        : stringFromArray += currentElement;
    }

    return stringFromArray;
  };
}

module.exports = applyCustomJoin;
