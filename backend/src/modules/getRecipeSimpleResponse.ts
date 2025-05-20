import axios from "axios";

function getBaseUrl() {
  const localHost = window.location.hostname;
  const localBackend = "http://localhost:3001";
  const lambdaBackend = process.env.REACT_APP_LAMBDA_URL;
  return localHost === "localhost" ? localBackend : lambdaBackend;
}

export async function getRecipeApiResponse(ingredients: string): Promise<any> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/recipesSimple?ingredients=${ingredients}`;
  const response = await axios.get(url);
  return response.data;
}
