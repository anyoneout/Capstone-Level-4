import { Request, Response } from "express";
import { recipes } from "../../all_recipes";

export function recipesSimple(request: Request, response: Response): void {
  const ingredientsArray = (request.query.ingredients as string).split(",");
  let firstRecipeMatched;

  for (let r = 0; r < recipes.length; r++) {
    let i = 0;
    while (i < ingredientsArray.length && recipes[r].ingredients.includes(ingredientsArray[i])) {
      i++;
    }
    if (i === ingredientsArray.length) {
      firstRecipeMatched = recipes[r];
      break;
    }
  }

  response.send(firstRecipeMatched.name);
}
