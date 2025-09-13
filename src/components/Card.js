// src/components/Card.js
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <Link to={link}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default Card;
