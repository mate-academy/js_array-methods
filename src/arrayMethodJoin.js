'use strict';

/**
  * Implement method join
  *
  */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const items = this;

    // тут делаем подготовку перед перебором
    let result = '';

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      switch (separator) {
        case '-':
          result += item;

          if (i < items.length - 1) {
            result += '-';
          }

          break;
        case '':
          result += item;

          break;
        case ' ':
          result += item;

          if (i < items.length - 1) {
            result += ' ';
          }
          break;

        case ',':
          if (item !== undefined && item !== null) {
            result += item;
          }

          if (i < items.length - 1) {
            result += ',';
          }
          break;
        case null:
          if (item !== undefined) {
            result += item;
          }

          if (i < items.length - 1) {
            result += 'null';
          }
          break;
        case undefined:

          if (item !== undefined) {
            result += item;
          }

          if (i < items.length - 1) {
            result += ',';
          }
          break;

        default:
          if (item !== undefined) {
            result += item;
          }

          if (i < items.length - 1) {
            result += '[object Object]';
          }
          break;
      }
      // тут делаем то что надо с текущим элементом
    }

    return result;
    // тут возвращаем значение
  };
}

module.exports = applyCustomJoin;
