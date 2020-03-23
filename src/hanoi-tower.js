module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    // function calculateHanoi(disksNumber, turnsSpeed) {
    // throw 'Not implemented';
    // remove line with error and write your code here
        const turns = Math.pow(2, disksNumber) -1 
        const seconds = turns / (turnsSpeed / 3600)
        return {
            turns,
            seconds
        }
}

// console.log(calculateHanoi(414, 19279842))