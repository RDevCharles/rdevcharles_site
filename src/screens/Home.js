import React from "react";
import "../App.css";
import HeaderImage from "../assets/images/dev.jpg";
import InfoCard from "../components/InfoCard";
import TechnologiesCards from "../components/TechnologiesCards";
import Form from "../components/Form";
import ReactLogo from "../assets/icons/logo512.png";
import FirebaseLogo from "../assets/icons/fb-logo-standard.png";
import Mongo from "../assets/icons/MongoDB_Logo.png";
import Node from "../assets/icons/nodejs.png";
import WordPress from "../assets/icons/WordPress.png";
import Tele from "../assets/images/tele.jpg";
import Coder from "../assets/images/code-env.jpg";
import Office from "../assets/images/office.jpg";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <div style={styles.mainContainer}>
        <img
          style={styles.headerImage}
          src={HeaderImage}
          alt={"header picture"}
        />
        <div style={styles.mainWrapper}></div>
      </div>

      <div id="about" style={styles.cardContainer}>
        <InfoCard
          initialImg={Tele}
          coverSrc={Tele}
          cardTitle={"Vision"}
          cardSummary={`The vision is just as important as the tech! 
            I have the ability to enter another persons ethos and treat their ideas
          as if they were my own. Executing that vision with pinpoint accuracy.`}
        />

        <InfoCard
          initialImg={Coder}
          coverSrc={Coder}
          cardTitle={"Who I Am"}
          cardSummary={
            "Being a self taught language agnostic coder allows me to deliver powerful products & applications using the right mix of front and back-end technologies."
          }
        />

        <InfoCard
          initialImg={Office}
          coverSrc={Office}
          cardTitle={"Future Proof"}
          cardSummary={
            "I follow a thorough process to make sure the  businesses that use my services can grow using solutions that scale and maintain their adaptability."
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <a href="https://apps.apple.com/us/app/whatslegal/id1543793062">
          <div className={"zoomOut"}>
            <h3
              style={{
                position: "absolute",
                zIndex: 2,
                color: "white",
                top: 40,
                left: "2rem"
              }}
              className={"someH3"}
            >
              WhatsLegal
            </h3>
            <p
              style={{
                position: "absolute",
                zIndex: 2,
                color: "white",
                top: 80,
                left: "1.8rem",
                textAlign: "left"
              }}
            >
              A blogging app designed to educate people on topics such as tech
              and cyber security. Download from the app store and give it a try.
            </p>
            <div className={"zoomIn"}></div>
          </div>
        </a>
        <a href="https://sablevue.com">
          <div className={"zoomOutB"}>
            <h3
              style={{
                position: "absolute",
                zIndex: 2,
                color: "white",
                top: 40,
                left: "2rem",
                textAlign: "left"
              }}
              className={"someH3"}
            >
              Sable Vue
            </h3>
            <p
              style={{
                position: "absolute",
                zIndex: 2,
                color: "white",
                top: 80,
                left: "1.8rem",
                textAlign: "left"
              }}
            >
              {" "}
              An alternative search engine for black businesses. Simply type in
              the name of a known brand and a black owned alternative will pop
              out.
            </p>
            <div className={"zoomInB"}></div>
          </div>
        </a>
      </div>

      <div style={styles.cardContainer}>
        <TechnologiesCards src={ReactLogo} />
        <TechnologiesCards src={WordPress} />
        <TechnologiesCards src={Mongo} />
        <TechnologiesCards src={FirebaseLogo} />
        <TechnologiesCards src={Node} />
      </div>

      <Form />
    </div>
  );
};

const styles = {
  mainWrapper: {
    backgroundColor: "#414345",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(288,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230575e6'/%3E%3Cstop offset='1' stop-color='%2341b883'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(47,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23232526'/%3E%3Cstop offset='1' stop-color='%23414345'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='3.9599999999999995'%3E%3Cpath transform='translate(-77 12) rotate(6 1409 581) scale(1.0088)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='1.32' transform='translate(-65 50) rotate(10 800 450) scale(1.0149)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(29 -105) rotate(95 401 736) scale(1.0149)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='1.2'%3E%3Cpath transform='translate(300 -10) rotate(2.5 150 345) scale(0.9696)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='2.64' transform='translate(-145 -130) rotate(108 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-244 76) rotate(18 1400 132) scale(0.95)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#414345",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23414345' stroke-width='0.8' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cuse fill='%23454749' href='%23s' y='2'/%3E%3Cuse fill='%23454749' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23494b4c' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23494b4c' href='%23s'/%3E%3Cuse fill='%234c4e50' href='%23s' x='2'/%3E%3Cuse fill='%234c4e50' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%23505254'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%23505254'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%23545658'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%23414345'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23585a5b'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%2341b883'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%2341b883'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(23.7) translate(-957.81 -718.35)'%3E%3Cg fill='%2341b883'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "95vh"
  },

  headerImage: {
    maxWidth: "320px",
    margin: "8rem 0rem 4rem 0rem",
    borderRadius: 250
  },
  imgStyle: {
    width: "100vw",
    height: "80vh"
  },
  imgText: {
    width: "25rem",
    color: "white",
    position: "absolute",
    top: "12rem",
    right: 80
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 0,
    backgroundColor: "white",
    position: "relative"
  }
};

export default Home;
