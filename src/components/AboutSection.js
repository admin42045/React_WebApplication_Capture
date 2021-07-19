
import home1 from '../img/home1.png';
import React from 'react'

const AboutSection = () => {
    return(
        <div>

         <div className="description">
             <div className="title">
                 <div classNam="hide">
                     <h2>We work to make</h2>
                 </div>
                 <div className="hide">
                     <h2>Your<span>dream</span> come</h2>
                 </div>
             <p>Creative the photography dream , option of the jeak.</p>
             <button>Contact Us</button>
             </div>
         </div>
         <div className="image">
             <img src={home1} alt="home 1 image" />
         </div>
        </div>
    )
}

export default AboutSection;