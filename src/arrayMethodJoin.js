'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedString = '';
    let defaultSeparator = ',';
    const length = this.length;

    if (typeof (separator) !== 'undefined') {
      defaultSeparator = '' + separator;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined || this[i] === null) && i !== length - 1) {
        joinedString += defaultSeparator;
        continue;
      } else if (this[i] === undefined && i === length - 1) {
        continue;
      }

      if (this[i] !== this[this.length - 1]) {
        joinedString += this[i] + defaultSeparator;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
};

module.exports = applyCustomJoin;
