function missingNumber(nums) {
    let total = 0;
    let actual = 0

    for(let i = 1;i <= nums.length+1;i++){
        total += i;  
    }
    for(let i = 0;i<nums.length;i++){
         actual +=nums[i];
    }
    return total - actual;
}
Array = [2,4,1,5,6];
console.log(missingNumber(Array));