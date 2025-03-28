import Card from "./Card";

describe("The Card component", () => {
  it("correctly accepts props", acceptsProps);
});

function acceptsProps() {
  //ARRANGE
  const props = {
    tooltipPlacement: "top",
    tooltipTitle: "Sample Tooltip",
    id: "card1",
    src: "image.jpg"
  };

  //ACT
  const card = Card(props);

  //ASSERT
  expect(card.props.children.props.id).toBe("card1");
  expect(card.props.children.props.src).toBe("image.jpg");
  expect(card.props.children.props["data-bs-placement"]).toBe("top");
  expect(card.props.children.props["data-bs-title"]).toBe("Sample Tooltip");
}