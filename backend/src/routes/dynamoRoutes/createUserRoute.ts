import { Request, Response } from "express";
import { createDynamoUser } from "../../modules/dynamoDB/createDynamoUser";
import { Account } from "../../types/Account";

export async function createUserRoute(request: Request, response: Response) {
  const { name, phone, email, password } = request.body;

  const userToAdd: Account = {
    email: String(email),
    password: String(password),
    name: String(name),
    phone: String(phone),
  };
  const result = await createDynamoUser(userToAdd);

  response.send(result);
}
