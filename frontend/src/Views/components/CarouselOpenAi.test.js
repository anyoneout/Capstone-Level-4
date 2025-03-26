//added to replace the images with strings instead of modifying jest.config.js 
jest.mock("../../../assets/images/OpenAiImages/oaBananaSplitR.jpg", () => "oaBananaSplitR.jpg");
jest.mock("../../../assets/images/OpenAiImages/oaBananaSplitI.png", () => "oaBananaSplitI.png");
jest.mock("../../../assets/images/OpenAiImages/oaCapreseSaladR.jpg", () => "oaCapreseSaladR.jpg");
jest.mock("../../../assets/images/OpenAiImages/oaCapreseSaladI.jpg", () => "oaCapreseSaladI.jpg");
jest.mock("../../../assets/images/OpenAiImages/oaChickenKievR.png", () => "oaChickenKievR.png");
jest.mock("../../../assets/images/OpenAiImages/oaChickenKievI.png", () => "oaChickenKievI.png");
jest.mock("../../../assets/images/OpenAiImages/oaEggsBenedictR.png", () => "oaEggsBenedictR.png");
jest.mock("../../../assets/images/OpenAiImages/oaEggsBenedictI.png", () => "oaEggsBenedictI.png");
jest.mock("../../../assets/images/OpenAiImages/oaMinestroneR.png", () => "oaMinestroneR.png");
jest.mock("../../../assets/images/OpenAiImages/oaMinestroneI.png", () => "oaMinestroneI.png");

import React from "react";
import { describe, expect, it } from "@jest/globals";
import { CarouselOpenAi } from "./CarouselOpenAi";
//had to import render so that jest could fully render components for testing
import { render } from "@testing-library/react";


describe("The Black Forest carousel", () => {
  it(`has an "active" item`, hasActiveItem);
  it("has nav buttons", hasNavButtons);
});

function hasActiveItem() {

  //ARRANGE
  const { container } = render(<CarouselOpenAi />);

  //ACT
  const activeItem = container.querySelector(".carousel-item.active");

  //ASSERT - toBeTruthy() was used instead of .not.toBeNull() - I was just trying to see how it could be tested differently.
  expect(activeItem).toBeTruthy();
}

function hasNavButtons() {

  //ARRANGE
  const { container } = render(<CarouselOpenAi />);

  //ACT
  const prevButton = container.querySelector(".carousel-control-prev");
  const nextButton = container.querySelector(".carousel-control-next");

  //ASSERT
  expect(prevButton).not.toBeNull();
  expect(nextButton).toBeTruthy();
}