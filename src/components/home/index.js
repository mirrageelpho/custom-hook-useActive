import React from "react";
import useActive from "../../hooks/useActive";

export default () => {
  const [active, handleActive] = useActive();

  return (
    <>
      Click me!
      <button onClick={() => handleActive()}>
        {active ? "active" : "inactive"}
      </button>
    </>
  );
};
