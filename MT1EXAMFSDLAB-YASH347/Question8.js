Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};
Array.prototype.myReduce = function(callback, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callback(result, this[i]);
    }
    return result;
};
let arr = [10, 15, 20, 25, 30];
let ans = arr.myFilter(function(n) {
    return n > 20;
});
let sum = arr.myReduce(function(total, n) {
    return total + n;
}, 0);
console.log("Numbers greater than 20:", ans);
console.log("Sum of array:", sum);
