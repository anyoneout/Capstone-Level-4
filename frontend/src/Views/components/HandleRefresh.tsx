import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectHandleRefreshDidMount } from "../../redux/stateSelectors";
import { set } from "../../redux/store";

export function HandleRefresh(props) {
  const children = props.children;
  const navigateTo = useNavigate();

  const didMount = useSelector(selectHandleRefreshDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);

  if (didMount) return <>{children}</>;
  else return <></>;

  function componentDidMount(): void {
    const redirectPath = localStorage.getItem("redirect");

    if (redirectPath) {
      localStorage.removeItem("redirect");
      navigateTo(redirectPath);
    }

    setTimeout(() => dispatch(set.handleRefreshDidMount(true), 1000));
  }
}
