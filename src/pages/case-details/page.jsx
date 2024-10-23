import React from "react";
import { Link } from "react-router-dom";
import edit from '../../assets/case-details/Edit Icon.png';
import styles from './page.module.css';
import styles2 from '../cases/page.module.css';
import Timeline from "../../components/timeline/page";

const CaseDetails = () => {
    return (
        <>
            <Timeline />
            <div className={`d-flex justify-content-between ${styles.topSection}`}>
                <button>
                    <Link to='/dashboard/1'>Go to Dashboard</Link>
                </button>
                <div className={`${styles.editIcon}`}>
                    <img src={edit} alt="edit icon" />
                </div>
            </div>

            <div className={`${styles.secondSection}`}>
                <div className="firstPart text-start d-flex justify-content-around">
                    <div className="details d-flex flex-column">
                        <span>Case Number</span>
                        <p>123456ABCD</p>
                    </div>

                    <div className="details d-flex flex-column">
                        <span>Case Name</span>
                        <p>Downtown Abby Case</p>
                    </div>
                </div>
            </div>

            <div className={`${styles.thirdSection}`}>
                <h3>Involved Parties</h3>
                <table className={`table table-striped table-bordered ${styles2.table}`}>
                    <thead>
                        <tr>
                            <th scope="col">Plaintiff</th>
                            <th scope="col">Defendant</th>
                            <th scope="col">Witness Details</th>
                            <th scope="col">Contact Information</th>
                            <th scope="col">Legal Representation</th>
                            <th scope="col">Attorney Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">John Smith</th>
                            <td>John Doe</td>
                            <td>Niya Scandel</td>
                            <td>John Smith</td>
                            <td>Niya Scandel</td>
                            <td>John Smith</td>
                        </tr>
                    </tbody>
                </table>
                
                <h3>Case Details</h3>
                <table className={`table table-striped table-bordered ${styles2.table}`}>
                <thead>
                        <tr>
                            <th scope="col">Case Type</th>
                            <th scope="col">Contact Information</th>
                            <th scope="col">Date Opened</th>
                            <th scope="col">Date Closed</th>
                            <th scope="col">Status</th>
                            <th scope="col">Priority level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Civil</th>
                            <td>+1 202-395-3442</td>
                            <td>12-04-2016</td>
                            <td>09-05-2023</td>
                            <td>Open</td>
                            <td>High</td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th scope="col">Plaintiff</th>
                            <th scope="col">Defendant</th>
                            <th scope="col">Witness Details</th>
                            <th scope="col">Contact Information</th>
                            <th scope="col">Legal Representation</th>
                            <th scope="col">Attorney Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">John Smith</th>
                            <td>John Doe</td>
                            <td>Niya Scandel</td>
                            <td>John Smith</td>
                            <td>Niya Scandel</td>
                            <td>John Smith</td>
                        </tr>
                    </tbody>
                    
                    <thead>
                        <tr>
                            <th scope="col">Court Name</th>
                            <th scope="col">Court Location</th>
                            <th scope="col">Judge Assigned</th>
                            <th scope="col">Hearing Dates</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Albany District Court</th>
                            <td>Manhattan Court House</td>
                            <td>Judge Hopkins</td>
                            <td>03-12-2018, 08-05-2019, 24-07-2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CaseDetails;