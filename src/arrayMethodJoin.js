'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let sep = separator;
    if (sep === '' || sep === null
    || typeof sep === 'object') {
      sep = String(sep);
    } else {
      sep = sep || ',';
    };

    this.forEach(item => {
      if (item === undefined || item === null) {
        string += sep;
      } else {
        string += item + sep;
      }
    });

    return string.slice(0, string.length - sep.length);
  };
}

module.exports = applyCustomJoin;
