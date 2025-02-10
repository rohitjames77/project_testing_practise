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
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1 % num2;
  },
};

function analyzeArray(array) {
  const arrAverage = analyzeAverage(array);
  const arrMin= analyzeMinimum(array);  
  const object = {
    average: arrAverage,
  };
  return object;
}
//Helper function to analyze average .......................
function analyzeAverage(array) {
  console.log(array.length);

  const average = array.at(array.length / 2);
  console.log(average);

  return average;
}
function analyzeMinimum(array){

}

export { analyzeArray, capitalize, reverseString, calculator };
