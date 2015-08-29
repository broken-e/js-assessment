exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit: function (num, bit) {
        return (num >>> (bit - 1)) & 1;
    },

    base10: function (str) {
        return parseInt(str, 2);
    },

    convertToBinary: function (num) {
        var str = '000000000000' + num.toString(2);
        return str.substr(str.length - 8);
    },

    multiply: function (a, b) {
        return +(a * b).toFixed(8);
    }
};
