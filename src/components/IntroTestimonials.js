import React from 'react';
import '../App.css'
import "aos/dist/aos.css";




const IntroTestimonials = props => {

    return (
  
       <>
       <div
        data-aos="fade-left"
       
        data-aos-easing="ease-in-sine"
          data-aos-duration="2000" 
          
          style={{
              width: '18rem', height:'18rem', position: 'absolute', left: '30%', top: '7%',
          backgroundColor:'black', borderRadius:'9rem', display:'flex', alignItems:'center'
            }}>
          
              
            </div> 
            
       

        <div data-aos="fade-right"
        
         data-aos-easing="ease-in-sine"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
         style={{
           width: '18rem', height:'18rem', position: 'absolute', right: '30%', top: '7%',
           backgroundColor:'#41b883', borderRadius:'9rem',display:'flex', alignItems:'center'
        }}>

         
       
          
        </div>
       </>
)
}

export default IntroTestimonials