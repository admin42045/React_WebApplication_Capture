import React from "react";

import { Link } from "react-router-dom";

//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import styled from "styled-components";

// Add the Page  Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show">
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Theracer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Goodtimes </h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
    color: #fff;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.2rem;
    background: #ccc;
    margin-bottom: 3rem;
    border-radius: 0.2rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
