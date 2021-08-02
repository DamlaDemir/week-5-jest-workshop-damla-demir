import { divide, toPascalCase } from "../src/functions";

describe("functions", () => {
  describe("divide function", () => {
    it("should divide given numbers", () => {
      //arrange
      const dividend = 8;
      const divisor = 4;
      const expectedResult = 2;

      //act
      const actualResult = divide(dividend, divisor);

      //assertion
      expect(actualResult).toBe(expectedResult);
    });

    it("should throw error when dividend is not a number", () => {
      //arrange
      const dividend = "NaN";
      const divisor = 4;
      const expectedResult = "Invalid Numbers!";

      //act
      const actualResult = () => divide(dividend, divisor);

      //assertion
      expect(actualResult).toThrow(expectedResult);
    });

    it("should throw error when divisor is not a number", () => {
      //arrange
      const dividend = 8;
      const divisor = "NaN";
      const expectedResult = "Invalid Numbers!";

      //act
      const actualResult = () => divide(dividend, divisor);

      //assertion
      expect(actualResult).toThrow(expectedResult);
    });

    it("should throw error when divisor is zero", () => {
      //arrange
      const dividend = 8;
      const divisor = 0;
      const expectedResult = "Devide By Zero!";

      //act
      const actualResult = () => divide(dividend, divisor);

      //assertion
      expect(actualResult).toThrow(expectedResult);
    });
  });

  describe("toPascalCase function", () => {
    it("should make pascal case given sentence", () => {
      //arrange
      const sentence = "hello bootcamp!";
      const expectedResult = "Hello Bootcamp!";

      //act
      const actualResult = toPascalCase(sentence);

      //assertion
      expect(actualResult).toBe(expectedResult);
    });

    it("should return empty when given string is an empty string", () => {
      //arrange
      const sentence = "";
      const expectedResult = "";

      //act
      const actualResult = toPascalCase(sentence);

      //assertion
      expect(actualResult).toBe(expectedResult);
    });
  });
});
