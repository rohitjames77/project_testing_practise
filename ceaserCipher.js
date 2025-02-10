function ceaserCipher(string, shiftFactor) {
  const destructureStr = destructureString(string);
  const shiftedArr = conditionalShiftedStr(destructureStr, shiftFactor);

  const ConvertShiftedStr = convertingBackToStr(shiftedArr);
  return ConvertShiftedStr;
}

function destructureString(string) {
  const charCodeArr = [];
  const destructureStrArr = string.split("");
  destructureStrArr.forEach((element) => {
    charCodeArr.push(element.charCodeAt());
  });

  return charCodeArr;
}
function conditionalShiftedStr(destructureStr, shiftFactor) {
  let shiftedArr = destructureStr.map((element) => {
    switch (true) {
      case element === 32:
        return element;
      case element === 88:
        return 88 - 23;
      case element === 89:
        return 89 - 24;
      case element === 90:
        return 90 - 25;
      case element === 120:
        return 120 - 23;
      case element === 121:
        return 121 - 24;
      case element === 122:
        return 122 - 25;
      case element >= 65 && element <= 87:
        return element + shiftFactor;
      case element >= 97 && element <= 119:
        return element + shiftFactor;
      case element <= 64:
        return element;
      case element >= 123 && element <= 1114111:
        return element;
    }
  });
  return shiftedArr;
}

function convertingBackToStr(shiftedArr) {
  const convertedStr = String.fromCharCode(...shiftedArr);

  return convertedStr;
}

export { ceaserCipher };
