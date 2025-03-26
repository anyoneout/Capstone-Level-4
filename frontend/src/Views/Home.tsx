import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HomeDalleIcon, HomeFluxIcon } from "../modules/icons";
import Card from "./components/Card";
import bfBananaSplitR from "../../assets/images/BlackForestImages/bfBananaSplitR.jpg";
import bfBananaSplitI from "../../assets/images/BlackForestImages/bfBananaSplitI.jpg";
import oaBananaSplitR from "../../assets/images/OpenAiImages/oaBananaSplitR.jpg";
import oaBananaSplitI from "../../assets/images/OpenAiImages/oaBananaSplitI.png";
import bfCapreseSaladR from "../../assets/images/BlackForestImages/bfCapreseSaladR.jpg";
import bfCapreseSaladI from "../../assets/images/BlackForestImages/bfCapreseSaladI.jpg";
import oaCapreseSaladR from "../../assets/images/OpenAiImages/oaCapreseSaladR.jpg";
import oaCapreseSaladI from "../../assets/images/OpenAiImages/oaCapreseSaladI.jpg";

export function Home() {
  // initialize didMount state variable and set it to false
  const [didMount, setDidMount] = useState<boolean>(false);

  //handles component phases
  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <main>
      <div className="container navbar-width">
        <div className="row row-cols-lg-auto mt-lg-5">
          <div className="col-12 mt-5">
            <p
              className="display-2 fw-bold mt-lg-5 mx-4 "
              style={{ color: "#fff78a" }}
            >
              Recipe Deconstructor
            </p>
          </div>
          <div className="col-12 col-lg-7">
            <h1
              className="display-6 mx-4"
              style={{ color: "rgb(238, 238, 238)" }}
            >
              Separate dishes into their ingredients
            </h1>
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center mt-4 mt-lg-0 justify-content-start">
            <span className="try-here ms-4 ms-lg-0">
              Try here!
              <Link
                to="BfPage"
                className="ms-3 btn btn-sm btn-outline-info try-buttons"
              >
                Flux
              </Link>
              <Link
                to="OaPage"
                className="btn btn-sm btn-outline-info try-buttons "
              >
                Dall-E-3
              </Link>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div className="card icon bg-black d-flex text-white align-items-center justify-content-center pt-5">
              <HomeFluxIcon />
            </div>
            <div className="image-border mt-5">
              <Card
                src={bfBananaSplitR}
                id="bfBsR"
                tooltipTitle={"<b>Banana Split</b><br><i>recipe</i>"}
                tooltipPlacement="left"
              />
              <Card
                src={bfBananaSplitI}
                id="bfBsI"
                tooltipTitle={"<b>Banana Split</b><br><i>ingredients</i>"}
                tooltipPlacement="left"
              />
            </div>
            <div className="image-border mt-5">
              <Card
                src={bfCapreseSaladR}
                id="bfCsR"
                tooltipTitle={"<b>Caesar Salad</b><br><i>recipe</i>"}
                tooltipPlacement="left"
              />
              <Card
                src={bfCapreseSaladI}
                id="bfCsI"
                tooltipTitle={"<b>Caesar Salad</b><br><i>ingredients</i>"}
                tooltipPlacement="left"
              />
            </div>
          </div>
          <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
            <div className="card icon bg-black text-white d-flex align-items-center justify-content-center pt-5">
              <HomeDalleIcon />
            </div>
            <div className="image-border mt-5">
              <Card
                src={oaBananaSplitR}
                id="oaBsR"
                tooltipTitle={"<b>Banana Split</b><br><i>Recipe</i>"}
                tooltipPlacement="right"
              />
              <Card
                src={oaBananaSplitI}
                id="oaBsI"
                tooltipTitle={"<b>Banana Split</b><br><i>ingredients</i>"}
                tooltipPlacement="right"
              />
            </div>
            <div className="image-border mt-5">
              <Card
                src={oaCapreseSaladR}
                id="oaCsR"
                tooltipTitle={"<b>Caesar Salad</b><br><i>Recipe</i>"}
                tooltipPlacement="right"
              />
              <Card
                src={oaCapreseSaladI}
                id="oaCsI"
                tooltipTitle={"<b>Caesar Salad</b><br><i>ingredients</i>"}
                tooltipPlacement="right"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  //component mounts
  function componentDidMount() {
    setDidMount(true);
    console.log("The Home page component has mounted");
    document.title = "Recipe Deconstructor - Home";
    //Tooltip initialization
    const bfBsR = document.getElementById("bfBsR");
    new bootstrap.Tooltip(bfBsR, { html: true, sanitize: false });
    const bfBsI = document.getElementById("bfBsI");
    new bootstrap.Tooltip(bfBsI, { html: true, sanitize: false });
    const bfCsR = document.getElementById("bfCsR");
    new bootstrap.Tooltip(bfCsR, { html: true, sanitize: false });
    const bfCsI = document.getElementById("bfCsI");
    new bootstrap.Tooltip(bfCsI, { html: true, sanitize: false });
    const oaBsR = document.getElementById("oaBsR");
    new bootstrap.Tooltip(oaBsR, { html: true, sanitize: false });
    const oaBsI = document.getElementById("oaBsI");
    new bootstrap.Tooltip(oaBsI, { html: true, sanitize: false });
    const oaCsR = document.getElementById("oaCsR");
    new bootstrap.Tooltip(oaCsR, { html: true, sanitize: false });
    const oaCsI = document.getElementById("oaCsI");
    new bootstrap.Tooltip(oaCsI, { html: true, sanitize: false });
  }
  //component updates
  function componentDidUpdate() {
    if (didMount) console.log("The component has updated");
  }
  //component unmounts
  function componentDidUnmount() {
    function delayedUnmount() {
      console.log("The component has unmounted");
    }
    return delayedUnmount;
  }
}
