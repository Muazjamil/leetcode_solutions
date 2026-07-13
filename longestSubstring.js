var longestSubstring = function(s) {
    let result = 0;
    const set = new Set();
        let left = 0;
        for(let right =0; right < s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            result = Math.max(result, right -left+1);
            }
        return result;
}

let s = "pwwweweer";
console.log(longestSubstring(s));