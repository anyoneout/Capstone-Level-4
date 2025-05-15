import axios from "axios";
import { Account } from "../../types/Account";

export async function createAccount(account: Account): Promise<{ status: number }> {
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

  //checks if fields are all filled in
  if (!email || !password || !name || !phone) {
    return { status: 400 };
  }

  //creates new user and returns status code
  const createUrl = `${baseUrl}/createUser`;

  const response = await axios.post(createUrl, account);

  //if undefined or email not returned,
  if (!response.data || !response.data.email) {
    return { status: 409 };
  } else {
    return { status: response.status };
  }
}
