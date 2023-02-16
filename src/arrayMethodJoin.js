'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (separator === undefined) {
      let result = '';

      for (let j = 0; j < this.length; j++) {
        result += this[j];

        if (j !== this.length - 1) {
          result += ',';
        }
      }

      return result;
    } else if (separator === null) {
      let result = '';

      for (let i = 0; i < this.length; i++) {
        result += this[i];

        if (i !== this.length - 1) {
          result += 'null';
        }
      }

      return result;
    } else if (typeof separator === 'object') {
      let result = '';

      for (let i = 0; i < this.length; i++) {
        result += this[i];

        if (i !== this.length - 1) {
          result += separator;
        }
      }

      return result;
    } else {
      switch (typeof separator) {
        case Number:
          return this;

        case 'string':
          let resultString = '';

          for (let j = 0; j < this.length; j++) {
            if (this[j] !== undefined && this[j] !== null) {
              resultString += this[j];
            }

            if (j !== this.length - 1) {
              resultString += separator;
            }
          }

          return resultString;
      }
    }
  };
}

module.exports = applyCustomJoin;
