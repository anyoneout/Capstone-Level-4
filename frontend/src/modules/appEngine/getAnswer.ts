import axios from "axios";

export async function getAnswer(userQuestion: string, userContext: string) {
  const url = "http://localhost:3000/aiPost";
  const data = {
    question: userQuestion,
    context: userContext,
  };
  console.log("Sending POST to /aiPost with:", data);

  const response = await axios.post(url, data);
  return response.data;
}
