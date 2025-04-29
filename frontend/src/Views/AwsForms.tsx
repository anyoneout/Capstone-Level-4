import React from "react";
import { CreateAccountForm } from "./crudForms/CreateAccountForm";
import { UpdateAccountForm } from "./crudForms/UpdateAccountForm";
import { DeleteAccountForm } from "./crudForms/DeleteAccountForm";
import { ReadAccountForm } from "./crudForms/ReadAccountForm";

export default function AwsForms() {
  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center m-5">
          <div>
            <h2>CRUD forms</h2>
          </div>
          <div className="col-10 m-2">
            <CreateAccountForm />
            <br />
            <ReadAccountForm />
            <br />
            <UpdateAccountForm />
            <br />
            <DeleteAccountForm />
          </div>
        </div>
      </div>
    </main>
  );
}
