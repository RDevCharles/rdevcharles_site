import React from 'react';
import '../App.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const PopUp = (props) => {
    const [onPopUp, setOnPopUp] = React.useState("popUpContainer") 
 
    return (
        <div 

         className={props.newClassName}  >
            <h5 style={{color:'#41b883'}}>Hover over each image</h5>
    </div>
)
}

const styles= {
    container: {
        width: '12rem',
        height: '3rem',
        borderRadius: '10px',
        alignSelf:'center',
        backgroundColor: '#23d61277',
       
    },
    noPopUp: {
        width: '4rem',
        height: '4rem',
        backgroundColor: '#23d61277',
        display:'none'
    }
}

export default PopUp