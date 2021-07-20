import React from 'react';

import styled from 'styled-components';
import {About} from '../style'; 
const FaqSection =() => {
    return(
        <Faq>
            <h2>Any questions <span>FAQ</span></h2>

           <div className="questions">

            {/* 1. question  */}
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answere">
                    <p>I think this is not very tuffes.</p>
                    <p>
                        This is the question is basic and learning about which type of question we can ask.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>

            {/* 2. question  */}
            <div className="question">
                <h4>Different payment method</h4>
                <div className="answere">
                    <p>I think this is not very tuffes.</p>
                    <p>
                        This is the question is basic and learning about which type of question we can ask.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>


            {/* 3. question  */}
            <div className="question">
                <h4>What products do you offers?</h4>
                <div className="answere">
                    <p>I think this is not very tuffes.</p>
                    <p>
                        This is the question is basic and learning about which type of question we can ask.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>  

           </div> 

        </Faq>  /* end of faq section  */ 
    )

};


const Faq = styled(About) `
    display: block;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem; 
        width: 100%;
    }
    .question {
        padding; 3rem 0rem;
        cursor: pointer;

    }
    .answere{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;



export default FaqSection;