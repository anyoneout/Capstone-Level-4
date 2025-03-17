
export async function bfIngredientsList(recipeChoice, hfUserToken) {

  const userRecipe = recipeChoice.value;
  console.log(userRecipe);
  const url = "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1/v1/chat/completions";
  const payload = {
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    messages: [{ role: "user", content: `List only the individual ingredients in ${userRecipe} by order of importance to the recipe. omit any optional ingredients and description of the ingredients. ` }],
    max_tokens: 500,
    stream: false
  };
  console.log("payload", payload);
  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Authorization": `Bearer ${hfUserToken}`,
      "Content-Type": "application/json"
    }
  });
  console.log("result", result);
  console.log(result);

  const data = await result.json();
  console.log("data", data);
  const ingredients = data.choices[0].message.content;
  console.log("ingredients", ingredients);
  return ingredients;
}
