/**
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; -> [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
    const res = [];
    for (const el of arr) {
        let index = -1;
        for (angrm of res) {
            index = res.indexOf(angrm);
            for (const c of el.toLowerCase()) {
                if (!angrm.toString().toLowerCase().includes(c)) {
                    index = -1;
                    break;
                }
            }

            if (index !== -1) {
                break;
            }
        }

        if (index === -1) {
            res[res.length] = [];
            res[res.length - 1].push(el);
        } else {
            res[index].push(el);
        }
    }
    return res;
}

module.exports = getAnagramms;