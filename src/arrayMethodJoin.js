'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let jonedString = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (Object.is(element, undefined) || Object.is(element, null)) {
        element = '';
      }

      if (i === 0) {
        jonedString = `${element}`;
        continue;
      }

      jonedString = `${jonedString}${separator}${element}`;
    }

    return jonedString;
  };
}

module.exports = applyCustomJoin;
