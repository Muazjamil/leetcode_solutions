function countVowel(str){

    let total = 0;
    let vowels = 'aeiou';
    let freq = {};
    
    str = str.toLowerCase(str);

    for(let char of str){
        if(vowels.includes(char)){
            total++;
            freq[char] = (freq[char] || 0) + 1;
        }
    }
    return {total, freq}
}

let value = "hello";
console.log(countVowel(value));