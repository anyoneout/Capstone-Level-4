import axios from "axios";
import { Account } from "../../types/Account";

export async function deleteAccount(account: Account): Promise<{ status: number }> {
  const { email, password } = account;

  const baseUrl = process.env.REACT_APP_API_URL;

  //checks if email has an @ symbol and a .
  const emailIsValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //checks if email is entered
  if (!email || !emailIsValidFormat || !password) {
    return { status: 400 };
  }

  const readUrl = `${baseUrl}/readUser?email=${email}`;
  const readUser = await axios.get(readUrl);

  //checks if email does not exist
  if (!readUser.data.email) {
    return { status: 404 };
  }
  if (readUser.data.password !== password) {
    return { status: 401 };
  }
  const url = `${baseUrl}/deleteUser?email=${email}&${password}`;
  const deleteResponse = await axios.get(url);
  return { status: deleteResponse.status };
}
