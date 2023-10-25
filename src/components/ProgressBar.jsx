import React from "react";
import PropTypes from "prop-types";
// import "../components/assets/css/progressBar.css";
import { useState, useEffect } from "react";

// Composant ProgressBar qui affiche une barre de progression pour une catégorie donnée
const ProgressBar = ({ category, score }) => {
  const progress = (score / 100) * 100;
  return (
    <div>
      <h3>{category.libelle}</h3>{" "}
      {/* Utilisez category.libelle ou la propriété correcte de votre objet catégorie */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#e0e0df",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "30px",
            backgroundColor: "#4caf50",
            borderRadius: "5px",
            textAlign: "center",
            lineHeight: "30px",
            color: "white",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
