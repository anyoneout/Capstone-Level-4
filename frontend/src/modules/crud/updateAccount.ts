import axios from "axios";
import { Account } from "../../types/Account";

export async function updateAccount(account: Account): Promise<{ status: number }> {
  const localPath = window.location.hostname;
  const lambdaLocalPort = "http://localhost:3001";
  const lambdaUrl = process.env.REACT_APP_LAMBDA_URL;

  let baseUrl: string;

  if (localPath === "localhost") {
    baseUrl = lambdaLocalPort;
  } else {
    baseUrl = lambdaUrl;
  }

  const { email, password, name, phone } = account;

  //makes sure both fields are filled in
  if (!email || !password) {
    return { status: 400 };
  }
  //checks if email already exists on server
  const readUrl = `${baseUrl}/readUser`;
  const readUser = await axios.post(readUrl, { email, password, name: "", phone: "" });
  console.log("readUser response for update account", readUser);
  //if user does not exist, returns 404 error to keep update from creating a new user
  if (!readUser.data.email) {
    return { status: 404 };
  }
  //updates user with password
  const url = `${baseUrl}/updateUser`;
  const response = await axios.post(url, { email, password, name, phone });
  console.log("updateUser response for update account", response);
  return { status: response.status };
}
