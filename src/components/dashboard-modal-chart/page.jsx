import ReactApexChart from "react-apexcharts";

import React from "react";

const ModalChart = () => {
  var options = {
    series: [
      {
        name: "High ",
        data: [25, 50, 27, 50, 31, 50, 53, 30, 20, 45],
      },
      {
        name: "Medium",
        data: [25, 50, 27, 50, 31, 50, 53, 30, 20, 45],
      },
      {
        name: "Low",
        data: [75, 22, 57, 46, 21, 28, 23, 60, 70, 55],
      },
    ],

    colors: ["#D3212C", "#FF980E", "#069C56"],
    chart: {
      type: "bar",
      height: 200,

      foreColor: "#000",

      stacked: true,
      toolbar: {
        show: false,
      },
    },
    grid: {
      borderColor: "#d2d6d6",
      strokeDashArray: 6,
      yaxis: {
        lines: {
          show: true,
        }
      },

    },

    tooltip: {
      custom: undefined,
      fillSeriesColor: false,
      theme: 'light',
      markers: {
        width: 82,
        height: 2,
        strokeWidth: 0,
        strokeColor: "#000",
        fillColors: undefined,


      },

    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "15%",
        endingShape: "rounded",
        borderRadius: 8,
        color: "#000000",

        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,

            color: "#000000",
          },
        },
      },
    },
    legend: {
      show: true,
      fontFamily: "Abhaya Libre",
      fontWeight: "regular",
      position: "top",
      horizontalAlign: "undefined",
      offsetX: '100%',
      offsetY: -30,
      inverseOrder: true,
      

      markers: {
        width: 8,
        height: 8,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 8,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0,


      },
    },
    dataLabels: {
      enabled: false,
    },
    
    title: {
        text: "Cases by Priority",
        align: "left",
        style: {
          fontSize: "18px",
          fontFamily: "ADLaM Display",
          fontWeight: "regular",
        },
      },
    stroke: {
      curve: "straight",
    },

    xaxis: {

      categories: [
        "Bankruptcy",
        "Business",
        "Civil",
        "Criminal Defense",
        "Divorce",
        "DWI/DUI",
        "Employment",
        "Estate Planning",
        "Family",
        "Immigration",
        "Foreclosure",
      ],
      labels: {
        style: {
          colors: "#000",
          fontSize: "10px",
        },
      },
      axisBorder: {
        color: '#c0c2c2',
      },
    },
    yaxis: {
      tickAmount: 8,

      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#727a7b",
        },
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <div style={{margin: '0em auto 3em'}}>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        width={"100%"}
        height={"400"}
      />
    </div>
  );
};

export default ModalChart;
