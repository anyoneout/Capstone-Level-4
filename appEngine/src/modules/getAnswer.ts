import { pipeline, PretrainedOptions, QuestionAnsweringOutput } from "@xenova/transformers";

const DEFAULT_MODEL = "Xenova/distilbert-base-cased-distilled-squad";

export async function getAnswer(userQuestion: string, userContext: string): Promise<string | undefined> {
  const options: PretrainedOptions = { cache_dir: "ai-models" };
  const aiModel = await pipeline("question-answering", DEFAULT_MODEL, options);
  const response = await aiModel(userQuestion, userContext);
  const { answer } = response as QuestionAnsweringOutput;
  /*   if (score < 0.5) answer = undefined; */
  return answer;
}
