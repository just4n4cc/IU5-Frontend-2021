/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */

function capitalize(str) {
    let arr = str.split(' ');
    str = '';

    str = str.concat(arr[0][0].toUpperCase(), arr[0].substr(1, arr[0].length - 1));

    for (let i = 1; i < arr.length; ++i) {
        str = str.concat(' ', arr[i][0].toUpperCase(), arr[i].substr(1, arr[i].length - 1));
    }

    return str;
}

module.exports = capitalize;