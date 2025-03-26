import React, { useEffect, useState } from "react";
import { ApiFluxIcon } from "../modules/icons";
import { handleBfFetch } from "../controllers/handleBfFetch";
import { recipeArray } from "../modules/recipeArray";
import { UserInfo } from "../modules/bfSaveUser";

export function BfPage() {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container api-container navbar-width mt-3">
      <UserInfo />
      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="d-flex black-forest-font justify-content-start">
            black forest labs.
          </div>
          <div className="d-flex justify-content-start mb-3">
            <ApiFluxIcon />
          </div>
          <div style={{ color: "red", fontSize: ".7rem", width: "230px" }}>
            *This model may timeout on the first attempt, if not currently warm
            on huggingface.co
          </div>
        </div>
        <div className="col-md-6">
          <form className="api-form">
            <fieldset>
              <legend>User login/ Huggingface token</legend>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Name"
                  aria-label="User Name"
                  aria-describedby="basic-addon1"
                  id="nameInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Email"
                  aria-label="User email"
                  aria-describedby="basic-addon2"
                  id="emailInput"
                />
              </div>
              <div className="input-group mb-2" data-bs-theme="dark">
                <input
                  type="text"
                  className="form-control api-inputs"
                  placeholder="Token"
                  aria-label="OpenAi Token Input"
                  aria-describedby="basic-addon2"
                  id="hfTokenInput"
                />
              </div>
            </fieldset>
            <br />
            <fieldset>
              <legend>Generate ingredients</legend>
              <div className="input-group" data-bs-theme="dark">
                {/*   added a recipe array for mapping */}
                <select
                  className="form-select"
                  id="chosenRecipe"
                  style={{ fontSize: ".8rem" }}
                >
                  <option value="">Select a Recipe...</option>
                  {recipeArray.map((recipe, index) => (
                    <option key={index} value={recipe}>
                      {recipe}
                    </option>
                  ))}
                </select>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="fetchButton"
                  onClick={handleBfFetch}
                >
                  Submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info"
            role="status"
            style={{ visibility: "hidden" }}
            id="spinnerOne"
          >
            <span className="visually-hidden"></span>
          </div>
          <img
            id="recipeAI"
            className="rounded-circle"
            style={{ maxWidth: "100%" }}
          />
        </div>

        <div className="col-12  d-none d-flex align-items-center justify-content-center">
          <i
            className="bi bi-arrow-right"
            id="secondArrowHTML"
            style={{
              fontSize: "3rem",
              color: "#f1ffb0",
              visibility: "hidden",
            }}
          ></i>
        </div>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="spinner-border text-info"
            role="status"
            style={{ visibility: "hidden" }}
            id="spinnerTwo"
          >
            <span className="visually-hidden"></span>
          </div>
          <img id="ingredientsAI" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-md-8">
          <div id="recipeIngredients"></div>
        </div>
      </div>
    </div>
  );

  function componentDidMount(): void {
    setDidMount(true);
    console.log("The Black Forest page component has mounted");
    document.title = "Recipe Deconstructor - Black Forest Flux";
  }

  function componentDidUpdate(): void {
    if (didMount) {
      console.log("component has updated");
    }
  }

  function componentDidUnmount(): () => void {
    return function delayedUnmount(): void {
      console.log("component has unmounted");
    };
  }
}
