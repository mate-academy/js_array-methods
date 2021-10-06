'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      const x = this[i];
      let elem = x;

      if (x === undefined || x === null) {
        elem = '';
      }

      if (i !== length - 1) {
        string += `${elem}` + separator;
      } else {
        string += `${elem}`;
      }
    };

    return string;
  };
}

module.exports = applyCustomJoin;
