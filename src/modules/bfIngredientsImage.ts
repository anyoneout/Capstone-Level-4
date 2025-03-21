

export async function bfIngredientsImage(ingredientsFetched, hfUserToken) {

  let url = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

  let payload = { inputs: `Create a photorealistic image showing exactly one instance of each of the following items: ${ingredientsFetched}. Arrange these items in a top-down view against a plain black background. Place them in a horizontal line, spaced evenly and aligned symmetrically across the image. Do not repeat or duplicate any item—ensure only one unique instance of each listed ingredient is visible in the image. The image should contain no text, symbols, numbers, or additional elements. Focus only on the items provided, with realistic textures, colors, and soft, natural lighting. Ensure there are no clusters or overlapping items, and each ingredient should be clearly distinguishable and evenly spaced.` };
  let result = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Authorization": `Bearer ${hfUserToken}`,
      "Content-Type": "application/json"
    }
  });
  let blob = await result.blob();
  let dataIngredientsImage = URL.createObjectURL(blob);
  return dataIngredientsImage;
};


