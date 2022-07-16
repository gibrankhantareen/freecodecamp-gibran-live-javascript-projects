function rot13(str) {
  let result=str.split('').map(x=>{
    if(/[a-z]/i.test(x)){
      let ASCIIValueKaResult;
      let ASCIIValueWalaInput=x.charCodeAt(0);
      if(ASCIIValueWalaInput-13<65){
        ASCIIValueKaResult=91-(65-(ASCIIValueWalaInput-13));
      }
      else{
        ASCIIValueKaResult=ASCIIValueWalaInput-13;
      }
      return String.fromCharCode(ASCIIValueKaResult);
    }
    return x;
  });
  return result.join('');
}
// I will change the inputs below to test the code
console.log(rot13("ABCF FGHJ THND"));

// (C) GIBRAN KHAN TAREEN