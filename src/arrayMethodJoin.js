'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    const validSeparator = separatorValidation(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        string += '' + validSeparator;
      } else {
        string += this[i] + validSeparator;
      }
    }

    return string.substring(0, (string.length - validSeparator.length));
  };

  const separatorValidation = separator => {
    if (typeof separator === 'undefined') {
      return ',';
    } else {
      return String(separator);
    }
  };
}

module.exports = applyCustomJoin;
