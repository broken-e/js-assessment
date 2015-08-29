exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(this, arr);
    },

    speak: function (fn, obj) {
        return fn.apply(obj);
    },

    functionFunction: function (str) {
        return function (str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures: function (arr, fn) {
        fnArr = [];
        for (var i in arr) {
            fnArr[i] = (function (n) {
                return function () {
                    return fn(n);
                };
            })(arr[i]);
        }
        return fnArr;
    },

    partial: function (fn, str1, str2) {
        return function (str) {
            return fn(str1, str2, str);
        }
    },

    useArguments: function () {
        var sum = 0;
        for (var i in arguments) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt: function (fn) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        fn.apply(fn, args);
    },

    partialUsingArguments: function (fn) {
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return function () {
            var newArgs = [];
            for (var i in args) {
                newArgs.push(args[i]);
            }
            for (var i = 0; i < arguments.length; i++) {
                newArgs.push(arguments[i]);
            }
            return fn.apply(fn, newArgs);
        }
    },
    /** assume we know fn has 3 arguments beforehand */
    curryIt: function (fn) {
        return function (n1) {
            return function (n2) {
                return function (n3) {
                    return fn(n1, n2, n3);
                };
            };
        };
    }
};
