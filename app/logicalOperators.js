exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
    /** is this really a test? */
    or: function (a, b) {
        return a || b;
    },

    and: function (a, b) {
        return a && b;
    }
};
