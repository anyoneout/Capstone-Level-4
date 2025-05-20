import axios from "axios";

export async function getRecipeApiResponse(ingredients: []): Promise<any> {
  const localPath = window.location.hostname;
  const baseUrl = localPath === "localhost" ? "http://localhost:3001" : process.env.REACT_APP_LAMBDA_URL;
  //joins the array into a string separated by a comma
  const ingredientString = ingredients.join(",");
  const url = `${baseUrl}/recipesSimple?ingredients=${ingredientString}`;
  const response = await axios.get(url);
  return response.data;
}
