module.exports = function getZerosCount(number, base) {

    var a = new Array()
    function f(x) {
        var j = 0;
        var i = 2;
        if (x > 2) {
            while (i < x) {
                if (x % i == 0) {
                    a[j] = i;
                    j++;
                    x = x / i;
                } else {
                    i++;
                }
                a[j] = i;
            }
        } else {    
            a[0] = 2;
        }
    }
    f(base)
    var repeatElementsInA = [];
    function division(x) {
        var i = 0;
        while (i < x.length) {
            var temp = x.filter(function(number) {
                return number == x[i]
            });
            i++;
            repeatElementsInA.push(temp.length);
        }
    }
    division(a);
    
    var j = 0;
    var n = 1;
    var num = 0;
    var count = 0;
    var repeat = []
    while (number > a[j]) {
        while (num < number) {
            num = Math.pow(a[j], n)
            count += Math.floor(number / num);
            n++;
        }
        n = 1;
        j++;
        num = Math.pow(a[j], n);
        repeat.push(count)
        count = 0;
    }
    var min = repeat[0] / repeatElementsInA[0];
    var max = min;
    for (i = 1; i < repeat.length; ++i) {
        if (Math.floor(repeat[i] / repeatElementsInA[i]) > max)
            max = Math.floor(repeat[i] / repeatElementsInA[i]);
        if (Math.floor(repeat[i] / repeatElementsInA[i]) < min)
            min = Math.floor(repeat[i] / repeatElementsInA[i]);
    }
    console.log(a);
    console.log(repeatElementsInA)
    console.log(min);
    return min;
    }