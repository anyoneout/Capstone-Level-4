import axios from "axios";
import { set } from "../redux/store";

export async function getRecipe(dispatch: any, searchIngredients: string): Promise<string | undefined> {
  const localPath = window.location.hostname;
  const baseUrl = localPath === "localhost" ? "http://localhost:3001" : process.env.REACT_APP_LAMBDA_URL;
  const url = `${baseUrl}/recipesSimple?ingredients=${searchIngredients}`;
  const response = await axios.get(url);
  if (response.status === 500) {
    dispatch(set.recipeApiStatus(`there are no recipes with those ingredients found`));
    return undefined;
  } else {
    const recipeReturned = response.data;
    dispatch(set.recipeApiRecipe(recipeReturned));
    return recipeReturned;
  }
}
