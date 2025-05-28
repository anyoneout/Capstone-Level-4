import { set } from "../redux/store";
import { getAnswer } from "./appEngine/getAnswer";

export async function getAiResponse(dispatch: any, recipeReturned: string, searchIngredients: string): Promise<string> {
  const questionString = `What is a recipe that uses ${searchIngredients}?`;
  dispatch(set.recipeAiUserQuestion(questionString));

  const contextString = `${recipeReturned} is a recipe that uses these ingredients: ${searchIngredients}.`;
  dispatch(set.recipeAiUserContext(contextString));

  //ai call to get answer
  const aiResult = await getAnswer(questionString, contextString);
  dispatch(set.recipeAiQuestionResponse(aiResult));
  localStorage.setItem("aiRecipe", aiResult);
  return aiResult;
}
