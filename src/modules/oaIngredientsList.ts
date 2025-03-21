
export async function oaIngredientsList(recipeChoice, oaUserToken) {
  const userRecipe = recipeChoice.value;
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content: `List individual ingredients in ${userRecipe} by order of importance to the recipe`
    }]
  };
  const result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Authorization": `Bearer ${oaUserToken}`,
      "Content-Type": "application/json"
    }
  });
  const data = await result.json();
  const ingredients = data.choices[0].message.content;
  return ingredients;
};
