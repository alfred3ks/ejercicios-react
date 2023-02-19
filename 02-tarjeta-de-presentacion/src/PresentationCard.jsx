import React from "react";
import imagenAvatar from "./assets/layka.jpg";
import "./PresentationCard.css";

const PresentationCard = () => {
  let name = "Layka";

  return (
    <div className="presentation-card">
      <img className="avatar" src={imagenAvatar} alt="imagen de layka" />
      <h1>Hola soy, {name} estoy aprendiendo React</h1>
    </div>
  );
};

export default PresentationCard;
