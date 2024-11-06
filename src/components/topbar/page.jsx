import React, { useState } from "react";
import logo from '../../assets/topbar/Albany County.png';
import notification from '../../assets/topbar/Doorbell.png';
import inboxImage from '../../assets/topbar/Letter.png';
import download from '../../assets/topbar/Download Icon.png';
import styles from './page.module.css';
import { IoSearch } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Topbar = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isInboxOpen, setIsInboxOpen] = useState(false);

    const notifications = [
        {message: "New case has been assigned to you.", time: "15 minutes ago"},
        {message: "Your document has been approved.", time: "15 minutes ago"},
        {message: "A meeting is scheduled for tomorrow.", time: "15 minutes ago"},
        {message: "You have received a new message.", time: "15 minutes ago"},
        {message: "System update will occur tonight.", time: "15 minutes ago"},
        {message: "Reminder: Complete your tasks.", time: "15 minutes ago"},
    ];
    
    const inbox = [
        {sender: "John Hopkins", message: "New case has been assigned to you. Take a look.", time: "15 minutes ago"},
        {sender: "John Hopkins", message: "Your document has been approved. Take a look.", time: "15 minutes ago"},
        {sender: "John Hopkins", message: "A meeting is scheduled for tomorrow. Take a look.", time: "15 minutes ago"},
        {sender: "John Hopkins", message: "You have received a new message. Take a look.", time: "15 minutes ago"},
        {sender: "John Hopkins", message: "System update will occur tonight. Take a look.", time: "15 minutes ago"},
        {sender: "John Hopkins", message: "Reminder: Complete your tasks. Take a look.", time: "15 minutes ago"},
    ];

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };
    
    const toggleInbox = () => {
        setIsInboxOpen(!isInboxOpen);
    };

    return (
        <>
            <div>
                <div className={`${styles.logoSection}`}>
                    <img src={logo} alt="Albany County Logo" />
                </div>
                <div className={`d-flex justify-content-end gap-3 ${styles.secondSection}`}>
                    <img 
                        src={notification} 
                        alt="Notification icon" 
                        onClick={toggleNotification}
                        style={{ cursor: "pointer" }} 
                    />
                    <img 
                        src={inboxImage} 
                        alt="Inbox icon" 
                        onClick={toggleInbox}
                        style={{ cursor: "pointer" }} 
                    />
                    <button><a href= '/'>Sign out</a></button>
                </div>
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
                            <span><Link to="/create-case">Create</Link></span>
                        </div>
                        <div className={`${styles.image}`}>
                            <img src={download} alt="download icon" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Popup */}
            {isNotificationOpen && (
                <div className={styles.popup}>
                    <div className={styles.popupContent}>
                        <h4>Notifications</h4>
                        <ul>
                            {notifications.map((notification, index) => (
                                <li className= "d-flex flex-row justify-content-between gap-5" key={index}>
                                    <span>{notification.message}</span>
                                    <span>{notification.time}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.showMoreBtn}>Show more</button>
                    </div>
                </div>
            )}

            {/* Email Popup */}
            {isInboxOpen && (
                <div className={`${styles.popup} ${styles.inbox}`}>
                    <div className={styles.popupContent}>
                        <h4>Inbox</h4>
                        <ul>
                            {inbox.map((inbox, index) => (
                                <li className= "d-flex flex-row justify-content-between gap-5" key={index}>
                                    <div className="d-flex flex-column">
                                        <div className={`d-flex flex-row justify-content-between gap-5 ${styles.riyaPyari}`}>
                                            <span>{inbox.sender}</span>
                                            <span>{inbox.time}</span>
                                        </div>
                                        <span>{inbox.message}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button className={styles.showMoreBtn}>Show more</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Topbar;
