/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// With the help of a hash map to store the indices of the numbers we have seen so far.
// time complexity: O(n)

var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i++)
    {
        const complement = target - nums[i];
        if(map.has(complement))
        {
            return[ map.get(complement), i];
        }
        map.set(nums[i],i);  
    }
};

// with the help of two loops
// time complexity: O(n^2)

var twoSum = function(nums, target) {
    for (let i = 0 ; i < nums.length ; i++)
    {
        for(let j = i+1 ; j < nums.length ; j++)
        {
            if(nums[i] + nums[j] === target)
            {
                return[i,j];
            }
        }
    }
};