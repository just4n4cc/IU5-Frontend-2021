/**
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * 
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
function curry(f) {
    let arr = [];

    if (arguments.length === f.length) {
        return f(...arguments);
    }

    return function some(...args) {
        arr = arr.concat(args);
        if (arr.length === f.length) {
            return f(...arr);
        } else {
            return some;
        }
    }
}

module.exports = curry;