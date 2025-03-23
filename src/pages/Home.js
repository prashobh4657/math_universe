import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const classes = [
    { id: 1, name: "Class 1" },
    { id: 2, name: "Class 2" },
    { id: 3, name: "Class 3" },
    { id: 4, name: "Class 4" },
    { id: 5, name: "Class 5" },
    { id: 6, name: "Class 6" },
    { id: 7, name: "Class 7" },
    { id: 8, name: "Class 8" },
    { id: 9, name: "Class 9" },
    { id: 10, name: "Class 10" },
    { id: 11, name: "Class 11" },
    { id: 12, name: "Class 12" },
    { id: 13, name: "JEE" },
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Math Universe!</h1>
      <p>Explore Mathematics from Class 1 to Class 12 and JEE.</p>
      <div className="card-container">
        {classes.map((course) => (
          <div key={course.id} className="card">
            <Link to={`/class${course.id}`}>
              <h2>{course.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
