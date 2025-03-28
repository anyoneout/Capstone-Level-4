import axios from "axios";

export async function getQuote() {
  const response = await axios.get("https://favqs.com/api/qotd");

  const result = {
    author: response.data.quote.author,
    body: response.data.quote.body,
  };
  return result;
}
