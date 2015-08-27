exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {

    /** use var */
    globals: function () {
        var myObject = {
            name: 'Jory'
        };

        return myObject;
    },

    /** declare getValue() only once */
    functions: function (flag) {
        function getValue() {
            if (flag) {
                return 'a';
            } else {
                return 'b';
            }
        }
        return getValue();
    },

    /** add radix in second parameter, if not already given as arguments[1] */
    parseInt: function (num) {
        return parseInt(num, arguments[1] || 10);
    },

    /** triple equals (should this be called identity? it only compares types, not instances) */
    identity: function (val1, val2) {
        return val1 === val2;
    }
};
