import ReactApexChart from "react-apexcharts";

import React from "react";

const ColumnChart = () => {
  var options = {
    series: [
      {
        name: "Open Cases ",
        data: [25, 50, 27, 50, 31, 50, 53, 30, 20, 45],
      },
      {
        name: "Closed Cases",
        data: [75, 22, 57, 46, 21, 28, 23, 60, 70, 55],
      },
    ],

    colors: ["var(--darkYellow)", "var(--lightYellow)"],
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
      borderColor: "#00000012",
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
        strokeColor: "#fff",
        fillColors: undefined,
      },
      // custom: function({ series, seriesIndex, dataPointIndex, w}) {

      //   return (
      //     '<div class="arrow_box">' +
      //     "<span>" +
      //     w.globals.labels[dataPointIndex] +
      //     ": " +
      //     series[seriesIndex][dataPointIndex] +
      //     "</span>" +
      //     "</div>"
      //   );
      // }

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
      position: "top",
      horizontalAlign: "undefined",
      offsetX: 410,
      offsetY: -30,
      
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
      text: "Case Analytics",
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
    },
    yaxis: {
      tickAmount: 6,

      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#727A7B",
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
        height={360}
      />
    </div>
  );
};

export default ColumnChart;
