import axios from "axios";

export async function getApiResponse(
  url = "https://opentdb.com/api.php?amount=5"
) {
  const response = await axios.get(url);
  return response.data;
}
