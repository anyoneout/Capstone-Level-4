import { oaIngredientsList } from "../modules/oaIngredientsList";
import { oaSaveUser } from "../modules/oaSaveUser";
import { oaIngredientsImage } from "../modules/oaIngredientsImage";
import { oaRecipeImage } from "../modules/oaRecipeImage";


//handles fetch request and UI updates
export async function handleOaFetch() {
  const oaUserToken = localStorage.getItem("oaiToken");

  const elements = getDomElements();
  const { recipeChoice, recipeIngredientsHTML, ingredientsImgHTML, recipeImgHTML, secondArrow, spinnerOneHTML, spinnerTwoHTML } = elements;

  oaSaveUser();

  iconVisibility(spinnerOneHTML, true);

  await updateRecipeImage(recipeChoice, recipeImgHTML, spinnerOneHTML, spinnerTwoHTML, secondArrow, oaUserToken);

  const ingredientsFetched = await oaIngredientsList(recipeChoice, oaUserToken);

  await updateIngredients(ingredientsFetched, recipeIngredientsHTML, ingredientsImgHTML, spinnerTwoHTML, oaUserToken);
}
//Get DOM elements
function getDomElements() {
  return {
    recipeChoice: document.getElementById("chosenRecipe"),
    recipeIngredientsHTML: document.getElementById("recipeIngredients"),
    ingredientsImgHTML: document.getElementById("ingredientsAI"),
    recipeImgHTML: document.getElementById("recipeAI"),
    secondArrow: document.getElementById("secondArrowHTML"),
    spinnerOneHTML: document.getElementById("spinnerOne"),
    spinnerTwoHTML: document.getElementById("spinnerTwo"),
  };
}
//controls icon visibility by condition
function iconVisibility(element, isVisible) {
  element.style.visibility = isVisible ? "visible" : "hidden";
}

//fetches recipe image by user choice, controls icon visibility
async function updateRecipeImage(recipeChoice, recipeImgHTML, spinnerOneHTML, spinnerTwoHTML, secondArrowHTML, oaUserToken) {
  const dataRecipeImage = await oaRecipeImage(recipeChoice, oaUserToken);
  recipeImgHTML.src = dataRecipeImage.data[0].url;
  recipeImgHTML.classList.add("borderImage");
  iconVisibility(secondArrowHTML, true);
  iconVisibility(spinnerOneHTML, false);
  iconVisibility(spinnerTwoHTML, true);
}


//fetches ingredients list and image
async function updateIngredients(ingredientsFetched, recipeIngredientsHTML, ingredientsImgHTML, spinnerTwoHTML, oaUserToken) {
  recipeIngredientsHTML.innerHTML = ingredientsFetched;

  const dataIngredientsImage = await oaIngredientsImage(ingredientsFetched, oaUserToken);

  iconVisibility(spinnerTwoHTML, false);
  ingredientsImgHTML.src = dataIngredientsImage.data[0].url;
  ingredientsImgHTML.classList.add("borderImage");
}
