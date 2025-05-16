//black forest recipe image fetch
export async function fetchBfRecipeImage(recipe: string, token: string): Promise<string> {
  const url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

  const payload = {
    inputs: `Create a photo-realistic image of the following culinary creation: ${recipe}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements.`,
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
        content: `List only the individual ingredients in ${recipe} by order of importance. Omit optional ingredients and descriptions.`,
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
    inputs: `Create a photorealistic image showing one instance of each of the following: ${ingredients}. Use a plain black background, top-down view, soft lighting, no overlapping items.`,
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
