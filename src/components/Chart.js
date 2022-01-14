import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

function StockChart({ series, signal }) {
  const options = {
    title: {
      text: signal,
    },
    series: series,
    legend: {
      enabled: true,
    },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
    </div>
  );
}

export default StockChart;
