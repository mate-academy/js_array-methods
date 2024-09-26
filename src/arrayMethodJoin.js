'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator) {
    separator = getSeparator(separator);
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str = str + (isNullOrEmpty(this[i]) ? '' : this[i]);
      if (this.length > i + 1) {
        str += `${separator}`;
      }
    }

    return str;
  };
  
  function isNullOrEmpty(value) {
    return (value === undefined || value === null || value === "" || value.length === 0);
  }
}

function getSeparator (_separator){
  return (_separator === undefined ? ',' : _separator);
}
module.exports = applyCustomJoin;
