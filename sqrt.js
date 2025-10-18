/**
 * @param {number} x
 * @return {number}
 */

// Using brute force
// time complexity: O(√n)

var mySqrt = function(x) {
    if (x === 0) return 0;

    for(let i = 1 ; i <= x; i++) // loop until the square root of x
    {
        if( i * i === x) // if the square of i equals x
        {
            return i;
        }
        if( i * i > x) // if the square of i exceeds x
        {
            return i-1;
        }
    }
};

// Using binary search
// time complexity: O(log n)

var mySqrt = function(x) {
    let res = 0;
    let l = 0;
    let r = x;
    
    if(x < 2) return x;

    while(l <= r)
    {
        let mid = Math.floor((l+r)/2);
        
        if(mid*mid > x)
        {
            r = mid -1;
        }
        else if(mid*mid < x)
        {
            l = mid + 1;
            res = mid;
        }
        else
        {
            return mid;
        }
    }
        return res;
};