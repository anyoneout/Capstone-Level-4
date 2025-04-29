import React, { useEffect } from "react";

import { CreateAccountForm } from "./crudForms/CreateAccountForm";
import { DeleteAccountForm } from "./crudForms/DeleteAccountForm";
import { ReadAccountForm } from "./crudForms/ReadAccountForm";
import { UpdateAccountForm } from "./crudForms/UpdateAccountForm";
import { useDispatch, useSelector } from "react-redux";
import { selectAwsFormsDidMount } from "../redux/stateSelectors";
import { set } from "../redux/store";

export default function AwsForms() {
  const didMount = useSelector(selectAwsFormsDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center m-5">
          <div className="d-flex justify-content-center mb-4">
            <h2>CRUD Forms</h2>
          </div>
          <div className="col-10 m-2">
            <CreateAccountForm />
            <ReadAccountForm />
            <UpdateAccountForm />
            <DeleteAccountForm />
          </div>
        </div>
      </div>
    </main>
  );
  function componentDidMount(): void {
    dispatch(set.awsFormsDidMount(true));
    console.log("The AWS Forms page component has mounted");
    document.title = "Recipe Deconstructor - AWS Forms";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component had updated");
  }

  function componentDidUnmount(): () => void {
    function delayedUnmount(): void {
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
