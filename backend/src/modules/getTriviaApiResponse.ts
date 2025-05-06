import axios from "axios";

export async function getTriviaApiResponse(url = "https://opentdb.com/api.php?amount=5") {
  const response = await axios.get(url);
  return response.data;
}
