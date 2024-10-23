import React from "react";
import files from '../../assets/reports/file-icon.png';
import styles from './page.module.css';

const Files= ({fileName})=> {
    return(
        <>
            <div className={`d-flex flex-column gap-3 align-items-center ${styles.files}`}>
                <img src={files} alt="" />
                <span>{fileName}</span>
            </div>
        </>
    );
};

export default Files;