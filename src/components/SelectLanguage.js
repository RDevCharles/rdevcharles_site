import React from "react";
import PY from "../assets/icons/python.png";
import JS from "../assets/icons/javascript.png";
import B from "../assets/icons/back.png";
import T from "../assets/images/time.png";
import W from "../assets/images/wen.png";
import TA from "../assets/images/tone.png";
import A from "../assets/images/apex.png";

const SelectLanguage = () => {
  const [iconsState, setIconState] = React.useState("block");
  const [pythonState, setPythonState] = React.useState("none");
  const [javascriptState, setJavascriptState] = React.useState("none");
  const [javascriptETCState, setJavascriptETCState] = React.useState("none");

  const pythonList = [
    {
      title: "Liquidity Sniper Bot",
      anchor: "https://github.com/RDevCharles/uni_bot/blob/main/uni.py",
    },
    {
      title: "Crypto Sales Twitter Bot",
      anchor:
        "https://github.com/RDevCharles/discord-to-twitter-bot/blob/main/%40treasure_listings_bot.py",
    },
    {
      title: "Alt Coin SOPR Tracker",
      anchor: "https://github.com/RDevCharles/sopr_logic",
    },
  ];

  const jsList = [
    {
      title: " Signin Landing Page",
      anchor: "https://romantic-bassi-849735.netlify.app",
      pic: T,
      picAlt: "splash-page",
    },
    {
      title: "Landing Page With Shopify Intergration",
      anchor: "https://www.wen.money",
      pic: W,
      picAlt: "splash-page",
    },
    {
      title: "Dynamic Signup Page",
      anchor: "https://eloquent-curie-58f1a3.netlify.app/",
      pic: TA,
      picAlt: "landing-page",
    },
    {
      title: "Website With Metamask *fuji testnet*",
      anchor: "https://dreamy-kalam-bc4d3b.netlify.app/",
      pic: A,
      picAlt: "metamask-page",
    },
  ];

  const selectStyles = {
    main: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      height: "auto",
    },
    icons: {
      margin: "4rem",
      display: iconsState,
      cursor: "pointer",
    },
    text: {
      marginTop: "1rem",
      color: "grey",
    },

    python_list: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "1rem 0rem 2rem 0rem",
      flexWrap: "wrap",
      textAlign: "center",
      display: pythonState,
    },
    javascript_list: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: "1rem 0rem 2rem 0rem",
      flexWrap: "wrap",
      display: javascriptState,
    },
    image: {
      width: "12rem",
    },

    back_button: {
      height: "2rem",
      margin: "1.5rem 0rem",
      cursor: "pointer",
    },

    list_container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },

    javascript_main_list: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    js_etc_btn: {
      display: javascriptETCState,
      width: "2rem",
      margin: "1.5rem 0rem",
      cursor: "pointer",
    },
    js_etc_header: {
      display: javascriptETCState,
      marginTop: "2rem",
    },
    projects_header: {
      martinTop: "2rem",
    },
  };

  return (
    <div id="work" style={selectStyles.main}>
      <div style={selectStyles.icons}>
        <a
          onClick={() => {
            setIconState("none");
            setJavascriptState("flex");
            setJavascriptETCState("flex");
          }}
        >
          <img src={JS} alt="javascript" />
        </a>
        <h5 style={selectStyles.text}>View Javascript Projects</h5>
      </div>

      <div style={selectStyles.icons}>
        <a
          onClick={() => {
            setIconState("none");
            setPythonState("block");
          }}
        >
          <img src={PY} alt="python" />
        </a>
        <h5 style={selectStyles.text}>View Python Projects</h5>
      </div>

      <ul id="python_list2" style={selectStyles.python_list}>
        <h4 style={selectStyles.projects_header}>Projects</h4>

        {pythonList.map((item) => {
          return (
            <li>
              <a style={selectStyles.text} href={item.anchor}>
                {item.title}
              </a>
            </li>
          );
        })}

        <img
          onClick={() => {
            setIconState("block");
            setPythonState("none");
            setJavascriptETCState("none");
          }}
          src={B}
          style={selectStyles.back_button}
          alt="back"
        />
      </ul>
      <div style={selectStyles.javascript_main_list}>
        <h4 style={selectStyles.js_etc_header}>Projects</h4>
        <ul id="javascript_list" style={selectStyles.javascript_list}>
          {jsList.map((item) => {
            return (
              <li style={selectStyles.list_container}>
                <img
                  style={selectStyles.image}
                  src={item.pic}
                  alt={item.picAlt}
                />
                <a style={selectStyles.text} href={item.anchor}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <img
          onClick={() => {
            setIconState("block");
            setJavascriptState("none");
            setJavascriptETCState("none");
          }}
          style={selectStyles.js_etc_btn}
          src={B}
          alt="back"
        />
      </div>
    </div>
  );
};

export default SelectLanguage;
