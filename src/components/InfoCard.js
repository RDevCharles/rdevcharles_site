import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const InfoCard = props => {
const [showImage, setShowImge] = React.useState("noInfoCardType")


  return (
    <div onMouseEnter={() => {
      setShowImge("noInit")
    }}
    style={{ padding: "1rem" }} data-aos="zoom-in">
      <div className={"info-color"} style={styles.cardStyle}>
   
        <img
          className={"initPic"}
          style={styles.coverImgStyle}
          src={props.coverSrc}
          alt={props.alt}
        />
        <img className={`${showImage}`} style={{  position: "absolute", width: "18rem",
    height: "60vh", borderRadius: "10px "}} src={props.initialImg}/>

        <h4 className={`${showImage}`} style={{color:"white", zIndex:2, width:'20rem', position:'relative', top:'.8rem'}}>{props.cardTitle}</h4>

        <p className={`${showImage}`} style={styles.cardSummary}>
          {props.cardSummary}
        </p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  cardStyle: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: "1px",
    width: "18rem",
    height: "60vh",
    boxShadow: "0px 4px 10px 1px #191919",
    margin: "2rem 1rem",
    background: "",

    borderRadius: "10px"
  },
  imgStyle: {
    width: "100%",
    maxWidth: "1.5rem"
  },
  coverImgStyle: {
    backgroundColor: "white",
    textAlign: "center",
    borderWidth: "1px",
    width: "18rem",
    height: "60vh",
    backgroundImage: `url("./assets/images/spacex.jpg")`,
    zindex: "-2",
    borderRadius: "10px",
    position: "absolute",
    backgroundPosition: '50% top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '70% auto'
  },

  cardSummary: {
    padding: "2rem",
    pointerEvents: "none",
    color: "white",
    zIndex: 1,
    backgroundColor: "#41b883C4",
    
  }
};

export default InfoCard;

// add symbol then replace it when hovered