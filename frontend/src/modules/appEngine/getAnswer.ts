import axios from "axios";

export async function getAnswer(userQuestion: string, userContext: string) {
  const localPath = window.location.hostname;
  const appEngineLocalPort = "http://localhost:3050";
  const appEngineUrl = "https://capstone-level-4.uc.r.appspot.com";

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = appEngineLocalPort;
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
