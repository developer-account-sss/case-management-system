import React from "react";
import styles from './page.module.css';

const Timeline = () => {
    return (
        <>
            <div className={`d-flex justify-content-between align-items-center ${styles.timeline}`}>
                <div className={`${styles.main}`}>
                    <div className={`d-flex flex-column align-items-center ${styles.circles}`}>
                        <h2>1</h2>
                        <span>Investigation</span>
                    </div>
                </div>

                <div className={`${styles.line} ${styles.activeLine}`}>
                    <hr />
                </div>

                <div className={styles.main}>
                    <div className={`d-flex flex-column align-items-center ${styles.circles}`}>
                        <h2>2</h2>
                        <span>Arraignment</span>
                    </div>
                </div>

                <div className={`${styles.line} ${styles.activeLine}`}>
                    <hr />
                </div>

                <div className={styles.main}>
                    <div className={`d-flex flex-column align-items-center ${styles.circles} ${styles.active}`}>
                        <h2>3</h2>
                        <span>Plea Bargaining</span>
                    </div>
                </div>

                <div className={styles.line}>
                    <hr />
                </div>

                <div className={styles.main}>
                    <div className={`d-flex flex-column align-items-center ${styles.circles}`}>
                        <h2>4</h2>
                        <span>Pre-Trial Motions</span>
                    </div>
                </div>

                <div className={styles.line}>
                    <hr />
                </div>

                <div className={styles.main}>
                    <div className={`d-flex flex-column align-items-center ${styles.circles}`}>
                        <h2>5</h2>
                        <span>Trial</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Timeline;
