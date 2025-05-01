import { getAnswer } from "./getAnswer";

describe("getAnswer", { timeout: 100000 }, () => {
  it("accepts a question and a context, then returns a response", () => {
    //ARRANGE
    const question = "Which name is also used to describe the Amazon rainforest in English";
    const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle";
    //ACT
    const response = getAnswer(question, context);
    //ASSERT
    expect(response).toBeDefined;
  });
  it("responds with the correct answer if it's in the context", async () => {
    //ARRANGE
    const question = "Which name is also used to describe the Amazon rainforest in English";
    const context =
      "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle, is a moist broadly tropical rainforest in the Amazon biome that covers most of the Amazon basin in South America.";
    //ACT
    const response = await getAnswer(question, context);
    //ASSERT
    expect(response).toBe("Amazonia");
  });
  it("doesn't respond with an answer if there's no question", () => {
    //ARRANGE
    const question = undefined;
    const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle";
    //ACT
    const response = getAnswer(question, context);
    //ASSERT
    expect(response).toBeUndefined;
  });
  it("doesn't respond with an answer if it's not in the context", () => {
    //ARRANGE
    const question = "Which name is also used to describe the Amazon rainforest in English";
    const context = "The Amazon rainforest, also known in English as Amazonia or the Amazon Jungle";
    //ACT
    const response = getAnswer(question, context);
    //ASSERT
    expect(response).toBeUndefined;
  });
  it("doesn't respond with an answer if there's no context", () => {
    //ARRANGE
    const question = "Which name is also used to describe the Amazon rainforest in English";
    const context = undefined;
    //ACT
    const response = getAnswer(question, context);
    //ASSERT
    expect(response).toBeUndefined;
  });
  it("doesn't respond with an answer if there's no question and no context", () => {
    //ARRANGE
    const question = undefined;
    const context = undefined;
    //ACT
    const response = getAnswer(question, context);
    //ASSERT
    expect(response).toBeUndefined;
  });
  it("doesn't respond with an answer if either the question or context are empty strings", () => {
    //ARRANGE
    const question = "";
    const context = "";
    //ACT
    const response1 = getAnswer(question, "fake context");
    const response2 = getAnswer("fake question", context);
    const response3 = getAnswer(question, context);
    //ASSERT
    expect(response1).toBeUndefined;
    expect(response2).toBeUndefined;
    expect(response3).toBeUndefined;
  });
});
