'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let mutableSeparator = separator;

    if (separator === undefined || separator === false) {
      mutableSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += mutableSeparator;
      } else if (i !== this.length - 1) {
        result += `${this[i]}${mutableSeparator}`;
      } else {
        result += this[i];
      }
    }
    return result;
  };
}

applyCustomJoin();
const source = [0, 1, 2, 3];
const testSeparator = -5;
console.log(source.join2(-5));
console.log(source.join(-5));

console.log(source.join2(testSeparator));
console.log(source.join(testSeparator));

console.log(source.join2('-asd-'));
console.log(source.join('-asd-'));

console.log(source.join2(undefined));
console.log(source.join(undefined));

console.log(source.join2({}));
console.log(source.join({}));

console.log(source.join2([' ', 10, ' ']));
console.log(source.join([' ', 10, ' ']));

console.log(source.join2('-5'));
console.log(source.join('-5'));

console.log(source.join2(Boolean));
console.log(source.join(Boolean));

module.exports = applyCustomJoin;
