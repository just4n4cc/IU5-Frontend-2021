/**
 * Напишите функцию customBind(f, context),
 * входные данные - функция и контекст
 * выходные данные - функция с прибинженым контекстом
 * Примеры:
 * customBind(function() {this.a + this.b}, {a: 1, b2})() -> 3
 */

function customBind(f, context) {
    for (const key of Object.keys(context)) {
        this[key] = context[key];
    }
    return f;
}

module.exports = customBind;