import React, { useState } from "react";
import { CreateAccountForm } from "./crudForms/CreateAccountForm";
import { UpdateAccountForm } from "./crudForms/UpdateAccountForm";
import { DeleteAccountForm } from "./crudForms/DeleteAccountForm";
import { ReadAccountForm } from "./crudForms/ReadAccountForm";

export default function AwsForms() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateAccountForm />
            <UpdateAccountForm />
            <DeleteAccountForm />
            <ReadAccountForm />
          </div>
        </div>
      </div>
    </main>
  );
}
