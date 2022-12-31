'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let copySeparator = `${separator}`;

    if (typeof separator === 'undefined') {
      copySeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      switch (typeof this[i]) {
        case 'object':
          string += copySeparator;
          break;
        case 'undefined':
          string += copySeparator;
          break;
        default:
          string += this[i] + copySeparator;
      }
    }

    const lastSeparator = string.lastIndexOf(copySeparator);

    return string.slice(0, lastSeparator);
  };
}

module.exports = applyCustomJoin;
