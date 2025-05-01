import { pipeline, PretrainedOptions, QuestionAnsweringOutput } from "@xenova/transformers";

const DEFAULT_MODEL = "Xenova/distilbert-base-cased-distilled-squad";

export async function getAnswer(question: string, context: string): Promise<string | undefined> {
  const options: PretrainedOptions = { cache_dir: "ai-models" };
  const aiModel = await pipeline("question-answering", DEFAULT_MODEL, options);
  const response = await aiModel(question, context);
  const { answer } = response as QuestionAnsweringOutput;
  return answer;
}
