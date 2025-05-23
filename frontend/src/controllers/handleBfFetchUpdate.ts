import { fetchBfIngredientsImage, fetchBfIngredientsList, fetchBfRecipeImage } from "../modules/bfFetchFunctionsUpdate";

export async function handleBfFetchUpdate() {
  const hfUserToken = localStorage.getItem("hfToken");
  const oaUserToken = localStorage.getItem("oaToken");
  const elements = getDomElements();
  const { recipeSelect, recipeImg, ingredientsImg, ingredientsHTML, spinnerOne, spinnerTwo, customRecipeInput } =
    elements;

  const dropDownRecipeChoice = recipeSelect.value;
  const inputRecipeChoice = customRecipeInput.value;
  const recipeChoice = inputRecipeChoice !== "" ? inputRecipeChoice : dropDownRecipeChoice;

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
      recipeSelect: document.getElementById("chosenRecipe") as HTMLSelectElement,
      recipeImg: document.getElementById("recipeAI") as HTMLImageElement,
      ingredientsImg: document.getElementById("ingredientsAI") as HTMLImageElement,
      ingredientsHTML: document.getElementById("recipeIngredients") as HTMLElement,
      spinnerOne: document.getElementById("spinnerOne") as HTMLElement,
      spinnerTwo: document.getElementById("spinnerTwo") as HTMLElement,
      customRecipeInput: document.getElementById("customRecipeInputBf") as HTMLInputElement,
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
