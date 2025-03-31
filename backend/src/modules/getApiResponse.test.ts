import { getApiResponse } from "./getApiResponse";

describe("getApiResponse from OpenTDB", () => {
  it("returns trivia results from OpenTDB", async () => {
    //ACT
    const result = await getApiResponse();

    //ASSERT
    expect(result).toHaveProperty("results");
  });

  it("returns a response with a question field", async () => {
    //ACT
    const response = await getApiResponse();

    //ASSERT
    expect(response.results[0]).toHaveProperty("question");
  });
});
