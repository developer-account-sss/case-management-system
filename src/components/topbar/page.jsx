import React from "react";
import logo from '../../assets/topbar/Albany County.png';
import error from '../../assets/topbar/Error.png';
import video from '../../assets/topbar/Video Stabilization.png';
import download from '../../assets/topbar/Download Icon.png';
import styles from './page.module.css';
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Topbar = () => {
    return (
        <>
            <div className={`${styles.logoSection}`}>
                <img src={logo} alt="Albany County Logo" />
            </div>
            <div className={`d-flex justify-content-end gap-3 ${styles.secondSection}`}>
                <img src={error} alt="Error logo" />
                <img src={video} alt="Video logo" />
                <button>Sign out</button>
            </div>
            <div className={`${styles.thirdSection}`}>
                <div className="d-flex justify-content-between gap-5">
                    <div className={`${styles.search}`}>
                        <IoSearch />
                        <span>Search</span>
                    </div>
                    <div className="d-flex gap-5">
                        <div className={`${styles.createBtn}`}>
                            <IoIosAddCircle />
                            <span>Create</span>
                        </div>
                        <div className={`${styles.image}`}>
                            <img src={download} alt="download icon" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Topbar;