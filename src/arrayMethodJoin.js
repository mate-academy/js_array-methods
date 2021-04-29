'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    this.forEach((element, idx) => {
      if (idx === 0) {
        if (element === null || element === undefined) {
          string = string.concat('');
        } else {
          string = string.concat(element);
        }
      } else {
        if (element === null || element === undefined) {
          string = string.concat(separator);
        } else {
          string = string.concat(separator, element);
        }
      }
    });

    return string;
  };
}

module.exports = applyCustomJoin;
