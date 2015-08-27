exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    /** assuming built-in array.prototype functions of the same name and function are valid... */
    indexOf: function (arr, item) {
        return arr.indexOf(item);
    },

    /** basic add all to a var in a for loop */
    sum: function (arr) {
        var result = 0;
        for (var i in arr) {
            result += arr[i];
        }
        return result;
    },

    /** copy array into new array (seems like that's what's wanted based on there being a removeWithoutCopy function) */
    remove: function (arr, item) {
        var result = [];
        for (var i in arr) {
            if (arr[i] !== item) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    /** removes each element with splice and decrements i if removed to preserve indexes */
    removeWithoutCopy: function (arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
        return arr;
    },

    /** simple push */
    append: function (arr, item) {
        arr.push(item);
        return arr;
    },

    /** good old splice */
    truncate: function (arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },

    /** shifts all array indexes up one and then sets arr[0] to item */
    prepend: function (arr, item) {
        arr.unshift(item);
        return arr;
    },

    /** splice again... */
    curtail: function (arr) {
        arr.splice(0, 1);
        return arr;
    },

    /** (not specified whether a new array returned is ok, but this passes) */
    concat: function (arr1, arr2) {
        return arr1.concat(arr2);
    },

    /** shifts all items after index up one, and then puts item at index */
    insert: function (arr, item, index) {
        for (var i = arr.length; i > index; i--) {
            arr[i] = arr[i - 1];
        }
        arr[index] = item;
        return arr;
    },

    /** simple for each loop incrementing a var if arr[i] === item */
    count: function (arr, item) {
        var count = 0;
        for (var i in arr) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    /** calls indexOf twice for each iteration so doesn't scale well for large arrays... */
    duplicates: function (arr) {
        var dupes = [];
        var founds = [];
        for (var i in arr) {
            if (founds.indexOf(arr[i]) >= 0 && dupes.indexOf(arr[i]) < 0) {
                dupes.push(arr[i]);
            }
            founds.push(arr[i]);
        }
        return dupes;
    },

    /** uses the arr.map function */
    square: function (arr) {
        return arr.map(function (item) {
            return item * item;
        });
    },

    /** basic for each loop */
    findAllOccurrences: function (arr, target) {
        var result = [];       
        for (var i in arr) {
            if (arr[i] === target) {
                result.push(i);
            }
        }
        return result;
    }
};
