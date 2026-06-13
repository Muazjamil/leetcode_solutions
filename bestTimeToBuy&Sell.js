function bestTimeToBuyAndSell(prices) {
    
    let curMin =prices[0];
    let curMax =0;

    for(let i= 0;i<prices.length; i++){

        curMin = Math.min(curMin, prices[i]);
        curMax = Math.max(curMax, prices[i] - curMin);
    
    }
    return curMax;
}