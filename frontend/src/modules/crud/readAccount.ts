import axios from "axios";
import { Account } from "../../types/Account";

export async function readAccount(account: Account): Promise<{ status: number }> {
  const { email } = account;
  const baseUrl = process.env.REACT_APP_API_URL;

  //checks if email has an @ symbol and a .
  const emailIsValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //checks if email is missing or in an incorrect format
  if (!email || !emailIsValidFormat) {
    return { status: 400 };
  }

  const readUrl = `${baseUrl}/readUser?email=${email}`;
  const readUser = await axios.get(readUrl);

  //checks if that email exists on the server
  if (readUser.data.email === email) {
    return { status: 200 };
  }

  //checks if email does not exist
  if (!readUser.data.email) {
    return { status: 404 };
  }
}
