module.exports = function createDreamTeam(members) {
  // function createDreamTeam(members) { 
  // throw 'Not implemented';
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false
  if (!members || !members.flat) {
    return false;
}
var teamName = members.map(name => typeof name === 'string' ? name.trim().toUpperCase()[0] : '').sort().join('');
return teamName;
    // members.sort()
    // names = "";
    // for (var i=0; i < members.length; i++) {
    //   names += members[i][0]
    // }
    // return names
};

// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))
