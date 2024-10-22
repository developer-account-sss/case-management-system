import React, { useContext, useState } from "react";
import styles from './sidebar.module.css';
import logo from '../../assets/sidebar/Logo.png';
import sidebar from '../../assets/sidebar/sidebarHide.png';
import dashboard from '../../assets/sidebar/Dashboard.png';
import cases from '../../assets/sidebar/Cases.png';
import clients from '../../assets/sidebar/Clients.png';
import taskList from '../../assets/sidebar/Tasklist.png';
import calendar from '../../assets/sidebar/Calendar.png';
import reports from '../../assets/sidebar/Reports.png';
import arrow from '../../assets/sidebar/Arrow.png';
import user from '../../assets/sidebar/User Profile.png';
import { CollapseMenu } from "../../Context";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const {collapseMenu, setCollapseMenu}= useContext(CollapseMenu);
    
    const [activeMenuItem, setActiveMenuItem] = useState(0);

    var count= 0;

    const navigate= useNavigate();

    const menuItems = [
        { icon: dashboard, label: 'dashboard' },
        { icon: cases, label: 'cases' },
        { icon: clients, label: 'clients' },
        { icon: taskList, label: 'tasks' },
        { icon: calendar, label: 'calendar' },
        { icon: reports, label: 'reports' }
    ];

    const handleMenuItemClick = (index, item) => {
        setActiveMenuItem(index);
        navigate(`/${item.label}/1`);
    };

    const setCount= ()=> {
        count++;
        rotateIcon(count);
    }

    const rotateIcon = (count) => {
        const sidebar = document.getElementById('sidebar-open');
        // console.log(count);

        if(count%2 !== 1) {
            sidebar.style.transform= "rotate(360deg)";
        }
        else {
            sidebar.style.transform= "rotate(180deg)";
        }

    }

        return (
            <>
            <div className="sideBarItems">
                <ul className={`list-group d-flex flex-column justify-content-around ${styles.listItems} ${styles.sidebar}`}>
                    <li className={`list-group-item ${styles.listItemHeader} ${styles.purpleBg}`}>
                        <div className="d-flex justify-content-between">
                            <img src={logo} alt="menu item icon" />
                            <img id= 'sidebar-open' src={sidebar} alt="menu item icon" onClick= {()=> {
                                setCollapseMenu(!collapseMenu);
                                setCount();
                            }}/>
                        </div>
                    </li>
<div className="navItems">
                    {menuItems.map((item, index) => (
                        
                        <li
                            key={index}
                            className={`list-group-item ${styles.listGroupItem} ${styles.purpleBg} ${activeMenuItem === index ? styles.activeMenuItem : ''}`}
                            onClick={() => handleMenuItemClick(index, item)}
                        >
                            <div className="d-flex gap-3">
                                <img src={item.icon} alt="menu item icon" />
                                <span>{item.label}</span>

                                {activeMenuItem === index && <span className={styles.redDot}></span>}
                            </div>
                        </li>
                    ))}
                    </div>

                    <li className={`list-group-item ${styles.listItemHeader} ${styles.purpleBg}`}>
                        <div className="d-flex justify-content-between">
                            <img src={user} alt="menu item icon" />
                            <div className="d-flex flex-column">
                                <span>Mr. John Doe</span>
                                <span>Senior Judge</span>
                            </div>
                            <img src={arrow} alt="menu item icon" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
