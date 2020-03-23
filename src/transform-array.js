module.exports = function transform(so) {
    // function transform(arr) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    var so = [];
    if (!Array.isArray(arr)) throw new Error();
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === "--discard-next") {
          if (i < arr.length - 1) i++;
        } else if (arr[i] === "--discard-prev") {
          if (so.length > 0) so.pop();
        } else if (arr[i] === "--double-next") {
          if (i < arr.length - 1) so.push(arr[i + 1]);
        } else if (arr[i] === "--double-prev") {
          if (i > 0) so.push(arr[i - 1]);
        } else {
          so.push(arr[i]);
        }
      }
    return so
};

// console.log(transform([1, 2, 3, '--discard-next', 4, 5]))

// --discard-next excludes the next element of the so from the transformed so.
// --discard-prev excludes the previous element of the so from the transformed so.
// --double-next doubles the next element of the so in the transformed so.
// --double-prev doubles the previous element of the so in the transformed so.