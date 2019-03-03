module.exports = function getZerosCount(number, base) {

    var a = new Array()

    function f(x) {
        var j = 0;
        var i = 2;
    
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
    }
    f(base)

    var j = 0;
    var n = 1;
    var num = 0;
    var count = 0;
    var repeat = []
    while (number >= a[j]) {
        while (num <= number) {
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
    var min = repeat[0];
    var max = min;
    for (i = 1; i < repeat.length; ++i) {
    if (repeat[i] > max) max = repeat[i];
    if (repeat[i] < min) min = repeat[i];
    }
    console.log(min);
    console.log(a);
    return min;
  }
