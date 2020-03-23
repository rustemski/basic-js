module.exports = function countCats(matrix) {
  // function countCats(matrix) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  var number = 0;
  for (var i=0; i < matrix.length; i++) {
    for (var ii=0; ii < matrix[i].length; ii++) {
    if (matrix[i][ii] == '^^') {
      number++
    } 
    // if (matrix[i].includes('^^') == true) {
    //   number++ 
    // } include finds only once in array 
  }
  }
  return number
};

// console.log(countCats([
//   ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
//   [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
//   [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
//   [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
//   [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
//   [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
//   [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
//   [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
// ]))