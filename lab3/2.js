/**
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */

function getMinMax(str) {
    let res = { min: 0, max: 0 }
    let zeroFound = true;
    let temp = '';
    for (let i = 0; i < str.length; ++i) {
        if (!isNaN(parseInt(str[i]))) {
            temp = temp.concat(str[i]);
            continue;
        } else if (str[i] === '-') {
            if (temp.length === 0 && !isNaN(parseInt(str[i + 1]))) {
                temp = temp.concat(str[i], str[++i]);
                continue;
            }
        } else if (str[i] === '.') {
            if (temp.length !== 0 && !isNaN(parseInt(str[i + 1])) && !temp.includes('.')) {
                temp = temp.concat(str[i], str[++i])
                continue;
            }
        }

        if (temp.length !== 0) {
            if (temp.includes('.')) {
                temp = parseFloat(temp);
            } else {
                temp = parseInt(temp);
            }
            if (zeroFound) {
                zeroFound = false;
                res.min = res.max = temp;
            } else {
                if (res.min > temp) {
                    res.min = temp;
                }
                if (res.max < temp) {
                    res.max = temp;
                }
            }
            temp = '';
        }
    }

    return res;
}

module.exports = getMinMax;