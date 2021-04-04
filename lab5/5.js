/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    const res = [];

    for (const [index, fromEl] of arr.entries()) { // finding head
        let head = true;
        for (const toEl of arr) {
            if (fromEl.from === toEl.to) {
                head = false;
                break;
            }
        }
        if (head) {
            arr.splice(index, 1);
            res.push(fromEl);
            break;
        }
    }

    while (arr.length !== 0) { // making route
        for (const [index, fromEl] of arr.entries()) {
            if (res[res.length - 1].to === fromEl.from) {
                arr.splice(index, 1);
                res.push(fromEl)
                break;
            }
        }
    }

    return res;
}

module.exports = makeRoute;