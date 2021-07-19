import React from 'react';

const FaqSection =() => {
    return(
        <div className="faq">
            <h2>Any questions <span>FAQ</span></h2>

            {/* 1. question  */}
            <div className="question">
                <h4>Daily Schedule</h4>
                <div className="answere">
                    <p>I think this is not very tuffes.</p>
                    <p>
                        This is the question is basic and learning about which type of question we can ask.
                    </p>
                </div>
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
            </div>


        </div>
    )

}

export default FaqSection;