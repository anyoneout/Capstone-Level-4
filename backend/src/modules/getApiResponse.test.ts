import { getApiResponse } from "./getApiResponse";

describe("getApiResponse from OpenTDB", () => {
  it("returns trivia results from OpenTDB", async () => {
    //ACT
    const result = await getApiResponse();

    //ASSERT
    expect(result).toHaveProperty("results");
  });
});
