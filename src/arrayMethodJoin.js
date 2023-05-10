'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const delimiter = getDelimiter(separator);

    let output = '';

    for (let i = 0; i < this.length; i++) {
      const current = isValidItem(this[i])
        ? this[i]
        : '';
      const part = isLastIndex(this, i)
        ? current + delimiter
        : current;

      output += part;
    }

    return output;
  };
}

function getDelimiter(separator) {
  if (separator) {
    return separator.toString();
  }

  if (separator === '') {
    return separator;
  }

  if (separator === null) {
    return 'null';
  }

  return ',';
}

function isValidItem(item) {
  return item !== undefined && item !== null;
}

function isLastIndex(array, index) {
  return index === array.length - 1;
}

module.exports = applyCustomJoin;
