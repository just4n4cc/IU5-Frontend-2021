/**
 * Напишите функцию get1DArray(arr),
 * на вход подается массив бесконечной вложенности массивов arr
 * необходимо вернуть одномерный массив
 * Примеры:
 * [1, 2, 'aa', [1, 2, 3],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [
            [1, 2, [1, 2, [2]]], 3
        ], 4
    ]
]; ---> [1, 2, "aa", 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]
*/

function get1DArray(arr) {
    const res = [];
    for (const el1 of arr) {
        if (Array.isArray(el1)) {
            const temp = get1DArray(el1);
            for (const el2 of temp) {
                res.push(el2);
            }
        } else {
            res.push(el1);
        }
    }
    return res;
}

module.exports = get1DArray;