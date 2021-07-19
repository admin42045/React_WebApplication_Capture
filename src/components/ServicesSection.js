import React from 'react';

//importing the image
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
    return(
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> camera photography.</h2>
                 <div className="cards">


                    {/* 01. card */}
                     <div className="card">
                         <div className="icon">
                             <img src={clock} alt="clock" />
                             <h3>Effective way.</h3>
                         </div>
                         <p>A effective way to capture the image of simple way.</p>
                     </div>

                    {/* 02. card */}
                     <div className="card">
                         <div className="icon">
                             <img src={diaphragm} alt="clock" />
                             <h3>Effective way.</h3>
                         </div>
                         <p>A effective way to capture the image of simple way.</p>
                     </div>

                    {/* 03. card */}
                     <div className="card">
                         <div className="icon">
                             <img src={money} alt="clock" />
                             <h3>Effective way.</h3>
                         </div>
                         <p>A effective way to capture the image of simple way.</p>
                     </div>

                    {/* 04. card */}
                     <div className="card">
                         <div className="icon">
                             <img src={teamwork} alt="clock" />
                             <h3>Effective way.</h3>
                         </div>
                         <p>A effective way to capture the image of simple way.</p>
                     </div>


                 </div>
            </div>
            <div className="home2">
                <img src={home2} alt="home 2" />
            </div>

        </div>
    )
}

export default ServicesSection;