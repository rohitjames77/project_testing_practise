function capitalize(string) {
  const firstCapLtr = string.slice(0, 1).toUpperCase();
  const restOfStr = string.slice(1, string.length);
  const capitalizeStr = firstCapLtr.concat(restOfStr);

  return capitalizeStr;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

// const calculator = {
// add:()=>{

// },
// subtract:()=>{

// },
// multiply:()=>{

// },
// divide:()=>{

// }
// };



export { capitalize, reverseString };
