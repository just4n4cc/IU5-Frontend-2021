/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    let res = '';
    for (let i = 0; i < str.length; ++i) {
        const c = str[i];
        res = res.concat(c);
        let num = 1;
        for (++i; i < str.length && c === str[i]; ++i) {
            ++num;
        }
        --i;
        if (num > 1) {
            res = res.concat(num.toString());
        }
    }
    return res;
}

module.exports = rle;