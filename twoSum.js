/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// With the help of a hash map to store the indices of the numbers we have seen so far.
// time complexity: O(n)

var twoSum = function(nums, target) {
    const seen = new Set();
    const result = [];
    for (const num of nums) {
        const complement = target - num;
        if (seen.has(complement)) {
            result.push(complement, num);
        }
        seen.add(num);
    }
    return result;
};  

nums = [1,7,2,15];
target = 9;
console.log(twoSum(nums,target), "Target:", target);