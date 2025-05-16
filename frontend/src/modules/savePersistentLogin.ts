import { Credentials } from "../types/Credentials";

export function savePersistentLogin(email: string, password: string): void {
  const currentTimeStamp = Date.now();

  const credentials: Credentials = {
    email,
    password,
    timestamp: currentTimeStamp,
  };

  const loginString = JSON.stringify(credentials);
  localStorage.setItem("credentials", loginString);
}
