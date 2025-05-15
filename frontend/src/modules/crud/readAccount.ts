import axios from "axios";
import { Account } from "../../types/Account";

export async function readAccount(account: Account): Promise<{ status: number } | Account> {
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

  //checks if email is missing or in an incorrect format
  if (!email || !emailIsValidFormat || !password) {
    return { status: 400 };
  }

  const readUrl = `${baseUrl}/readUser`;
  const readUser = await axios.post(readUrl, { email, password, name: "", phone: "" });

  const userResponse = readUser.data;

  if (!userResponse || !userResponse.email) {
    return { status: 404 };
  } else return userResponse as Account;
}
