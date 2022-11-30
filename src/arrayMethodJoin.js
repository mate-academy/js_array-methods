'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newSeparator = String(separator);
    let joinString;

    if (this[0] === null || this[0] === undefined) {
      joinString = '';
    } else {
      joinString = String(this[0]);
    }

    for (let i = 1; i < this.length; i++) {
      let checkedElement = this[i];

      if (checkedElement === null || checkedElement === undefined) {
        checkedElement = '';
      }
      joinString += newSeparator + checkedElement;
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
