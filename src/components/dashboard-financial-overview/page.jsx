import React from "react";
import styles from './page.module.css';

const FinancialOverview= ()=> {
    return(
        <div className=  {`${styles.overview}`}>
            <h2>Financial Overview</h2>
            <div className={`d-flex justify-content-evenly`}>
                <div className={`${styles.stats} ${styles.first}`}>
                    <span>Trust Account Balance</span>
                    <h2>$0.00</h2>
                </div>
                <div className={`${styles.stats} ${styles.second}`}>
                    <span>Invoice Paid</span>
                    <h2>$0.00</h2>
                </div>
                <div className={`${styles.stats} ${styles.third}`}>
                    <span>Overdue Invoice Total</span>
                    <h2>$0.00</h2>
                </div>
                <div className={`${styles.stats} ${styles.fourth}`}>
                    <span>Unsent Invoice Total</span>
                    <h2>$0.00</h2>
                </div>
            </div>
        </div>
    );
};

export default FinancialOverview;