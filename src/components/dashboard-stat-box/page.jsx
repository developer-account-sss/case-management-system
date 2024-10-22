import React from "react";
import styles from './page.module.css';

const StatBox= ()=> {
    return(
        <>
            <div className= {`d-flex flex-column justify-content-around ${styles.rightImage}`}>
                <div className="">Total Cases: 327</div>
                <div className="d-flex flex-column">
                    <div className={`d-flex flex-row flex-wrap align-content-center${styles.caseStats}`}>
                        <div className="">Open Cases: 152</div>
                        <div className="">Closed Cases: 175</div>
                    </div>
                    <div className={`d-flex flex-row flex-wrap align-content-center${styles.casePriorityStats}`}>
                        <div className="">High Priority Cases: 101</div>
                        <div className="">Medium Priority Cases: 121</div>
                        <div className="">Low Priority Cases: 105</div>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
};

export default StatBox;