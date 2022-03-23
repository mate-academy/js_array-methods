'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str_ = '';

    for (const x of this) {
      if (x === null || x === undefined) {
        str_ += ',';
        continue;
      }
      str_ += x;

      if (separator === undefined) {
        str_ += ',';
      } else if (separator !== undefined) {
        str_ += separator;
      }
    }

    if (separator === null) {
      str_ = str_.slice(0, -4);
    } else if (typeof separator === 'object') {
      str_ = str_.slice(0, -15);
    } else if (separator !== '') {
      str_ = str_.slice(0, -1);
    }

    return str_;
  };
}

module.exports = applyCustomJoin;
