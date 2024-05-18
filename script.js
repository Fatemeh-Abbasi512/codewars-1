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
// Flick Switch
function flickSwitch(arr){
  let flickMode = false;
  const result = [];
  for (const item of arr) {
    if (item === "flick") {
      flickMode = !flickMode;
    }
    result.push(!flickMode);
  }
  return result;
  }

//Simple Change Machine

    function changeMe(moneyIn){
  if (moneyIn === '£5') {
   return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p";
  }else if (moneyIn === '£2') {
    return "20p 20p 20p 20p 20p 20p 20p 20p 20p 20p" ;
  }else if (moneyIn === '£1') {
    return "20p 20p 20p 20p 20p";
  }else if (moneyIn === '50p') {
    return "20p 20p 10p";
  }else if (moneyIn === '20p') {
    return "10p 10p";
  }else{
    return moneyIn;
  }
    };
   
