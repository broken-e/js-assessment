exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
    /** gotta read the test code to know it wants console.log */
    count: function (start, end) {
        var isCanceled = false;
        function doit() {
            if (!isCanceled && start <= end) {
                console.log(start++); 
                setTimeout(doit, 100);
            }
        }
        doit();
        return {
            cancel: function cancel() {
                isCanceled = true;
            }
        }
    }
};
