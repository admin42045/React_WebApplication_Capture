import React from "react";

//importing the image
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import styled from "styled-components";
// import of style.js file
import { About, Image } from "../style";
const ServicesSection = () => {
  return (
    <Services>
      <Descriptions>
        <h2>
          High <span>quality</span> camera photography.
        </h2>
        <Cards>
          {/* 01. card */}
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Effective way.</h3>
            </div>
            <p>A effective way to of simple way.</p>
          </Card>

          {/* 02. card */}
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock" />
              <h3>Effective way.</h3>
            </div>
            <p>A effective way to of simple way.</p>
          </Card>

          {/* 03. card */}
          <Card>
            <div className="icon">
              <img src={money} alt="clock" />
              <h3>Effective way.</h3>
            </div>
            <p>A effective way to of simple way.</p>
          </Card>

          {/* 04. card */}
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock" />
              <h3>Effective way.</h3>
            </div>
            <p>A effective way to of simple way.</p>
          </Card>
        </Cards>
      </Descriptions>
      <Images>
        <img src={home2} alt="home 2" />
      </Images>
    </Services>
  );
};

// styled components

const Services = styled(About)`
  h2 {
    padding-bottom: 4rem;
  }

  p {
    width: 70%;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 15rem;
  h3 {
    margin-left: 0.5rem;
    background: #fff;
    color: #000;
    padding: 0.2rem 0.4rem;
  }
  .icon {
    display: flex;

    align-items: center;
  }
`;

const Images = styled(Image)`
  padding: 5rem 0rem 0rem 0rem;
  img {
    overflow: hidden;
    object-flow: cover;
    min-height: 100%;
    min-width: 100%;
  }
`;

const Descriptions = styled.div`
  flex: 1;
  padding-right: 4rem;
`;

export default ServicesSection;
