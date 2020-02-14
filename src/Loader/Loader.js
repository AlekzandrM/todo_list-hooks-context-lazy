import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
