import axios from "axios";

export async function getAnswer(userQuestion: string, userContext: string) {
  const localPath = window.location.hostname;
  const appEngineUrl = process.env.REACT_APP_ENGINE_URL;
  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = "http://localhost:3000";
  } else {
    baseUrl = appEngineUrl;
  }

  const url = `${baseUrl}/aiPost`;
  const data = {
    question: userQuestion,
    context: userContext,
  };

  const response = await axios.post(url, data);
  return response.data;
}
