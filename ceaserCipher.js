
function destructureString (str){
const charCodeArr =[];
const destructureStrArr = str.split('');
destructureStrArr.forEach((element)=>{charCodeArr.push(element.charCodeAt())});
return charCodeArr;
}

function ceaserCipher(str,shiftFactor){
//  destructureString(str);
}
export {ceaserCipher};