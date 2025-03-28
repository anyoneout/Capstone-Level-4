//added to replace the images with strings instead of modifying jest.config.js 
jest.mock("../../../assets/images/BlackForestImages/bfBananaSplitR.jpg", () => "bfBananaSplitR.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfBananaSplitI.jpg", () => "bfBananaSplitI.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfCapreseSaladR.jpg", () => "bfCapreseSaladR.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfCapreseSaladI.jpg", () => "bfCapreseSaladI.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfChickenKievR.jpg", () => "bfChickenKievR.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfChickenKievI.jpg", () => "bfChickenKievI.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfEggsBenedictR.jpg", () => "bfEggsBenedictR.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfEggsBenedictI.jpg", () => "bfEggsBenedictI.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfMinestroneR.jpg", () => "bfMinestroneR.jpg");
jest.mock("../../../assets/images/BlackForestImages/bfMinestroneI.jpg", () => "bfMinestroneI.jpg");

import React from "react";
import { describe, expect, it } from "@jest/globals";
import { CarouselBlackForest } from "./CarouselBlackForest";
//had to import render and screen so that jest could fully render components for testing
import { render } from "@testing-library/react";


describe("The Black Forest carousel", () => {
  it(`has an "active" item`, hasActiveItem);
  it("has nav buttons", hasNavButtons);
});

function hasActiveItem() {

  //ARRANGE
  const { container } = render(<CarouselBlackForest />);

  //ACT
  const activeItem = container.querySelector(".carousel-item.active");

  //ASSERT - toBeTruthy() was used instead of .not.toBeNull() - I was just trying to see how it could be tested differently.
  expect(activeItem).toBeTruthy();
}

function hasNavButtons() {

  //ARRANGE
  const { container } = render(<CarouselBlackForest />);

  //ACT
  const prevButton = container.querySelector(".carousel-control-prev");
  const nextButton = container.querySelector(".carousel-control-next");

  //ASSERT
  expect(prevButton).toBeTruthy();
  expect(nextButton).toBeTruthy();
}