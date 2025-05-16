//black forest recipe image fetch
export async function fetchBfRecipeImage(recipe: string, token: string): Promise<string> {
  const url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

  const payload = {
    inputs: `Create a photo-realistic image of the following culinary creation: ${recipe}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements. The background should be a flat, uniform black with no variations or light sources, blending seamlessly with the page background.`,
  };
  let result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const blob = await result.blob();
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
}

//i'm having issues with huggingface since they became a paid service so I'm using openAI as of now for the question answering as I have an account
export async function fetchBfIngredientsList(recipe: string, token: string): Promise<string> {
  const url = "https://api.openai.com/v1/chat/completions";

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `List only the individual ingredients in ${recipe} by order of importance. Omit optional ingredients and descriptions. Return the  list with each ingredient separated by a comma.`,
      },
    ],
    temperature: 0.5,
    max_tokens: 500,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  const ingredients = data.choices?.[0]?.message?.content?.trim() || "No ingredients returned.";
  return ingredients;
}

//black forest ingredients image fetch
export async function fetchBfIngredientsImage(ingredients: string, token: string): Promise<string> {
  const url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
  const payload = {
    inputs: `Create a photorealistic image showing exactly one instance of each of the following items: ${ingredients}. Arrange these items in a top-down view against a plain black background. Place them in a horizontal line, spaced evenly and aligned symmetrically across the image. Do not repeat or duplicate any item—ensure only one unique instance of each listed ingredient is visible in the image. The image should contain no text, symbols, numbers, or additional elements. Focus only on the items provided, with realistic textures, colors, and soft, natural lighting. Ensure there are no clusters or overlapping items, and each ingredient should be clearly distinguishable and evenly spaced.`,
  };

  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const blob = await result.blob();
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
}
