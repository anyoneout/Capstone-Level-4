import React from "react";
import bfBananaSplitR from "../../../assets/images/BlackForestImages/bfBananaSplitR.jpg";
import bfBananaSplitI from "../../../assets/images/BlackForestImages/bfBananaSplitI.jpg";
import bfCapreseSaladR from "../../../assets/images/BlackForestImages/bfCapreseSaladR.jpg";
import bfCapreseSaladI from "../../../assets/images/BlackForestImages/bfCapreseSaladI.jpg";
import bfChickenKievR from "../../../assets/images/BlackForestImages/bfChickenKievR.jpg";
import bfChickenKievI from "../../../assets/images/BlackForestImages/bfChickenKievI.jpg";
import bfMinestroneR from "../../../assets/images/BlackForestImages/bfMinestroneR.jpg";
import bfMinestroneI from "../../../assets/images/BlackForestImages/bfMinestroneI.jpg";
import bfEggsBenedictR from "../../../assets/images/BlackForestImages/bfEggsBenedictR.jpg";
import bfEggsBenedictI from "../../../assets/images/BlackForestImages/bfEggsBenedictI.jpg";


export function CarouselBlackForest() {
  return (
    <>
      <div id="blackForestCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img src={bfCapreseSaladR} className="carousel-images" alt="..." />
              <img src={bfCapreseSaladI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfBananaSplitR} className="carousel-images" alt="..." />
              <img src={bfBananaSplitI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfChickenKievR} className="carousel-images" alt="..." />
              <img src={bfChickenKievI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfMinestroneR} className="carousel-images" alt="..." />
              <img src={bfMinestroneI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={bfEggsBenedictR} className="carousel-images" alt="..." />
              <img src={bfEggsBenedictI} className="carousel-images" alt="..." />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#blackForestCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#blackForestCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  )
}

