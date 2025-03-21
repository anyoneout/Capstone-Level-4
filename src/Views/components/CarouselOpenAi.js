import React from "react";
import oaBananaSplitR from "../../../assets/images/OpenAiImages/oaBananaSplitR.jpg";
import oaBananaSplitI from "../../../assets/images/OpenAiImages/oaBananaSplitI.png";
import oaCapreseSaladR from "../../../assets/images/OpenAiImages/oaCapreseSaladR.jpg";
import oaCapreseSaladI from "../../../assets/images/OpenAiImages/oaCapreseSaladI.jpg";
import oaChickenKievR from "../../../assets/images/OpenAiImages/oaChickenKievR.png";
import oaChickenKievI from "../../../assets/images/OpenAiImages/oaChickenKievI.png";
import oaMinestroneR from "../../../assets/images/OpenAiImages/oaMinestroneR.png";
import oaMinestroneI from "../../../assets/images/OpenAiImages/oaMinestroneI.png";
import oaEggsBenedictR from "../../../assets/images/OpenAiImages/oaEggsBenedictR.png";
import oaEggsBenedictI from "../../../assets/images/OpenAiImages/oaEggsBenedictI.png";

export function CarouselOpenAi() {
  return (
    <>
      <div
        id="openAiCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img
                src={oaCapreseSaladR}
                className="carousel-images"
                alt="..."
              />
              <img
                src={oaCapreseSaladI}
                className="carousel-images"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaBananaSplitR} className="carousel-images" alt="..." />
              <img src={oaBananaSplitI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaChickenKievR} className="carousel-images" alt="..." />
              <img src={oaChickenKievI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img src={oaMinestroneR} className="carousel-images" alt="..." />
              <img src={oaMinestroneI} className="carousel-images" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img
                src={oaEggsBenedictR}
                className="carousel-images"
                alt="..."
              />
              <img
                src={oaEggsBenedictI}
                className="carousel-images"
                alt="..."
              />
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#openAiCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#openAiCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}
