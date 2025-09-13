import React from 'react';
import { Link } from 'react-router-dom';
import './Class1.css';

const Class1 = () => {
  const chapters = [
    'Chapter 1: Numbers and Number Names',
    'Chapter 2: Addition',
    'Chapter 3: Subtraction',
    'Chapter 4: Multiplication',
    'Chapter 5: Division',
    'Chapter 6: Shapes and Patterns',
    'Chapter 7: Time',
    'Chapter 8: Money',
    'Chapter 9: Measurement',
    'Chapter 10: Data Handling',
  ];

  return (
    <div className="class1-container">
      <h1>Class 1 Mathematics - Chapters</h1>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index} className="chapter-item">
            {chapter}
          </li>
        ))}
      </ul>
      <Link to="/math_universe" className="back-home">
        Go back to Home
      </Link>
    </div>
  );
};

export default Class1;
