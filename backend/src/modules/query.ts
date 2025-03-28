import axios from "axios";

export async function query() {
  const response = await axios.get("https://opentdb.com/api.php?amount=2");

  const results = {
    question: response.data.results[0].question,
    correct_answer: response.data.results[0].correct_answer,
    type: response.data.results[0].type,
    difficulty: response.data.results[0].difficulty,
  };
  return results;
}
