import React from "react";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{ width: "90%", height: "auto", backgroundColor: "black" }}
    >
      <img
        data-bs-custom-class="custom-tooltip"
        data-bs-placement={props.tooltipPlacement}
        data-bs-title={props.tooltipTitle}
        data-bs-toggle="tooltip"
        id={props.id}
        src={props.src}
        className="card-img img-fluid home-image"
        alt="..."
      />
    </div>
  )
}