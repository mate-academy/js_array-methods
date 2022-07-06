'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    if (typeof separator === 'number' && !isNaN(separator)) {
      return this;
    }

    const stringConsctuctor = (separatorSymbol) => {
      let result = '';

      for (let i = 0; i < this.length; i++) {
        const currentElement = this[i];
        const isLastElement = i === this.length - 1;
        const isElementValid = currentElement === undefined
          || currentElement === null
          || currentElement === '';

        if (isLastElement) {
          result += `${currentElement}`;
        } else if (isElementValid) {
          result += `INVALID_PROPERTY${separatorSymbol}`;
        } else {
          result += `${currentElement}${separatorSymbol}`;
        }
      }

      const splittedResult = result.split(separatorSymbol);

      for (let i = 0; i < splittedResult.length; i++) {
        const current = splittedResult[i];

        if (current === 'INVALID_PROPERTY') {
          result = result.replace('INVALID_PROPERTY', '');
        }
      }

      if (result.includes('undefined')) {
        result = result.replace('undefined', '');
      }

      return result;
    };

    if (separator === undefined) {
      return stringConsctuctor(',');
    }

    if (separator === null) {
      return stringConsctuctor('null');
    }

    return stringConsctuctor(separator);
  };
}

module.exports = applyCustomJoin;
