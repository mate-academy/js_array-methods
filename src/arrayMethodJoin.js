'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let stringConnector = '';

    if (!separator && separator !== null
      && separator !== '') {
      stringConnector += ',';
    }

    if (separator || separator === '') {
      stringConnector += separator;
    }

    if (separator === null) {
      stringConnector += 'null';
    }

    let stringResult = '';
    let elementThis;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        elementThis = '';
      } else {
        elementThis = this[i];
      }

      if (i === this.length - 1) {
        stringResult += this[i];
      } else {
        stringResult += elementThis + stringConnector;
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
