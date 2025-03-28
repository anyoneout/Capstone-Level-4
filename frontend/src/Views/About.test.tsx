//added to replace the images with strings instead of modifying jest.config.js 
jest.mock("../../assets/videos/ingredients.mp4", () => "ingredients.mp4");

import { describe, expect, it } from "@jest/globals";
import React from "react";
import { About } from "./About";
import { render } from "@testing-library/react";

describe("The About page", () => {
  it("renders correctly", rendersAbout);
});

function rendersAbout() {

  //ARRANGE
  let container;

  //ACT
  ({ container } = render(<About />));

  //ASSERT
  expect(container).toBeTruthy();
}