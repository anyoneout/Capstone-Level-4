import React from "react";
import { NavLink } from "react-router-dom";
import { NavDalleIcon, NavFluxIcon } from "../../modules/icons";
import SignInArea from "./SignInArea";
import "./CollapsibleNavbar.scss";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "anyoneout.github.io") rootPath = "/Capstone-Level-4";
  return (
    <nav className="navbar navbar-expand-lg mb-3 mt-4 py-0">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to={`${rootPath}/`}
                end
                className="nav-link home-nav-style"
              >
                <i className="bi-house-door-fill me-2"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${rootPath}/BfPage`} className="nav-link">
                <span className="me-2">
                  <NavFluxIcon />
                </span>
                Black Forest
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${rootPath}/OaPage`} className="nav-link">
                <span className="me-2">
                  <NavDalleIcon />
                </span>
                OpenAI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${rootPath}/Examples`} className="nav-link">
                <i className="bi bi-images me-2"></i>Examples
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`${rootPath}/About`} className="nav-link">
                <i className="bi-file-person me-2"></i>About
              </NavLink>
            </li>
            <SignInArea />
          </ul>
        </div>
      </div>
    </nav>
  );
}
