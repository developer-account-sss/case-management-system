import React from "react";
import Files from "../../components/files/page";

const Reports = () => {
    const fileName = ['Case File 1', 'Case File 2', 'Case File 3', 'Case File 4', 'Case File 5', 'Case File 6', 'Case File 7', 'Case File 8', 'Case File 9', 'Case File 10', 'Case File 11', 'Case File 12', 'Case File 13', 'Case File 14', 'Case File 15', 'Case File 16', 'Case File 17', 'Case File 18', 'Case File 19', 'Case File 20'];

    return (
        <>
            <h1>Case Reports</h1>
            <div className="d-flex flex-wrap flex-row justify-content-between">
                {
                    fileName.map((file, index) => (
                        <Files key={index} fileName={file} />
                    ))
                };
            </div>

        </>
    );
};

export default Reports;