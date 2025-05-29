import { fetchBfIngredientsImage, fetchBfIngredientsList, fetchBfRecipeImage } from "../modules/bfFetchFunctionsUpdate";

export async function handleBfFetchUpdate(dropDownRecipe: string, customRecipe: string, aiRecipe: string) {
  const elements = getDomElements();
  const { recipeImg, ingredientsImg, ingredientsHTML, spinnerOne, spinnerTwo } = elements;
  const recipeChoice = customRecipe || dropDownRecipe || aiRecipe;

  const hfUserToken = localStorage.getItem("hfToken");
  const oaUserToken = localStorage.getItem("oaToken");
  isVisibleElement(spinnerOne, true);

  const recipeImageUrl = await fetchBfRecipeImage(recipeChoice, hfUserToken);
  recipeImg.src = recipeImageUrl;
  recipeImg.classList.add("borderImage");

  isVisibleElement(spinnerOne, false);
  isVisibleElement(spinnerTwo, true);

  const ingredientsText = await fetchBfIngredientsList(recipeChoice, oaUserToken);

  ingredientsHTML.innerHTML = ingredientsText.replace(/,/g, "<br />");

  const ingredientsImageUrl = await fetchBfIngredientsImage(ingredientsText, hfUserToken);
  ingredientsImg.src = ingredientsImageUrl;
  ingredientsImg.classList.add("borderImage");

  isVisibleElement(spinnerTwo, false);

  function getDomElements() {
    return {
      recipeImg: document.getElementById("recipeBfAi") as HTMLImageElement,
      ingredientsImg: document.getElementById("ingredientsBfAi") as HTMLImageElement,
      ingredientsHTML: document.getElementById("recipeBfIngredients") as HTMLElement,
      spinnerOne: document.getElementById("spinnerBfOne") as HTMLElement,
      spinnerTwo: document.getElementById("spinnerBfTwo") as HTMLElement,
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
