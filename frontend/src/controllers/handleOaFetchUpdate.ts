import { fetchOaIngredientsImage, fetchOaIngredientsList, fetchOaRecipeImage } from "../modules/oaFetchFunctionsUpdate";

export async function handleOaFetchUpdate() {
  const elements = getDomElements();
  const { recipeSelect, recipeImg, ingredientsImg, ingredientsHTML, spinnerOne, spinnerTwo, customRecipeInput } =
    elements;

  const dropDownRecipeChoice = recipeSelect.value;
  const inputRecipeChoice = customRecipeInput.value;
  const recipeChoice = inputRecipeChoice !== "" ? inputRecipeChoice : dropDownRecipeChoice;

  /*  oaSaveUser(); */
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
      recipeSelect: document.getElementById("chosenRecipe") as HTMLSelectElement,
      recipeImg: document.getElementById("recipeAI") as HTMLImageElement,
      ingredientsImg: document.getElementById("ingredientsAI") as HTMLImageElement,
      ingredientsHTML: document.getElementById("recipeIngredients") as HTMLElement,
      spinnerOne: document.getElementById("spinnerOne") as HTMLElement,
      spinnerTwo: document.getElementById("spinnerTwo") as HTMLElement,
      customRecipeInput: document.getElementById("customRecipeInputOa") as HTMLInputElement,
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
