'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let lastIndex = this.length - 1;
    let separatorChecked = (this.length <= 1) ? '' : separator;

    for (let i = 0; i < this.length; i++) {
      let value = this[i];

      if (i === lastIndex) {
        separatorChecked = '';
      }

      if (value === null || value === undefined) {
        value = '';
      }
      string = string + value + separatorChecked;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
