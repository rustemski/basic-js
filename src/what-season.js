module.exports = function getSeason(date) {
  // function getSeason(date) {

    if (!date) {
      return "Unable to determine the time of year!"
  } else if (Object.keys(date).length > 0) {
      throw new Error();
  }
  // throw 'Not implemented';
  // remove line with error and write your code here
  const month = date.getMonth()
  
  // return month
  // if (month > 0 && month < 3) {
  //   return "winter"
  // }
  switch (month) {
    case 1:
    case 2:
    case 3:
    case 12:
      return 'winter';
    case 4:
    case 5:  
      return 'spring';
    case 6:
    case 7:
    case 8:
          return 'summer';
    case 9:
    case 10: 
    case 11: 
      return "autumn"
  }
};

// var timeInMs = new Date(1993,8,28,14,39,7);
// console.log(getSeason(timeInMs))