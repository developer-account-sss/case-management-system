import React from "react";
import ColumnChart from "../../components/dashboard-column-chart/page";
import ModalChart from "../../components/dashboard-modal-chart/page";
import DonutChart from "../../components/dashboard-donut-chart/page";
import StatBox from "../../components/dashboard-stat-box/page";
import FinancialOverview from "../../components/dashboard-financial-overview/page";

const Dashboard= ()=> {
    return(
        <>
        <FinancialOverview />
        <div className="d-flex" style={{margin: '3em auto'}}>
            <DonutChart />
            <StatBox />   
        </div>
        
        <ColumnChart />
        <ModalChart />
        
        </>
    );
};

export default Dashboard;