function secondLargest(nums){
    let largest = nums[0];
    let secondLargest = undefined;

    for(let i=1;i<nums.length;i++){
        if(nums[i] > largest){
            secondLargest = largest;
            largest = nums[i];
        }
        else if(nums[i] < largest && (secondLargest == undefined || nums[i] > secondLargest)){
            secondLargest = nums[i]
        }
    }
    return secondLargest;
}

array = [1,5,63,34,3,42,88,3,5,5];
console.log(secondLargest(array));