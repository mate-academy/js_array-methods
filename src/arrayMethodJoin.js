'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const length = this.length;

    this.forEach((x, i) => {
      let elem = x;

      if (x === undefined || x === null) {
        elem = '';
      }

      if (i !== length - 1) {
        string += `${elem}` + separator;
      } else {
        string += `${elem}`;
      }
    });

    return string;
  };
}

module.exports = applyCustomJoin;
