export async function fetchOaRecipeImage(recipeChoice: string, oaUserToken: string) {
  const url = "https://api.openai.com/v1/images/generations";

  const payload = {
    model: "dall-e-3",
    prompt: `Create a photo-realistic image of the following culinary creation: ${recipeChoice}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements. The background should be a flat, uniform black with no variations or light sources, blending seamlessly with the page background.`,
    n: 1,
    size: "1024x1024",
  };

  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${oaUserToken}`,
      "Content-Type": "application/json",
    },
  });

  const imageUrl = await result.json();
  return imageUrl;
}
export async function fetchOaIngredientsList(recipeChoice: string, oaUserToken: string) {
  const url = "https://api.openai.com/v1/chat/completions";

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `List only the individual ingredients in ${recipeChoice} by order of importance to the recipe.`,
      },
    ],
  };

  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${oaUserToken}`,
      "Content-Type": "application/json",
    },
  });

  const data = await result.json();
  const ingredientsText = data.choices[0].message.content;
  return ingredientsText;
}

export async function fetchOaIngredientsImage(ingredientsList: string, oaUserToken: string) {
  const url = "https://api.openai.com/v1/images/generations";

  const payload = {
    model: "dall-e-3",
    prompt: `Create a photorealistic image showing exactly one instance of each of the following items: ${ingredientsList}. Arrange these items in a top-down view against a plain black background. Place them in a horizontal line, spaced evenly and aligned symmetrically across the image. Do not repeat or duplicate any item—ensure only one unique instance of each listed ingredient is visible in the image. The image should contain no text, symbols, numbers, or additional elements. Focus only on the items provided, with realistic textures, colors, and soft, natural lighting. Ensure there are no clusters or overlapping items, and each ingredient should be clearly distinguishable and evenly spaced.`,
    n: 1,
    size: "1024x1024",
  };

  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${oaUserToken}`,
      "Content-Type": "application/json",
    },
  });

  const imageUrl = await result.json();
  return imageUrl;
}
