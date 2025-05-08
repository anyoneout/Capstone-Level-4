import axios from "axios";
import { Account } from "../../types/Account";

export async function deleteAccount(account: Account): Promise<{ status: number }> {
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  const { email, password } = account;

  //checks if email has an @ symbol and a .
  const emailIsValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //checks if email is entered
  if (!email || !emailIsValidFormat || !password) {
    return { status: 400 };
  }

  const readUrl = `${baseUrl}/readUser`;
  const readUser = await axios.post(readUrl, { email });

  //checks if email does not exist
  if (!readUser.data.email) {
    return { status: 404 };
  }
  if (readUser.data.password !== password) {
    return { status: 401 };
  }
  const url = `${baseUrl}/deleteUser`;
  const deleteResponse = await axios.post(url, { email, password });
  return { status: deleteResponse.status };
}
