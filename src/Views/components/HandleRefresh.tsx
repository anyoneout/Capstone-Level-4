import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function HandleRefresh(props) {
  const children = props.children;
  const navigateTo = useNavigate();
  const [didMount, setDidMount] = useState<boolean>(false);

  useEffect(componentDidMount, []);

  if (didMount) return <>{children}</>;
  else return <></>;

  function componentDidMount(): void {
    const redirectPath = localStorage.getItem("redirect");

    if (redirectPath) {
      localStorage.removeItem("redirect");
      navigateTo(redirectPath);
    }

    setTimeout(() => setDidMount(true), 1000);
  }
}
