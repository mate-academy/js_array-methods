'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let sep = separator + '';

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let elem = this[i];

      switch (elem) {
        case null: {
          elem = '';
          break;
        }

        case undefined: {
          elem = '';
          break;
        }
      }

      if (i !== this.length - 1) {
        str += elem + sep;
      } else {
        str += elem;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
