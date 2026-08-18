function findPivot(nums){

    let lsum=0; let rsum=0; let total=0;
    for(let i=0;i<nums.length;i++){
        total += nums[i];
    }
    for(let j=0;j<nums.length;j++){
        rsum = total - lsum - nums[j];
        if(lsum == rsum){
            return j;
        }
        else {
            lsum += nums[j];
        }
    }
    return -1;
}

Array = [1,7,3,6,5,6]
findPivot(Array);