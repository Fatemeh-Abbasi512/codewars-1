//Sentence Smash
function smash(words) {
    return words.join(' '); 
};


//Reversed Strings
function solution(str){
    const strChunks = str.split("");
    const reverse = strChunks.reverse();
    const result = reverse.join('');
    return result;
    };
