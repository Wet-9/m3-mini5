
//Function 
const arithmeticFunctions = {
    addition: (value_1, value_2) => value_1 + value_2,
    subtraction: (value_1, value_2) => value_1 - value_2,
    multiply: (value_1, value_2) => value_1 * value_2,
    divide: (value_1, value_2) => {
      const num2 = value_2;
      if (num2 === 0) {
        throw new Error('Cannot divide by 0');
      }
      return value_1 / num2;
    },
  };
  
  module.exports = arithmeticFunctions;
  