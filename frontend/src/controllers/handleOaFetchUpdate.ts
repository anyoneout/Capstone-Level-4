import { fetchOaIngredientsImage, fetchOaIngredientsList, fetchOaRecipeImage } from "../modules/oaFetchFunctionsUpdate";

export async function handleOaFetchUpdate(dropDownRecipe: string, customRecipe: string, aiRecipe: string) {
  const elements = getDomElements();
  const { recipeImg, ingredientsImg, ingredientsHTML, spinnerOne, spinnerTwo } = elements;
  const recipeChoice = customRecipe || dropDownRecipe || aiRecipe;

  const oaUserToken = localStorage.getItem("oaToken");

  isVisibleElement(spinnerOne, true);

  const recipeImageUrl = await fetchOaRecipeImage(recipeChoice, oaUserToken);
  recipeImg.src = recipeImageUrl.data[0].url;
  recipeImg.classList.add("borderImage");

  isVisibleElement(spinnerOne, false);
  isVisibleElement(spinnerTwo, true);

  const ingredientsText = await fetchOaIngredientsList(recipeChoice, oaUserToken);
  ingredientsHTML.innerHTML = ingredientsText.replace(/,/g, "<br />");

  const ingredientsImageUrl = await fetchOaIngredientsImage(ingredientsText, oaUserToken);
  ingredientsImg.src = ingredientsImageUrl.data[0].url;
  ingredientsImg.classList.add("borderImage");

  isVisibleElement(spinnerTwo, false);

  function getDomElements() {
    return {
      recipeImg: document.getElementById("recipeOaAi") as HTMLImageElement,
      ingredientsImg: document.getElementById("ingredientsOaAi") as HTMLImageElement,
      ingredientsHTML: document.getElementById("recipeOaIngredients") as HTMLElement,
      spinnerOne: document.getElementById("spinnerOaOne") as HTMLElement,
      spinnerTwo: document.getElementById("spinnerOaTwo") as HTMLElement,
    };
  }

  function isVisibleElement(element: HTMLElement, isVisible: boolean) {
    if (isVisible === true) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  }
}
