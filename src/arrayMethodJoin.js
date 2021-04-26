'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let count = 0;

    this.forEach(el => {
      if (this.indexOf(el) === 0 && count === 0) {
        if (el === null || el === undefined) {
          string = string.concat('');
          count++;
        } else {
          string = string.concat(`${el}`);
          count++;
        }
      } else {
        if (el === null || el === undefined) {
          string = string.concat(`${separator}`);
        } else {
          string = string.concat(`${separator}${el}`);
        }
      }
    });

    return string;
  };
}

module.exports = applyCustomJoin;
