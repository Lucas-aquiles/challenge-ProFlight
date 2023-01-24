import React from "react";
import { useState, useEffect } from "react";
import LogoDiv from "./LogoDiv";
import "../style/Carrusel.css";
import backButton from "../images/left.png";
import nextButton from "../images/right.png";

const Carrusel = () => {
  const product_Promotion = Array(4).fill(<LogoDiv />);
  const [aux, setAux] = useState(0);

  useEffect(() => {
    if (aux === -1) {
      setAux(3);
    } else if (aux === 4) {
      setAux(0);
    }
  }, [aux]);

  const atras = () => {
    setAux(aux - 1);
  };
  const next = () => {
    setAux(aux + 1);
  };

  return (
    <div className="container">
      <div className="centrar">
        <button className="leftButton" onClick={atras}>
          <img className="buttonImg" src={backButton} alt="Logo" />
        </button>

        <div className="arrayLogos">
          {product_Promotion.map((e, index) => (
            <div key={index} className={index === aux ? "alter" : "normal"}>
              {e}
            </div>
          ))}
        </div>
        <button className="rightButton" onClick={next}>
          <img className="buttonImg" src={nextButton} alt="Logo" />
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
