const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  // function dateSample(sampleActivity) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  // if( typeof sampleActivity === 'string') {
  //   sampleActivity.split('').map(a => {if (a === '.') counter++})
  //   if (counter > 1) {sampleActivity = sampleActivity.slice(0, 7)}
  //  }
  // let b = +sampleActivity
  // if (typeof b === "number" && typeof sampleActivity === "string" && b > 0 && b < 15) {
  //   return Math.ceil(Math.log(MODERN_ACTIVITY / b) / (0.693 / 5730));
  // } else {
  //   return false;
  // }
  if (typeof sampleActivity !== "string") {
    return false;
}

var numberActivity = parseFloat(sampleActivity);

if (numberActivity > 0 && numberActivity <= MODERN_ACTIVITY) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / numberActivity) * HALF_LIFE_PERIOD) / 0.693);
}
return false;
    // var kt = 0; 
    // kt = Math.log(MODERN_ACTIVITY / sampleActivity);
    // var k = 0; 
    // k = 0.693 / HALF_LIFE_PERIOD
    // return Math.ceil(kt/k)
};

// function RoundNum(number){
//   var c = number % 1;
//   return number-c+(c/1+1.5>>1)*1
// }

// console.log(dateSample('11'))
// console.log(dateSample('3.142')) // 12926
// console.log(dateSample('1.1977519436068427')) // 20900