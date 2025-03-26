import React, { useEffect, useState } from "react";
import { CarouselOpenAi } from "./components/CarouselOpenAi";
import { CarouselBlackForest } from "./components/CarouselBlackForest";
import { CarouselDalleIcon, CarouselFluxIcon } from "../modules/icons";

export default function Examples() {
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(function () {
    return componentDidUnmount();
  }, []);

  return (
    <div className="container navbar-width carousel-container mt-5">
      <div className="row mt-5">
        <div className="col-1 carousel-icons">
          <CarouselDalleIcon />
        </div>
        <div className="col-11">
          <CarouselOpenAi />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-1 carousel-icons">
          <CarouselFluxIcon />
        </div>
        <div className="col-11">
          <CarouselBlackForest />
        </div>
      </div>
    </div>
  );
  function componentDidMount(): void {
    setDidMount(true);
    console.log("The Examples page component has mounted");
    document.title = "Recipe Deconstructor - Examples";
  }

  function componentDidUpdate(): void {
    if (didMount) console.log("component has updated");
  }

  function componentDidUnmount(): () => void {
    function delayedUnmount(): void {
      console.log("component has unmounted");
    }
    return delayedUnmount;
  }
}
