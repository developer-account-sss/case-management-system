import Chart from "react-apexcharts";
import styles from './page.module.css';

const DonutChart = (props) => {
  const week = [102, 75, 38];
  const month = [50, 50, 50];
  const year = [10, 50, 20];

  const getDataResult = () => {
    if (props.change === "week") {
      return week;
    } else if (props.change === "month") {
      return month;
    } else if (props.change === "year") {
      return year;
    } else {
      return week;
    }
  };
  const change = getDataResult();
  const options = {
    series: change,
    chart: {
      type: "donut",
    },
    
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 10,

        donut: {
          size: 75,
          
          labels: {
            show: true,
            value: {
              offsetY: -50,
              fontSize: "30px",
              fontFamily: "ADLaM Display",
              color: "#fff",
            },
            total: {
              offsetY: -30,
              label: "Total Cases",
              show: true,
              showAlways: true,
              fontSize: "14px",
              color: "#000000",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 0,
      
    },
    grid: {
      padding: {
        bottom: -120,
      },
      
      
    },
    title: {
      text: "Overview of Cases(Priority)",
      align: "left",
      style: {
        fontSize: "18px",
        fontFamily: "ADLaM Display",
        fontWeight: "regular",
        color:"#000"
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 210,
          },
          legend: {
            position: "top",
          },
        },
      },
    ],
    legend: {
      show: false,
    },
    labels: ["High", "Medium", "Low"],
    colors: ["#069C56", "#FF980E", "#D3212C"],
  };
  const series = change;
  return (
    <div style={{backgroundColor: '#f0f0f06e', padding: '1em', borderRadius: '8px'}}>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={320}
      />
      <div className={`d-flex flex-row gap-5 ${styles.statBoxes}`}>
        <div className={`${styles.stats} ${styles.high}`}>
            <h2>102</h2>
            <span>High Priority</span>
        </div>
        <div className={`${styles.stats} ${styles.medium}`}>
            <h2>75</h2>
            <span>Medium Priority</span>
        </div>
        <div className={`${styles.stats} ${styles.low}`}>
            <h2>38</h2>
            <span>Low Priority</span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
