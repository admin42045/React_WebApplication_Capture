import home1 from "../img/home1.png";
import React from "react";

// import file from the style.js file and also name is passing inside of the AboutSection file is mindatory
import { About, Description, Image } from "../style";

// about section  or Hero section
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div classNam="hide">
            <h2>
              We work to make
              <br />
              Your<span> dream</span> come
            </h2>
          </div>
          <p>Creative the photography dream , option of the jeak.</p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img alt="home1" src={home1} />
      </Image>
    </About>
  );
};

export default AboutSection;
