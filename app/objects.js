exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        return fn.apply(obj);
    },

    alterObjects: function (constructor, greeting) {
        constructor.prototype.greeting = greeting;
    },

    iterate: function (obj) {
        var arr = [];
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                arr.push(i + ': ' + obj[i]);
            }
        }
        return arr;
    }
};
