import React from "react";
import styles from './page.module.css';

const StatBox= ()=> {
    return(
        <>
            <div className= {`d-flex flex-column justify-content-around ${styles.rightImage}`}>
                <div className="">
                    <h2>327</h2> 
                    <span>Total Cases</span>
                </div>
                <div className={`${styles.bottomBorder}`}></div>
                <div className="d-flex flex-column align-items-center">
                    <div className={`d-flex flex-row flex-wrap align-content-center gap-5 ${styles.caseStats}`}>
                        <div className="">
                            <h2>152</h2> 
                            <span>Open Cases</span>
                        </div>
                        <div className="">
                            <h2>175</h2> 
                            <span>Closed Cases</span>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottomBorder}`}></div>
                <div className="d-flex flex-column align-items-center">
                    <div className={`d-flex flex-row flex-wrap align-content-center gap-5 ${styles.casePriorityStats}`}>
                        <div className="">
                            <h2>101</h2> 
                            <span>High Priority Cases</span>
                        </div>
                        <div className="">
                            <h2>121</h2> 
                            <span>Medium Priority Cases</span>
                        </div>
                        <div className="">
                            <h2>105</h2> 
                            <span>Low Priority Cases</span>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
};

export default StatBox;