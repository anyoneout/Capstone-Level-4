import { getTriviaApiResponse } from "./getTriviaApiResponse";

describe("getTriviaApiResponse from OpenTDB", () => {
  let result: any;

  // I found this function that allows a single api call to be run that allows the results to be checked against different expected conditions: https://stackoverflow.com/questions/54517032/beforeall-vs-beforeeach-when-to-use-them
  beforeAll(async () => {
    result = await getTriviaApiResponse();
  });

  it("returns trivia results from OpenTDB", () => {
    expect(result).toHaveProperty("results");
  });

  it("returns a response with a question field", () => {
    expect(result.results[0]).toHaveProperty("question");
  });
});
