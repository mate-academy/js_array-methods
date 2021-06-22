'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case i === this.length - 1:
          string += this[i];

          return string;

        case this.length === 0:
        case separator === undefined:
          string += this[i] + ',';
          continue;

        case separator === null:
          string += this[i] + 'null';
          continue;

        case this[i] === null:
        case this[i] === undefined:
          string += '' + separator;
          continue;
      }

      string += this[i] + separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
