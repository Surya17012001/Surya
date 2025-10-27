import React from "react";

const projects = [
  {
    img: "https://t3.ftcdn.net/jpg/08/71/60/32/240_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg",
    text: "Project 1: Web Development",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRsVPFg5ubK2KN4S_pZGRsPJR6E2K7Veuw&s",
    text: "Project 2: Java Full Stack",
  },
  {
    img: "https://ichef.bbci.co.uk/images/ic/480xn/p0kjf5ml.jpg",
    text: "Project 3: Machine Code",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      {projects.map((p, i) => (
        <div className="project" key={i}>
          <img src={p.img} alt={`Project ${i + 1}`} />
          <div className="overlay">{p.text}</div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
