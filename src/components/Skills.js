import React from "react";
import "../App.css";

const Skills = () => {
  const list = [
    {
      title: "Skills",
      categories: [
        "Front-end Developement",
        "Back-end Developement",
        "Web Scrapping",
        "Prototyping",
      ],
    },

    {
      title: "Tools",
      categories: ["Vim", "Sketch", "Inkscape", "Lightroom"],
    },

    {
      title: "Languages",
      categories: [
        "Javascript (React Js)",
        "Node",
        "Python",
        "Html/CSS",
        "Headless Cms",
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "base-line",
        margin: "10rem 0rem 2rem 0rem",
        flexWrap: "wrap",
      }}
    >
      {list.map((item) => {
        return (
          <ul>
            <h4>{item.title}</h4>
            {item.categories.map((cat) => {
              return <li> {cat} </li>;
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Skills;
