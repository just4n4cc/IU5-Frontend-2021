/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    const open = ['[', '(', '<'];
    const close = [']', ')', '>'];
    const sArr = str.split('');
    const arr = [];

    for (const c of sArr) {
        const index = open.indexOf(c);
        if (index !== -1) {
            arr.push(index);
        } else {
            if (c !== close[arr.pop()]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = checkBrackets;