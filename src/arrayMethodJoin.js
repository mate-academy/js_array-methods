'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = String(separator);

    if ((!sep && sep !== '') || sep === 'undefined') {
      sep = ',';
    }

    let finalStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length - i === 1) {
        finalStr += (this[i]);
      } else {
        finalStr += (this[i] + sep);
      }
    }

    if (sep === 'null') {
      return finalStr;
    }

    return finalStr.replace(/null|undefined/g, '');
  };
}

module.exports = applyCustomJoin;
