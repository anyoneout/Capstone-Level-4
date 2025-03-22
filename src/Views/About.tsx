import React, { useEffect, useState } from "react";
import ingredientsVideo from "../../assets/videos/ingredients.mp4";

export function About() {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="container mt-5">
      <div className="row mt-0 mt-md-5"></div>
      <div className="row justify-content-center spacing mt-sm-5">
        <div className="col-8 col-md-6 col-lg-5 col-xl-3">
          <div
            className="card text-center"
            style={{ backgroundColor: "black" }}
          >
            <div className="col-12 d-flex mt-5 justify-content-center">
              <video className="video-small" autoPlay muted loop>
                <source src={ingredientsVideo} type="video/mp4"></source>
              </video>
            </div>
            <div className="card-body">
              <div className="card-title display-6 d-flex justify-content-center text-light">
                Chris Ali
              </div>
              <div className="card-text text-light justify-content-center d-flex">
                Student
              </div>
              <div className="card-text justify-content-center d-flex">
                <a href="mailto: chrisdafur@gmail.com" className="text-info">
                  chrisdafur@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function componentDidMount(): void {
    setDidMount(true);
    console.log("The About page component has mounted");
    document.title = "Recipe Deconstructor - About";
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
