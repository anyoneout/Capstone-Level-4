import axios from "axios";
import { Account } from "../../types/Account";

export async function createAccount(account: Account): Promise<{ status: number }> {
  const { email, password, name, phone } = account;
  const baseUrl = process.env.REACT_APP_API_URL;

  //checks if fields are all filled in
  if (!email || !password || !name || !phone) {
    return { status: 400 };
  }
  //checks if email already exists on the server
  const readUrl = `${baseUrl}/readUser?email=${email}`;
  const readUser = await axios.get(readUrl);

  //if email already exists return status code 409
  if (readUser?.data?.email === email) {
    return { status: 409 };
  }
  //creates new user and returns status code
  const url = `${baseUrl}/createUser?email=${email}&password=${password}&name=${name}&phone=${phone}`;
  const response = await axios.get(url);
  return { status: response.status };
}
