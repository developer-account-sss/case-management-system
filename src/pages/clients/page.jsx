import React from "react";
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import YellowButton from "../../components/yellow-button/page";

const Clients = () => {
    const buttonProp= {text: "Add Client", link: "/"};

    const clientList = [
        { no: "1", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "2", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "3", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "4", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "5", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "6", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "7", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
        { no: "8", name: "John Doe", email: "john@example.com", phone: "555-555-5555", case: "Downtown Abby Case" },
    ]

    return (
        <>
        <div className="d-flex flex-row justify content-between align-items-center">
            <h1>Client Board</h1>
            <YellowButton buttonProp= {buttonProp}/>
        </div>
            
            <div className={styles.clientList}>

                {
                    clientList.map((client, index) => {
                        return (
                            <>
                                {/* <div className={`d-flex flex-row justify-content-around ${styles.client} ${styles.clientHeaders}`}>
                                    <span>Sr. number</span>
                                    <span>Name</span>
                                    <span>Email</span>
                                    <span>Phone</span>
                                    <span>Case Name</span>
                                </div> */}
                                <div key={index} className={`d-flex flex-row justify-content-around ${styles.client}`}>
                                    {/* <span>{client.no}</span> */}
                                    <span style= {{fontWeight: "700"}}>{client.name}</span>
                                    <span>{client.email}</span>
                                    <span>{client.phone}</span>
                                    <span><Link to= '/case-details/1'>{client.case}</Link></span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Clients;