import React from "react";
import styles from "./page.module.css";
import { IoIosAddCircle } from "react-icons/io";

const CreateCase = () => {
    return (
        <>
            <h1>Create Case</h1>
            {/* <div className="col-sm-8"> */}
            <form action="">
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Case Title
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Case Title"
                        required
                    />
                </div>
                <div className="mb-3 d-flex">
                    <label className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`} for="exampleFormControlSelect1">Select Case Type</label>
                    <select className={`form-control ${styles.inputBox}`} id="exampleFormControlSelect1">
                        <option>Bankruptcy</option>
                        <option>Business</option>
                        <option>Civil</option>
                        <option>Criminal Defense</option>
                        <option>Divorce</option>
                        <option>DWI/ DUI</option>
                        <option>Employment</option>
                        <option>Estate Planning</option>
                        <option>Family</option>
                        <option>Immigration</option>
                        <option>Foreclosure</option>
                    </select>
                </div>
                <div className="form-group mb-3 d-flex">
                    <label className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`} for="exampleFormControlSelect1">Select Case Priority</label>
                    <select className={`form-control ${styles.inputBox}`} id="exampleFormControlSelect1">
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>

                    </select>
                </div>
                <div className={`form-group mb-3 d-flex`}>
                    {/* <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>Date Opened (&apos;dd/mm/yyyy&apos;)</span> */}
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>Date Opened</span>
                    <input
                        type="date"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Course Date"
                    />
                </div>
                <div className={`form-group mb-3 d-flex`}>
                    {/* <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>Date Closed <i>(&apos;dd/mm/yyyy&apos;)</i></span> */}
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>Date Closed</span>
                    <input
                        type="date"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Course Date"
                    />
                </div>
                {/* <div className={`mb-3 ${styles.inputField}`}>
                                    <span>Add a time for your course sessions:</span>
                                    <input
                                        type="time"
                                        className={`form-control ${styles.inputField}`}
                                        placeholder="Course Time"
                                    />
                                </div> */}
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Parties Involved
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Witness Details
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Contact Information
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Legal Representation
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Documents & Evidence
                    </span>
                    <input className={`form-control ${styles.inputBox}`} type="file" id="formFileMultiple" multiple />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Case Title
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
                <div className={`mb-3 d-flex`}>
                    <span className={`d-flex flex-wrap align-content-center ${styles.inputLabel}`}>
                        Case Title
                    </span>
                    <input
                        type="text"
                        className={`form-control ${styles.inputBox}`}
                        placeholder="Enter details here"
                        required
                    />
                </div>
            </form>
            <div className={`${styles.addCaseBtn}`}>
                <IoIosAddCircle />
                <span>Add Case</span>
            </div>
            {/* </div> */}


        </>
    );
};

export default CreateCase;