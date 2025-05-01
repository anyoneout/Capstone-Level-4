import { addition } from "./addition";
import { expect, test } from "@jest/globals";

test("the addition function adds numbers", callbackTest1);
test("the addition function adds negative numbers", addNegatives);
test("the addition function adds positive and negative numbers", addPositiveNegative);
test("returns NAN when strings are added", addStrings);
test("adds number strings", addNumberStrings);

function callbackTest1() {
  //ARRANGE - Set the variables for the test
  const x = 3;
  const y = 4;

  //ACT - Use the unit with the variables
  const result = addition(x, y);

  //ASSERT - Check if the unit works as expected
  expect(result).toBe(7);

}

function addNegatives() {
  //ARRANGE - Set the variables for the test
  const x = -3;
  const y = -4;

  //ACT - Use the unit with the variables
  const result = addition(x, y);

  //ASSERT - Check if the unit works as expected
  expect(result).toBe(-7);
}

function addPositiveNegative() {
  //ARRANGE - Set the variables for the test
  const x = 3;
  const y = -4;

  //ACT - Use the unit with the variables
  const result = addition(x, y);

  //ASSERT - Check if the unit works as expected
  expect(result).toBe(-1);
}

function addStrings() {
  //ARRANGE - Set the variables for the test
  const x = "dog";
  const y = "cat";

  //ACT - Use the unit with the variables
  const result = addition(x, y);

  //ASSERT - Check if the unit works as expected
  expect(result).toBe(NaN);
}

function addNumberStrings() {
  //ARRANGE - Set the variables for the test
  const x = "3";
  const y = "4";

  //ACT - Use the unit with the variables
  const result = addition(x, y);

  //ASSERT - Check if the unit works as expected
  expect(result).toBe(7);
}