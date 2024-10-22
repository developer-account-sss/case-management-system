import Chart from "react-apexcharts";
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
    <div style={{margin: '5em auto 3em'}}>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height={320}
      />
    </div>
  );
};

export default DonutChart;
