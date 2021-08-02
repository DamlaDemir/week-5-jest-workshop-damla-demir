export const divide = (dividend, divisor) => {
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Invalid Numbers!");
  }

  if (divisor == 0) {
    throw new Error("Devide By Zero!");
  }

  const result = dividend / divisor;

  return result;
};

export const toPascalCase = (sentence) => {
  let pascalSentence = sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return pascalSentence;
};
