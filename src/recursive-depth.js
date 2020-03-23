module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            if (arr.length === 0) {
                return 1;
            }
            return Math.max(...arr.map(element => this.calculateDepth(element))) + 1;
        }
        return 0;
    }
};


// console.log(calculateDepth([1, 2, 3, 4, 5, [1]])) // get 2 