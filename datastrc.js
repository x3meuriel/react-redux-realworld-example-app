const countPalindrome = (str) => {

    str.toLowerCase();
    let count = 0;
    let length = str.length;
    let res = ''
    let word = str.split('')


    for(let i = 0; i < length; i++){
        word.forEach(element => {
            res += element;
            // console.log(res.split(''), 'sp')
            let rev = res.split('').reverse().join('')
            if(res === rev){
                count++
            }
        });

        res = ''
        word.shift('');
        // console.log(word, 'word')
    }
    return count;

}

console.log(countPalindrome('mumonpapshamanamanajof'))