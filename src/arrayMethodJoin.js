'use strict';

/**
 * Implement method join
 */

function separatorHandler(separator) {
  let separate = separator;

  if (separator === null) {
    separate = 'null';
  }

  return separate;
}

function elementHandler(arrElement) {
  let element = arrElement;

  if (arrElement === null || arrElement === undefined) {
    element = '';
  }

  return element;
}

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const separate = separatorHandler(separator);

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        const element = elementHandler(this[i]);

        result += element + separate;
      } else {
        const element = elementHandler(this[i]);

        result += element;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
