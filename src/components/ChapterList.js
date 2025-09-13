// src/components/ChapterList.js
import React from "react";
import { Link } from "react-router-dom";

const ChapterList = ({ title, chapters }) => {
  let chapterItems = [];
  for (let i = 0; i < chapters.length; i++) {
    chapterItems.push(
      <li key={i} className="chapter-item">
        {chapters[i]}
      </li>
    );
  }

  return (
    <div className="class1-container">
      <h1>{title}</h1>
      <ul>{chapterItems}</ul>
      <Link to="/math_universe" className="back-home">
        Go back to Home
      </Link>
    </div>
  );
};

export default ChapterList;
