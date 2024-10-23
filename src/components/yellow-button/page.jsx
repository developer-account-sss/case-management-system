import React from "react";
import styles from "./page.module.css";
import { IoIosAddCircle } from "react-icons/io";

const YellowButton= ({buttonProp})=> {
    return(
        <>
            <button type="submit" className={`btn btn-primary ${styles.button}`} onClick={() => window.location.href = buttonProp.link}>
                <IoIosAddCircle />
                <span>{buttonProp.text}</span>
            </button>
        </>
    );
};

export default YellowButton;
