'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newSeparator = String(separator);

    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      let checkedElement = this[i];

      if (checkedElement === null || checkedElement === undefined) {
        checkedElement = '';
      }

      if (i === 0) {
        joinString += checkedElement;
      } else {
        joinString += newSeparator + checkedElement;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
