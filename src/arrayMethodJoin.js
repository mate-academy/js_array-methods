'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separator_ = separator;

    if (separator !== null) {
      if (typeof separator === 'object' && separator.constructor === Object) {
        separator_ = '[object Object]';
      }
    }

    if (separator === null) {
      separator_ = 'null';
    }

    for (const el of this) {
      if (el !== null && el !== undefined) {
        result += el + separator_;
      } else {
        result += separator_;
      }
    }

    result = result.slice(0, result.length - separator_.length);

    return result;
  };
};

module.exports = applyCustomJoin;
