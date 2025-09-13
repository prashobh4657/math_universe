import React from "react";
import "./Home.css";
import { classes } from "../data";
import Card from "../components/Card";

function Home() {
  let cards = [];
  for (let i = 0; i < classes.length; i++) {
    let course = classes[i];
    cards.push(
      <Card key={course.id} title={course.name} link={"/class/" + course.id} />
    );
  }

  return (
    <div className="home-container">
      <h1>Welcome to Math Universe!</h1>
      <p>Explore Mathematics from Class 1 to Class 12 and JEE.</p>
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default Home;
