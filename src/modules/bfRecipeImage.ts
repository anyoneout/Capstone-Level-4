export async function bfRecipeImage(recipeChoice, hfUserToken) {
  let userRecipe = recipeChoice.value;
  let url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
  let payload = { inputs: `Create a photo-realistic image of the following culinary creation: ${userRecipe}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements. The background should be a flat, uniform black with no variations or light sources, blending seamlessly with the page background.` };
  let result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Authorization": `Bearer ${hfUserToken}`,
      "Content-Type": "application/json"
    }
  });
  let blob = await result.blob();
  let dataRecipeImage = URL.createObjectURL(blob);
  return dataRecipeImage;
}
;


/* let payload = { inputs: `Create a photo-realistic image of the following culinary creation: ${userRecipe}. The creation should be displayed against a solid black background, with no shadows, reflections, lighting effects, gradients, or any other elements. The background should be a flat, uniform black with no variations or light sources, blending seamlessly with the page background. There should be no text, numbers, hands, or additional objects—only the culinary creation` }; */