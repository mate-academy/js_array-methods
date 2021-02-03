'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let spr = (separator != null)
      ? separator.toString()
      : ',';

    if (separator === null) {
      spr = 'null';
    }

    if (this.length) {
      for (const [index, element] of this.entries()) {
        const valueElement = !(element != null)
          ? ''
          : element.toString();

        str += (index < this.length - 1) ? valueElement + spr : element;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
