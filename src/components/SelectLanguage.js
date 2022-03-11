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
          display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
      },

      javascript_main_list: {
        display: 'flex',
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
          marginTop:'2rem'
       
      },
      projects_header: {
          martinTop:'2rem'
      }
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
        <li>
          <a
            style={selectStyles.text}
            href="https://github.com/RDevCharles/uni_bot/blob/main/uni.py"
          >
            Liquidity Sniper Bot
          </a>
        </li>
        <li>
          <a
            style={selectStyles.text}
            href="https://github.com/RDevCharles/discord-to-twitter-bot/blob/main/%40treasure_listings_bot.py"
          >
            Crypto Sales Twitter Bot
          </a>
        </li>
        <li>
          <a
            style={selectStyles.text}
            href="https://github.com/RDevCharles/sopr_logic"
          >
            Alt Coin SOPR Tracker
          </a>
              </li>
              <img
                onClick={() => {
                    setIconState('block');
                      setPythonState('none');
                      setJavascriptETCState("none");
              }}
                  src={B} style={selectStyles.back_button} alt="back" />
          </ul>
          <div style={selectStyles.javascript_main_list}>
      <h4 style={selectStyles.js_etc_header}>Projects</h4>
      <ul id="javascript_list" style={selectStyles.javascript_list}>
        
              <li style={selectStyles.list_container}>
                  <img style={selectStyles.image} src={T} alt="splash-page"/>
          <a style={selectStyles.text} href="https://romantic-bassi-849735.netlify.app/">
            Signin Landing Page
          </a>
        </li>
                  <li style={selectStyles.list_container}>
                      
              <img style={selectStyles.image} src={W} alt="splash-page"/>
          <a style={selectStyles.text} href="https://www.wen.money/">
            Landing Page With Shopify Intergration
          </a>
        </li>
              <li style={selectStyles.list_container}>
              <img style={selectStyles.image} src={TA} alt="landing-page"/>
          <a style={selectStyles.text} href="https://eloquent-curie-58f1a3.netlify.app/">
            Dynamic Signup Page
          </a>
        </li>
              <li style={selectStyles.list_container}>
              <img style={selectStyles.image} src={A} alt="metamask-page"/>
          <a style={selectStyles.text} href="https://dreamy-kalam-bc4d3b.netlify.app/">
            Website With Metamask *fuji testnet*
          </a>
              </li>
              
              </ul>
              <img
                  onClick={() => {
                      setIconState('block');
                      setJavascriptState('none');
                      setJavascriptETCState("none");
                }}
                  style={selectStyles.js_etc_btn} src={B} alt="back" />
              </div>
    </div>
  );
};

export default SelectLanguage;
