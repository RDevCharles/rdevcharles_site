import React from "react";

const PrevWorkCard = props => {
  return (
    <div
      id="work"
      style={{
        backgroundColor: "black",
        textAlign: "left",
        width: "40rem",
        height: "30rem",
        position: "relative"
      }}
    >
      <a href={props.link}>
        <img
          className={"prevCardImage"}
          style={styles.imgStyle}
          src={props.src}
          alt={props.alt}
        />
      </a>
      <div style={styles.prevText}>
        <h3>{props.prevTitle}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  );
};

export default PrevWorkCard;

const styles = {
  cardContainer: {
    backgroundColor: "transparent",
    textAlign: "left",
    width: "40rem",
    height: "30rem",
    position: "relative"
  },

  imgStyle: {
    width: "100%",
    height: "100%",
    zIndex: 4
  },
  prevText: {
    margin: "3rem 2rem",
    position: "absolute",
    top: 0,
    color: "white"
  }
};
