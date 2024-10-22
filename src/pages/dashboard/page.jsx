import React from "react";
import ColumnChart from "../../components/dashboard-column-chart/page";
import ModalChart from "../../components/dashboard-modal-chart/page";
import DonutChart from "../../components/dashboard-donut-chart/page";
import StatBox from "../../components/dashboard-stat-box/page";

const Dashboard= ()=> {
    return(
        <>
        <div className="d-flex">
            <DonutChart />
            <StatBox />   
        </div>
        
        <ColumnChart />
        <ModalChart />
        
        </>
    );
};

export default Dashboard;