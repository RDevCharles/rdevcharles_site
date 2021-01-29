import React from 'react';

const TechnologiesCards = props => {
    return (
        <div style={styles.cardContainer}>
            <div style={styles.cardStyle}>
              <img style={styles.imgStyle} src={props.src} alt={props.alt} />
      </div>
        </div>
    )
}

export default TechnologiesCards


const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    
    
  },
  cardStyle: {
   display:'flex',
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderWidth: "1px",
    width: "12rem",
    height: "30vh",
    boxShadow: "0px 1px 5px 1px grey",
    margin: "4rem 1rem",
    
    borderRadius: "10px"
    },
    imgStyle: {
        width: "100%",
        maxWidth: "10rem"
    },

};