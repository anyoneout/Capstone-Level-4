import axios from "axios";

export async function getTrivia(query: {
  amount: number;
  category: number;
  type: string;
}) {
  const { amount, category, type } = query;
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=${type}`;
  const response = await axios.get(url);
  const choice1 = response.data.results[0].correct_answer;
  const choice2 = response.data.results[0].incorrect_answers[0];
  const choice3 = response.data.results[0].incorrect_answers[1];
  const choice4 = response.data.results[0].incorrect_answers[2];
  const result = {
    question: response.data.results[0].question,
    choices: [choice1, choice2, choice3, choice4],
    answer: 0,
  };
  return result;
}
