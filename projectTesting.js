




function capitalize(string) {
    const firstCapLtr = string.slice(0, 1).toUpperCase();
    const restOfStr = string.slice(1, string.length);
    const capitalizeStr = firstCapLtr.concat(restOfStr);
  
    return capitalizeStr;
  }
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const calculator = {
  add:(num1,num2)=>{
  return num1+num2;
  },
  subtract:(num1,num2)=>{
  return num1 - num2;
  },
  multiply:(num1,num2)=>{
  return num1 * num2;
  },
  divide:(num1,num2)=>{
  return num1%num2;
  }
  };
  
  
  
  export { capitalize, reverseString ,calculator};
  